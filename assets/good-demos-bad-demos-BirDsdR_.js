import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Good demos, bad demos
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://huggingface.co/blog/lerobot-datasets"
  - "https://github.com/huggingface/lerobot/issues/2213"
  - "https://arxiv.org/abs/2304.13705"
  - "https://huggingface.co/datasets/lerobot/svla_so101_pickplace"
  - "https://huggingface.co/docs/lerobot/using_dataset_tools"
  - "https://huggingface.co/spaces/lerobot/visualize_dataset"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/scripts/lerobot_dataset_viz.py"
updated: 2026-09-25
---
# Good demos, bad demos

## It learns the pauses too

The learner copies everything you did, pauses included. It cannot tell which parts you meant to teach.

Increase the idle time. Watch how much of the dataset now describes doing nothing.

:::interactive name="IdleFrames"
A purposeful attempt next to one padded with long pauses.
:::

## Repetition gives pauses weight

A short wait can be part of the task. Long idle stretches in every episode become a big share of the training rows, and the model tries to fit them too.

:::check
Half the rows in every episode are you hesitating. What might the robot learn?
- [x] To hesitate :: Those rows are half its examples. It fits them like any other.
- [ ] Nothing, it skips pauses :: The learner has no idea which rows you meant.
:::

## Vary the right things

Keep the behaviour consistent. Vary the conditions it should cope with: object positions, small differences in approach, realistic starting poses.

Do not move the camera mount between episodes. That is a different problem, not useful variety.

Throw out failed grasps and dithering before you accept an episode.

## Look at your data

Before training, look at what you saved. Step through your last episode one row at a time.

:::interactive name="InspectEpisode"
The model, timestamp, and numbers all come from the selected row. With no saved episode, a labelled example loads.
:::

## Three questions per episode

1. Does the action match what you meant to do?
2. Does each row follow the previous one sensibly?
3. Are there enough different observations to learn from?

In a real dataset, also check camera alignment, task labels, episode boundaries, and failed attempts.

:::check
In your saved base-joint episode, rows where the observation equals the action teach what?
- [x] Zero movement :: The action says "stay where you are", so that is what they teach.
- [ ] Nothing at all :: They do teach something: to stand still.
:::
`}))();export{t as default};