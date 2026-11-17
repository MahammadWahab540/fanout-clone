import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Give every motor its name
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/so101"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/so_follower/so_follower.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/motors/motors_bus.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/motors/feetech/feetech.py"
updated: 2026-09-25
---
# Give every motor its name

## One cable, six motors

Six motors will share one cable, so every command has to say which motor it is for. That is what the **ID** is for.

Every fresh motor starts as ID 1. Connect the gripper alone and give it ID 6. Work back toward the base: 5, 4, 3, 2, 1. Then check the whole chain.

:::interactive name="BuildActivity"
Each chip shows the ID stored in that motor. Your assignments save in this browser.
:::

## Why connect only one?

Picture telling "motor 1" to rename itself while six motors all answer to that name. You cannot pick out the one you meant. Connecting a single motor makes the command unambiguous.

:::check
All six fresh motors are chained together and you send "ID 1, become ID 6". What happens?
- [ ] Only the gripper changes :: Nothing tells the bus which of the six you meant.
- [x] Every motor answering to ID 1 tries to change :: They all hear ID 1, so they all act. Name motors one at a time.
:::

## The finished map

| Motor | Joint |
|---|---|
| 1 | base |
| 2 | shoulder |
| 3 | elbow |
| 4 | wrist pitch |
| 5 | wrist roll |
| 6 | gripper |

The ID is an address, not an angle. On hardware, LeRobot's setup command walks you through this one motor at a time.

## When a motor will not answer

Two motors answering one ID is the most common build bug. So is a board that sees no motor at all.

Check in this order: the port, the cable seated at both ends, then the ID. Change one thing at a time, or you will not know which change fixed it.
`}))();export{t as default};