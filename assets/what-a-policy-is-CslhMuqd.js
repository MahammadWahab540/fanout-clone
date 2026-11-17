import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: What a policy is
type: lesson
sources:
  - "https://arxiv.org/abs/2304.13705"
  - "https://tonyzhaozh.github.io/aloha/"
  - "https://huggingface.co/docs/lerobot/act"
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://huggingface.co/datasets/lerobot/svla_so101_pickplace"
updated: 2026-09-23
---
# What a policy is

When you puppet the arm, your hand on the leader decides every move. A policy is the program that takes over that job: it looks at the camera pictures and the joint angles and says where the arm should go next. In this lesson you will build a crude one in fifteen lines of Python from a real dataset, watch it get close but not quite right, and see what a neural network adds.

## The job your hand was doing

Think back to the recording loop. Thirty times a second, the robot had an observation (camera pictures and six joint readings) and the leader supplied an action (six joint targets). You were the part in the middle that turned what you saw into what to do.

A **policy** is anything that does that middle part: observation in, action out. It runs in the same loop, at the same 30 ticks a second, with your hand replaced by a function. Training a policy by showing it demonstrations and asking it to copy them is called **imitation learning**.

\`\`\`python title="the shape of every policy"
def policy(observation):
    # observation: camera pictures + 6 joint readings
    # returns:     6 joint targets for the next tick
    ...
\`\`\`

Every policy in this course has that shape, from the fifteen lines below to the 80-million-parameter network you will train next.

## A policy with no learning at all

The simplest policy you can write: when asked what to do, find the moment in your demonstrations where the arm was in the most similar pose, and do what the human did then. No training, only lookup.

The script uses the public \`lerobot/svla_so101_pickplace\` dataset (50 SO-101 pick-and-place episodes). It hides episode 0, builds the policy from the other 49, and asks it what to do 4 seconds into the hidden episode. It uses only the joint numbers and ignores the cameras.

\`\`\`python title="lookup_policy.py"
import numpy as np
import pandas as pd
from huggingface_hub import hf_hub_download

path = hf_hub_download(
    "lerobot/svla_so101_pickplace",
    "data/chunk-000/file-000.parquet",
    repo_type="dataset",
)
frames = pd.read_parquet(path)
test = frames[frames.episode_index == 0]    # hide episode 0
demos = frames[frames.episode_index != 0]   # learn from the other 49

demo_states = np.stack(demos["observation.state"].to_numpy())
demo_actions = np.stack(demos["action"].to_numpy())

def policy(state):
    """Joint angles in, next action out: copy the closest demo frame."""
    distances = np.linalg.norm(demo_states - state, axis=1)
    return demo_actions[np.argmin(distances)]

row = test.iloc[120]  # 4 seconds into the hidden episode
print("state    ", np.round(row["observation.state"], 1))
print("predicted", np.round(policy(row["observation.state"]), 1))
print("human did", np.round(row["action"], 1))
\`\`\`

Before you read the output, predict: will the policy's six numbers match what the human did exactly, roughly, or not at all? Captured 23 September 2026 with \`uv run --with pandas --with pyarrow --with huggingface_hub --with numpy python lookup_policy.py\`:

\`\`\`output
state     [ 13.2 -31.8  56.1  55.4 -48.   20.6]
predicted [  7.2  -9.4  34.3  50.4 -49.4  23.3]
human did [ 13.  -24.2  46.   53.4 -48.1  20.7]
\`\`\`

Roughly. Every joint moves the right way: the shoulder should rise from -31.8, and the policy says rise. But it overshoots, sending the shoulder to -9.4 when the human went to -24.2. It found a frame from another episode where the arm was in a similar pose but moving faster, and copied that.

## What the lookup cannot do

The lookup policy has two problems, and both matter on a real arm.

It is **blind**. It never looks at the camera, so it cannot know where the cube is. Two episodes can pass through the same pose on the way to cubes in different places, and the lookup cannot tell them apart.

It is **jumpy**. Each tick it may copy a different episode, so the arm can switch between demonstrations from one frame to the next.

A neural network fixes the first problem by learning which parts of the picture matter. Instead of copying one stored frame, it learns a smooth rule from all of them together, one that takes pixels and joint angles and produces an action. The second problem has its own fix, which is the whole of [the next lesson](/robotics/lessons/why-predict-chunks).

**Check: you add the camera image to the lookup, finding the demo frame whose picture is most similar pixel by pixel. You move the cube 5 cm. Does the lookup now reach for the new position?**

Probably not. The most similar picture, pixel by pixel, is dominated by the arm, the table, and the background, which fill most of the image; a small cube moving 5 cm changes very few pixels. If you expected it to work, the misconception is that seeing the picture is the same as understanding it. A trained network learns that the cube's pixels matter more than the table's, which a raw comparison cannot do.

## The policy you will train

The policy this course uses is **ACT**, short for Action Chunking with Transformers. It was introduced by Tony Zhao and colleagues in 2023, in the paper that also introduced ALOHA, a low-cost two-arm robot. ACT learned tasks like slotting a battery with 80 to 90% success from about 10 minutes of demonstrations.

The LeRobot docs recommend ACT as the first policy to try. It is small, about 80 million parameters, and it trains in under an hour on a single gaming GPU. It takes the camera pictures and the six joint readings, and returns not one action but a whole run of them.

:::tip title="See what ACT learned to do" href="https://tonyzhaozh.github.io/aloha/" label="ALOHA project page"
Watch the videos at the top of the page: two cheap arms threading a zip tie, slotting a battery, and opening a cup. Each was learned from human demonstrations using the policy you are about to train.
:::

## Go do this now

Run \`lookup_policy.py\`, then change \`test.iloc[120]\` to \`test.iloc[200]\`, where the arm is swinging over to the box. Compare the predicted and human rows again. You will see the lookup land much closer this time, within a few units on most joints, because every demo carries the brick to the same box. It is the part of the task where the cube's position no longer matters.
`}))();export{t as default};