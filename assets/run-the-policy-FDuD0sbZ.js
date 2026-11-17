import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Run the policy
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/inference"
  - "https://huggingface.co/docs/lerobot/act"
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/rollout/context.py"
  - "https://github.com/noah-wardlow/so101-policy-lab"
  - "https://github.com/huggingface/lerobot/issues/2213"
  - "https://huggingface.co/docs/lerobot/cameras"
  - "https://arxiv.org/abs/2304.13705"
  - "https://www.ml6.eu/en/blog/ai-robotics-a-field-report-on-imitation-learning-with-lerobot"
updated: 2026-09-25
---
# Run the policy

## Press go

A saved model does nothing until something calls it. Run one step of your fitted policy, then use the new position as the next observation.

No saved fit? The activity labels its example model.

:::interactive name="PolicyActivity"
Each click runs one observe, predict, send update.
:::

## No goal, no stop

The toy model has no camera and no idea of "done". A repeated +5° habit keeps moving until a target hits the practice limit. The limit blocks that action; it does not teach the model a goal.

:::check
You start from an angle the demonstrations never visited. Does the model notice?
- [ ] Yes, it slows down :: Nothing in the arithmetic flags unfamiliar input.
- [x] No, it outputs a number anyway :: A model produces an output for any input, seen or not.
:::

## Outside the data

Move the observed angle outside the recorded range. Compare that prediction with one inside the range.

:::interactive name="PolicyFailure"
Outside the training range, the fitted line is guessing. A valid number is not evidence of a useful action.
:::

## Read the failure

For this small policy, look at the rows that made the line. For a camera policy, look at the frames around the failure: was the object somewhere new, partly hidden, or lit differently?

Check the input pipeline before retraining. A swapped camera or wrong joint scale makes good weights act on the wrong information.

## One change at a time

Change one guess at a time and keep the failing start available to compare. A success from an easier pose does not explain the original failure.

:::check
The policy failed from a pose your data never covered. What is the most useful next step?
- [x] Add demonstrations that start near that pose :: The failure tells you which evidence is missing.
- [ ] Retry from the usual start until it works :: An easier start hides the problem instead of fixing it.
:::
`}))();export{t as default};