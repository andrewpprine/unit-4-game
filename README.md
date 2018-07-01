# Crystal Collector Game

## Overview

This launches a website that runs a game that adds up the values of various clicked items with the goal of hitting a specific target score. The game runs via Javascript.

## Gameplay

1. Upon loading the page, user is given a target number and 4 clickable elements (crystals) each worth a set value. Target number and 4 crystal values are set randomly upon page load.

2. As user clicks each crystal, that crystal's value is added to user's current score. User must pay attention to score increases and remember what each crystal is worth, as crystal values are never explicitly stated.
  - Crystal values are set to display with each click in console.log

3. If user matches their score to the target number, player receives an alert that they won, the total win/loss record is updated, and game starts over with new values for both the target number and each crystal.
  - If user's target number exceeds target number, player receives alert that they lost, total win/loss record is updated, and game starts over with new values for both the target number and each crystal


## Known bugs

- certain games are unwinnable by design, depending on crystal values. 
  - i.e. if target is an odd number and each crystal is even number, then target number cannot be equaled.
