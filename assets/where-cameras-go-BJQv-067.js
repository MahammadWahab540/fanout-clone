import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Where cameras go
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/cameras"
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/cameras/opencv/configuration_opencv.py"
  - "https://huggingface.co/datasets/lerobot/svla_so100_sorting"
  - "https://huggingface.co/datasets/lerobot/svla_so101_pickplace"
  - "https://lerobot-visualize-dataset.hf.space/lerobot/svla_so100_sorting/episode_0"
  - "https://www.ml6.eu/en/blog/ai-robotics-a-field-report-on-imitation-learning-with-lerobot"
  - "https://huggingface.co/docs/lerobot/index"
  - "https://github.com/huggingface/lerobot/issues/1353"
  - "https://en.wikipedia.org/wiki/USB_hardware"
  - "https://webcamtests.com"
updated: 2026-09-25
---
# Where cameras go

## Can the camera see the reach?

The arm can reach the block. Can its camera see enough to guide that reach?

Compare the overhead and wrist views. Lower the hand and look again. The scene has not changed, but what the robot can see has.

:::interactive name="CameraActivity"
One camera sees the wider workspace. The other travels with the hand.
:::

## Give each view a job

An overhead camera keeps the block and the box in view. A wrist camera shows how the jaws line up near the block. Neither helps if the arm hides the key moment.

:::check
Which view best shows whether the jaws surround the block?
- [ ] Overhead :: It sees the whole table but the hand can block the grasp.
- [x] Wrist :: It rides with the gripper and sees the alignment up close.
:::

## The camera-only test

Before recording anything, try the task while looking only at the camera feeds. If you cannot tell when the jaws surround the block, the policy cannot either.

Keep the mounts fixed from recording to testing. Move a camera and the same scene looks different to the robot.

## Light beats resolution

A bigger image cannot recover detail hidden in shadow. Lower the room light below and watch the detector lose the block. Then loosen the threshold and see what else it grabs.

:::interactive name="ColourPick"
The scene is synthetic, so you can change one condition at a time.
:::

## The tradeoff lives in the mask

A strict threshold rejects dim block pixels. A loose one lets background in. More pixels at the same poor contrast do not fix that.

Use even light, avoid glare, and keep exposure the same while recording and testing. Two high-resolution cameras can also eat more USB bandwidth and time than your control loop has.

:::check
The block is hard to detect in a dim corner. What helps most?
- [x] Steady, even light :: Contrast is the problem. Light fixes contrast; pixels do not.
- [ ] A higher-resolution camera :: More pixels of a dim block are still dim.
:::
`}))();export{t as default};