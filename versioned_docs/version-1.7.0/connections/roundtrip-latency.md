---
sidebar_position: 4
sidebar_label: Roundtrip Latency
---

# Roundtrip Latency

## HYPERPORT

Choose **HYPERPORT** at **96 kHz** with **32-sample periods** for the lowest possible roundtrip latency of **1.2 ms**.

| Sample Rate | Period Size (samples) | HYPERPORT Transport Latency | DSP Latency | TOTAL ROUND TRIP LATENCY |
| ------ | --- | ------- | -------- | ------------------------ |
| 96 kHz | 32  | 0.56 ms | 0.666 ms | **1.226 ms** (lowest 😎) |
| 96 kHz | 64  | 0.89 ms | 1.333 ms | **2.223 ms**             |
| 96 kHz | 128 | 1.56 ms | 2.666 ms | **4.226 ms**             |
| 48 kHz | 32  | 0.89 ms | 1.333 ms | **2.223 ms**             |
| 48 kHz | 64  | 1.56 ms | 2.666 ms | **4.226 ms**             |
| 48 kHz | 128 | 2.89 ms | 5.333 ms | **8.223 ms** (highest)   |


## Dante

When **transform**.engine is used as an insert with Dante, the round-trip latency is determined by:
* the device DSP latency (2 periods),
* plus the latency incurred by the Dante Audio Transport component (1 period)
* plus the latency introduced by the Dante network (send and receive flows).

As the device DSP latency and Dante transport latency are fixed by the period size and measured in samples, their duration (in `ms`) will depend on the configured period size and sample rate.

:::info
The latency of a unicast Dante flow is set by the highest device latency between the sender and receiver, and is the latency of **one trip**. As **transform**.engine is usually used as an insert, there are **two trips** to consider: a send and a return. Consequently, if all devices have a 1 ms Dante device latency, this results in 2 ms of Dante effective network latency when used as an insert: 1 ms for the send + 1 ms for the return.
:::

In this example, both sending and receiving device have a **1 ms** Dante device latency; other Dante device latency values are available as described [here](dante.md). You can use the table below to calculate the resultant roundtrip latency. 

| Dante Flow Latency | Sample Rate | Period Size (samples) | Dante Send  | DSP Latency | Dante Transport Latency | Dante Return | TOTAL ROUND TRIP LATENCY |
| ---- | -------| ----------- | ---- | ----- | --- | ---- | --------- |
| 1 ms | 96 kHz | 32   | 1 ms | 0.666 ms  | 0.333 ms | 1 ms | **3 ms**  (lowest)|
| 1 ms | 96 kHz | 64   | 1 ms | 1.333 ms  | 0.666 ms | 1 ms | **4 ms**  |
| 1 ms | 96 kHz | 128  | 1 ms | 2.666 ms  | 1.333 ms | 1 ms | **6 ms**  |
| 1 ms | 96 kHz | 256  | 1 ms | 5.333 ms  | 2.666 ms | 1 ms | **10 ms** |
| 1 ms | 96 kHz | 512  | 1 ms | 10.666 ms | 5.333 ms | 1 ms | **18 ms** |
| 1 ms | 48 kHz | 32   | 1 ms | 1.333 ms  | 0.666 ms | 1 ms | **4 ms**  |
| 1 ms | 48 kHz | 64   | 1 ms | 2.666 ms  | 1.333 ms | 1 ms | **6 ms**  |
| 1 ms | 48 kHz | 128  | 1 ms | 5.333 ms  | 2.666 ms | 1 ms | **10 ms** |
| 1 ms | 48 kHz | 256  | 1 ms | 10.666 ms | 5.333 ms | 1 ms | **18 ms** |
| 1 ms | 48 kHz | 512  | 1 ms | 21.333 ms | 10.666 ms | 1 ms | **34 ms** (highest) |

:::tip 
If you change the Dante device latency setting, remember to adjust your calculations for the send and return. 

For example- 2 ms Dante device latency = 4 ms roundtrip (2 ms network send + 2 ms network return)
:::

## Period Size

The period size controls the size of the audio buffers internal to the **transform**.engine, and in turn, the device internal
latency.

:::tip
The larger the period size, the more time the system has to process, meaning that you are able to run
more plugins, or plugins with higher processing requirements. This does however increase the latency;
doubling the period size doubles the device internal latency.
:::

The period size can be configured in the **transform**.client software in the [system status tab](../transform.client/system/system-status.md).
