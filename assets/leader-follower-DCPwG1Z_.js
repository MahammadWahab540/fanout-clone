import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: The arm copies your arm
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://huggingface.co/docs/lerobot/so101"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/scripts/lerobot_teleoperate.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/teleoperators/so_leader/so_leader.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/so_follower/so_follower.py"
updated: 2026-09-23
---
# The arm copies your arm

Move the leader by hand and the follower copies it, joint for joint, a split second later. In this lesson you run that for the first time with one LeRobot command, see the few lines of Python underneath it, and learn why driving a robot yourself, called **teleoperation**, is also how you will teach it to work alone.

## Six numbers, copied

The leader and the follower of the SO-101 are built from the same parts in the same shape. That is the whole trick. When the leader's elbow is at 30 degrees, you want the follower's elbow at 30 degrees too. No geometry is needed to work out where the gripper is or how to reach it.

So the job is plain copying. Many times a second, the computer:

1. **reads** the six joint angles of the leader, whose motors are off so your hand can move it,
2. **sends** those six numbers to the follower as its goal,
3. and repeats.

Calibration is what makes the copy correct. Both arms were calibrated so that the same pose gives the same numbers, which is why [Calibrate the arm](/robotics/lessons/calibrate-the-arm) asked for the same middle pose on each.

This is the copycat servo from the One servo module, times six, with two arms instead of a recording. The interactive below records a dial and plays it back; the leader and follower do the same thing live, with no recording in between.

:::interactive name="CopycatRecorder"
Press Record, drag the leader dial for a few seconds, then press Replay and watch the follower dial copy you. Switch the sample rate from 30 Hz to 5 Hz and replay again: the copy turns jerky.
:::

At 30 samples a second the copy looks smooth. At 5 it steps, because the follower only learns a new goal five times a second. [The control loop](/robotics/lessons/the-control-loop) is about exactly that gap.

## Run it

This needs both arms, calibrated, each on its own supply and USB cable. What will move: the follower, and only as far as you move the leader. Before you run it, put the two arms in roughly the same pose, both folded at rest. When the command starts, the follower jumps to match the leader's current pose, and a big difference means a fast first move.

The command is from the LeRobot guide, with your ports and the \`id\`s you calibrated with:

\`\`\`bash title="terminal"
lerobot-teleoperate \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM1 \\
    --robot.id=my_awesome_follower_arm \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM0 \\
    --teleop.id=my_awesome_leader_arm
\`\`\`

Once it connects, the terminal shows a line that keeps updating with how long each pass of the loop takes and how many passes run per second. Hold the leader by the handle and move the elbow slowly. The follower's elbow moves with it. Squeeze the trigger and the follower's jaw closes. Press Ctrl+C to stop; the follower's motors switch off and it goes limp, so have it resting low first.

:::note
If the follower lurches the moment the command starts, stop with Ctrl+C and match the two poses by hand before you try again. If one joint moves the wrong way, that is the backwards-joint problem in [When the build goes wrong](/robotics/lessons/first-motion).
:::

## The loop underneath

The command is a wrapper around a loop you can write yourself. This is the API version the LeRobot guide gives, trimmed to its core:

\`\`\`python title="teleop.py"
from lerobot.teleoperators.so_leader import SO101Leader, SO101LeaderConfig
from lerobot.robots.so_follower import SO101Follower, SO101FollowerConfig

robot = SO101Follower(SO101FollowerConfig(port="/dev/ttyACM1", id="my_awesome_follower_arm"))
leader = SO101Leader(SO101LeaderConfig(port="/dev/ttyACM0", id="my_awesome_leader_arm"))
robot.connect()
leader.connect()

while True:
    action = leader.get_action()     # six angles read from the leader
    robot.send_action(action)        # the same six numbers, sent as the follower's goal
\`\`\`

Print \`action\` once inside the loop and you see a dictionary with six keys, \`shoulder_pan.pos\` through \`gripper.pos\`: degrees for the five joints and 0 to 100 for the gripper. Those six numbers are the only thing that passes between the arms.

The guide's loop runs as fast as the bus allows. The \`lerobot-teleoperate\` command also paces itself: by default it caps the loop at 60 passes a second, and you can set a lower cap with \`--fps=30\`.

## Why this is also how you teach

Every pass of that loop produces a pair: what the follower was doing, and what you told it to do next. Save those pairs thirty times a second, along with a camera picture, and you have a **demonstration**. A few dozen demonstrations of the same task are what a robot learns from later in this course.

That is why the leader beats a keyboard or a game controller for teaching. You move the way you naturally would, the follower moves the same way, and the recording captures motion a person would make.

:::tip title="See a demonstration someone recorded this way" href="https://lerobot-visualize-dataset.hf.space/hbseong/record-pick-and-place-so101/episode_0" label="LeRobot dataset visualizer: an SO-101 pick and place"
Open episode 0 of this public SO-101 dataset, press play, and watch the joint plots under the video. Each joint has two lines, the arm's state and the action sent to it; notice that the two lines almost overlap, because the follower copied the leader.
:::

**A friend's leader arm has five joints and a gripper like yours, but their follower is a different, larger arm with the same six joints. Would the loop above work between them?**

Only roughly, and only after care. Copying angles works because the two arms have the same shape: equal angles put the grippers in the same relative place. A larger follower with the same joints would copy the pose, but its gripper would land farther away, and its joint limits and directions may differ. The misconception is that the follower copies where your hand is. It copies joint angles, nothing else, which is why the leader is built as a twin of the follower.

## Go do this now

Run \`lerobot-teleoperate\` with both arms, move the leader slowly, and watch the follower copy every joint. Then squeeze the trigger and watch the jaw close. Try one fast wave of the leader's wrist and look for the small delay before the follower catches up. Without the arms, use the CopycatRecorder at 30 Hz, then at 5 Hz, and compare the two replays.
`}))();export{t as default};