import autoupdate from '/static/img/transformclient/auto-update.png';
import pendingchanges from '/static/img/transformclient/pending-changes.png';

# Update Mode

There are two Update Modes available, which can be toggled in the Transport Pane:

* **Auto Update**: Cues are updated automatically
* **Pending Update**: Cues must be updated manually

## Auto Update

In **Auto Update** mode, changes made to Plugin Instances will automatically be saved into the current Live Cue for that
Plugin Instance. The Live Cue is the last Cue to be fired for a Plugin Instance, and can be seen in the
Plugin Instance detail pane.

<img src={autoupdate} alt="Auto-Update Mode Enabled" width="250" />

In the case where there is no Live Cue shown in the Plugin Instance detail pane (perhaps because no
Cues have been recalled yet), the data will be stored into the active Cue of the [Primary Cuelist](./cuelists.md#primary-cuelist).

## Pending Update

In Pending Update mode, changes are never automatically saved into a Cue.
Upon making a change to a plugin, the Update button will illuminate in Orange in the Transport Pane,
indicating that there are unsaved pending changes:

<img src={pendingchanges} alt="Pending Update Mode Enabled" width="250" />

You then have two choices:

* **Update Live Cues**: by clicking on the Update button, all pending changes will be saved into the currently-live Cue for each Plugin Instance.
* **Discard Changes**: by clicking on the Discard icon, all pending changes will be discarded, and
  the previously-saved Cue data will be restored. If there is no previously-saved Cue data, the
  pending changes are simply discarded, but the Plugin Instances are unchanged.

:::info

If a plugin instance has a Pending Update that's not yet saved/discarded, an asterisk (*) is shown before the name in the Home tab.

:::
