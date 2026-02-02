---
sidebar_position: 4
---

# System Status

Clicking on **System Status**, will give you useful under-the-hood information, to check your engine is running on all cylinders!

![System status overview tab.](@site/static/img/transformclient/v1.6/system-status.png)

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

### Period Size

The period size controls how many samples are processed per block.

Shorter periods = lower latency, but less time for plugin DSP.  
Larger periods = higher latency, but more plugin processing capacity.

| Transport | Available Period Sizes |
|----------|------------------------|
| Dante | 32, 64, 128, 256, 512 samples |

**transform**.engine must be in **Offline Mode** to reconfigure the audio pipeline. You will be prompted to
change system mode if you are not in **Offline Mode** already when adjusting the period size.

:::tip
After changing the period size, switch back to **Edit Mode** to resume audio.
:::

### Latency Breakdown

The Latency Breakdown panel explains how the different sources of latency sum to produce a total round-trip
latency through **transform**.engine based on your current configuration.

This makes it easy to compare processing headroom vs. latency impact when adjusting period size or transport type.

The [roundtrip latency](../../installation/Roundtrip Latency.md) section describes an overview of how to calculate the round-trip latency when using **transform**.engine as an insert. Here, we go into more detail about how the device internal latency is calculated.

The device internal latency is composed of the DSP pipeline latency (from the
**transform** audio engine) plus the audio transport latency, which depends on the audio protocol in use.

:::note Sample Rate, Period Size, and Latency Calculations

Lets break down some of these numbers. To calculate the device internal latency, you only need three inputs:

1) Sample rate (Hz)
2) Period size (samples)
3) Audio transport latency (milliseconds)

Step 1: Time per sample = 1 / sample rate
- 96 kHz: 1/96000 = 0.000010416 s
- 48 kHz: 1/48000 = 0.000020833 s

Step 2: Latency per period = time per sample × period size
- 96 kHz, 64 samples: 0.000010416 × 64 ≈ 0.0006667 s ≈ 0.6667 ms
- 48 kHz, 64 samples: 0.000020833 × 64 ≈ 0.001333 s ≈ 1.333 ms

Step 3: DSP pipeline latency = input period + output period = period latency × 2

Step 4: Total round-trip = internal latency + transport latency

For Dante running on **transform**.engine, the transport latency is 1 period latency plus the flow latency for each direction (where the flow latency is the highest device latency of the two devices participating in the flow, configurable down to 1 ms).

**Worked example:**

| Configuration             | Period latency | DSP Pipeline Latency | Round-trip Transport Latency | Total round-trip latency     |
| ------------------------- | -------------- | -------------------- | ----------------- | ----------------------- |
| Dante, 96 kHz, 32 samples | 0.333 ms       |  0.667 ms            | 2.33ms            | 3 ms                    |

- NB that the transport latency depends on the selected transport and may vary with period size.
:::

## Audio Renderers

The Audio Renderers panel provides the current status of the audio services running on your **transform**.engine.
This view helps to quickly identify that system processes are active and healthy.

The renderer is shown with:
- An audio renderer status indicator (Online / Offline / Reconfiguring)

- System service status

- Network interfaces status (Primary, Secondary, Control)

- Temperature indicator:

:::note Normal 
< 85°C - Standard operating range. No action required.
:::

:::warning Warning
\> 85°C - The system is running warm. Ensure airflow is not blocked. A warning indicator will appear in the status bar.
:::

:::danger Danger
\> 90°C - The unit is operating at the upper thermal limit. Continued operation at this temperature may reduce performance. A danger indicator will appear in the status bar.
:::

> **Why are these ranges so high?**

The temperature value shown in this section reflects the **highest detected CPU core** temperature inside the Audio Renderer, not the ambient internal temperature.
This means it may appear higher than expected if you are used to monitoring external temperatures.

## Components

The Components section provides a breakdown of key system modules, their current operational state, and their version numbers.

