---
sidebar_position: 3
---

# Recall Filters

Cuelist Recall Filters can be set in the Detail Pane of a Cuelist:

![Cuelist with Filter](@site/static/img/transformclient/v1.5/cuelists-filter.png)

You can add a Recall Filter to any Cuelist by picking a filter mode and selecting zero or more
Chains. The filter mode options are:

* **No Filter**: The Cuelist will apply to all Chains when a cue is fired.
* **Include Targets**: The Cuelist will **only** apply to the selected Chains when a Cue is fired.
* **Exclude Targets**: The Cuelist will **not** apply to the selected Chains when a Cue is fired.

# Tempo Filters

Global tap tempo data is stored in cues, to exclude tempo recall, select the *exclude tempo* button.

:::tip

The filters are **recall filters**: in *exclude targets* mode, they act similarly to "recall safe"
in other products.

:::
