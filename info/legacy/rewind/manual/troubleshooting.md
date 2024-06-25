---
sidebar_position: 12
---

# Troubleshooting
- [Rewind fails to load due to audio configuration error](#rewind-fails-to-load-due-to-audio-configuration-error)

### Rewind fails to load due to audio configuration error
The following error may be shown on start up if Rewind fails to load due to to an audio configuration error:

![Audio Configuration Error](/img/rewind/audio-config-error.png)

This occurs when the Jack server has failed to load with either the selected, or default (if starting Rewind for the first time) audio IO and sample rate (as configured in the [configuration pane](configuration-pane.md)).

By selecting 'No!! Go away.', Rewind will quit.

By selecting 'Yes please', Rewind will restart with the default system audio IO and sample rate (as configured in macOS *System Preferences* and *Audio MIDI Setup*).

When loading with the default devices, Rewind may create an aggregate device if necessary (ie. if the default audio input device is different to the output device). Therefore both the default input and output devices must run at the same sample rate or Rewind will fail to start.

Should Rewind continue to fail to start after selecting 'Yes please', select the system's local IO as the default device (in macOS *System Preferences*), and then once Rewind has successfully launched, select your desired configuration in the [configuration pane](configuration-pane.md). The system default can then be reverted to your preference.
