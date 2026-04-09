---
sidebar_position: 11
---

# Troubleshooting

### Top Tips

First thing to check if you're encountering problems is your **transform**.engine and
**transform**.client software versions. Ensuring these are on the latest versions will ensure you're
starting from a great foundation.

### Connectivity Issues

**Unable to connect to your transform.engine?** Check your **transform**.engine has the expected IP
address using the OLED display on the front of the unit.

If correct, check that the computer running the **transform**.client is on the correct IP address
and the same subnet (and, indeed, the same network!). A quick way to check devices are visible to
each other is using a `ping` command (using `cmd.exe` for Windows and Terminal program on Mac).

A top tip at this point is to look in Dante Controller, even if your devices are in different
subnets: Dante Controller discovery should hopefully see them in 'Device Info' and also very
handily tell you the subnet of the troublesome device along with the subnet of your device.

If unable to ping or see the **transform**.engine in Dante Controller, plug a cable directly between
computer and **transform**.engine, try `ping` command again. If this works, it suggests an issue
with your network: check the various devices and cabling are not damaged / cut / eaten by a rat, and
that the network settings on the switches have been configured correctly.

### Common Dante Issues

**Devices appearing as red in 'Device Info'?** Check devices are in the same subnet as your system.

**Unable to make crosspoints between devices?** Check the sample rate for each device is configured correctly.

**Device appearing online then offline, repeatably?** Check there isn't two or more devices with the same IP address on the network.

For further information about Dante network settings and support, please visit: [Audinate Dante Support](https://www.audinate.com/support).
