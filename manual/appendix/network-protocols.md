# Network Ports and Protocols

**transform**.engine is a networked device, and in some networks it is useful
to have more information about the protocols that it uses.

For more information on anything listed here, please reach out to us at
support@fourieraudio.com.

## transform.engine - System

On all network interfaces, **transform**.engine may use the following network protocols:

| Protocol | UDP / TCP Ports            | Multicast Destination              |
|----------|----------------------------|------------------------------------|
| LLDP     |                            |                                    |
| ARP      |                            |                                    |
| ICMP     |                            |                                    |
| DHCP     | `67`, `68`                 |                                    |
| DNS      | `53`                       |                                    |
| mDNS     | `5353`                     | `224.0.0.251`                      |
| PTP      | `319`, `320`               | `224.0.1.107`, `224.0.1.129`-`132` |
| TCP      | `5900`-`5901`              |                                    |
| TCP      | `24601`-`24611`            |                                    |
| UDP      | client-selected >= `49142` |                                    |

## transform.engine - Dante

On the Dante network interfaces, **transform**.engine may additionally use the following network protocols:

| Protocol    | UDP / TCP Ports                              | Multicast Destination          |
|-------------|----------------------------------------------|--------------------------------|
| ATP Audio   | `4321`                                       | `239.255.0.0/16`               |
| AES67 Audio | `5004`                                       | `239.69.0.0/16`                |
| SAP         | `9875`                                       | `239.254.44.44`                |
| UDP         | `8700`-`8708`                                | `224.0.0.230`–`233`            |
| UDP         | `9998`                                       | `239.254.1.1`, `239.254.3.3`   |
| UDP         | `14336`-`14591 `                             |                                |
| UDP         | `4440`, `4444`, `4455`                       |                                |
| UDP         | `8000`-`8002`, `8028`-`8029`, `8753`, `8800` |                                |

If the device is enrolled in Dante Director, it may connect to the following endpoints:

* `device.director.dante.cloud`, UDP port `8000`
* `devices.director.dante.cloud`, UDP port `8000`

## transform.client
On startup, **transform**.client may connect to the following endpoint to check for available updates:
* `appdata.fourieraudio.com`, HTTPS port `443`.

When activating or deactivating **transform**.suite, **trandsform**.client may connect to the following endpoints:

* `verona.api.fourieraudio.com`, HTTPS port `443`
* `activation.paceap.com`, HTTPS port `443`
