import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Robots that read instructions
type: lesson
sources:
  - "https://huggingface.co/blog/smolvla"
  - "https://arxiv.org/abs/2506.01844"
  - "https://huggingface.co/docs/lerobot/smolvla"
  - "https://huggingface.co/lerobot/smolvla_base"
  - "https://github.com/huggingface/lerobot/issues/1763"
  - "https://github.com/Physical-Intelligence/openpi"
  - "https://www.physicalintelligence.company/blog/pi05"
  - "https://github.com/NVIDIA/Isaac-GR00T"
  - "https://github.com/allenai/molmoact2"
  - "https://huggingface.co/docs/lerobot/hardware_guide"
  - "https://huggingface.co/datasets/lerobot/svla_so100_sorting"
  - "https://huggingface.co/spaces/lerobot/robot-learning-tutorial"
updated: 2026-09-23
---
# Robots that read instructions

The policy you trained does one thing: it sees the cube and picks it. It cannot tell "the red one" from "the blue one", because nobody ever gave it words. This lesson introduces policies that take a sentence as well as camera pictures, what they add, and why a downloaded one will not work on your arm until you teach it your setup. You will read the input list of a real one in five lines of Python.

## Your ACT policy cannot take an order

Look at what went into your first policy: two camera pictures and six joint angles, 30 times a second. Out came the next chunk of moves. Nothing in that list is a word. The sentence you typed into \`--dataset.single_task\` was stored with the dataset, but ACT never reads it.

So to get two tasks, you would train two policies and pick one by hand. That works for two tasks. It does not work for "put the red cube in the cup, then the blue one".

## A policy with a sentence as an input

A **vision-language-action model**, or **VLA**, is a policy with one more input: an instruction in plain words. Inside, most of it is a model that was first trained on huge amounts of images and text, so it already knows what "red", "cube", and "left" look like. A smaller part on top, often called the action expert, turns that understanding plus the joint angles into a chunk of moves.

The words change what the arm does. Same scene, same pose: "the red one" and "the blue one" now lead to different actions, because the sentence is part of what the policy sees.

Here is a real instruction from a public SO-100 dataset that Hugging Face recorded for its own VLA:

\`\`\`text title="lerobot/svla_so100_sorting, every episode"
Put the red cube in the right box and the blue cube in the left box.
\`\`\`

## The ones you will hear about

| Model | From | Size, roughly | What to know |
|---|---|---|---|
| SmolVLA | Hugging Face, June 2025 | 450 million parameters | Built for arms like yours. Pretrained on community SO-100 datasets. Fine-tunes on one GPU with about 16 GB. |
| pi0 and pi0.5 | Physical Intelligence | about 3.5 billion | Strong general skills. Running it needs a GPU with more than 8 GB; fine-tuning with LoRA more than 22.5 GB (openpi README). |
| GR00T N1.7 | NVIDIA | about 3 billion | Aimed at humanoid robots. LeRobot supports it; training wants a 40 GB class GPU. |
| MolmoAct2 | Ai2, May 2026 | about 5 billion (SO-100/101 checkpoint) | Reasons about where to move before it acts. Has an SO-100/101 checkpoint; LeRobot's own table shows fine-tuning needs about 16 to 60 GB. |

The sizes and memory come from each project's page and LeRobot's hardware guide, checked 23 September 2026. For this course, SmolVLA is the one to start with: it is the only one you can fine-tune on a free or cheap GPU. The others become options when you rent a big one, which is the [server lesson](/robotics/lessons/fine-tune-smolvla).

## Why the download does nothing useful

Load \`smolvla_base\`, point it at your arm, type an instruction, and the arm will most likely move to one pose and stop. That is not a bug in your setup. Users reported exactly this on the LeRobot tracker (issue #1763): without fine-tuning, the arm gets stuck at a fixed position. SmolVLA's own guide says it plainly: it is a base model, and fine-tuning on your own data is required.

You can see one reason by reading what the model expects. This fetches its config file from the Hub and prints its inputs. It needs internet but no GPU:

\`\`\`python title="inspect_smolvla.py"
import json
import urllib.request

url = "https://huggingface.co/lerobot/smolvla_base/resolve/main/config.json"
config = json.load(urllib.request.urlopen(url))

for name, spec in config["input_features"].items():
    print(name, spec["shape"])
print("actions per chunk:", config["chunk_size"])
\`\`\`

Run it (output captured 23 September 2026):

\`\`\`bash title="terminal"
uv run python inspect_smolvla.py
\`\`\`

\`\`\`output
observation.state [6]
observation.images.camera1 [3, 256, 256]
observation.images.camera2 [3, 256, 256]
observation.images.camera3 [3, 256, 256]
actions per chunk: 50
\`\`\`

It expects three cameras named \`camera1\`, \`camera2\`, and \`camera3\`. You have \`top\` and \`wrist\`, in places no camera in its training data sat. Your arm's calibration, your table, your lamp, and your cube are all new to it too. A VLA knows words and general skills. It does not know your arm until it has watched your arm.

**Check: a friend with an SO-101, the same open-source arm you built, says SmolVLA was trained on SO-100 data, the SO-101 moves the same way, so the base model should work on it without training. What do you tell them?**

That matching arm hardware is the smallest part of the gap. The cameras are in different places and have different names, the calibration puts the joint zeros somewhere else, and the lighting and objects are new. If you agreed with the friend, the misconception is that a policy learns the arm. It learns the link between the pictures it saw and the moves that followed, and your pictures are ones it has never seen. About 50 of your own episodes close that gap.

## What a VLA does and does not add

What you gain is one policy for several tasks, picked by a sentence, and a head start: it has seen many arms do many things, so it often needs fewer of your demos for a new task than a policy trained from nothing. What you do not gain is understanding of any sentence at all. A SmolVLA fine-tuned on "red in the cup" and "blue in the cup" knows those two jobs. Ask it to stack the cubes and you are back to guessing.

:::misconception
A VLA does not follow any instruction you type. It follows the instructions it was fine-tuned on, plus close rewordings. Keep your instructions exactly as you recorded them, word for word.
:::

:::tip title="See the instruction a VLA trains on" href="https://huggingface.co/spaces/lerobot/visualize_dataset?path=%2Flerobot%2Fsvla_so100_sorting%2Fepisode_0" label="LeRobot dataset visualizer: svla_so100_sorting"
Wait for the episode to load, then read the Language Instruction box under the two camera views. Press play and watch the arm sort both cubes, then check a few other episodes in the list on the left: the sentence is the same in every one.
:::

## Go do this now

Run \`inspect_smolvla.py\`, then open the sorting dataset in the visualizer above and read the names on its two camera panels: \`observation.images.top\` and \`observation.images.wrist\`. Put the two lists side by side and you will see three camera slots the model expects and two cameras the dataset has, with no names in common. That mismatch, multiplied by every other difference between their table and yours, is what the [next lesson](/robotics/lessons/fine-tune-smolvla) closes.
`}))();export{t as default};