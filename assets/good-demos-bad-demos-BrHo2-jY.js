import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Good demos, bad demos
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://huggingface.co/blog/lerobot-datasets"
  - "https://github.com/huggingface/lerobot/issues/2213"
  - "https://arxiv.org/abs/2304.13705"
  - "https://huggingface.co/datasets/lerobot/svla_so101_pickplace"
  - "https://huggingface.co/docs/lerobot/using_dataset_tools"
  - "https://huggingface.co/spaces/lerobot/visualize_dataset"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/scripts/lerobot_dataset_viz.py"
updated: 2026-09-23
---
# Good demos, bad demos

A robot trained on your demonstrations copies everything in them: the smooth reach, and also the two seconds you spent staring at the cube before you moved. This lesson shows you the three habits that quietly ruin a dataset and how to record around them. You will also measure one of them in a real public dataset with twenty lines of Python.

## The robot copies you, not the goal

The robot never learns "put the cube in the cup". It learns "when the scene looks like this and the joints are here, move like the person moved". Whatever you did in a situation, it will do in that situation.

That is good news when your moves are clean and bad news when they are not. Three habits cause most of the trouble.

## Habit one: standing still

Most people wait a moment after the recording starts. They look at the cube, get a grip on the leader, then go. Every one of those still frames says: "in the start pose, with the cube over there, the right action is to stay where you are."

Record fifty episodes that each start with two seconds of stillness and the start pose becomes a place where the robot has mostly seen you do nothing. When you run the policy, the arm sits in that pose and waits for itself. It is a common cause of a trained policy that does not move, and one of the causes community replies named in a LeRobot issue about exactly that ([#2213](https://github.com/huggingface/lerobot/issues/2213)).

:::interactive name="IdleFrames"
Drag the pause at the start of each episode from 0 to 3 seconds. Watch the share of "do nothing" frames rise, and the toy policy's speed at the start pose drop toward zero. Then press Trim and watch the speed come back.
:::

The fix is simple to say and takes practice: be holding the leader and ready before the episode starts, and move as soon as it does. When you finish early, press the right arrow instead of holding still until the timer runs out.

## Measure it in a real dataset

You can check any dataset for this. The script below takes \`lerobot/svla_so101_pickplace\`, a public set of 50 SO-101 pick-and-place episodes, and finds the first frame in each episode where any joint's action moves by more than 1 unit. Everything before that frame is stillness.

\`\`\`python title="check_episodes.py"
import numpy as np
import pandas as pd
from huggingface_hub import hf_hub_download

path = hf_hub_download(
    "lerobot/svla_so101_pickplace",
    "data/chunk-000/file-000.parquet",
    repo_type="dataset",
)
frames = pd.read_parquet(path)

still_frames = 0
for index, episode in frames.groupby("episode_index"):
    actions = np.stack(episode["action"].to_numpy())
    moved = np.abs(actions - actions[0]).max(axis=1) > 1.0  # more than 1 unit on any joint
    first_move = int(np.argmax(moved))
    still_frames += first_move
    if first_move > 45:  # more than 1.5 seconds before the arm moves
        print(f"episode {index}: {len(episode) / 30:.1f} s long, still for the first {first_move / 30:.1f} s")

print(f"{still_frames / len(frames):.0%} of all frames come before the first move")
\`\`\`

Run with \`uv run --with pandas --with pyarrow --with huggingface_hub --with numpy python check_episodes.py\`. Captured 23 September 2026:

\`\`\`output
episode 0: 10.1 s long, still for the first 3.0 s
episode 24: 7.4 s long, still for the first 1.6 s
episode 46: 10.1 s long, still for the first 1.7 s
episode 47: 8.6 s long, still for the first 2.4 s
11% of all frames come before the first move
\`\`\`

This is a carefully recorded dataset from the LeRobot team, and still about one frame in nine is waiting to start. Episode 0 spends almost a third of its length still. In your own data, change the repo id to yours and see where you land.

## Habit two: changing your mind

You reach left of the cube, notice, drift right, then grab. Or you grab from the front on some episodes and from the side on others. Each is a fine way to pick a cube. Mixed together, they show the robot two answers to the same picture.

A policy that sees two answers can end up averaging them, and the average of "go left" and "go right" is "go straight into the cube". Pick one way to grasp and use it every time. The LeRobot guide says the same: keep the grasping behaviour consistent.

## Habit three: variety in the wrong place

You want variety in where the cube starts, because that is what the robot must handle. The LeRobot guide suggests at least 50 episodes with about 10 per cube position, so five positions spread over the table.

You do not want variety in everything else. Keep the cameras fixed, the light steady, and your hands and the leader arm out of the camera view. If the only things that move in the picture are the follower and the cube, the robot has no other changes to be confused by. Add new variation, like a second cube colour, only after the plain version works.

:::misconception
More episodes do not fix inconsistent ones. Fifty episodes with three different grasp styles can train worse than thirty with one. Consistency first, then quantity.
:::

**Check: your friend records 50 episodes with the cube always in the exact centre of the table, perfectly and without a pause. The trained arm picks the centre cube every time. You move the cube 8 cm left. What happens, and which habit caused it?**

The arm most likely reaches for the centre anyway, or hovers and misses. This is habit three from the other side: the demos were clean but had no variety in the one place it was needed. If you blamed idle frames, the misconception is that clean recordings are enough. A robot only knows the situations its demos showed it, so the cube's position has to vary across episodes.

:::tip title="Read the dataset checklist" href="https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset" label="Hugging Face: what makes a good dataset"
Scroll to the checklist under "What Makes a Good Dataset?" and tick off each line against your own setup: two camera views, steady light, the leader arm out of frame, a static background.
:::

## Go do this now

Before your real session, record three practice episodes and run \`check_episodes.py\` on them with your own repo id. If any episode is still for more than a second at the start, practise starting the move the moment you hear "recording episode", then record the fifty.

## Look at your data

A training run takes an hour or more, and a single broken episode can quietly spoil it. Ten minutes of looking first is the cheapest insurance you will buy in this course. This lesson gives you three ways to look (in the browser, as numbers, and on the arm itself) and one command to delete the episodes that fail.

### What you are looking for

You are checking each episode against one question: would you be happy if the robot did exactly this? Four problems come up again and again:

- **A failed or fumbled attempt** you meant to re-record and did not.
- **A long pause** at the start or in the middle.
- **A camera problem:** a frozen frame, a black frame, a hand or the leader arm in view.
- **An episode far longer than the rest,** which usually hides one of the above.

### Look in the browser

If your dataset is on the Hub, the LeRobot visualizer shows every episode as camera videos with the joint plots underneath, on one timeline. Paste your repo id into it. With no dataset of your own yet, use the public \`lerobot/svla_so101_pickplace\`.

:::tip title="Find the still stretches in one episode" href="https://lerobot-visualize-dataset.hf.space/lerobot/svla_so101_pickplace/episode_46" label="LeRobot dataset visualizer"
Play episode 46 and find the two places where every joint line goes flat: about the first 1.7 seconds, and the last second. Then open a few other episodes from the list and compare how long their flat start is.
:::

Flat lines where you expected motion are pauses. A line that jumps straight up and down in one frame usually means a bad reading. The gripper line should rise as the gripper opens for the cube, drop when it closes on it, and rise again when it lets go.

The same view, drawn from a synthetic episode, is on this page. Use it to practise reading the plots against the picture.

:::interactive name="EpisodeScrubber"
Drag the playhead to where the gripper trace drops. Check that the scene shows the gripper closing on the cube at that same frame. In a real dataset, a gripper that closes on nothing is an episode to delete.
:::

### Let a script flag the odd ones

Scrolling through fifty episodes by eye is slow. A few lines of Python can point you at the ones worth a look. This one flags any episode more than 30% longer than the median, and any where the gripper never opened wide.

\`\`\`python title="flag_episodes.py"
import numpy as np
import pandas as pd
from huggingface_hub import hf_hub_download

path = hf_hub_download(
    "lerobot/svla_so101_pickplace",
    "data/chunk-000/file-000.parquet",
    repo_type="dataset",
)
frames = pd.read_parquet(path)

lengths = frames.groupby("episode_index").size() / 30  # seconds
print(f"median episode: {lengths.median():.1f} s")

for index, episode in frames.groupby("episode_index"):
    gripper = np.stack(episode["action"].to_numpy())[:, 5]  # joint 6, 0 = closed
    problems = []
    if lengths[index] > 1.3 * lengths.median():
        problems.append(f"long ({lengths[index]:.1f} s)")
    if gripper.max() < 15:
        problems.append("gripper never opened wide")
    if problems:
        print(f"episode {index}: " + ", ".join(problems))
\`\`\`

Captured 23 September 2026 with \`uv run --with pandas --with pyarrow --with huggingface_hub --with numpy python flag_episodes.py\`:

\`\`\`output
median episode: 7.7 s
episode 0: long (10.1 s)
episode 41: long (10.2 s)
episode 46: long (10.1 s)
\`\`\`

Three episodes to watch, not fifty. No episode tripped the gripper check, which is what you want. In your own data, change the repo id and replace the 15 with a value that suits your gripper; it is on a 0 (closed) to 100 (open) scale in this dataset. The script finds candidates. You still watch each one and decide.

**Check: the script flags episode 12 as long. You watch it and the pick is clean, but you paused for four seconds with the cube in the gripper to scratch your nose. Delete it or keep it?**

Delete it. The pick is fine, but the robot learns that holding the cube in mid-air is something to do for four seconds, and a policy trained on it can freeze at that pose. If you would keep it because the task succeeded, the misconception is that the robot learns the outcome. It copies the motion, pauses included.

### Replay it on the arm

With the full arm, one more check is worth doing on two or three episodes. \`lerobot-replay\` sends an episode's recorded actions back to the follower, so the arm repeats your demonstration with nobody on the leader. The follower will move through the whole recorded motion, so clear the table around it first.

\`\`\`bash title="terminal"
lerobot-replay \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.id=my_follower \\
  --dataset.repo_id=\${HF_USER}/so101_cube_pick \\
  --dataset.episode=0
\`\`\`

Put the cube where it was at the start of that episode. If the replay picks it up, the recording is sound and the arm can physically do what the data asks. If it misses by a centimetre or two, that is normal. If it misses badly, check that you used the same \`robot.id\`, and so the same calibration, as when you recorded.

### Remove the bad ones

\`lerobot-edit-dataset\` deletes episodes by number. Writing to a new repo id keeps the original, so you can change your mind:

\`\`\`bash title="terminal"
lerobot-edit-dataset \\
  --repo_id \${HF_USER}/so101_cube_pick \\
  --new_repo_id \${HF_USER}/so101_cube_pick_clean \\
  --operation.type delete_episodes \\
  --operation.episode_indices "[12, 31]"
\`\`\`

Train on the clean one.

### Go do this now

Run \`flag_episodes.py\` on your own dataset, or on the public one if you have no arm. Open each flagged episode in the visualizer and write down, for each one, "keep" or "delete" and the reason. When you have a list, you are ready to [meet the thing that learns from it](/robotics/lessons/what-a-policy-is).
`}))();export{t as default};