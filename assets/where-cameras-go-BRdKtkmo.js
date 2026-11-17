import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Where cameras go
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/cameras"
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/cameras/opencv/configuration_opencv.py"
  - "https://huggingface.co/datasets/lerobot/svla_so100_sorting"
  - "https://huggingface.co/datasets/lerobot/svla_so101_pickplace"
  - "https://lerobot-visualize-dataset.hf.space/lerobot/svla_so100_sorting/episode_0"
  - "https://www.ml6.eu/en/blog/ai-robotics-a-field-report-on-imitation-learning-with-lerobot"
  - "https://huggingface.co/docs/lerobot/index"
  - "https://github.com/huggingface/lerobot/issues/1353"
  - "https://en.wikipedia.org/wiki/USB_hardware"
  - "https://webcamtests.com"
updated: 2026-09-23
---
# Where cameras go

A robot that learns from you only sees what its cameras see. This lesson places two cameras, one looking down at the table and one on the wrist, connects them to LeRobot, and runs the one test that tells you whether they are good enough to learn from. You will finish with both feeds on your screen next to the arm's joint readings.

## Why placement matters more than you expect

Later in the course, a neural network will learn to pick up a cube by watching your demonstrations. It will never see the room, only the camera pictures and the joint angles. If the cube is hidden behind the gripper at the moment of grasping, the network has no way to learn where to close. If the camera moves between sessions, everything it learned about "left" and "right" moves too.

You cannot fix a badly placed camera by training longer. Placement is decided now, before you record anything.

## One camera above, one on the wrist

Most SO-101 setups, the SO-101 being an open-source robot arm, use two cameras, and they do different jobs.

- **The top camera** is fixed above or in front of the table, looking down at the whole workspace. It answers "where is the cube, where is the cup, where is the arm". Mount it on a clamp or a shelf, not on anything that gets bumped.
- **The wrist camera** rides on the gripper, looking past the jaws. It answers "am I lined up, is the cube between the fingers". It sees the last few centimetres that the top camera loses behind the arm.

Hugging Face's own SO-100 sorting dataset uses exactly this pair, stored as \`observation.images.top\` and \`observation.images.wrist\`, both 640 by 480 at 30 frames per second. Some teams add a third camera from the side; ML6's SO-100 field report used top, front, and wrist. Start with two.

:::tip title="See what a robot learned from" href="https://lerobot-visualize-dataset.hf.space/lerobot/svla_so100_sorting/episode_0" label="LeRobot dataset visualizer"
Press play on episode 0 of the sorting dataset and watch the top and wrist videos side by side. Pause at the moment the gripper closes on a cube: the wrist view shows the cube between the jaws, and the top view shows which box it is heading for.
:::

## The camera-only test

Here is the rule of thumb from the LeRobot imitation learning guide: **you should be able to do the task yourself by looking only at the camera images.**

Run it for real. Put both feeds on your screen, turn your chair so you cannot see the arm, and puppet a pick with the leader. If you can grab the cube and drop it in the cup from the pictures alone, the network has enough to learn from. If you keep missing, find out why before recording: the cube is out of frame, the gripper hides it, the image is too dark to see the edge. Each of those is a camera problem, and each is cheap to fix now.

**You do the camera-only test and succeed, but only by leaning in to the screen and guessing at the last moment, because the top camera shows the gripper covering the cube. Is the setup ready?**

Not yet. Succeeding by guesswork means the pictures barely hold the answer, and the network will guess too. The tempting belief is that the network can see more than you can in the same image. It cannot; it only has the pixels you had. Here the wrist camera should show the cube at the moment of grasp. Check that it is aimed past the jaws, not at them, and that it is not too close to focus.

## Connecting the cameras

**Full arm.** Plug in both cameras and ask LeRobot to list them. The output below is the example from the LeRobot camera guide, for one camera; your names and sizes will differ.

\`\`\`bash title="terminal"
lerobot-find-cameras opencv
\`\`\`

\`\`\`output
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ 0
  Type: OpenCV
  Id: 0
  Backend api: AVFOUNDATION
  Default stream profile:
    Format: 16.0
    Width: 1920
    Height: 1080
    Fps: 15.0
--------------------
\`\`\`

Note the \`Id\` of each camera. Unplug one and run it again to learn which is which. The numbers can change after a reboot or a re-plug, so check again whenever a feed looks wrong.

Then teleoperate with both cameras attached and \`--display_data=true\`, which opens a viewer with each feed and the joint readings:

\`\`\`bash title="terminal"
lerobot-teleoperate \\
    --robot.type=so101_follower \\
    --robot.port=/dev/tty.usbmodem58760431541 \\
    --robot.id=my_awesome_follower_arm \\
    --robot.cameras="{top: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, wrist: {type: opencv, index_or_path: 1, width: 640, height: 480, fps: 30}}" \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/tty.usbmodem58760431551 \\
    --teleop.id=my_awesome_leader_arm \\
    --display_data=true
\`\`\`

Use your own ports and \`id\` values from [The arm copies your arm](/robotics/lessons/leader-follower). The names \`top\` and \`wrist\` are yours to choose, but keep them the same in every session: they become the keys in your dataset, and a policy trained on \`top\` will look for \`top\`.

:::note
Tape a small cross on the table where each camera's view is centred, and mark the camera mount with a pen. If a camera gets knocked between recording sessions, you can put it back to the same view instead of recording a dataset that mixes two views.
:::

**In the browser or with one servo:** you do not need the arm to try the placement. Point your laptop's webcam down at a desk from a shelf, run \`lerobot-find-cameras opencv\`, and do the camera-only test with your own hand: pick up a pen while watching only the screen.

## What to do now

Set up the two cameras, run the teleoperate command with \`--display_data=true\`, turn away from the arm, and try one pick using only the feeds. You will see within a minute whether the cube stays visible from start to grasp, and that is the answer to "are my cameras good enough".

## Light beats resolution

When a robot's camera pictures are bad, the first instinct is to buy a sharper camera. Usually the problem is the light. This lesson shows why a steady lamp does more for a robot than extra pixels, and how to stop two USB cameras from starving each other. You will leave with a camera setup that gives the same picture at 9 am and 9 pm.

### What changing light does to a robot

Your eyes adjust to light without you noticing. A white cube looks white under a window at noon and under a tube light at night. A camera records numbers, and those numbers change with the light: the same cube might read as bright grey in the morning and dull orange in the evening.

A robot that learned from morning demonstrations has only ever seen the morning numbers. In the evening, the cube it knows is gone, replaced by one it has never seen. LeRobot's own list of common problems puts it in one line: blurry or unusable footage is a lighting problem before it is a resolution problem.

Webcams make this worse by trying to help. They change their exposure and colour balance by themselves as the room changes, so the picture shifts even while you watch.

### Try it: one threshold, two rooms

The interactive shows a camera's view from above, with a red block and a blue block. A simple colour rule, "this pixel is red enough", picks out the red block and marks its centre. The rule is the same in every room; only the light changes.

:::interactive name="ColourPick"
Leave the threshold alone and slide the room light down. Watch the highlighted red pixels thin out until the block is lost, or a shadow is picked instead. Then raise the threshold to fix the dim room and move the light back up.
:::

A threshold tuned in one light fails in another. The same thing happens, more quietly, inside a trained policy: it learned a picture, and the picture changed.

**A friend's pick-and-place robot works in the lab every morning and fails every evening. They plan to buy a 4K camera. What would you tell them to try first?**

Put a lamp over the table and close the curtains, then test again in the evening. The failure follows the time of day, so the input that changes with the time of day is the suspect, and that is light. The belief behind the 4K camera is that the robot fails because it cannot see detail. It sees plenty of detail; it sees different colours from the ones it learned. More pixels of the wrong colour do not help, and as the next section shows, they can make the loop slower.

### A setup that holds steady

- **One lamp you control.** A desk lamp or LED panel above the table, on for every session, with daylight blocked or at least steady. The goal is the same light every time, not bright light.
- **Fewer shadows.** Light from above or from two sides. A single lamp low on one side throws the arm's shadow across the work area, and the shadow moves with the arm.
- **A plain background.** A matte sheet or board under the work area. Shiny tables reflect the lamp as a white patch that moves when you do.
- **640 by 480 is enough.** LeRobot's own SO-101 examples and public datasets record at 640 by 480, 30 frames per second.

:::tip title="Check your camera in the browser" href="https://webcamtests.com" label="WebcamTests"
Run the test with the room lights on, then again with one lamp off. Compare the brightness and frame rate it reports: a webcam on automatic exposure can lower its frame rate in dim light to gather more light per frame, and a robot loop feels that as lag.
:::

### Two cameras, one USB bus

**Full arm.** The second camera brings a new failure. Each webcam sends its pictures over USB, and the budget is smaller than you think. A USB 2.0 port carries at most 480 Mbit/s. An uncompressed 640 by 480 picture at 30 frames per second, two bytes per pixel, is about 147 Mbit/s. One 1280 by 720 camera is about 442 Mbit/s, nearly the whole port by itself.

Two cameras on one port, or on one hub, can exceed that, and the second camera fails to open or delivers frames late. That exact failure, a second camera read error on an SO-101, is a known LeRobot issue.

The fixes, cheapest first:

1. **Lower the resolution** to 640 by 480 for both cameras.
2. **Plug the cameras into different ports** on the computer, ideally on different sides, instead of one hub.
3. **Ask for compressed video.** LeRobot's OpenCV camera config takes a \`fourcc\` setting; \`"MJPG"\` asks the camera for compressed frames, which are far smaller. Not every camera supports it.

In any LeRobot command, the camera flag becomes:

\`\`\`text title="camera flag"
--robot.cameras="{top: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: MJPG}}"
\`\`\`

Then watch the loop's timing. When you record, \`lerobot-record\` prints a cadence line for every episode. In the example the LeRobot guide shows (from the docs, not a run of ours), the target is 30 Hz, the arm achieved 29.88 Hz, and camera reads took 74% of the loop's time. If your achieved rate sits well below 30, the cameras are the first place to look.

**In the browser or with one servo:** the interactive and the webcam test cover this lesson. The starter kit has no camera yet.

### What to do now

Put a lamp over your table, close the curtains, and open the webcam test twice: once with the room light on and once with it off. If the brightness reading barely moves between the two, your lamp is doing its job. That steady number is what the robot needs, far more than extra pixels.
`}))();export{t as default};