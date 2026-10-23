---
sidebar_position: 3
---

# Patch Bay

The Patch Bay is where channels in a showfile are assigned to chain inputs and
outputs. It provides a single view of the whole showfile, making it easy to make
quick edits across the entire system.

![Patch Bay input view](/img/transformclient/v1.7.0/patch-bay-input.png)

Select the **System** tab, then select **Patch Bay** from the sidebar.
Alternatively, a navigation button can be found in the input/output routing section of the routing view within the detail pane
for a chain.

![Patch Bay navigation button](/img/transformclient/v1.7.0/patch-bay-nav-button.png)

- Each row represents a chain in the current showfile.
- The numbered columns represent the available audio channels, either Inputs or Outputs per the state of the toggle above the grid.
- A highlighted cell marks an established patch between that channel and the chain on the same row.

![Patch Bay output view](/img/transformclient/v1.7.0/patch-bay-output.png)

Selecting a cell toggles the patch. To repatch several chains, drag across the relevant cells.

By default, dragging respects each chain's existing channel count. Enable
**Override channel count** to set a different channel count while dragging; for
example, to force a range of chains to be stereo.

When unpatching, dragging over any existing patches will remove whatever is highlighted in the grid.

:::warning

Adjusting the patching of a chain will restart the chain, causing a momentary interruption in audio.

:::

## Reset or Rebuild Patching

Whilst in patch view, the action menu provides two bulk actions to speed up making sweeping changes quickly. These actions apply to the Inputs or Outputs only, per the currently selected state of the In / Out toggle:

- **Unpatch All Input/Output Channels** clears the current patching, allowing
  the patch to be assigned again from an empty state.
- **Diagonal Repatch All Input/Output Channels** rebuilds the
  channel order across the chains in the grid. Enable **Override channel count** to set a different channel count for all chains; for
example, to set all chains to have stereo inputs.
