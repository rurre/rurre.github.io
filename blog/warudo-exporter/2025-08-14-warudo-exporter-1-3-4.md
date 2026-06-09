---
slug: warudo-exporter-1-3-4
title: Warudo Exporter v1.3.4
authors: [pumkin]
tags: [warudo, vrchat, unity, tool]
---

- Fixed avatar's arms being behind their back if exported in an A pose. Again. It should reset your pose to the rig config pose before normalizing now (which should be a T pose).
- Fixed custom scripts for Constraint compatibility and Material Swap animations not working. This should hopefully fix all custom scripts not working in Warudo.

### How to Update:
Either delete the `<your project>/Packages/io.github.rurre.warudo-exporter/` folder OR in Unity, at the top, go to `Window` > `Package Manager` find `Pumkin's Warudo Exporter` and remove it there.
If you already imported the Warudo SDK, also delete `<your project>/Assets/Warudo`, `<your project>/Assets/Warudo SDK` and `<your project>/Assets/Packages` folders.
If updating from a super old version, also delete the `<your project>/Assets/Pumkin/` folder, if it exists. 
Finally, import the new Unity Package.

<!-- truncate -->