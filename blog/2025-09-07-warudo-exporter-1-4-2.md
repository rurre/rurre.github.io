---
slug: warudo-exporter-1-4-2
title: Warudo Exporter v1.4.2
authors: [pumkin]
tags: [warudo, vrchat, unity, tool]
---

- Fixed wrong version of vrm getting installed and getting stuck unable to install vrmshaders if you have a repo for a vrm related tool added to vcc.
- Fixed install wizard getting stuck on package install step. Again. Maybe for real this time. Again.
- Added warning if the mod asset directory is wrong.
- Added warning if the UI fails to load.

### Known Issues:
- VRCFury components don't run correctly? I'm actually not sure about this one, last I checked it worked fine but I heard reports of vrcfury not running at all so let me know!

### How to Update:
Either delete the `<your project>/Packages/io.github.rurre.warudo-exporter/` folder OR in Unity, at the top, go to `Window` > `Package Manager` find `Pumkin's Warudo Exporter` and remove it there.
If you already imported the Warudo SDK, also delete `<your project>/Assets/Warudo`, `<your project>/Assets/Warudo SDK` and `<your project>/Assets/Packages` folders.
If updating from a super old version, also delete the `<your project>/Assets/Pumkin/` folder, if it exists. 
Finally, import the new Unity Package.

<!-- truncate -->