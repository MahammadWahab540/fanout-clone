import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: The control loop
type: lesson
sources:
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/scripts/lerobot_teleoperate.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/configs/dataset.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/so_follower/so_follower.py"
  - "https://huggingface.co/docs/lerobot/il_robots"
updated: 2026-09-25
---
# The control loop

## A staircase and a shadow

The follower learns where your hand went only when a new reading arrives. Slow updates turn a smooth motion into a staircase. Delayed updates tell it where your hand used to be.

Run the sweep. Change only the update rate first. Then put the rate back and add delay.

:::interactive name="ControlLoopLag"
Compare 5 Hz with 30 Hz at the same delay. Then zero delay with 200 ms at the same rate.
:::

## Rate: how often

At 5 Hz a new command arrives every 200 ms. At 30 Hz, about every 33 ms. Between updates, the follower holds its previous target.

The model treats the motor as instant so you can see the communication effect alone. A real servo adds its own response time.

## Delay: how old

A delay shifts every reading into the past. Even frequent updates can be stale, and a faster rate does not remove a fixed network or processing delay.

:::check
You run at 30 Hz with 200 ms of delay. What does the follower get?
- [ ] Fresh readings, because 30 Hz is fast :: Rate says how often, not how old.
- [x] Regular readings that are each about 200 ms old :: About six updates fit inside that delay. On time and out of date.
:::

## Measure the whole loop

\`\`\`python title="loop-timing.py"
period_seconds = 1 / 30
# Read the leader, send the follower target, then wait only
# for the time left in this period. Measure the actual rate.
\`\`\`

Time the complete loop, not one call. If reading cameras takes longer than the period, asking for 30 Hz does not make it 30 Hz.
`}))();export{t as default};