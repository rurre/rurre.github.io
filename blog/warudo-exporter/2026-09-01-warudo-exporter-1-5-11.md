---
slug: warudo-exporter-1-5-11
title: Warudo Exporter v1.5.11
authors: [pumkin]
tags: [warudo, vrchat, unity, tool]
---

## Warudo Exporter v1.5.11
- Fixed install wizard getting stuck on installing packages. Again.
  - You now get a warning if packages that can't be resolved automatically are found.
- Fixed errors with VRC Physbone Collider conversion to DynamicBones. Again, as well.
  - This one seems to have been unrelated to the last fix.


### Known Issues:
- Shaders still don't export correctly, with shaders missing keywords-related features (stuff like emissions and normal maps in Standard shader [standard has been fixed this udpate tho!]), as well as not casting shadows. I'm working on a fix that will release in v1.6.0. Thank you for your patience!
<!-- truncate -->