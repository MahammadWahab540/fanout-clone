import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Take over when it fails
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/hil_data_collection"
  - "https://github.com/huggingface/lerobot/blob/v0.6.1/src/lerobot/rollout/strategies/dagger.py"
  - "https://github.com/huggingface/lerobot/blob/v0.6.1/src/lerobot/rollout/configs.py"
  - "https://huggingface.co/docs/lerobot/using_dataset_tools"
  - "https://arxiv.org/abs/1011.0686"
  - "https://github.com/SRA-VJTI/karma"
updated: 2026-09-23
---
# Take over when it fails

The last lesson showed that a policy drifts into poses your demos never covered. This lesson gets you the missing examples: the policy drives, you watch, and when it starts to go wrong you pause it, steer it back with the leader, and hand control back. You will run that session with one LeRobot command and end with a small dataset made only of your rescues.

## The loop, in three keys

LeRobot calls this mode DAgger, after [the 2011 idea](/robotics/lessons/why-copying-drifts), and runs it through \`lerobot-rollout\`, the command you used to [run the policy](/robotics/lessons/run-the-policy). Three keys drive it (from the LeRobot source, version 0.6.1):

| Key | What happens |
|---|---|
| Space | Pause the policy. The follower holds still, and the leader's motors move it to match the follower. Press again to hand control back to the policy. |
| Tab | While paused: start a correction. The leader goes limp, you steer, and every frame is recorded. Press Tab again to stop and save that correction as one episode. |
| Escape | End the session and save. |

The leader moving on its own at the pause is what makes the handover smooth. Without it, the follower would jump to wherever your hand left the leader. It moves slowly, but keep your fingers off the leader's joints until it stops.

In the default mode only your corrections are saved, one episode each. The policy's own driving is not recorded, because your demos already cover the parts it does well.

## The command

This step needs the full arm, both leader and follower, and the ACT policy you trained. Use the same ports, \`id\` values, and camera names as when you recorded. Once the policy loads, the follower moves on its own, as in the last module. Keep one hand near the Space bar and the other near the follower's power switch.

\`\`\`bash title="terminal"
lerobot-rollout \\
  --strategy.type=dagger \\
  --strategy.num_episodes=20 \\
  --policy.path=\${HF_USER}/act_cube_pick \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.id=my_follower \\
  --robot.cameras="{ top: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, wrist: {type: opencv, index_or_path: 1, width: 640, height: 480, fps: 30}}" \\
  --teleop.type=so101_leader \\
  --teleop.port=/dev/ttyACM1 \\
  --teleop.id=my_leader \\
  --dataset.repo_id=\${HF_USER}/rollout_cube_fixes \\
  --dataset.single_task="Pick up the cube and put it in the cup" \\
  --display_data=true
\`\`\`

Three flags matter:

- **\`--strategy.num_episodes=20\`** stops after twenty saved corrections.
- **\`--dataset.repo_id\`** must have a name starting with \`rollout_\`. LeRobot refuses any other name for datasets recorded while a policy runs, so you can always tell them apart from your hand-made demos.
- **\`--dataset.single_task\`** should be the exact sentence from your original dataset, so the two can be combined later.

:::note
Use the leader arm here, not the phone or keyboard. The pause step drives the leader's motors to match the follower, and LeRobot's guide lists only leader arms with motors as supported for this mode.
:::

## When to press Space

Intervene before the mistake, not after it. The LeRobot guide names three signs: the arm is about to do something it cannot undo, it hesitates, or it leaves the path you would have taken. On a cube pick that usually means the gripper is lining up beside the cube instead of over it, or the arm is carrying the cube toward the wrong side of the cup.

A good correction has two parts. First, the **recovery**: steer the arm back to a pose that looks like your demos, gripper open and above the cube. Then the **correction**: finish that part of the task cleanly, as you would in a demo. Then press Tab, and Space to let the policy carry on.

:::interactive name="CompoundingError"
Choose "A person (DAgger)" and step from training round 1 to round 2. Notice that the known band grows only where the person stepped in. Corrections teach the spots where the policy actually went wrong, and nowhere else.
:::

Move the cube between episodes, to the same five spots you used when [measuring](/robotics/lessons/measure-success). Twenty corrections spread over the places it fails beat twenty from one spot.

**Check: the policy closes the gripper a little early and knocks the cube over. You press Space, pick the fallen cube up with the leader, and drop it in the cup. Is that a good correction?**

It is a weak one. The episode starts from a fallen cube, a pose the policy only reaches after its mistake, and it never shows the moment that mattered: the gripper closing too early. If you thought any rescue that ends in success is useful, the misconception is that the policy learns from outcomes. It learns the move for each picture. Press Space the moment the gripper starts closing short, open it, line it up, then grasp. That frame, and the ones after it, are the examples it was missing.

## Put the fixes with the demos

Your corrections carry an extra column, \`intervention\`, that marks every frame as yours. The original demos do not have it, and LeRobot only merges datasets with the same columns. Remove it, then merge (commands from the LeRobot dataset-tools guide). We ran the same two steps on 23 September 2026 with two one-episode practice datasets, LeRobot 0.6.1, and no upload; the merge ended with the two lines below the commands (folder path shortened).

\`\`\`bash title="terminal"
lerobot-edit-dataset \\
  --repo_id \${HF_USER}/rollout_cube_fixes \\
  --new_repo_id \${HF_USER}/cube_fixes \\
  --operation.type remove_feature \\
  --operation.feature_names "['intervention']"

lerobot-edit-dataset \\
  --new_repo_id \${HF_USER}/so101_cube_pick_v2 \\
  --operation.type merge \\
  --operation.repo_ids "['\${HF_USER}/so101_cube_pick_clean', '\${HF_USER}/cube_fixes']" \\
  --push_to_hub true
\`\`\`

\`\`\`output
INFO 2026-09-23 15:17:40 _dataset.py:522 Merged dataset saved to .../me/cube_pick_v2
INFO 2026-09-23 15:17:40 _dataset.py:523 Episodes: 2, Frames: 2
\`\`\`

With your data, the episode count should be your demos plus your corrections, for example 50 plus 20 is 70. Skip the first command and the merge stops with "Same features is expected".

For further reading, Karma is an open control stack from the SRA VJTI robotics club for the SO-101, an open-source robot arm, and for larger arms. It runs the same loop with a Quest VR headset instead of a leader arm: you take over from the controllers, and it labels those frames as corrections. It is Linux-only and needs a headset, so treat it as a look at where this goes next.

:::tip title="Watch the drift you are correcting" href="https://huggingface.co/spaces/lerobot/visualize_dataset" label="LeRobot dataset visualizer"
Paste \`\${HF_USER}/rollout_cube_fixes\` with your own user name and open episode 0. Each episode starts where you pressed Tab, so the first frames show exactly the pose where the policy went wrong.
:::

## Go do this now

Run the command with \`--strategy.num_episodes=5\` and correct five runs. When you press Escape, the dataset uploads, and the visualizer above shows five short episodes, each starting at a moment the policy was about to fail. Those five pictures are the policy's weak spots, and the [next lesson](/robotics/lessons/retrain-and-compare) trains on them.
`}))();export{t as default};