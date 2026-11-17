import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Keep it safe
type: lesson
sources:
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/so_follower/config_so_follower.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/so_follower/so_follower.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/utils.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/motors/feetech/feetech.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/scripts/lerobot_teleoperate.py"
  - "https://github.com/huggingface/lerobot/issues/2819"
  - "https://github.com/SRA-VJTI/karma"
updated: 2026-09-23
---
# Keep it safe

The SO-101 is small, but its motors can pinch a finger, knock a mug off the table, and burn themselves out pushing against something that will not move. This lesson gives you four habits that prevent all three: a limit on how far a joint moves per command, joint limits, a rule for readings that arrive late, and parking the arm before the power goes off. You will turn on the first one today with one flag.

## Four ways an arm hurts something

Everything that goes wrong in puppet mode comes from one of four places:

1. **A sudden big jump.** A command asks a joint to go 60 degrees away at once, and it gets there as fast as the motor can drive it. This happens when the leader and follower start in different poses, or a script has a bug.
2. **A joint pushed past its end.** The arm drives into the table or its own plastic, and the servo stalls and heats up.
3. **A stale reading.** The loop is acting on a joint angle that is old because the bus hiccuped, so it keeps sending goals that no longer make sense.
4. **The drop.** The script ends, the motors switch off, and a raised arm falls onto whatever is below it.

And one rule before any of them: **keep your fingers out of the gripper while the motors are on.**

## A limit on every step

LeRobot's follower has a setting for the first problem, \`max_relative_target\`. It limits how far each joint may move away from where it is **right now** in one command. The limit is in degrees for the five arm joints; for the gripper it is in the gripper's 0 to 100 range. By default it is off.

When it is on, LeRobot reads the arm's current position before every command. If the goal is further than the limit, it sends a goal only as far as the limit and prints a warning saying the goal was clamped. This is the rule, in five lines:

\`\`\`python title="clamp.py"
# The same rule as LeRobot's max_relative_target: never ask a joint
# to move more than max_step degrees away from where it is now.
def safe_goal(goal, present, max_step):
    step = max(-max_step, min(goal - present, max_step))
    return present + step

present = 2.0
for goal in [4.0, 30.0, -40.0]:
    print(f"asked {goal:6.1f}, sent {safe_goal(goal, present, 10.0):6.1f}")
\`\`\`

\`\`\`output
asked    4.0, sent    4.0
asked   30.0, sent   12.0
asked  -40.0, sent   -8.0
\`\`\`

A small move passes untouched. A big one becomes a 10-degree step in the right direction. On the next pass of the loop the joint is 10 degrees closer, and it takes another step. The arm still gets there, but at no more than one step per pass: at 30 passes a second and a 10-degree limit, a big move takes at least a few passes instead of one violent lunge.

To turn it on for teleoperation, add one flag to the command from [The arm copies your arm](/robotics/lessons/leader-follower):

\`\`\`bash title="terminal"
lerobot-teleoperate \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM1 \\
    --robot.id=my_awesome_follower_arm \\
    --robot.max_relative_target=5 \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM0 \\
    --teleop.id=my_awesome_leader_arm
\`\`\`

There is a cost. Reading the arm before every command takes time, and the LeRobot source warns that the loop runs slower with this on. Watch the Hz line from [The control loop](/robotics/lessons/the-control-loop) before and after.

:::tip title="Read the setting in LeRobot's source" href="https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/so_follower/config_so_follower.py" label="LeRobot: config_so_follower.py"
Find \`max_relative_target\` and read its comment. Then find \`disable_torque_on_disconnect\` two lines above it: that one is the drop, from the list above, switched on by default.
:::

**You set \`--robot.max_relative_target=5\` and the follower now trails behind your hand during fast moves, then catches up when you stop. Is the limit broken?**

No, it is working. At a 5-degree cap, a joint can move at most 5 degrees per pass of the loop, so a fast hand outruns it. The misconception is that a safety limit only matters in emergencies. It shapes every motion. Raise it to 10 for normal puppeting, and keep a low value for the first run of any new script.

## Joint limits, stale readings, and parking

**Joint limits.** Calibration already gave every joint a limit. When you moved each joint through its range in [Calibrate the arm](/robotics/lessons/calibrate-the-arm), LeRobot wrote the lowest and highest readings into the servo as its position limits. The servo is set to refuse goals beyond them. That is why a careful calibration is a safety step: if you stopped short of a joint's real end during calibration, the arm can never reach it; if you forced a joint into the table, the arm is allowed to drive there too.

**Stale readings.** In LeRobot, if a read from the arm fails even after its retries, the loop stops with an error and the arm is disconnected. Karma, the open control stack SRA VJTI built for the SO-101, adds a gentler layer on top of that idea. It watches how old the latest joint reading is. Past about a quarter of a second it pauses and sends no new goals; if the readings stay stale for a full second, it stops. Here is that idea as a tiny rule of your own:

\`\`\`python title="stale.py"
# Decide what to do with a reading, given how old it is (in milliseconds).
PAUSE_AFTER_MS = 250
STOP_AFTER_MS = 1000

def decide(age_ms):
    if age_ms >= STOP_AFTER_MS:
        return "stop: hold still and tell the human"
    if age_ms >= PAUSE_AFTER_MS:
        return "pause: send nothing new"
    return "ok: send the next command"

for age in [33, 300, 1200]:
    print(f"reading is {age:>4} ms old -> {decide(age)}")
\`\`\`

\`\`\`output
reading is   33 ms old -> ok: send the next command
reading is  300 ms old -> pause: send nothing new
reading is 1200 ms old -> stop: hold still and tell the human
\`\`\`

A reading 33 milliseconds old is one pass of a 30 Hz loop, which is normal. Ten passes late means something is wrong.

**Parking.** When a LeRobot script disconnects, it switches the follower's motors off by default, and the arm goes limp. Park it first: send it to a folded rest pose in small steps, then disconnect. With \`max_relative_target\` on, you can send the whole rest pose again and again, and the limit turns it into a slow walk home.

\`\`\`python title="park.py"
import time

from lerobot.robots.so_follower import SO101Follower, SO101FollowerConfig

REST = {  # placeholders: read these once from your own arm, folded on the table
    "shoulder_pan.pos": 0.0, "shoulder_lift.pos": -100.0, "elbow_flex.pos": 95.0,
    "wrist_flex.pos": 70.0, "wrist_roll.pos": 0.0, "gripper.pos": 2.0,
}

config = SO101FollowerConfig(
    port="/dev/ttyACM1", id="my_awesome_follower_arm", max_relative_target=3.0,
)
robot = SO101Follower(config)
robot.connect()

for _ in range(60):                 # up to 2 seconds at 30 commands a second
    robot.send_action(REST)         # each command moves at most 3 degrees
    time.sleep(1 / 30)

print({k: round(v) for k, v in robot.get_observation().items()})
robot.disconnect()                  # torque off, with the arm already resting
\`\`\`

To fill in \`REST\`, fold the follower onto the table by hand with the power on and no script running, then print \`robot.get_observation()\` once from a script that connects and disconnects. The values above are placeholders, not your arm's. The script was checked against LeRobot 0.6.1 with the motor bus mocked; on the mock, it printed the rest pose back exactly, and on a real arm you should see numbers within a degree or two of it.

## Go do this now

Add \`--robot.max_relative_target=5\` to your teleoperation command, move the leader fast, and watch the follower trail behind and then catch up. Raise it to 10 and feel the difference. Then record your own rest pose and run \`park.py\` at the end of every session: the arm should fold itself onto the table before the motors switch off. With one servo, run \`clamp.py\` with your own goals and a 5-degree limit, and predict each "sent" value before you look.
`}))();export{t as default};