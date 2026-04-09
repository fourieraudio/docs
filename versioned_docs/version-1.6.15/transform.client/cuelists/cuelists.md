---
sidebar_position: 3
---

# Cuelists

Cuelists each contain multiple Cues, and can be found in the Cuelists tab at the top left of the **transform**.client.
![Cuelist MIDI Configuration](@site/static/img/transformclient/v1.5/cuelists-nofilter.png)

Cuelists have the following key features:
* It is possible to have multiple Cuelists, all containing multiple Cues.
* Each Cuelist can be triggered by a different MIDI personality and channel, enabling you to trigger **transform**.engine Cues remotely.
* Each Cuelist can have a recall filter, enabling you to select which chains you wish each Cuelist to target.

Each Cuelist has two special Cues:
* The **Active Cue** is the Cue that was most recently fired in that Cuelist. It is shown in green.
* The **Pending Cue** is the Cue that will be fired if you execute a "Fire" operation on this
  Cuelist. It is shown in orange.

Click a Cue to select it, or double click a Cue to set it as pending.

## Primary Cuelist

The Primary Cuelist serves two key functions:

* It is the Cuelist that is displayed at all times in the Transport Control (in the bottom right-hand
  corner of the UI). Pushing the "Fire" button will always fire the Pending Cue on the Primary
  Cuelist.
* If the system is in Auto-Update mode and there is no Live Cue loaded on a given Plugin Instance
  (so the system has no way of knowing where the change should be saved), the change will be saved
  into the currently loaded Cue of the Primary Cuelist.

You can change the Primary Cuelist using the drop-down selector in the Transport Control (in the
bottom right-hand corner of the UI), or by selecting the Cuelist and choosing "Set As Primary" in
the action menu.
