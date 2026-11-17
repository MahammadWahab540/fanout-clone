import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: "Project: the arm writes your name"
type: lesson
sources:
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/model/kinematics.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/so_follower/config_so_follower.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/so_follower/so_follower.py"
  - "https://huggingface.co/docs/lerobot/phone_teleop"
  - "https://github.com/TheRobotStudio/SO-ARM100/tree/main/Simulation/SO101"
  - "https://makezine.com/projects/learn-inverse-kinematics-with-a-robot-arm-drawbot/"
updated: 2026-09-25
---
# Project: the arm writes your name

## Letters are strokes, strokes are points

A letter becomes strokes. Each stroke becomes points. Inverse kinematics turns each point into an arm pose.

Run the Python to draw an A. Change one point and run it again.

:::interactive name="CartesianActivity"
This is real Python. Your edits save in this browser, and you can download the file.
:::

## Lift the pen between strokes

The two sides of the A are one stroke. The crossbar is another. The pen lifts between them so no line joins them.

Add a third stroke to make a different letter. Keep points near the example while you learn the coordinates. A point too far away is unreachable, and the program says so.

:::check
You forget the pen-up between the A's sides and its crossbar. What appears?
- [x] An extra line joining the two strokes :: With the pen down, the move between strokes draws too.
- [ ] Nothing different :: The pen draws whenever it touches the paper, including between strokes.
:::

## From sketch to smooth motion

The arm view jumps from pose to pose. It does not smooth the path or model pen pressure.

On hardware: split each stroke into nearby waypoints, plan the pen lifts, and test above the paper before touching it.

## Keep your file

Download \`draw-strokes.py\` when you like your letter. It uses the browser's \`fanout_arm\` teaching API, so it runs in the course simulator, not directly on LeRobot hardware.

Code, geometry, motion: connected. Next, the robot needs eyes.
`}))();export{t as default};