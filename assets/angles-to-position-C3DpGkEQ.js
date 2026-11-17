import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: From joint angles to hand position
type: lesson
sources:
  - "https://github.com/TheRobotStudio/SO-ARM100/blob/main/Simulation/SO101/so101_new_calib.urdf"
  - "https://huggingface.co/docs/lerobot/so101"
  - "https://bambot.org/play/so-arm100"
updated: 2026-09-23
---
# From joint angles to hand position

The arm only understands joint angles, but you care about where the gripper is. This lesson turns two angles into a position on paper, with one sine and one cosine per link. By the end you can predict where the gripper will be before you move the arm, and you will know which points it can never reach.

## Why the arm needs this

When you puppet the arm, your hand on the leader does the thinking. You look at the cube, move your arm, and the follower copies the angles. Nobody ever computes where the gripper is.

A program has no eyes on the arm. If it wants to know whether the gripper is above the cup, it has to work it out from the six numbers the servos report. Going from joint angles to the gripper's position is called **forward kinematics**. It is the one calculation every later lesson in this module leans on.

## Two links, one worked example

Look at the arm from the side. Ignore the base rotation and the wrist for now. What is left is two rigid pieces: the upper arm, about 11 cm, from the shoulder to the elbow, and the forearm, about 13 cm, from the elbow to the wrist. Those lengths are rounded from the SO-101's model file. Put the shoulder at the origin, with x pointing forward along the table and y pointing up.

Take one pose: shoulder at 30 degrees above the table, elbow bent a further 45 degrees.

**The upper arm.** It points 30 degrees up, so the elbow sits at:

- x = 11 × cos 30° = 11 × 0.866 = 9.53 cm
- y = 11 × sin 30° = 11 × 0.500 = 5.50 cm

**The forearm.** Here is the step people get wrong. The elbow angle is measured from the upper arm, not from the table. So the forearm points 30 + 45 = 75 degrees above the table:

- x = 13 × cos 75° = 13 × 0.259 = 3.36 cm
- y = 13 × sin 75° = 13 × 0.966 = 12.56 cm

**Add them.** The wrist is at x = 9.53 + 3.36 = 12.89 cm forward and y = 5.50 + 12.56 = 18.06 cm up. That is the whole method: each link adds its own cosine to x and its own sine to y, using its angle from the table.

:::misconception
It is tempting to use the elbow reading on its own for the forearm, and put the wrist at 11 × cos 30° + 13 × cos 45°. That puts the wrist at 18.7, 14.7: almost 6 cm too far forward and over 3 cm too low. Each joint turns everything after it, so the angles pile up along the chain: the forearm's angle from the table is shoulder plus elbow.
:::

Now move the angles yourself and watch the numbers follow.

:::interactive name="TwoLinkForward"
Set the shoulder to 30 and the elbow to 45 and check that the tip reads about 12.9, 18.1. Then turn on the reachable area and sweep both sliders to see the ring the tip can reach.
:::

## Predict, then run

Here is the same calculation in Python. Before you run it, write down where you expect the tip to be for three more poses: both angles at zero, shoulder at 90 with elbow at zero, and shoulder at 30 with the elbow folded all the way back at 180.

\`\`\`python title="forward.py"
import numpy as np

L1, L2 = 0.11, 0.13  # upper arm and forearm, metres

def tip(shoulder_deg, elbow_deg):
    a = np.radians(shoulder_deg)
    b = np.radians(shoulder_deg + elbow_deg)  # the forearm's angle from the table
    x = L1 * np.cos(a) + L2 * np.cos(b)
    y = L1 * np.sin(a) + L2 * np.sin(b)
    return x, y

for s, e in [(30, 45), (0, 0), (90, 0), (30, 180)]:
    x, y = tip(s, e)
    print(f"shoulder {s:3d}  elbow {e:3d}  ->  x {x*100:6.2f} cm  y {y*100:6.2f} cm")
\`\`\`

\`\`\`output
shoulder  30  elbow  45  ->  x  12.89 cm  y  18.06 cm
shoulder   0  elbow   0  ->  x  24.00 cm  y   0.00 cm
shoulder  90  elbow   0  ->  x   0.00 cm  y  24.00 cm
shoulder  30  elbow 180  ->  x  -1.73 cm  y  -1.00 cm
\`\`\`

Run it with \`uv run --with numpy python forward.py\`, or paste it into any Python you have. The straight arm reaches 24 cm, the sum of the two links. The folded arm ends up 2 cm from the shoulder, the difference of the two links, pointing back the way it came.

Those two numbers are the edges of the **workspace**, every point the tip can reach. For this model it is a ring: nothing farther than 24 cm, nothing closer than 2 cm. The real arm's ring is smaller, because its joints stop before they fold flat and the table is in the way.

**A colleague sets the shoulder to 0 degrees and the elbow to 90 degrees, and says the tip must be 13 cm up and 13 cm forward, since the forearm points straight up. Where is it really?**

The forearm does point straight up, so it adds 0 to x and 13 cm to y. But the upper arm lies flat along the table first, carrying the elbow 11 cm forward. The tip is at 11 cm forward, 13 cm up. The mistake is treating the forearm as if it started at the shoulder. Each link starts where the previous one ended, which is why the formula adds the links one after another.

## On the real arm

**In the browser:** the interactive above is the whole lesson.

**Starter, one servo:** your servo is a one-link arm. Tape a 10 cm stick to the horn and the stick's tip sits at 10 × cos θ, 10 × sin θ, where θ is the servo angle from horizontal.

**Full arm:** the SO-101 adds three things to this picture. The base rotation, \`shoulder_pan\`, swings the whole side view around like a door. The wrist adds a third short link. And the angles LeRobot reports are measured from the middle you set during calibration, not from the table, so they carry an offset. The arm's model file, a URDF, records those offsets and the exact link lengths. You will not do this bookkeeping by hand: in [Drive the hand, not the joints](/robotics/lessons/drive-the-hand), LeRobot's solver reads the URDF for you.

:::tip title="Move a full arm in the browser" href="https://bambot.org/play/so-arm100" label="BamBot SO-ARM100 simulator"
Hold \`w\` or \`2\` to turn the pitch joint (the shoulder), then \`e\` or \`3\` for the elbow. Watch how the elbow joint carries the whole forearm with it, the same stacking the formula does.
:::

## What to do now

Open the interactive, pick any shoulder and elbow angle, and work out x and y on paper before you look at the readout. When your two numbers match the screen to the first decimal, you can do forward kinematics. Next you will run it backwards, in [From hand position to joint angles](/robotics/lessons/position-to-angles).
`}))();export{t as default};