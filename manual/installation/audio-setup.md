---
sidebar_position: 22
sidebar_label: Audio Configuration
---

# Audio Configuration

As the **transform**.engine uses Dante, the principal audio configuration options can be found in Dante Controller.

When running Dante Controller (for further details on where to find the latest version, click [here](dante.md)), firstly click on the **transform**.engine that you wish to configure, and then select the "Device Config" tab.

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

## Dante Device Network Latencies

The available network latencies are:

* 1 ms
* 2 ms
* 3 ms
* 4 ms
* 5 ms
* 10 ms

Prior to version 1.1 of the **transform**.engine, the available network latencies depended on the
selected Period Size. This is no longer the case.



