---
sidebar_position: 2
---
import active from '/static/img/transformsuite/management-active.png';
import pendingdeposit from '/static/img/transformsuite/management-pending-deposit.png';
import pendingrevoke from '/static/img/transformsuite/management-pending-revoke.png';


# Licence Management Platform

**transform**.suite licences can be easily purchased and managed using the online **Licence Management Platform**, which is powered by Complete Access - the same platform used by Solid State Logic and Slate Digital.

Once you've followed the steps in the [quick start guide](../quick-start), you can continue to log in to the platform using the following link:

<a class="button button--lg button--primary" href="https://go.fourieraudio.com/suite.manage">fourier.completeaccess.com</a>
&nbsp;

There are three sections to the online **Licence Management Platform**:

## Licence manager

On the main **Licence manager** tab you can see all of your licences:

![Online management platform - Licence manager tab](@site/static/img/transformsuite/management-licence-manager.png)

There are three states that a licence can be in:
* Active - the licence is installed and activated onto a **transform**.engine
* Pending - You have requested that the licence is deposited onto, or revoked from, a **transform**.engine, but the engine has not yet performed the required Activation / Deactivation step.
* Unassigned - the licence is available for deposit onto a **transform**.engine

If you believe the status to be inaccurate, click the **Refresh** button next to **Assign to engine** and the system will validate the current status of the licences.

### Pending states

There are two types of pending states that a licence can be in:
* <img src={pendingdeposit} alt="Pending deposit icon" width="125" /> Pending Deposit - this is where the online Licence Management Platform has authorised the deposit, but awaits confirmation that the licence has been activated onto the **transform**.engine using the **transform**.client.
* <img src={pendingrevoke} alt="Pending revoke icon" width="125" /> Pending Revoke - this is where the online Licence Management Platform is requesting the licence is revoked from the **transform**.engine, but is waiting for the licence to be deactived from the **transform**.engine using the **transform**.client.

### Transferring Licences

It is possible to transfer licences between **transform**.engines using the **Licence manager**.

First, ensure that the **transform**.engine that you wish to deactivate is activated, and is shown as active in the **Licence manager**: <img src={active} alt="Active icon" width="125" />

:::info

You can click 'Refresh' to update the status of all **transform**.engines in the **Licence manager**.

:::

Click on the 'X' next to the serial number to set the licence into a **Pending Revoke** status.

Finally, in the **transform**.client (while connected to the **transform**.engine), go to the **System** tab, then **Plugin Collections**, and click **Deactivate**.

Once the deactivation has been successful, click 'Refresh' in the online **Licence manager** and the **transform**.engine that has been deactivated will disappear from the page, and the licence will show as 'Available'.

You can then reassign the licence to another engine (providing it's included in your **Inventory**) by clicking **Assign to engine**.

:::note

You cannot revoke a licence that is 'Pending Deposit'. If an engine is showing as 'Pending Deposit' you must activate it first on that **transform**.engine, and then click **Refresh** in the online **Licence manager**.
:::

## Inventory

In the inventory tab, you are able to add or remove **transform**.engines from your account, using the serial number of the engines.

The serial number of each engine can be found on the rear of the unit, and is in the format **TFE-######**.

You can also remove an engine from your inventory by pressing the red 'Delete' button next to the respective engine.

:::note

You cannot add a **transform**.engine that is already assigned to another user's account. Please contact the other use to remove it from their account first, before attempting to add it to yours.

You cannot remove a **transform**.engine from your account that is activated. Please first deactivate the engine (see above), and ensure that it no longer shows in the **Licence manager** tab before deleting.

:::
