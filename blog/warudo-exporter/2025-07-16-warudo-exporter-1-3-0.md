---
slug: warudo-exporter-1-3-0
title: Warudo Exporter v1.3.0
authors: [pumkin]
tags: [warudo, vrchat, unity, tool]
---

- Fixed compile error related to DynamicBones not being in the project after importing the tools.
- Disabled `Remove VRC Components` by default as it was causing a bunch of confusion.
- Fixed project exploding if FinalIK was in the project when importing the tools.
- Potentially fixed project exploding if UniVRM was in the project, in the Assets folder. Haven't tested this properly, might still explode.
- Added a new option to `Add VRM Blendshape Proxy if Missing` to your avatar. This skips having to manually setup VRM blendshapes if using VRM 0.x blendshapes for face tracking.


### Known Issues:
- Exported Warudo mod bundles are much larger in file size than they should be if your project has a lot of stuff in it. It seems like a bunch of unnecessary assets get included in the build. While this has been an issue from the start, it has only now come to my attention.
For now, you can open your mod settings with the button in the exporter window, go to the `Build` tab and set the `Optimize For` setting to `File Size`. This will cut down the file size significantly (often from like 500mb to 90mb). I'm looking into fixing this soon.

- If you're getting "Can't open scene in readonly package" pop up all the time, in the top unity menu bar, go to `Window` > `Package Manager` and remove the `Non-Destructive Modular Framework` package, then import it through VRChat Creator Companion. You can add it to VCC from [here](https://modular-avatar.nadena.dev/)


To update delete the `Assets/Pumkin` folder. If you already imported the Warudo SDK, also delete the `Assets/Warudo`, `Assets/Warudo SDK` and `Assets/Packages` folders. Then import the new Unity Package.

<!-- truncate -->