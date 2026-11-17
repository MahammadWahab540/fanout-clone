import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: "Project: sort by colour without AI"
type: lesson
sources:
  - "https://github.com/opencv/opencv/blob/4.x/doc/py_tutorials/py_imgproc/py_colorspaces/py_colorspaces.markdown"
  - "https://github.com/opencv/opencv/blob/4.x/doc/py_tutorials/py_imgproc/py_contours/py_contour_features/py_contour_features.markdown"
  - "https://huggingface.co/docs/lerobot/cameras"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/model/kinematics.py"
  - "https://github.com/TheRobotStudio/SO-ARM100/tree/main/Simulation/SO101"
  - "https://colorizer.org"
updated: 2026-09-25
---
# Project: sort by colour without AI

## A rule can be enough

Not every task needs a learned policy. If the object has a distinct colour and the camera never moves, a simple rule may do.

Find the block. Turn on the mask, adjust the threshold, and watch the pick point move when background pixels slip through.

:::interactive name="ColourPick"
Passing pixels decide the centre point. A wrong mask gives a wrong target even if the arm's geometry is perfect.
:::

## Pixels are not centimetres

The detector gives an image location. The arm needs a table location. Turning one into the other takes a calibrated mapping between camera and table.

The demo uses a known, simple scale. A real camera sees in perspective, so it needs a proper geometric calibration.

:::check
Some background pixels pass the mask. What happens to the pick point?
- [x] It shifts toward the background pixels :: The centre point averages every passing pixel, including the wrong ones.
- [ ] Nothing, the arm corrects it :: The arm goes where it is told. A wrong target stays wrong.
:::

## Find the broken step

Check the mask first, then the pixel-to-table mapping, then the arm's reach. If the crosshair is wrong in the image, tuning the motors will not fix it.

Once the target is right, reuse the pick order: approach, lower, close, lift, carry, release.

Next: save observations and actions so a model can learn a rule from examples.
`}))();export{t as default};