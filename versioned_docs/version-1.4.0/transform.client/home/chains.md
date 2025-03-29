---
sidebar_position: 11
---

import pluginhealthy from '/static/img/transformclient/plugin-healthy-lets-go.png';
import pluginspinning from '/static/img/transformclient/plugin-spinning-up.png';
import pluginnotinstalled from '/static/img/transformclient/plugin-not-installed-in-showfile.png';
import pluginsmite from '/static/img/transformclient/plugin-smite.png';
import pluginfailed from '/static/img/transformclient/plugin-failed.png';
import ungroup from '/static/img/transformclient/ungroup-button.png';

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

5. <img src={pluginfailed} alt="Plugin status - failed icon" width="100" /> **Failed**- The system has tried to get this plugin to start but has failed. Try using the 'Test Run' feature in Add/Remove plugins.

Whilst in the top tool bar, you'll see a 'DSP load' bar, to give you a live indication of how much processing power is being used by your plugins. For a more detailed look, click on it and you will be taken to the [Performance](../system/performance.md) tab.

![Home tab with 6 chains](/img/transformclient/home-chains.png)

It's as simple as it looks, leaving you to build the perfect chain as soon as possible.

## Detail Pane
With a chain selected, the detail pane at the bottom of the UI shows configuration relating to the chain.

![Detail pane for a chain](/img/transformclient/chain-detail-pane.png)

### Input / Output
Here you can configure the channels patched to the chain's inputs and outputs, as well as the "width" of the chain (how many channels of audio it contains). The options are **Mono**, **Stereo**, and **Multi**. The first two are hopefully self-explanatory, whilst **Multi** allows you to set up chains containing up to 64 audio channels (wow!), useful for surround-sound plugins.

Click the patch indicator to enter the patch selection view:

![Chain Patch View](/img/transformclient/patch-view.png)

This allows you to select which channels are used. By default, the patched channels are always grouped together in one contiguous block, but if you want to select arbitrary channels, you can toggle the "group channels" button:

<img src={ungroup} alt="Channel patch group toggle" width="100" />

### Chain Groups

In this section, you can assign a chain to one or more chain groups.
You can filter the displayed chains to only display the chains in a given group; see [chain groups](chain-groups.md) for more details.

### Latency Group

In this section, you can assign the chain to a single latency group to enable latency compensation for that chain. See [Delay Compensation](delay-compensation.md) for more info.

## View Controls
On the left hand side of the screen is the view controls menu.

### Chain Groups
By default, all chains are shown. If you have placed chains into [chain groups](chain-groups.md), you can select a chain group here to filter the display to only show the chains in that group:

![Chain Group Selected](/img/transformclient/chains-filtered.png)

### Plugin Grids
A [plugin grid](plugin-grids.md) is a saved layout of specific plugins in your show, allowing you to quickly access the plugins you need. To open a plugin grid, select it here:

![Selected Plugin Grid](/img/transformclient/grids-selected.png)

### View Density Control
By default, all chain information is shown in a low-density view. The density control lets you see less information about each chain, allowing you to see more chains at once:

![Density Control](/img/transformclient/density-control.png)

The other options available are medium density:
![Medium Density View](/img/transformclient/chains-medium-density.png)
And high density:
![High Density View](/img/transformclient/chains-high-density.png)
In each case, output meters are shown for each chain.

## Action Menu
With a chain selected, there are various actions available in the action menu on the right hand side of the screen.

### Move/Renumber Chains

Chains are displayed in numerical order. With these actions, you can either
move the chain left/right, or alternatively renumber the chain to an arbitrary number.

### Restart Chain

Selecting this option asks the **transform**.engine to stop all audio
processing for a chain, unload the plugins, and then restart the chain. This can be useful if a
plugin is misbehaving.

### Delete
If you don't like a chain, this option allows you to eliminate it. It's quite satisfying, really.
