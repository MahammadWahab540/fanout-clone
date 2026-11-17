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
updated: 2026-09-24
---
# Choose your path

## Getting the parts without a printer

You do not need a 3D printer to build the SO-101, an open-source robot arm. By the end of this lesson you will know the three ways to get the parts, which one fits your budget, and the checks to run on the box the day it arrives, before a single screw goes in.

### Three ways to get an arm

The SO-101 is two arms: the **follower**, which does the work, and the **leader**, which you move by hand. Each is a set of plastic parts, six Feetech STS3215 servos, a small controller board, and a power supply. The plastic is the only part that needs a printer, and you can buy it printed.

| Route | What you buy | Rough cost (checked 2026-09-23) |
|---|---|---|
| Kit with printed parts | Servos, boards, supplies, and printed plastic for both arms | about Rs 28,000 in India (ThinkRobotics); kits abroad about $199 to $380 |
| Parts plus a print service | The official parts list, and the plastic printed by a service from the free files | about $230 for the parts of a pair, plus printing |
| Your own printer | The parts list, and a printer you already own | the parts, plus about a day of printing |

**In India, buy the kit.** The research behind this course priced twelve servos, two boards, and two supplies bought loose at about Rs 27,000 to 30,000, which is the kit price without the plastic. The ThinkRobotics kit ships unassembled with 12 V servos on the follower, a 5 V and a 12 V supply, and four table clamps; it has no camera. It showed in stock on 2026-09-23, but stock moves, so check the page before you plan around a date.

**Abroad, compare the kit against the parts list.** The official bill of materials in the SO-ARM100 repository lists the parts for a pair at about $230 in the US, with links for the US, EU, China, and Japan. Many of the kit sellers it lists ship printed plastic too.

**If you are not ready to spend Rs 28,000,** do not. The one-servo path from [Choose your path](/robotics/lessons/choose-your-path) costs about Rs 3,000, and that servo becomes a joint of your arm later. Every lesson in this module still teaches in the browser.

### Ordering the plastic from a print service

The arm's plastic parts are free files, called STLs, in the SO-ARM100 repository. A print service takes those files and mails you the parts. The official printing guide walks through two services: Craftcloud, a marketplace that routes your order to printers in Europe and the US, and PCBWay in China, where the guide's own order for a leader and a follower came to about $95 before import tax.

Three things the guide says to get right, whichever service you use:

1. **Upload the individual part files.** There are 14 distinct parts. Nine are shared by both arms, so set their quantity to 2 if you build a pair. Do not upload \`SO101 Assembly.stl\`; it is a picture of the whole arm, not a part.
2. **Upload one mounting plate,** the Waveshare one or the Seeed one, to match your controller board.
3. **Ask for PLA+ at 20% infill.** Infill is how solid the inside of each part is printed.

If you own a printer, the repository's settings are PLA+, a 0.4 mm nozzle at 0.2 mm layers, 15% infill, and supports everywhere except slopes steeper than 45 degrees. Print the small gauge part first and test it against a servo before printing the rest.

:::tip title="Order the plastic from the official guide" href="https://github.com/TheRobotStudio/SO-ARM100/blob/main/3DPRINT.md" label="SO-ARM100: 3D printing services"
Open the guide and scroll to the Craftcloud section. Count the part files it tells you to upload for a pair, then compare that list with what a local print shop quotes you.
:::

### What should be in the box

For a leader and follower pair, lay out and count:

- **Twelve STS3215 servos.** Six for the follower, all with 1/345 gearing. Six for the leader, in three gear ratios: two at 1/191, one at 1/345, three at 1/147. The ratio is how many turns the motor makes for one turn of the output shaft; a lower ratio turns more freely by hand.
- **Two controller boards,** one per arm, each with a USB port and a power socket.
- **Two power supplies.** Their voltage must match the servos they feed.
- **Cables:** a 3-wire cable for every servo, and two USB cables.
- **Printed parts** for both arms, and **screws** in two sizes, M2 and M3, all 6 mm long.
- **Clamps** to hold each arm to the table.

Kits often leave out screwdrivers; the guide recommends Phillips #0 and #1.

### The three checks before you build

**Check the servo voltage against the supply.** The STS3215 comes in a 7.4 V version and a 12 V version. The official guide pairs 7.4 V servos with a 5 V supply and 12 V servos with a 12 V supply of at least 5 A. The leader is always 7.4 V. Many kits put 12 V servos on the follower, so you may have one supply of each.

**Sort the leader's servos by gear ratio.** Kits usually bag or mark them by ratio. If yours are not marked, ask the seller before you mix them; the next lessons put each ratio in a particular joint.

**Test-fit one servo in one printed holder.** It should slide in with a firm push and not rattle. A part that needs force to close, or that cracks, came off a printer that was printing too large; tell the seller now, not after assembly.

**You have a follower with 12 V servos and two supplies, one 5 V and one 12 V. Which supply powers the leader?**

The 5 V one. The leader always uses 7.4 V servos, and the official guide pairs those with the 5 V supply; the 12 V supply belongs to the follower. The wrong answer rests on the idea that any supply whose plug fits the socket is fine, since both plugs look the same. The plug tells you nothing about voltage. Label each supply with tape the day the kit arrives.

:::misconception
A bigger power supply is not a safer one. What must match is the voltage. The current rating only has to be at least what the servos draw; a 12 V supply on 7.4 V servos can damage them the first time they move.
:::

### Go do this now

Unpack your kit, lay the parts out, and run the three checks: supply voltages against servo voltages, leader servos sorted into three piles by gear ratio, and one servo test-fitted in one printed holder. Put a strip of tape on each supply saying "leader" or "follower". If you do not have a kit yet, open the parts list in the official repository and price your route. Next you will give every motor its name in [Give every motor its name](/robotics/lessons/configure-the-motors).
`}))();export{t as default};