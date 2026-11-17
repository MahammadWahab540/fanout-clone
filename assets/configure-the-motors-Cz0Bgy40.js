import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Give every motor its name
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/so101"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/so_follower/so_follower.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/motors/motors_bus.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/motors/feetech/feetech.py"
updated: 2026-09-23
---
# Give every motor its name

Every servo in a new kit answers to the same name, ID 1, so six of them on one wire would all answer at once. In this lesson you give each motor its own ID, one motor at a time, with one LeRobot command. It takes about ten minutes per arm and prevents the most confusing bugs in the whole build.

## Why one wire needs six names

The six servos in an arm share one 3-wire cable, chained from motor to motor like beads on a string. That shared wire is called a **bus**. The computer talks to all six over it through the small controller board, and every message starts with the number of the motor it is for. That number is the motor's **ID**.

A servo only answers messages addressed to its own ID. If two servos both have ID 1, both answer at the same instant, their replies collide on the wire, and the computer reads garbage. Brand-new STS3215 servos usually ship as ID 1, so a new kit is twelve motors all named 1.

The bus also has a speed, the **baud rate**: how many bits per second travel on the wire. The board and every motor must use the same one. LeRobot uses 1,000,000 for these servos.

:::interactive name="BusPacket"
Build a read command for motor 1, then switch on "two motors share ID 1" and watch the two replies land on top of each other.
:::

The fix is to connect **one motor at a time** and write its new ID into it. The ID is saved in the servo's permanent memory, so you do this once, before anything is chained.

## Find the port for each arm

Plug the follower's controller board into USB and into its power supply. Then ask LeRobot which port it appeared on. The script lists your ports, asks you to unplug the board's USB cable, and names the port that disappeared. The output below is the Linux example from the LeRobot SO-101 guide:

\`\`\`bash title="terminal"
lerobot-find-port
\`\`\`

\`\`\`output
Finding all available ports for the MotorBus.
['/dev/ttyACM0', '/dev/ttyACM1']
Remove the usb cable from your MotorsBus and press Enter when done.

[...Disconnect corresponding leader or follower arm and press Enter...]

The port of this MotorsBus is /dev/ttyACM1
Reconnect the USB cable.
\`\`\`

On a Mac the port looks like \`/dev/tty.usbmodem575E0032081\`. On Windows it is a name like \`COM3\`. Write the port on the tape label you put on the arm's supply, and run the script again for the leader.

:::note
On Linux, if later commands say the port cannot be opened, give yourself access: the guide uses \`sudo chmod 666 /dev/ttyACM0\`. That lasts until you unplug the board; adding your user to the \`dialout\` group and logging in again makes it permanent.
:::

## Set the IDs, one motor at a time

Start with the follower. This needs the servos and the board, not an assembled arm. Take all six servos out of the chain. Then run the setup script with the port you found. It starts at the tip of the arm and works back to the base; its first instruction, as the guide shows it, is below:

\`\`\`bash title="terminal"
lerobot-setup-motors \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM1
\`\`\`

\`\`\`output
Connect the controller board to the 'gripper' motor only and press enter.
\`\`\`

Plug one 3-wire cable from the board into the servo that will be the gripper, and nothing else. Press Enter. The script finds the motor at whatever ID and speed it has, then writes ID 6 and the bus speed into it. It prints (from the guide):

\`\`\`output
'gripper' motor id set to 6
\`\`\`

Then it asks for \`wrist_roll\`. Unplug the cable at the board end only, leaving it attached to the gripper servo, since that is where it will stay. Plug a fresh cable into the next servo and press Enter. Repeat down the list:

| Joint | ID it gets |
|---|---|
| \`gripper\` | 6 |
| \`wrist_roll\` | 5 |
| \`wrist_flex\` | 4 |
| \`elbow_flex\` | 3 |
| \`shoulder_lift\` | 2 |
| \`shoulder_pan\` | 1 |

**Label each servo with its ID as it finishes.** A marker dot or a strip of tape is enough. After assembly every servo looks the same, and the label is the only way to tell them apart.

When the script ends, do the leader with the same steps:

\`\`\`bash title="terminal"
lerobot-setup-motors \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM0
\`\`\`

The leader's servos are not all alike. Match each gear ratio to its joint as you go: \`shoulder_pan\` and \`elbow_flex\` get the 1/191 servos, \`shoulder_lift\` gets the 1/345, and the wrist and gripper joints get the three 1/147 servos.

If the script cannot find a motor, check the three connections the guide lists: the power supply, the USB cable, and the 3-wire cable to the motor. On a Waveshare board, both jumpers must be on the \`B\` side, which routes the bus to USB.

:::tip title="Set IDs from the browser instead" href="https://bambot.org/assemble/so-101" label="Bambot: Assemble SO-101"
If Python is not installed yet, open this page in Chrome, click Connect, pick the board's serial port, and set each motor's ID from a list, one motor at a time. It talks to the board over Web Serial, with no install and no sign-up.
:::

## Check your understanding

**Your follower worked for a week. Then the gripper servo, ID 6, burned out, and you screwed a new one from the spares bag into its place. Now the arm will not connect at all. What happened, and what is the smallest fix?**

The new servo still has its factory ID, usually 1. Now nothing answers as ID 6, and two motors answer as ID 1, so their replies collide. The check LeRobot runs on connect fails on both counts. The tempting wrong fix is to rerun the setup script on the whole chained arm. That script assumes exactly one motor is on the wire; with six connected it grabs whichever answers first and renames it. Instead, unplug the new servo from the chain, connect it alone to the board, and set only that joint:

\`\`\`python title="fix_one_motor.py"
from lerobot.robots.so_follower import SO101Follower, SO101FollowerConfig

config = SO101FollowerConfig(port="/dev/ttyACM1", id="my_awesome_follower_arm")
follower = SO101Follower(config)
follower.bus.setup_motor("gripper")   # writes ID 6 and the bus speed
\`\`\`

Then plug it back into the chain. The \`setup_motor\` method is the same one the setup script calls for each joint (checked in LeRobot 0.6.1).

## Go do this now

Run \`lerobot-find-port\` for each arm, then \`lerobot-setup-motors\` for the follower and the leader, one servo at a time. You will see six lines ending in \`motor id set to 6\`, 5, 4, 3, 2, 1 for each arm, and twelve servos with a label on each. With only one servo, run the follower command and stop after the gripper: that one servo is now ID 6, ready to become your gripper. Next, the servos go into the plastic in [Assemble the follower](/robotics/lessons/assemble-the-follower).
`}))();export{t as default};