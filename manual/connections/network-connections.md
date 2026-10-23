---
sidebar_position: 1
---

# Network Connections

**transform**.engine has three network interfaces which can be used to connect it to the outside world:

| Interface | Dante | HYPERPORT |
| --------- | ----- | --------- |
| **Primary** | ✅ Primary audio<br />✅ transform Control<br />✅ Dante Controller | ✅ Primary audio<br />❌ transform Control |
| **Secondary** | ✅ Secondary audio<br />✅ transform Control<br />✅ Dante Controller | ✅ Secondary audio<br />❌ transform Control |
| **Control** | ❌ Audio<br />✅ transform Control<br />❌ Dante Controller | ❌ Audio<br />✅ transform Control |

Below are various examples of different network layouts which can be used to connect **transform**.engine to a console.

### Simple Setup

![simple-te-set-up-configuration](@site/static/img/dante-network-examples/simple-set-up-configuration.png)

**Advantages**

- It's dead simple.
- Point to point audio transport achieves lowest latency.
- Control data is independent of the audio data.
- Optional secondary audio connection for redundancy.

**Disadvantages**

- Point to point audio and control connections reduces flexibility of device placement.
- If using Dante, no other audio devices can be used on the Dante network.
- Audio and control devices need to be within 100m of **transform**.engine (100m limit defined by IEEE 802.3ab Gigabit Ethernet over twisted-pair wiring).
- If using Dante, a network switch is required to set up the Dante patching. Once configured, you can then remove the switch and return to a point to point connection.
- No [Console Integration](console-integration.md) possible.

**Compatibility**

- **HYPERPORT**: ✅
- **Dante**: ✅


### Point-to-Point Audio Connection, Distributed Control Network

![p2p-audio-distributed-control](@site/static/img/dante-network-examples/P2P-Audio-Distributed-Control-Configuration.png)

**Advantages**

- It's still pretty simple.
- Point to point audio transport achieves lowest latency.
- Distributed control network offers greater accessibility to run **transform**.client software from various locations across the production,
  including connecting via WiFi.
- [Console Integration](console-integration.md) is possible.
- Multiple devices can run **transform**.client software and connect to **transform**.engine simultaneously.
- Control data is independent of the audio data.
- Optional secondary audio connection for redundancy.

**Disadvantages**

- Point to point audio connections limit audio device placement to 100m from **transform**.engine (100m limit defined by IEEE 802.3ab Gigabit Ethernet over twisted-pair wiring).
- If using Dante, no other audio devices can be used on the Dante network.
- If using Dante, a network switch is required to set up the Dante patching. Once configured, you can then remove the switch and return to a point to point connection.
- Network switch(es) needed for control network.

**Compatibility**

- **HYPERPORT**: ✅
- **Dante**: ✅


### Distributed Audio and Control Network

![distributed-audio-and-control](@site/static/img/dante-network-examples/Distributed-Audio-and-Control-Sessions.png)

**Advantages**

- Distributed audio and control networks offer flexibility of equipment placement and connections across production.
- Multiple Dante devices possible.
- [Console Integration](console-integration.md) is possible.
- Multiple devices can run **transform**.client software and connect to **transform**.engine simultaneously.
- Wired and wireless connections of **transform**.client.
- Control data can be kept independent from audio data using different VLANs or different switches.
- Optional secondary audio connection for redundancy.

**Disadvantages**

- Potential for need to increase configured Dante network latency due to network hops.
- Network switch(es) needed.

**Compatibility**

- **HYPERPORT**: ❌
- **Dante**: ✅
