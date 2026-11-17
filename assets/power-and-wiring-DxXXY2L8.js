import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Power and wiring without smoke
type: lesson
sources:
  - "https://github.com/TheRobotStudio/SO-ARM100"
  - "https://huggingface.co/docs/lerobot/so101"
  - "https://www.waveshare.com/wiki/Bus_Servo_Adapter_(A)"
  - "https://docs.waveshare.com/Bus_Servo_Adapter_A/Product-Wiring-Example"
  - "https://www.dfrobot.com/product-2961.html"
  - "https://www.mantech.co.za/datasheets/products/sts3215-200620a-1.pdf"
  - "https://thinkrobotics.com/products/so-arm101-hugging-face-lerobot"
  - "https://bambot.org/feetech.js"
updated: 2026-09-25
---
# Power and wiring without smoke

## Give commands a path

The small board between computer and servo is a **bus board**. USB brings commands to the board. A three-wire cable carries power, ground, and data on to the servo.

Connect **USB cable**, then **Servo cable**. Leave the motor supply off and read the message.

:::interactive name="ServoWiring"
Connected paths become solid. The message tells you what is missing.
:::

The computer can reach the board, but the motor has no power yet.

## USB is not motor power

Now connect **Motor supply**. USB carries commands and powers the board's chip. Turning a motor under load takes far more current than a USB port gives, so the motor gets its own supply.

:::check
USB and the servo cable are connected, the supply is off. You send a goal. What happens?
- [ ] The horn moves slowly on USB power :: USB does not feed the motor here. The motor has its own supply path.
- [x] Nothing moves :: The command arrives, but the motor has no power to turn.
:::

## Check the label before the plug

This setup pairs the 7.4 V servo with a 5 V supply, as in the official parts list. Some follower kits use a 12 V servo. A plug that fits proves nothing.

**Read the motor's voltage rating first.** The board passes supply power straight through, and 12 V can damage the 7.4 V servo.

In the diagram, try **a mismatched supply**. The simulator refuses it.

## Try one movement

With all three connections ready, send a goal.

:::interactive name="ServoPower"
A ready circuit moves the motor. Disconnect the supply in the wiring diagram, two cards back, and try again.
:::

When power drops, the motor stops driving. Reconnecting does not restart the movement; you send a new command.

## With real hardware

Unplug motor power before adding or removing servo cables. Set the board's two jumpers to **B** for USB, connect the servo, the correct supply, then USB. Keep the horn clear. Then find the port:

\`\`\`bash title="terminal"
lerobot-find-port
\`\`\`

It prints a port like \`/dev/ttyACM0\` or \`COM3\`. Next, [command the motor from Python](/robotics/lessons/read-and-move-a-servo).
`}))();export{t as default};