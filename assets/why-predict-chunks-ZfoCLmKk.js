import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Why predict a chunk of moves
type: lesson
sources:
  - "https://arxiv.org/abs/2304.13705"
  - "https://tonyzhaozh.github.io/aloha/"
  - "https://huggingface.co/docs/lerobot/act"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/policies/act/configuration_act.py"
  - "https://github.com/huggingface/lerobot/issues/2213"
updated: 2026-09-23
---
# Why predict a chunk of moves

A policy that decides one move at a time makes a slightly different small mistake every tick, and the arm shakes. ACT, the policy you will train, avoids that by planning a whole run of moves at once and then carrying them out. In this lesson you will see the difference in the browser, measure it in ten lines of Python, and learn the one setting that controls it.

## One move at a time shakes

Every policy is a little wrong. Ask it where the elbow should go and it might say 12.0 degrees when the best answer was 11.3. That is fine once. The trouble is that the mistake is different every time you ask.

A one-step policy is asked 30 times a second. Tick one it is 0.7 degrees high, tick two 1.1 degrees low, tick three 0.4 high. The arm follows each answer, so it wobbles back and forth around the path you wanted. On a real SO-101 you see and hear it: a buzzing jitter, worst when the arm should be holding still.

Small errors also add up. A mistake nudges the arm into a pose slightly unlike anything in the demos, the policy is less sure there, and its next mistake is bigger. The ACT paper calls this the compounding error problem.

## Plan a run, then carry it out

The fix in the ACT paper is to have the policy predict the next several actions in one go, for example the next 50 ticks. The robot then plays those out in order before asking again. This is called **action chunking**, and the run of actions is a **chunk**.

Inside one chunk, the moves come from a single decision, so they agree with each other and form a smooth path. The policy is asked far less often, so there are far fewer chances for a fresh mistake. The paper puts it as cutting the effective length of the task by the chunk size: a 300-tick task with chunks of 50 is six decisions, not three hundred.

Chunks also help with something human demonstrations are full of: pauses. A one-step policy sees the same pose twice, once when you paused and once when you moved on, and cannot tell which to do. A chunk covers the pause and what came after it together.

:::interactive name="ActionChunking"
Set the chunk size to 1 and watch the arm jitter along its path to the cube. Switch to 10, then 50, and watch it smooth out. Now, with chunk 50, press "bump the cube" and count how long the arm keeps reaching for the old spot.
:::

## See the numbers

The script below fakes a policy that is off by a random amount (about 2 degrees) each time it is asked. It drives one elbow along a smooth 3-second sweep and counts how often the elbow changes direction. A smooth sweep should never change direction.

\`\`\`python title="chunks.py"
import numpy as np

rng = np.random.default_rng(0)
ticks = 90                            # 3 seconds at 30 Hz
target = np.linspace(0, 30, ticks)    # the elbow should sweep 0 to 30 degrees

def run(chunk_size):
    """Each time the policy is asked, its whole plan is off by a random 2 degrees."""
    elbow = []
    for start in range(0, ticks, chunk_size):
        error = rng.normal(0, 2)
        plan = target[start:start + chunk_size] + error
        elbow.extend(plan)
    steps = np.diff(elbow)
    reversals = int(np.sum(np.sign(steps[1:]) != np.sign(steps[:-1])))
    return reversals, ticks // chunk_size

for k in [1, 10, 30]:
    reversals, calls = run(k)
    print(f"chunk {k:>2}: policy asked {calls:>2} times, elbow changed direction {reversals:>2} times")
\`\`\`

Run with \`uv run --with numpy python chunks.py\`:

\`\`\`output
chunk  1: policy asked 90 times, elbow changed direction 51 times
chunk 10: policy asked  9 times, elbow changed direction 10 times
chunk 30: policy asked  3 times, elbow changed direction  0 times
\`\`\`

With one move at a time, the elbow reverses 51 times in 3 seconds: that is the jitter. With chunks of 10, the reversals only come at the seams between chunks, where one plan hands over to the next. With one chunk per second, the path is smooth.

## The price: the arm stops looking

Here is the catch you saw when you bumped the cube. While a chunk plays out, the robot is not reading its cameras for new decisions. LeRobot's ACT defaults to a chunk of 100 ticks and plays all 100 before asking again. At 30 ticks a second that is 3.3 seconds of moving on an old plan.

**Check: your policy uses chunks of 100 and plays all 100. Halfway through a reach, the cube gets knocked 3 cm to the left. When does the arm start reaching for the new position?**

Only when the current chunk runs out, up to 3.3 seconds later, and by then it may already have closed on empty air. If you said "straight away, because the camera sees it", the misconception is that the policy is always watching. It only looks when it is asked for a new chunk. That is why shorter chunks are more responsive, and why the right size is a trade.

The ACT paper's answer to the seams is **temporal ensembling**: ask the policy every tick anyway, and blend all the overlapping chunks that have a plan for this moment into one weighted average. LeRobot has it as \`--policy.temporal_ensemble_coeff\`, which needs \`--policy.n_action_steps=1\` so the policy is asked every tick.

## What to set

LeRobot splits the idea into two settings: \`chunk_size\`, how many moves the policy predicts, and \`n_action_steps\`, how many of them the arm plays before asking again. Both default to 100. Many SO-101 users run chunks of 20 to 50; in one LeRobot issue about a policy that would not move, a user suggested a chunk of 20 while playing 10 ([#2213](https://github.com/huggingface/lerobot/issues/2213)).

Start with the defaults for your first run. If the arm is smooth but slow to react, lower \`n_action_steps\`. If it jitters, raise it.

:::tip title="Read the idea from its source" href="https://arxiv.org/abs/2304.13705" label="ACT paper on arXiv"
Open the PDF and find Figure 5. It draws exactly what you did in the interactive: chunks laid over time, and the overlapping chunks that temporal ensembling averages.
:::

## Go do this now

Change the error in \`chunks.py\` from 2 degrees to 0.5 and run it again. Before you run it, predict whether chunk 1 still jitters. It does: 42 reversals instead of 51, because what makes the shaking is not the size of the mistake but that it changes every tick. That is the reason ACT plans in chunks, and it is the setting you will choose when you [train your first policy](/robotics/lessons/train-your-first-policy).
`}))();export{t as default};