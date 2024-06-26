---
sidebar_position: 7
---

# Configuration Pane
The configuration pane can be opened with the ![cog](/img/rewind/ui-cog.png) cog button from the
Rewind main interface.

The configuration pane allows you to configure two types of setting:

* **System Settings**: These are local to your computer, and relate to the particular audio
  configuration of that machine. They are not saved in your [showfile](showfiles.md).

* **User Settings**: These are settings that relate to how you want Rewind to act, and are not
  specific to a given computer. They are saved into your [showfile](showfiles.md).

Use the tabs to navigate between the two types of setting.

## System Settings

![System Settings Tab](/img/rewind/ui-config.png)

The system settings tab allows you to configure parameters relating to the audio engine.

You can select:

* the IO device to be used to send and receive audio
* a sample rate to which the IO device will be set when Rewind starts. Selecting (system default)
  will select 44.1 kHz for *Core Audio* devices.
* The number of input channels that you want Rewind to process.  The number of channels enabled by
  your licence is shown; to increase the number of available channels, you can
  [contact support](mailto:support@fourieraudio.com) to purchase an upgrade.
* The amount of Time Travel you want Rewind to make available.
* Which channels on the IO device you want the output to be mapped to.

If the default IO is selected, the system will try to use the default devices (configured in macOS *System Preferences*), creating an aggregate device if necessary. Therefore both the default input and output devices must run at the same sample rate or Rewind will fail to start.

Rewind will not let you configure it such that there is less than 4 GiB of RAM available for your
system to perform background operations. The amount of RAM consumed by Rewind in the currently
selected configuration is shown by the RAM Consumption slider.

Changing these settings will restart *Rewind*.

## User Settings

![User Settings Tab](/img/rewind/ui-config-user.png)

There is one available user setting:

* **Solo Mode**: If you select **Additive**, then you can select multiple channels at once. If you
  select **Exclusive**, you can't; selecting a new channel will deselect the previously selected
  channel.
