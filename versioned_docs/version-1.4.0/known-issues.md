---
sidebar_position: 6
---

# Known Issues

While we would of course love to all live in a land of bug-free software, we are committed to always being transparent regarding known issues that we think users ought to be aware of.

We intend on resolving all known issues in a future release, but until then, here's the current list of known issue advisories:

| Issue Ref. | Issue Details | Workaround |
| ---------- | ------------- | ---------- |
| TF-2749 | A bug in macOS 15.2 and 15.3.1 causes macOS to block “Local Network” access for apps after reboot until manually enabled again in Settings. We are awaiting a fix from Apple. | After booting macOS, toggle "Local Network" access for **transform**.engine in Settings. |
| TF-2698 | When bx\_limiter and AMEK EQ 200 are used in a chain, recalling cues can cause a momentary increase in DSP load. | Monitor DSP load for systems using these plugins. |
| TF-1778 | It is possible to configure both the Primary and Control networks to be Link Local, causing IP network issues. | Do not configure both interfaces to Link Local simultaneously. |
| TF-1779 | It is possible to configure multiple network interfaces with overlapping subnets via Static IP or DHCP, causing IP network issues. | Do not configure multiple interfaces to have overlapping subnets. |
| TF-2148 | When **transform**.engine is the PTP clock leader, changing the sample rate from 96 kHz to 48 kHz in Dante Controller can result in the Dante audio transport stalling if **transform**.engine is the PTP clock leader. Restarting the **transform**.engine after changing sample rate resolves the issue. | Restart the engine after changing sample rate if **transform**.engine is the PTP clock leader. |

While we strive to support as many plugins as possible on the **transform**.engine, as the engine is
an open platform running third-party plugins, there may occasionally be compatibility issues between
the two. We try hard to test as many plugins for issues as possible, and we will always be open with
you about plugin compatibility to the best of our knowledge.

You can find our live-updated compatibility testing database <a
href="https://plugins.fourieraudio.com">here</a>. Any plugins that known to have issues will display
a warning in the **transform**.client, either explaining the issue, or if the plugin can impact
system usability, preventing the engine from loading the plugin until we are able to work with the
plugin manufacturer to resolve the issue.

Can't see an issue that you've come across? Please let us know! Drop us an email at:
support@fourieraudio.com and we'll be sure to get back to you as soon as possible, or file a bug
report on our [discourse site](https://discourse.fourieraudio.com).

## Previously-resolved issues
| Issue Ref. | Issue Details | Workaround | Fixed in version |
| ---------- | ------------- | ---------- | ---------------- |
| TF-944 **[fixed]**    | Dante Secondary Link-Local IP addresses are not supported. If the Secondary network port is set to use Link Local addressing, it will be assigned an IP address in the `169.254/16` range rather than the `172.31/16` range as required for Dante Secondary functionality. | Only use Static or DHCP IP addressing for Dante Secondary. At your own peril, you could set a static IP in the `172.31/16` subnet, however this is **not recommended** as you may experience network issues with IP conflicts in such a configuration.                | [v1.2.0](/downloads) |
| TF-1345 **[fixed]**   | While a chain restarts, metering freezes on that chain. | This is purely cosmetic: you can see that a chain is restarting if all plugins have a lightning bolt next to them. The metering should resume normal service once all plugins have restarted. | [v1.1.0](/downloads) |
| TF-1673 **[fixed]**   | Engine service status indicators are occasionally inaccurate. In certain circumstances, the engine status indicators can show a service being offline when it is actually online, or vice versa. | This is purely cosmetic. Support can obtain accurate details about engine status by inspecting the logs. | [v1.1.0](/downloads) |
| TF-1686 **[fixed]**   | Connecting the client to the **transform**.engine using a link-local address results in the client not functioning as expected. | Please only connect the **transform**.client to the **transform**.engine using static or DHCP IP addresses. If you are using Dante in link-local mode, please connect the client to the engine using the control port, configured to either a static or DHCP address. | [v1.1.0](/downloads) |
| TF-1696 **[fixed]**   | Certain plugins may lead to incorrectly excessive DSP load being displayed. | For some CPU-intensive plugins, the system may report abnormally (and incorrectly) high DSP load. This can be validated by checking if the audio is clean on the output of all chains in the system. | [v1.1.0](/downloads) |
| TF-1810 **[fixed]** | Plugin scanner can stall showing spinner: occasionally, during plugin scan, the scanner dialog can get stuck displaying "Scanning for new and updated plugins" and a spinner forever. | Taking the system to `Offline` mode and then back to `Edit` mode should cause the plugin scan functionality to be available again. | [v1.2.0](/downloads) |
| TF-1810 **[fixed]** | DSP load meter occasionally temporarily jumps to 100% with some plugins, before returning to a much lower, more believable value. Audio processing is not affected. | We are investigating the cause of these jumps but currently believe they are spurious and can be safely ignored; this can be validated by checking that the `DSP Overruns` count is not going up and that output audio is clean. | [v1.3.0](/downloads) |
