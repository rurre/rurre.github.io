---
slug: warudo-exporter-1-5-3
title: Warudo Exporter v1.5.3
authors: [pumkin]
tags: [warudo, vrchat, unity, tool]
---

Small update to address some common issues people are having with installing the tool.

- Fixed dynamic bone duplicate assembly error, that this time, would happen when you *didn't* have dynamic bones in the project.
- Bumped VRM version requirement up to 0.128.1 to fix the tool being incompatible with [Esperecyan's VRM Converter](https://pokemori.booth.pm/items/1025226) being in VCC.
  - This will only affect new installs. If you already have the old required version of VRM imported, you don't have to do anything.
- Added new step to the end of the Install Wizard  that will check for compile errors and warn users to resolve them before things start working.
- Fixed install Wizard's packages step getting stuck sometimes depending on if you had a particular source imported in vcc.

### Known Issues:
- VRCFury support doesn't seem to work correctly. A bunch of things don't work at all while others kinda still work. I recommend not using it for the time being.
- Shaders still don't export correctly, with shaders missing keywords-related features (stuff like emissions and normal maps in Standard shader [standard has been fixed this udpate tho!]), as well as not casting shadows. I'm working on a fix that will release in v1.6.0. Thank you for your patience!

### How to Update:
Either delete the `<your project>/Packages/io.github.rurre.warudo-exporter/` folder OR in Unity, at the top, go to `Window` > `Package Manager` find `Pumkin's Warudo Exporter` and remove it there.
If you already imported the Warudo SDK, also delete `<your project>/Assets/Warudo`, `<your project>/Assets/Warudo SDK` and `<your project>/Assets/Packages` folders.
If updating from a super old version, also delete the `<your project>/Assets/Pumkin/` folder, if it exists. 
Finally, import the new Unity Package.

<!-- truncate -->