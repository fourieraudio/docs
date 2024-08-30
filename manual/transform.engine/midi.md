---
sidebar_position: 31
sidebar_label: MIDI
---

# MIDI

**transform**.engine has one optoisolated 5-pin DIN MIDI interface, comprising an in an, out and a thru port.
The **transform**.engine supports the triggering of Cues by MIDI.

In order to connect your unit to your MIDI device, ensure that you connect your MIDI cable into the
'out' port of whichever MIDI device is sending the trigger command (say a console), and plug into
the 'in' port of the *transform*.engine.

As per the MIDI spec, MIDI cables should be no longer than 50 feet.

For further details of MIDI configuration, see:
* [Individual Cuelist MIDI](../transform.client/cuelists/midi.md)
* [Global MIDI](../transform.client/system/midi-io.md)

:::tip

Ensure that you have connected your MIDI cable to the **OUT** port of your console/MIDI device, and the **IN** port of the **transform**.engine.
:::

The transceiver supports MIDI Running Status.
The transceiver does not send Active Sensing messages or interact with any other System Real Time Messages in any way.
**transform**.engine operates exclusively in MIDI channel mode 3 (Omni off, Poly voices).
