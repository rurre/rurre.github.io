---
slug: warudo-exporter-1-3-3
title: Warudo Exporter v1.3.3
authors: [pumkin]
tags: [warudo, vrchat, unity, tool]
---

- Fixed bug with the `Add VRM 0.x Blendshape Proxy if Missing` option that caused your avatar to not load or load broken if you were missing the blendshapes it was looking for.

### How to Update:
Either delete the `<your project>/Packages/io.github.rurre.warudo-exporter/` folder OR in Unity, at the top, go to `Window` > `Package Manager` find `Pumkin's Warudo Exporter` and remove it there.
If you already imported the Warudo SDK, also delete `<your project>/Assets/Warudo`, `<your project>/Assets/Warudo SDK` and `<your project>/Assets/Packages` folders.
If updating from a super old version, also delete the `<your project>/Assets/Pumkin/` folder, if it exists. 
Finally, import the new Unity Package.

<!-- truncate -->