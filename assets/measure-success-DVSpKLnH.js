import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Measure it honestly
type: lesson
sources:
  - "https://www.ml6.eu/en/blog/ai-robotics-a-field-report-on-imitation-learning-with-lerobot"
  - "https://huggingface.co/docs/lerobot/inference"
  - "https://epitools.ausvet.com.au/ciproportion"
updated: 2026-09-23
---
# Measure it honestly

"It works" is not a result. "It picked the cube 14 times in 20" is. This lesson shows you how to run a fair test of your policy, turn the count into a success rate, and work out how much that rate can be trusted, with a ten-line Python function. By the end you will know why three good runs in a row prove almost nothing.

## Why three good runs prove nothing

You run your policy three times and it picks the cube all three times. Is it a 100% policy?

Picture a coin that lands heads 60% of the time. Toss it three times and you get three heads about one time in five. A policy that succeeds 60% of the time will pass a three-run test about as often. So three successes out of three is what a mediocre policy looks like fairly often, and what a great one looks like too. The test cannot tell them apart.

The fix is more trials, and a way to say how sure you are.

## A fair test

A **trial** is one run, from the start pose to a clear result. A **success rate** is successes divided by trials, always written with both numbers: "14 out of 20", not "70%".

To keep the test fair:

- **Decide what counts as success before you start.** For the cube pick: the cube ends inside the cup and the arm lets go. Knocking the cup over is a failure, even if the cube lands in it.
- **Fix the cube positions in advance.** Mark five spots on the table with tape, and run four trials at each. Twenty trials, every position tested equally.
- **Count every run.** No "that one does not count, I bumped the table". If something outside the robot ruined a trial, write it down and run it again, but keep the note.
- **Change nothing during the test.** Same light, same cameras, same checkpoint.

On the arm, run \`lerobot-rollout\` with \`--duration=30\` once per trial, as in [the last lesson](/robotics/lessons/run-the-policy), and tally the results on paper.

## How much to trust the number

A success rate from a few trials is a guess about the true rate, the one you would see over thousands of runs. A **confidence interval** gives the range where the true rate probably lies. The version below, called the Wilson interval, stays sensible even for small counts like 3 out of 3, which is exactly where simpler formulas give nonsense.

\`\`\`python title="wilson.py"
import math

def wilson(successes, trials, z=1.96):
    """95% Wilson interval for a success rate."""
    p = successes / trials
    centre = (p + z * z / (2 * trials)) / (1 + z * z / trials)
    half = (z / (1 + z * z / trials)) * math.sqrt(
        p * (1 - p) / trials + z * z / (4 * trials * trials)
    )
    return centre - half, centre + half

for s, n in [(3, 3), (14, 20), (18, 20)]:
    low, high = wilson(s, n)
    print(f"{s}/{n}: rate {s / n:.0%}, likely between {low:.0%} and {high:.0%}")
\`\`\`

Before you run it, guess the lower end for 3 out of 3. Run with \`uv run --with numpy python wilson.py\`:

\`\`\`output
3/3: rate 100%, likely between 44% and 100%
14/20: rate 70%, likely between 48% and 85%
18/20: rate 90%, likely between 70% and 97%
\`\`\`

Three out of three is consistent with a policy that fails more than half the time. Twenty trials narrow the range a lot, but not completely: 14 out of 20 could be a 50% policy or an 85% one. The number 1.96 sets the range to 95%, meaning that about 19 times in 20 the true rate is inside it.

:::interactive name="SuccessRate"
Set trials to 3 and successes to 3 and read the interval. Then raise trials to 20, 50, and 100 while keeping the rate near 90%, and watch the bar shrink. In compare mode, set one policy to 14 of 20 and the other to 18 of 20 and see whether the intervals overlap.
:::

## Comparing two policies

Most of the time you measure to compare: before and after trimming idle frames, 50 demos against 100. Run the same twenty trials on both. If the two intervals do not overlap, you have a real difference. If they overlap, you cannot tell yet; run more trials before you believe the change helped.

**Check: your old policy scored 14 out of 20. You retrain with trimmed episodes and it scores 18 out of 20. Your friend says the trimming clearly worked. Do you agree?**

Not yet. From the output above, 14 of 20 spans 48% to 85% and 18 of 20 spans 70% to 97%, and those ranges overlap from 70% to 85%. The new policy may well be better, but twenty trials each cannot show it. If you agreed because 90 is bigger than 70, the misconception is that a success rate is exact; with twenty trials each number carries a wide margin. Run twenty more trials of each and check again.

:::note
Every success rate in this course comes with its trial count and source. ML6, testing ACT on an SO-100 pick-and-place, report about 60% success with 20 demonstration episodes and about 90% with 100, only on brick positions it was trained on. They do not give their trial counts, so read those as rough.
:::

:::tip title="Check your interval with a second tool" href="https://epitools.ausvet.com.au/ciproportion" label="Epitools: confidence limits for a proportion"
Enter 20 as the sample size and 14 as the number positive, leave the method on Wilson, and submit. The results table shows 0.4810 and 0.8545, the same 48% to 85% the script printed.
:::

## Go do this now

Mark five spots on your table and run twenty trials, four per spot, counting every one. Put your count into \`wilson.py\`. You will get a sentence like "14 out of 20, likely between 48% and 85%", and that sentence, not "it works", is what you compare against when you improve the policy in the next module.
`}))();export{t as default};