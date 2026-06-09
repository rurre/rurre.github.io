---
slug: warudo-exporter-1-2-0
title: Warudo Exporter v1.2.0
authors: [pumkin]
tags: [warudo, vrchat, unity, tool]
---

- Fixed VRCFury avatar copy being left in the scene when not using VRCFury.
- Fixed unlocked Poiyomi materials in material swap animations not getting locked.
- Added workaround for material swap animations crashing Warudo. **Tell me if it works for you!**


### Known Issues:
If you're getting "Can't open scene in readonly package" pop up all the time, in the top unity menu bar, go to `Window` > `Package Manager` and remove the `Non-Destructive Modular Framework` package, then import it through VRChat Creator Companion. You can add it to VCC from [here](https://modular-avatar.nadena.dev/)


To update delete the `Assets/Pumkin` folder. If you already imported the Warudo SDK, also delete the `Assets/Warudo`, `Assets/Warudo SDK` and `Assets/Packages` folders. Then import the new Unity Package.

<!-- truncate -->