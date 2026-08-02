---
description: How to update the exporter in your project?
sidebar_position: 20
---
# Updating the Exporter

How the heck do I update the exporter in my project?  
To do this you need to delete the old files imported by the previous exporter import and the ones created by Warudo SDK.  

Luckily the process is pretty simple:
- Delete **\<your project\>/Packages/io.github.rurre.warudo-exporter/** folder.
  - Alternatively, in Unity, at the top, go to **Window** > **Package Manager** find **Pumkin's Warudo Exporter** and remove it from there.
- If you already imported the Warudo SDK, also delete **\<your project\>/Assets/Warudo**, **\<your project\>/Assets/Warudo SDK** and **\<your project\>/Assets/Packages** folders.
- If updating from a super old version, also delete the **\<your project\>/Assets/Pumkin/** folder, if it exists.
- Finally, import the new Unity Package.

Alternatively, if you can't do this, starting a new project is always an option.