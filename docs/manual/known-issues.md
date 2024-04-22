---
sidebar_position: 6
---

# Known Issues

While we would of course love to all live in a land of no software bugs, we are committed to always being transparent regarding known issues that we think users ought to be aware of.

We intend on resolving all known issues in a future release, but until then, here's the current list of known issue advisories:

| Issue Ref. | Issue Details | Workaround | Fixed In Version |
|------------|---------------|------------|------------------|
| TF-944     | Dante Secondary Link-Local IP addresses are not supported. If the Secondary network port is set to use Link Local addressing, it will be assigned an IP address in the `169.254/16` range rather than the `172.31/16` range as required for Dante Secondary functionality. | Only use Static or DHCP IP addressing for Dante Secondary. At your own peril, you could set a static IP in the `172.31/16` subnet, however this is **not recommended** as you may experience network issues with IP conflicts in such a configuration. | - |
| TF-1345    | While a chain restarts, metering freezes on that chain. | This is purely cosmetic: you can see that a chain is restarting if all plugins have a lightning bolt next to them. The metering should resume normal service once all plugins have restarted. | - |
| TF-1673    | Engine service status indicators are occasionally inaccurate. In certain circumstances, the engine status indicators can show a service being offline when it is actually online, or vice versa. | This is purely cosmetic. Support can obtain accurate details about engine status by inspecting the logs. | - |

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
