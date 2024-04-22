---
sidebar_position: 22
sidebar_label: Audio Configuration
---

# Audio Configuration

As the **transform**.engine uses Dante, the principal audio configuration options can be found in Dante Controller.

When running Dante Controller (for further details on where to find the latest version, click [here](dante)), firstly click on the **transform**.engine that you wish to configure, and then select the "Device Config" tab.

There you are able to set the sample rate of that **transform**.engine, as well as the sample encoding and Dante network latency.

## Sample Rates

Available sample rates are:

- 44.1 kHz
- 48 kHz
- 96 kHz

Setting the sample rate here will cascade throughout the entire **transform**.engine audio pipeline.

## Sample Encodings

Internally, the **transform**.engine audio pipeline is 64 bit floating point throughout. However,
for transmission on the Dante network, samples are exchanged in one of the following encodings:

* PCM16
* PCM24
* PCM32

## Network Latencies

The available network latencies are:

| Period Size | Network Latency |
| ----------- | --------------- |
| 32          | 1 ms, 2 ms      |
| 64          | 1 ms, 2 ms, 3 ms, 4 ms, 5 ms, 10 ms |

# Period Size

The only key audio configuration option not found in Dante Controller is the period size. This
controls the size of the audio buffers internal to the **transform**.engine, and in turn, the system
latency.

The larger the buffer, the more time the system has to process, meaning that you are able to run
more plugins, or plugins with higher processing requirements. This does however increase the latency;
doubling the period size doubles the system latency.

Available period sizes are:

- 32 samples (1 ms internal latency at 96 kHz)
- 64 samples (2 ms internal latency at 96 kHz)

The buffer size can be configured in the **transform**.client software, with details available [here](../transform.client/system/system-status).
