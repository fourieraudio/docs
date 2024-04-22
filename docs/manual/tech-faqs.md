---
sidebar_position: 14
---

# Technical FAQs

This page features some commonly asked technical questions regarding the **transform**.engine.

### I cannot connect the **transform**.client to the **transform**.engine. Why?

This is likely due to a networking issue.

Firstly, check that the **transform**.engine has an IP address on the network interface that you are trying to connect to it using. You can do this using the front-panel menu on the **transform**.engine.

Then check the network configuration on your computer (the one with the **transform**.client on it).

Some things to check:

- The **transform**.engine IP address is **different** to the IP address of your computer.
- The **transform**.engine IP address is on the same subnet as you computer (i.e. if the **transform**.engine's IP address is `192.168.1.1` with a subnet mask of `255.255.255.0 (/24)`, then your computer must have an address in the `192.168.1.2+` range).
- Verify that you can `ping` the **transform**.engine from your computer using `cmd.exe` (Windows) or 'Terminal' (macOS).

### I am in 'Edit' mode, but the audio engine has not come online.

From a cold-boot, it can take approximately one minute for the audio engine to come online.

In order for the audio engine to start, at least one Dante interface on the **transform**.engine must be 'Up'. You can verify if this is the case by noting if there is a green light next to either the 'Primary' or 'Secondary' ports on the back of the engine.

If there is not a green light, then connect the 'Primary' Dante connection on the engine to another Dante device, or switch, and that should bring the interface 'Up' (i.e. a green light will be displayed).

If there is a green light, then try power-cycling your **transform**.engine.

### Why is there is no audio reaching my **transform**.engine?

The **transform**.engine uses Dante for Audio I/O.

Some things to check:

- Confirm that you can see all devices on your Dante network using Dante Controller.
- Confirm that the status of the audio streams connected to your **transform**.engine are showing as green ticks. If not, hover your mouse over the amber/red symbol to diagnose.
- Confirm that the correct inputs/outputs are configured for your chains in the **transform**.client.

### Why can't I get my plugin to licence?

There are a very wide range of licensing systems used by third-parties.

The best way to confirm if a plugin is licensed is to head to the Library Tab and then click 'Add/Remove Plugins'. Select the plugin you would like to load, and click 'Test Run #'.

This will load the plugin in the Windows environment - enabling you to interface with it directly.

### My plugin isn't loading - why?

See 'Why can't I get my plugin to licence?' to troubleshoot a plugin that is not loading correctly.

### The CPU load meter seems to change quite often. Why?

The CPU load meter provides you with a real-time view of the remaining capacity on the **transform**.engine's CPU.

The **transform**.engine will schedule each chain onto different cores (represented by the different
columns in the CPU meter), and measures the amount of processing on each core. Plugins may vary
their CPU requirements for a number of reasons, however providing the status meter is not red, you
should be good to go.

### Why can my plugin not find the internet?

The **transform**.engine is an offline device, and does not provide the internet to any installed plugins.

As a result, any plugins that require the internet for installation and/or licensing (without an offline option) are not compatible.

Please contact the plugin manufacturer to understand what options may be available to you.

### I have a graphically-intensive plugin that I want to run - is that okay?

Absolutely!! However, whilst some plugin manufacturers use OpenGL to snazzify their graphics, for
optimum performance on the **transform**.engine, we recommend disabling OpenGL graphics when you
can.
