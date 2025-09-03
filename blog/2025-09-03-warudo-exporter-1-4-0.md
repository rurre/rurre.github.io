---
slug: warudo-exporter-1-4-0
title: Warudo Exporter v1.4.0
authors: [pumkin]
tags: [warudo, vrchat, unity, tool]
---

- Added options to the exporter next to every feature.
- Added an option to force reset pose to rig config pose (which should be a tpose) when normalizing avatar.
- Added an option to keep VRC Physbones and VRC Physbone colliders when removing VRC components.
- Fixed install wizard errors preventing the package import step from being completed.
- Fixed having any VRCFury components on the avatar breaking your avatar in Warudo.
- Added a `Remove On Export` component that removes the GameObject it's attached to during a Warudo build.
- Expanded the rename blendshapes feature:
  - You can now select a preset for what translations list to use, edit it or create your own.
  - Merge multiple blendshapes into one, change their strength or split blendshapes into left and right variants.
- Added console output for the Package Install step to see exactly what vrc-get is trying to do.

### Known Issues:
- Blendshape translations don't translate in animations. Probably won't matter to most people.

### How to Update:
Either delete the `<your project>/Packages/io.github.rurre.warudo-exporter/` folder OR in Unity, at the top, go to `Window` > `Package Manager` find `Pumkin's Warudo Exporter` and remove it there.
If you already imported the Warudo SDK, also delete `<your project>/Assets/Warudo`, `<your project>/Assets/Warudo SDK` and `<your project>/Assets/Packages` folders.
If updating from a super old version, also delete the `<your project>/Assets/Pumkin/` folder, if it exists. 
Finally, import the new Unity Package.

<!-- truncate -->