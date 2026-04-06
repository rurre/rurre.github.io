---
slug: warudo-exporter-1-5-6
title: Warudo Exporter v1.5.6
authors: [pumkin]
tags: [warudo, vrchat, unity, tool]
---

## Warudo Exporter v1.5.6
- Fixed VRCFury support, again!
  - Since support for VRCFury is not official, things can break when fury devs make changes. These things need to be fixed manually so this will happen a bunch more in the future but that's okay, I'll just try to make it work again!
- Added a system that generates the required .csproj project files on avatar build if you don't have a code editor installed. This should make custom scripts work without needing to install a code editor like Rider.
  - Warudo Exporter automatically adds a bunch of scripts to your avatar to fix compatibility issues, so this not working would cause some things to not work in Warudo as well (like constraints).
- Added create new preset button to the blendshape translations ui if no preset is selected.
- Misc UI improvements.

### Known Issues:
**- There is currently an issue with VRCFury support. If you want to use VRCFury you can downgrade it to version 1.1279.0 for now. This will be fixed next update.**
- Shaders still don't export correctly, with shaders missing keywords-related features (stuff like emissions and normal maps in Standard shader [standard has been fixed this udpate tho!]), as well as not casting shadows. I'm working on a fix that will release in v1.6.0. Thank you for your patience!
<!-- truncate -->
