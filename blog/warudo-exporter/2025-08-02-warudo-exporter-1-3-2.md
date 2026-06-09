---
slug: warudo-exporter-1-3-2
title: Warudo Exporter v1.3.2
authors: [pumkin]
tags: [warudo, vrchat, unity, tool]
---

- Fixed avatar arms/shoulders pointing too far in after normalizing bones if your avatar was in a A pose instead of a T pose in the scene.
- Added missing `com.unity.cinemachine` dependency to package.json. You no longer need to import this manually.
- Disabled `Assign FX Controller to Animator` by default as it was causing some confusion.

To update, delete the `Assets/Pumkin` folder. If you already imported the Warudo SDK, also delete `Assets/Warudo`, `Assets/Warudo SDK` and `Assets/Packages` folders. Then import the new Unity Package.

⚠️ **Note** ⚠️
The exporter will now import itself into the `Packages` folder so it will end up in `<your project>/Packages/io.github.rurre.warudo-exporter/` . In the future, this folder will be the one you'll have to remove when updating. You can however, remove this with the Unity Package Manager by going to `Window` > `Package Manager` and removing `Pumkin's Warudo Exporter` from there.

<!-- truncate -->