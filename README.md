# Fog Machine Control
*Control a fog machine with Arduino UNO and NW.js React app.*

![](docs/images/fog_control.png)


## Overview

The Fog Machine is one of the most popular props in Escape Rooms, offering spooky supernatural effects or revealing light or laser beams.


## What we need

* basic fog machine with a ***wired*** remote control
* Arduino UNO with Ethernet shield and SD card
* SRD relay shield

<img src="docs/images/high-voltage-warning.png" valign="right"> 120/220V **10A** relays are required because fog machine power is 400W - 700W or more.</src>


## Hacking the fog machine
It is as simple as cutting and rewiring the power cable and the remote control cable.

> Open the wired remote control box and replace the pushbutton connection with a connection to the SRD relay shield.

This video may help: 
* <a href="https://www.youtube.com/watch?v=Y6d89PBlxrk" target="_blank">Controlling a Fog Machine with a Prop Controller or Relay</a>

![](docs/images/open_remote.jpg)


## Wiring the Arduino prop and the fog machine
The SD card is necessary to store the fog sequence but optional if you want to control the fog sequence from the controller app only:
> Fog sequence: spit fog for *T2* seconds, pause *T3* seconds, do that *N* times then pause *T1* minutes and starts again for ever.

![](docs/images/fog_machine.png)


## Edit and upload the Arduino sketch

Install lastest <a href="https://www.arduino.cc/en/software" target="_blank">Arduino IDE</a>.

Open **FogMachine** sketch in Arduino IDE and set the Arduino IP address:

```cpp
String ip = "192.168.1.201"; //<<< ENTER YOUR IP ADDRESS HERE
```

Upload **FogMachine** sketch to the Arduino

```dos
Sketch uses 26748 bytes (82%) of program storage space. Maximum is 32256 bytes.
Global variables use 1197 bytes (58%) of dynamic memory, leaving 851 bytes for local variables. Maximum is 2048 bytes.

```


## Install Fog Controller app for Windows

Download and unzip the app archive:
* <a href="https://github.com/jim-blog/fog-machine/raw/master/bin/win64/fog-controller-win64.zip">fog-controller-win64.zip</a>

Alternatively, download the `.7z` app archive and unzip with <a href="https://www.7-zip.org/" target="_blank">7-Zip</a>:
* <a href="https://github.com/jim-blog/fog-machine/raw/master/bin/win64/fog-controller-win64.7z">fog-controller-win64.7z</a>

Run `fog-controller.exe`
* if necessary, pass protection *Windows Smartscreen* that prevents the execution of the downloaded file.

![App](docs/app.png)

App source code is available at <a href="https://github.com/jim-blog-apps/fog-controller" target="_blank">https://github.com/jim-blog-apps/fog-controller</a>



## Author

**Jean-Michel _(Jim)_ FAURE** (December 8th, 2020)
* company: FAURE SYSTEMS®
* mail: *dev at faure dot systems*
* github: <a href="https://github.com/fauresystems" target="_blank">fauresystems</a>
* web: <a href="https://faure.systems/" target="_blank">Faure●Systems</a>