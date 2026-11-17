import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Take over when it fails
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/hil_data_collection"
  - "https://github.com/huggingface/lerobot/blob/v0.6.1/src/lerobot/rollout/strategies/dagger.py"
  - "https://github.com/huggingface/lerobot/blob/v0.6.1/src/lerobot/rollout/configs.py"
  - "https://huggingface.co/docs/lerobot/using_dataset_tools"
  - "https://arxiv.org/abs/1011.0686"
  - "https://github.com/SRA-VJTI/karma"
updated: 2026-09-25
---
# Take over when it fails

## A correction is a new row

A correction is another observation and action pair. Save where the robot actually was when you stepped in, not where you wished it were.

Pick an observed base angle, look at the model's proposal, then choose a corrected target and take over.

:::interactive name="PolicyActivity"
The correction is added to the joint-only teaching episode. The policy does not change until you retrain.
:::

## Keep the starting state honest

The new row's input is the observation before you intervened. Its output is your corrected action.

:::check
The arm drifted to 40°. You take over and move it to 25°. What goes in the new row?
- [x] Observed 40°, action 25° :: The input is where it went wrong; the output is your fix.
- [ ] Observed 25°, action 25° :: That erases the lesson about how to recover from 40°.
:::

## Step in before it is unsafe

On hardware, take over before a failure becomes dangerous, and record the recovery with the right timing. Keep the original task examples too; corrections should add coverage, not replace it.

Try this: intervene at a state beyond the original range and save an action that heads back toward the familiar region. Then retrain.
`}))();export{t as default};