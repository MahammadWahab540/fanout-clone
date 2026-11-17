import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Why copying drifts
type: lesson
sources:
  - "https://arxiv.org/abs/1011.0686"
  - "https://huggingface.co/docs/lerobot/hil_data_collection"
  - "https://huggingface.co/spaces/lerobot/robot-learning-tutorial"
  - "https://arxiv.org/abs/2304.13705"
updated: 2026-09-23
---
# Why copying drifts

A policy trained on your demonstrations can pick the cube cleanly one run and wander off the next, with nothing changed. This lesson shows why: every small mistake carries the arm a little further from anything you showed it, and out there its mistakes get bigger. You will watch that happen in the browser, measure it with a ten-line simulation, and see why the fix has to come from you taking over, not from recording more of the same.

## Your demos are a narrow road

When you recorded, you moved the leader along a good path every time. The cube was here, the gripper went there. Fifty episodes of that trace out a road through all the poses the arm can be in. It is a narrow road, because a person doing a task well does not wander.

The policy learns what to do on that road. It has seen thousands of frames from it, and each frame came with the right next move. Off the road, it has seen nothing. It never watched you recover from a gripper that ended up two centimetres too far left, because you never put it there.

That gap is the whole problem. Training showed the policy only the situations your good driving produced. Running the policy shows it the situations its own driving produces, and those are not the same.

## Small errors carry it off the road

No policy copies perfectly. Say it is off by a millimetre on one step. That is harmless on its own, but the next camera frame now shows the arm a millimetre off, a picture slightly unlike anything in training. Its next guess is a little worse, so the next step lands a little further off.

This is **compounding error**: each mistake changes what the robot sees next, and what it sees next decides the next mistake. The robot drifts into places your demos never went, which is called **distribution shift**. Once it is far enough out, it is guessing, and its guesses can push it further away rather than back.

:::interactive name="CompoundingError"
With "Nobody" fixing mistakes, watch the policy's path along the corridor of demonstrated states: each step is only slightly off, yet once the hand leaves the corridor the offset grows fast. Switch to "A person (DAgger)" and step through training rounds 1 to 4 to see the corrections widen the corridor.
:::

Stéphane Ross, Geoffrey Gordon, and Drew Bagnell described this in 2011. Their result, in plain words: for a task that takes many steps, a copied policy's mistakes can grow with the square of the task length, not in step with it. Double the length of the task and the trouble can quadruple. That is why a long pick-and-place fails more often than a short reach.

## Measure the drift yourself

You can see the effect without a robot. The script below moves an imaginary gripper for up to five seconds at 30 steps a second. Near the demo path the policy steers back a little. Outside the band the demos covered, it guesses at random. It counts how many runs out of 1,000 end more than 3 cm off.

\`\`\`python title="drift.py"
import numpy as np

TRIALS = 1000


def lost_after(steps, known):
    """Share of runs more than 3 cm off the demo path after this many steps."""
    rng = np.random.default_rng(0)
    off = np.zeros(TRIALS)
    for _ in range(steps):
        seen = np.abs(off) < known
        # Near the demos the policy steers back. Outside them it guesses.
        steer = np.where(seen, -0.2 * off, rng.normal(0, 1.0, TRIALS))
        off += steer + rng.normal(0, 0.4, TRIALS)
    return np.mean(np.abs(off) > 3)


for known in (1.0, 2.0):
    row = [f"{lost_after(n, known):4.0%}" for n in (30, 90, 150)]
    print(f"demos cover +/-{known:g} cm | lost after 1 s, 3 s, 5 s:", *row)
\`\`\`

Before you run it, guess: if the demos covered twice as wide a band, would the lost share halve? Then run it:

\`\`\`bash title="terminal"
uv run --with numpy python drift.py
\`\`\`

\`\`\`output
demos cover +/-1 cm | lost after 1 s, 3 s, 5 s:  20%  38%  49%
demos cover +/-2 cm | lost after 1 s, 3 s, 5 s:   1%   2%   2%
\`\`\`

Two things show up. With a narrow band, the lost share keeps climbing the longer the task runs. And widening the band does far more than halve it, because a policy that knows how to come back from 2 cm rarely gets pushed out to 3. The numbers are from a toy, not your arm, but the shape is the one you will see.

**Check: your policy picks the cube 12 times in 20. A friend suggests recording 50 more episodes, done the same careful way as the first 50. Will that fix the drift?**

Probably not much. Fifty more careful episodes trace the same narrow road again, so the policy gets better at the road and still knows nothing about the ground beside it. If you expected more demos to fix it, the misconception is that the policy fails because it saw too few examples. It fails because it never saw the situations its own small mistakes create. What it needs are examples that start off the road and show the way back.

## Where the missing examples come from

Ross and his colleagues proposed a fix called **DAgger**. Let the policy drive. Wherever it ends up, a person shows the right move from there. Add those examples to the dataset and train again. Each round, the dataset covers more of the places the policy actually goes.

A robot version of this is simpler to run than it sounds: you watch the policy, and when it starts to go wrong you grab the leader and steer it back. LeRobot records those takeovers for you. You can also make the road wider on purpose while recording, by starting some demos from slightly awkward poses and recovering. That helps, but you are guessing where the policy will drift. Corrections go where it really drifts.

:::note
Chunking and drift are separate fixes. Predicting 50 moves at once, as in [the chunk lesson](/robotics/lessons/why-predict-chunks), means fewer decisions, so fewer chances to slip. It does not teach the policy anything about the states it has never seen.
:::

## Go do this now

Go back to the interactive above, choose "A person (DAgger)", and compare training round 1 with round 4. You will see the corridor widen around the spots where the person stepped in, and the path stay inside it. Then add 1.5 to the list of bands in \`drift.py\` and run it again: the middle row comes out at about 15% lost after five seconds, so every extra half centimetre of recovery the demos show pays off. The [next lesson](/robotics/lessons/take-over-when-it-fails) does the same thing with your own arm.
`}))();export{t as default};