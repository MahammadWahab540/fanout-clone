import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Retrain and compare
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/hil_data_collection"
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://huggingface.co/docs/lerobot/hardware_guide"
  - "https://colab.research.google.com/github/huggingface/notebooks/blob/main/lerobot/training-act.ipynb"
  - "https://epitools.ausvet.com.au/ciproportion"
updated: 2026-09-25
---
# Retrain and compare

## Refit and look again

You added a correction. Now refit the policy and compare its prediction at the same observed angle.

The activity keeps the model you arrived with as the comparison. Move to your intervention angle, retrain, and inspect both outputs.

:::interactive name="PolicyActivity"
A changed prediction shows the data affected the fit. It is not, by itself, proof of a better robot.
:::

## Reuse the test conditions

Test the old and new policies on the same planned starting conditions. Include the failure that prompted the correction, plus the conditions that already worked.

:::check
Which test shows your correction helped without breaking anything?
- [ ] Only the failure case :: It could fix that and break the rest.
- [ ] Only the old successes :: That ignores what you set out to fix.
- [x] The failure case plus the old conditions :: One shows the fix, the other catches a new failure elsewhere.
:::

## When a line is not enough

A single line cannot represent every recovery rule. If fitting the correction damages the original behaviour, look at the model's capacity and the data. Do not hide the regression.
`}))();export{t as default};