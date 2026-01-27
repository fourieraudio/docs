---
sidebar_position: 4
---

# Presets

Presets are a powerful tool that allows you to save and recall specific plugin configurations across your showfile.  
Managing presets happens directly within the **Library** tab giving you a central place to keep your favourite plugin setups organised, renamed, and easily shared.

:::info Presets Across Chains
You can point multiple plugin instances to the same preset across different chains. For example, `Chain 1`, `Chain 2` and `Chain 3` can both use the same compressor preset. When you update that preset, both plugin instances reflect the change.

```mermaid
flowchart TB
    Preset["Compressor<br/>Preset"]
    Preset --> PI1["Plugin Instance<br/>Chain 1"]
    Preset --> PI2["Plugin Instance<br/>Chain 2"]
    Preset --> PI3["Plugin Instance<br/>Chain 3"]
```
::: 


:::info Presets Across Cues
A chain in `Cue 1`, `Cue 50` and in `Cue 99` can both use the same compressor preset. When you update that preset, both plugin instances reflect the change.

```mermaid
flowchart LR
    Preset["Compressor<br/>Preset"]
    Preset --> PI1["Plugin Instance<br/>Cue 1"]
    Preset --> PI2["Plugin Instance<br/>Cue 50"]
    Preset --> PI3["Plugin Instance<br/>Cue 99"]
```
:::


## Managing Presets

Within the **Library** tab, when you select a plugin, you’ll find the **Preset Manager**:  

![Preset Library](/img/transformclient/v1.6/preset-library.png)

This allows you to:

- **Select a preset** - highlight any preset in the list to make it active.  
- **Rename a preset** - change the displayed name to something more meaningful.  
- **Import preset** - load a preset previously exported from another showfile.  
- **Export preset** - save a presets for backup or transfer.
- **Delete preset** - Remove a preset from the showfile.

## Renaming

You can rename a preset at any time by selecting it in the list and choosing the **Rename** buttons.
{/* ![Preset Rename](/img/transformclient/v1.6/preset-rename.png) */}

## Importing & Exporting

Presets are stored as lightweight files, meaning they can be easily shared between clients or imported into another showfile.

- **Import** - choose a `.state` preset file from your **transform**.client device to add it to your Library.  
- **Export** - save the selected preset as a `.state` file for safekeeping or transfer.  

{/* ![Preset Import](/img/transformclient/v1.6/preset-import.png) */}

This workflow allows you to maintain a consistent setup across different engines or shows!


## With great power...

As presets reference a single piece of data across your entire showfile, updating a preset impacts **all cues** and **all chains** where that preset is saved. This is powerful for consistency, but also means you can inadvertently change large amounts of plugin instance values all at once.

:::warning
Before modifying a preset, consider its scope:
- **Which cues use this preset?** Changes will apply to all of them.
- **Which chains use this preset?** Changes will ripple across multiple chains simultaneously.
- **Is this the intended behavior?** If you only want to change a preset for a specific cue or chain, consider creating a new preset.
:::


