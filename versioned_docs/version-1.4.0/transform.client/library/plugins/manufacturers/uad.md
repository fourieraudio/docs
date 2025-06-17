---
sidebar_position: 1
---

# Universial Audio (UAD)

How to install **Universial Audio (UAD)** plugins on your **transform**.engine!

## Installation

**Software Required:** [UA Connect](https://www.uaudio.com/pages/download-ua-connect)  

**Licensing Method:** iLok ([Licensing Guide](../ilok.md))  

**Plugin Format:** Windows VST3  

**Installer File Format:** Custom folders (UA Connect required on an internet-connected machine)  

**UAD Support Website:** [UAD Support](https://help.uaudio.com/hc/en-us)


1. After following the [Accessing Windows steps](../installation.md#accessing-the-plugin-host-to-install-plugins), you will be in a position to install plugins.
2. On your personal Windows device (with internet access), download and install **UA Connect** from the link above.
3. Launch UA Connect and log into your Universal Audio account.
4. Download the plugins you own using UA Connect.
5. Manually copy the following folders from your device to a USB stick:
   - `C:\Program Files\Common Files\Universal Audio`  
   - `C:\Program Files\Common Files\VST3` (copy only the `.vst3` files related to UAD)
6. Plug the USB stick into any USB port on the **transform.engine**.
7. Locate your USB drive and copy the files to the same directory paths on the **transform.engine** that they were taken from on your Windows device.
8. Confirm that files are copied successfully. No installer run is required, but UA Connect must have been used to prepare the plugin files.
9. Repeat the process if you have additional plugins to transfer.

