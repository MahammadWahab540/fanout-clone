import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: The control loop
type: lesson
sources:
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/scripts/lerobot_teleoperate.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/configs/dataset.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/robots/so_follower/so_follower.py"
  - "https://huggingface.co/docs/lerobot/il_robots"
updated: 2026-09-23
---
# The control loop

Every robot that moves on purpose runs the same small loop: read where it is, decide where to go, send the command, and do it again, many times a second. In this lesson you slow that loop down in the browser until you can feel the lag, then measure in a dozen lines of Python why LeRobot runs it at 30 passes a second or faster.

## Read, decide, send, repeat

In [The arm copies your arm](/robotics/lessons/leader-follower) the loop had two lines: read the leader, send to the follower. Every robot program, from the one you ran in that lesson to a trained neural network, has the same shape:

1. **Read** the state: joint angles, and later camera pictures.
2. **Decide** the next goal. In puppet mode the decision is "copy the leader". Later it will be a trained program.
3. **Send** the goal to the motors.
4. **Wait** until it is time for the next pass, then repeat.

That repeating pattern is called the **control loop**. How many passes it makes each second is the loop rate, measured in hertz (Hz): 30 Hz means 30 passes a second, one every 33 milliseconds.

Between two passes the follower knows nothing new. It keeps chasing the last goal it was sent, while your hand on the leader has already moved on. Two things decide how bad that gets: how often the loop runs, and how late each reading is by the time it arrives.

## Feel the lag

The interactive below draws a leader path and a follower that only learns a new goal once per loop tick. Start at 30 Hz with no extra delay, then change one slider at a time.

:::interactive name="ControlLoopLag"
Drop the loop rate from 30 Hz to 5 Hz and watch the follower's trace turn into steps. Put the rate back to 30 and raise the extra delay to 150 ms: the trace is smooth again, but it arrives late. Watch the error number in both cases.
:::

**A low rate looks like steps. Delay looks like an echo.** Both make the follower's error, the gap between where the leader is and where the follower is, grow. They also feel different in your hand. Steps feel jerky. Delay feels like driving through syrup, and you start to overshoot because you see your mistakes too late.

## How fast is fast enough

Before running the code, guess: if the leader swings a joint 30 degrees each way once a second, how far behind can the follower get at 5 Hz? At 30 Hz?

This script measures the worst gap between the leader's angle right now and the angle the follower was last told, for three loop rates. It needs no hardware.

\`\`\`python title="loop.py"
import math

# The leader swings one joint 30 degrees each way, once a second.
def leader(t):
    return 30 * math.sin(2 * math.pi * t)

# The follower only learns the new target once per loop tick.
for rate in [5, 10, 30]:
    worst = 0.0
    for ms in range(0, 2000):
        t = ms / 1000
        last_tick = math.floor(t * rate) / rate
        worst = max(worst, abs(leader(t) - leader(last_tick)))
    print(f"{rate:>2} Hz: worst gap {worst:4.1f} degrees")
\`\`\`

\`\`\`output
 5 Hz: worst gap 35.1 degrees
10 Hz: worst gap 17.5 degrees
30 Hz: worst gap  6.2 degrees
\`\`\`

At 5 Hz the target can be more than the whole 30-degree swing out of date. At 30 Hz it is about 6 degrees, and the servo's own smooth motion hides most of that. Double the rate and the gap roughly halves.

:::tip title="See a real loop at 30 passes a second" href="https://lerobot-visualize-dataset.hf.space/hbseong/record-pick-and-place-so101/episode_0" label="LeRobot dataset visualizer: an SO-101 pick and place"
This public SO-101 recording shows FPS 30 in its sidebar. Pause the video and drag the playhead slowly through a fast arm motion in the joint plots: each line is drawn through one reading per pass of the loop, 33 milliseconds apart.
:::

This is why LeRobot records demonstrations at 30 frames a second by default, and why \`lerobot-teleoperate\` lets the loop run up to 60 passes a second unless you pass \`--fps\`. Faster than the servos and cameras can deliver buys nothing; each pass has to read six motors over the bus, and a camera frame when you add cameras.

**You add two cameras and the terminal shows the loop dropping from 30 Hz to 18 Hz. The leader's motion has not changed. Using the numbers above, what happens to the follower, and what should you try first?**

Change the list in \`loop.py\` to \`[18]\` and it prints a worst gap of 10.2 degrees, up from 6.2, so fast motions start to feel steppy. The misconception is that the servos got slower. They did not; the loop is spending longer on each pass reading camera frames, so the follower gets fewer goals. Try a lower camera resolution, or each camera on its own USB port, before anything else. The LeRobot docs say lighting matters more than resolution, so a smaller picture rarely costs you anything.

## The loop on your arm

With both arms connected, \`lerobot-teleoperate\` prints a line that keeps rewriting itself, in this format from the LeRobot source:

\`\`\`text
Teleop loop time: 16.67ms (60 Hz)
\`\`\`

The numbers here are an example of the format, not a measurement. Yours will differ. Run it three ways and write down the Hz each time:

1. The default command from the last lesson.
2. The same command with \`--fps=30\` added at the end.
3. The same command with \`--fps=5\`. Move the leader's wrist quickly and feel the follower step behind it.

Press Ctrl+C between runs, with the follower resting low. When you stop, LeRobot also prints a short summary of where each pass spent its time.

With one servo, the copycat project is the same loop with a recording in the middle. Play back at a low rate and you will see the same steps.

## Go do this now

In the ControlLoopLag plate above, set the rate to 5 Hz, and watch the steps. Then set it back to 30 and add 150 ms of delay, and watch the echo. Run \`loop.py\` with 60 added to the list and check whether the gap halves again; it should print about 3 degrees. With the arms, run teleoperation at \`--fps=5\` and then at 30, and feel the difference in your hand.
`}))();export{t as default};