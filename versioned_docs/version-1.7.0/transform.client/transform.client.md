---
sidebar_position: 4
---

# transform.client

Welcome to the **transform**.client!

The **transform**.client software split into four main tabs, visible at the top of the screen:

1. [**Home**](home/home.md) - Build your plugin chains.
2. [**Cuelists**](cuelists/cuelists.md) - Control your plugins with cues.
3. [**Library**](library/library.md) - Your toolbox, add and remove plugins.
4. [**System**](system/showfiles.md) - allows you to set up your system and get under the hood of your **transform**.engine.

## Connecting to your **transform**.engine

With the IP address of your **transform**.engine already configured, ensure
your computer is on the same subnet as the engine interface you are using for
control. The control and audio networks may use separate subnets.

* When using **Dante**, you can connect **transform**.client through the Primary,
Secondary or Control port.
* When using **HYPERPORT**, connect through the **Control** port; the Primary
and Secondary connections are audio-only.

See [Network Connections](../connections/network-connections.md) for the
capabilities of each interface.

Launch the **transform**.client, and select 'Connect to new device', input the IP address of your **transform**.engine, select 'Connect'.

And voila, you're in!

## Multiple Clients

Multiple users on different devices can connect to the same **transform**.engine and make edits to different plugins at the same time.

It is also possible to run multiple instances of **transform**.client on the same computer. Perfect for example, if you would like to have one instance of a plugin always open on your Master bus, whilst having another instance of the software to scroll freely between your chains, jumping from plugin to plugin!
