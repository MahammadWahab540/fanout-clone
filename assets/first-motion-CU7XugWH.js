import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: First motion
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/so101"
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/so_follower/so_follower.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/so_follower/config_so_follower.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/utils.py"
  - "https://github.com/huggingface/lerobot/issues/1296"
  - "https://github.com/huggingface/lerobot/issues/3193"
  - "https://github.com/huggingface/lerobot/pull/3373"
  - "https://github.com/huggingface/lerobot/issues/930"
  - "https://github.com/huggingface/lerobot/issues/1130"
  - "https://github.com/huggingface/lerobot/issues/2819"
  - "https://github.com/huggingface/lerobot/issues/1319"
  - "https://github.com/huggingface/lerobot/issues/1245"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/motors/feetech/feetech.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/motors/motors_bus.py"
  - "https://github.com/TheRobotStudio/SO-ARM100"
updated: 2026-09-25
---
# First motion

## One joint, five degrees

Motors named, links attached, reference saved. Now give one joint a small target.

Choose the base and send +5°. Everything above it turns together. Then change the gripper's opening. The arm has six motors, but a command can still move just one.

:::interactive name="BuildActivity"
Targets and pose save in this browser. These are teaching coordinates, not calibration values.
:::

:::check
Which command moves more of the robot?
- [x] Base rotation :: The base carries the whole chain above it.
- [ ] Wrist twist :: The wrist carries only the hand after it.
:::

## The model says no

The practice arm refuses a target outside its joint range, or one that puts a link below the table.

That is a geometry check only. It knows nothing about collisions, force, or wiring on a real robot.

## The safe order on hardware

1. Clamp the base and clear the workspace.
2. Keep motor power within reach.
3. Send one small move and watch the intended joint.
4. If a different joint moves, stop. Check its ID and calibration.

Never copy browser pose values straight into an uncalibrated arm.

## When the build goes wrong

An arm that will not move is giving you a clue. Pick a fault, then the fix that matches the symptom.

:::interactive name="BuildFaults"
Isolated teaching faults. A real robot can have more than one problem at once.
:::

## Ask one question at a time

- **Can the computer find the motor?** Port, cable, ID.
- **Does the reading mean what you think?** Horn placement, calibration.
- **Can the motor move?** USB powers the board, not the motors. Check the supply, then torque.

Change one thing at a time, so you know which change mattered.

:::check
The real joint is centred but the software reports +8 degrees. What is the likely cause?
- [ ] Two motors share an ID :: That breaks addressing, not the angle reading.
- [x] The reference or calibration is off :: A centred joint with a nonzero reading points at the saved zero.
- [ ] The motor supply is off :: No power stops motion. It does not shift the reading.
:::
`}))();export{t as default};