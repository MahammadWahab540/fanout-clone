import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Choose your path
type: lesson
sources:
  - "https://github.com/TheRobotStudio/SO-ARM100"
  - "https://github.com/TheRobotStudio/SO-ARM100/blob/main/3DPRINT.md"
  - "https://thinkrobotics.com/products/so-arm101-hugging-face-lerobot"
  - "https://evelta.com/st3215-7-4v-19kg-1-345-gear-dual-axis-ttl-string-servo-motor/"
  - "https://robocraze.com/products/waveshare-serial-bus-servo-control-board-for-st-sc-series-servos"
  - "https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html"
  - "https://shop.wowrobo.com/products/so-arm101-diy-kit-assembled-version-1"
  - "https://huggingface.co/docs/lerobot/installation"
  - "https://bambot.org/play/so-arm100"
  - "https://huggingface.co/docs/lerobot/so101"
  - "https://craftcloud3d.com"
updated: 2026-09-25
---
# Choose your path

## Three ways through

Every lesson works on all three paths. What changes is how much happens on your desk. Prices are from September 2026.

| Path | What you buy | About |
|---|---|---|
| Browser | nothing | free |
| Starter | one servo, a bus board, a supply | Rs 3,000 / $35 |
| Full arm | an SO-101 leader and follower kit | Rs 28,000 / $200 to $380 |

You can start cheap and move up later without repeating anything.

## The starter is the real motor

The starter servo, the Feetech STS3215, is the exact motor in every joint of the SO-101. The code you write for one servo later drives six. Buy the arm and your starter becomes a spare joint.

:::tip title="Move an arm before you buy anything" href="https://bambot.org/play/so-arm100" label="bambot SO-ARM100 playground"
Drag the Elbow slider to about 230 and watch the forearm fold. Press 6 to open the gripper and Y to close it.
:::

## What is in the box

You do not need to know every screw yet, only what each part does. Pick a part below.

:::interactive name="BuildParts"
A motor becomes a joint when you attach something to its shaft.
:::

The motor turns. A printed link carries that turn to the next joint. The gripper gives the arm something useful to do.

:::check
The forearm is printed plastic. Why does it move?
- [ ] It has a small motor inside :: The plastic has no motor or electronics. It is carried by something else.
- [x] It is bolted to the elbow servo's horn :: The elbow motor turns its horn, and the forearm turns with it.
:::

## Buying in India

- **One servo:** STS3215 7.4 V, 1/345 gearing (C001), about Rs 2,224 at Evelta.
- **Bus board:** Waveshare Bus Servo Adapter (A), about Rs 484 at Robocraze.
- **Power:** a 5 V supply with a 5.5 x 2.1 mm plug, as the parts list pairs with this servo.
- **Full kit:** ThinkRobotics, about Rs 27,999, with printed parts, 12 servos, boards, supplies, cables. No camera.

Buying the same parts loose costs about as much, so buy the kit.

## Buying abroad

- **Kit with printed parts:** WowRobo, from about $199.
- **Motors only:** Seeed's SO-ARM101 Pro, about $250. No printed parts, power supplies, or camera.
- **Build it yourself:** the official parts list in the SO-ARM100 repository comes to about $230 for both arms, before printing.

## No 3D printer needed

Buy a kit with the parts already printed, or order the prints. The SO-ARM100 printing guide lists the files and settings (PLA+, 20% infill), and local print services quote from an uploaded file.

Listings differ. Before paying, check three things: printed parts, power supplies, and one arm or a pair.

:::check
A friend buys Seeed's $250 motor kit and says they have everything for the arm. What are they missing?
- [ ] Nothing, it is a complete kit :: A motor kit is the electronics only.
- [x] Printed parts, power supplies, and a camera :: Right. Motor kits cover the motors and boards. Read the parts list for plastic and power before you pay.
- [ ] Only the camera :: The printed parts and power supplies are missing too.
:::

## Your computer

Any recent laptop that runs Python handles the first half of the course: servos, building, puppeting, recording. No graphics card needed. Training a policy later needs a GPU for an hour or two, which you can rent.

LeRobot needs Python 3.12 or newer, on Linux, Mac, or Windows. Bring a spare USB port per arm and a table you can clamp to.

## Pick one now

No budget yet? Take the browser path and open the [bambot playground](https://bambot.org/play/so-arm100). Can spend about Rs 3,000? Order one STS3215, a Waveshare board, and a matching supply today. Either way, [Meet the arm](/robotics/lessons/meet-the-arm) is next, all in the browser.
`}))();export{t as default};