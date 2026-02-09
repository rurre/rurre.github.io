---
title: "Global Settings"
description: "This section contains global settings."
sidebar_position: 30
---
### Override Build Target
This option allows you to override the platform the mod bundle is built for. At the moment, this option is only really useful if you're on a platform other than Windows. As far as I know, the only real difference between which platform you build for is shader support. Shaders compiled for one platform generally don't work on another and will show up as <span style={{color: 'ff00ff'}}>**pink**</span>.

:::info
If you're on Linux, and running Warudo through Proton (since there's no native support at the moment), you're emulating Windows so should therefore use the `WindowsStandalone64` option.
:::


There's 3 options at the moment:
- `No Target` - Doesn't override. Same as disabling the option entirely.
- `WindowsStandalone64` - Build for Windows.
- `LinuxStandalone64` - Build for Linux.