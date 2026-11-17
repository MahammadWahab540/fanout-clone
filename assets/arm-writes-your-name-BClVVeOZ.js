import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: "Project: the arm writes your name"
type: lesson
sources:
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/model/kinematics.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/so_follower/config_so_follower.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/so_follower/so_follower.py"
  - "https://huggingface.co/docs/lerobot/phone_teleop"
  - "https://github.com/TheRobotStudio/SO-ARM100/tree/main/Simulation/SO101"
  - "https://makezine.com/projects/learn-inverse-kinematics-with-a-robot-arm-drawbot/"
updated: 2026-09-23
---
# Project: the arm writes your name

Tape a pen to the gripper, put a sheet of paper in front of the arm, and let inverse kinematics draw your name. You will turn letters into a list of points, turn each point into joint angles, and send them to the arm thirty times a second. Everything up to the last step runs on a laptop with no arm attached.

## Letters become points

A robot cannot draw an "A". It can only go to a point, then the next point. So the first job is to turn each letter into strokes, and each stroke into points close enough together that the pen moves in straight lines between them.

Draw each letter on a small grid, 2 units wide and 3 tall, and write down its corners. An "A" is two strokes: up-and-down the sides, then the crossbar. Between strokes the pen lifts. Then fill in extra points every 5 mm along each line, so the arm never takes a long leap with the pen down.

\`\`\`python title="name_points.py"
import numpy as np

# Each letter is a list of strokes; each stroke is a list of (x, y) corners
# in a box 2 units wide and 3 tall. The pen lifts between strokes.
FONT = {
    "A": [[(0, 0), (1, 3), (2, 0)], [(0.5, 1.5), (1.5, 1.5)]],
    "N": [[(0, 0), (0, 3), (2, 0), (2, 3)]],
    "I": [[(1, 0), (1, 3)]],
    "L": [[(0, 3), (0, 0), (2, 0)]],
}

def waypoints(word, unit_cm=1.0, step_cm=0.5):
    points = []  # (x_cm, y_cm, pen) on the paper
    for i, ch in enumerate(word):
        for stroke in FONT[ch]:
            corners = [((i * 2.8 + x) * unit_cm, y * unit_cm) for x, y in stroke]
            points.append((*corners[0], "up"))
            for (x0, y0), (x1, y1) in zip(corners, corners[1:]):
                n = max(1, int(np.ceil(np.hypot(x1 - x0, y1 - y0) / step_cm)))
                points += [(x0 + (x1 - x0) * k / n, y0 + (y1 - y0) * k / n, "down") for k in range(n + 1)]
            points.append((*corners[-1], "up"))
    return points

if __name__ == "__main__":
    pts = waypoints("ANIL")
    print(len(pts), "waypoints")
    for x, y, pen in pts[:5]:
        print(f"x {x:4.2f} cm  y {y:4.2f} cm  pen {pen}")
\`\`\`

\`\`\`output
71 waypoints
x 0.00 cm  y 0.00 cm  pen up
x 0.00 cm  y 0.00 cm  pen down
x 0.14 cm  y 0.43 cm  pen down
x 0.29 cm  y 0.86 cm  pen down
x 0.43 cm  y 1.29 cm  pen down
\`\`\`

Four letters, 3 cm tall, become 71 points. The first two share a position: the pen arrives in the air, then drops. Add the letters of your own name to \`FONT\` before going on.

## Points become angles

Now each point needs joint angles. Seen from above, the base turns to face the point. Seen from the side, the shoulder and elbow are the two-link arm from [From hand position to joint angles](/robotics/lessons/position-to-angles), reaching a spot a few centimetres below the shoulder. That leaves the wrist. The pen should always point straight down, so the wrist cancels whatever tilt the shoulder and elbow add: wrist = −90 − (shoulder + elbow). Keeping that one sum fixed is what holds the pen upright, and it is why the pen-down height never drifts.

Lifting the pen is the same trick one level up: raise the target by 1 cm and solve again.

\`\`\`python title="name_angles.py"
import numpy as np
from name_points import waypoints

L1, L2 = 11.0, 13.0          # upper arm and forearm, cm
PAPER_NEAR, PAPER_LEFT = 14.0, 5.0  # the letters start 14 cm in front of the shoulder, 5 cm to its left
WRIST_HEIGHT = {"down": -3.0, "up": -2.0}  # wrist height below the shoulder axis, cm

def angles(x, y, pen):
    forward, left = PAPER_NEAR + y, PAPER_LEFT - x
    pan = np.degrees(np.arctan2(left, forward))        # base turns toward the point
    r, z = np.hypot(forward, left), WRIST_HEIGHT[pen]  # then solve the side view
    elbow = -np.arccos((r**2 + z**2 - L1**2 - L2**2) / (2 * L1 * L2))  # elbow-up answer
    shoulder = np.arctan2(z, r) - np.arctan2(L2 * np.sin(elbow), L1 + L2 * np.cos(elbow))
    wrist = -90 - np.degrees(shoulder + elbow)         # keeps the pen pointing straight down
    return pan, np.degrees(shoulder), np.degrees(elbow), wrist

for x, y, pen in waypoints("ANIL")[:5]:
    pan, sh, el, wr = angles(x, y, pen)
    print(f"({x:4.2f}, {y:4.2f}) {pen:4} -> pan {pan:5.1f}  shoulder {sh:5.1f}  elbow {el:6.1f}  wrist {wr:6.1f}")
\`\`\`

\`\`\`output
(0.00, 0.00) up   -> pan  19.7  shoulder  49.9  elbow -103.1  wrist  -36.8
(0.00, 0.00) down -> pan  19.7  shoulder  45.5  elbow -102.1  wrist  -33.4
(0.14, 0.43) down -> pan  18.6  shoulder  44.5  elbow  -99.9  wrist  -34.6
(0.29, 0.86) down -> pan  17.6  shoulder  43.4  elbow  -97.6  wrist  -35.7
(0.43, 1.29) down -> pan  16.7  shoulder  42.2  elbow  -95.3  wrist  -36.9
\`\`\`

Run both files from one folder with \`uv run --with numpy python name_angles.py\`. These are angles for the teaching model, measured from the table. Look at the first two lines: dropping the pen 1 cm lowers the shoulder 4.4 degrees and the wrist turns back 3.4 degrees to keep the pen vertical.

**The first stroke of the "A" carries the pen up the page, away from the base, and the pen stays at the same height. Yet the pan angle drops from 19.7 to 16.7 degrees and the shoulder and elbow change too. Why do three joints move for one straight line?**

The paper sits 5 cm to the left of the base, so the base has to turn toward every point. As the pen moves away and slightly toward the middle, the angle to it shrinks, so the base turns back. At the same time the pen is farther away, so the shoulder and elbow open out to reach it. The mistaken idea is one joint per direction: pan for sideways, shoulder for forward, wrist for up. Joints and directions do not line up one to one. Every point needs all of them, which is why you solve for the angles instead of steering each joint.

## Sending it to the arm

**Full arm.** The real SO-101 needs its true link lengths and calibration offsets, so do not send the teaching-model angles. LeRobot's \`RobotKinematics\` solver reads the arm's URDF and does the same job properly. Copy the \`SO101\` folder from the SO-ARM100 repository next to your script, so \`SO101/so101_new_calib.urdf\` and its \`assets\` folder are both there, and install \`lerobot[kinematics]\`.

Set up the page first. Tape the pen to the fixed jaw so its tip sits about 1 cm past the fingers. When a LeRobot program such as \`lerobot-teleoperate\` exits, it turns the follower's torque off by default, so the arm goes limp. Rest the pen tip on the paper where the bottom-left corner of your first letter should go, with the gripper pointing straight down, and tape the paper down. The script reads that pose as its starting point.

Run it first with \`DRY_RUN = True\`, which needs no arm. The output under the script is a real dry run, captured 2026-09-23 with LeRobot 0.6.1 and placo 0.9.15.

\`\`\`python title="write_name.py"
import time
import numpy as np
from lerobot.model.kinematics import RobotKinematics
from lerobot.robots.so_follower import SO101Follower, SO101FollowerConfig
from name_points import waypoints

DRY_RUN = True  # set to False when the pen is on the paper and you are ready
JOINTS = ["shoulder_pan", "shoulder_lift", "elbow_flex", "wrist_flex", "wrist_roll"]
kin = RobotKinematics("SO101/so101_new_calib.urdf", "gripper_frame_link", JOINTS)

if DRY_RUN:
    q = np.array([0.0, 0.0, 0.0, 90.0, 0.0])  # gripper pointing straight down, for testing without the arm
else:
    robot = SO101Follower(SO101FollowerConfig(port="/dev/tty.usbmodem5A460814411", id="my_follower_arm",
                                              max_relative_target=5.0))  # at most 5 degrees per command
    robot.connect()
    obs = robot.get_observation()
    q = np.array([obs[f"{j}.pos"] for j in JOINTS])
    gripper = obs["gripper.pos"]

start = kin.forward_kinematics(q)  # where the pen tip is now: the bottom-left of the first letter
for i, (x, y, pen) in enumerate(waypoints("ANIL")):
    target = start.copy()
    target[:3, 3] += [y / 100, -x / 100, 0.0 if pen == "down" else 0.01]  # forward, left, up in metres
    q = kin.inverse_kinematics(q, target)
    if DRY_RUN:
        if i < 4:
            miss = np.linalg.norm(kin.forward_kinematics(q)[:3, 3] - target[:3, 3]) * 1000
            print(f"waypoint {i}: joints {np.round(q, 1)}  miss {miss:.1f} mm")
        continue
    robot.send_action({**{f"{j}.pos": v for j, v in zip(JOINTS, q)}, "gripper.pos": gripper})
    time.sleep(1 / 30)
\`\`\`

\`\`\`output
waypoint 0: joints [-0.   0.2 -4.5 94.3 -0. ]  miss 0.4 mm
waypoint 1: joints [ 0.  -0.2  0.3 89.9  0. ]  miss 0.4 mm
waypoint 2: joints [ 0.4  2.2 -2.7 90.4  0.4]  miss 0.1 mm
waypoint 3: joints [ 0.8  4.5 -5.5 91.   0.8]  miss 0.1 mm
\`\`\`

Each step reuses the last answer as its starting guess, so the solver only has to nudge a few degrees. Across the whole name, the worst miss in the dry run was about 4 mm, on the pen-up hops between letters, and about 2 mm on the pen-down points. That is fine for 3 cm letters. Then set \`DRY_RUN = False\`, put your port and \`id\` in, and run it. The whole arm will move, a few centimetres at a time, with \`max_relative_target\` holding each command to 5 degrees. Keep your hand near the power switch for the first run.

:::note
If the pen skates or lifts, change the "down" height, not the code. Replace \`0.0\` with \`-0.003\` in the target line to press 3 mm into the paper; a pen taped to a slightly springy jaw needs that pressure to draw a solid line.
:::

**In the browser or with one servo:** the two scripts above are the whole project without the arm. Plot the waypoints with matplotlib to see your name drawn on screen.

:::tip title="See a drawing arm built step by step" href="https://makezine.com/projects/learn-inverse-kinematics-with-a-robot-arm-drawbot/" label="Make: IK drawbot"
Read how a two-servo drawing arm finds each angle with the same law of cosines you used here. It has no pen lift, so every letter would be joined up; the 1 cm hop in this lesson is what fixes that.
:::

## What to do now

Add the letters of your name to \`FONT\`, run \`name_points.py\`, and check the waypoint count. With the arm, run \`write_name.py\` dry first, then for real, and you will see your name come out on the paper in about 3 cm letters.
`}))();export{t as default};