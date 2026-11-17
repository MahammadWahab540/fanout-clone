import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Calibrate the arm
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/so101"
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/so_follower/so_follower.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/motors/motors_bus.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/robot.py"
  - "https://github.com/huggingface/lerobot/pull/3373"
  - "https://github.com/huggingface/lerobot/issues/1883"
updated: 2026-09-23
---
# Calibrate the arm

Your servos know how far they have turned, but not where the arm's elbow is straight or how far it can bend before plastic hits plastic. Calibration tells the software both things for every joint of the SO-101, an open-source robot arm, and saves them in a small file. By the end you will have calibrated the follower and the leader, and you will know which name ties an arm to its file.

## What calibration writes down

Each servo's sensor reads a number from 0 to 4095 for one turn. That number means nothing about the arm by itself. Reading 2600 on the elbow could be straight or folded, depending on how the horn was fitted.

**Calibration** records three facts per joint:

- **The middle.** You hold the arm with every joint halfway through its travel, and LeRobot stores an offset so that pose reads the middle of the servo's circle, about 2048.
- **The limits.** You move each joint from one end of its travel to the other, and LeRobot stores the lowest and highest readings it saw.
- **The motor's ID,** so the file matches the right servo.

From these, LeRobot turns raw counts into numbers you can reason about: degrees away from the middle for the five arm joints, and 0 to 100 for the gripper, where 0 is closed. This is also why a trained policy can move a different person's arm. Both arms, once calibrated, agree on what "elbow at 30 degrees" means.

## Why the horn position matters here

Calibration is where a horn fitted in the wrong place finally shows up. If a joint's travel crosses the point where the reading wraps from 4095 back to 0, the limits LeRobot records are nonsense: the lowest and highest readings sit at opposite edges of the circle, and the joint looks as if it swings almost a full turn.

:::interactive name="CalibrationWrap"
Slide the horn offset until the joint's range crosses the 4095 to 0 seam, and watch the readings jump. Then press "Centre the servo first" and see the range sit safely around 2048.
:::

Older LeRobot versions could also crash at the first Enter with \`Magnitude 2114 exceeds 2047\`, and [When the build goes wrong](/robotics/lessons/first-motion) covers that error. The fix for both is the same: centre the servo and refit the horn.

## Calibrate the follower

Clamp the follower to the table, plug in its board and its supply, and run the command from the LeRobot guide with your port and a name of your choosing. The name is the \`id\`.

\`\`\`bash title="terminal"
lerobot-calibrate \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM1 \\
    --robot.id=my_awesome_follower_arm
\`\`\`

This moves nothing; the motors are switched off for the whole run. In LeRobot 0.6.1 it goes like this:

1. **It asks you to put the arm in the middle** of its range of motion. The pose LeRobot means: upper arm pointing straight up, forearm straight out forward, gripper level and facing forward. Newer versions print a small drawing of it. Hold the arm like that and press Enter. Each joint now reads the middle of the circle, 2047 or 2048, in that pose.
2. **It asks you to move every joint except \`wrist_roll\` through its full range,** and shows a live table with a MIN, POS, and MAX column for each joint. Move one joint at a time slowly from end to end, and watch its MIN fall and its MAX rise. \`wrist_roll\` can spin all the way round, so LeRobot gives it the full 0 to 4095 and skips it.
3. **Press Enter when every joint has been to both ends.** It prints the path of the saved file.

The guide's calibration video shows both moves; watch it once before you start.

:::tip title="Watch a calibration before you run one" href="https://huggingface.co/docs/lerobot/so101#calibration-video" label="LeRobot SO-101 calibration video"
Play the calibration clip and pause at the middle pose. Compare the angle of the upper arm and forearm with your own arm before you press Enter.
:::

Then do the leader. Same motions, with \`teleop\` in place of \`robot\`:

\`\`\`bash title="terminal"
lerobot-calibrate \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM0 \\
    --teleop.id=my_awesome_leader_arm
\`\`\`

## The id is the key to the file

LeRobot saves each calibration as a JSON file named after the \`id\`, for example \`my_awesome_follower_arm.json\`. By default it lives under \`~/.cache/huggingface/lerobot/calibration/\`, in a \`robots\` folder for the follower and a \`teleoperators\` folder for the leader. Each joint's entry holds its \`id\`, \`homing_offset\`, \`range_min\`, \`range_max\`, and \`drive_mode\`.

Every later command finds the file by that name. The LeRobot guide says it plainly: use the same \`id\` when teleoperating, recording, and running a policy. A typo in the \`id\` does not raise an error. LeRobot finds no file under the new name, treats the arm as uncalibrated, and starts a fresh calibration.

**You calibrated the follower as \`my_awesome_follower_arm\`. A week later you run teleoperation with \`--robot.id=follower\` and LeRobot starts asking you to move the arm to the middle. Is your calibration lost?**

No. The file \`my_awesome_follower_arm.json\` is still on disk; LeRobot looked for \`follower.json\` instead. Press Ctrl+C and rerun with the original \`id\`. The wrong belief is that calibration lives inside the arm. The offset and limits are written to the servos, but the file is what LeRobot checks at startup, and it finds that file only by name. The same thing happens if you move to a new computer, so copy the calibration folder along with your code ([issue #1883](https://github.com/huggingface/lerobot/issues/1883) is a builder asking exactly this).

## Go do this now

Calibrate the follower, then the leader, each with the \`id\` you will keep for the rest of the course. Write both names on the tape labels. At the end you will see two lines ending in \`.json\`, one per arm. Open the follower's file and find the \`range_min\` and \`range_max\` of \`elbow_flex\`: the gap between them should be well under 4095. Without the arm, set CalibrationWrap's offset so the range crosses the seam, then fix it with one press. Next you make the arm move for the first time, in [First motion](/robotics/lessons/first-motion).
`}))();export{t as default};