import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Train your first policy
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://huggingface.co/docs/lerobot/act"
  - "https://huggingface.co/docs/lerobot/hardware_guide"
  - "https://huggingface.co/docs/lerobot/notebooks"
  - "https://colab.research.google.com/github/huggingface/notebooks/blob/main/lerobot/training-act.ipynb"
  - "https://huggingface.co/docs/hub/jobs-pricing"
  - "https://research.google.com/colaboratory/faq.html"
  - "https://github.com/huggingface/lerobot/issues/2213"
  - "https://www.ml6.eu/en/blog/ai-robotics-a-field-report-on-imitation-learning-with-lerobot"
updated: 2026-09-23
---
# Train your first policy

Training is where your fifty demonstrations turn into a file the arm can run. It is one command, but it runs for an hour or more on a graphics card (GPU), so the choices you make before pressing Enter matter. This lesson shows you where to run it for free or for about a dollar, the three settings to get right, and how to tell from the numbers on screen whether it is working.

## Where to run it

Training needs an NVIDIA GPU or a recent Mac. A laptop without one is not enough; the LeRobot hardware guide's advice for CPU-only machines is "Don't train." You have three options:

| Where | Cost | Time for a first ACT run |
|---|---|---|
| Your own RTX 3090 or 4090 | electricity | about 30 to 60 minutes |
| Hugging Face Jobs, L4 or A10G | about $0.80 to $1.00 an hour (Sept 2026) | about 1 to 2 hours |
| Google Colab, free tier | free, when a GPU is available | slower; not officially timed |

The times are from the LeRobot hardware guide, for about 50 episodes of 30 seconds, and it says real runs vary by about half either way. An Apple M-series Max takes about 6 to 14 hours. So a first policy on a rented GPU costs roughly one to two dollars, or about Rs 100 to 200.

Colab is the free path. Its free tier gives you a GPU when one is free, runs a notebook for at most 12 hours, and disconnects if you leave it idle, so keep the tab open. LeRobot publishes a ready-made ACT notebook.

:::tip title="Train ACT for free in Colab" href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/lerobot/training-act.ipynb" label="LeRobot ACT training notebook"
Choose Runtime, then Change runtime type, and pick a T4 GPU. In the training cell, replace the two \`username/...\` values with your dataset and a model name, keep \`--batch_size=8\`, and run the cells from the top.
:::

## The command

This is the command from the LeRobot guide, with a batch size added. Use your own dataset repo id.

\`\`\`bash title="terminal"
lerobot-train \\
  --dataset.repo_id=\${HF_USER}/so101_cube_pick_clean \\
  --policy.type=act \\
  --output_dir=outputs/train/act_cube_pick \\
  --job_name=act_cube_pick \\
  --policy.device=cuda \\
  --batch_size=8 \\
  --policy.repo_id=\${HF_USER}/act_cube_pick
\`\`\`

Use \`--policy.device=mps\` on a Mac. To run it on Hugging Face's GPUs instead of your own, add \`--job.target=l4x1\` (it needs prepaid credit on your Hugging Face account). ACT reads your dataset and sets itself up for your six joints and your camera names on its own.

## Three settings to get right

**Batch size.** Training looks at a handful of frames at a time, called a batch, and nudges the network after each handful. The default is 8. Do not go lower. In a LeRobot issue about a trained arm that would not move, the first thing a community reply pointed at was the batch size of 1, with the advice to use at least 8 ([#2213](https://github.com/huggingface/lerobot/issues/2213)). If your GPU has spare memory, go higher; ML6 trained with 24.

**Steps.** One step is one batch. The default is 100,000 steps. The hardware guide says imitation learning usually settles after 5 to 10 passes over the dataset. Work out what that is for yours:

\`\`\`python title="steps.py"
import math

episodes, seconds, fps = 50, 20, 30   # your dataset
batch_size = 8
epochs = 8                            # the guide says 5 to 10 is usually enough

frames = episodes * seconds * fps
steps_per_epoch = math.ceil(frames / batch_size)
print(f"{frames} frames, {steps_per_epoch} steps per epoch")
print(f"train for about {epochs * steps_per_epoch} steps")
\`\`\`

\`\`\`output
30000 frames, 3750 steps per epoch
train for about 30000 steps
\`\`\`

Add \`--steps=30000\` to the command to stop there. ACT keeps a fixed learning rate, so shortening the run needs no other change. Leaving the default is also fine; it only takes longer.

**Camera names.** The policy remembers the camera names in your dataset, such as \`top\` and \`wrist\`. When you run it, the cameras must have the same names. Decide now, write them down, and do not rename them.

## What to watch while it trains

Every 200 steps, the terminal prints a line starting with the step count (\`step:\`), followed by how many frames it has seen, how many passes over the dataset (\`epch:\`), and the \`loss\`.

The loss is how far the policy's predicted actions are from yours, averaged over the batch. Lower is closer. A healthy run looks like this: the loss drops steeply in the first few thousand steps, then keeps creeping down more and more slowly until the line is almost flat.

Two shapes mean stop and look. A loss that jumps to a huge number or prints \`nan\` means training broke; restart with the default learning rate and batch size of at least 8. A loss that never drops at all usually means the dataset is wrong, for example the actions never change.

:::misconception
A low loss does not mean the arm will succeed. ML6, testing ACT on an SO-100, point out that the loss can be very low while the arm still fails because of a tiny position error, since a millimetre can separate a grasp from a miss. The only real test is running it, which is the [next lesson](/robotics/lessons/run-the-policy). ML6 also pass on the ACT author's advice to keep training well after the loss flattens, for smoother motion.
:::

**Check: after 20,000 steps your loss has been flat for a while and you are paying for a rented GPU. A friend says to stop because it has converged. Another says to let it finish. Who is right?**

Neither is fully right, and the check you need is on the arm. Stop the run, test the saved checkpoint on the robot, and continue training only if the motion is shaky. If you sided with "stop, it has converged" because the loss is flat, the misconception is that a flat loss means a finished policy; the loss measures closeness to your demos, not whether the grasp lands. Checkpoints are saved every 20,000 steps in \`outputs/train/act_cube_pick/checkpoints\`, and \`--resume=true\` carries on from the last one.

## Go do this now

Open the Colab notebook, point it at your cleaned dataset (or at \`lerobot/svla_so101_pickplace\` if you have no arm), set the batch size to 8, and start it. Within a few minutes you will see the first \`step:\` lines and a loss that is already falling. When it finishes, your model appears on your Hugging Face page, ready to run.
`}))();export{t as default};