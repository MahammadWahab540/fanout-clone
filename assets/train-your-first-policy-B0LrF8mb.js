import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Train your first policy
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://huggingface.co/docs/lerobot/act"
  - "https://huggingface.co/docs/lerobot/hardware_guide"
  - "https://huggingface.co/docs/lerobot/notebooks"
  - "https://colab.research.google.com/github/huggingface/notebooks/blob/main/lerobot/training-act.ipynb"
  - "https://huggingface.co/docs/hub/jobs-pricing"
  - "https://research.google.com/colaboratory/faq.html"
  - "https://github.com/huggingface/lerobot/issues/2213"
  - "https://www.ml6.eu/en/blog/ai-robotics-a-field-report-on-imitation-learning-with-lerobot"
updated: 2026-09-25
---
# Train your first policy

## Fit a line

Train the smallest policy you can inspect: a line from the observed base angle to its next target.

Use your saved episode and press Fit. No episode? Six clearly labelled example rows load. The numbers under the model are the coefficients it actually fitted.

:::interactive name="PolicyActivity"
Least squares on the recorded joint pairs. No GPU or neural network in this exercise.
:::

## What training changed

The policy has two numbers: a multiplier and an offset. Training picks them to shrink the gap between predicted targets and demonstrated actions.

If every demonstration adds 5°, the fit is about \`target = observed + 5\`.

:::check
Every row in your episode has the same observation. What can the fit learn?
- [ ] A reliable rule :: One input value cannot show how the output should change.
- [x] Nothing useful :: With no variety in the input, there is no slope to find. The activity asks for more varied data.
:::

## Low error is not success

The error shown is measured on the training rows. A low number means the line fits those examples. It says nothing about picking reliably anywhere else.

On real hardware, the full walkthrough trains ACT on image and joint data on a rented GPU.
`}))();export{t as default};