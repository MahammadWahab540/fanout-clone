import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Fine-tune a model that reads
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/smolvla"
  - "https://huggingface.co/docs/lerobot/hardware_guide"
  - "https://huggingface.co/docs/lerobot/rename_map"
  - "https://huggingface.co/docs/lerobot/using_dataset_tools"
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://github.com/huggingface/lerobot/issues/3150"
  - "https://colab.research.google.com/github/huggingface/notebooks/blob/main/lerobot/training-smolvla.ipynb"
  - "https://huggingface.co/api/jobs/hardware"
  - "https://huggingface.co/docs/lerobot/async"
  - "https://huggingface.co/blog/async-robot-inference"
  - "https://huggingface.co/docs/lerobot/rtc"
  - "https://github.com/huggingface/lerobot/blob/v0.6.1/src/lerobot/async_inference/configs.py"
  - "https://github.com/Physical-Intelligence/openpi"
updated: 2026-09-23
---
# Fine-tune a model that reads

This lesson turns SmolVLA, the small instruction-reading policy from [the last lesson](/robotics/lessons/robots-that-read), into one that knows your table. You will record two tasks with two different sentences, combine them into one dataset, fine-tune on a rented or free GPU, and then pick the task at run time by changing one line of text.

## Two tasks, one sentence each

Pick two tasks that differ only in which object you touch. "Put the red cube in the cup." and "Put the blue cube in the cup." are ideal: same motion, same cup, and the only way to tell them apart is the words. If the policy does the right one, it read the instruction.

Write both sentences down now and never change a word. The model learns the exact text you record, and "the red cube" and "the red block" are different inputs to it.

## Record each task on its own

This step needs the full arm and both cubes on the table in every episode. If only the red cube is there when you record the red task, the policy can succeed by grabbing the only cube in sight and never learn to read.

Record the red task with the same command as [your first dataset](/robotics/lessons/record-your-first-dataset), changing only two flags:

\`\`\`bash title="terminal"
lerobot-record \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.id=my_follower \\
  --robot.cameras="{ top: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, wrist: {type: opencv, index_or_path: 1, width: 640, height: 480, fps: 30}}" \\
  --teleop.type=so101_leader \\
  --teleop.port=/dev/ttyACM1 \\
  --teleop.id=my_leader \\
  --dataset.repo_id=\${HF_USER}/red_in_cup \\
  --dataset.single_task="Put the red cube in the cup." \\
  --dataset.num_episodes=50 \\
  --dataset.episode_time_s=20 \\
  --dataset.reset_time_s=10
\`\`\`

Then run it again with \`blue_in_cup\` and the blue sentence. Swap which cube sits left and right between episodes, so position never gives the answer away.

How many? SmolVLA's guide recommends about 50 episodes for a task, spread across several object positions. It reports that a 25-episode version of its own dataset was not enough. So plan on 50 per sentence, 100 in all, about an hour of recording at these settings.

Then merge the two into one dataset. The tasks differ, but the columns match, so the merge from the LeRobot dataset-tools guide works as is:

\`\`\`bash title="terminal"
lerobot-edit-dataset \\
  --new_repo_id \${HF_USER}/two_cubes \\
  --operation.type merge \\
  --operation.repo_ids "['\${HF_USER}/red_in_cup', '\${HF_USER}/blue_in_cup']" \\
  --push_to_hub true
\`\`\`

We ran this merge with two tiny practice datasets on 23 September 2026. The merged dataset listed both sentences as separate tasks, index 0 and index 1, which is what you want.

## Fine-tune

This step needs a GPU. The command is the one in SmolVLA's guide, with two changes. \`--policy.path\` starts from the pretrained model instead of an empty one. \`--rename_map\` connects your camera names to the three slots SmolVLA expects, which the last lesson printed:

\`\`\`bash title="terminal"
lerobot-train \\
  --policy.path=lerobot/smolvla_base \\
  --dataset.repo_id=\${HF_USER}/two_cubes \\
  --rename_map='{"observation.images.top": "observation.images.camera1", "observation.images.wrist": "observation.images.camera2"}' \\
  --batch_size=8 \\
  --steps=20000 \\
  --output_dir=outputs/train/smolvla_two_cubes \\
  --job_name=smolvla_two_cubes \\
  --policy.device=cuda \\
  --policy.repo_id=\${HF_USER}/smolvla_two_cubes
\`\`\`

The third slot, \`camera3\`, stays empty; SmolVLA works with the images it gets. Without \`--rename_map\`, training stops at once with an error listing missing \`camera1\`, \`camera2\`, \`camera3\` and extra \`top\`, \`wrist\`. That exact error and this fix are in LeRobot issue #3150.

What it costs, from LeRobot's hardware guide and Hugging Face's price list on 23 September 2026:

| Where | Memory | Time, 50 episodes | Price |
|---|---|---|---|
| Rented L4 (HF Jobs \`l4x1\`) | 24 GB | about 3 to 6 hours at batch 4 | about $0.80 an hour |
| Rented A100 (\`a100-large\`) | 80 GB | about 1 to 2 hours at batch 16 | about $2.50 an hour |
| Free Colab T4 | 16 GB | not published; expect slower than an L4 | free, with time limits |

SmolVLA needs about 10 to 16 GB while training at batch 8, so a 16 GB T4 is at the edge. If it runs out of memory, drop to \`--batch_size=4\`. With 100 episodes the times above roughly double.

:::tip title="Fine-tune SmolVLA for free in Colab" href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/lerobot/training-smolvla.ipynb" label="LeRobot SmolVLA training notebook"
Choose Runtime, then Change runtime type, and pick a T4 GPU. In the training cell, replace the two \`YOUR_HF_USERNAME/...\` values with \`two_cubes\` and a model name, add the \`--rename_map\` line from above, and run the cells from the top.
:::

**Check: after training, you run the policy with the instruction "Grab the red one." It hesitates and picks the blue cube. Is the fine-tune broken?**

Probably not. It learned two sentences, and "Grab the red one." is neither of them. If you expected any wording to work, the misconception is that fine-tuning taught the model to understand requests about cubes. It taught it two exact instructions on your table. Run it again with "Put the red cube in the cup." word for word. The [voice lesson](/robotics/lessons/voice-commands) handles loose wording by having Claude pick the exact sentence first.

## Run it and switch tasks

This step needs the arm. The run command is SmolVLA's from its guide, with your names and the same rename map:

\`\`\`bash title="terminal"
lerobot-rollout \\
  --strategy.type=base \\
  --policy.path=\${HF_USER}/smolvla_two_cubes \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.id=my_follower \\
  --robot.cameras="{ top: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, wrist: {type: opencv, index_or_path: 1, width: 640, height: 480, fps: 30}}" \\
  --rename_map='{"observation.images.top": "observation.images.camera1", "observation.images.wrist": "observation.images.camera2"}' \\
  --task="Put the red cube in the cup." \\
  --duration=30
\`\`\`

The arm should reach for the red cube. Stop it, put the cube back, change only \`--task\` to the blue sentence, and run again. If it reaches for the other cube, one model is doing two jobs, chosen by words.

## Go do this now

Record ten episodes of each sentence, not fifty, merge them, and fine-tune for 2,000 steps. The policy will be weak, but run the two instructions and watch which cube it reaches for first. If it turns toward the right colour more often than not, the words are getting through, and the full 100 episodes are worth recording.

## A big brain on a server

Your laptop can run a small policy, but the bigger instruction-reading models need a GPU you probably rent by the hour. This lesson splits the robot in two: the model runs on a server with the GPU, the arm stays on your desk, and the two talk over the network. You will see what travels between them, why the arm stalls while it waits, and the one trick that hides the wait.

### Two computers, one robot

The split is simple. The computer next to the arm, called the **robot client**, reads the cameras and joints 30 times a second and sends them off. The computer with the GPU, called the **policy server**, runs the model and sends back a chunk of actions. The client plays the actions to the motors one at a time.

What travels each way:

| Direction | What | Roughly how big |
|---|---|---|
| Client to server | One observation: the camera pictures, six joint angles, the instruction text | about 1 MB per camera at 640 by 480, because the pixels go uncompressed |
| Server to client | One chunk: for example 50 actions of six numbers each | a few kilobytes |

The pictures are nearly all the traffic. In LeRobot's version, once the action queue runs low the client sends a fresh observation on every tick until the new chunk lands, so upload speed matters. Hugging Face measured round trips under 100 milliseconds on a local network with an RTX 4090. Over the internet, start with lower camera resolution and measure before you trust it.

### Why the arm stalls

Say the server needs 300 milliseconds from the moment the client sends a picture to the moment the chunk arrives. That is the **round trip**: network there, model thinking time, network back.

The simple way to run is to play the whole chunk, then ask for the next one. A chunk of 50 actions at 30 per second lasts about 1.7 seconds. Then the arm has nothing to do for 300 milliseconds while it waits. It moves, freezes, moves, freezes. Hugging Face measured about 100 milliseconds of thinking time for ACT on a 2021 MacBook Pro, about three frames at 30 per second, and bigger models take longer.

:::interactive name="ServerLatency"
Keep "Wait for each chunk" selected and drag the round trip to the server from 50 to 800 ms. Watch the highlighted gaps where the arm stalls grow. Then switch to "Ask early" and see the gaps close, until the round trip gets longer than a whole chunk.
:::

### Ask for the next chunk early

The fix is to send a new picture while the current chunk still has actions left. If the reply takes 300 milliseconds and you ask when about half a second of actions remain, the new chunk lands before the old one runs out. The arm never stops.

This small simulation plays 10 seconds of a 50-action chunk and counts how much of that time the arm is frozen. "Ask early" sends the next request when 25 actions are left:

\`\`\`python title="stall.py"
FPS = 30  # the arm plays one action every 1/30 s


def stalled_share(chunk, round_trip_ms, ask_when_left):
    """Share of 10 seconds the arm spends frozen, waiting for actions."""
    tick_ms = 1000 / FPS
    queue, waiting_until, frozen = chunk, None, 0
    for t in range(10 * FPS):
        now = t * tick_ms
        if waiting_until is None and queue <= ask_when_left:
            waiting_until = now + round_trip_ms  # send the camera frame now
        if waiting_until is not None and now >= waiting_until:
            queue, waiting_until = queue + chunk, None  # new chunk arrives
        if queue > 0:
            queue -= 1  # play one action
        else:
            frozen += 1
    return frozen / (10 * FPS)


for rtt in (100, 300, 600, 1200):
    wait = stalled_share(50, rtt, ask_when_left=0)
    early = stalled_share(50, rtt, ask_when_left=25)
    print(f"round trip {rtt} ms: frozen {wait:.0%} if you wait, {early:.0%} if you ask early")
\`\`\`

Before running it, guess the last line. Twenty-five actions last about 830 milliseconds. Then run it:

\`\`\`bash title="terminal"
uv run python stall.py
\`\`\`

\`\`\`output
round trip 100 ms: frozen 5% if you wait, 0% if you ask early
round trip 300 ms: frozen 15% if you wait, 0% if you ask early
round trip 600 ms: frozen 24% if you wait, 0% if you ask early
round trip 1200 ms: frozen 36% if you wait, 17% if you ask early
\`\`\`

Asking early removes the stall entirely as long as the round trip is shorter than the actions you have left when you ask. At 1.2 seconds it is not, so the arm freezes again, less often. The rule: ask when the actions left last longer than one round trip.

**Check: your arm stalls with a 600 ms round trip. A friend suggests shrinking the chunk from 50 actions to 10, so the model reacts faster. What happens?**

The stalls get worse. Ten actions last a third of a second, shorter than one round trip, so even asking the moment a chunk arrives cannot fill the gap. If you agreed, the misconception is that a shorter chunk always makes the robot more responsive. It makes each plan fresher, but only if the server can reply within one chunk. Over a slow link, keep chunks long and ask early.

### The LeRobot version

LeRobot builds this pattern in and calls it asynchronous inference. You start a policy server on the GPU machine and a robot client next to the arm. These commands are from LeRobot's async guide, with your names and SmolVLA's camera mapping. Install the extra pieces first: \`pip install 'lerobot[async,smolvla]'\` on the GPU machine and \`pip install 'lerobot[async]'\` next to the arm.

On the GPU machine:

\`\`\`bash title="terminal (server)"
python -m lerobot.async_inference.policy_server \\
  --host=0.0.0.0 \\
  --port=8080
\`\`\`

On the computer with the arm. This step needs the full arm, which moves on its own once the first chunk arrives:

\`\`\`bash title="terminal (arm)"
python -m lerobot.async_inference.robot_client \\
  --server_address=<server-ip>:8080 \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.id=my_follower \\
  --robot.cameras="{ camera1: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, camera2: {type: opencv, index_or_path: 1, width: 640, height: 480, fps: 30}}" \\
  --task="Put the red cube in the cup." \\
  --policy_type=smolvla \\
  --pretrained_name_or_path=\${HF_USER}/smolvla_two_cubes \\
  --policy_device=cuda \\
  --actions_per_chunk=50 \\
  --chunk_size_threshold=0.5
\`\`\`

\`--chunk_size_threshold=0.5\` is the "ask early" dial: the client sends a new picture once the queue of actions is half empty. LeRobot's guide found 0.5 to 0.6 to work well. Here the cameras are named \`camera1\` and \`camera2\` directly, because this client has no rename flag and SmolVLA expects those names.

:::note
Never expose port 8080 to the whole internet. The server trusts whatever connects to it. Use an SSH tunnel to the rented machine, or the private network your provider gives you.
:::

For big models such as pi0.5, LeRobot also has **real-time chunking**, turned on with \`--inference.type=rtc\` in \`lerobot-rollout\`. It starts the next chunk early too, and also bends its first actions to meet the motion already under way, so the handover is smooth.

### Go do this now

Run \`stall.py\`, then change \`ask_when_left\` from 25 to 40 and run it again. You will see the 1,200 ms row drop to 0% frozen, because 40 actions last longer than one round trip. That one number is the setting you will tune on a real link: measure your round trip, then ask early enough to cover it.
`}))();export{t as default};