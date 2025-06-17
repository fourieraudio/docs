---
sidebar_position: 5
---

# Upgrade Instructions

Keep your **transform**.engine up to date with the latest improvements, features, and bug fixes!
Use the latest **transform**.client to update your engine. 

To download the latest client, navigate to the [Software Downloads](https://docs.fourieraudio.com/downloads/) page.

:::tip

Schedule upgrades during planned maintenance windows rather than *immediately* before a show!
:::


## Before You Begin

If you are running on an older edition of **transform**.client, you will see the following warning:
<div style={{ textAlign: "center" }}>
  <img src="/img/update/UpdateWarningv1-4-0.png" alt="Upgrade Warning" style={{ width: "50%" }} />
</div>


- Ensure your showfile is saved and backed up (*always* good to do!)
- The system must remain powered on during the upgrade
- The **transform**.client updater comes with compatible **transform**.engine software bundled so you can upgrade the **transform**.engine offline

## Quick Steps

| Step | Task | Notes |
|------|------|-------|
| 1 | Backup current showfile. | *Optional* but **recommended.** |
| 2 | Download the latest **transform**.client installer. | This can be obtained from the [Software Downloads](https://docs.fourieraudio.com/downloads/).  |
| 3 | Run the installer. |  |
| 4 | Run the updated client, and connect to your **transform**.engine.  | |
| 5 | The **transform**.engine will be feeling left out! Navigate to the system tab to update.  | See detailed steps below... |
| 6 | Walk away, get your tech to make you a cup of tea. | |
| 7 | Reconnect to your client, and you are good to go! | Test all the shiny new features. |

## Step-by-Step Upgrade Instructions

1. **Download the latest update package**  
   Navigate to the [Software Downloads](https://docs.fourieraudio.com/downloads/) page and download the latest version. Select the relevant **transform**.client bundle for your operating system:  
   
| OS Type           | Architecture       | Description                                                                 |
|-------------------|--------------------|-----------------------------------------------------------------------------|
| **Windows**       | x86-64 (64-bit)    | Standard installer for modern 64-bit Windows 10/11 systems.                |
| **macOS (ARM)**   | ARM64 (Apple Silicon) | For Macs with Apple Silicon chips (M1, M2, M3 and newer).                 |
| **macOS (x86-64)**| Intel (x86-64)     | For older Intel-based Macs (pre-2020 devices without Apple Silicon).       |

:::note
This is the **only step that requires internet access**. You can complete the rest of the upgrade offline once you’ve downloaded the correct version.
:::

1. **Close down transform.client**  
   Make sure **transform**.client is not operating on your system while updating.

2. **Run the installer**  
   You will obtain a .zip file consisting of a bundle with both **transform**.client software and **transform**.engine updates inside. Extract and run the installer.

3. **Follow on-screen prompts**  
   The update tool will guide you through **transform**.client installation.
   
4. **Run the new transform.client**  
   The application will now show its installed version, now connect to your **transform**.engine. You should see a discrepancy between the version numbers like so:

      <div style={{ textAlign: "center" }}>
      <img src="/img/update/Versionmismatch.png" style={{ width: "50%" }} />
      </div>  
   Now, let's get the **transform**.engine up to speed.

5. **Navigate to the systems tab**  
   Once you have connected to your **transform**.engine, you will see the system tab in the top right appear as the following:
      <div style={{ textAlign: "center" }}>
      <img src="/img/update/SystemNotif.png" alt="Upgrade Warning" style={{ width: "20%", border: "2px solid #AAA" }} />
      </div>  

6. **Navigate to the software section**  
      On the left-hand side of your screen, you will see the settings menu. Select the software section as highlighted below:
      <div style={{ textAlign: "center" }}>
      <img src="/img/update/Menu.png" style={{ width: "50%", borderRadius: "12px"}} />
      </div>  


8. **Begin the update**  
   Within the **transform**.engine software version number box, a button will have appeared, this will begin the update:
      <div style={{ textAlign: "center" }}>
      <img src="/img/update/BeginUpdate.png" style={{ width: "50%"}} />
      </div>  

9.  **Wait for stuff to happen...**  
   This step usually takes a couple of minutes, so kick back and relax while your **transform**.engine studies its newest feature set!
   It should look a little something like this:
      <div style={{ textAlign: "center" }}>
      <img src="/img/update/Updateprogress.png" style={{ width: "50%"}} />
      </div>  

10. **Success!**
   
   <div style={{ textAlign: "center" }}>
   <img src="/img/update/UpdateComplete.png" style={{ width: "50%", clipPath: "inset(0 2px 0 0)", position: "relative" }} />
   </div>  
   Following this, the application will return you to the connection page. Wait for the engine to complete the reboot, and then select it to connect and enjoy the exciting new features.

## **Licensing Considerations**
 
Since your plugins were initially scanned by the previous version of **transform**.engine, after some upgrades you may need to rescan your plugins to ensure full compatibility with newly-added features.

If a rescan is needed, in the library tab, you will see the following warning:

<div style={{ textAlign: "center" }}>
<img src="/img/update/Rescan.png" style={{ borderRadius: "12px" }} />
</div>

To resolve this:

- Select **Rescan User Plugins** to rescan all manually installed plugins.
- Select **Rescan Plugin Collections** to reprocess any plugin collections such as the [**transform**.suite](https://fourieraudio.com/suite) and ensure they're up to date with the latest version of the **transform**.engine.

:::tip
Rescanning plugins is non-destructive and helps avoid potential compatibility issues or feature limitations with newer builds.
:::


## Troubleshooting

- If the system doesn’t reboot properly, you will be prompted to repeat the installation steps.
  
If you encounter issues during the upgrade:

- **Visit:** [Fourier Audio Support](https://fourieraudio.com/support)
- **Contact:** [support@fourieraudio.com](mailto:support@fourieraudio.com)


**Stay current! Unlock new capabilities with every upgrade.**
