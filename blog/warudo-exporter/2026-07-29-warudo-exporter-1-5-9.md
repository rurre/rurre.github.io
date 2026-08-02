---
slug: warudo-exporter-1-5-9
title: Warudo Exporter v1.5.9
authors: [pumkin]
tags: [warudo, vrchat, unity, tool]
---

## Warudo Exporter v1.5.9
- Fixed install wizard hanging on installing packages forever.
- Added new option to convert VRC Physbones to Dynamic Bones instead of letting Warudo do it.
  - This uses code from [FACS01's conversion tool](https://github.com/FACS01-01/PhysBone-to-DynamicBone). Thank you!
- Removed some unnecessary NDMF components from exported avatars to reduce (harmless but spammy) errors.
- Added Echo_DNG face tracking blendshape translation preset.
- Added a barebones (heh) test avatar to help test exporting.


### Known Issues:
- Shaders still don't export correctly, with shaders missing keywords-related features (stuff like emissions and normal maps in Standard shader [standard has been fixed this udpate tho!]), as well as not casting shadows. I'm working on a fix that will release in v1.6.0. Thank you for your patience!
<!-- truncate -->
