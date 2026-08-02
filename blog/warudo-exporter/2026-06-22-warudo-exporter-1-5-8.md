---
slug: warudo-exporter-1-5-8
title: Warudo Exporter v1.5.8
authors: [pumkin]
tags: [warudo, vrchat, unity, tool]
---

## Warudo Exporter v1.5.8
- Fixed errors with VRChat SDK 3.10.X
- Install wizard will now upgrade and downgrade dependency packages as needed.
- Fixed install wizard hanging if you have too many package repos in VRC Creator Companion/ALCOM. (I'm not sure if I already posted this).
- Layers from the Additive VRChat animator now get copied to the FX animator as additive layers (they chose this confusing naming).
  - Also cleanup OSCm smoothing layers from FX animator.
  - This will make more sense in the next big update 👀

### Known Issues:
- Shaders still don't export correctly, with shaders missing keywords-related features (stuff like emissions and normal maps in Standard shader [standard has been fixed this udpate tho!]), as well as not casting shadows. I'm working on a fix that will release in v1.6.0. Thank you for your patience!
<!-- truncate -->
