---
sidebar_position: 5
---

# System Status

Clicking on **System Status** allows you to configure the key audio engine settings, as well as giving you useful under-the-hood information to check your engine is running on all cylinders!

![System status overview tab.](@site/static/img/transformclient/v1.7.0/system-status-dante.png)

## System Mode

- **Edit Mode** - Audio is running through the audio engine.
- **Setup Mode** - This allows you to stop the audio engine and configure plugins without passing audio.
- **Offline Mode** - In this state, the audio pipeline is taken down completely, with the exception of key services (enabling you to remain connected).

:::info

It takes approximately 60 seconds for the system to exit offline mode; this is to allow time for the Windows environment to be initialised.

:::

## Audio

### Audio IO

The Audio IO status shows the current state of your audio pipeline. There are several states you may encounter:

| State   | Icon | Description  |
| ------- | ---- | ------------ |
| Running |![running-icon](@site/static/img/transformclient/v1.6/status-running.png) | Audio is flowing normally. The cog spins to indicate active processing. |
| Disconnected | ![disconnected-icon](@site/static/img/transformclient/v1.6/status-disconnected.png)| No connection to primary or secondary ports. Check network connection and connected device power. |
| Muted | ![muted-icon](@site/static/img/transformclient/v1.6/status-muted.png) | Indicates the system is in **Setup Mode**. Audio pipeline is active but outputs are muted and plugins are not loaded. |
| Offline | ![offline-icon](@site/static/img/transformclient/v1.6/status-offline.png)  | Indicates the system is in **Offline Mode**; audio engine completely stopped. |
| Heartbeat Stalled | ![stalled-icon-white](@site/static/img/transformclient/v1.6/status-stalled-white.png) ![stalled-icon-orange](@site/static/img/transformclient/v1.6/status-stalled-orange.png) | transform.client is not receiving a heartbeat from the audio engine. This could be because of a network connection issue between transform.client and the engine, or because the audio pipeline exists but processing has stalled. **Grey** - The lack of heartbeat is expected because the audio renderer is starting up, standby! **Orange** - The lack of heartbeat is unexpected; often due to network issues. If no audio is being received, try to **Offline Mode** and then back to **Edit Mode**. |

### Audio Transport

Use the Audio Transport control to select **Dante** or **HYPERPORT**. The
**transform**.engine must be in **Offline Mode** before you make a change.

For more information on the available audio transports, see [Connections](../../../connections).

![System Status with HYPERPORT selected and Audio IO showing Running in Edit Mode.](@site/static/img/transformclient/v1.7.0/hyperport-running.png)

The latency badge beside Audio Transport shows the transport's contribution to
the round trip in both samples and milliseconds. This value changes with the
selected transport, sample rate and period size.

### Period Size

The period size controls how many samples are processed per block and directly controls the available budget (see [Performance](../performance)). The latency
badge beside Period Size shows the internal DSP contribution in samples and
milliseconds.

![Period Size Selector](@site/static/img/transformclient/v1.7.0/period-size.png)

Shorter periods = lower latency, but less time for plugin DSP.  
Larger periods = higher latency, but more plugin processing capacity.

| Transport | Available Period Sizes |
|----------|------------------------|
| Dante | 32, 64, 128, 256, 512 samples |
| HYPERPORT | 32, 64, 128 samples |

Period sizes that are unavailable for the selected transport are disabled in
the interface. In particular, 256- and 512-sample periods cannot be used with
HYPERPORT.

**transform**.engine must be in **Offline Mode** to reconfigure the audio pipeline. You will be prompted to
change system mode if you are not in **Offline Mode** already when adjusting the period size.

:::tip
After changing the period size, switch back to **Edit Mode** to resume audio.
:::

### Latency Breakdown

The Latency Breakdown panel shows how the current DSP and audio-transport
latencies combine to produce the total round-trip latency through
**transform**.engine. Each value is displayed in both samples and milliseconds.

This makes it easy to compare processing headroom vs. latency impact when adjusting period size or transport type.

The [roundtrip latency](../../connections/roundtrip-latency.md) section describes how the round-trip latency is calculated.

The displayed total is composed of the DSP pipeline latency from the
**transform** audio engine plus the latency of the selected audio transport.
These figures describe latency from the perspective of **transform**.engine and
do not include any additional buffering or routing latency inside the console or
its interface.

:::note Sample Rate, Period Size, and Latency Calculations

Lets break down some of these numbers.

**transform**.engine's internal latency consists of the DSP latency plus the audio transport latency.

In all cases, the DSP latency is 2 periods long. We can convert this time (measured in samples) into seconds via the formula:

time = samples / sample rate

For example:
- 64 samples at 96 kHz: 64 / 96,000 ≈ 0.0006667 s ≈ 0.667 ms
- 64 samples at 48 kHz: 64 / 48,000 ≈ 0.001333 s ≈ 1.333 ms

For **Dante** running on **transform**.engine, the transport latency is 1 period.
For **HYPERPORT**, the transport latency is more complex; read the appropriate
value from the table on the [Roundtrip Latency](../../connections/roundtrip-latency.md) 
page according to the chosen sample rate and period size.

Finally, when considering the round-trip latency, for **Dante** networks we must add the flow latencies across the network to the device internal latency.

**Worked examples:**

| Configuration                        | DSP Latency           | + | Transport Latency     | + | Network (Flow) Latency      | = | Total round-trip latency |
| -------------------------            | -----------           | --|--------               | --|--------------               | ----|------------------ |
| Dante, 96 kHz, 32 sample periods     | 64 samples - 0.667 ms | + | 32 samples - 0.333 ms | + | 1 ms (send) + 1 ms (return) | = | 3 ms |
| HYPERPORT, 96 kHz, 32 sample periods | 64 samples - 0.667 ms | + | 0.56 ms               |   |                             | = | 1.23 ms |

:::

## Audio Renderers

The Audio Renderers panel provides the current status of the audio services running on your **transform**.engine.
This view helps to quickly identify that system processes are active and healthy.

The renderer is shown with:
- An audio renderer status indicator (Online / Offline / Reconfiguring)

- System service status

- Network interfaces status (Primary, Secondary, Control)

- Temperature indicator. If any measured temperature within the **transform**.engine is excessively high, this indicator will turn red.

:::danger Overheating Is Bad
If the **transform**.engine reaches \> 90 °C, **transform**.client will show a warning indicating that the unit is operating close to its upper thermal limit. Continued operation at this temperature may cause system instability or reduce performance. If the overheating is extreme, **transform**.engine may enter thermal cutoff and shutdown.
:::

> **Why are these ranges so high?**

The temperature value shown in this section reflects the **highest detected** temperature inside the Audio Renderer, not the ambient internal temperature.
This means it may appear higher than expected if you are used to monitoring external temperatures. If you are experiencing constantly high temperatures, see [Reducing Temperature](../../transform.engine/reducing-temperature.md).

## System Time
Displays the connected unit’s internal system time. Time drift can cause iLok licensing failures and, in severe cases, prevent the audio renderer from starting. The *Synchronise Unit's System Time* button allows the unit to be aligned with UTC.

![Clock](@site/static/img/transformclient/v1.6.15/system-status-clock.png)

:::info
Synchronisation can only be performed when **transform**.client is connected to the internet.
:::
If the unit’s system time is incorrect, a warning will appear: 

![Clock danger warning](@site/static/img/transformclient/v1.6.15/system-status-clock-warning.png)

## Components

The Components section provides a breakdown of key system modules, their current operational state, and their version numbers.
