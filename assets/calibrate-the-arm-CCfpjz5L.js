import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Calibrate the arm
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/so101"
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/so_follower/so_follower.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/motors/motors_bus.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/robot.py"
  - "https://github.com/huggingface/lerobot/pull/3373"
  - "https://github.com/huggingface/lerobot/issues/1883"
updated: 2026-09-25
---
# Calibrate the arm

## A count is not an angle yet

A raw encoder count does not mean "straight ahead". Calibration gives the number a meaning on your arm.

This practice base points straight at **2140 counts**. The software assumes 2048, so it reports an angle even when the base looks centred. Put the arm at the reference pose and save that reading as zero.

:::interactive name="BuildActivity"
Move the base after saving. The raw count changes, but its angle is now measured from your reference.
:::

## One number becomes an angle

\`\`\`python title="calibration.py"
angle_degrees = (raw_count - reference_count) * 360 / 4096
\`\`\`

At the reference, the subtraction gives zero.

:::check
You saved 2140 as zero. The base now reads 2240. What angle is reported?
- [ ] 100 degrees :: 100 is the difference in counts, not degrees.
- [x] About 8.8 degrees :: 100 x 360 / 4096 is about 8.8.
- [ ] 0 degrees :: Zero is only at 2140.
:::

## A zero saved in the wrong pose

Save zero with the base turned, then bring it back to straight ahead. The number can say zero while the arm points somewhere else.

The software trusts whatever pose you saved. That is why a wrong calibration looks fine until the arm reaches for the wrong spot.

## A real arm needs more

LeRobot calibration also records each joint's safe travel limits and uses its own scale. Calibrate the leader and follower separately and keep their calibration names distinct.

Do not force a joint against its stops. The hardware command and endpoint sweep are in the full walkthrough at the end of this lesson.
`}))();export{t as default};