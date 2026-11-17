import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: "Project: puppet a pick"
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://huggingface.co/docs/lerobot/so101"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/scripts/lerobot_teleoperate.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/so_follower/so_follower.py"
  - "https://github.com/huggingface/lerobot/issues/2819"
  - "https://huggingface.co/datasets/hbseong/record-pick-and-place-so101"
updated: 2026-09-25
---
# Project: puppet a pick

## Get the block into the box

A small job: move the block into the box. The hard part is the order.

Try lifting straight away. Then approach with an open jaw and work out what has to happen before the block can leave the table.

:::interactive name="PuppetActivity"
Finish the sequence to download its teaching-model waypoints as a JSON file.
:::

## The order is the skill

Closing the gripper only helps when the block is between the jaws. Moving sideways is safer once the block is off the table. Releasing belongs over the box.

So: **approach, lower, close, lift, carry, release**.

:::check
Why can you not lift before closing?
- [x] The block is not held yet :: An open jaw lifts nothing. Close first, then lift.
- [ ] The motor needs to warm up :: Nothing to do with motors. It is the order of actions.
:::

## Make it repeatable

On hardware, start with a large, light object and a forgiving box. Keep the camera view and workspace the same. Do one smooth attempt, reset the object, and do it again.

## What you downloaded

The JSON holds the practice model's poses. It is not a hardware program or a training dataset. Recording, later, adds the observations, actions, and timestamps a learner needs.

You can now move the arm by joint angles. Next: from those angles, where is the hand?
`}))();export{t as default};