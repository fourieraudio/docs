---
sidebar_position: 50
sidebar_label: Overheating
---

#  Overheating

In some environments, dust can accumulate inside the transform.engine cooling assembly over time. Excessive dust build-up on the CPU heatsink can reduce cooling performance and result in elevated operating temperatures.

This can lead to Audio Renderer overheating warnings, reduced DSP budgets, or unusually high temperatures even under minimal plugin load.

## Symptoms

- Audio Renderer temperature appears unusually high, over 85°C, under low plugin load
- Persistent [Thermal warnings](../transform.client/system/system-status.md) in **transform**.client

## Items Required

- A screwdriver with a Torx T8 driver bit
- Physical access to the **transform**.engine out of its rack
- **transform**.client V1.6.0 or later running on a supported computer
- A soft anti-static paintbrush or electronics cleaning brush  

**OR**
- Handheld compressed air or an electric electronics duster

:::danger

Do not use a vacuum cleaner or hoover directly inside the unit.

Vacuum cleaners can generate static discharge and may damage the motherboard. Do not allow any cleaning tool to make direct contact with motherboard components unnecessarily.

:::

## Steps

1. Power the unit off.
2. Disconnect mains power.
3. Remove the lid by taking out the 6 M3 screws with a Torx T8 driver bit.

4. Remove the 4 screws securing the air duct assembly and carefully fold it up. Do not undo the bolts holding it to the front of the unit.

5. Remove the 4 screws securing the Noctua fan to the heatsink.
6. Carefully lift the fan upwards away from the heatsink fins, taking care not to strain the fan cable.
7. Using compressed air, an electronics duster, or a soft anti-static brush, gently remove dust build-up from the heatsink fins.
:::warning
Avoid spinning the fan excessively with compressed air, as this can generate back voltage into the fan circuitry and potentially damage the fan controller.
:::
8.  Once cleaned, visually inspect the heatsink for any remaining obstruction or contamination.
9. Refit the fan assembly.
10. Refit the air duct.
11. Refit the lid.
12. Power on, then connect with **transform**.client.
13. Navigate to **Settings > System Status > Audio Renderer** and observe the system temperature.

:::note
If the unit still exhibits unusually high temperatures, the issue may instead relate to thermal coupling between the CPU and heatsink. In this case, please contact [Fourier Audio Support](https://fourieraudio.com/support) for further assistance.
:::
