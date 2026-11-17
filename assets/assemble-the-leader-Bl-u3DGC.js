import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Assemble the leader
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/so101"
  - "https://github.com/TheRobotStudio/SO-ARM100"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/teleoperators/so_leader/so_leader.py"
  - "https://github.com/huggingface/lerobot/issues/930"
updated: 2026-09-25
---
# Assemble the leader

## The arm for your hand

You move the leader. The computer reads its joint positions and asks the follower to copy them.

Build the same chain again, but the end becomes a handle and trigger instead of a working gripper. Each leader joint needs a matching follower joint for its reading to go to.

:::interactive name="BuildActivity"
The leader build saves separately from the follower.
:::

## Same shape, different gearing

The follower's motors must hold and move a load. The leader should glide in your hand, so it mixes gear ratios.

From base to trigger, the official leader ratios are **1/191, 1/345, 1/191, 1/147, 1/147, 1/147**. Check the label on each servo before mounting it. A shape match is not enough.

:::check
Why does the leader use lower gear ratios than the follower?
- [ ] To make it stronger :: Strength is the follower's job.
- [x] So your hand can move it easily :: Less gearing means less resistance when you push the joint by hand.
:::

## Your hand becomes the input

Bend the leader's elbow and the follower's elbow should bend. Squeeze the trigger and its gripper should close. The next module connects those signals.

For now, finish the leader and spot the part that differs most: its handle and trigger.
`}))();export{t as default};