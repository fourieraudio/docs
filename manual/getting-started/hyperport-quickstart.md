---
sidebar_position: 2
sidebar_label: HYPERPORT Quickstart
---

import ReactPlayer from 'react-player'
import SplashScreen from '@site/static/img/transformclient/transform.client-connection-screen.png'
import SplashScreen2 from '@site/static/img/transformclient/transform.client-connection-screen-2.png'

# HYPERPORT Quickstart

<!-- TODO Replace both connection-screen images with current captures. The existing images show client v1.0.1 and engine v1.0.0.
Add console routing diagrams
Update videos
Add 
 -->

:::info

This page will hopefully get you up and running as soon as possible; we've kept it lean on purpose. For more detailed information regarding all things **transform**.engine, please take a deep dive into our manual, which you can find in the sidebar on the left.

:::

HYPERPORT is the lowest-latency way to connect **transform**.engine directly to a
DiGiCo console.

## Step 1: Unpack the cardboard box

Release your **transform**.engine. In the box, you should find:

- a **transform**.engine
- 2x IEC power lead
- a safety information document

If anything is missing, contact your supplier. Read the safety information
before installing or powering on **transform**.engine.

### What you need

In addition to the items supplied with **transform**.engine, you will need:

- a [compatible, up-to-date DiGiCo console or
  interface](../connections/hyperport.md#compatibility).

  :::warning

  If you have not made sure your console **and** interface are up-to-date, **check this now before
  proceeding**! Download links and instructions are available [here](../connections/hyperport.md#supported-software).

  :::

- a computer running **transform**.client v1.7.0 or newer
- a network cable for the direct HYPERPORT audio connection (or two if you want cable redundancy!)
- a network cable for the Control connection

## Step 2: Get Connected

HYPERPORT audio uses a separate connection to the **transform** control data.

- **Audio:** Connect the Primary (and optionally Secondary) port of
  **transform**.engine directly to the relevant port on the console or
  interface. Do not put a network switch in this connection: HYPERPORT is
  strictly point-to-point.
- **Control:** Connect the computer running **transform**.client to the Control
  port of **transform**.engine. This may be a direct connection or part of a
  suitable control network.

Once the connections are in place, connect the IEC lead, switch on **transform**.engine,
and allow a couple of minutes for it to start.

For more information on possible connection configurations, see [Network Connections](../connections/network-connections.md).

### Configuring the Control network

Use the screen and encoder on the front of **transform**.engine to open **IP
Config** and configure the Control port. The Control port and your computer must
have addresses in the same subnet as the **transform**.engine.

For example:

#### **transform**.engine Control port

- Mode: `Static`
- IP Address: `192.168.3.100`
- Subnet Prefix Length: `/24` (equivalent to `255.255.255.0`)

#### Computer wired connection

- Mode: `Static`
- IP Address: `192.168.3.200`
- Subnet Prefix Length: `/24` (equivalent to `255.255.255.0`)

These addresses are examples only. Use addresses appropriate for your control
network, and make sure that no two devices use the same address.

### Connecting with transform.client

Download **transform**.client from the [Downloads page](/downloads/) and install
it on your computer. The matching **transform**.engine software is bundled with the
client, so you do not need to download a separate update file for the engine.

Open **transform**.client. You will be presented with the connection screen:

<img src={SplashScreen} width="450"/>

You may find that the engine is automatically discovered for you and is shown in the
list ready to connect. If it is not, select **Connect to new device** and enter
the Control-port IP address of the **transform**.engine. Using the example
above, this is `192.168.3.100`; 

<img src={SplashScreen2} width="450"/>

Select **transform**.engine when it appears.

Here's Elliot giving you a quick introduction to **transform**.client:

<ReactPlayer controls url="https://www.youtube.com/watch?v=4sT_dBsWTvc" />

## Step 3: Get Up-To-Date

Both the **transform**.engine and the DiGiCo console or interface you are using
must be up-to-date in order to support HYPERPORT.

HYPERPORT requires software v1.7.0 or newer **transform**.engine. Check your
version numbers under [System > Support & Software](../transform.client/system/software.md) before continuing.
An older engine may still accept a connection from a newer client, so being
able to connect does not mean that HYPERPORT is available.
If the engine needs updating, follow the [upgrade instructions](../transform.engine/engine-upgrade.md).

DiGiCo console and interface updates must be obtained separately from [DiGiCo
support](https://support.digico.biz/hc/en-gb). Check the [DiGiCo version
compatibility
grid](../connections/hyperport.md#digico-version-compatibility-grid) before
selecting HYPERPORT.


If you experience any issues upgrading your system, contact us at
support@fourieraudio.com and we'll get you sorted.

## Step 4: Engage HYPERPORT

1. In **transform**.client, open **System** and the **System Status** tab on the side menu.
2. Select **HYPERPORT**.

   ![System Status with an arrow pointing to the HYPERPORT audio transport control.](@site/static/img/transformclient/select-hyperport.png)

3. Select **Enter Offline Mode and Enable HYPERPORT**. Entering Offline Mode interrupts audio and requires the plugin host to stop. Make sure the client is connected through the Control port before confirming.

   ![Confirmation dialog explaining that enabling HYPERPORT stops audio and requires the Control port for the client connection.](@site/static/img/transformclient/v1.7.0/hyperport-warning.png)

4. Wait for the change to complete. The confirmation button displays a spinner while the system changes mode.

   ![HYPERPORT confirmation dialog with a progress spinner while entering Offline Mode.](@site/static/img/transformclient/v1.7.0/hyperport-warning-loading.png)

5. Confirm that **HYPERPORT** is selected and **Audio IO** shows **Offline**. While in Offline Mode, set the period size to 32, 64, or 128 samples as desired. Shorter period sizes reduce latency, but limit the amount of DSP time available for processing plugins. Longer period sizes increase latency, but afford more DSP power for plugins to do their magic.

   ![HYPERPORT selected in Offline Mode with a 64-sample period and unsupported period sizes disabled.](@site/static/img/transformclient/v1.7.0/hyperport-offline-mode.png)

:::note

The 256 and 512 sample period sizes are not available in HYPERPORT mode.

:::

6. Switch back to **Edit Mode**. During startup, **Audio IO** may temporarily show **Heartbeat stalled** or **Disconnected** while the audio renderers initialise.

   ![HYPERPORT in Edit Mode while the audio renderers initialise and Audio IO temporarily shows Heartbeat stalled.](@site/static/img/transformclient/v1.7.0/hyperport-starting.png)

7. Once **Audio IO** shows **Running**, click **Home** in the top left hand corner to start setting up your chains.

   ![HYPERPORT in Edit Mode with Audio IO showing Running.](@site/static/img/transformclient/v1.7.0/hyperport-running.png)

Configure routing on the console, then send a test signal to the **transform**
unit. Verify that you can see the meters moving. Congratulations, you have joined the august ranks of elite engineers using HYPERPORT!

## Step 5: Installing plugins

Plugins are installed in the Plugin Host, a Windows environment accessed from
**transform**.client:

1. Open the **Library** tab and select **Add/Remove Plugins**.
2. Confirm that you want to stop the audio engine.
3. Select **Open plugin host**.
4. Download the Windows plugin installer on your computer and copy it to a USB stick.
5. Connect the USB stick to **transform**.engine and run the installer in the Plugin Host.
6. When choosing plugin formats, install VST3 and deselect AAX and VST.
7. Once installation is complete, select **Close and rescan plugins**.
8. Wait for the scan to complete, then select **Finish**.
9. Select **Close** to restart the audio engine. Your plugins are now ready to add to chains.

Here's Elliot talking you through plugin installation:

<ReactPlayer controls url="https://www.youtube.com/watch?v=wM6M_uJXXxI" />

## If HYPERPORT is not working

If you're having issues, take a look at our
[HYPERPORT troubleshooting guide](../connections/hyperport.md#troubleshooting). If that doesn't help, please feel free to reach
out to our friendly support team via support@fourieraudio.com.
