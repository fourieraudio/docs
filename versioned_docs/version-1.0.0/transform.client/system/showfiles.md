---
sidebar_position: 1
---

# Showfiles

As the name suggests, showfiles are exactly that, files for your show!

A showfile includes your plugin chain structure, the plugin states, and routing, allowing you to
save your file to a USB stick, take it to your next show, and be ready to go in seconds!

Showfiles do not contain the plugins themselves or any data from the Windows plugin hosting
environment other than the plugin state.

To create a new blank showfile, click 'New Showfile', name it, and you're good to go!

Changes to your current showfile are always autosaved as you go, to make sure that changes you make
are never lost even if the **transform**.engine is rebooted.

Want to manage the showfiles on your **transform**.engine? Select a showfile in the list, and use
one of the options in the Action Menu on the right:

- **Save Copy** : Save a copy of the selected showfile. You can optionally also load the created
  copy. Loading a showfile may briefly interrupt audio. Remember that changes to the current
  showfile are always automatically saved; you don't need to make a copy to save your changes!
- **Load Showfile** : Load the selected showfile. Loading a showfile may interrupt audio whilst the
  show loads.
- **Import Showfile** : Got a showfile from another **transform**.engine? Click here and easily import it from your computer.
- **Export Showfile** : Want to take a copy of your current showfile to another **transform**.engine? This is the place to do it.
- **Delete**: Delete the currently selected showfile. You cannot delete your current showfile. That
  would be silly.

:::info

Your loaded showfile does not include the plugin installations (it would make it very large and
messy, quick). Your plugin library, however, will display a hazard sign if the **transform**.engine
doesn't have certain plugins installed from your previous engine. At this point, you can either
install those plugins, or if you're in a rush, smite them!

:::

:::tip

Want to delete your current showfile? Simply create a new one (either using 'New Showfile' or 'Save Showfile As', then select your previous showfile and click 'Delete'.

:::

![Showfile overview tab.](@site/static/img/transformclient/system-showfiles.png)
<<<<<<<< HEAD:versioned_docs/version-1.0.0/transform.client/system/showfiles.md
========

## Backwards-compatibility

Showfiles are usually forwards and backwards compatible between versions, with the following
exceptions:

* Showfiles created or loaded using software v1.1 onwards cannot be loaded into v1.0.
>>>>>>>> a6319ab (PA updates):manual/transform.client/system/showfiles.md
