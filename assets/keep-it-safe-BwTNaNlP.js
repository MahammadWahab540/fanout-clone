import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Keep it safe
type: lesson
sources:
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/so_follower/config_so_follower.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/so_follower/so_follower.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/utils.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/motors/feetech/feetech.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/scripts/lerobot_teleoperate.py"
  - "https://github.com/huggingface/lerobot/issues/2819"
  - "https://github.com/SRA-VJTI/karma"
updated: 2026-09-25
---
# Keep it safe

## A 60 degree jump

The follower is at 0°. The next command asks for 60°. Should the software pass the whole jump through?

Send one update with the 5° limit on. Repeat a few times. Reset and compare with the limit off. Then make the reading stale.

:::interactive name="PuppetActivity"
Each click is one control-loop update. A position limit changes the command; it is not a measured speed limit.
:::

## Limit the step you send

\`\`\`python title="limit.py"
step = max(-5, min(target - present, 5))
sent_target = present + step
\`\`\`

A nearby goal passes unchanged. A distant one becomes a small step from the latest measured position. LeRobot calls this \`max_relative_target\`.

:::check
Present is 0°, target is 60°, the limit is 5°. What gets sent?
- [ ] 60° :: That is the unlimited jump the limit exists to stop.
- [x] 5° :: The step is clamped to 5° from the measured position.
- [ ] Nothing :: The limit shrinks the step. It does not block it.
:::

## Limits are not a force field

Many limited steps in a row can still add up to fast movement. Loop rate, motor response, and load all matter. A joint-range check cannot see every collision either.

A stale reading is the sneaky one: it must never produce a fresh target.

## Keep a way to stop

On hardware: clamp the base, clear the workspace, and check both starting poses before copying. Pause when readings are unreliable.

Support or park the arm before turning torque off. An unpowered arm can fall.
`}))();export{t as default};