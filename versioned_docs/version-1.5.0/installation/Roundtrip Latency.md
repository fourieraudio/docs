---
sidebar_position: 14
sidebar_label: Roundtrip Latency
---

## Roundtrip Latency

:::info
Audinate defines Dante device latency as **one trip**, as the **transform**.engine is usually used as an insert, you have **two trips** (a send and a return. A 1ms Dante device latency, results in 2ms of Dante latency when used as an insert, 1ms for the network send + 1ms for the network return).
:::

Using **1ms** as the lowest Dante device latency for this example. Other Dante device latency values are available as described [here](../installation/audio-setup.md). You can use the table below to calculate your roundtrip latency. 

| Dante Device Latency Setting | Sample Rate | Period Size  | Dante Send  | DSP internal Latency | Dante Return | TOTAL ROUND TRIP   |
| ------    | -------- | -------------- | ----------- | ----------------------- | ------- | ------   |
| 1ms    | 48kHz    | 32            | 1ms         | 2ms                     | 1ms       | **4ms** |
| 1ms    | 48kHz    | 64            | 1ms          | 4ms                    | 1ms      | **6ms** |
| 1ms    | 48kHz    | 512           | 1ms         | 32ms                    | 1ms      | **34ms** |
| 1ms     | 96kHz    | 32            | 1ms         | 1ms                     | 1ms      | **3ms** |
| 1ms     | 96kHz    | 64            | 1ms         | 2ms                     | 1ms      | **4ms** |
| 1ms     | 96kHz    | 512           | 1ms         | 16ms                    | 1ms      | **18ms** |


:::tip 
If you change the Dante device latency setting, remember to adjust your calculations for the send and return. 

For example- 2ms Dante device latency = 4ms roundtrip (2ms network send + 2ms network return)
:::

## Period Size

The only key audio configuration option not found in Dante Controller is the period size. This
controls the size of the audio buffers internal to the **transform**.engine, and in turn, the system
latency.

:::tip
The larger the buffer, the more time the system has to process, meaning that you are able to run
more plugins, or plugins with higher processing requirements. This does however increase the latency;
doubling the period size doubles the system latency.
:::

The buffer size can be configured in the **transform**.client software, with details available [here](../transform.client/system/system-status.md).