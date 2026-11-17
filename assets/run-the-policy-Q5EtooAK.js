import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Run the policy
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/inference"
  - "https://huggingface.co/docs/lerobot/act"
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/rollout/context.py"
  - "https://github.com/noah-wardlow/so101-policy-lab"
  - "https://github.com/huggingface/lerobot/issues/2213"
  - "https://huggingface.co/docs/lerobot/cameras"
  - "https://arxiv.org/abs/2304.13705"
  - "https://www.ml6.eu/en/blog/ai-robotics-a-field-report-on-imitation-learning-with-lerobot"
updated: 2026-09-23
---
# Run the policy

This is the moment the course has been building to: you put a cube on the table, start one command, and the arm picks it up with nobody touching the leader. In this lesson you will load your trained policy onto the follower, run it safely for the first time, and know what a good first run looks like. No arm yet? You can watch an ACT policy do the same task in a browser simulation.

## What changes from puppet mode

In puppet mode the loop was: read the leader, send its angles to the follower, repeat. Running a policy keeps the same loop and swaps one part. Thirty times a second the robot reads its cameras and joints, the policy turns them into the next actions, and the follower moves. The leader is not involved at all.

The command for this is \`lerobot-rollout\`. Older guides and videos use \`lerobot-record\` with a \`--policy.path\` flag for the same job; LeRobot's current docs, as of version 0.6.1, use \`lerobot-rollout\`.

## Before you press Enter

A policy moves the arm on its own, and a new one can move fast and in ways you did not expect. Set up the table the way it was when you recorded:

- **Same cameras in the same places.** A camera bumped a few centimetres is a different picture to the policy.
- **Same light.** If you recorded in the evening under a lamp, test under that lamp.
- **The cube where your demos put it.** Start with a position you recorded ten times, not a new one.
- **Clear space.** Nothing in reach that you do not want knocked over. Keep your hands out of the workspace while it runs.
- **Your hand near the power.** If the arm pushes against the table or something it should not, switch off the follower's supply. You lose nothing but the run.

## The command

This step needs the full arm and the trained policy from the [last lesson](/robotics/lessons/train-your-first-policy). The follower's port, \`id\`, and camera names must be the same ones you used when recording.

\`\`\`bash title="terminal"
lerobot-rollout \\
  --strategy.type=base \\
  --policy.path=\${HF_USER}/act_cube_pick \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.id=my_follower \\
  --robot.cameras="{ top: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, wrist: {type: opencv, index_or_path: 1, width: 640, height: 480, fps: 30}}" \\
  --display_data=true \\
  --duration=30
\`\`\`

What the flags mean:

- **\`--strategy.type=base\`** runs the policy without recording anything. It is the simplest mode, for trying things out.
- **\`--policy.path\`** is your model on the Hub. A local folder works too, such as \`outputs/train/act_cube_pick/checkpoints/last/pretrained_model\`.
- **\`--duration=30\`** stops after 30 seconds, long enough for a pick with room to spare.
- **\`--display_data=true\`** opens the Rerun viewer, so you can watch what the cameras send to the policy.

Once the policy has loaded, the follower starts moving on its own. It will reach for the cube, close the gripper, carry it, and let go, in roughly the rhythm you used when you recorded. When the 30 seconds are up it stops.

:::note
If the command stops at once with "Visual feature mismatch between policy and robot hardware", the camera names in \`--robot.cameras\` differ from the ones in your training data. Rename them to match; the error lists what the policy expects and what the robot provides.
:::

## What a good first run looks like

Do not expect perfection on the first try. A good first run reaches toward the cube, closes on it most times, and carries it in the right direction. The motion may look a little more hesitant than yours.

Run it five times with the cube in the same place, resetting by hand between runs. Write down each result: picked and placed, picked and dropped, missed, or did not move. That short list tells you more than any single run, and the [lesson on measuring](/robotics/lessons/measure-success) turns it into a number you can trust.

**Check: your policy picks the cube three runs out of three. You move the cube to the far corner of the table, where you never put it during recording, and it misses. Is the policy broken?**

No, it is doing what it was taught. A policy trained by imitation handles the situations its demonstrations showed, and the far corner was not one of them. If you concluded it was broken, the misconception is that the arm learned the idea of "pick up the cube wherever it is". It learned to copy your moves for the cube positions you recorded. To cover the corner, record episodes there.

## No arm: watch one run in the browser

The SO-101 Policy Lab runs a LeRobot ACT policy entirely in your browser, on a simulated SO-101 that picks a red cube and places it on a green target. It is a community project, not part of LeRobot, and its policy was trained on demos from a scripted teacher rather than a person.

:::tip title="Run an ACT policy on a simulated SO-101" href="https://so101-policy-lab.nmwardlow.workers.dev" label="SO-101 Policy Lab"
Wait for the model to load (about 137 MB the first time), press Run Policy, and watch the three small camera views the policy sees. Then press Randomize cube and run it again to see how it copes with a new position.
:::

## Go do this now

Run the command with your cube in its most-recorded position, five times in a row. You will see the arm reach and grasp on its own; write each result on paper. If the arm does not move at all, or shakes, the [next lesson](/robotics/lessons/run-the-policy) is where to go.

## When the policy fails

Your first policy will fail in some way, and every failure is a clue. A frozen arm, a shaking arm, and an arm that reaches for where the cube used to be each point to a different cause. This lesson is a field guide: five failures you are likely to meet, what each looks like, why it happens, and the one thing to change first.

### Read the failure before you retrain

The expensive mistake is to see a bad run and immediately record more data or train longer. Each costs an hour or more, and neither fixes a camera plugged into the wrong port. Watch three runs first, and name what you see in one sentence: "it never moves", "it shakes near the cube", "it goes to the same spot every time". That sentence picks the row below.

| What you see | Most likely cause | Change first |
|---|---|---|
| The arm does not move, or barely twitches | still frames in the demos, or a tiny batch size | trim the pauses, retrain with batch size 8 or more |
| The arm shakes or buzzes | policy asked too often, or undertrained | play more of each chunk; train longer |
| It reaches for the same spot wherever the cube is | the policy is not using the camera | check what the cameras show; vary cube positions |
| The command stops before moving | camera names differ from the dataset | use the dataset's camera names |
| It worked yesterday, fails today | the room light changed | test in the light you recorded in |

### Five failures, one at a time

#### The frozen arm

**What you see:** the policy starts, the follower holds the start pose, and nothing happens, or it creeps a few millimetres and stops.

**Why:** the policy learned that "do nothing" is the right answer in the start pose. That happens when many episodes begin with the arm still while you got ready, as you measured in [good demos, bad demos](/robotics/lessons/good-demos-bad-demos). In a LeRobot issue with exactly this symptom ([#2213](https://github.com/huggingface/lerobot/issues/2213)), community replies named two causes: still frames at the start of episodes, and training with a batch size of 1.

**Fix:** delete or re-record the episodes with long still starts, and retrain with \`--batch_size=8\` or more.

#### The jittery arm

**What you see:** the arm reaches toward the cube but vibrates on the way, with a buzzing sound, and may overshoot the grasp.

**Why:** each time the policy is asked, it is a little wrong in a new way, and the arm follows every correction. You saw this in [why predict a chunk of moves](/robotics/lessons/why-predict-chunks). An undertrained policy is less consistent, so its answers jump around more. ML6 saw jittery motion on their first ACT test, a checkpoint taken as soon as the loss flattened.

**Fix:** if you shortened \`n_action_steps\`, raise it back so the arm plays more of each chunk. If you did not, train longer than the point where the loss flattened.

#### The arm that reaches for where the cube used to be

**What you see:** the arm picks well when the cube is in its usual spot. Move the cube and it still reaches for the usual spot, grasps air, and carries nothing to the cup.

**Why:** the policy has learned the motion but not to look. There are two usual reasons. The camera may not show the cube clearly: it is small in the frame, hidden by the arm, or out of focus. Or the demos only put the cube in one or two places, so the policy never needed to look to succeed.

**Fix:** use the test from the LeRobot guide: could you do the task yourself watching only the camera feeds? If not, move the cameras. Then record episodes across several cube positions, about ten per position.

**Check: your arm reaches for the centre of the table every time. You check the top camera and the cube is clearly visible. Your 50 episodes used five cube positions, but 40 of them were in the centre. What do you change?**

Record more episodes at the four outer positions, until each has about as many as the centre. The camera is fine, so moving it would not help. If you picked "train longer", the misconception is that more training teaches the policy to look. Training only makes it copy the demos more closely, and 80% of your demos say "go to the centre", so going to the centre is a very good copy.

#### The camera name mismatch

**What you see:** the command stops before the arm moves, with an error that begins "Visual feature mismatch between policy and robot hardware". It lists what the policy expects and what the robot provides.

**Why:** the policy remembers the camera names from your dataset, such as \`top\` and \`wrist\`. If you named them \`front\` and \`hand\` in the run command, the policy cannot find its inputs. A related trap does not raise an error at all: the names match but the indexes are swapped, so the picture labelled \`top\` is really the wrist camera. The arm then moves oddly with no message.

**Fix:** copy the \`--robot.cameras\` value from your recording command. After unplugging cameras, run \`lerobot-find-cameras opencv\` and check each index still points at the same camera.

#### The change in light

**What you see:** the policy worked in the evening and fails in the morning, or works until someone opens the curtains.

**Why:** to the policy, the picture is all numbers, and changing the light changes nearly every number in it. ML6 found that their ACT policy, never shown camera dropouts or background changes during training, could not handle them when running.

**Fix:** test in the light you recorded in. For a setup that has to work at any hour, record under a steady lamp and close the curtains, rather than hoping the policy will cope.

:::tip title="Compare what the policy saw in training" href="https://lerobot-visualize-dataset.hf.space/lerobot/svla_so101_pickplace/episode_0" label="LeRobot dataset visualizer"
Open your own dataset (or this public one), pause on the first frame, and compare its camera pictures with what your cameras show right now in the Rerun window. Look for a shifted angle, a new shadow, or a swapped view.
:::

### Go do this now

Take your five results from the last lesson and write one sentence for each failure, in the words of the table's first column. Match each to a row, and make only the change in that row's last column before your next run. You will see which fix mattered because you changed one thing at a time.
`}))();export{t as default};