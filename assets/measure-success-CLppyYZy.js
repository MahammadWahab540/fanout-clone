import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Measure it honestly
type: lesson
sources:
  - "https://www.ml6.eu/en/blog/ai-robotics-a-field-report-on-imitation-learning-with-lerobot"
  - "https://huggingface.co/docs/lerobot/inference"
  - "https://epitools.ausvet.com.au/ciproportion"
updated: 2026-09-25
---
# Measure it honestly

## Once is not a rate

"It worked once" is an observation. It is not an estimate of how often the robot works.

Use the trial counter. Compare a small test with a larger one at the same success rate and watch the uncertainty change.

:::interactive name="SuccessRate"
Keep the success definition and the starting conditions fixed when comparing two versions.
:::

:::check
Three successes out of three trials. What do you know?
- [ ] The robot works every time :: Three trials cannot tell 100% from, say, 70%.
- [x] Not much yet :: The range of plausible success rates is still very wide. Run more trials.
:::

## Define success before the run

For a pick: does the object have to end inside the box with no human help? Does a drop count? A timeout? Decide before you see the result.

## Count every attempt

Record every planned attempt, failures included. Test under the conditions the robot will really face, not only the easy positions.

Training loss and task success measure different things. A model can predict familiar actions well and still drift during a full attempt.

:::check
You go from 7 of 10 to 70 of 100 successes. What changed?
- [ ] The robot improved :: The rate is the same 70%.
- [x] You are more sure of the rate :: Same rate, more trials, a tighter estimate.
:::
`}))();export{t as default};