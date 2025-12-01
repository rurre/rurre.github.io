---
slug: warudo-exporter-1-5-1
title: Warudo Exporter v1.5.1
authors: [pumkin]
tags: [warudo, vrchat, unity, tool]
---

- Fixed install wizard's package step failing if you had repositories in vcc that had paranthesis in their names ex: `bd_ (prereleases)`, or had no name at all.
- Potentially fixed install wizard's package step failing due to illegal byte sequence error in Japanese system locale? I don't know what exactly causes this but hopefully it got fixed.

### Known Issues:
- Shaders still don't export correctly, with shaders like `Standard` missing stuff like emissions and normal maps, as well as not shadows. I'm working on a fix that will release in v1.6.0. Thank you for your patience!

<!-- truncate -->