# GeoLocation
It is a small project to implement GeoLocation.

## Introduction
This project is to demonstrate implementation of GeoLocation in native app. It contains button to enable GPS, button to set source and destination and button to get distance between them.

## Usage
[Here] (https://docs.nativescript.org/angular/hardware/location.html) you can see the theory about installation and usage.
You will have to install geolocation plugin in you project. To install simply run the command as `tns plugin add nativescript-geolocation`. </br>
Also, you will have to add `import geolocation = require("nativescript-geolocation");` in your `.ts` file. </br>
I tried the code execute on emulator but it fails to detect and show message of GPS enable. It works properly on device.