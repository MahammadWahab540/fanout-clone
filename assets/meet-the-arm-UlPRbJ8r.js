import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Meet the arm
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/so101"
  - "https://github.com/TheRobotStudio/SO-ARM100"
  - "https://huggingface.co/datasets/lerobot/svla_so101_pickplace"
  - "https://huggingface.co/spaces/lerobot/visualize_dataset"
updated: 2026-09-25
---
# Meet the arm

## Joints and links

A robot arm is a chain of hinges. A **joint** is a hinge that turns. A **link** is the rigid piece between two joints, like your upper arm between shoulder and elbow.

The SO-101 has five joints plus a gripper. Each is turned by its own smart servo, and each servo has a number called its **ID**.

## Six names you will use everywhere

| ID | Name in code | What it does |
|---|---|---|
| 1 | \`shoulder_pan\` | turns the whole arm left and right |
| 2 | \`shoulder_lift\` | tips the arm forward and back |
| 3 | \`elbow_flex\` | bends the elbow |
| 4 | \`wrist_flex\` | tips the wrist up and down |
| 5 | \`wrist_roll\` | twists the wrist |
| 6 | \`gripper\` | opens and closes the jaw |

Every file, log, and dataset in the course uses these names. "\`elbow_flex\` is off by ten degrees" is how you will describe problems later.

## Move each joint

Move one slider at a time. The small top view in the corner shows \`shoulder_pan\`, which is hard to see from the side.

:::interactive name="ArmPlayground"
The readout under the drawing gives the gripper's position in centimetres. Try the presets too: rest, reach forward, and wave.
:::

Move \`shoulder_lift\`, then \`wrist_flex\` by the same amount. Compare how far the gripper travels.

:::check
A small error at which joint makes the biggest miss at the gripper?
- [x] \`shoulder_lift\`, near the base :: Joints near the base swing everything after them, so a small angle error becomes a long miss at the tip.
- [ ] \`wrist_flex\`, near the tip :: The wrist only moves the short hand after it. Its errors stay small.
:::

## No joint moves straight up

The gripper is 20 cm in front of the base. You want it exactly 5 cm higher, no further forward. Go back one card and try it in the playground.

Every joint moves the gripper along a curve, so a straight move takes two or three joints turning together. Working out those combinations is the job of the kinematics module.

:::check
Which single joint raises the gripper straight up?
- [ ] \`shoulder_lift\` :: It raises the gripper, but it also swings it forward or back along an arc.
- [ ] \`elbow_flex\` :: It moves the gripper along an arc too.
- [x] None of them alone :: Each joint moves the hand along a curve. Straight lines need joints working together.
:::

## Two arms, one design

The **follower** does the work. Its six motors are identical and strong enough to lift a small object.

The **leader** is the arm you move by hand. Most of its motors have lighter gearing, so the joints glide. The software reads the leader's six angles and the follower copies them about sixty times a second.

When a lesson says "the arm", it means the follower.

## Six numbers describe a pose

Six motors, so a whole pose is six numbers: one per joint. That list is what the software reads, records, sends, and what a robot's brain learns to produce.

:::tip title="Read six joint positions from a real arm" href="https://huggingface.co/spaces/lerobot/visualize_dataset?path=%2Flerobot%2Fsvla_so101_pickplace%2Fepisode_0" label="LeRobot dataset visualizer"
Play episode 0 and pause when the arm reaches down. Which joint lines moved most? The values run from -100 to 100 rather than degrees; calibration explains that scale.
:::

## Make it wave

In the playground, raise \`shoulder_lift\` so the arm stands tall, bend \`elbow_flex\` so the forearm points up, then swing \`wrist_flex\` back and forth. The gripper moves only a few centimetres while the wrist waves. The real follower does the same wave in [First motion](/robotics/lessons/first-motion).
`}))();export{t as default};