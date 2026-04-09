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

1. After following the [Accessing Windows steps](../installation.md#accessing-the-plugin-host-to-install-plugins), you will be in a position to install plugins.
2. On a personal device with internet access, download and install **UA Connect** from the link above.
3. Launch UA Connect and log into your Universal Audio account.
![USB with files.](@site/static/img/UAD/Login.png)
4. Download the plugins you own using UA Connect to the personal device.
![USB with files.](@site/static/img/UAD/installed.png)
5. Manually copy the following folders from your device to a USB stick:
   - `C:\Program Files\Common Files\Universal Audio`  
   - `C:\Program Files\Common Files\VST3` (copy only the `.vst3` files related to UAD)
![USB with files.](@site/static/img/UAD/fullUSB.png)
1. Plug the USB stick into any USB port on the **transform**.engine and return to your plugin host as seen in *step 1*.
2. Locate your USB drive and copy the files to the same directory paths on the **transform**.engine that they were taken from on your Windows device.
   - `Universal Audio` folder to `C:\Program Files\Common Files\`  
   - All `.vst3` files to `C:\Program Files\Common Files\VST3`
![USB with files.](@site/static/img/UAD/PluginHost.png)
1. Exit the plugin host and rescan to confirm that files are copied successfully.
![USB with files.](@site/static/img/UAD/Finished.png)
2.  Repeat the process if you have additional plugins to transfer.

