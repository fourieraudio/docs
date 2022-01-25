---
sidebar_position: 8
---

# Local Monitoring

In situations where you wish to use the computer's local monitoring output (such as wired headphone output) to monitor another device (such as Dante Virtual Soundcard), you can make use of Apple's Aggregate Device functionality, combined with Rewind's output channel selector.

Firstly, open macOS Audio MIDI Setup from /Applications/Utilities:

![overview](/img/rewind/audiomidi-overview.png)


Then click on the plus ![plus](/img/rewind/audiomidi-plus.png), and select 'Create Aggregate Device'.

![aggregate-overview](/img/rewind/audiomidi-aggregate-overview.png)

Under the 'Use' column, first select and tick the audio interface which you wish to monitor using Rewind. Then select the output device you wish to listen with.

![aggregate-setup](/img/rewind/audiomidi-aggregate-setup.png)

Take note of the numbers of the outputs shown in a different colour (in this case, red), ensure that the clock source is configured to the input device, and that the sample rate is as per its specification.

In Rewind, open the configuration pane, and configure the Sample Rate and IO Device to that of the newly created Aggregate Device. Also, set the Output Assignments to the numbers as noted above.

![config](/img/rewind/ui-config.png)

Select 'Apply Settings & Restart'.

Rewind will now use the Aggregate Device to monitor your inputs, with Rewind's output routed to your local monitoring output.
