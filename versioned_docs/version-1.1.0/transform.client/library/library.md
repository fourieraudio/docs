---
sidebar_position: 3
---

# Library

A simple overview of plugins in this showfile. The library tab shows the plugins that are currently
available, or have been available to this showfile at some point in the past. Your showfile may
reference plugins which are currently not installed, and they will be indicated in this view if so.

If it is your first time using your **transform**.engine, we have created a handy guide for manufacturer specific plugin installation and licensing, see the side bar!

If we have missed any manufacturers, please don't hesitate to get in touch on [hello@fourieraudio.com](mailto:hello@fouieraudio.com) and we will be more than happy to add them.

## Plugin Scanner

Clicking the `Add/Remove Plugins` button in the library view shows you the installed plugins view,
showing only those plugins present on the current engine. From here, you can open the plugin host
view to install new plugins, and kick off the plugin scanner.

The plugin scanner is the bouncer allowing your plugins into the host environment. It will check the
plugins are good to go, right format, ticks all the relevant requirements, and ready for you to spin
them up! 

Once your plugins are installed and scanned, you'll see them all handily arranged in a table with
the following columns:

- **Name:** As suggests!
- **Vendor:** Creator of great plugin
- **Plugin Type:** VST3
- **Touch and Turn:** Whilst this is less important for now, when console integration is available (**hold tight**), this column lets you know if 'Touch and Turn' will be supported on the console. This feature is implemented by the manufacturer of the plugin!

If your plugin has been successfully scanned before, the plugin scanner won't attempt to scan it again for all its requirements, it will give it a fast track entry to the showfile.

However, we know with some plugins, they may not appear after being scanned and you may want to force the plugin scanner to vigorously check for plugins again.
This is where you'll find two modes to rescan for plugins:

![plugin-scanner](@site/static/img/transformclient/quick-scan-full-rescan.png)

- **Quick Scan (New and Updated Only)** - This will quickly check for any new plugins, but not interrogating the existing ones.
- **Force Full Rescan** - This mode will brute force the plugin scanner to meticulously check every plugin meets the entry requirements.
