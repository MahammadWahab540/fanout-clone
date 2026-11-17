import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: "Project: the copycat servo"
type: lesson
sources:
  - "https://github.com/huggingface/lerobot/blob/v0.6.1/src/lerobot/motors/motors_bus.py"
  - "https://github.com/huggingface/lerobot/blob/v0.6.1/src/lerobot/motors/feetech/feetech.py"
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://huggingface.co/datasets/lerobot/svla_so101_pickplace"
  - "https://huggingface.co/spaces/lerobot/visualize_dataset"
updated: 2026-09-25
---
# Project: the copycat servo

## Teach it a small wave

You can read the motor and send it goals. Put the two together. With torque off, click **Record five seconds** and move the slider slowly back and forth. The green line is what gets saved.

Then choose **Use my recording in Python** and **Run Python**. The program sends your saved positions back as goals.

:::interactive name="ServoRecord"
Your movement, sample rate, and program save on this device. Save motion.json to keep the data.
:::

## What did we save?

A list of numbers and a rate. At 30 samples per second the program reads about every 33 milliseconds, so five seconds is roughly 150 readings.

On replay each number becomes the next goal. The motor still needs time to reach each one, so a fast wave can lag behind your hand.

## Record it slower

Pick **5 samples/sec**, record another wave, and compare the lines.

:::check
At 5 samples per second, you flick the horn quickly between two readings. What does the recording keep?
- [x] Possibly nothing of the flick :: A reading every 200 ms can miss a movement that starts and ends between two samples.
- [ ] The flick, just less smooth :: Only readings are saved. A motion between two of them is simply not there.
:::

## A recording is not a skill

The program repeats positions. It does not know a block is on the table, and cannot adapt if the block moves. Later, cameras and a trained policy let the arm choose its next move from what it sees.

For now you have the mechanism that makes demonstrations possible: **read, save, replay**.

## Try the physical version

With a wired servo, download [copycat-hardware.py](/course-assets/robotics/workbench/copycat-hardware.py) and set your port. It releases torque when it exits.

\`\`\`bash title="terminal"
python copycat-hardware.py
\`\`\`

Move the horn gently while it records. Take your hand away before confirming the replay. Next, these motors get names, links, and a gripper in [the build module](/robotics/lessons/configure-the-motors).
`}))();export{t as default};