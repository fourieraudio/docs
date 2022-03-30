---
sidebar_position: 2
---

# Getting Started

So, you're keen to obtain the magical superpowers of time travel? Excellent. You're in the right
place.

## Ingredients

- **OS**: *Rewind* interacts with your audio system via any *Core Audio* audio interface. Naturally,
  this means you must be running *macOS* to run *Rewind* at this time (sorry, Linux friends!).

- **Interface**: If your audio system runs on *Dante*, you can use *Dante Virtual Soundcard* to get
  your audio streams into *Core Audio*. If your system uses *AVB*, *macOS* supports sending and
  receiving *AVB* natively as long as you're using a supported Ethernet adaptor (the built in ones
  work great). If you're using *MADI*, you can use any *MADI* interface.

- **iLok**: To safeguard your investment, *Rewind* uses an *iLok* protection dongle to verify your
  licence, so you'll also need a modern *iLok* (2 or 3) plugged in.

- **RAM**: *Rewind* can chew through a *lot* of RAM (all of that audio has to be stored somewhere!).
  Make sure you have enough RAM for the number of channels, sample rate, and amount of time travel
  you desire: 16 GiB is recommended as a _minimum_, and large systems or systems running at high
  sample rates should have 32 GiB. The amount of RAM that Rewind will use can be
  [configured](configuration-pane) to taste.

- **An almost fanatical devotion to Rewind**: For reliable show-critical audio playback with
  demanding configurations (over 2/3 of system RAM used by *Rewind*), quit any other applications
  which wake up every now and again and chew your RAM for the fun of it, or just guzzle a whole load
  by default.  Browsers, Popular File Storage and Synchronisation Services You May Have Heard Of,
  DAWs... we're looking at you.

## Method

1. [Download](https://fourieraudio.com/rewind-support/) (or acquire via other means, nefarious or
   otherwise) the latest installer package.  We ship new versions of Rewind frequently, so be sure
   to always download the latest version.

2. Run the installer. It'll afford you some pleasantries, check that you agree with our entirely
   reasonable terms, and, assuming you do, make a brand shining new entry in your Applications
   folder: "*Fourier Rewind*".

3. If your default input and output audio devices aren't the same, make sure they can both run at the same sample rate, or select the system's local IO as the default device instead (in macOS *System Preferences*). See [Troubleshooting](troubleshooting) for further information.

4. Start *Fourier Rewind* and behold the wondrously lime splash screen. Magical.

5. *Rewind* will have started by connecting to your system default audio interface.  This will almost
   certainly not be the interface that your show audio is on, so to select the correct interface,
   select the ![cog](/img/rewind/ui-cog.png) Cog button to open the configuration pane, and select
   the correct interface for your system. Click the big red button, and *Rewind* will come back
   connected to your show audio! Congrats, you now have time travel!

![Configuration Interface](/img/rewind/ui-config.png)
