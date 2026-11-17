import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Why predict a chunk of moves
type: lesson
sources:
  - "https://arxiv.org/abs/2304.13705"
  - "https://tonyzhaozh.github.io/aloha/"
  - "https://huggingface.co/docs/lerobot/act"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/policies/act/configuration_act.py"
  - "https://github.com/huggingface/lerobot/issues/2213"
updated: 2026-09-25
---
# Why predict a chunk of moves

## Moves belong together

A robot action is usually part of a short motion: approach, start closing, lift. Predicting each tiny step on its own can make that motion wobble.

Compare one-step predictions with short chunks. Watch the path, and the points where the policy gets a fresh look.

:::interactive name="ActionChunking"
Chunk length sets how much motion is proposed at once, and when new evidence can change the plan.
:::

## Smoothness costs attention

A chunk gives neighbouring actions a shared plan. But running a long chunk without looking again makes the robot slow to react when the block moves or a grasp slips.

:::check
You pick a very long chunk. What do you gain and lose?
- [x] Smoother motion, slower reaction to surprises :: The plan is steady but stale until the next look.
- [ ] Smoother motion, no downside :: Between looks, the robot is acting on old information.
:::

## Predicting and executing are separate

ACT, the policy you train later, learns sequences of future actions from demonstrations. How those predictions are run and blended is a separate choice.

Try a short and a long chunk under the same disturbance. Name the benefit and the cost you can see.
`}))();export{t as default};