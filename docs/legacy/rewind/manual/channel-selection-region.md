---
sidebar_position: 5
---

# Channel Selection Region
![Channel Selection Region](/img/rewind/channel-selection.png)

The channel selection region is the region of the UI used to select channels.

When a channel is selected, its audio will be sent to the outputs. Additionally, a signal indicator
monitors each channel, and the selection button shows the configured colour and label.

The channel selection region automatically expands to the number of channels enabled by the
[licence](licensing.md) you have purchased. The screenshot shows a 32-channel configuration, with
channels 2 and 3 currently selected.

## Signal Indicators
Each channel has a signal indicator, which shows what Rewind is receiving on that channel:

* **Silence** ![Silence Signal Indicator](/img/rewind/ui-audioind-silence.png): There is no signal
  present.

* **Signal Present** ![Silence Present Indicator](/img/rewind/ui-audioind-signal.png): There is
  signal exceeding -70 dBFS present on the channel.

* **Signal Hot** ![Signal Hot Indicator](/img/rewind/ui-audioind-hot.png): There is signal present,
  and the time-windowed RMS average level exceeds -12 dBFS.

* **Signal Clip** ![Signal Clip Indicator](/img/rewind/ui-audioind-clip.png): There is signal present,
  and it is clipping. Sad!
