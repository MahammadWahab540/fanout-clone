import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Solving it by nudging
type: lesson
sources:
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/model/kinematics.py"
  - "https://huggingface.co/docs/lerobot/phone_teleop"
  - "https://github.com/Rhoban/placo"
  - "https://github.com/TheRobotStudio/SO-ARM100/blob/main/Simulation/SO101/so101_new_calib.urdf"
updated: 2026-09-25
---
# Solving it by nudging

## A little closer each time

The hand sits a little below its target. Which tiny joint changes move it up without overshooting sideways?

The solver below estimates that, takes a small step, and checks what error is left. Move the target and step the solver one update at a time.

:::interactive name="IkNudge"
Watch the tip-to-target distance after each update. Try a point the arm cannot reach, too.
:::

## What this pose tells you

The **Jacobian** says how a small change in each joint moves the hand, near the current pose. The solver uses it to turn a position error into a joint update.

That relation changes as the arm moves, so the solver recomputes it every step. One big jump based on the old pose can land far off.

## Why add damping?

Near a straight or awkward pose, some directions are hard to produce and an undamped step can demand huge angle changes. Damping trades some progress for smaller, steadier updates.

Try low and high damping from the same start and compare how fast the error shrinks.

:::check
What does more damping do?
- [ ] Always reaches the target faster :: Smaller steps can mean slower progress.
- [x] Makes steps smaller and steadier, maybe slower :: Damping keeps updates calm near awkward poses, at the cost of speed.
:::

## When the target is out of reach

This drawing uses three flat links to show the loop. A real controller also enforces joint limits and stops when a target cannot be reached.

:::check
The target is beyond the arm's reach. What do more iterations do?
- [ ] Eventually get there :: No number of steps makes the links longer.
- [x] Stop improving at the closest pose :: The error bottoms out at full stretch. A good controller notices and stops.
:::
`}))();export{t as default};