---
description: What exactly can it do?
sidebar_position: 2
---

# Features

The exporter comes with a couple of features that provide the bulk of the compatibilty between VRChat and Warudo. These can be toggled on and off if needed.

All these are non-destructive and run on avatar export. This patches modify a copy of your avatar which ensures none of your actual files are modified. They also fix up your animation clips to work with the new changes.

## ⚙️ Main Settings

### Normalize Avatar

This does exactly what [Hai's Denormalized Exporter](https://docs.hai-vr.dev/docs/products/denormalized-avatar-exporter) does, allowing you to export your avatar without the destructive [Character Setup](https://docs.warudo.app/docs/modding/character-mod#step-2-setup-character) step.

Key difference from Hai's exporter is that since this runs as a NDMF pass, your animations no longer break due to the exporter renaming and moving bones around.

### Rename Expressions to ARKit

This option renames the commonly used VRCFT [Unified Expression](https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/unified-blendshapes) blendshapes to [ARKit](https://arkit-face-blendshapes.com/).

<details>
<summary>Blendshape Translations</summary>
<table>
 <thead>
   <tr>
     <th>Unified Expressions</th>
     <th>ARKit</th>
   </tr>
 </thead>
 <tbody>
   <tr><td>EyeLookOutLeft</td><td>eyeLookOutLeft</td></tr>
   <tr><td>EyeLookOutRight</td><td>eyeLookOutRight</td></tr>
   <tr><td>EyeLookInLeft</td><td>eyeLookInLeft</td></tr>
   <tr><td>EyeLookInRight</td><td>eyeLookInRight</td></tr>
   <tr><td>EyeLookUpLeft</td><td>eyeLookUpLeft</td></tr>
   <tr><td>EyeLookUpRight</td><td>eyeLookUpRight</td></tr>
   <tr><td>EyeLookDownLeft</td><td>eyeLookDownLeft</td></tr>
   <tr><td>EyeLookDownRight</td><td>eyeLookDownRight</td></tr>
   <tr><td>EyeClosedLeft</td><td>eyeBlinkLeft</td></tr>
   <tr><td>EyeClosedRight</td><td>eyeBlinkRight</td></tr>
   <tr><td>EyeSquintLeft</td><td>eyeSquintLeft</td></tr>
   <tr><td>EyeSquintRight</td><td>eyeSquintRight</td></tr>
   <tr><td>EyeWideLeft</td><td>eyeWideLeft</td></tr>
   <tr><td>EyeWideRight</td><td>eyeWideRight</td></tr>
   <tr><td>BrowDownLeft</td><td>browDownLeft</td></tr>
   <tr><td>BrowDownRight</td><td>browDownRight</td></tr>
   <tr><td>BrowInnerUp</td><td>browInnerUp</td></tr>
   <tr><td>BrowOuterUpLeft</td><td>browOuterUpLeft</td></tr>
   <tr><td>BrowOuterUpRight</td><td>browOuterUpRight</td></tr>
   <tr><td>CheekSquintLeft</td><td>cheekSquintLeft</td></tr>
   <tr><td>CheekSquintRight</td><td>cheekSquintRight</td></tr>
   <tr><td>CheekPuff</td><td>cheekPuff</td></tr>
   <tr><td>JawOpen</td><td>jawOpen</td></tr>
   <tr><td>JawLeft</td><td>jawLeft</td></tr>
   <tr><td>JawRight</td><td>jawRight</td></tr>
   <tr><td>JawForward</td><td>jawForward</td></tr>
   <tr><td>MouthClosed</td><td>mouthClose</td></tr>
   <tr><td>LipSuckUpper</td><td>mouthRollUpper</td></tr>
   <tr><td>LipSuckLower</td><td>mouthRollLower</td></tr>
   <tr><td>LipFunnel</td><td>mouthFunnel</td></tr>
   <tr><td>LipPucker</td><td>mouthPucker</td></tr>
   <tr><td>MouthUpperUpLeft</td><td>mouthUpperUpLeft</td></tr>
   <tr><td>MouthUpperUpRight</td><td>mouthUpperUpRight</td></tr>
   <tr><td>MouthLowerDownLeft</td><td>mouthLowerDownLeft</td></tr>
   <tr><td>MouthLowerDownRight</td><td>mouthLowerDownRight</td></tr>
   <tr><td>MouthLeft</td><td>mouthLeft</td></tr>
   <tr><td>MouthRight</td><td>mouthRight</td></tr>
   <tr><td>MouthSmileLeft</td><td>mouthSmileLeft</td></tr>
   <tr><td>MouthSmileRight</td><td>mouthSmileRight</td></tr>
   <tr><td>MouthFrownLeft</td><td>mouthFrownLeft</td></tr>
   <tr><td>MouthFrownRight</td><td>mouthFrownRight</td></tr>
   <tr><td>MouthStretchLeft</td><td>mouthStretchLeft</td></tr>
   <tr><td>MouthStretchRight</td><td>mouthStretchRight</td></tr>
   <tr><td>MouthDimpleLeft</td><td>mouthDimpleLeft</td></tr>
   <tr><td>MouthDimpleRight</td><td>mouthDimpleRight</td></tr>
   <tr><td>MouthRaiserUpper</td><td>mouthShrugUpper</td></tr>
   <tr><td>MouthRaiserLower</td><td>mouthShrugLower</td></tr>
   <tr><td>MouthPressLeft</td><td>mouthPressLeft</td></tr>
   <tr><td>MouthPressRight</td><td>mouthPressRight</td></tr>
   <tr><td>MouthTightenerLeft</td><td>mouthPressLeft</td></tr>
   <tr><td>MouthTightenerRight</td><td>mouthPressRight</td></tr>
   <tr><td>TongueOut</td><td>tongueOut</td></tr>
 </tbody>
</table>
</details>

### Convert VRChat to Unity Constraints

This converts VRChat constraints back to Unity Constraints.

### Assign FX Controller to Avatar Aniamator

This assigns your FX controller to the controller slot of your Avatar's Animator component. This allows your animations to still work the same way they would in VRChat.

### Lock Poiyomi Materials

This option locks all materials using the [Poiyomi Shader](https://www.poiyomi.com/) on your avatar. If you don't use Poiyomi, or there are no materials using it on your avatar, it will do nothing.

### Remove VRChat Components

This option allows you to remove all VRChat components from your avatar. Leaving them on your avatar doesn't really cause any issues, but it could lead to unexepected results. For example, VRChat Physbones get converted to DynamicBones in Warudo, which could break your physics if you already use something like VRM Spring Bones, MagicaCloth or DynamicBones on those bones.

## 🔧 Debug Settings

### Run Test Build

This allows you build your avatar in the scene without exporting it.

This option is equivalent to Hai's Denormalized Exporter's `Do not export or build`

### Keep Working Object in Scene

This allows you to keep your Character.prefab (in the case of character mod) in the scene after a build.

This option is equivalent to Hai's Denormalized Exporter's `Do not delete work objects`