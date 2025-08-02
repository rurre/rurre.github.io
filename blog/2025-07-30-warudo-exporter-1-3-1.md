---
slug: warudo-exporter-1-3-1
title: Warudo Exporter v1.3.1
authors: [pumkin]
tags: [warudo, vrchat, unity, tool]
---

This whole release focused on reworking the package installer to be more reliable. Did I succeed? I don't know yet!

- Reworked Install Wizard's package installer step to use [vrc-get](https://github.com/vrc-get/). This should hopefully make it less likely to break all the time. This does mean you might see a spooky cmd window pop up for a second when installing packages.
- Made Warudo Exporter a VPM package. This means it now lives in the Packages folder and has other vpm packages show up as dependencies.
- Created a VPM repo for VRM packages Warudo sdk needs. The repo for these gets added automatically.

### Known Issues:
- Avatar arms/shoulders point inwards after getting normalized if the avatar was in a A pose instead of a T pose in the scene. This will be fixed next update.
- If you're getting "Can't open scene in readonly package" pop up all the time, update the `Non-Destructive Modular Framework` package inside VRChat Creator Companion.

To update, delete the `Assets/Pumkin` folder. If you already imported the Warudo SDK, also delete `Assets/Warudo`, `Assets/Warudo SDK` and `Assets/Packages` folders. Then import the new Unity Package.

⚠️ **Note** ⚠️
The exporter will now import itself into the `Packages` folder so it will end up in `<your project>/Packages/io.github.rurre.warudo-exporter/` . In the future, this folder will be the one you'll have to remove when updating. You can however, remove this with the Unity Package Manager by going to `Window` > `Package Manager` and removing `Pumkin's Warudo Exporter` from there.

<!-- truncate -->