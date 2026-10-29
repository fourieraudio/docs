---
sidebar_position: 2
sidebar_label: HYPERPORT
---

# HYPERPORT
<!-- TODO Add photos of pcb. 
Confirm versions, replace TBC entries, and relevant support links -->

HYPERPORT is a low-latency, point-to-point audio protocol for connecting a
**transform**.engine directly to a compatible DiGiCo console or interface.

* 64 channels at 48 kHz or 96 kHz
* Down to 1.2 ms round-trip latency
* Plug-and-play: no configuration required
* Near-seamless redundant cable failover

If you are setting up **transform**.engine for the first time, begin
with the [HYPERPORT Quickstart](../getting-started/hyperport-quickstart.md).

HYPERPORT is a point-to-point Layer 2 protocol running over Gigabit Ethernet (802.3ab, 1000BASE-T). It is designed to connect two devices directly, and should not be routed via switches or other network infrastructure.

When using HYPERPORT, **transform**.engine follows the sample rate and clock
supplied by the connected console or audio interface. The sample rate is
automatically detected from the incoming HYPERPORT stream. Configure these
settings on the DiGiCo console or interface; **transform**.engine is never the
clock leader in HYPERPORT mode.

## Compatibility

### Supported Hardware

- **transform**.engine
- DiGiCo Quantum and SD consoles, via the following I/O:
  - Onboard Dante ports (Q1 / Q6)
  - Fourier Interface Card
  - DMI-DANTE64@96z cards manufactured from March 2023 onwards
- DiGiCo Orange Box with the following I/O:
  - DMI-DANTE64@96z cards manufactured from March 2023 onwards

DiGiCo DMI-DANTE64@96 cards manufactured before March 2023 do not support HYPERPORT.

:::info Identifying compatible DMI-DANTE64@96 cards

HYPERPORT is compatible with DMI-DANTE64@96z cards manufactured from March 2023
onwards; these use the Zynq HC module.  
For ***compatible*** cards:

- The card name shown in Quantum Update or Dante Controller has a `z` suffix, such as `DMI-Dante64@96z`.
- The Dante module is mounted on a black PCB.

Earlier cards use the Dante Summit HC module, which have a green module PCB
and do not show the `z` suffix in Quantum Update or Dante Controller. These earlier cards are not
compatible with HYPERPORT.

:::

### Supported Software

HYPERPORT requires **transform**.engine software
v1.7.0 or newer. Check your version under [System > Support &
Software](../transform.client/system/software.md) and follow the [upgrade
instructions](../transform.engine/engine-upgrade.md) if needed.

The DiGiCo console and audio interface must also be running software that
supports HYPERPORT.

**In all cases, the Console must be running version 22 or above.**

| DiGiCo audio interface  | Minimum interface software | Support and downloads | Tech Note |
| ----------------------- | -------------------------- | --------------------- | --------- |
| Onboard Dante (Q1 / Q6) | `2242.4` | [Quantum software downloads](https://support.digico.biz/hc/en-gb/sections/26355528481681-Quantum) |
| Fourier Interface Card  | `v1.0.24` | [DiGiCo support - FIC](https://support.digico.biz/hc/en-gb/articles/52315162397969-Fourier-Interface-Card-Installation-Files-For-Hyperport-Compatibility) | [TN756](https://support.digico.biz/hc/en-gb/articles/52315162397969-Fourier-Interface-Card-Installation-Files-For-Hyperport-Compatibility)
| DMI-DANTE64@96z (March 2023 onwards) | `07/10/2026 + 107 + 4.2.20` | [DiGiCo support - DMI](https://support.digico.biz/hc/en-gb/articles/52237900817297-DMI-Dante64-96z-Installation-Files-For-Hyperport-Compatibility) | [TN755](https://support.digico.biz/hc/en-gb/article_attachments/52376041992337)

See the assosciated documentation downloads on the
[DiGiCo support portal](https://support.digico.biz/hc/en-gb/sections/52084551036433-HYPERPORT)
for software requirements and update instructions for your interface.

## Connection & Setup Requirements

Connect the **transform**.engine primary interface and the console or interface's primary audio port directly via a CAT5e cable, point to point.
Optionally, also connect a cable between the secondary ports for near-instant failover in the event of failure of the primary link.
Configure **transform**.engine to use the HYPERPORT audio transport in [System Status](../transform.client/system/system-status.md).

When the console or interface detects HYPERPORT data on the Primary or Secondary ports, it exits Dante operation and switches automatically to HYPERPORT operation. No further configuration is necessary (or possible!). When the console or interface detects that there is no longer a HYPERPORT device attached, it returns to being an ordinary Dante device automatically.

HYPERPORT does not use IP addresses and requires no IP configuration.

HYPERPORT does not have any concept of patching. Channel 1 is always channel 1 at both ends.

All control data for **transform**.engine flows via the control port. HYPERPORT does not carry any control data; 
see [Network Connections](./network-connections.md) for more details.
  
<!--
### Connection diagrams

#### Direct Console Connection

:::note Direct Console Connection

:::

#### Orange Box Connection

:::note Orange Box Connection

:::
!-->
## Latency

At 96 kHz with a 32-sample period, **transform**.engine via HYPERPORT has a headline round-trip latency
of **1.226 ms**, measured at the DiGiCo HYPERPORT interface.
Sample rate conversion, console routing and insert points may add small amounts
of additional latency depending on hardware and configuration, as with Dante.
Increasing the period size gives plugins more processing time, but also
increases latency; see [Roundtrip Latency](../connections/roundtrip-latency.md).


## Considerations

- The **transform**.engine's sample rate is automatically detected from the connected HYPERPORT stream.
- The console interface must be running compatible software for a HYPERPORT connection. 
- **transform**.engine cannot be clock leader to an interface while in HYPERPORT mode.
- Dante devices will not remain available through a port or card that is operating in HYPERPORT mode.
- HYPERPORT cannot operate via a switch.

## Cables

STP CAT5e (or higher specification) cables should be used for all HYPERPORT audio links.

The maximum cable length is 100 m.

## Troubleshooting

If HYPERPORT is not working:

1. Check that both **transform**.client and **transform**.engine are running v1.7.0 or newer and that the console or interface meets the [compatibility requirements](#compatibility).
2. Check that the Primary port is connected directly to the Primary port of the console or interface, without a network switch. Connect **transform**.client to the **transform**.engine through the Control port.
3. Under [System > System Status](../transform.client/system/system-status.md),
   check that **HYPERPORT** is selected and the period size is 32, 64 or 128
   samples. Enter **Offline Mode** before changing either setting, then return
   to **Edit Mode** and wait for the audio engine to start.
4. If the problem remains, reproduce it and [download the logs](../transform.client/system/software.md#log-files) and e-mail us at support@fourieraudio.com.
