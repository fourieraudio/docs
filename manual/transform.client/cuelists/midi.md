---
sidebar_position: 3
---

# Cuelist MIDI

You can assign a MIDI Channel to control a specific Cuelist using the detail pane for the relevant Cuelist.

![Cuelist MIDI Configuration](@site/static/img/transformclient/cuelists-nofilter.png)

:::tip

Ensure that you have connected your MIDI cable to the **OUT** port of your console/MIDI device, and the **IN** port of the **transform**.engine.
:::

## Cuelist MIDI Personalities

Each Cuelist can have its own MIDI channel and personality assigned. The personality defines what
kind of MIDI messages the Cuelist will respond to.

:::note

Due to the limitations of MIDI, the range of Cues that can be fired via these simplified MIDI
personalities is limited. For full, unrestricted control, use the more complex [NRPN Engine MIDI
personality](../system/midi-io.md) instead of the per-Cuelist personalities.

:::

### Program Change

|||
|-|-|
| **MIDI Message Type** | Channel Voice: Program Change |
| **Mapping** | Program Change `X` fires Cue `X + 1` (e.g. to fire Cue `1`, send Program Change value `0`) |
| **Fires whole-number Cues** | ✅ 1-128 |
| **Fires point Cues** | ❌ |
| **Notes** | Bank Select messages are currently disregarded |

This personality is useful for firing Cues from SSL, Avid, Midas, and Yamaha consoles.

### Note

|||
|-|-|
| **MIDI Message Type** | Channel Voice: Note On |
| **Mapping** | Note `X`, Velocity `Y` fires Cue `X.Y` (see example below) |
| **Fires whole-number Cues** | ✅ 0-127 |
| **Fires point Cues** | ✅ 1-99 |

This personality is useful for firing Cues from almost any other device.

For example:

| Note Number | Velocity | Fires... |
|-|-|-|
| 1 | 0 | Cue 1 |
| 1 | 10 | Cue 1.1 |
| 1 | 01 | Cue 1.01 |
| 1 | 99 | Cue 1.99 |

### DiGiCo

DiGiCo consoles can output default MIDI Control Change messages when recalling a snapshot. This
personality responds to those default messages, recalling the Cue with the same index in the
snapshot list.

|||
|-|-|
| **MIDI Message Type** | Channel Voice: Control Change |
| **Mapping** | Controllers `16-19` recall Cues `1-510` (Controllers `16-18`: values `0-127`, Controller `19`: values `0-125`) |
| **Fires whole-number Cues** | ✅ 1-510 |
| **Fires point Cues** | ❌ |

For example:

| Controller Number | Control Change Value | Fires... |
|-|-|-|
| 16 | 0 | Cue 1 |
| 16 | 127 | Cue 128 |
| 17 | 0 | Cue 129 |
| 17 | 127 | Cue 256 |
| 18 | 0 | Cue 257 |
| 18 | 127 | Cue 384 |
| 19 | 0 | Cue 385 |
| 19 | 125 | Cue 510 |

:::tip

When connected to a DiGiCo console using this personality, you will most likely need to select MIDI
channel 16. Please refer to the console UI or manual for further details.

:::
