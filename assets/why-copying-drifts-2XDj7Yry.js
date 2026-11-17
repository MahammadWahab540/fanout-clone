import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Why copying drifts
type: lesson
sources:
  - "https://arxiv.org/abs/1011.0686"
  - "https://huggingface.co/docs/lerobot/hil_data_collection"
  - "https://huggingface.co/spaces/lerobot/robot-learning-tutorial"
  - "https://arxiv.org/abs/2304.13705"
updated: 2026-09-25
---
# Why copying drifts

## Small errors grow

A small error changes the next observation. The policy then acts on that changed state, which may be one the demonstrator never visited.

Raise the per-step error and follow the path. Then compare a controller that gets useful corrections.

:::interactive name="CompoundingError"
The diagram isolates how repeated decisions can carry the system away from demonstrated states.
:::

## The data follows one path

A clean demonstration teaches actions along the path the expert took. The deployed policy follows its own path. Once the two split, it may need a recovery move the clean data never showed.

:::check
Your policy drifts off the demonstrated path. Why can more perfect demonstrations miss the fix?
- [x] They never visit the off-path states :: Perfect runs stay on the path, so they never show how to get back.
- [ ] They are too few :: Quantity is not the problem. They all cover the same states.
:::

## Show it the way back

You may need examples of returning from the exact off-path states the policy reaches. That idea, collecting data where the policy actually goes, is called **dataset aggregation**.

Find the first point in the diagram where the policy leaves the demonstration. That is where to ask: what action should it learn here?
`}))();export{t as default};