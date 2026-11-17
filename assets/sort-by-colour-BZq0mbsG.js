import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: "Project: sort by colour without AI"
type: lesson
sources:
  - "https://github.com/opencv/opencv/blob/4.x/doc/py_tutorials/py_imgproc/py_colorspaces/py_colorspaces.markdown"
  - "https://github.com/opencv/opencv/blob/4.x/doc/py_tutorials/py_imgproc/py_contours/py_contour_features/py_contour_features.markdown"
  - "https://huggingface.co/docs/lerobot/cameras"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/model/kinematics.py"
  - "https://github.com/TheRobotStudio/SO-ARM100/tree/main/Simulation/SO101"
  - "https://colorizer.org"
updated: 2026-09-23
---
# Project: sort by colour without AI

Find the red block in a camera picture, turn its pixel into a spot on the table, and send the gripper there. No neural network: a colour rule, an average, a ruler, and the inverse kinematics you already have. Then dim the lights and watch it fail, which is the best argument for the learning that comes next in the course.

## Find the red pixels

A camera picture is a grid of pixels, and each pixel is three numbers. The obvious rule, "red is a big red number", breaks at once: a white sheet has a big red number too. The fix is to describe colour differently, by hue, the colour itself; saturation, how strong it is; and value, how bright. This is called HSV. Red has a hue near 0, strong saturation, and enough brightness to see.

Once every pixel is marked red or not red, the block's position is the average position of the red pixels, called the **centroid**. Two lines of OpenCV compute it.

Here is the whole thing on a picture made in code, so you can run it now with no camera. It draws a grey table with a red and a blue block, finds the red one, then tries again with the picture dimmed to 40% brightness. Before you run it, predict: does the dim picture still find the block?

\`\`\`python title="find_red.py"
import cv2
import numpy as np

# A fake top-camera frame: a grey table, a red block, a blue block.
rng = np.random.default_rng(0)
frame = np.full((480, 640, 3), (150, 155, 160), np.uint8)  # OpenCV stores colour as B, G, R
frame = cv2.add(frame, rng.integers(0, 20, frame.shape, dtype=np.uint8))
frame[300:340, 400:440] = (40, 40, 200)   # red block
frame[100:140, 150:190] = (190, 60, 30)   # blue block

def find_red(img):
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    # red sits at both ends of the hue circle, so take two bands
    mask = cv2.inRange(hsv, (0, 120, 100), (10, 255, 255)) | cv2.inRange(hsv, (170, 120, 100), (180, 255, 255))
    m = cv2.moments(mask)
    if m["m00"] == 0:
        return None, 0
    return (m["m10"] / m["m00"], m["m01"] / m["m00"]), int(mask.sum() / 255)

for name, img in [("bright", frame), ("dim", (frame * 0.4).astype(np.uint8))]:
    centre, count = find_red(img)
    print(f"{name:6}  red pixels {count:5d}  centre {centre}")
\`\`\`

\`\`\`output
bright  red pixels  1600  centre (419.5, 319.5)
dim     red pixels     0  centre None
\`\`\`

Run it with \`uv run --with numpy --with opencv-python-headless python find_red.py\`. In bright light, all 1,600 pixels of the 40 by 40 block pass, and the centre is exactly the middle of the block. Dimmed, the block's brightness drops from 200 to 80, under the rule's floor of 100, and the robot sees nothing red at all.

:::interactive name="ColourPick"
Set the room light high and drag the red threshold until only the red block lights up, and read its table position. Then slide the light down without touching the threshold and watch the detection fail or jump to the wrong spot.
:::

**The dim picture found no red pixels. A teammate lowers the brightness floor from 100 to 30 so the dim room works. What breaks next?**

Now dark, faintly reddish pixels also pass: shadows, a wooden table edge, the arm's own cables. The centroid is an average, so a few hundred wrong pixels drag it off the block, and the gripper goes to a spot between the block and the shadow. The belief behind the change is that a looser rule only adds right answers. It adds wrong ones too, and one fixed threshold cannot be right in every light. That is the lesson this project exists to teach.

:::tip title="See why hue, not red" href="https://colorizer.org" label="Colorizer"
Pick a bright red, then drag the HSV brightness slider down and watch the RGB numbers fall together while the hue stays put. Note that OpenCV halves the hue, so 350 degrees here is 175 in the code, and saturation and value run 0 to 255 instead of 0 to 100.
:::

## From pixel to table

The centroid is a pixel, (419.5, 319.5). The arm needs centimetres. With the top camera looking straight down, a simple scale does it, measured with two marks.

Put two pieces of tape on the table, one near each corner of the camera's view. For each mark, write down two things: where it appears in a saved camera frame, in pixels, and where the gripper tip is when you rest it on the mark. To get the second, move the limp arm onto the mark and read \`kin.forward_kinematics\` of its joints, so both measurements use the arm's own frame. Those four numbers give a scale: centimetres per pixel in each direction. The script below uses example marks and prints the red block's table position and the joint angles for a hover and a grasp above it; the output is a real run from 2026-09-23 with LeRobot 0.6.1.

\`\`\`python title="pick_red.py"
import numpy as np
from lerobot.model.kinematics import RobotKinematics

JOINTS = ["shoulder_pan", "shoulder_lift", "elbow_flex", "wrist_flex", "wrist_roll"]
kin = RobotKinematics("SO101/so101_new_calib.urdf", "gripper_frame_link", JOINTS)

# Two tape marks: where they appear in the image, and where the gripper tip was
# when you rested it on each mark (read with kin.forward_kinematics).
A_px, A_arm = (80, 420), np.array([0.14, 0.10, 0.0])
B_px, B_arm = (560, 60), np.array([0.26, -0.10, 0.0])

def pixel_to_arm(u, v):
    fx = (B_arm[0] - A_arm[0]) / (B_px[1] - A_px[1])  # forward per pixel, image rows
    fy = (B_arm[1] - A_arm[1]) / (B_px[0] - A_px[0])  # left per pixel, image columns
    return A_arm[0] + (v - A_px[1]) * fx, A_arm[1] + (u - A_px[0]) * fy

x, y = pixel_to_arm(419.5, 319.5)  # the red block's centre from the camera
print(f"red block: {x*100:.1f} cm forward, {y*100:.1f} cm left (negative is right)")

down = np.array([0.0, 0.0, 0.0, 90.0, 0.0])  # a pose with the gripper pointing down
q = down
for name, height in [("hover", 0.06), ("grasp", 0.02)]:
    target = kin.forward_kinematics(down)
    target[:3, 3] = [x, y, A_arm[2] + height]  # height above the table
    for _ in range(5):  # a few solver calls for a long move
        q = kin.inverse_kinematics(q, target)
    miss = np.linalg.norm(kin.forward_kinematics(q)[:3, 3] - target[:3, 3]) * 1000
    print(f"{name}: joints {np.round(q, 1)}  miss {miss:.1f} mm")
\`\`\`

\`\`\`output
red block: 17.4 cm forward, -4.1 cm left (negative is right)
hover: joints [ 16.2 -22.1  29.5  82.6  16.2]  miss 0.0 mm
grasp: joints [ 16.2 -16.9  42.3  64.6  16.2]  miss 0.0 mm
\`\`\`

It needs the \`SO101\` folder from the SO-ARM100 repository next to it and \`lerobot[kinematics]\` installed, as in [Project: the arm writes your name](/robotics/lessons/arm-writes-your-name). The mark positions here are example numbers; yours come from your table. The two-mark scale assumes the camera looks straight down; a tilted camera stretches the far side of the picture, and the error grows toward the edges.

## Picking it and sorting it

**Full arm.** The sequence is five moves: open the gripper, go to the hover pose, go down to the grasp pose, close, lift, then swing to a fixed drop pose on the left and open. Send each pose with \`robot.send_action\`, joint positions plus a \`gripper.pos\`, the way the name-writing project does, with \`max_relative_target\` set so no single command jumps far. Read the camera with LeRobot's \`OpenCVCamera\`; note that it returns frames as RGB by default, so convert with \`cv2.COLOR_RGB2HSV\` instead of the BGR version used above. Run the blue block the same way, with a blue hue band and a drop pose on the right. Before the first run, know what will move: the whole arm, from its rest pose to the block and then to the side.

**Starter, one servo:** point your laptop camera at a red object, run \`find_red\` on a saved frame, and turn the servo toward the centroid's x position: left of centre, turn left.

**In the browser:** the interactive and \`find_red.py\` are the whole idea.

## What to do now

Run \`find_red.py\`, then change the dim factor from \`0.4\` to \`0.45\` and then \`0.5\`. At 0.45 the robot is still blind; at 0.5 all 1,600 pixels come back, because the block's brightness reaches the floor of 100. A few percent of room light is the whole gap between working and blind, and that is why the next module teaches the robot from demonstrations recorded in your real light instead of from a rule you wrote.
`}))();export{t as default};