---
date: 2025-08-26
lastmod: 2025-08-26
showTableOfContents: true
title: "PR Target Control"
type: "page"
---

## Introduction
I built this app for my uncle to solve a problem at his shooting range. Target control machines are usually very expensive, and without one, someone always had to move the targets by hand. To make training easier, I created an app that connects to a controller over Bluetooth and automatically moves the targets. The app also gives audio instructions, plays beeps, and runs different routines depending on the type of competition.

## Things I Learned
This is actually the second version of the app—the first was made in Java with Android Studio. For this rewrite, I wanted to try something new and went with Flutter and Dart, which also opens the door to cross-platform support in the future.

Along the way I picked up experience with:
- Bluetooth connections and permissions on modern Android
- Building and installing APKs
- Adding localization (English and Spanish) 
- Saving settings in the app
- Exploring newer Android features like predictive back gestures and stricter permissions

Seeing the app control a real piece of hardware in real time was super rewarding—it meant no more manual target handling and a smoother training experience overall.

## Screenshots

![Screenshot 1](/images/projects/pr-target-control/target-control-1.jpg)

![Screenshot 2](/images/projects/pr-target-control/target-control-2.jpg)

![Screenshot 3](/images/projects/pr-target-control/target-control-3.jpg)

