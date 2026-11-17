import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: What a demonstration is
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://huggingface.co/docs/lerobot/lerobot-dataset-v3"
  - "https://huggingface.co/datasets/lerobot/svla_so101_pickplace"
  - "https://huggingface.co/spaces/lerobot/visualize_dataset"
updated: 2026-09-25
---
# What a demonstration is

## An attempt, written down

A demonstration is one attempt recorded over time. At each instant, save what the robot observed and what you asked it to do.

Scrub the episode. Stop just before the gripper closes. Compare the observed joint state with the commanded action on that row.

:::interactive name="EpisodeScrubber"
A synthetic episode that makes the alignment visible. The state is what happened; the action is the target sent next.
:::

## State and action

- **State:** where the joints are right now.
- **Action:** the target sent next.

On most rows they differ a little: the action leads, the state follows.

:::check
The observed elbow is 40° and the action says 43°. What does that row mean?
- [x] At 40°, the demonstrator asked for 43° next :: The state is where it was; the action is where it was sent.
- [ ] The recording is broken :: They should differ. The action leads the motion.
:::

## Keep the pairs together

A training row can hold camera images, joint readings, the action, a timestamp, and the task label. They must all describe the same instant.

A beautiful video alone is not a dataset. The learner needs actions paired with the observations that led to them.

## Rows are not trials

At 30 frames per second, six seconds make 180 rows. Those rows are slices of one attempt, not 180 separate tries.

:::check
You record one six-second pick at 30 fps. How many independent attempts is that?
- [ ] 180 :: 180 is the number of rows, and they are all part of one motion.
- [x] 1 :: One attempt, cut into 180 correlated rows.
:::

Next, record a small episode of your own.
`}))();export{t as default};