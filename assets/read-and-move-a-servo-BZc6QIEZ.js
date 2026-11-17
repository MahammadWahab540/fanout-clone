import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Read a position, send a position
type: lesson
sources:
  - "https://github.com/huggingface/lerobot/blob/v0.6.1/src/lerobot/motors/motors_bus.py"
  - "https://github.com/huggingface/lerobot/blob/v0.6.1/src/lerobot/motors/feetech/feetech.py"
  - "https://github.com/huggingface/lerobot/blob/v0.6.1/src/lerobot/motors/feetech/tables.py"
  - "https://huggingface.co/docs/lerobot/so101"
  - "https://www.mantech.co.za/datasheets/products/sts3215-200620a-1.pdf"
  - "https://bambot.org/feetech.js"
updated: 2026-09-25
---
# Read a position, send a position

## Make one request

Now Python replaces the button. The program asks for 1024 counts, a quarter-turn, waits one second, then reads where the horn actually is. Click **Run Python** and compare the two numbers.

:::interactive name="ServoCode"
Real Python controls this teaching model. The first run downloads the Python runtime. Your edits save on this device.
:::

Change \`target = 1024\` to \`target = 3072\` and run again: 90 degrees becomes 270.

## Read after you write

\`move_to(target)\` sends a request. \`position()\` reads the sensor. \`await\` makes Python wait for each call before the next.

Try **Hold the horn**, pick a new target, and run. Release the horn before the next run. The program turns torque off when it ends, and **Stop** does the same.

:::check
You hold the horn and run the program with a new target. What does it print?
- [ ] Requested and measured match :: The request changes, but the horn cannot follow while you hold it.
- [x] Requested changes, measured stays where you hold it :: A successful write is not proof of movement. Your code needs the reading back.
:::

## The same calls on real hardware

The browser uses \`fanout_sim\`, a teaching API. A physical servo goes through LeRobot:

| What you want | Browser | LeRobot hardware |
|---|---|---|
| Read the angle | \`await servo.position()\` | \`bus.read("Present_Position", "joint", normalize=False)\` |
| Request an angle | \`await servo.move_to(target)\` | \`bus.write("Goal_Position", "joint", target, normalize=False)\` |

\`normalize=False\` keeps values in encoder counts. Calibration and degrees come when you build the arm.

## Run it on your servo

Download [move-hardware.py](/course-assets/robotics/workbench/move-hardware.py) and set \`PORT\` to your port. It requests a 500-count move, reads the result, and disconnects safely even if interrupted.

\`\`\`bash title="terminal"
python move-hardware.py
\`\`\`

It prints **Requested** and **Measured**, like the browser. Next, [add a second motor to the same wire](/robotics/lessons/many-motors-one-wire).
`}))();export{t as default};