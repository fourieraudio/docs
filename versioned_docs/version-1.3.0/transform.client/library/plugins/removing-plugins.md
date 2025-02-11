---
sidebar_position: 31
sidebar_label: Removing Plugins
---

# Removing Plugins

Removing plugins from your **transform**.engine is manufacturer specific.

The most common method, is to search for 'Apps and Features' in the search bar, locate your plugin(s) and select 'Uninstall'.

If this isn't an option, or the uninstallation process doesn't work as you expect, you can manually delete plugins from the relevant folder, dependent on where the manufacturer has installed them. The most common locations to find plugins are:

- **'C' Drive -> Program Files -> Common Files -> VST3**
- **'C' Drive -> Program Files -> Steinberg -> VstPlugins**
- **'C' Drive -> Program Files -> VSTPlugins**
- **'C' Drive -> Program Files (x86) -> Common Files -> VST3**
- **'C' Drive -> Program Files (x86) -> VSTPlugins**

To ensure you are deleting the correct file, it will be a **.vst3** file format you are looking for. Select the plugin you want to remove and delete it.

:::tip

Plugins still showing in the Library tab? Once a showfile has 'seen' a plugin, it will always be shown even if not installed. Any plugins that are not installed on the **transform**.engine have a warning sign next to them.

You can update the Library plugin list to only include installed plugins by creating a new Showfile.
:::
