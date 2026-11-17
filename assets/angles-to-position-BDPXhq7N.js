import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: From joint angles to hand position
type: lesson
sources:
  - "https://github.com/TheRobotStudio/SO-ARM100/blob/main/Simulation/SO101/so101_new_calib.urdf"
  - "https://huggingface.co/docs/lerobot/so101"
  - "https://bambot.org/play/so-arm100"
updated: 2026-09-25
---
# From joint angles to hand position

## Where does the hand end up?

You can move the joints. But where will the hand land? Flatten the arm into two links: an 11 cm upper arm and a 13 cm forearm.

Change the shoulder angle first. Then change only the elbow. Watch the tip coordinates.

:::interactive name="TwoLinkForward"
The upper arm is 11 cm and the forearm 13 cm in this rounded teaching model.
:::

## Add the two links

The shoulder sets the first link's direction. The elbow angle is measured from that link, so the second link points at shoulder + elbow. Each link adds an across part and an up part.

\`\`\`python title="forward.py"
from math import cos, sin, radians
q1, q2 = radians(60), radians(-70)
x = 11 * cos(q1) + 13 * cos(q1 + q2)
y = 11 * sin(q1) + 13 * sin(q1 + q2)
print(round(x, 1), round(y, 1))
\`\`\`

\`\`\`output
18.3 7.3
\`\`\`

Angles in, position out: **forward kinematics**.

## Find the edge

Straighten the elbow and the arm reaches 24 cm. Fold it right back and the unequal links leave a 2 cm gap. Turn on the reachable-area overlay: a ring between 2 and 24 cm.

:::check
The shoulder turns while the elbow stays fixed. What path does the tip follow?
- [ ] A straight line :: A single rotating joint never moves the tip in a straight line.
- [x] A circle around the shoulder :: The folded arm is a rigid shape spinning about the shoulder. Check it in the drawing.
:::

## What the flat model leaves out

The real arm adds a base rotation, a wrist, and joint limits. Each adds one more link to follow, but the idea stays the same: start at the base and add one link after another.
`}))();export{t as default};