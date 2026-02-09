---
description: All the nerdy technical details of how things work.
sidebar_position: 10
---

# Technical Details
Ok so how does all this even work? Here's a bunch of nerdy technical details going over how thigns work, the issues I faced, and how I resolved them.

## NDMF Plugin
Most of the changes done to our avatar are done by a custom NDMF plugin. There's a bunch of different passes that all do their own things. You can read more about what they are what they do in [Features](./features)

## Harmony Patching the Bundle Export
Mismatching Unity asset bundle versions isn't necessarly an issue, after all, VRChat has been doing it for years...
It supports older uploads from versions such as Unity 2019 on it's newer Unity 2022 just fine, at least for now.

It makes sense that Unity would have some asset bundle backwards compatibility built in, or at least documented and accounted for. It also makes sense for it to not work the other way around.

So what do I actually do to make bundles built in Unity 2022 work? Not much actually. It turns out that, all UMod (the modding framework Warudo uses) does to check if a bundle should be loaded, is a Unity version string inside the mod bundle itself. Yep, that's really it.

I patch the method that gets the Unity version to store inside the bundle to always return the target Unity version that Warudo uses, in this case Unity 2021. And, by sheer luck, it all loads and works almost flawlesly.


## Unity 2021-2022 and Constraints
When I said almost flawlessly, I meant that I personally only ran into some issues. One of these issues is that constraints export deactivated. This is because between Unity 2021 and 2021, the active property of constraints was renamed from `m_IsContraintActive` (misspelled) to `m_Active`.

This isn't an issue when newer versions of Unity read this property on something like a Prefab, because Unity keeps track of property changes and accounts for them for backwards compatibility. In case of forward compatibility, the property is not recognised and ignored.

So, to fix this I run an NDMF pass that attaches a simple script to all objects with Constraints on them. This script enables the Constraint on Start() then removes itself. It also (non-destructively) modifies all animation clips that use the new name to use the old one instead, making the animation work correctly in either version of Unity.

## Unity 2021-2022 and Material Swap Animations
Another issue I recently discovered is animations that swap materials on renderers. For whatever reason, having one of these in an animator on your avatar instantly crashes Warudo upon loading the avatar. That's.. not ideal, so I came up with a workaround.

A ndmf pass is run to check all animations for material swaps. If one is found, a couple of things happen. First, a MaterialSwapManager script is attached to the GameObject the animator that animator is on. Then, all material swaps in animations on that are registered with the material swap manager.

The manager stores a list of material swaps, including the renderer, the material and the material slot in said renderer. Upon registering a swap in the manager, an index for that swap is returned. The animation clip is then modified to remove the material swap and instead replace it with an animation event asking the manager script to perform the swap using the earlier returned index.

This seems to work pretty well since material swap keyframes can't blend between each other anyway.


## Harmony Patching UMod to Include External Scripts
For this usecase, UMod has a very annoying limitation. It only includes files inside your mod's export folder in it's mod builds, so to include this script, that's meant to be uploaded on multiple avatars, in every avatar mod export, I would need to either duplicate and rename a copy to put into every export folder (causing script recompiles), or move the single script around every mod folder when a build needs to happen. Sounds reasonable, but in case of a failure, I could lose track of this script and the whole feature would stop working.

So, what I do instead is harmony patch UMod to include scripts into it's mod build from *anywhere*, if the script is on the avatar (or prop) and if the script is in a folder called `BuildIncluded` or a subfolder of it.

This means we're not getting and stray scripts included if they're unused, and it also means we don't need to worry about duplicating or moving scripts around. It just works™


## Fixing External Scripts Not Working in Warudo Build
Warudo supports exporting avatars, props and environments with [custom scripts](https://docs.warudo.app/docs/modding/mod-sdk#custom-scripts) attached.

Annoyingly tho, by default, custom scripts don't seem to get linked correctly after exporting. This seems to happen because custom scripts don't get added to the Assembly-CSharp.csproj file. To fix this, users can usually go to `Edit` > `Preferences` > `External Tools` and change the `External Script Editor` from `Open by File Extension` to either `Visual Studio` or `Rider` (depending on which one is installed), then clicking `Regenerate Project Files`. If the user doesn't code, they probably don't have any other options in there. If they do, during export, their code editor will be changed to `Visual Studio`, which should fix this issue.

Additionally, Assembly-CSharp.csproj will be edited to include the needed scripts from `BuildIncluded` folders. This is necessary because scripts inside custom assemblies don't normally get included in a build, and because scripts inside VPM/UPM Packages always need to be in an assembly my own compatibility scripts would otherwise not be added to the build.

## Shaders
Shaders. **Shaders**. Where do I even begin... I haven't noticed issues with shaders for the longest time, but now that I've looked over it, I'm confident in saying that assets built in Unity 2022 and loaded in Warudo's Unity 2021 don't load shaders correctly. When using Standard shader for example, neither shadows, normal maps or emissions work.
Seemingly, shader variants (or everything that uses [shader keywords](https://docs.unity3d.com/2022.3/Documentation/Manual/shader-keywords.html)) don't get loaded, and nothing I tried could fix it, with a few weird exceptions.

I tried creating a [ShaderVariantCollection](https://docs.unity3d.com/2022.3/Documentation/ScriptReference/ShaderVariantCollection.html) manually and including it in the build. I tried changing the shader variant stripping settings, I tried changing the always included shaders list. None of these made any difference, except when dealing with Standard shader. Strangely enough, including Standard shader in the always included list *does* make the shader work correctly in Warudo, but this only seems to apply to built-in shaders [by design](https://discussions.unity.com/t/problem-about-shaders-in-asset-bundle-and-graphics-always-included-shaders/746555/2).

Currently, as of [v1.5.2](/updates/warudo-exporter-1-5-2) a script gets added to the avatar that replaces all materials' shaders with the ones found in Warudo, if they exist. This is done by simply using [Shader.Find()](https://docs.unity3d.com/2022.3/Documentation/ScriptReference/Shader.Find.html) and checking every material's shader name, then if it's found, replacing the shader. This fixes built in shaders such as Standard, but doesn't work on custom shaders such as Poiyomi or Liltoon.

Speaking of [Poiyomi](https://www.poiyomi.com/), if you've been using Poiyomi you probably haven't even noticed any of the issues  describe above. This is because Poiyomi doesn't make as much use of shader keywords as other shaders (such as standard), it works around that by creating an optimized copy of the shader during it's [locking in process](https://www.poiyomi.com/general/locking), for every material, which removes all the unused shader features. It does still suffer from some of the same issues as other shaders tho, such as not being able to self-shadow.


I'm planning on fixing this issue in the future by providing a `Compatibility Export` option, which will set up a Unity 2021 project for you and export your avatar into it. This project will in turn build the Warudo mod bundle, hopefully avoiding most if not all future compatibility issues.


## Linux
Warudo doesn't officially support Linux, but can run through Proton given a little bit of work. UMod, the framework Warudo uses for building and loading mods (custom characters, evironments, props etc.), has a few linux specific bugs. They're documented [here](gist.github.com/redback0/c61c31a358aaf835da1b2c4e904bcb5b), but I will briefly go over them and list how I fixed them.

### Obsolete BuildTarget
As the gist mentions, attempting to build a mod gives us an error:
> Building an AssetBundle for target '' is not allowed because the required module is not installed.

This is because, by default, UMod tries to build a bundle for the platform it's being run on. For Windows, it uses the correct BuildTarget but for Linux, it uses an old BuildTarget `BuildTarget.StandaloneLinuxUniversal`, which doesn't exist anymore.

Instead of hex editing any dll, I harmony patch this to use the correct new `BuildTarget.StandaloneLinux64`, regardless if you're using the [override build target](./features/global-settings.md#override-build-target) feature or not.

### Empty or Invalid ModAssetPath
Another bug, relates to the Warudo mod config's `Mod Asset Directory` property. On windows, this needs to be a project relative path starting with `Assets/`. During build, there's a check that runs only on Windows that turns this path from a project relative path, to a full path.

**UMod.BuildEngine.BuildContext.ModAssetsPath:**
```cs
public string ModAssetsPath
{
	get
	{
		if(this.modAssetsFolder == null)
		{
			this.modAssetsFolder = this.exportProfile.ModAssetsPath;
			if(Application.platform == RuntimePlatform.WindowsEditor)
			{
			this.modAssetsFolder = this.exportProfile.ModAssetsPath.Trim('\\', '/');
			if (!Path.IsPathRooted(this.modAssetsFolder))
				this.modAssetsFolder = new DirectoryInfo(this.modAssetsFolder).FullName;
			}
		}
		return this.modAssetsFolder;
	}
}
```

Instead of hardcoding a platform check and rooting the path, I patch this method to check if path starts with [Application.dataPath](https://docs.unity3d.com/2022.3/Documentation/ScriptReference/Application-dataPath.html) which returns the full path to our project assets folder. If it doesn't, I prepend the full path to the project to it, since a valid mod folder path would have to start with `Assets/` anyway. This *should* make the same code work on all platforms.

With these two bugs fixed, we can succesfully build mods on Linux!