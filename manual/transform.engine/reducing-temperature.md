---
sidebar_position: 50
sidebar_label: Reducing Temperature
---

# Reducing Temperature

The Audio Renderer reports the temperature of the hottest CPU core rather than an average across all cores, providing the most accurate indication of the thermal conditions affecting real-time audio performance. If this is still higher than expected, there are a few things you can try.

## Check Rack Ventilation

The **transform**.engine takes air in through the front of the unit, and exhausts out the sides. 

Remove the unit from its rack and place it in an open environment with the front and side ventilation unobstructed. Power on the unit, run it under a typical plugin load, and monitor the temperature under **Settings > System Status > Audio Renderer** in **transform**.client.

If the temperature returns to a normal level, check the rack installation for restricted airflow before reinstalling the unit. If the temperature remains unusually high, power off the unit, disconnect mains power, and continue with the following procedure.

## Clearing the Cooling Assembly
Dust can accumulate inside the **transform**.engine cooling assembly over time, particularly in some operating environments. Cleaning dust from the CPU heatsink can improve cooling performance and reduce the Audio Renderer temperature.

**Follow the following steps if:**
- Audio Renderer temperature is over 85°C under low plugin load
- Persistent [Thermal warnings](../transform.client/system/system-status.md) in **transform**.client

### Items Required

- A screwdriver with a Torx T8 driver bit and a PZ1 driver bit.
- Physical access to the **transform**.engine out of its rack
- **transform**.client V1.6.0 or later running on a supported computer
- A electronics cleaning brush / Handheld compressed air / an electronics air duster

:::danger

Do not use a vacuum cleaner or hoover directly inside the unit.

Vacuum cleaners can generate static discharge and may damage the motherboard. Do not allow any cleaning tool to make direct contact with motherboard components unnecessarily.

:::

### Steps

1. Power the unit off.
2. Disconnect mains power.
3. Remove the lid by taking out the 6 M3 screws with a Torx T8 driver bit.

   ![Top view of the transform.engine showing the six lid screws](@site/static/img/transform.engine-hw/temperature/TopDownEngineWScrews.png)

   ![Overview of the transform.engine with the lid removed](@site/static/img/transform.engine-hw/temperature/LidOff.png)


4. With a PZ1 bit, remove the 4 screws securing the air duct assembly and carefully fold it up. Do not undo the bolts holding it to the front of the unit.

   ![The four screws securing the air duct assembly](@site/static/img/transform.engine-hw/temperature/DuctWScrews.png)

   ![The air duct assembly with its four screws removed](@site/static/img/transform.engine-hw/temperature/DuctNoScrews.png)

  ![The four screws securing the Noctua fan to the heatsink](@site/static/img/transform.engine-hw/temperature/FanScrews.png)


5. With the same driver bit, remove the 4 screws securing the Noctua fan to the heatsink.

   ![The Noctua fan with its four mounting screws removed](@site/static/img/transform.engine-hw/temperature/FanNoScrews.png)


6. Carefully lift the fan upwards away from the heatsink fins, taking care not to strain the fan cable.

   ![Dust build-up on the exposed CPU heatsink fins](@site/static/img/transform.engine-hw/temperature/DirtyHeatsink.png)

7. Gently remove dust build-up from the heatsink fins.

:::warning
Avoid spinning the fan excessively with compressed air, as this can generate back voltage into the fan circuitry and potentially damage the fan controller.
:::

8. Once cleaned, visually inspect the heatsink for any remaining obstruction or contamination.
9. Refit the fan assembly.
10. Refit the air duct. Ensure that the duct sits around the fan as shown in the correct example.

    | Incorrect | Correct |
    | --- | --- |
    | ![Incorrect air duct position obstructing the fan opening](@site/static/img/transform.engine-hw/temperature/DuctWrong.png) | ![Correct air duct position around the fan](@site/static/img/transform.engine-hw/temperature/DuctRight.png) |

11. Refit the lid.
12. Power on, then connect with **transform**.client.
13. Navigate to **Settings > System Status > Audio Renderer** and observe the system temperature.

:::note
If the unit still exhibits unusually high temperatures, the issue may instead relate to thermal coupling between the CPU and heatsink. In this case, please contact [Fourier Audio Support](https://fourieraudio.com/support) for further assistance.
:::
