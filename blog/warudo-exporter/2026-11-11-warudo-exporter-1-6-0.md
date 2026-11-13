---
slug: warudo-exporter-1-6-0
title: Warudo Exporter v1.6.0
authors: [pumkin]
tags: [warudo, vrchat, unity, tool]
---

- Replaced Physbone -> Dynamic Bone conversion with a new Physbone -> Magica Cloth 2 conversion.
   - This is a pretty big one! Let me know what you think!
- UI toggles have a bit of a background now to make it more clear that some options have settings.
  - Not sure how I feel about this, but let me know what you think.
- Added rudimentary support for VRC Avatar Parameter drivers.
  - This makes things like turning one toggle on turning another one off possible, like in VRC. More toggle support coming soon!
- Little things my dizorganized ass probably forgot.

### Finally, 1.6.0, that means the shader issue is now fixed right?
Uh, no, not yet! I felt like I couldn't keep putting new features behind 1.5.x, so 1.6.0. However, the shader issue is next on my list of things to try and fix, alongside another decently big feature that I will talk about closer to release.


### Known Issues:
- Exporter might not install if Magica Cloth 2 is missing. Will next update!
- Shaders still don't export correctly, with shaders missing keywords-related features (stuff like emissions and normal maps in Standard shader [standard has been fixed this udpate tho!]), as well as not casting shadows. I'm working on a fix that will release in v1.6.0. Thank you for your patience!
<!-- truncate -->