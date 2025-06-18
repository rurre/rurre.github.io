---
description: How to actually use this thing.
sidebar_position: 4
---

# Usage

## Add Component to Avatar
To use this, select your avatar in the scene, and add the `Pumkin's Warudo Exporter` component.
<div className="border-radius-4px">
![Add Warudo Exporter Component to Avatar](./img/info/warudo-exporter-add-component.png)
</div>

## Setting up a Mod

Before we can export, we need to [setup a new mod](https://docs.warudo.app/docs/modding/creating-your-first-mod). This can be done in either one of these menus:
 - `Warudo` > `New Mod`
 - `Warudo` > `Mod Settings` and clicking the `+` button.

 To make this easier, a button to open the `Mod Settings` menu is provided to you directly in the Exporter window.

<div className="border-radius-4px">
![Add Warudo Exporter Component to Avatar](./img/info/warudo-exporter-open-mod-settings.png)
</div>

Fill in your mod info and pick a folder for your mod files. This needs to be somewhere in your `Assets`.
<div className="border-radius-4px">
![Setup Mod Settings](./img/info/mod-settings.png)
</div>

Before we export, there's a setting worth considering in the `Build` tab. The `Optimize for` option plays a decent role in the resulting filesize.
- When optimizing for `File Size` my Character Mod ends up being 25mb.
- When optimizing for `Build Time` my Character Mod ends up being 130mb.

<div className="border-radius-4px">
![Mod Build Settings](./img/info/mod-build-settings.png)
</div>

I don't know what else this changes. I haven't noticed much difference in build or loading times when optiziming for build time. It might be irrelevant for small mods like these, but still worth keeping in mind.

### Exporting

To export, press the big export button! Yep, that's it!
<div className="border-radius-4px">
![Just Click the Export Button](./img/info/warudo-exporter-export-button.png)
</div>

For more info on what to do with your exported mods, check the [Warudo Documentation](https://docs.warudo.app/docs/modding/creating-your-first-mod).