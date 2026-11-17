import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: First motion
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/so101"
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/so_follower/so_follower.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/so_follower/config_so_follower.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/utils.py"
  - "https://github.com/huggingface/lerobot/issues/1296"
  - "https://github.com/huggingface/lerobot/issues/3193"
  - "https://github.com/huggingface/lerobot/pull/3373"
  - "https://github.com/huggingface/lerobot/issues/930"
  - "https://github.com/huggingface/lerobot/issues/1130"
  - "https://github.com/huggingface/lerobot/issues/2819"
  - "https://github.com/huggingface/lerobot/issues/1319"
  - "https://github.com/huggingface/lerobot/issues/1245"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/motors/feetech/feetech.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/motors/motors_bus.py"
  - "https://github.com/TheRobotStudio/SO-ARM100"
updated: 2026-09-23
---
# First motion

This is the lesson where the SO-101, an open-source robot arm, moves under its own power for the first time. You will move one joint five degrees and back with ten lines of Python, then make the wrist wave. The order matters more than the code: small, one joint, a safety limit on, and your hand near the power switch.

## Try it in the browser first

Before the real arm moves, decide what you expect to see. Each joint name in LeRobot is a real hinge, and a small number on one joint can mean a large motion at the gripper.

:::interactive name="ArmPlayground"
Move \`shoulder_pan\` five degrees and watch the whole arm swing. Then move \`wrist_flex\` five degrees and compare how far the gripper travels. Then press the wave pose: the base and wrist swing together. Your real arm will do a smaller wave, with the wrist alone.
:::

Five degrees at the base swings the gripper a few centimetres sideways, because the whole arm turns with it. Five degrees at the wrist barely moves it. That is why the first real move below is five degrees and no more.

:::tip title="Drive a 3D arm with your keyboard" href="https://bambot.org/play/so-arm100" label="Bambot: play with the SO-ARM100"
Open the page, then press 1 and Q a few times each and watch the base rotate one way and back. Try 2 and W for the shoulder. The model is the SO-100, but the joints are the same, and it needs no sign-up.
:::

## The safe order for every first move

Every first move on a new arm, a new computer, or a new script follows the same order.

1. **Clamp the base to the table.** An unclamped arm tips over the moment the shoulder lifts.
2. **Clear the reach.** Nothing within the arm's reach but the table: no mug, no laptop, no cable it can snag.
3. **Start from a pose you know.** Put the arm in the calibration pose or folded at rest before you run anything.
4. **Know how to stop it.** Keep one hand near the follower's power plug. Pulling it stops every motor at once.
5. **Put a speed limit in the code.** The script below tells LeRobot that no joint may move more than 10 degrees in one command. [Keep it safe](/robotics/lessons/keep-it-safe) explains that setting in full.

One more fact before you run anything: when the script connects, the motors switch on and hold the arm where it is. When it disconnects, they switch off, and the arm goes limp. A raised arm then falls to the table. End every script with the arm resting low, or with a hand under it.

## Move one joint five degrees

This needs the calibrated follower, clamped, on its own supply. The leader stays unplugged. What will move: \`shoulder_pan\`, the base rotation, five degrees to one side and back, over two seconds.

\`\`\`python title="first_motion.py"
import math
import time

from lerobot.robots.so_follower import SO101Follower, SO101FollowerConfig

config = SO101FollowerConfig(
    port="/dev/ttyACM1",           # the port lerobot-find-port gave you
    id="my_awesome_follower_arm",  # the same id you calibrated with
    max_relative_target=10.0,      # no joint moves more than 10 degrees per command
)
robot = SO101Follower(config)
robot.connect()

obs = robot.get_observation()
action = {name: value for name, value in obs.items() if name.endswith(".pos")}
start = action["shoulder_pan.pos"]
print("shoulder_pan before:", round(start, 1))

action["shoulder_pan.pos"] = start + 5   # five degrees, one joint
robot.send_action(action)
time.sleep(1.0)
print("shoulder_pan after: ", round(robot.get_observation()["shoulder_pan.pos"], 1))

action["shoulder_pan.pos"] = start       # and back
robot.send_action(action)
time.sleep(1.0)
\`\`\`

Read it top to bottom. \`get_observation()\` returns the current angle of every joint, as a dictionary with keys like \`shoulder_pan.pos\`, in degrees from the calibrated middle. You copy those six numbers, change one, and hand all six back with \`send_action()\`. The five joints you did not change are told to stay where they are, so only the base turns.

Every class and method here is LeRobot 0.6.1's own; the script ran against a mocked motor bus, so the numbers below come from that run, not from a real arm:

\`\`\`output
shoulder_pan before: 0.0
shoulder_pan after:  5.0
\`\`\`

On a real arm, your "before" is wherever the base was when you started, and "after" should read close to before plus 5. The arm turns a small step left or right, pauses, and turns back.

:::note
If \`connect()\` asks you to move the arm to the middle and press Enter, stop with Ctrl+C. LeRobot did not find a calibration file for that \`id\`. Rerun with the exact \`id\` you used in [Calibrate the arm](/robotics/lessons/calibrate-the-arm).
:::

**The script ran, but the base turned the opposite way to what the playground showed for plus five degrees. Is the arm broken?**

Probably not. Which way counts as "plus" depends on which way each servo faces in the plastic, so the playground's direction is a guide, not a promise. The misconception is that a sign mismatch means a wiring fault. What matters is that the joint moved five degrees and came back to the same number. A joint that jumps far, grinds, or moves the opposite way to the leader during teleoperation is a different problem, covered in [When the build goes wrong](/robotics/lessons/first-motion).

## Make it wave

Add these lines to the end of the same script. What will move: \`wrist_flex\`, the wrist up and down, 15 degrees each way, three times over three seconds, then back to where it started.

\`\`\`python title="first_motion.py (continued)"
wrist = action["wrist_flex.pos"]
for tick in range(90):                   # 3 seconds at 30 commands a second
    action["wrist_flex.pos"] = wrist + 15 * math.sin(2 * math.pi * tick / 30)
    robot.send_action(action)
    time.sleep(1 / 30)
action["wrist_flex.pos"] = wrist
robot.send_action(action)
\`\`\`

Each pass of the loop asks for a slightly different wrist angle. Thirty small commands a second add up to a smooth wave. That rhythm, read then send many times a second, is the heart of the next module, [The control loop](/robotics/lessons/the-control-loop).

Before you disconnect, send the arm back to a low, resting pose in small steps, or keep a hand under the forearm. Then call \`robot.disconnect()\`, and the arm goes limp.

## Go do this now

Clamp the follower, run \`first_motion.py\`, and watch the base turn five degrees and back. Then add the wave and watch the wrist nod three times. Film the wave; it is the milestone for this module. With one servo, run the same idea on a single joint: read its position, add a few degrees, send it, and send it back. Without hardware, set ArmPlayground to rest, move \`shoulder_pan\` by 5, then press "wave".

## When the build goes wrong

Almost every SO-101 builder meets the same six problems, and each one has a known fix. This page is the one to keep open while you build: find the symptom you see, read the cause in one paragraph, and do the fix. Each entry links the LeRobot GitHub thread where other builders hit it first.

### First, read the error

Most of these problems announce themselves in the terminal. Read the last line of the error, the one starting with a name like \`ValueError\` or \`ConnectionError\`. That line names the problem; the lines above only say where in the code it happened.

| What you see | Jump to |
|---|---|
| \`Magnitude ... exceeds 2047\` during calibration | Calibration overflow |
| One follower joint moves the opposite way to the leader | A joint runs backwards |
| A servo blinks red, or a joint goes stiff and hot | A servo blinks red |
| \`Missing motor IDs\` or the setup script finds the wrong motor | Connection errors: two motors, one name |
| \`Could not connect on port\`, or Enter does nothing | Connection errors: the computer cannot reach the arm |
| LeRobot asks you to calibrate an arm you already calibrated | Covered in [Calibrate the arm](/robotics/lessons/calibrate-the-arm): the \`id\` changed |

### Calibration overflow

**What you see.** \`lerobot-calibrate\` stops right after the first Enter with:

\`\`\`text
ValueError: Magnitude 2114 exceeds 2047 (max for sign_bit_index=11)
\`\`\`

The number before \`exceeds\` varies. This exact line is from [issue #1296](https://github.com/huggingface/lerobot/issues/1296), the most discussed calibration thread for these arms. [Issue #3193](https://github.com/huggingface/lerobot/issues/3193) reports the same crash on \`wrist_roll\` in LeRobot 0.5.1.

**Why.** At the first Enter, LeRobot stores an offset in each servo: how far its reading is from the middle, 2047. A servo can hold an offset up to 2047, and a reading between 0 and 4095 always fits. The crash means a servo reported a number outside that circle. An STS3215 can be set to keep counting past a full turn instead of wrapping, so a joint rolled past the seam read 4161 instead of wrapping round to 66. That joint is usually one whose horn went on far from centre, or a \`wrist_roll\` twisted round.

:::interactive name="CalibrationWrap"
Move the horn offset until the joint's range crosses the 4095 to 0 seam and the warning appears. Then press "Centre the servo first" and watch the range settle around 2048.
:::

**The fix.** Try the cheap things first, in this order:

1. **Check the pose.** Every joint must be halfway through its travel when you press Enter, including \`wrist_roll\`, which should face straight ahead.
2. **Power-cycle the board.** Several builders in #1296 cleared the error by unplugging the supply and plugging it back in.
3. **Update LeRobot.** [Pull request #3373](https://github.com/huggingface/lerobot/pull/3373), merged 2026-04-13, switches every STS3215 to single-turn counting each time LeRobot connects, and lists #1296 and #3193 as fixed. Version 0.6.1 includes it.
4. **Refit the horn.** If one joint still overflows, take that joint apart, centre its servo with [centre.py](/course-assets/robotics/centre.py) from [Assemble the follower](/robotics/lessons/assemble-the-follower), and refit the horn.

### A joint runs backwards

**What you see.** During teleoperation, one follower joint, often \`shoulder_lift\`, moves the opposite way to the leader. It drives into its limit and stalls, sometimes blinking red. This is [issue #930](https://github.com/huggingface/lerobot/issues/930); [#1130](https://github.com/huggingface/lerobot/issues/1130) reports a reversed joint after calibration too.

**Why.** The joint's travel crosses the encoder's wrap on one arm but not the other, so the two arms disagree about which way the numbers grow. Recalibrating does not help, because the horn is still in the same place.

**The fix.** Builders who cured it for good in #930 reassembled that joint on both arms: servo centred first, horn seated with its screw holes on the diagonals, joint assembled in its middle position. Then recalibrate both arms.

### A servo blinks red

**What you see.** A servo's red LED blinks, the joint stops or goes stiff, and the case feels hot. On these servos, a blinking red LED means **overload** or **stall**, the motor pushing hard against something that will not move.

**Why.** Something is blocking the joint: the table, the arm's own plastic, a too-tight screw, or an object in the gripper. In [issue #2819](https://github.com/huggingface/lerobot/issues/2819) a follower's gripper servo went permanently stiff, and a LeRobot maintainer explained that a servo overloaded for too long can break. One cause they named: squeezing the leader's trigger fully closed while the follower's gripper holds something.

**The fix.** Cut the power first. Then find what the joint was pushing against and move it clear by hand. Let the servo cool before you power up again. To check a servo's temperature, load, and errors directly, the SO-ARM100 repository points to Feetech's own software on Windows and FT_SCServo_Debug_Qt on Ubuntu ([issue #1319](https://github.com/huggingface/lerobot/issues/1319) asks exactly this).

:::tip title="Read one servo's health on Linux" href="https://github.com/Kotakku/FT_SCServo_Debug_Qt" label="FT_SCServo_Debug_Qt on GitHub"
Install the free .deb from its README on Ubuntu, pick the board's port at 1000000 baud, and press Search. Click one servo in the list and read its Servo Feedback panel: voltage, temperature, torque, and position. A servo reading hot while the arm is at rest is the one to look at first.
:::

### Connection errors

#### Two motors, one name

**What you see.** Connecting fails with \`Missing motor IDs\`, or \`lerobot-setup-motors\` reports a motor with a model number it did not expect.

**Why.** Two servos on the bus share an ID, usually a fresh replacement still at the factory ID 1, or the setup script ran while more than one motor was plugged in.

**The fix.** Unplug the chain, connect the suspect servo alone, and set its ID again, as in [Give every motor its name](/robotics/lessons/configure-the-motors).

#### The computer cannot reach the arm

**What you see.** \`Could not connect on port '/dev/ttyACM0'. Make sure you are using the correct port.\`

**The fix, by system.** On every system, run \`lerobot-find-port\` again: ports can change when you replug. On **Linux**, your user needs permission to open the port; the LeRobot guide uses \`sudo chmod 666 /dev/ttyACM0\`, and adding yourself to the \`dialout\` group makes it permanent. On **Windows**, the port is a name like \`COM3\`, and it can change when you use a different USB socket. In old LeRobot versions, pressing Enter during calibration did nothing on Windows ([issue #1245](https://github.com/huggingface/lerobot/issues/1245)); a newer LeRobot fixes that.

**You press Enter at the middle pose and get \`Magnitude 2073 exceeds 2047\`. You recalibrate twice more, holding the pose more carefully, and get the same number each time. What now?**

Stop recalibrating and work down the fix list: power-cycle the board, check that your LeRobot has the #3373 fix, then refit that joint's horn. The misconception is that calibration can fix any starting position. A number that repeats exactly means the joint rests in the same wrong spot every time, and no amount of care holding the pose moves it. The first fixes are free and take a minute; if they do not clear it, the horn is the cause.

### Go do this now

Bookmark this page and keep it open while you build. If you have the arm, run \`lerobot-calibrate\` on the follower and confirm it finishes with a line naming a \`.json\` file. If it stops, match the last line of the error to the table above. Without the arm, use CalibrationWrap to make the overflow happen on purpose, then fix it.
`}))();export{t as default};