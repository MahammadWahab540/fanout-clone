import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Many motors, one wire
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/so101"
  - "https://github.com/huggingface/lerobot/blob/v0.6.1/src/lerobot/motors/feetech/feetech.py"
  - "https://github.com/huggingface/lerobot/blob/v0.6.1/src/lerobot/motors/feetech/tables.py"
  - "https://pypi.org/project/feetech-servo-sdk/"
  - "https://www.kevsrobots.com/resources/how_it_works/bus-servos.html"
  - "https://www.dfrobot.com/product-2961.html"
  - "https://bambot.org/feetech.js"
updated: 2026-09-25
---
# Many motors, one wire

## Give the command an address

Two servos share one data line, called a **bus**. Every servo hears every message and checks the ID inside it. Only the matching motor acts.

Select **Motor ID 2**, send a goal, and watch which horn turns.

:::interactive name="ServoBus"
Two copies of the same servo on one bus. The cable is schematic: this shows addressing, not electrical timing.
:::

## Break it on purpose

Switch on **Give both motors ID 1**. Send a goal to ID 1, then to ID 2.

:::check
Both motors have ID 1. You send a goal to ID 2. What moves?
- [ ] The second motor :: It now answers to ID 1, not 2.
- [ ] Both motors :: Both obey ID 1. Nobody answers to ID 2 any more.
- [x] Nothing :: No motor has ID 2, so the message has no taker.
:::

Moving a motor to another socket does not change its ID. That is why you [name each motor alone](/robotics/lessons/configure-the-motors) before chaining them.

## Look inside one message

On the first card, open **See the command bytes** under the bus demo. The ID is the third byte. The last byte is a **checksum**, computed from the message so a damaged packet can be spotted.

\`\`\`python title="packet.py"
def goal_packet(motor_id, position):
    body = [motor_id, 5, 3, 42, position & 255, position >> 8]
    return bytes([255, 255, *body, ~sum(body) & 255])

print(goal_packet(2, 1024).hex(" ").upper())
\`\`\`

\`\`\`output
FF FF 02 05 03 2A 00 04 C7
\`\`\`

42 is the goal-position slot. The two position bytes carry 1024, low byte first. The library builds these for you.

## One name per motor

Duplicate IDs also break reading: two motors answer at once and the board cannot separate their replies. A unique ID per motor fixes the cause.

Turn the duplicate switch off. You now have every piece of a sequence: read a position, save it, send it back. Next, [make the servo copy your movement](/robotics/lessons/copycat-servo).
`}))();export{t as default};