---
sidebar_position: 14
sidebar_label: Roundtrip Latency
---

## Roundtrip Latency

When transform.engine is used as an insert, the round-trip latency is determined by the device internal latency, plus the latency introduced by the Dante network. The device internal latency depends on the sample rate and period size that has been configured.

:::info
The latency of a Dante flow is set by the highest device latency between the sender and receiver, and is the latency of **one trip**. As **transform**.engine is usually used as an insert, there are **two trips** to consider: a send and a return. Consequently, if all devices have a 1 ms Dante device latency, this results in 2 ms of Dante latency when used as an insert: 1 ms for the send + 1 ms for the return.
:::

In this example, both sending and receiving device have a **1 ms** Dante device latency; other Dante device latency values are available as described [here](../installation/audio-setup.md). You can use the table below to calculate the resultant roundtrip latency. 

| Dante Flow Latency | Sample Rate | Period Size  | Dante Send  | Device internal Latency | Dante Return | TOTAL ROUND TRIP   |
| ---- | -------| ----------- | ---- | ----- | ---- | --------- |
| 1 ms | 96 kHz | 32 samples  | 1 ms | 1 ms  | 1 ms | **3 ms**  (lowest)|
| 1 ms | 96 kHz | 64 samples  | 1 ms | 2 ms  | 1 ms | **4 ms**  |
| 1 ms | 96 kHz | 128 samples | 1 ms | 4 ms  | 1 ms | **6 ms**  |
| 1 ms | 96 kHz | 256 samples | 1 ms | 8 ms  | 1 ms | **10 ms** |
| 1 ms | 96 kHz | 512 samples | 1 ms | 16 ms | 1 ms | **18 ms** |
| 1 ms | 48 kHz | 32 samples  | 1 ms | 2 ms  | 1 ms | **4 ms**  |
| 1 ms | 48 kHz | 64 samples  | 1 ms | 4 ms  | 1 ms | **6 ms**  |
| 1 ms | 48 kHz | 128 samples | 1 ms | 8 ms  | 1 ms | **10 ms** |
| 1 ms | 48 kHz | 256 samples | 1 ms | 16 ms | 1 ms | **18 ms** |
| 1 ms | 48 kHz | 512 samples | 1 ms | 32 ms | 1 ms | **34 ms** (highest) |

:::tip 
If you change the Dante device latency setting, remember to adjust your calculations for the send and return. 

For example- 2 ms Dante device latency = 4 ms roundtrip (2 ms network send + 2 ms network return)
:::

## Period Size

The only key audio configuration option not found in Dante Controller is the period size. This
controls the size of the audio buffers internal to the **transform**.engine, and in turn, the device internal
latency.

:::tip
The larger the period size, the more time the system has to process, meaning that you are able to run
more plugins, or plugins with higher processing requirements. This does however increase the latency;
doubling the period size doubles the device internal latency.
:::

The period size can be configured in the **transform**.client software in the [system status tab](../transform.client/system/system-status.md).
