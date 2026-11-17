import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Ship your robot
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://huggingface.co/datasets/lerobot/svla_so100_sorting"
  - "https://huggingface.co/datasets?other=LeRobot"
  - "https://discord.gg/s3KuuzsPFb"
  - "https://huggingface.co/LeRobot-worldwide-hackathon"
  - "https://huggingface.co/spaces/LeRobot-worldwide-hackathon/all-winners"
  - "https://robotics.growbotics.ai/community/events/local/lerobot-hackathon-munich-2026"
  - "https://paris2026.gosim.org/unaite-hackathon/"
  - "https://huggingface.co/blog/amd/openroboticshackathon"
updated: 2026-09-23
---
# Ship your robot

A robot that only you have seen is a private hobby. A robot with a 30-second video, a public dataset, a trained policy, and a short write-up is something other people can learn from, copy, and hire you for. This lesson walks through all four, and where to post them. You will leave with a finished demo page for your robot.

## Film 30 seconds that prove it works

The video is what most people will ever see, so it has to answer one question fast: does the robot really do this on its own?

- **One continuous take.** No cuts during the task. A cut makes viewers wonder what you hid.
- **Hands visibly off.** Start with your hands in frame, away from the leader, then let the policy run.
- **Real speed, and say so.** If you speed it up, write "2x" on screen. Robot videos are sped up so often that an honest label stands out.
- **Show the start and the end.** Frame the cube's starting spot and the cup so a stranger understands the task with the sound off.
- **Steady phone, good light.** A phone propped on books beats one in your hand. The lamp you trained under is the lamp you film under.

Then add one more clip: a failure. Five seconds of the arm missing, next to your success rate, tells people you measured it honestly. It is also the clip other builders learn the most from.

## Put the dataset and the policy on the Hub

If you recorded with LeRobot, your datasets are already on the Hugging Face Hub, because \`lerobot-record\` uploads when a session ends. Your policies are there too if you trained with \`--policy.repo_id\`. Check both pages open while logged out, so you know strangers can see them.

If something stayed on your computer, the LeRobot guide gives the upload commands:

\`\`\`bash title="terminal"
hf upload \${HF_USER}/so101_cube_pick ~/.cache/huggingface/lerobot/\${HF_USER}/so101_cube_pick --repo-type dataset

hf upload \${HF_USER}/act_cube_pick outputs/train/act_cube_pick/checkpoints/last/pretrained_model
\`\`\`

Uploaded datasets get the \`LeRobot\` tag automatically, which is how people find them in the Hub's LeRobot list.

LeRobot writes a basic page for each dataset, called a dataset card, and leaves the description as "More Information Needed". Even Hugging Face's own sorting dataset still says that. Fill yours in. Open the dataset on the Hub, click Edit dataset card, and add four lines: the task in one sentence, the robot and cameras, how many episodes, and the policy trained on it with its success rate.

:::misconception
A dataset is not too small to share. LeRobot Worldwide Hackathon teams published datasets from 12 episodes up to a few hundred, and people still open the small ones to see how a task was demonstrated. Your 50 episodes of a cube pick are a useful example for the next beginner.
:::

## Write it up in one page

The write-up is where your video and numbers turn into something people can repeat. One page is enough. Copy this outline into a README on GitHub, a blog post, or the model card of your policy:

\`\`\`text title="write-up.md"
# <Robot name>: <the task in five words>

<The 30-second video, embedded or linked.>

What it does: <one sentence a stranger understands>.
Hardware: SO-101 leader and follower, <cameras and where they sit>, <anything you changed>.
Data: <N> episodes, link to the dataset on the Hub.
Policy: <ACT or SmolVLA>, trained <how many steps> on <which GPU>, link to the model.
How well: <successes> out of <trials>, likely between <low>% and <high>%, same <N> cube spots.
What went wrong: <the failure clip, and the one thing you would change next>.
How to reproduce: the record, train, and run commands you used.
\`\`\`

The "How well" line is the one most write-ups leave out. You already have it from [Retrain and compare](/robotics/lessons/retrain-and-compare); paste in the before and after chart too.

**Check: your write-up says "the arm picks the cube reliably". A reader asks how reliably. What should the line have said?**

Something like "17 out of 20, likely between 64% and 95%, over five cube spots". If you thought "reliably" was fine, the misconception is that a claim without a count tells anyone something. Every reader imagines a different number. A count and a range let them compare your robot with theirs, which is the reason to publish at all.

## Find your people

**The LeRobot Discord** is where builders of the SO-101, an open-source robot arm, gather, with the LeRobot team present. The invite linked from the LeRobot docs showed about 19,400 members on 23 September 2026. Post your video with your dataset and policy links, and when you ask for help, paste the exact error and the command that caused it.

**Hackathons** are the fastest way to build something big in a weekend, with arms provided and people to learn from. What we could confirm on 23 September 2026:

| Event | When | Notes |
|---|---|---|
| LeRobot Worldwide Hackathon | 14 to 15 June 2025 | Online and local, around the world; winners and every team's dataset are public |
| AMD Open Robotics Hackathon | 5 to 7 December 2025, Tokyo; 12 to 14 December 2025, Paris | SO-101 kits provided, teams of up to four |
| GOSIM Paris robotics hackathon | 5 to 6 May 2026 | OpenArm robots, remote access after a simulation round |
| LeRobot Worldwide Hackathon, Munich node | 13 to 15 June 2026 | SO-101 arms provided, teams of four to five |

All four are past. We found no confirmed dates for a hackathon later in 2026, and none hosted in India. Watch the LeRobot Discord's announcements and the Hugging Face hackathon organisation page for the next one, which has allowed remote teams before.

:::tip title="See what a winning demo looks like" href="https://huggingface.co/spaces/LeRobot-worldwide-hackathon/all-winners" label="LeRobot Worldwide Hackathon winners"
Scroll past the prize list to the ranked videos and watch the top three. Note how long each runs, whether the task is clear with the sound off, and whether you can see the robot working alone.
:::

## Go do this now

Film your 30-second take today, with the policy you already have. Upload it, fill in your dataset card's four lines, and post both links in the LeRobot Discord. You will have a public page for your robot that anyone can open, copy, and build on, and that is the course finished.
`}))();export{t as default};