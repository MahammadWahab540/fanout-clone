import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Bigger robots
type: lesson
sources:
  - "https://github.com/SIGRobotics-UIUC/LeKiwi"
  - "https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/BOM.md"
  - "https://shop.wowrobo.com/products/lekiwi-mobile-robot"
  - "https://huggingface.co/docs/lerobot/lekiwi"
  - "https://github.com/Vector-Wangel/XLeRobot"
  - "https://xlerobot.readthedocs.io/en/latest/hardware/index.html"
  - "https://shop.wowrobo.com/products/xlerobot-dual-arm-mobile-household-robot-kit"
  - "https://huggingface.co/datasets/pepijn223/bimanual-so100-handover-cube"
  - "https://github.com/huggingface/lerobot/blob/v0.6.1/src/lerobot/robots/bi_so_follower/config_bi_so_follower.py"
  - "https://github.com/pollen-robotics/AmazingHand"
  - "https://huggingface.co/blog/pollen-robotics/amazing-hand"
  - "https://v1.leaphand.com/parts"
  - "https://github.com/pollen-robotics/reachy_mini"
  - "https://store.pollen-robotics.com/collections/reachy-mini"
  - "https://huggingface.co/docs/reachy_mini/platforms/simulation/get_started"
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://www.youtube.com/watch?v=Z_LBKSAOygo"
  - "https://github.com/steven-tired/mediapipe-so101"
  - "https://github.com/box2ai-robotics/joycon-robotics"
  - "https://github.com/TheRobotStudio/SO-ARM100"
  - "https://huggingface.co/datasets/lerobot/svla_so100_sorting"
  - "https://huggingface.co/datasets/lerobot/svla_so100_stacking"
  - "https://huggingface.co/datasets/LeRobot-worldwide-hackathon/338-Robrandt-so101-drawing-dataset"
  - "https://huggingface.co/datasets/LeRobot-worldwide-hackathon/85-TicTacToe-TicTacToe"
  - "https://huggingface.co/datasets/LeRobot-worldwide-hackathon/91-AM-PM-pouring-liquid"
  - "https://huggingface.co/datasets/LeRobot-worldwide-hackathon/134-npaka-studio-air-hockey"
  - "https://github.com/IliaLarchenko/robot_MCP"
  - "https://wiki.seeedstudio.com/respeaker_flex_soarm/"
  - "https://github.com/Encrux/robohack26"
  - "https://github.com/kite-ml/open-source-bio-lab"
  - "https://github.com/qalby-tech/embryo_lab_chess_so101"
  - "https://huggingface.co/docs/lerobot/hilserl"
  - "https://github.com/huggingface/lerobot/issues/2952"
  - "https://docs.nvidia.com/learning/physical-ai/sim-to-real-so-101/latest/index.html"
  - "https://www.youtube.com/watch?v=sb2yaXkXV5E"
  - "https://github.com/noah-wardlow/so101-policy-lab"
  - "https://github.com/topics/so-101"
updated: 2026-09-23
---
# Bigger robots

Everything you learned on one arm carries over to bigger robots: the same servos, the same record, train, and run loop, often the same LeRobot commands. This lesson walks through six next robots, from an arm on wheels to a hand with sixteen motors, with what each costs and what is new about it. By the end you will know which one is the smallest step from where you are.

## What changes, and what does not

Three things stay the same on every robot below: a policy still turns observations into actions, you still teach it with demonstrations, and you still measure it with twenty trials. What changes is the size of the action. One SO-101, an open-source robot arm like yours, has six numbers per action. Two arms have twelve. An arm on wheels adds three more for the base.

More numbers means more to learn from the same demos, and more ways to drift. That is why the order below goes from fewest new numbers to most.

## The next robots

Prices are "about", from each project's own page on 23 September 2026. Kits sell out and prices move weekly.

| Robot | What it is | About | New to learn |
|---|---|---|---|
| Bimanual SO-101 | Two followers, two leaders, side by side | a second leader and follower pair, about Rs 28,000 in India | twelve numbers per action |
| LeKiwi | An SO-101 on a three-wheeled base with a Raspberry Pi | $199 kit without Pi from WowRobo (sold out on the day we checked); $482 DIY with an arm pair | driving, running on a Pi |
| XLeRobot | Two SO-101 arms on a wheeled base built into an IKEA cart | about $660 DIY (about Rs 87,000, the project's own figure); $579 as a WowRobo kit | two arms and a base together |
| AmazingHand | A printed four-finger hand, two small servos per finger | under €200 | eight fingers' worth of joints, no LeRobot support yet |
| LEAP Hand | A research hand with sixteen Dynamixel motors | about $714 Lite, $1,772 full, at August 2023 prices | sixteen joints, a new servo brand |
| Reachy Mini | A small expressive robot head, not an arm | €350 Lite, €435 Wireless | talking, looking, apps |

## Two arms: the smallest step

A second pair of arms is the least new hardware: the same STS3215 servos, the same calibration, the same assembly. LeRobot drives both at once with the robot type \`bi_so_follower\` and the teleoperator \`bi_so_leader\`, and records one dataset for the pair.

The learning is the new part. A handover, where one arm passes a cube to the other, needs both arms to agree on timing. A public example, \`pepijn223/bimanual-so100-handover-cube\`, has 25 episodes, and its metadata lists an action of 12 numbers: six for each arm.

## Wheels: LeKiwi and XLeRobot

**LeKiwi** puts your arm on a base with three omni wheels, which can roll in any direction without turning first. The base uses three more STS3215 servos, so your wiring and ID skills carry straight over. LeRobot supports it as the robot type \`lekiwi\`, and the base adds three numbers to each action: forward speed, sideways speed, and turning speed. A Raspberry Pi on board runs the robot, and your laptop runs the policy over Wi-Fi.

**XLeRobot** is two SO-101 arms, a head camera, and a wheeled base, all mounted on an IKEA cart with a portable battery. Its README claims under four hours of assembly. It is the most popular "extend it" project in the SO-101 world, with about 5,500 GitHub stars on the day we checked.

:::note
Start mobile projects with the arm fixed and the base still. A policy that has to drive and grasp at once needs far more demos, so record base moves and arm moves as separate tasks first.
:::

## Hands: AmazingHand and LEAP

A two-finger gripper covers most pick-and-place. A hand is for when grasp shape matters: holding a pen, turning a knob, picking up a round fruit.

**AmazingHand**, from Pollen Robotics, is the cheap way in. It is fully 3D printed, weighs about 400 grams, and moves each of its four fingers with two small Feetech servos, eight motors in all. It is controlled from Python through the same kind of Waveshare bus board you already own, but it is not a LeRobot robot, so teleoperation and recording are yours to build.

**LEAP Hand**, from Carnegie Mellon, is a research hand with sixteen Dynamixel servos, four per finger. It is a different servo brand with its own software, and it costs several times more. Reach for it when a project needs a real thumb and you have a research reason.

**Check: you want your robot to pick up a pen and write your name. A friend says buy the AmazingHand first, because a hand can hold a pen better than a gripper. What do you tell them?**

Try the gripper first. The [name-writing project](/robotics/lessons/arm-writes-your-name) already works with a pen taped to the gripper, and a hand adds eight motors and no LeRobot support. If you agreed with the friend, the misconception is that more human-like hardware makes a task easier. Each new joint is more to control and more to teach. Upgrade only when the gripper has clearly failed at the task.

## A robot that talks: Reachy Mini

**Reachy Mini**, from Pollen Robotics and Hugging Face, is a desk robot with a moving head, antennas, a camera, and a speaker. It does not pick things up. It pairs well with the [voice project](/robotics/lessons/voice-commands): the same speech-to-text and Claude pieces, with the head nodding and looking instead of an arm moving. It has an app store and a MuJoCo simulation, so you can write code for it before you buy one.

:::tip title="Price out an XLeRobot build" href="https://xlerobot.readthedocs.io/en/latest/hardware/index.html" label="XLeRobot hardware guide"
Read the price table at the top: the Basic build and its India column, then the add-ons below it. Then scroll to the parts list and count how many parts you already own from your SO-101 pair.
:::

## Go do this now

Open the [LeKiwi bill of materials](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/BOM.md) and find the section "SO-101 2 Robot Arm Teleoperation Set". Those are the parts you already own. Everything above it, the wheels, three servos, the Pi, the battery, is what is new, and you will see it add up to about $250 of the $482 total. That is the real price of putting your arm on wheels.

## The project menu

You can now build, drive, teach, correct, and talk to a robot arm. This page is a menu of twenty things people have made with the SO-101, an open-source robot arm, and its older twin the SO-100, sorted by how long they take, each with a real starting point you can open today. By the end you will have picked one and opened its starting link.

### How to pick

Pick by time first, then by what excites you. A finished afternoon project beats an abandoned month-long one, and each tier uses skills from the tier before.

Three questions sort most choices:

- **Does it need learning?** Replaying a motion or following your hand needs no training. Pouring or tic-tac-toe needs a trained policy and fifty or more demos.
- **Is there a dataset already?** Many projects below link to someone's public dataset. Open it in the [dataset visualizer](https://huggingface.co/spaces/lerobot/visualize_dataset) before you record anything, to see what good demos for that task look like.
- **Can you film it?** You will share it in [the last lesson](/robotics/lessons/ship-your-robot). A project with a clear before and after films well.

Every link below was opened on 23 September 2026. Community repos change, and several are small hobby projects, so read the README before you build on one.

### An afternoon

No training, or a small change to something you already have.

| Project | What you do | Starting point |
|---|---|---|
| Replay a dance | Record one episode of a wave or a dance, then play it back on command | [\`lerobot-replay\` in the LeRobot guide](https://huggingface.co/docs/lerobot/il_robots) |
| Cat entertainer | Scripted random wand motions to keep a cat busy | [Kody Simpson's SO-101 cat video](https://www.youtube.com/watch?v=Z_LBKSAOygo) |
| Mirror your hand | A webcam tracks your wrist and drives the arm through inverse kinematics | [mediapipe-so101](https://github.com/steven-tired/mediapipe-so101) |
| Joy-Con driving | Steer the arm with a Nintendo controller instead of the leader | [joycon-robotics](https://github.com/box2ai-robotics/joycon-robotics) |
| Soft gripper | Print TPU fingers that grip fruit and odd shapes better | [SO-ARM100, \`Optional/Compliant_Gripper\`](https://github.com/TheRobotStudio/SO-ARM100) |
| Wrist camera | Mount a small camera on the wrist for better close-up grasps | [SO-ARM100, \`Optional\` wrist cam mounts](https://github.com/TheRobotStudio/SO-ARM100) |

### A weekend

One trained policy or one integration, reusing the record, train, and run loop from this course.

| Project | What you do | Starting point |
|---|---|---|
| Sort by colour | Red cube to one box, blue to the other, with SmolVLA | [lerobot/svla_so100_sorting, 52 episodes](https://huggingface.co/datasets/lerobot/svla_so100_sorting) |
| Stack two cubes | Red cube on top of the blue one | [lerobot/svla_so100_stacking, 56 episodes](https://huggingface.co/datasets/lerobot/svla_so100_stacking) |
| Draw a square | A pen in the gripper, trained from demos rather than maths | [Hackathon team 338 drawing dataset, 50 episodes](https://huggingface.co/datasets/LeRobot-worldwide-hackathon/338-Robrandt-so101-drawing-dataset) |
| Tic-tac-toe moves | Place a cube on a chosen grid square, one instruction per square | [Hackathon team 85 dataset, 222 episodes](https://huggingface.co/datasets/LeRobot-worldwide-hackathon/85-TicTacToe-TicTacToe) |
| Pour a drink | Lift a small kettle and pour into a cup | [Hackathon team 91 dataset, 60 episodes](https://huggingface.co/datasets/LeRobot-worldwide-hackathon/91-AM-PM-pouring-liquid) |
| Air hockey | Hit a puck with the gripper | [Hackathon team 134 dataset, 12 episodes](https://huggingface.co/datasets/LeRobot-worldwide-hackathon/134-npaka-studio-air-hockey) |
| Claude drives | An MCP server so a chat model moves the arm with tools | [robot_MCP](https://github.com/IliaLarchenko/robot_MCP) |
| Wake-word assistant | "Hey Jarvis", then a spoken command, then motion and a spoken reply | [Seeed reSpeaker guide for SO-ARM](https://wiki.seeedstudio.com/respeaker_flex_soarm/) |

The four hackathon datasets come from the LeRobot Worldwide Hackathon in June 2025. The episode counts are from each dataset's own metadata, and they show what a team managed in two days.

**Check: you want the arm to play tic-tac-toe against you. You have a free weekend. Do you start with the full game?**

No: start with the placing skill, "put the cube on square 7", which is what team 85's dataset covers. The full game also needs a camera to read the board and a program to choose the move. If you planned to train one policy to play the whole game, the misconception is that a policy learns the goal. It learns motions for the situations it saw. Split the project into a learned skill and plain code around it, the same way the [voice project](/robotics/lessons/voice-commands) put a planner in front of the policy.

### A week or more

Several parts, harder hardware, or research-grade methods. Expect to debug.

| Project | What you do | Starting point |
|---|---|---|
| Peg in a keyhole | Tight insertion with ACT, from a 36-hour hackathon win | [robohack26](https://github.com/Encrux/robohack26) |
| Lab tray handling | Pick and place lab trays with a custom gripper and six trained policies | [open-source-bio-lab](https://github.com/kite-ml/open-source-bio-lab) |
| Chess in simulation | An SO-101 moving chess pieces in MuJoCo, with a scripted expert for demos | [embryo_lab_chess_so101](https://github.com/qalby-tech/embryo_lab_chess_so101) |
| Train in the browser | Record, train, and run ACT on a simulated SO-101 without leaving a tab | [so101-policy-lab](https://github.com/noah-wardlow/so101-policy-lab) |
| Sim to real | Train in NVIDIA Isaac, then move vials into a rack on the real arm | [NVIDIA SO-101 sim-to-real course](https://docs.nvidia.com/learning/physical-ai/sim-to-real-so-101/latest/index.html) |
| A talking character | An arm with a voice and a personality, GLaDOS style | [Dan Makes Things, "From Zero to GLaDOS"](https://www.youtube.com/watch?v=sb2yaXkXV5E) |

:::note
LeRobot's reinforcement learning with human interventions, called HIL-SERL, is a tempting next step after [corrections](/robotics/lessons/take-over-when-it-fails). On 23 September 2026 the issue "HIL-SERL SO101 is not implemented" (#2952) was still open. Treat it as research, not a weekend project.
:::

:::tip title="Find more projects" href="https://github.com/topics/so-101" label="GitHub topic: so-101"
Sort by "Recently updated" and read the first ten repository names. Most are one person's project with a README and a video, the same size as the weekend tier above.
:::

### Go do this now

Pick one project from the tier that fits your next free block of time, and open its starting link. If it has a dataset, open that dataset in the visualizer and watch three episodes. You will see exactly what the finished robot has to do, frame by frame, before you record a single demo.
`}))();export{t as default};