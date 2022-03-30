---
sidebar_position: 4
---

# RTA Region
![RTA Region](/img/rewind/rta-region.png)

The RTA displays a real-time frequency spectrum of the audio currently being outputted, if the user has a professional or production license. The yellow bars represent the current level, and the white peak indicators decay at a rate of 10dB/s.

It is important to note that the RTA only responds to the left output channel and features no A or C type weighting.

# RTA specs

The RTA has 60 bars between 20 Hz and 20 kHz each of width 1/6 of an octave.

The RTA uses a 16384 sample FFT window size and a Hann/Hanning window with 50% overlap.
