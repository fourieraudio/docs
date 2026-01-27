---
sidebar_position: 4
---

# System Status

Clicking on **System Status**, will give you useful under-the-hood information, to check your engine is running on all cylinders!

![System status overview tab.](@site/static/img/transformclient/v1.5/system-status.png)

## System Mode

- **Edit Mode** - Audio is running through the audio engine.
- **Setup Mode** - This allows you to stop the audio engine and configure plugins without passing audio.
- **Offline Mode** - In this state, the audio pipeline is taken down completely, with the exception of key services (enabling you to remain connected).

:::info

It takes approximately 60 seconds for audio to be processed after exiting Offline Mode directly to Edit Mode. This is to allow time for the Windows environment to be initialised, and plugin licensing to be decrypted.

:::

## Audio

### Audio IO

The Audio IO status shows the current state of your audio pipeline using a simple icon and status message. There are several states you may encounter:

| State | Icon | Description |
|-------|------|-------------|
| Running | <!-- ![running-icon](@site/static/img/transformclient/v1.6/status-running.png) --> | Audio is flowing as expected. The cog spins to indicate active processing. |
| Disconnected | <!-- ![disconnected-icon](@site/static/img/transformclient/v1.6/status-disconnected.png) --> | No connection to primary or secondary ports. Check network connection and connected device power. |
| Muted | <!-- ![muted-icon](@site/static/img/transformclient/v1.6/status-muted.png) --> | Indicates the system is in **Setup Mode**. Audio pipeline is active but outputs muted and plugins in lightning mode. |
| Offline | <!-- ![offline-icon](@site/static/img/transformclient/v1.6/status-offline.png) --> |Indicates the system is in **Offline Mode**, audio engine completely stopped. |
|Heartbeat Stalled | <!-- ![stalled-icon](@site/static/img/transformclient/v1.6/status-stalled.png) --> | Audio pipeline exists but processing has paused. Often due to buffer overruns or network issues. Switching to **Edit Mode** will normally bring the audio engine back online. |

### Period Size

The period size controls how many samples are processed per block.

Shorter periods = lower latency, but less time for plugin DSP.  
Larger periods = higher latency, but more plugin processing capacity.

| Transport | Available Period Sizes |
|----------|------------------------|
| Dante | 32, 64, 128, 256, 512 samples |

When changing period size, **transform**.engine will automatically enter **Offline Mode** to safely reconfigure the audio pipeline.

:::tip
After changing the period size, switch back to **Edit Mode** to resume audio.
:::

### Latency Breakdown

The Latency Breakdown panel displays the DSP (internal) processing latency and the Audio Transport latency, giving you a total round-trip value based on your current configuration. This makes it easy to compare processing headroom vs. latency impact when adjusting period size or transport type.
 
| Component | Example Calculation (HYPERPORT, 64 samples @ 96kHz) |
|----------|--------------------------------|
| DSP Internal | 128 samples (64 in and 64 out) • 1.33 ms |
| Audio Transport | 86 samples (value dependant on period size and audio transport) • 0.89 ms |
| **Total Roundtrip** | **214 samples • 2.22 ms** |

:::note Sample Rate, Period Size, and Latency Calculations

Lets break down some of these numbers, to understand latency, you only need three inputs:

1) Sample rate (Hz)
2) Period size (samples)
3) Audio transport latency (milliseconds)

Step 1: Time per sample = 1 / sample rate
- 96kHz: 1/96000 = 0.000010416 s
- 48kHz: 1/48000 = 0.000020833 s

Step 2: Latency per block = time per sample × period size
- 96kHz, 64 samples: 0.000010416 × 64 ≈ 0.0006667 s ≈ 0.6667 ms
- 48kHz, 64 samples: 0.000020833 × 64 ≈ 0.001333 s ≈ 1.333 ms

Step 3: Internal pipeline (input block + output block)
internal latency = block latency × 2

Step 4: Total round-trip = internal latency + transport latency

**Worked example:**

| Configuration      | Block latency | Internal (×2) | Transport | Total round-trip      |
|-------------------|---------------|---------------|-----------|-----------------------|
| Dante, 48 kHz, 256 samples| 5.333 ms    |  10.67 ms      | 2ms    | 12.67ms  |

**Notes:**

- Internal latency is two blocks because audio is processed on the way in and on the way out.
- Transport latency depends on the selected transport and may vary with period size.
- Values are rounded for readability.

:::



## Audio Renderers 

The Audio Renderers panel provides the current status of the audio services running on your **transform**.engine.
This view helps to quickly identify that system processes are active and healthy.

The renderer is shown with:
- An audio renderer status indicator (Online / Offline / Reconfiguring)

- System service status

- Network interfaces status (Primary, Secondary, Control)

- Temperature indicator
  - **Normal**  < 85°C	Standard operating range. No action required.
  - **Warning**	> 85°C	The system is running warm. Ensure airflow is not blocked. A warning indicator will appear in the status bar.
  - **Danger**	> 90°C	The unit is operating at the upper thermal limit. Continued operation at this temperature may reduce performance. A danger indicator will appear in the status bar.

:::info
The temperature value shown reflects the highest detected CPU core temperature inside the **transform**.engine, not the ambient internal temperature.
This means it may appear higher than expected if you are used to monitoring external temperatures.
:::

## Components

The Components section provides a breakdown of key system modules, their current operational state, and their versioning numbers.

