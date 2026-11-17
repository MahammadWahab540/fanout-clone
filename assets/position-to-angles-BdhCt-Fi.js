import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: From hand position to joint angles
type: lesson
sources:
  - "https://github.com/TheRobotStudio/SO-ARM100/blob/main/Simulation/SO101/so101_new_calib.urdf"
  - "https://en.wikipedia.org/wiki/Law_of_cosines"
  - "https://zalo.github.io/blog/inverse-kinematics/"
updated: 2026-09-23
---
# From hand position to joint angles

You know where you want the gripper; the arm wants joint angles. This lesson runs the last one backwards: pick a point, and find the shoulder and elbow angles that reach it. You will also see why a point can have two answers, one answer, or none, and how to tell which before the arm moves.

## Running the formula backwards

In [From joint angles to hand position](/robotics/lessons/angles-to-position) you put in a shoulder of 30 degrees and an elbow of 45 and got the wrist at 12.89 cm forward, 18.06 cm up. Now start from that point and ask for the angles.

Going from a wanted position to joint angles is called **inverse kinematics**, or IK. Forward kinematics always has exactly one answer. Inverse kinematics does not, and that is the whole difficulty.

## The elbow from one triangle

Draw a line from the shoulder straight to the target. The upper arm, the forearm, and that line make a triangle. You know all three sides: 11 cm, 13 cm, and the distance to the target.

**Step 1, the distance.** By Pythagoras, d = √(12.89² + 18.06²) = √492.4 = 22.19 cm.

**Step 2, the elbow.** When all three sides of a triangle are known, one rule, called the law of cosines, gives the angle between two of them. Rearranged for our elbow:

- cos(elbow) = (d² − 11² − 13²) ÷ (2 × 11 × 13)
- cos(elbow) = (492.4 − 121 − 169) ÷ 286 = 0.708
- elbow = 45.0 degrees

**Step 3, the shoulder.** The line to the target points atan2(18.06, 12.89) = 54.5 degrees above the table. The bent forearm pulls the tip off the upper arm's line by atan2(13 × sin 45°, 11 + 13 × cos 45°) = 24.5 degrees. So the shoulder is 54.5 − 24.5 = 30.0 degrees. We got our pose back.

## Two answers, one, or none

Step 2 took an inverse cosine, and cosine does not care about sign: cos 45° and cos −45° are both 0.707. So an elbow of −45 degrees also closes the triangle. The arm reaches the same point with the elbow bent the other way, and the shoulder raised to make up for it. These are the **elbow-down** and **elbow-up** answers.

At the edges, the two answers meet. With the arm straight, the target is exactly 24 cm away, the elbow is 0, and there is only one answer. Past 24 cm, or closer than 2 cm, the cosine in step 2 comes out above 1 or below −1. No angle has that cosine. The point is out of reach, and the maths tells you by failing.

:::interactive name="TwoLinkInverse"
Drag the target dot and watch the two arm outlines, one elbow-up and one elbow-down. Pull the dot out to the edge until the two outlines merge into one straight arm, then drag it farther and read the out of reach message.
:::

## Predict, then run

Here is the solver. Before you run it, predict what it prints for the last two targets: 24 cm straight ahead, and 26 cm straight ahead.

\`\`\`python title="inverse.py"
import numpy as np

L1, L2 = 0.11, 0.13

def angles(x, y):
    d = np.hypot(x, y)
    if d > L1 + L2 or d < abs(L1 - L2):
        return None  # out of reach
    cos_e = (d**2 - L1**2 - L2**2) / (2 * L1 * L2)
    answers = []
    for elbow in (np.arccos(cos_e), -np.arccos(cos_e)):
        shoulder = np.arctan2(y, x) - np.arctan2(L2 * np.sin(elbow), L1 + L2 * np.cos(elbow))
        answers.append((round(np.degrees(shoulder), 1) + 0.0, round(np.degrees(elbow), 1) + 0.0))
    return answers

for x, y in [(0.1289, 0.1806), (0.20, 0.05), (0.24, 0.0), (0.26, 0.0)]:
    print(f"target ({x*100:.2f}, {y*100:.2f}) cm ->", end=" ")
    a = angles(x, y)
    if a is None:
        print("out of reach")
    else:
        print("  ".join(f"shoulder {s:6.1f} elbow {e:6.1f}" for s, e in a))
\`\`\`

\`\`\`output
target (12.89, 18.06) cm -> shoulder   30.0 elbow   45.0  shoulder   78.9 elbow  -45.0
target (20.00, 5.00) cm -> shoulder  -19.7 elbow   61.8  shoulder   47.8 elbow  -61.8
target (24.00, 0.00) cm -> shoulder    0.0 elbow    0.0  shoulder    0.0 elbow    0.0
target (26.00, 0.00) cm -> out of reach
\`\`\`

The first line recovers the worked example and its mirror twin. The straight-ahead target gives the same answer twice. The last one is refused before any angle is computed. (The \`+ 0.0\` only stops Python from printing \`-0.0\`.)

**You ask for a point 20 cm forward and 5 cm up. The solver offers shoulder −19.7 with elbow 61.8, or shoulder 47.8 with elbow −61.8. Your arm is mounted on a table. Which do you send?**

The second. A shoulder of −19.7 degrees points the upper arm below the table, which the SO-101 cannot do on a desk; the elbow would have to be under the tabletop. The tempting answer is "the first one the solver returned", on the belief that any correct answer will do. Both are correct on paper. The solver does not know about your table, your joint limits, or which pose the arm is in now. Picking between answers is your job, and the usual rule is: keep the one closest to the current pose, so the arm does not flip its elbow mid-move.

## Where this stops working

This triangle trick works because the model has two joints and you asked for two numbers, x and y. The real arm has five joints, and you often care about which way the gripper points, not only where it is. Formulas for that exist, but they get long and they break every time the arm changes. The next lesson, [Solving it by nudging](/robotics/lessons/ik-by-nudging), replaces the formula with a loop that works for any arm.

:::tip title="Drag an arm to a target in 3D" href="https://zalo.github.io/blog/inverse-kinematics/" label="Inverse Kinematics by Zalo"
Drag the target in the first demo and watch the arm follow it, then try the later demos that add hinges and joint limits. Each frame starts from the arm's last pose, so it keeps its elbow on one side instead of flipping.
:::

## What to do now

Pick a point inside the ring, say 15 cm forward and 10 cm up. Work out the elbow with the law of cosines on paper, then drag the dot to that spot in the interactive and check your number against the elbow it shows. (You should get about 83 degrees.) When they agree, you can do inverse kinematics for a two-link arm.
`}))();export{t as default};