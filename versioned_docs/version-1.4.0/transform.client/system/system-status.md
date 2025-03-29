---
sidebar_position: 2
---

# System Status

Clicking on **System Status**, will give you useful under-the-hood information, to check your engine is running on all cylinders!

![System status overview tab.](@site/static/img/transformclient/system-status.png)

### System Mode

- **Edit Mode**- Audio is running through the audio engine.
- **Setup Mode**- This allows you to stop the audio engine and configure plugins without passing audio.
- **Offline Mode**- In this state, the audio pipeline is taken down completely, with the exception of key services (enabling you to remain connected).

:::warning

It takes approximately 60 seconds for audio to be processed after exiting 'Offline Mode'. This is to allow time for the Windows environment to be initialised.

:::

### Audio

The spinning cog and 'Running' means audio is being inputted, passing through and outputting your **transform**.engine correctly.

If it displays an error or the cog isn't spinning, the client is no longer seeing updates from the
audio engine. This is likely because it has been stopped for configuration purposes; selecting
'Edit' mode above will bring it back online! This could also happen if your client loses connection
to the engine.

Here you can also configure the period size of the **transform**.engine. The available options are:

- 32 samples
- 64 samples
- 512 samples

To change period size, simply select the period size you require.
**transform**.engine will automatically be set to offline mode to change the period size.

:::tip

In order to get audio to pass again, you will need to be in 'Edit Mode'.

By doubling the Period Samples from 32 to 64, you double the latency of the DSP pipeline, but you also increase the amount of time available (and therefore system capacity) to the chains for processing.

:::

### Audio Renderers & Components

These sections are for support use, and indicate the state of a number of key internal components to
your engine.
