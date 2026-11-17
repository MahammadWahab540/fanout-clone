import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Record your first dataset
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://huggingface.co/docs/lerobot/cameras"
  - "https://huggingface.co/docs/lerobot/lerobot-dataset-v3"
  - "https://colab.research.google.com/github/huggingface/lerobot/blob/main/examples/notebooks/quickstart.ipynb"
updated: 2026-09-25
---
# Record your first dataset

## Six rows, one joint

Make the observation and action pairs yourself. Only the base joint moves, so every number is easy to explain.

Capture the first target at 5°. Set the next to 10° and capture again. Continue through 15, 20, 25, and 30. Save when you have six rows.

:::interactive name="RecordingActivity"
Each click records the current state and requested action, then moves the model. Timestamps step by one simulated 30 Hz frame.
:::

## Read your first row

It should say observed 0°, commanded 5°. The next row observes 5° and commands 10°.

The observation is where the arm was when you gave the command, not where it went afterwards.

:::check
Row 3 commands 15°. What does it observe?
- [x] 10° :: Each row observes where the previous command took the arm.
- [ ] 15° :: 15° is where it is going, not where it was.
:::

## Keep what you made

Save the episode in the browser, or download \`episode-001.json\`. The next lessons use these saved rows.

This practice file has joint state and actions only. A real LeRobot recording also needs synchronised camera data.

## Record doing nothing

Capture one more row without changing the target. You just recorded a "stay here" action. The next lesson explains why lots of those can matter.
`}))();export{t as default};