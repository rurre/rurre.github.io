---
title: "Add VRM 0.x Blendshape Proxy if Missing"
description: "This feature automatically adds a VRM Blendshape Proxy for lipsyncing and blinking when not using face tracking."
sidebar_position: 7
---

This feature allows the exporter to automatically add a [VRM Blendshape Proxy](https://vrm.dev/en/univrm/blendshape/univrm_blendshape/) to your avatar if one isn't already on it. This allows your avatar to have lipsync if not using face tracking or if not using correct blendshape names for Warudo to pick up automatically.

If a VRM Blendshape Proxy gets added, a bunch of lipsync related blendshapes clips are also added to it. The tool then attemps to match a blendshape to that clip. It tries to find a blendshape with the following names, from left to right:

<table>
	<tr>
		<th>VRM Blendshape</th>
		<th>Possible Matches</th>
	</tr>
	<tr>
		<td>A</td>
		<td>A, あ, vrc.v_aa</td>
	</tr>
	<tr>
		<td>I</td>
		<td>I, い, vrc.v_ih</td>
	</tr>
	<tr>
		<td>U</td>
		<td>U, う, vrc.v_ou</td>
	</tr>
	<tr>
		<td>E</td>
		<td>E, え, vrc.v_e</td>
	</tr>
	<tr>
		<td>O</td>
		<td>O, お, vrc.v_oh</td>
	</tr>
	<tr>
		<td>Blink_L</td>
		<td>Blink_L, Eyes_Wink_L, eye_brink_1_L, eye_close_L, eye_joy_L, ウィンク, eye_blink_L</td>
	</tr>
	<tr>
		<td>Blink_R</td>
		<td>Blink_R, Eyes_Wink_R, eye_brink_1_R, eye_close_R, eye_joy_R, ウィンク右, eye_blink_R</td>
	</tr>
</table>

:::note
There is currently no way to edit what Blendshapes this feature tries to pick up aside from editing the script directly. This will be customizable in the future.
:::

This feature comes with the following option(s):

## Blendshape Proxy Face Mesh
This field picks the mesh the VRM Blendshape Proxy will search for Blendshapes on, and later use in Warudo.

If this field is empty, it will try to automatically pick a mesh based on the VRC Avatar Descriptor's assigned `Face Mesh`.

If this field is still empty when exporting, it'll try to find a mesh by comparing blendshape names to the ones we're looking for. If more than half are found, that mesh gets selected.