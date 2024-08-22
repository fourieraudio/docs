---
sidebar_position: 20
---

import ReactPlayer from 'react-player'

# Plugin View

We call this 'The Teleporter', we stream the plugin view from the plugin host to the front end of the client!

### Healthy

When you select a plugin by either double-clicking on it, or selecting it and clicking 'Open Plugin View', the plugin UI will open for you to work your magic!

![Plugin UI open in teleporter view](@site/static/img/transformclient/home-teleport.png)

It is also possible to expand the Plugin View by selecting the Maximise button in the top right of the Plugin View:

![Larger Plugin UI open in teleporter view](@site/static/img/transformclient/home-teleport-large.png)

### Duplicate Teleporter

As the **transform**.engine is multi-client, multiple users on different computers can be editing different plugins at the same time! If you see this message, it means another instance of the **transform**.client has this plugin open. You'll need to wait until they've finished with the plugin before you can open it for editing.

### Teleporter Resting

Unfortunately, the teleporter session was working successfully but has died. Simply close the plugin view and reopen it to start a new teleporter session.

### Teleporter Session Failed

In the unlikely case that this has occured, it means the system has requested the plugin view from the host, but received nothing back. Or as we call it 'kicked the bucket', we'd recommend shutting the plugin view window and opening it again.
