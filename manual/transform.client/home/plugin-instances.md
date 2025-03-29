---
sidebar_position: 12
---

# Plugin Instances

With a plugin instance selected, you have a number of different options at your disposal in the detail pane at the bottom of the window.

![Density Control](/img/transformclient/plugin-instance-detail-pane.png)

## Copy/Paste Plugin State
You can use the "Copy" and "Paste" buttons to copy the state of that instance
to any other instance of the same type.

## Reported Latency
Plugins report the amount of latency that they add to the chain. This value is updated when
the chain starts and is used for [latency compensation](delay-compensation.md).

## Live Cue
If you make changes to a plugin, the plugin will be saved into the live cue,
either automatically if auto-update is on, or when you click "update" if not.
This indicator shows you the currently live cue for the plugin.

## Bus Config
You can use this section to select the plugin's audio bus configuration between the different
options made available by the plugin. For example, this might allow you to
change between e.g. Stereo, Stereo with sidechain, or Surround modes.


:::note
If there are no bus configurations shown, you may need to re-scan your plugins: you will be
prompted to do this in the [Library Tab](../library) if this is the case.
:::

The sidechain patch selector allows you to select the source for the sidechain
input to the plugin, if supported by the plugin:

![Sidechain Patch Selector](/img/transformclient/sidechain-patch-selector.png)

## Smite

If a plugin is misbehaving, or you just decide that you wish to terminate its continued existence
for the hell of it without removing it from the chain and losing its configuration, you can `Smite`
a plugin. This will kill the plugin and unload it from the chain. Audio will be interrupted when
this happens, but once smitten, the plugin will consume zero DSP resources.

## Bypass

If you want to temporarily route audio around a plugin so that it bypasses the plugin's processing,
you should select `Bypass`. The plugin will still be loaded, but audio will temporarily skip that
plugin in the chain. Audio is not interrupted when you bypass/un-bypass a plugin, but the plugin will
continue to consume DSP resources.
