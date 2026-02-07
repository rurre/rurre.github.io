---
slug: warudo-exporter-1-5-4
title: Warudo Exporter v1.5.4
authors: [pumkin]
tags: [warudo, vrchat, unity, tool]
---

Decently big update in which I probably broke a bunch of things because my git branches got mixed up and I cherry picked a lot of commits directly into main :fingerguns:

- Set UMod build optimize mode to filesize by default which will result in much smaller .warudo files.
- Fixed builds not working due an invalid mod path on non windows platforms (like linux).
- Added a global option to override build target.
  - This would allow linux users to build mods for windows.
- Fixed material swap animations not working.
  - This uses a script to do the swap instead of the animator. This workaround only works in animator layers and not in BlendTrees though.
- Exporter logo now gets replaced by your mod's icon if you have one set.
- Added a new option to `Fix Dynamic Bone Update Mode` to the exporter.
  - This sets the update mode to `Normal`, which fixes stutters at lower FPS.
- Added an option to keep VRC Physbones when removing all other VRC components.
- Added `Pumkin's Warudo Exporter` prefix to most log messages so that you know what log messages come from it.
- Added a `WriteToConsoleOnStart` script for debugging.
  - This script will write what you give it to the log when the avatar loads in Warudo.
- Removed unused animators and menu objects to prevent unnecessary files making it into the mod build.
- Other random bug fixes and UI improvements that I forgor.

### Known Issues:
- VRCFury support still doesn't work correctly. I recommend using the `Skip VRCFury` option to skip it entirely.
**Workaround:** Remove the exporter component from your avatar, then `Build an Editor Test Copy`, you can find this option in Unity's top menu bar under `Tools` > `VRCFury`. Then add the exporter onto the copy it created and export as normal.
- Shaders still don't export correctly, with shaders missing keywords-related features (stuff like emissions and normal maps in Standard shader [standard has been fixed this udpate tho!]), as well as not casting shadows. I'm working on a fix that will release in v1.6.0. Thank you for your patience!

### How to Update:
Either delete the `<your project>/Packages/io.github.rurre.warudo-exporter/` folder OR in Unity, at the top, go to `Window` > `Package Manager` find `Pumkin's Warudo Exporter` and remove it there.
If you already imported the Warudo SDK, also delete `<your project>/Assets/Warudo`, `<your project>/Assets/Warudo SDK` and `<your project>/Assets/Packages` folders.
If updating from a super old version, also delete the `<your project>/Assets/Pumkin/` folder, if it exists. 
Finally, import the new Unity Package.
<!-- truncate -->
