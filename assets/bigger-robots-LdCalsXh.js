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
updated: 2026-09-25
---
# Bigger robots

## Pick your next project

You already have the pieces: joint control, hand-space code, recorded examples, and a way to inspect a policy. Choose one small result you can show working.

:::interactive name="ProjectMenu"
A local folder lets your code and data grow alongside the simulated robot.
:::

Set a finish line first: a readable letter, a policy comparison on fixed test states, or a repeatable physical pick.

## Run it on your computer

Unzip the starter, open a terminal in its \`fanout-robot\` folder, and run the simulator:

\`\`\`bash title="terminal"
python3 sim.py
\`\`\`

Open \`http://127.0.0.1:8765\`. In a second terminal, same folder:

\`\`\`bash title="terminal"
python3 run.py draw-strokes.py
\`\`\`

Edit and rerun. No extra Python packages needed. To bring your browser work, start with \`python3 sim.py --import project.json\`; existing files are backed up first.

## Same angles, longer arm

Bigger robots reuse the same ideas, but the same numbers can mean something new. Keep both joint angles fixed and lengthen the links.

:::interactive name="CapstoneActivity"
Grey is the original geometry. Green is the scaled arm at the same joint angles.
:::

:::check
You scale the arm up and replay an old hand-space path with the same joint angles. What happens?
- [ ] The hand traces the same path :: Same angles on longer links reach different points.
- [x] The hand misses, because the geometry changed :: The kinematics model must be updated for the new link lengths.
:::

## What carries over

Observation, action, calibration, recording, and evaluation all still apply. Geometry, joint limits, load, control rate, and the action interface must be checked again.

Two arms add coordination and a shared workspace. Wheels move the reference frame. A multi-finger hand adds contacts and many more grasps. Each is a new problem to test.
`}))();export{t as default};