import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Retrain and compare
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/hil_data_collection"
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://huggingface.co/docs/lerobot/hardware_guide"
  - "https://colab.research.google.com/github/huggingface/notebooks/blob/main/lerobot/training-act.ipynb"
  - "https://epitools.ausvet.com.au/ciproportion"
updated: 2026-09-23
---
# Retrain and compare

You have your original demos and a handful of corrections, merged into one dataset. This lesson trains a second policy on it, runs the same twenty trials you ran on the first, and puts the two results side by side on one chart. By the end you will be able to say whether your corrections helped, and how sure you can be.

## A fair race changes one thing

A comparison only means something if the two policies differ in one way. Here that one way is the data: demos only, against demos plus corrections. Everything else stays as it was.

- **Same training settings.** Same policy type, batch size, and number of steps as your first run.
- **Same test.** The same five cube spots, four trials each, the same lamp, the same camera positions.
- **Same judge.** Decide before you start what counts as a success. "Cube inside the cup when the 30 seconds end" is a good rule. Write it down.

Change two things at once, say the data and the step count, and a better score could come from either. You would not know which one to keep.

## Train the second policy

This step needs a GPU, as in [the first training run](/robotics/lessons/train-your-first-policy). It is the same command with the merged dataset and new names:

\`\`\`bash title="terminal"
lerobot-train \\
  --dataset.repo_id=\${HF_USER}/so101_cube_pick_v2 \\
  --policy.type=act \\
  --output_dir=outputs/train/act_cube_pick_v2 \\
  --job_name=act_cube_pick_v2 \\
  --policy.device=cuda \\
  --batch_size=8 \\
  --steps=<the same number as your first run> \\
  --policy.repo_id=\${HF_USER}/act_cube_pick_v2
\`\`\`

Twenty corrections of a few seconds each add a few thousand frames to about 30,000, so training takes about as long as last time: about 1 to 2 hours on a rented L4, according to the LeRobot hardware guide. On the free Colab path, use the ACT notebook from before and change only the two names.

:::note
Train on demos and corrections together, never on corrections alone. The corrections only show short rescues, so a policy trained on them never sees the ordinary middle of the task. LeRobot's guide trains on the combined dataset for the same reason.
:::

## Run the same twenty trials

This step needs the arm. Use \`lerobot-rollout\` with \`--strategy.type=base\` and \`--duration=30\`, as in [Measure it honestly](/robotics/lessons/measure-success), once per trial. Swap only \`--policy.path\` to \`\${HF_USER}/act_cube_pick_v2\`.

Run the new policy's twenty trials in one sitting, in the same order of cube spots. If the light has changed since you tested the first policy, run the old one again too. A result from last week in daylight against one from tonight under a lamp is two changes, not one.

## Put the two numbers side by side

Save the \`wilson\` function from [Measure it honestly](/robotics/lessons/measure-success) as \`wilson.py\` in the same folder. Then put your two tallies into this script. The numbers below are an example, not a measured result.

\`\`\`python title="compare.py"
import matplotlib.pyplot as plt

from wilson import wilson  # the function from "Measure it honestly"

# Your tallies: successes out of 20 trials, same five cube spots each time.
results = {"demos only": (7, 20), "demos + fixes": (17, 20)}

for i, (name, (wins, trials)) in enumerate(results.items()):
    low, high = wilson(wins, trials)
    print(f"{name}: {wins}/{trials}, likely {low:.0%} to {high:.0%}")
    plt.bar(i, wins / trials, color="lightgrey", edgecolor="black")
    plt.plot([i, i], [low, high], color="black")  # the interval as a line

plt.xticks(range(len(results)), list(results))
plt.ylim(0, 1)
plt.ylabel("success rate")
plt.savefig("before-after.png", dpi=150)
print("saved before-after.png")
\`\`\`

Run it:

\`\`\`bash title="terminal"
uv run --with matplotlib python compare.py
\`\`\`

\`\`\`output
demos only: 7/20, likely 18% to 57%
demos + fixes: 17/20, likely 64% to 95%
saved before-after.png
\`\`\`

The chart shows two grey bars with a black line through each. The line is the range the true rate probably sits in. Here the top of the first line, 57%, is below the bottom of the second, 64%. The ranges do not overlap, so you can say the corrections helped, with twenty trials to back it.

:::interactive name="SuccessRate"
Choose "Compare two". Set policy A to 7 successes in 20 trials and policy B to 17 in 20, and read that the intervals do not overlap. Now drop B to 13 in 20 and watch the verdict change.
:::

**Check: your first policy scored 11 out of 20. After corrections it scores 15 out of 20. Did the corrections work?**

You cannot tell yet. The Wilson ranges are about 34% to 74% and 53% to 89%, and they overlap from 53% to 74%. If you answered yes because 75% is higher than 55%, the misconception is that twenty trials pin a rate down to the exact number. They pin it to a range about 40 points wide. Run twenty more trials of each, or collect another round of corrections and test again.

## If it did not get better

A flat or worse result is still an answer. Three causes are common:

- **Too few corrections.** Five short rescues next to fifty full demos are a tiny share of what the policy learns from. The example in LeRobot's guide collects 50 correction episodes in one session.
- **Late corrections.** If most of your takeovers began after the cube fell, the policy learned to recover from a mess, not to avoid it. Look at the first frames of each correction in the visualizer.
- **Same five spots only.** If the failures were at a spot you never corrected, the new data could not help there.

Then do another round: run the new policy with the takeover command, collect corrections where it now fails, merge, retrain, compare. LeRobot's guide describes exactly this loop, each round aimed at the current policy's failures.

:::tip title="Check the chart's ranges by hand" href="https://epitools.ausvet.com.au/ciproportion" label="Epitools: confidence limits for a proportion"
Enter 20 as the sample size and 17 as the number positive, keep Wilson, and submit. The Wilson row should read about 0.64 to 0.95, the same range \`compare.py\` printed for the second bar.
:::

## Go do this now

Put your two real tallies into \`results\` in \`compare.py\` and run it. You will get \`before-after.png\`: two bars, two lines, and one honest sentence about whether your corrections worked. That chart is the milestone for this module, and it is the first thing to post when you [ship your robot](/robotics/lessons/ship-your-robot).
`}))();export{t as default};