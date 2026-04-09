---
sidebar_position: 3
---

import transportpane from '/static/img/transformclient/transport-pane.png';
import pendingchanges from '/static/img/transformclient/pending-changes.png';
import primarycuelist from '/static/img/transformclient/primary-cuelist.png';
import cuelistview from '/static/img/transformclient/cuelist-view.png';
import fire from '/static/img/transformclient/fire.png';

# Transport Control

The Transport Control is always visible in the bottom right corner of the **transform**.client
software.

It provides an overview of the current state of the Cuelist system, along with some top-level
controls:

<img src={transportpane} alt="Transport Pane" width="250" />


## Auto Update / Pending Update
The top section allows you to change between the [Auto Update and Pending Update modes](./update-modes.md), and allows you to Update Cues if required in Pending Update mode.

<img src={pendingchanges} alt="Pending Changes" width="250" />

## Primary Cuelist Selector
The Primary Cuelist selector enables you to choose a Cuelist to be the [Primary Cuelist](./cuelists.md#primary-cuelist). The chosen Cuelist is shown in the Cuelist mini-view below.

<img src={primarycuelist} alt="Primary Cuelist" width="250" />

:::tip

The Primary Cuelist is always the one shown in the Transport Pane.

:::

## Cuelist Mini-View
This view provides a preview of the Cues in the Primary Cuelist, with the current Active Cue
indicated in green. You can also see the Pending Cue, indicated in Orange, which will be fired
when the "Fire" button is pushed below.

Click a Cue to select it, or double click a Cue to set it as pending.
You can also use the up/down arrows to change the Pending Cue.

<img src={cuelistview} alt="Cuelist View" width="250" />

## FIRE

The bottom section is primarily reserved for the Fire button. By clicking on this, the *Pending Cue* (in orange) in the Primary Cuelist will be fired!
<img src={fire} alt="Fire" width="250" />

The "Go Back" button is useful if you are too trigger-happy with the Fire button.
It will fire the Cue before the currently active Cue.
