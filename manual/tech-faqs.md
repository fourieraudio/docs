---
sidebar_position: 14
---

# Technical FAQs

This page features some commonly asked technical questions regarding the **transform**.engine.

## I cannot connect the **transform**.client to the **transform**.engine. Why?

This is likely due to a networking issue.

Firstly, check that the **transform**.engine has an IP address on the network interface that you are trying to connect to it using. You can do this using the front-panel menu on the **transform**.engine.

When using HYPERPORT, connect **transform**.client through the **Control** port; the Primary and Secondary ports are audio only and do not carry control data.

Then check the network configuration on your computer (the one with the **transform**.client on it).

Some things to check:

- The **transform**.engine IP address is **different** to the IP address of your computer.
- The **transform**.engine IP address is on the same subnet as you computer (i.e. if the **transform**.engine's IP address is `192.168.1.1` with a subnet mask of `255.255.255.0 (/24)`, then your computer must have an address in the `192.168.1.2+` range).
- Verify that you can `ping` the **transform**.engine from your computer using `cmd.exe` (Windows) or 'Terminal' (macOS).

## I am in 'Edit' mode, but the audio engine has not come online.

From a cold-boot, it can take approximately one minute for the audio engine to come online.

Check the selected **Audio Transport** under [System > System Status](./transform.client/system/system-status.md):

- **Dante:** At least one Dante interface must be 'Up'. Look for a green light next to the Primary or Secondary port. If neither has a link, connect the Primary port to another Dante device or a switch.
- **HYPERPORT:** Connect the Primary port directly to a [compatible DiGiCo console or interface](connections/hyperport.md#compatibility). A network switch cannot be used in this audio connection. Check the [HYPERPORT troubleshooting steps](connections/hyperport.md#troubleshooting).

If the correct connection is present but the audio engine remains offline,
check **Audio IO** in [System Status](transform.client/system/system-status.md#audio-io)
before trying a power cycle.

## Why is there no audio reaching my **transform**.engine?

The checks depend on the selected audio transport:

- **Dante:** Confirm that all devices appear in Dante Controller and that the audio subscriptions show green ticks. Hover over an amber or red subscription symbol for diagnostic information.
- **HYPERPORT:** Confirm that the audio connection is direct, the console or interface is compatible and provides the clock, and the period size is 32, 64 or 128 samples. Follow the [HYPERPORT troubleshooting guide](connections/hyperport.md#troubleshooting).

For either transport, confirm that the system is in **Edit Mode** and that the
correct inputs and outputs are patched to your chains in **transform**.client.

## Why can't I get my plugin to licence?

There are a very wide range of licensing systems used by third-parties. We have documented the process for many manufacturers in [the manual](./transform.client/library/plugins/manufacturers/index.md).

The best way to confirm if a plugin is licensed is to head to the Library Tab and then click 'Add/Remove Plugins'. Select the plugin you would like to load, and click 'Test Run #'.

This will load the plugin in the Windows environment - enabling you to interface with it directly.

## My plugin isn't loading - why?

See 'Why can't I get my plugin to licence?' to troubleshoot a plugin that is not loading correctly.

## The CPU load meter seems to change quite often. Why?

The CPU load meter provides you with a real-time view of the remaining capacity on the **transform**.engine's CPU.

The **transform**.engine will schedule each chain onto different cores (represented by the different
columns in the CPU meter), and measures the amount of processing on each core. Plugins may vary
their CPU requirements for a number of reasons, however providing the status meter is not red, you
should be good to go.

## Why can my plugin not find the internet?

The **transform**.engine's plugin host runs offline, and does not provide internet access to any installed plugins.

As a result, any plugins that require the internet for installation and/or licensing (without an offline option) are not compatible.

Please contact the plugin manufacturer to understand what options may be available to you, or check our [licensing guide](./transform.client/library/plugins/manufacturers/index.md) to see if we are aware of a way to run the manufacturer's plugins offline.

## I have a graphically-intensive plugin that I want to run - is that okay?

Absolutely!! However, whilst some plugin manufacturers use OpenGL to snazzify their graphics, for
optimum performance on the **transform**.engine, we recommend disabling OpenGL graphics when you
can.
