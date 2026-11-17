import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Assemble the follower
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/so101"
  - "https://github.com/TheRobotStudio/SO-ARM100"
  - "https://github.com/huggingface/lerobot/issues/930"
  - "https://github.com/huggingface/lerobot/issues/1296"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/motors/motors_bus.py"
updated: 2026-09-23
---
# Assemble the follower

The follower is the SO-101 arm that does the work: six servos, five joints, and a gripper, held together by printed plastic and screws. In this lesson you build it joint by joint, from the base up, and you learn the one habit that decides whether calibration works later: centre each servo before its horn goes on.

## Centre the servo before the horn goes on

The round plastic disc screwed onto a servo's shaft is called the **horn**, and the arm's plastic bolts to it. Once the horn is on, the joint and the shaft turn together for good.

Inside the servo, the sensor that measures the angle, called the **encoder**, reads one full turn as a number from 0 to 4095. After 4095 it wraps back to 0, like a clock going from 12 to 1. The middle of the circle is 2048.

A joint on the SO-101 swings through much less than a full turn. If you bolt the horn on while the shaft happens to sit near 4095, the joint's range straddles the wrap. Here is what the encoder reports as the joint sweeps half a turn, starting from two different horn positions:

\`\`\`python title="seam.py"
# One joint swings about 180 degrees (about 2048 counts).
# The servo reads one turn as 0 to 4095, then wraps back to 0.
def sweep(start, counts=2048, step=256):
    return [(start + d) % 4096 for d in range(0, counts + 1, step)]

for start in [1024, 3500]:
    readings = sweep(start)
    print(f"start {start}: {readings}")
    print(f"  min {min(readings)}, max {max(readings)}, span {max(readings) - min(readings)}")
\`\`\`

\`\`\`output
start 1024: [1024, 1280, 1536, 1792, 2048, 2304, 2560, 2816, 3072]
  min 1024, max 3072, span 2048
start 3500: [3500, 3756, 4012, 172, 428, 684, 940, 1196, 1452]
  min 172, max 4012, span 3840
\`\`\`

The same half-turn motion looks like nearly a whole turn in the second case, because the numbers jump from 4012 to 172. Software that believes them drives the joint the wrong way or refuses to calibrate. These two failures, a joint that runs backwards and a calibration that crashes, are the most discussed SO-101 build problems on the LeRobot issue tracker ([#930](https://github.com/huggingface/lerobot/issues/930), [#1296](https://github.com/huggingface/lerobot/issues/1296)).

**Centred means 2048 with the joint halfway through its travel.** Builders who fixed the problem for good in issue #930 did two things: set each servo to its middle before fitting the horn, and seated the horn so its four screw holes point to the diagonals, like the hands of a clock at 1:30, 4:30, 7:30, and 10:30.

## Put each servo at its middle

The simplest way is to ask the servo to go there. With one servo plugged alone into the powered board, this script clears any old offset, turns the motor on, sends it to 2048, and turns it off again. It uses the port and the IDs from [Give every motor its name](/robotics/lessons/configure-the-motors).

\`\`\`python title="centre.py"
import time

from lerobot.robots.so_follower import SO101Follower, SO101FollowerConfig

config = SO101FollowerConfig(port="/dev/ttyACM1", id="my_awesome_follower_arm")
bus = SO101Follower(config).bus

bus.connect()
bus.disable_torque()
bus.reset_calibration()            # clear any old offset so 2048 means the real middle
bus.enable_torque()
bus.sync_write("Goal_Position", 2048, normalize=False)   # middle of 0 to 4095
time.sleep(1.0)
print(bus.sync_read("Present_Position", normalize=False))
bus.disconnect()                   # torque off again
\`\`\`

Download [centre.py](/course-assets/robotics/centre.py) and change the port to yours. It needs a servo and a board, not the arm. It was checked against LeRobot 0.6.1 with the bus mocked, not on hardware, so on a real servo expect each reading within a few counts of 2048. With all six connected, one run centres them all. Then leave the shafts alone until the horns are on.

## Build it joint by joint

The steps below follow the LeRobot SO-101 guide, which has a short video for every joint. First, clean the support plastic off every printed part, and plug one 3-wire cable into each servo while the socket is still in reach. Two screw sizes are used throughout: the small M2x6 screws hold servos into their holders, and the M3x6 screws hold horns and plastic to horns.

1. **Joint 1, base rotation.** Fit both horns on motor 1. The top horn gets one M3x6 screw through its centre; the bottom horn gets none. Fix the motor into the base with four M2x6 screws, two from the top and two from the bottom. Slide the first motor holder over it and fix it with two M2x6 screws. Attach the shoulder part with four M3x6 screws on top and four on the bottom, then add the shoulder motor holder. *Now:* the base sits flat and the shoulder piece turns smoothly left and right on motor 1.
2. **Joint 2, shoulder.** Fit both horns on motor 2 the same way. Slide motor 2 in from the top and fix it with four M2x6 screws. Attach the upper arm with four M3x6 screws on each side. *Now:* the upper arm tilts forward and back from the shoulder.
3. **Joint 3, elbow.** Fit both horns on motor 3, fix the motor with four M2x6 screws, and connect the forearm with four M3x6 screws on each side. *Now:* you have a shoulder and an elbow, and the forearm folds against the upper arm.
4. **Joint 4, wrist up and down.** Fit both horns on motor 4. Slide on motor holder 4, slide in motor 4, and fix it with four M2x6 screws. *Now:* the end of the forearm holds a servo whose horn faces sideways.
5. **Joint 5, wrist twist.** Put motor 5 into the wrist holder with two M2x6 screws at the front. This motor gets only one horn, with its M3x6 screw. Fix the wrist to motor 4 with four M3x6 screws on both sides. *Now:* the wrist nods on motor 4, and motor 5's single horn points straight out along the arm.
6. **Gripper.** Attach the gripper body to the horn on motor 5 with four M3x6 screws. Insert the gripper motor with two M2x6 screws on each side, fit both of its horns, and screw the moving jaw on with four M3x6 screws on both sides. *Now:* the jaw opens and closes, and the whole gripper twists on motor 5.

Finally, chain the cables: motor 6 to 5, 5 to 4, and on down to motor 1, and motor 1 to the controller board, which screws onto its mounting plate on the base.

:::tip title="Watch each joint go together" href="https://huggingface.co/docs/lerobot/so101" label="LeRobot SO-101 assembly guide"
Scroll to "Joint 1" and play the clip before you pick up a screwdriver. Pause when the horn goes on and note which way its screw holes point, then do the same on your servo.
:::

**You centred all six servos, then dropped the gripper servo on the floor while fitting joint 5. Its shaft turned a little. What do you do before fitting its horns?**

Run \`centre.py\` again with that servo plugged in. The wrong answer is that calibration will fix it later. Calibration only records where the middle and the limits are; it cannot move a horn bolted on near the wrap. You cannot see how far a dropped shaft turned, and rerunning the script costs ten seconds.

## Go do this now

Build the follower from motor 1 to the gripper, centring each servo first. When you finish, clamp the base to the table edge and move each joint gently by hand with the power off. Every joint should swing through its range without the plastic catching, and the jaw should open and close. Without the kit, move one joint at a time from base to gripper in the [Meet the arm](/robotics/lessons/meet-the-arm) playground. Next comes the arm you move by hand, in [Assemble the leader](/robotics/lessons/assemble-the-leader).
`}))();export{t as default};