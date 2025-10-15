---
title: "Assign FX Controller to Animator"
description: "This feature assigns your VRChat FX controller to the main Animator component."
sidebar_position: 5
---

This assigns your VRChat FX controller to the controller slot of your Avatar's Animator component. This allows your animations to still work the same way they would in VRChat, when changing animator parameters using Warudo blueprints.

:::warning
Having an animator control certain things like face blendshapes or mesh toggles prevents Warudo from being able to control those. Only animate things you don't want to change in Warudo.
:::