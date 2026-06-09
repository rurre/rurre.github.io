---
slug: warudo-exporter-1-1-1
title: Warudo Exporter v1.1.1
authors: [pumkin]
tags: [warudo, vrchat, unity, tool]
---

- VRCFury support fixes. Fury now runs before NDMF, Modular Avatar and my exporter. This should fix armature link not working correctly.
- Install Wizard package installer fixes. Should be a bit less likely to blow up your project now.
- Fixed packages like NDMF not installing.
- Added warnings for vrlabs dynamic bone and finalik stubs in project.
- Fixed "Can't open scene in readonly package" popping up all the time.
- Fixed a bunch of other smaller errors here and there.
- Added warning for mod path being the default value (Assets), which would fail the build if unchanged.

To update delete the `Assets/Pumkin` folder. If you already imported the Warudo SDK, also delete the `Assets/Warudo`, `Assets/Warudo SDK` and `Assets/Packages` folders. Then import the new Unity Package.

<!-- truncate -->