---
slug: warudo-exporter-1-5-0
title: Warudo Exporter v1.5.0
authors: [pumkin]
tags: [warudo, vrchat, unity, tool]
---

- ❗ **Workflow change!** Mod settings now get defined inside the exporter component. This lets you skip having to go through Warudo sdk menus or create folders. It just works™
You can also save settings to an asset and reuse it among different avatars!
If you would like to use the old way of doing this (for whatever reason) you can select the `Mod Info Source` to `FromWarudoSdk`.
- Fixed all scenes getting closed when exporting an avatar.
- Fixed a bunch of random errors that have been reported recently.

### Known Issues:
- Shaders don't export correctly, with shaders like `Standard` missing stuff like emissions and normal maps, as well as not shadows. I'm looking into a potential workaround.

<!-- truncate -->