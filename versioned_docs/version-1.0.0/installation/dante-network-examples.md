---
sidebar_position: 21
sidebar_label: Network Examples
---

# Network Examples

This page features examples of different network designs depending on user requirements.

:::tip

To ensure Control and Primary network traffic are kept separate, you will be unable to make Dante cross points over the Control port. For point to point audio connections, you will need to break the connection, plug the primary ports of your Dante devices and personal device into a switch, and then run Dante Controller on your computer to make subscriptions.
:::

### Simple Set Up

![simple-te-set-up-configuration](@site/static/img/dante-network-examples/simple-set-up-configuration.png)

**Advantages**

- A network switch is required to set up the Dante patching but you can then remove it and make a point to point connection between your **transform**.engine and other Dante device once done.
- Point to point audio transport, optimum latency
- Optional secondary audio connection for redundancy

**Disadvantages**

- Point to point audio and control connections reduces flexibility of device placement.
- Only one other Dante device possible.
- Audio and control devices need to be within 100m of **transform**.engine (100m limit defined by IEEE 802.3ab Gigabit Ethernet over twisted-pair wiring).

### Point-to-Point Audio Connection, Distributed Control Network

![p2p-audio-distributed-control](@site/static/img/dante-network-examples/P2P-Audio-Distributed-Control-Configuration.png)

**Advantages**

- Point to point audio transport, optimum latency.
- Distributed control network, offering greater accessibility to run **transform**.client software from various locations across the production without compromising audio.
- Multiple devices running **transform**.client software.
- Wired and wireless connections of **transform**.client.
- Control data is independent of the audio data.
- Optional secondary audio connection for redundancy.

**Disadvantages**

- Point to point audio connections limits audio device placement to 100m from **transform**.engine (100m limit defined by IEEE 802.3ab Gigabit Ethernet over twisted-pair wiring).
- Only one other Dante device possible.
- Network switch(es) needed.

### Distributed Audio and Control Network

![distributed-audio-and-control](@site/static/img/dante-network-examples/Distributed-Audio-and-Control-Sessions.png)

**Advantages**

- Distributed audio and control networks, offering greater flexibility of equipment placement and connections across production.
- Multiple Dante devices possible.
- Multiple devices running **transform**.client software.
- Wired and wireless connections of **transform**.client.
- Control data is independent of the audio data using different VLANs or different switches.
- Optional secondary audio connection for redundancy.

**Disadvantages**

- Potential for need to increase configured Dante network latency due to network hops.
- Network switch(es) needed.
