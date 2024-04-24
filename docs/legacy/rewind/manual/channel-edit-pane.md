---
sidebar_position: 6
---

# Channel Edit Pane
The channel edit pane can be opened with the ![pencil](/img/rewind/ui-edit-pencil.png) edit button from the
Rewind main interface.

![Channel Edit Pane](/img/rewind/edit-pane.png)

The channel edit pane can be used to configure the channels in your show.

Each channel can optionally be labelled and have a colour assigned. If assigned,
they will be shown in the [Channel Selection Region](channel-selection-region.md):
![Channel Selection Button with label and colour](/img/rewind/ui-channel-button.png).

You can copy and paste channel name data directly into *Rewind* from your favourite
spreadsheet application.

The **Stereo** column allows you to mark two channels as being a stereo pair. Doing so will cause
them to be selected and de-selected together, and will pan the channels hard left and right
appropriately.

If you get excited about this sort of thing (I know I do), *Rewind* uses the panning law due to
[Bennett et al.](https://www.aes.org/e-lib/browse.cfm?elib=4449) (equal-power tangent law) with a 90
degree azimuth range.
