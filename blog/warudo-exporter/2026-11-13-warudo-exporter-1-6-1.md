---
slug: warudo-exporter-1-6-1
title: Warudo Exporter v1.6.1
authors: [pumkin]
tags: [warudo, vrchat, unity, tool]
---

- Added check for Magica Cloth 2 in the project.
  - If it's missing, the install wizard will import dummy script stubs, to allow the new physics conversion to work.


### Known Issues:
- Shaders still don't export correctly, with shaders missing keywords-related features (stuff like emissions and normal maps in Standard shader [standard has been fixed this udpate tho!]), as well as not casting shadows. I'm working on a fix that will release in v1.6.0. Thank you for your patience!
<!-- truncate -->