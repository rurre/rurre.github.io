---
slug: warudo-exporter-1-5-2
title: Warudo Exporter v1.5.2
authors: [pumkin]
tags: [warudo, vrchat, unity, tool]
---

- Fixed DynamicBones being imported in the project before the exporter causing the install wizard to fail. 
- Fixed **only** built in shaders (such as Standard shader) looking broken (no shadows, emissions, normal maps [anything using shader keywords basically]). **This does not fix custom shaders such as Liltoon or Poiyomi, only shaders included in Warudo by default (like Standard shader)**.
- Potentially fixed external scripts not loading in Warudo correctly (again) by changing code editor if one is not selected.
- Fixed VRCFury armature link not working by skipping ControllerHolderService. This should fix animators getting deleted.
- Skip VRCFury's ParameterOptimizer because there's no parameter limit in Warudo. (this could break a thing or two)
- Skip VRCFury's GlobalCollider component because it caused issues.

### Known Issues:
- Shaders still don't export correctly, with shaders like Standard missing stuff like emissions and normal maps, as well as not shadows. I'm working on a fix that will release in v1.6.0. Thank you for your patience!

### How to Update:
Either delete the `<your project>/Packages/io.github.rurre.warudo-exporter/` folder OR in Unity, at the top, go to `Window` > `Package Manager` find `Pumkin's Warudo Exporter` and remove it there.
If you already imported the Warudo SDK, also delete `<your project>/Assets/Warudo`, `<your project>/Assets/Warudo SDK` and `<your project>/Assets/Packages` folders.
If updating from a super old version, also delete the `<your project>/Assets/Pumkin/` folder, if it exists. 
Finally, import the new Unity Package.

<!-- truncate -->