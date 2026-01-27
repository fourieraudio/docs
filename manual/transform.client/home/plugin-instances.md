---
sidebar_position: 12
---

# Plugin Instances

With a plugin instance selected, you have a number of different options at your disposal in the detail pane at the bottom of the window.

![Density Control](/img/transformclient/v1.6/plugin-instance-detail-pane.png)


## Presets
You can load or save a favourite plugin state. Create a preset from your current settings and it becomes a reusable starting point... that ripples everywhere! Any changes to a preset impact cues and chains across your showfile! Use it to jump in fast, then tweak locally. For management tasks like renaming, importing/exporting, or renumbering, go to the [Presets section of the Library](../library/presets.md).

## Reported Latency
Plugins report the amount of latency that they add to the chain. This value is updated when
the chain starts and is used for [latency compensation](latency-compensation.md).

## Connect Tempo
Enables the Global Tap Tempo to pass to the selected plugin instance. By default, a plugin instance is not connected to the Tap Tempo.

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
prompted to do this in the [Library Tab](../library/library.md) if this is the case.
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
