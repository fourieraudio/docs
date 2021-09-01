---
sidebar_position: 7
---

# Configuration Pane
The configuration pane allows you to configure two types of setting:

* **System Settings**: These are local to your computer, and relate to the particular audio
  configuration of that machine. They are not saved in your [showfile](showfiles).

* **User Settings**: These are settings that relate to how you want Rewind to act, and are not
  specific to a given computer. They are saved into your [showfile](showfiles).

Use the tabs to navigate between the two types of setting.

## System Settings

![System Settings Tab](/img/rewind/ui-config.png)

The system settings tab allows you to configure parameters relating to the audio engine.
You can select a sample rate (leave unselected to fall back on the *Core Audio* default, usually
44.1 kHz) and an IO device to use to send and receive audio.

Changing these settings will restart *Rewind*.

## User Settings

![User Settings Tab](/img/rewind/ui-config-user.png)

There is one available user setting:

* **Solo Mode**: If you select **Add**, then you can select multiple channels at once. If you
  select **Steal**, you can't; selecting a new channel will deselect the previously selected
  channel.
