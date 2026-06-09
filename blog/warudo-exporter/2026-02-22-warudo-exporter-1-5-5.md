---
slug: warudo-exporter-1-5-5
title: Warudo Exporter v1.5.5
authors: [pumkin]
tags: [warudo, vrchat, unity, tool]
---

- Fixed support for VRCFury. It should no longer break avatars! 🎉

### Known Issues:
- Shaders still don't export correctly, with shaders missing keywords-related features (stuff like emissions and normal maps in Standard shader [standard has been fixed a while back tho!]), as well as not casting shadows. I'm working on a fix that will release in v1.6.0. Thank you for your patience!

### How to Update:
Either delete the `<your project>/Packages/io.github.rurre.warudo-exporter/` folder OR in Unity, at the top, go to `Window` > `Package Manager` find `Pumkin's Warudo Exporter` and remove it there.
If you already imported the Warudo SDK, also delete `<your project>/Assets/Warudo`, `<your project>/Assets/Warudo SDK` and `<your project>/Assets/Packages` folders.
If updating from a super old version, also delete the `<your project>/Assets/Pumkin/` folder, if it exists. 
Finally, import the new Unity Package.
<!-- truncate -->
