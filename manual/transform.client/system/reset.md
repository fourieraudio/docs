---
sidebar_position: 9
---

# System Reset

The **System Reset** tab contains the controls for restarting the unit and
removing system data:

- Restart System
- Delete all showfiles
- Reset Plugin Host

![System Reset tab](/img/transformclient/v1.7.0/system-reset.png)

## Restart System

Use **Restart Unit** to remotely restart the connected **transform**.engine. The
unit will power down and start again, temporarily disconnecting from
**transform**.client. This is functionally the same as a power cycle.

Select **Restart Unit**, confirm the warning, then wait for around 30 seconds, where the unit will automatically reconnect to **transform**.client.

![Restart Unit confirmation](/img/transformclient/v1.7.0/system-restart-confirmation.png)

## Delete all showfiles

As it says on the tin - this option will delete **all** showfiles on your **transform**.engine. **This includes your current showfile**.

:::info

If you are looking to only delete one showfile, you can do so in the **Showfiles** tab by selecting on a showfile and clicking 'Delete' on the right.

:::

## Reset Plugin Host

This option resets the Plugin Host to its factory settings. It removes all
installed plugins and deletes any licence files stored within Windows. Licences
stored on USB keys are unaffected. The Audio Renderer may briefly go online and
offline several times when it starts for the first time after the reset.

:::danger

**This action cannot be undone.** Not even if you ask nicely.

Before continuing, deactivate or unlicense all relevant plugins. Resetting the
Plugin Host does not deactivate a **transform**.suite licence, so you may wish
to deactivate the suite from **Plugin Collections** first.

:::
