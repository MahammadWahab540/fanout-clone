import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: The arm copies your arm
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://huggingface.co/docs/lerobot/so101"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/scripts/lerobot_teleoperate.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/teleoperators/so_leader/so_leader.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/so_follower/so_follower.py"
updated: 2026-09-25
---
# The arm copies your arm

## Read, send, repeat

Move the leader. Read its angle. Send that angle to the follower. Repeat. That loop is **teleoperation**.

Start with the base joint. Move it, then turn copying off and move it again.

:::interactive name="PuppetActivity"
The follower copies a joint angle. It does not see your hand or decide where to go.
:::

:::check
Copying is off and you move the leader. Which arm knows about the new position?
- [x] Only the leader :: Its encoder reads the new angle, but nothing is sent on to the follower.
- [ ] Both arms :: The follower only learns a position when the loop sends it.
:::

## Now six times

The real leader reports all six joints. Matching joint names let the computer send each reading to the corresponding follower motor. Each arm's own calibration makes its numbers mean the same pose.

\`\`\`python title="the-loop.py"
action = leader.get_action()
robot.send_action(action)
\`\`\`

Put both arms in similar poses before you start, so the first copied target is close.

## It copies angles, not places

A longer follower would reach farther at the same angles. Copying angles reproduces the joint pose. It does not promise the two grippers end up at the same point in space.

:::check
Your follower's forearm is 2 cm longer than the leader's. Both elbows read 30 degrees. Where are the grippers?
- [ ] At the same point :: Same angles on different lengths reach different points.
- [x] At slightly different points :: The angles match, the geometry does not, so the hands land in different places.
:::

Next: copying is not instant. What happens between readings?
`}))();export{t as default};