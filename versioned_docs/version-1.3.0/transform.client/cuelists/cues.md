---
sidebar_position: 1
---

import autoupdate from '/static/img/transformclient/auto-update.png';
import pendingchanges from '/static/img/transformclient/pending-changes.png';
import recordCue from '/static/img/transformclient/record-cue.png';


# Cues

Cues store the state of every Instance in the system at the point at which they are recorded, including:

* **Plugin Data** - the configuration of all of the Plugin Instance's parameters.
* **Bypass** - the state of the Bypass toggle for the Plugin Instance.

Cues do not store anything about the "structure" of the Showfile: the configured Chains, or which
Plugin Instances are loaded into which Chain.

By selecting a Cuelist in the left-hand pane, you will be presented with all of the Cues in that Cuelist.
![Cuelist MIDI Configuration](@site/static/img/transformclient/cuelists-nofilter.png)

You can add a new Cue after the currently active Cue (or the first in the Cuelist) by clicking on the Record Cue button:

<img src={recordCue} alt="Record Cue Button" width="250" />

This will record all currently-live Cue data into that Cue.

## Cue Actions

Click on a Cue to select it. Once selected, the Action Menu on the right hand side of the UI
presents various exciting possibilities:

* **Fire Cue** - fire the selected Cue.
* **Set As Pending** - set the selected Cue as the Pending Cue (i.e. the Cue fired when you push
  "Fire")
* **Rename Cue** - rename the currently selected Cue with a text string.
* **Renumber Cue** - change the number of the currently selected Cue with format #.#
* **Delete** - delete the currently selected Cue.

