---
sidebar_position: 2
---

# Dante

Dante is one of the available audio transport protocols that can be used to connect **transform**.engine to the outside world. The device acts as a standard Dante device, so if you're familiar with Dante device setup, you should be good to go!

If you are new to the Dante ecosystem, you can check out some quick and easy training videos from Audinate (the company behind Dante) [here](https://www.getdante.com/resources/training).

## Dante Configuration

When using Dante, the principal audio configuration options can be found in Dante Controller.

You'll want to have Dante Controller installed to manage the Dante network. To grab the latest
version, [click here!](https://www.getdante.com/resources/software-downloads/#dante-controller)

When running Dante Controller, first click on the **transform**.engine that you wish to configure, and then select the "Device Config" tab.
There you are able to set the sample rate of that **transform**.engine, as well as the sample encoding and Dante network latency.

:::tip

To ensure Control and Primary network traffic are kept separate, Dante networks can not be configured via Control port of a **transform**.engine. If using a point to point audio connection, to patch the network you will need to break the connection, plug the primary ports of your Dante devices and computer into a switch, and then run Dante Controller on your computer to make subscriptions.

:::

### Considerations

- **Running a Primary, Secondary and/ or Control Network**: A singular Primary network connection is
  sufficient, including for Control data. However adding a Secondary network can add network
  redundancy. A Control network can be used in addition to a Primary/Secondary network to reduce
  network traffic on your audio network or allow access by devices which are not present on the
  audio network.
- **PTP Clock Leader**: all Dante networks must have a suitable PTP clock
  leader. The clock leader will be automatically selected by PTP using an
  election process to select the most suitable device. You can manually
  influence this using the `Preferred Leader` setting: the election will pick a
  device with `Preferred Leader` set over one that does not. The
  **transform**.engine supports being a PTP clock leader if required. If
  interfacing a console with a Dante network, ensure that the console and Dante
  network are using the same clock or an appropriate ASRC if required.

Example system configurations can be found [here](network-connections.md).

For further information about Dante network settings and support, please visit: https://support.getdante.com

### Sample Rates

Available sample rates are:

- 44.1 kHz
- 48 kHz
- 96 kHz

Setting the sample rate in Dante Controller will configure the entire **transform**.engine audio pipeline.

### Sample Encodings

Internally, the **transform**.engine audio pipeline is 64 bit floating point
throughout. However, for transmission on the Dante network, samples are
exchanged in one of the following encodings, selectable in Dante Controller:

* PCM16
* PCM24
* PCM32

### Dante Device Network Latencies

The available Dante device latencies are:

* 1 ms
* 2 ms
* 3 ms
* 4 ms
* 5 ms
* 10 ms

Device latencies are configured in Dante Controller.
In a Dante network, the highest device latency of the two devices in a unicast flow is selected to be the effective latency for that flow.

## Recommend Dante Network Configuration

### Gigabit Ethernet

Data rates on Dante networks can become high very quickly. You **must** use a Gigabit (IEEE 802.3ab)
Ethernet network to use **transform**.engine; `100BASE-T` (IEEE 802.3u) networks are **not supported**.

### QoS Settings

| Priority | Usage                    | DSCP Label  | Hex  | Decimal | Binary   |
| -------- | ------------------------ | ----------- | ---- | ------- | ------   |
| High     | Time critical PTP events | CS7         | `0x38` | `56`  | `111000` |
| Medium   | Audio, PTP v2            | EF          | `0x2E` | `46`  | `101110` |
| Low      | (reserved)               | CS1         | `0x08` | `8`   | `001000` |
| None     | Other traffic            | Best Effort | `0x00` | `0`   | `000000` |

### IGMP

- Dante implements IGMP v2 or v3
- One IGMP Querier needed per VLAN
- Query intervals should be short, and time out values long.

### Energy Efficient Ethernet (EEE)

- EEE or 'Green Ethernet' (IEEE 802.3az) should be turned off on all Dante networks. If not, it can result in poor synchronization and cause audio dropouts.
