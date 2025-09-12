---
slug: warudo-exporter-1-4-3
title: Warudo Exporter v1.4.3
authors: [pumkin]
tags: [warudo, vrchat, unity, tool]
---

- Fixed avatar exporting broken if VRCFury was not imported.
- Export should fail if something goes wrong now, instead of exporting broken.

### How to Update:
Either delete the `<your project>/Packages/io.github.rurre.warudo-exporter/` folder OR in Unity, at the top, go to `Window` > `Package Manager` find `Pumkin's Warudo Exporter` and remove it there.
If you already imported the Warudo SDK, also delete `<your project>/Assets/Warudo`, `<your project>/Assets/Warudo SDK` and `<your project>/Assets/Packages` folders.
If updating from a super old version, also delete the `<your project>/Assets/Pumkin/` folder, if it exists. 
Finally, import the new Unity Package.

<!-- truncate -->