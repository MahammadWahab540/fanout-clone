import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: "Project: puppet a pick"
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://huggingface.co/docs/lerobot/so101"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/scripts/lerobot_teleoperate.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/so_follower/so_follower.py"
  - "https://github.com/huggingface/lerobot/issues/2819"
  - "https://huggingface.co/datasets/hbseong/record-pick-and-place-so101"
updated: 2026-09-23
---
# Project: puppet a pick

Pick up a small cube with the follower and drop it into a cup, by moving the leader with your hand. It looks simple on video and takes real practice. By the end of this project you will have done it five times in a row, filmed it, and rehearsed the exact motion you will later record as a demonstration for the robot to learn alone.

## The task and how you know you did it

Set up the table like this:

- **The cube:** anything about 2 to 3 cm across and light. A wooden block, a foam cube, or a folded paper box all work. Avoid anything slippery or heavier than a phone charger.
- **The cup:** a wide paper cup or bowl, at least twice the cube's width across the top.
- **The layout:** the follower clamped at the table edge. The cube about 15 cm in front of the base. The cup about 15 cm to one side of the cube. Mark both spots with tape so you can put them back the same way.

**Success means five picks in a row, each finishing in under 20 seconds, with no hand touching the follower or the cube.** The cube has to end up inside the cup, not balanced on the rim. If a pick fails, the count starts again at zero.

Five in a row sounds strict on purpose. One lucky pick proves little. Five in a row means your hand has found a motion it can repeat, and a repeatable motion is exactly what makes a good demonstration later in the course.

## Before you start

Run through the safe order from [First motion](/robotics/lessons/first-motion): base clamped, reach cleared, both arms folded at rest in about the same pose, one hand near the follower's power plug. Then start teleoperation with the step limit from [Keep it safe](/robotics/lessons/keep-it-safe) set to 10 degrees, which caps sudden jumps without slowing normal moves much:

\`\`\`bash title="terminal"
lerobot-teleoperate \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM1 \\
    --robot.id=my_awesome_follower_arm \\
    --robot.max_relative_target=10 \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM0 \\
    --teleop.id=my_awesome_leader_arm \\
    --fps=30
\`\`\`

The \`--fps=30\` matches the rate LeRobot records demonstrations at, so what you practise now is what you will record later.

:::note
Never squeeze the leader's trigger fully closed while the follower holds the cube. The follower's gripper motor keeps pushing against the cube and overloads. In LeRobot [issue #2819](https://github.com/huggingface/lerobot/issues/2819) a maintainer names this exact habit as a way to break the gripper servo. Close until the jaw grips, then hold the trigger there.
:::

## A pick in four moves

Watch the follower, not the leader. Your eyes should be where the work happens.

1. **Reach above the cube.** Swing the base toward the cube, then lower the shoulder and extend the elbow until the open jaw is a few centimetres above it. Tilt the wrist so the jaw points straight down.
2. **Descend and close.** Lower slowly until the jaw is around the cube, then squeeze the trigger until the jaw grips. Pause for half a second so the grip settles.
3. **Lift and carry.** Raise the shoulder first, so the cube clears the table, then swing the base toward the cup. Keep the wrist steady; a tilting wrist is how cubes slip out.
4. **Drop and return.** Hold the cube over the middle of the cup, open the trigger, and bring the arm back to rest.

Your first few picks will be slow and wobbly. Most people knock the cube over, open the jaw a moment early, or miss the cup by a centimetre. That is normal, and each miss teaches your hand something.

**On your third try the jaw closes on the cube, but the cube slides out as soon as the arm starts to lift. Your teammate says to squeeze the trigger harder. What do you try instead?**

Grip lower and lift more slowly. A cube held only at its top edge pivots out of the jaw when the arm accelerates. The wrong belief is that more squeeze fixes a slipping grip. Past the point where the jaw touches, squeezing harder mostly loads the gripper motor, which is the overload the note above warns about. Grip the cube around its middle, pause, then lift. If it still slips, the cube's surface may be too smooth: a strip of masking tape on two sides gives the jaw something to hold.

## Film it

The film is your record of the milestone, and it doubles as practice for the camera setup you will build in a later module.

- **Frame the whole task.** Put the phone at the side, about a metre away, level with the table, so the base, the cube, and the cup are all in shot.
- **Show both arms.** If you can, include the leader and your hand at the edge of the frame. A viewer should see that your hand drives the follower.
- **Steady light, no window behind the arm.** A window in the background turns the arm into a dark silhouette. A desk lamp from the front works better than a better camera.
- **One take, all five picks.** Start recording, do five in a row, stop. If one fails, keep filming and start the count again; the film should show the real run.

:::tip title="Compare your run with someone else's recorded picks" href="https://lerobot-visualize-dataset.hf.space/hbseong/record-pick-and-place-so101/episode_0" label="LeRobot dataset visualizer: an SO-101 pick and place"
This public dataset holds 188 SO-101 pick-and-place episodes recorded at 30 frames a second. Play episode 0 and time the pick against your own; then open two or three more episodes from the list and notice how similar the joint curves look from one try to the next.
:::

With one servo, do the same drill on one joint: twist it by hand to a mark, hold it, and bring it back, five times in a row. Without hardware, practise the sequence in the [Meet the arm](/robotics/lessons/meet-the-arm) playground: base toward a point, shoulder down, elbow out, wrist down, then the same in reverse.

## Go do this now

Set up the cube, the cup, and the tape marks, start teleoperation, and practise until you get five clean picks in a row, each under 20 seconds, then do it once more on camera. You will end up with a short video of the follower picking the cube and dropping it in the cup while your hand works the leader. Keep the tape marks on the table. When you record demonstrations in the Teach by showing module, this same layout and this same motion are what the robot will learn from.
`}))();export{t as default};