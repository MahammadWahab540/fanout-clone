import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Assemble the leader
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/so101"
  - "https://github.com/TheRobotStudio/SO-ARM100"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/teleoperators/so_leader/so_leader.py"
  - "https://github.com/huggingface/lerobot/issues/930"
updated: 2026-09-23
---
# Assemble the leader

The leader is the SO-101 arm you hold and move by hand; the follower copies it. It is built from the same plastic as the follower with three differences: mixed servo gearing, a handle instead of a gripper, and a trigger you squeeze to close the follower's jaw. By the end you will have a leader that glides under your hand and holds its pose when you let go.

## Why the leader has different servos

Think about what each arm has to do. The follower lifts its own weight and whatever it grabs, so all six of its servos have the strongest gearing, 1/345: the motor spins 345 times for one turn of the output shaft. That makes the joint strong and very hard to turn by hand.

The leader is moved by you, with the power on but the motors switched off, a state called **torque off**. A 1/345 servo would fight your hand at every joint. So the leader uses lighter gearing where it can:

| ID | Joint | Leader gearing | Why |
|---|---|---|---|
| 1 | \`shoulder_pan\` | 1/191 | turns sideways, carries no weight |
| 2 | \`shoulder_lift\` | 1/345 | holds up the whole arm |
| 3 | \`elbow_flex\` | 1/191 | carries the forearm |
| 4 | \`wrist_flex\` | 1/147 | light, moved often |
| 5 | \`wrist_roll\` | 1/147 | light, moved often |
| 6 | \`gripper\` | 1/147 | your finger works the trigger |

The shoulder keeps the strong gearing for one reason: the LeRobot guide says the mix lets the leader "sustain its own weight" while needing little force to move. With a light shoulder the arm would sag onto the table whenever you let go.

You already set these IDs in [Give every motor its name](/robotics/lessons/configure-the-motors), with each ratio on its joint. Before you pick up a screwdriver, check that the servo labelled 2 is the 1/345 one. The ratio is printed on the sticker.

## What is the same as the follower

Joints 1 to 5 go together exactly as in [Assemble the follower](/robotics/lessons/assemble-the-follower): the same printed parts, the same screws, the same order. Two rules carry over.

**Centre each servo before its horn goes on.** Run the same [centre.py](/course-assets/robotics/centre.py) from the follower lesson, with \`SO101Leader\` and \`SO101LeaderConfig\` from \`lerobot.teleoperators.so_leader\` in place of the follower classes; the bus calls are identical. The leader is where people skip this step, because its shafts turn so freely by hand. A leader with a horn mounted near the encoder's wrap gives the same backwards joint and the same crashing calibration as a follower.

**Seat each horn with its screw holes on the diagonals.** A builder who rebuilt a pair to cure a backwards joint in LeRobot [issue #930](https://github.com/huggingface/lerobot/issues/930) reported that this, plus assembling each joint in its middle position, is what made the fix stick.

## What is different: the handle and trigger

The leader's last stage replaces the follower's gripper. The steps below follow the Leader tab of the LeRobot guide's gripper section.

1. **Mount the leader holder** onto the wrist horn with four M3x6 screws. *Now:* a bracket sticks out past the wrist, where the gripper would be on the follower.
2. **Attach the handle** to the leader holder with one M2x6 screw. *Now:* there is a grip you can hold like a pistol.
3. **Insert the gripper motor,** ID 6, with two M2x6 screws on each side, and fit a single horn with its M3x6 horn screw. *Now:* motor 6 sits in the handle, with its horn where your finger will be.
4. **Attach the trigger** with four M3x6 screws. *Now:* squeezing the trigger turns motor 6. The follower will copy that turn and close its jaw.

Chain the cables from motor 6 down to motor 1, then from motor 1 to the leader's own controller board. The leader gets its own board, its own USB cable, and the lower-voltage supply you labelled in [Getting the parts without a printer](/robotics/lessons/choose-your-path).

:::tip title="Watch the leader's handle go on" href="https://huggingface.co/docs/lerobot/so101" label="LeRobot SO-101 guide, Gripper / Handle"
Scroll to "Gripper / Handle" and pick the Leader tab. Play the clip and watch where the trigger meets the horn on motor 6, since that is the one part the follower does not have.
:::

## Feel the difference

With both arms built and powered off, hold each by the wrist and move the elbow. The follower resists. The leader should glide, with a gentle drag from the gears.

Now let go of the leader with its upper arm raised. It should stay roughly where you left it, held up by the 1/345 shoulder servo's gears. If it drops, look at the shoulder servo's sticker: a light servo went into joint 2.

**You swapped two leader servos by mistake: the 1/345 ended up in the elbow and a 1/191 in the shoulder. The IDs are right, so LeRobot connects without complaint. What will you notice?**

The arm sags at the shoulder whenever you let go, and the elbow feels stiff to move. The tempting wrong answer is that LeRobot would refuse to connect. It checks each motor's ID and model, and every one of these servos is an STS3215 with the right ID, so it has nothing to complain about. Gear ratio is a mechanical fact the software cannot see, which is why you check the stickers by hand.

## Go do this now

Build the leader: joints 1 to 5 as on the follower, then the holder, handle, gripper motor, and trigger. Centre every servo first. Then do the two feel tests: move the elbow of each arm by hand and compare the drag, and let go of the leader with its arm raised. You should find a leader that glides and holds its pose. Without the kit, open the guide's leader clip and name the gearing of each joint as it goes in. Next you tell the software where each joint's middle and limits are, in [Calibrate the arm](/robotics/lessons/calibrate-the-arm).
`}))();export{t as default};