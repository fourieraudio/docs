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

:::warning

The correct Windows VST3 files will only be generated on a windows device. Running UA Connect on A Mac device will not create the correct VST3 files and will not work correctly on a **transform**.engine.

:::

1. On a personal device with internet access, download and install **UA Connect** from the link above.
2. Launch UA Connect and log into your Universal Audio account.
![USB with files.](@site/static/img/UAD/Login.png)

:::info

Ensure you have an iLok plugged into your personal device with the correct UAD licenses on.

:::

3. Download the plugins you own using UA Connect to the personal device.
![USB with files.](@site/static/img/UAD/installed.png)
4. Once installed, manually copy the following folders from your device to a USB stick:
   - `C:\Program Files\Common Files\Universal Audio`  
   - `C:\Program Files\Common Files\VST3` (copy only the `.vst3` folders related to UAD)
![USB with files.](@site/static/img/UAD/fullUSB.png)
5. Plug the USB stick (as well as the iLok with your UAD licenses) into any USB ports on the **transform**.engine and after following the [Accessing Windows steps](../installation.md#accessing-the-plugin-host-to-install-plugins), you will be in a position to install the plugins.
6. Locate your USB drive and copy the files to the same directory paths on the **transform**.engine that they were taken from on your Windows device.
   - `Universal Audio` folder to `C:\Program Files\Common Files\`  
   - All `.vst3` folders to `C:\Program Files\Common Files\VST3`
![USB with files.](@site/static/img/UAD/PluginHost.png)
7. Exit the plugin host and rescan to confirm that files are copied successfully.
![USB with files.](@site/static/img/UAD/Finished.png)
8.  Repeat the process if you have additional plugins to transfer.

