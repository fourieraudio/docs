---
sidebar_position: 11
---

# Dante

## Getting Started with Dante

Dante is the audio transport protocol that the **transform**.engine uses. The device acts as a standard Dante device, so if you're familiar with Dante device setup, you should be good to go!

If you are new to the Dante ecosystem, you can check out Audinate's (the company behind Dante) quick and easy training videos [here](https://my.audinate.com/resources/training-and-tutorials/getting-started-with-dante).

## Latest Version of Audinate Dante Controller

You'll want to have Dante Controller installed to manage the Dante network. To grab the latest
version, [click here!](https://www.audinate.com/products/software/dante-controller)

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

### Energey Efficient Ethernet (EEE)

- EEE or 'Green ethernet' (IEEE 802.3az) should be turned off on all Dante networks. If not, it can result in poor synchronization and cause audio dropouts.

## Considerations

- **Running a Primary, Secondary and/ or Control Network**: A singular Primary network connection is
  sufficient, including for Control data. However adding a Secondary network can add network
  redundancy. A Control network can be used in addition to a Primary/Secondary network to reduce
  network traffic on your audio network or allow access by devices which are not present on the
  audio network.
- **PTP Clock Leader**: for optimum running of your network, it is essential for your network to
  have a suitable PTP clock leader. The clock leader will be automatically selected by PTP using an
  election process to select the most suitable device: you can manually influence this using the
  `Preferred Leader` setting: the election will pick a device with `Preferred Leader` set over one
  that does not. The **transform**.engine supports being a PTP clock leader if required.

Example system configurations can be found [here!](dante-network-examples.md)

For further information about Dante network settings and support, please visit: https://www.audinate.com/support
