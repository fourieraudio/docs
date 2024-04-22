---
sidebar_position: 1
---

# Hardware Specification

<a class="button button--lg button--primary"
    href="https://downloads.fourieraudio.com/documentation/transform/transform_engine_specification.pdf">PDF Spec Sheet</a>

### Processing Platform

- CPU: Intel Alder Lake i9-12900
- DSP Cores: 6
- DSP RAM: 24 GiB DDR5-4800 non-ECC (system RAM additional)
- DSP Storage: 400 GiB NVMe (system storage additional)

### Audio I/O

- Connectors: 2 x etherCON gigabit ethernet
- Protocol: Dante (redundant)

### Dante

- Channels: 64 bidirectional
- Redundant Network: yes
- PTP Clock Leader Support: yes
- Sample Encoding: PCM16 / PCM24 / PCM32
- Minimum Network Latency: 1 ms

### DSP Pipeline

- Bit Depth: 32-bit / 64-bit float
- Sample Rate: 44.1 / 48 / 96 kHz
- Latency: 1 ms @ 96 kHz, 32 sample buffer

### Additional I/O

- Control Network: 1 x etherCON gigabit ethernet
- MIDI: 5-pin DIN opto-isolated in / out / thru
- Rear protected USB Bay: 4 x USB 2.0 (high-retention)
- Front-Panel USB: 2 x USB 3.0

### Local UI

* Front-Panel Display: monochrome OLED
* Input: encoder

### Plugin Engine

* Compatible Plugins: windows 10 compatible vst3 plugins that can be installed and licensed offline.
  For more information, see our [compatibility database](/plugin-database).

### Thermal

* Strategy: forced-air differential pressure
* CPU: noctua active cooling
* Operating Spec: 10 - 40 degrees celsius
* 20 - 95 % relative humidity (non-condensing)
* max. altitude 2000 m asl

### Power

* Inlet: dual redundant IEC, switched and filtered EN 62368-1
* 200 W, 100-240 V(ac) @ 50/60 Hz
* 2.2 A @ 110 V, 1.1 A @ 230 V

#### Chassis

* Design: custom touring-grade
* Ingress Protection: IP30

### Physical

* Mass (unit): 5.5kg
* Dimensions (unit): 483 mm (w) x 385 mm (d) x 89 mm (h)
* Rack Height: 2U
* Rack Depth: 360 mm

### Remote Client (for control / configuration)

* Compatible OS: macOS (11 onwards - M1/Intel),  Windows (10 onwards)

### Warranty

* 2 years RTB


----

<small>
As a versatile manufacturer committed to continuous R&D and (hopefully!) product improvement, we
reserve the right to change any & all specifications without notice.
</small>
