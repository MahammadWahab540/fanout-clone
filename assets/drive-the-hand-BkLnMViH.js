import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Drive the hand, not the joints
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/phone_teleop"
  - "https://github.com/huggingface/lerobot/blob/main/examples/phone_to_so100/teleoperate.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/teleoperators/keyboard/teleop_keyboard.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/model/kinematics.py"
  - "https://huggingface.co/docs/lerobot/hilserl"
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://github.com/huggingface/lerobot/issues/3890"
  - "https://bambot.org/play/so-arm100"
updated: 2026-09-25
---
# Drive the hand, not the joints

## Move the hand in a straight line

"Move forward one centimetre" is a hand command. It does not name a motor.

Press Forward. The hand moves while the shoulder, elbow, and wrist cooperate to keep the tool pointing down. Then try Up.

:::interactive name="CartesianActivity"
Coordinates are centimetres: x forward, y left, z up. Each button asks for a 1 cm change.
:::

## A target goes through a solver

Each button updates the wanted hand position. Inverse kinematics finds the joint angles, and the model checks their limits before accepting the pose.

:::check
Why does pressing Up change more than one joint?
- [ ] A bug in the solver :: It is expected.
- [x] One joint alone moves the hand along an arc :: A straight line up needs several joints turning together.
:::

## When the hand cannot go further

Keep pressing Forward until a request is refused. The hand stays at the last valid position.

A good controller tells you the target failed. It never pretends the hand arrived.

## Keep the tool aimed

Putting the wrist in the right place is not enough to aim a pen. After solving shoulder and elbow, the wrist cancels their combined tilt so the tool stays vertical.

On a real arm, driving from a phone or keyboard needs a matching robot model and an IK setup. The full walkthrough at the end of this lesson covers those.
`}))();export{t as default};