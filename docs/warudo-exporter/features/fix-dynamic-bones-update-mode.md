---
title: "Fix DynamicBone Update Mode"
description: "This fixes low FPS jitters with Physbones auto converted DynamicBones."
sidebar_position: 9
---
This feature adds a script to every VRC Physbone. When the avatar loads, Warudo converts all VRC Physbones to DynamicBones. The script changes the `m_UpdateMode` property to `UpdateMode.Normal` for those DynamicBones, which prevents them from spazzing out and jittering when your framerate drops in Warudo.