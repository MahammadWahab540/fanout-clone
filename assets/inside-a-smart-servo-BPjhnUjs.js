import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: What is inside a smart servo
type: lesson
sources:
  - "https://www.mantech.co.za/datasheets/products/sts3215-200620a-1.pdf"
  - "https://www.dfrobot.com/product-2961.html"
  - "https://www.waveshare.com/wiki/ST3215_Servo"
  - "https://github.com/huggingface/lerobot/blob/v0.6.1/src/lerobot/motors/feetech/tables.py"
  - "https://github.com/TheRobotStudio/SO-ARM100"
  - "https://bambot.org/play/sts3215"
updated: 2026-09-25
---
# What is inside a smart servo

## Turn it by hand

Your robot starts with one part: a motor that can tell you where it is. The green piece on top is the **horn**. Later, a link of the arm bolts here. The motor is off. Move the slider.

:::interactive name="ServoTurn"
One servo, before it becomes a joint. Drag the model to look around.
:::

## The second number

Did you notice the count under the angle? A sensor inside measures the horn's angle even when the motor is not driving it. That sensor is the **encoder**.

It divides a full turn into **4,096 counts**. A quarter-turn is 1024; half a turn is 2048.

\`\`\`python title="counts.py"
position = 1024
angle = position * 360 / 4096
print(angle)
\`\`\`

\`\`\`output
90.0
\`\`\`

:::check
The encoder reads 3072. Where is the horn?
- [ ] 90 degrees :: 90 degrees is 1024 counts.
- [ ] 180 degrees :: 180 degrees is 2048 counts.
- [x] 270 degrees :: 3072 x 360 / 4096 = 270. Three quarters of a turn.
:::

## Where the count wraps

The highest reading is 4095, just short of a full turn. One more count wraps back to zero.

That seam matters. When you build the arm, you will centre each motor so a joint's normal travel stays far from it.

## Give the motor a goal

To hold a position, the servo also needs a **motor**, **gears** that trade speed for force, and a **controller** that compares the measured position with your goal. Select each part.

:::interactive name="ServoParts"
A functional diagram of the four parts, not a physical cutaway.
:::

The controller keeps asking "are we at the goal yet?" and drives the motor until the gap closes. Switching on that holding force is called **torque on**.

## What if it cannot get there?

Send a goal. Then **hold the horn** and send another. Watch which number changes and which stays put.

:::interactive name="ServoHold"
This teaching model illustrates motion and feedback. It does not reproduce the servo's firmware or forces.
:::

A successful command means the request was sent. Only the encoder tells you whether the movement happened.

## Two modes

- **Torque off:** you move the horn, the robot reads.
- **Torque on:** you send a goal, the robot moves.

You will use both to make this servo [copy a movement you teach it](/robotics/lessons/copycat-servo). First, give it [power and data](/robotics/lessons/power-and-wiring).
`}))();export{t as default};