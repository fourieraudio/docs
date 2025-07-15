---
sidebar_position: 20
---

import ReactPlayer from 'react-player'

# Plugin View

When you select a plugin by either double-clicking on it, or selecting it and clicking 'Open Plugin View', the plugin UI will open for you to work your magic! Plugin status is represented in the top bar of the plugin view. This includes:
- Smite
- Bypass
- Side Chain
- Plugin Instance Recall Safe

![Plugin UI open in teleporter view](@site/static/img/transformclient/v1.5/home-teleport.png)

It is also possible to expand the Plugin View by selecting the Maximise button in the top right of the Plugin View:

![Larger Plugin UI open in teleporter view](@site/static/img/transformclient/v1.5/home-teleport-large.png)

### Duplicate Teleporter

As the **transform**.engine is multi-client, multiple users on different computers can be editing different plugins at the same time! If you see this message, it means another instance of the **transform**.client has this plugin open. You'll need to wait until they've finished with the plugin before you can open it for editing.

![duplicate-teleporter](@site/static/img/transformclient/duplicate-teleporter-session.png)

### Teleporter Resting

Unfortunately, the teleporter session was working successfully but has died. Simply close the plugin view and reopen it to start a new teleporter session.

![teleporter-resting](@site/static/img/transformclient/teleporter-resting.png)

### Teleporter Session Failed

In the unlikely case that this has occured, it means the system has requested the plugin view from the host, but received nothing back. Or as we call it 'kicked the bucket', we'd recommend shutting the plugin view window and opening it again.

![teleporter-session-failed](@site/static/img/transformclient/teleporter-failed.png)
