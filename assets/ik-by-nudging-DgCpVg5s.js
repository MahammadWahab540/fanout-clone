import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Solving it by nudging
type: lesson
sources:
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/model/kinematics.py"
  - "https://huggingface.co/docs/lerobot/phone_teleop"
  - "https://github.com/Rhoban/placo"
  - "https://github.com/TheRobotStudio/SO-ARM100/blob/main/Simulation/SO101/so101_new_calib.urdf"
updated: 2026-09-23
---
# Solving it by nudging

The triangle formula from the last lesson only works for two joints. This lesson replaces it with a method that works for any arm: move the hand a little closer to the target, check, and repeat. You will run it in about twenty lines of numpy, watch the error fall step by step, and see the one knob that keeps it from going wild.

## Why a formula is not enough

In [From hand position to joint angles](/robotics/lessons/position-to-angles), two joints and a target made a triangle, and the law of cosines solved it. Add a third link, the hand, and the triangle is gone. There are now three angles to choose and only two numbers to hit, so there are endless answers, and no tidy formula picks one.

Real arms are like this, and worse: the SO-101 has five joints, each with its own offset and limits. Engineers stopped writing a new formula for every arm long ago. They use one loop instead.

## The nudge, in plain words

Stand at the current pose. Ask, for each joint: if I turn this joint a tiny bit, which way does the hand move, and how far? That gives one small arrow per joint.

Now look at the gap between the hand and the target. Find the mix of joint turns whose arrows add up to that gap, turn the joints by that much, and look again. Because the arrows are only true for tiny turns, one step does not land exactly on the target. It lands closer. Repeat, and each step closes most of what is left.

The table of arrows, one column per joint, is called the **Jacobian**. Finding the mix of turns is one line of linear algebra. That line has one danger: when the arm is almost straight, the arrows nearly line up, and the maths asks for enormous turns to move a tiny distance sideways. The fix is to add a small cost for big turns. That cost is called **damping**, and the whole method is **damped least squares**.

:::interactive name="IkNudge"
Press Step a few times and watch the error column shrink. Then reset, set damping to 0.001, drag the target to the edge of the reach, and step again: the arm lurches. Set damping to 0.5 and it creeps.
:::

## Twenty lines, predict then run

Here is the whole solver for a three-link planar arm: an upper arm of 11 cm, a forearm of 13 cm, and a 10 cm hand. It starts at shoulder 30, elbow 45, wrist 0, and nudges the fingertip toward a point 18 cm forward and 15 cm up. The Jacobian is built the lazy way: turn each joint by a millionth of a radian and see how far the tip moves.

Before you run it, guess: how many steps until the error is under 1 mm?

\`\`\`python title="nudge.py"
import numpy as np

L = np.array([0.11, 0.13, 0.10])  # upper arm, forearm, hand (metres)

def tip(q):
    angles = np.cumsum(q)  # each link's angle from the table
    return np.array([np.sum(L * np.cos(angles)), np.sum(L * np.sin(angles))])

def jacobian(q, h=1e-6):
    # how far the tip moves when each joint turns a tiny bit
    J = np.zeros((2, len(q)))
    for i in range(len(q)):
        dq = np.zeros(len(q)); dq[i] = h
        J[:, i] = (tip(q + dq) - tip(q)) / h
    return J

def nudge(q, target, damping=0.05):
    error = target - tip(q)
    J = jacobian(q)
    step = J.T @ np.linalg.solve(J @ J.T + damping**2 * np.eye(2), error)
    return q + step

q = np.radians([30.0, 45.0, 0.0])
target = np.array([0.18, 0.15])
for i in range(8):
    err_mm = np.linalg.norm(target - tip(q)) * 1000
    print(f"step {i}  error {err_mm:7.2f} mm  joints {np.round(np.degrees(q), 1)}")
    q = nudge(q, target)
\`\`\`

\`\`\`output
step 0  error  129.64 mm  joints [30. 45.  0.]
step 1  error   41.47 mm  joints [-15.8  83.   16.5]
step 2  error    6.51 mm  joints [-29.1  88.2  21.5]
step 3  error    1.21 mm  joints [-31.4  89.1  22.5]
step 4  error    0.29 mm  joints [-31.8  89.3  22.7]
step 5  error    0.07 mm  joints [-31.9  89.4  22.8]
step 6  error    0.02 mm  joints [-31.9  89.4  22.8]
step 7  error    0.00 mm  joints [-31.9  89.4  22.8]
\`\`\`

Run it with \`uv run --with numpy python nudge.py\`. Four steps take it under 1 mm. Read the pattern in the error column: 130, 41, 6.5, 1.2, 0.3. Once it is close, each step removes about three quarters of what is left. That shrink-by-a-fraction pattern is what "converging" looks like, and it is how you tell a healthy solver from a broken one.

\`cumsum\` in \`tip\` is the same stacking you did by hand in [From joint angles to hand position](/robotics/lessons/angles-to-position): each link's angle from the table is the sum of the joints before it.

**Change \`nudge(q, target)\` to \`nudge(q, target, damping=0.5)\` and rerun. What happens to the error, and is the solver broken?**

It is not broken; it is timid. With damping at 0.5, a real run of this script still has 88 mm of error after seven steps, falling a few millimetres at a time. Damping trades speed for calm: the cost on big turns is now larger than the gain from closing the gap, so every step is small. The belief behind "broken" is that damping is a safety switch you can turn up for free. It is a dial. The 0.05 in the script is small next to link lengths of 0.1 m, so it only matters when the arrows nearly line up, which is exactly when you want it.

## What the real arm uses

Nobody hand-writes this for the SO-101. LeRobot's \`RobotKinematics\` class wraps a library called placo, which runs a similar step-and-repeat solver, eight steps per call by default, on a model of the arm built on the Pinocchio library. That model comes from the SO-101's URDF, \`so101_new_calib.urdf\` from the SO-ARM100 repository, which holds every link length, joint axis, and limit, and names the gripper point \`gripper_frame_link\`.

:::tip title="Find the link lengths in the real model" href="https://github.com/TheRobotStudio/SO-ARM100/blob/main/Simulation/SO101/so101_new_calib.urdf" label="SO-101 URDF on GitHub"
Search the file for \`elbow_flex\` and read the \`origin xyz\` line under it: \`-0.11257\` metres, the 11 cm upper arm. Do the same for \`wrist_flex\` and find \`-0.1349\`, the 13 cm forearm.
:::

**In the browser:** the interactive and the script above are the full lesson.

**Starter, one servo:** a single joint has no nudging to do; its inverse is one \`atan2\`.

**Full arm:** the solver starts each call from the joints the arm reports right now. That is why the SO-101 does not flip its elbow when you drive the hand: the nearest answer to where it already is wins. You will see this in [Drive the hand, not the joints](/robotics/lessons/drive-the-hand).

## What to do now

Copy \`nudge.py\`, change the target to \`[0.40, 0.0]\`, 40 cm straight ahead, and change \`range(8)\` to \`range(10)\`. The three links add up to 34 cm, so the point is out of reach. Run it and watch the error fall to about 60 mm and stay there, while the joints settle near zero and wobble a degree either way: the arm has stretched straight toward the point and can go no farther. That flat error column is what out of reach looks like to a nudging solver, and you will recognise it when the real arm does it.
`}))();export{t as default};