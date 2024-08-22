---
sidebar_position: 11
---

import pluginhealthy from '/static/img/transformclient/plugin-healthy-lets-go.png';
import pluginspinning from '/static/img/transformclient/plugin-spinning-up.png';
import pluginnotinstalled from '/static/img/transformclient/plugin-not-installed-in-showfile.png';
import pluginsmite from '/static/img/transformclient/plugin-smite.png';
import pluginfailed from '/static/img/transformclient/plugin-failed.png';
import pluginbypass from '/static/img/transformclient/plugin-bypass.png';

# Plugin Chains

With patent-pending technology, the **transform**.engine not only reboots a plugin if it crashes but it also leaves all other plugin chains unaffected.

Click add and a plugin chain will appear, with audio passing from top to bottom.

- Name - Definable text and colour
- Input - Select Audio input
- Plus - Add plugins
- Delay Compensation - Auto-align your outputs, more info [here](delay-compensation.md).
- Output - Select Audio output

Five different states of your plugins:

1. <img src={pluginhealthy} alt="Plugin status - healthy - no icon" width="100" /> **Healthy, happy and ready to go.** Plugin is processing audio.

2. <img src={pluginspinning} alt="Plugin status - lightning bolt" width="100" /> **Lightning bolt**- your plugin/chain is not ready yet, but it is spinning up and will be ready shortly.

3. <img src={pluginnotinstalled} alt="Plugin status - exclamation mark" width="100" /> **Exclamation
   mark**- your plugin is in the showfile but it is not installed in plugin host environment. No
   audio will pass. For handy guides on installing plugins, see
   [here!](../library/plugins/plugins.md) If you don't want to install the plugin, smite or delete
   it (see below).

4. <img src={pluginsmite} alt="Plugin status - target mark" width="100" /> **Smite**- this plugin is smitten: it is doing nothing (see below).

5. <img src={pluginbypass} alt="Plugin status - bypass" width="100" /> **Bypass**- this plugin is bypassed, audio will skip the plugin. A quick way to A/B your processing without loss of audio!

6. <img src={pluginfailed} alt="Plugin status - failed icon" width="100" /> **Failed**- The system has tried to get this plugin to start but has failed. Try using the 'Test Run' feature in Add/Remove plugins.

Whilst in the top tool bar, you'll see a 'DSP load' bar, to give you a live indication of how much processing power is being used by your plugins. For a more detailed look, click on it and you will be taken to the [Performance](../system/performance.md) tab.

![Home tab with 6 chains](/img/transformclient/home-chains.png)

It's as simple as it looks, leaving you to build the perfect chain as soon as possible.

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

## Copy/Paste Plugin State
You can use the "Copy" and "Paste" buttons in the detail pane for a Plugin Instance to copy the
state of that instance to any other instance of the same type.

## Move/Renumber Chains

By selecting a chain, you can either move the chain left/right, or alternatively renumber the chain.
