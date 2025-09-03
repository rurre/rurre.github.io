---
title: "Normalize Avatar"
description: "This feature non-destructively normalizes your avatar's bones, skipping the need to do it in Warudo."
sidebar_position: 1
---

This does exactly what [Hai's Denormalized Exporter](https://docs.hai-vr.dev/docs/products/denormalized-avatar-exporter) does, allowing you to export your avatar without the destructive [Character Setup](https://docs.warudo.app/docs/modding/character-mod#step-2-setup-character) step.

Key difference from Hai's exporter is that since this runs as a NDMF pass, your animations no longer break due to the exporter renaming and moving bones around.

This feature comes with the following option(s):

## Reset Pose to Humanoid Rig Config Pose:
This option resets avatar's pose in the scene to the pose it has in the humanoid rig config, which should be a T Pose. A T Pose in the scene is required for normalizing to work correctly, otherwise the default pose in Warudo might look wrong. An A pose, for example, will lead to the arms pointing too far behind the avatar's back.