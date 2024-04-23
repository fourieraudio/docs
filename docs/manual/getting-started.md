---
sidebar_position: 0
---

import ReactPlayer from 'react-player'

# Getting Started

So you've just got your hands on a **transform**.engine - congratulations!!

Let's get you up and running.

# Step 1: Unpack the cardboard box

The fun bit! Carefully unpack your **transform**.engine from the box. In the box, you will find:

- a **transform**.engine
- an IEC power lead
- a safety information document

If you are missing any of the above - please get in touch with your supplier and they will be able to help.
Be sure to read diligently the important information in the safety instructions!

# Step 2: Plug it in

Start by plugging in the network connections to a Dante network. To see some of the various options for network configuration, check out our handy manual page [here](installation/dante-network-examples).

Next, take your IEC cable and plug it into the **transform**.engine, and turn the power switch on.
Wait for the engine to start: this may take a couple of minutes.

# Step 3: Configure the IP address(es) of the **transform**.engine

Using the screen on the front of the **transform**.engine and the encoder, press the encoder once to enter the menu, and then select "IP Config".

From there, you are able to set your desired IP Address configuration.

For the purposes of this getting started guide, we will assume you have connected a computer (which
you want to run the **transform**.client software on) _directly_ to the 'Primary' port. If this is
the case, set the Primary IP address to 'Static', and set an IP address of `192.168.1.100`, and a
subnet mask of `/24` (equivalent to `255.255.255.0`).

:::info

In order for the audio engine to start (enabling you to install, open and plugins), the 'Primary' network socket must be connected to another device, and show a green light on the back of the unit.

:::

:::warning

Please note that at this time, the **transform**.client must be connected by static, or DHCP, IP addres - not link-local; see [known issue TF-1686](../known-issues).
This will be resolved in a future release.

:::

# Step 4: Configure the IP address of the client computer

On your Windows or macOS computer (that you have connected to your **transform**.engine as per
**Step 3**), set it to have a static IP address of (say) `192.168.1.99` (i.e. **not** the same as the
**transform**.engine, but in the same subnet - so `192.168.1.xxx`), and set a subnet mask of
`255.255.255.0`. Leave the gateway uncompleted if requested.

# Step 5: Install the **transform**.client software

Download the latest version of the **transform**.client software [here](../downloads).

Then install the **transform**.client software onto your computer following the Installer instructions.

# Step 6: Introducing the **transform**.client

Now for the really exciting bit. Getting going!!

Here's Elliot giving you a quick spin through the **transform**.client:

<ReactPlayer controls url="https://www.youtube.com/watch?v=4sT_dBsWTvc" />

:::info

It is likely that when first connecting to your **transform**.engine that the client will insist on upgrading your engine. This is so that you have the latest and greatest software to use!

This is no problem - simply follow the instructions and you should be good to go in no time. All engine firmware is shipped with the client software so there is no need to download anything else from the internet.

If you have any problems when upgrading - please don't hesitate to drop us an email at support@fourieraudio.com and we'll get back to you ASAP.

:::

# Step 7: Installing Plugins

Now it's time to install your plugins!

Here's Elliot talking you through plugin installation.

<ReactPlayer controls url="https://www.youtube.com/watch?v=wM6M_uJXXxI" />

# Step 8: Showfiles and System

Here's Elliot talking you through showfile management and system status.

<ReactPlayer controls url="https://www.youtube.com/watch?v=ZiR2LXC6WYI" />
