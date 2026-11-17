import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Assemble the follower
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/so101"
  - "https://github.com/TheRobotStudio/SO-ARM100"
  - "https://github.com/huggingface/lerobot/issues/930"
  - "https://github.com/huggingface/lerobot/issues/1296"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/motors/motors_bus.py"
updated: 2026-09-25
---
# Assemble the follower

## Build upward from the base

The follower is the arm that does the work. Build it from the base up; each new joint carries every part attached after it.

One habit before every attachment: **centre the loose servo, then fit its horn**. Try attaching a part before centring and read the feedback.

:::interactive name="BuildActivity"
The model gains one assembly at a time. Your build saves, so you can leave and come back.
:::

## Why the middle matters

The encoder counts 0 to 4095, then wraps to 0. A joint's normal travel should stay far from that seam. Starting the shaft near 2048 leaves room on both sides.

:::check
Why centre the servo at about 2048 counts before fitting the horn?
- [ ] So the arm looks straight in photos :: Looks are not the reason. Think about where the count wraps.
- [x] So the joint's travel stays away from the 4095 to 0 wrap :: Centred, the joint can move both ways without crossing the seam.
:::

## Once it is bolted, it is set

After the horn is bolted, shaft and link move together. If a loose shaft gets knocked, centre it again before fitting the horn.

Calibration later adjusts numbers. It cannot remount a horn that went on in the wrong place.

## What each joint adds

Base attached: the next assembly can swivel. Add the shoulder: the upper arm can lean. Add the elbow: the forearm can fold. The wrist aims the hand, and the last motor opens the jaw.

Disconnect power before handling a real build. For screws, horn orientation, and cable routing, use the full walkthrough and assembly video at the end of this lesson.

:::check
Which motor moves the forearm?
- [ ] Motor 2, the shoulder :: The shoulder tips the whole upper arm.
- [x] Motor 3, the elbow :: The elbow folds the forearm.
- [ ] Motor 4, the wrist :: The wrist only aims the hand.
:::
`}))();export{t as default};