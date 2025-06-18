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


## Harmony Patching UMod to Include External Scripts
For this usecase, UMod has a very annoying limitation. It only includes files inside your mod's export folder in it's mod builds, so to include this script, that's meant to be uploaded on multiple avatars, in every avatar mod export, I would need to either duplicate and rename a copy to put into every export folder (causing script recompiles), or move the single script around every mod folder when a build needs to happen. Sounds reasonable, but in case of a failure, I could lose track of this script and the whole feature would stop working.

So, what I do instead is harmony patch UMod to include scripts into it's mod build from *anywhere*, if the script is on the avatar (or prop) and if the script is in a folder called `BuildIncluded` or a subfolder of it.

This means we're not getting and stray scripts included if they're unused, and it also means we don't need to worry about duplicating or moving scripts around. It just works™