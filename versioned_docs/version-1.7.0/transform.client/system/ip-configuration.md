---
sidebar_position: 6
sidebar_label: IP Configuration
---

# IP Configuration

The **IP Configuration** settings in **transform**.client let you view and configure the network interfaces on a connected **transform**.engine.

![IP Configuration settings](/img/transformclient/v1.7.0/ip-configuration.png)

## Network Interfaces

The capabilities of each physical network interface depend on the audio transport; for more information on how to connect each interface, see [Network Connections](../../connections/network-connections.md).

Each interface displays its current IP address and subnet prefix. A green
status indicator shows that the interface has an active link.

## Addressing Modes

Select an addressing mode independently for each interface:

| Mode | Description |
| ---- | ----------- |
| **Unconfigured** | Removes the IP configuration from the interface. |
| **DHCP** | Requests an address, subnet prefix and gateway from a DHCP server. If no DHCP server assigns an address, the interface will remain with no address at all. |
| **Link Local** | Automatically assigns an address in the `169.254.0.0/16` range, except on the Dante Secondary port, which uses `172.31.0.0/16` as required by Dante. This is recommended for simple networks such as when using a direct connection, or on networks without a DHCP server. |
| **Static IP** | Lets you enter a fixed IP address, subnet prefix and optional gateway. |

If a port is controlled by the currently selected audio transport, this is indicated in
the IP Configuration menu for that port. To regain control over the interface, change the currently selected Audio Transport in [System Status](../system-status).

:::warning

When configuring IP addresses, each interface must be on a non-overlapping subnet for proper operation.
If assigning addresses via DHCP, ensure that the DHCP server(s) assign addresses in non-overlapping subnets to each interface.

:::

## Configure a Static Address

1. Find the interface you want to configure.
2. Select **Static IP**.
3. Enter the following network details:

   - **IP Address**
   - **Subnet Prefix**
   - **Gateway**, if required

**transform**.client displays the subnet mask represented by the prefix length
below the Subnet Prefix control and validates the network details before
applying them. The gateway field can be left empty when no gateway is required.

:::caution

Changing the address of the interface currently used by **transform**.client
may disconnect the client. Reconnect using the interface's new address after
the change has been applied.

:::

### Addresses that cannot be used

The following IPv4 addresses and subnets cannot be assigned as a static IP
address:

| Address or subnet | Reason |
| ----------------- | ------ |
| `0.0.0.0/8` | Reserved for "this network"; `0.0.0.0` also means that an interface is unconfigured. |
| `100.64.0.0/10` | Reserved for internal communication within **transform**.engine. Using it on an external interface may prevent the system from operating correctly. |
| `127.0.0.0/8` | Reserved for loopback traffic and cannot identify an external interface. |
| `224.0.0.0/4` | Reserved for multicast and cannot be used as an endpoint address. |
| `255.255.255.255/32` | The limited broadcast address and cannot be used as an endpoint address. |

