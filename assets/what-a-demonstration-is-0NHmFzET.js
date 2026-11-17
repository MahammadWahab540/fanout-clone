import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: What a demonstration is
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://huggingface.co/docs/lerobot/lerobot-dataset-v3"
  - "https://huggingface.co/datasets/lerobot/svla_so101_pickplace"
  - "https://huggingface.co/spaces/lerobot/visualize_dataset"
updated: 2026-09-23
---
# What a demonstration is

To teach the arm a task, you do the task yourself while the computer writes down everything that happens. That recording is a demonstration. In this lesson you will scrub through one, frame by frame, and read the exact numbers a robot learns from: what it saw, where its joints were, and where it was told to go next.

## One attempt, written down thirty times a second

When you puppet the SO-101, an open-source robot arm, with the leader, the follower copies you. If the computer also saves what is going on at every tick of that loop, you get a recording. One recorded attempt at a task, from the start pose to the finish, is called an **episode**.

LeRobot saves a snapshot 30 times a second. Each snapshot, called a frame, holds three things:

- **What the robot saw:** one picture from each camera.
- **What the robot felt:** the six joint readings of the follower, from \`shoulder_pan\` down to \`gripper\`. This is the **observation state**.
- **What it was told to do next:** the six joint positions the leader was asking for at that moment. This is the **action**.

A six-second pick is 180 frames. Fifty of those episodes, in one folder, is a **dataset**.

## Scrub through an episode

The difference between the observation and the action is the whole idea of this module, and it is easier to see than to read.

:::interactive name="EpisodeScrubber"
Drag the timeline through a six-second pick at 30 frames a second. Watch the table under the scene: the action row is always a little ahead of the state row, because the action is where the arm goes next.
:::

Stop the playhead in the middle of the reach. The state says where the elbow is now. The action says where the elbow should be one tick from now. During a fast move the two are clearly different. When the arm is resting they are almost equal.

## A real episode, in numbers

You do not need the arm to see real data. The Hugging Face team published \`lerobot/svla_so101_pickplace\`, 50 episodes of an SO-101 putting a pink Lego brick into a transparent box. The script below downloads its table of joint numbers (about 370 KB; the videos are separate) and prints three frames from the first episode.

\`\`\`python title="first_frames.py"
import pandas as pd
from huggingface_hub import hf_hub_download

path = hf_hub_download(
    "lerobot/svla_so101_pickplace",
    "data/chunk-000/file-000.parquet",
    repo_type="dataset",
)
frames = pd.read_parquet(path)
episode = frames[frames.episode_index == 0]
print(len(frames), "frames in the file,", len(episode), "in episode 0")

for t in [0, 120, 121]:
    row = episode.iloc[t]
    state = [round(float(x), 1) for x in row["observation.state"]]
    action = [round(float(x), 1) for x in row["action"]]
    print(f"t={row.timestamp:.2f}s  state {state}")
    print(f"          action {action}")
\`\`\`

Run it with \`uv run --with pandas --with pyarrow --with huggingface_hub python first_frames.py\`. On 23 September 2026 it printed:

\`\`\`output
11939 frames in the file, 303 in episode 0
t=0.00s  state [2.0, -98.7, 98.9, 74.8, -51.5, 1.4]
          action [1.9, -99.4, 99.5, 74.8, -48.5, 1.6]
t=4.00s  state [13.2, -31.8, 56.1, 55.4, -48.0, 20.6]
          action [13.0, -24.2, 46.0, 53.4, -48.1, 20.7]
t=4.03s  state [13.2, -30.1, 54.7, 55.1, -48.0, 20.6]
          action [12.9, -20.8, 43.8, 52.6, -48.4, 20.7]
\`\`\`

Each list is the six joints in order, base to gripper. This dataset was recorded in 2025 with LeRobot's older scale: each joint runs from -100 to 100 across its calibrated range, and the gripper from 0 (closed) to 100 (open). Recordings made with current LeRobot use degrees instead; the idea is the same. At 0 seconds the arm is folded at rest and state and action nearly match. At 4 seconds the arm is swinging out: the action asks for the shoulder at -24.2 while the shoulder is still at -31.8. One tick later the shoulder has moved to -30.1, toward the target, and the target has moved on again.

:::misconception
A demonstration is not a video of the task. The video is only the observation. Without the action row the robot would know what the scene looked like but not what to do about it, and the action is the part a policy learns to produce.
:::

**Check: halfway through a session, the top camera's cable works loose and the camera keeps sending the same frozen picture. The arm and the joint numbers are fine. Can you keep those episodes?**

No. The state and action rows are correct, but the picture never shows where the brick is, and the brick's position is the one thing that changes from episode to episode. A robot trained on them learns to reach without looking. If you said yes because the joint numbers are fine, the misconception is that the columns stand alone: a frame only teaches when what the robot saw, felt, and was told all describe the same moment. Delete those episodes and re-record them.

## See the whole dataset in the browser

The numbers are one view. The LeRobot visualizer shows the same episode as both camera videos with the joint plots underneath, all on one timeline.

:::tip title="Watch episode 0 with its joint plots" href="https://lerobot-visualize-dataset.hf.space/lerobot/svla_so101_pickplace/episode_0" label="LeRobot dataset visualizer"
Press play and watch the \`up\` and \`side\` camera videos above the joint plots. Find the moment around 3 seconds where every line starts to move at once. That is where the reach begins.
:::

If you have the arm, you will record your own episodes in the next lesson with one command. If you do not, this public dataset is your data for the rest of the module.

## Go do this now

Open the visualizer link above, play episode 0, and pause at 4 seconds. Read the shoulder value off the plot and check it against the -31.8 the script printed. Then move on to [recording your first dataset](/robotics/lessons/record-your-first-dataset).
`}))();export{t as default};