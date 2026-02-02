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

![Plugin UI open in teleporter view](@site/static/img/transformclient/v1.6/home-teleport.png)

It is also possible to expand the Plugin View by selecting the Maximise button in the top right of the Plugin View:

![Larger Plugin UI open in teleporter view](@site/static/img/transformclient/v1.6/home-teleport-large.png)

### Typing & Modifier Keys

Text entry works directly inside Plugin View. Click into a text field in the plugin UI and type as you would in a DAW; common modifier keys (Ctrl/Cmd, Shift, Alt/Option) are passed through, so shortcuts and capitalisation behave as expected. This feature requires the teleporting client to be the transform.client application.

### Teleporter Resting

Unfortunately, the teleporter session was working successfully but has died. Simply close the plugin view and reopen it to start a new teleporter session.

![teleporter-resting](@site/static/img/transformclient/teleporter-resting.png)

### Teleporter Session Failed

In the unlikely case that this has occured, it means the system has requested the plugin view from the host, but received nothing back. Or as we call it 'kicked the bucket', we'd recommend shutting the plugin view window and opening it again.

![teleporter-session-failed](@site/static/img/transformclient/teleporter-failed.png)
