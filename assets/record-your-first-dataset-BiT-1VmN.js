import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Record your first dataset
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://huggingface.co/docs/lerobot/cameras"
  - "https://huggingface.co/docs/lerobot/lerobot-dataset-v3"
  - "https://colab.research.google.com/github/huggingface/lerobot/blob/main/examples/notebooks/quickstart.ipynb"
updated: 2026-09-23
---
# Record your first dataset

A robot learns a task from a pile of recorded attempts, and this lesson is where you make the pile. You will run one command that records fifty episodes of a cube pick, with a pause between each to put the cube back. You will also set it up so the session takes about half an hour instead of two.

## What a session looks like

A recording session is a loop you and the computer run together. The computer says "recording episode 1". You pick the cube with the leader and drop it in the cup. The computer says "reset the environment", and you put the cube back somewhere new. Then it starts episode 2.

Two numbers control the rhythm: how long each episode may last, and how long you get to reset. Both default to 60 seconds. Fifty episodes at those defaults is 50 times 120 seconds, which is 100 minutes of standing at the desk. A cube pick takes about 10 seconds, so most of that time you would be waiting.

Set the episode to 20 seconds and the reset to 10, and the same fifty episodes take 25 minutes. If you finish a pick early, a key press ends the episode at once, so 20 seconds is a ceiling, not a wait.

## The command

This step needs the full arm: leader, follower, and at least one camera. Before you start, log in to Hugging Face so the dataset can be uploaded when you finish. The LeRobot guide uses these two lines:

\`\`\`bash title="terminal"
hf auth login --token \${HUGGINGFACE_TOKEN} --add-to-git-credential
HF_USER=$(NO_COLOR=1 hf auth whoami | awk -F': *' 'NR==1 {print $2}')
\`\`\`

Then record. Use the same ports and the same \`id\` values you used when you calibrated, or LeRobot treats the arms as uncalibrated. Nothing moves on its own here: the follower only copies the leader in your hand.

\`\`\`bash title="terminal"
lerobot-record \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.id=my_follower \\
  --robot.cameras="{ top: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, wrist: {type: opencv, index_or_path: 1, width: 640, height: 480, fps: 30}}" \\
  --teleop.type=so101_leader \\
  --teleop.port=/dev/ttyACM1 \\
  --teleop.id=my_leader \\
  --display_data=true \\
  --dataset.repo_id=\${HF_USER}/so101_cube_pick \\
  --dataset.single_task="Pick up the cube and put it in the cup" \\
  --dataset.num_episodes=50 \\
  --dataset.episode_time_s=20 \\
  --dataset.reset_time_s=10
\`\`\`

A few of those flags carry decisions you will live with later:

- **\`top\` and \`wrist\`** are the names of your cameras. The policy you train will expect exactly these names, so pick them once and never change them.
- **\`single_task\`** is the sentence stored with every episode. Write what the robot should do, in plain words.
- **\`repo_id\`** is where the dataset goes on the Hub. On your computer it is saved in \`~/.cache/huggingface/lerobot/\` first.

If your cameras are at other indexes, \`lerobot-find-cameras opencv\` lists them.

## Three keys to know by heart

While it records, three keys steer the session (from the LeRobot guide):

| Key | What it does |
|---|---|
| Right arrow or \`n\` | End this episode or this reset now and move on |
| Left arrow or \`r\` | Throw away this episode and record it again |
| Escape or \`q\` | Stop, save the videos, and upload |

The left arrow is the one that saves datasets. You will fumble a grasp, knock the cup, or pause to think. Press it straight away and do the episode again. A bad episode you keep costs you more later than the ten seconds it takes to redo it.

**Check: you are on episode 31 and the gripper slips, the cube falls, and you pick it up again on the second try. The cube ends in the cup. Keep it or re-record?**

Re-record it with the left arrow. The episode ends in success, but the robot does not learn "succeed", it learns to copy every move in the episode, including the slip. If you would keep it because the cube ended in the cup, the misconception is that the robot learns the result. It learns the motion. The [next lesson](/robotics/lessons/good-demos-bad-demos) is about exactly this.

## What you will see

The terminal announces each episode and each reset. With \`--display_data=true\`, a Rerun window opens with both camera feeds and the joint plots, so you can see what the robot is seeing while you work. When you keep an episode, LeRobot prints one line about how steady the loop was. The guide shows this example for a 20-second episode:

\`\`\`text title="terminal (example from the LeRobot guide)"
Cadence (episode 0): 29.88 Hz vs 30 Hz target · 600 ticks, 20.0 s measured · 8/599 ticks over the 33.3 ms budget (work mean 18.4 ms, worst 45.1 ms)
\`\`\`

Read the first number. It should sit close to 30. If it says 22 or 25, the computer could not keep up, usually because of the cameras, and the recorded motion will play back faster than you moved. Lower the camera resolution or plug the cameras into different USB ports before you record more.

:::note
If the session crashes at episode 30, you do not lose the first 29. Run the same command again with \`--resume=true\`, set \`--dataset.num_episodes\` to the number of episodes still to record, and add \`--dataset.root\` pointing at the local folder.
:::

No arm yet? The quickstart notebook below builds this exact command from a few settings, so you can see how the pieces fit before your kit arrives.

:::tip title="Generate your own record command" href="https://colab.research.google.com/github/huggingface/lerobot/blob/main/examples/notebooks/quickstart.ipynb" label="LeRobot quickstart notebook"
Open the Configuration cell, change the task sentence and the number of episodes, and read the \`lerobot-record\` command the notebook prints under section 3. It is the same shape as the one above.
:::

## Go do this now

Record five episodes first, not fifty: set \`--dataset.num_episodes=5\` and a new \`repo_id\`. When it uploads, paste \`<your-name>/<repo-name>\` into the [LeRobot dataset visualizer](https://huggingface.co/spaces/lerobot/visualize_dataset) and you will see your five episodes, with your own camera videos above the joint plots. Then read the next lesson before you record the real fifty.
`}))();export{t as default};