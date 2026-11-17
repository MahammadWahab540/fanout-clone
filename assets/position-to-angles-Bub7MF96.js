import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: From hand position to joint angles
type: lesson
sources:
  - "https://github.com/TheRobotStudio/SO-ARM100/blob/main/Simulation/SO101/so101_new_calib.urdf"
  - "https://en.wikipedia.org/wiki/Law_of_cosines"
  - "https://zalo.github.io/blog/inverse-kinematics/"
updated: 2026-09-25
---
# From hand position to joint angles

## Reverse the question

The block sits at a known point. Which shoulder and elbow angles put the hand there?

Move the target. Compare the two solutions. Then drag it outside the ring.

:::interactive name="TwoLinkInverse"
A reachable point can have two elbow configurations. A point beyond the links' reach has none.
:::

## Two answers, or none

The hand can reach the same point with the elbow on either side of the line from shoulder to target. So **inverse kinematics** is not "run the formula backwards": there may be two answers, or no answer at all.

For two links, the cosine rule gives the elbow bend. The shoulder then aims that triangle at the target.

:::check
The target is 30 cm from the shoulder. The links are 11 and 13 cm. How many solutions?
- [ ] Two :: Two solutions need the target inside the ring.
- [ ] One :: A single solution happens only on the edge of the ring.
- [x] None :: 30 cm is beyond 11 + 13 = 24 cm. No angles reach it.
:::

## Geometry is only the first check

A mathematical answer can still break a joint limit or push a link through the table. Pick the configuration that respects the mechanism and stays near the current pose. Switching branches can swing the elbow a long way.

## Watch the answers merge

Put the target well inside the ring and switch elbow configurations. Then slide it out to full stretch. The two answers merge as the links straighten.

Next: a general arm, solved by small corrections instead of a formula.
`}))();export{t as default};