import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: What you are going to build
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/so101"
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://github.com/TheRobotStudio/SO-ARM100"
  - "https://huggingface.co/datasets/lerobot/svla_so101_pickplace"
  - "https://huggingface.co/spaces/lerobot/visualize_dataset"
  - "https://huggingface.co/spaces/LeRobot-worldwide-hackathon/all-winners"
  - "https://bambot.org/play/so-arm100"
updated: 2026-09-25
---
# What you are going to build

## The robot at the end

By the end of this course, a robot arm on your desk picks up a block and drops it in a box on its own. You teach it the task by showing it, about fifty times.

![A screen recording of the simulated arm bending its elbow, opening and closing its gripper, then returning to its starting pose. The joint angles change in the controls beside it.](/course-assets/robotics/bambot/joint-demo.gif)

*The arm in the [bambot playground](https://bambot.org/play/so-arm100), a browser simulation. The real arm learns its task later in the course.*

## Two arms, one pair

The arm is the SO-101: open source, 3D printed, about as long as your forearm, moved by six small motors. It comes as a pair.

- **The follower** does the work. Your computer drives its motors.
- **The leader** is the one you hold. Its motors only report their angles.

The follower copies the leader many times a second. That is puppet mode, and it is also how you teach the robot.

:::check
In puppet mode, which arm do you move with your hand?
- [x] The leader :: You move the leader, the computer reads its angles, and the follower copies them.
- [ ] The follower :: The follower is driven by the computer. You hold the leader.
:::

## Five things it will do

Each stage ends with something you can film:

1. **Replay a motion** with one motor.
2. **Wave hello** with the built arm.
3. **Pick a cube** by puppeting the leader.
4. **Write your name** with a little trigonometry.
5. **Do the pick alone**, after fifty demonstrations.

Then corrections, and finally spoken instructions.

## What a demonstration looks like

A demonstration is one recorded attempt: camera video plus every joint angle, thirty times a second. Hugging Face published fifty of them for this arm.

:::tip title="Watch a real SO-101 demonstration" href="https://huggingface.co/spaces/lerobot/visualize_dataset?path=%2Flerobot%2Fsvla_so101_pickplace%2Fepisode_0" label="LeRobot dataset visualizer"
Play episode 0 and watch the arm pick a brick into a box. Under the videos, find the gripper line: it drops when the jaw closes and rises when it lets go.
:::

A **policy** is the program that watches the cameras and joints and picks the next move. You will train one on data shaped exactly like this.

:::check
Your finished arm picks the brick nine times out of ten. You move the box twenty centimetres to the left. What happens?
- [ ] It adapts, because it learned to pick the brick :: It learned to copy the motions in its demonstrations. None of them had the box in the new place.
- [x] It probably misses much more often :: It copies motions it was shown, and none had the box there. The corrections module is about closing exactly this gap.
:::

## How the course climbs

One motor, then the whole arm, then the brain.

| Stage | You learn | Hardware |
|---|---|---|
| One servo | how a smart motor reads and holds an angle | one motor, about Rs 3,000 |
| Build and puppet | assembly, calibration, the control loop | the arm pair |
| Hand and eyes | where the hand is, what the robot sees | the arm pair |
| Teach by showing | recording, training, measuring | the arm pair and a rented GPU |
| Language | models that read an instruction | the arm pair and a rented GPU |

Every lesson also works in the browser, so you can start before a kit arrives.

## What other people built

In June 2025 teams around the world built projects on this arm at the LeRobot hackathon. Compare a sandwich-making arm with a handheld controller: one changes the task, the other changes how a person steers.

:::interactive name="HackathonDemos"
Original team demonstrations from the LeRobot worldwide hackathon showcase.
:::

:::tip title="See thirty community robot demos" href="https://huggingface.co/spaces/LeRobot-worldwide-hackathon/all-winners" label="LeRobot hackathon winners"
Play any three. Notice how many are this same arm doing one task learned from demonstrations.
:::
`}))();export{t as default};