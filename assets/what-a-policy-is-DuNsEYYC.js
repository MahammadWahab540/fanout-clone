import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: What a policy is
type: lesson
sources:
  - "https://arxiv.org/abs/2304.13705"
  - "https://tonyzhaozh.github.io/aloha/"
  - "https://huggingface.co/docs/lerobot/act"
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://huggingface.co/datasets/lerobot/svla_so101_pickplace"
updated: 2026-09-25
---
# What a policy is

## Observation in, action out

Until now, your hand chose the next target. A **policy** chooses it: an observation goes in, an action comes out.

Here the observation is just the base angle. Move the observed-angle slider, look at the proposed target, then send it.

:::interactive name="PolicyActivity"
A one-joint linear example. It is not the camera-based ACT policy used on real hardware.
:::

## The action becomes the next input

Once the target is sent, the arm moves. Its new position becomes the next observation. Press again and the policy is driving a control loop.

:::check
The policy sees 10° and outputs 15°. The arm gets there. What does the policy see next?
- [x] 15° :: The arm's new position is the next observation.
- [ ] 10° again :: The observation updates after the move.
:::

## It knows only its examples

This example adds about 5° per step because its demonstration rows did. It has no idea of "pick up the block" or "stop when done". Those need the right observations and training data.

Later in this module you fit this rule from your own saved episode.
`}))();export{t as default};