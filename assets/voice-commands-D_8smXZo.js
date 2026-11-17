import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: "Project: voice commands"
type: lesson
sources:
  - "https://github.com/SYSTRAN/faster-whisper"
  - "https://github.com/openai/whisper"
  - "https://huggingface.co/Systran/faster-whisper-base.en"
  - "https://huggingface.co/spaces/openai/whisper"
  - "https://github.com/anthropics/anthropic-sdk-python"
  - "https://huggingface.co/docs/lerobot/smolvla"
  - "https://wiki.seeedstudio.com/respeaker_flex_soarm/"
updated: 2026-09-23
---
# Project: voice commands

You will say "give me the red one" and watch the arm put the red cube in the cup. It takes three small programs chained together: one turns your voice into text, one turns loose text into the exact sentence your robot was trained on, and one runs the policy with that sentence. Each piece runs on its own, so you can build and test them one at a time, two of them without the arm.

## Three steps, three programs

| Step | Tool | In | Out |
|---|---|---|---|
| Hear | Whisper, running on your laptop | a short recording | "Give me the red one." |
| Plan | Claude | "Give me the red one." | "Put the red cube in the cup." |
| Act | your fine-tuned SmolVLA | "Put the red cube in the cup." | the arm moves |

The middle step is the one people skip, and it is the one that makes this work. Your SmolVLA from [the fine-tuning lesson](/robotics/lessons/fine-tune-smolvla) knows two exact sentences. People never say either of them. Claude's job is to translate whatever you said into one of the two, or into "do nothing".

## Hear: speech to text on your laptop

**Whisper** is a speech-to-text model from OpenAI, free to run on your own machine. The \`faster-whisper\` package runs it quickly on an ordinary CPU, no GPU needed. First, a three-second recording from your microphone:

\`\`\`python title="record.py"
import sounddevice as sd
import soundfile as sf

SECONDS, RATE = 3, 16000
print("speak now")
audio = sd.rec(SECONDS * RATE, samplerate=RATE, channels=1)
sd.wait()
sf.write("command.wav", audio, RATE)
print("saved command.wav")
\`\`\`

Run it with \`uv run --with sounddevice --with soundfile python record.py\` and say your command after "speak now". Then transcribe it:

\`\`\`python title="hear.py"
from faster_whisper import WhisperModel

# base.en is an English-only model of about 145 MB; it downloads on the first run.
model = WhisperModel("base.en", device="cpu", compute_type="int8")
segments, _ = model.transcribe("command.wav")
print(" ".join(segment.text.strip() for segment in segments))
\`\`\`

We tested this on 23 September 2026 with a \`command.wav\` made by a Mac's text-to-speech saying "Give me the red one":

\`\`\`bash title="terminal"
uv run --with faster-whisper python hear.py
\`\`\`

\`\`\`output
Give me the red one.
\`\`\`

The first run took about 45 seconds while the model downloaded. After that it took under two seconds on a laptop CPU. If English is not the language you will speak, swap \`base.en\` for \`base\`, which handles many languages.

:::tip title="Try Whisper with no install" href="https://huggingface.co/spaces/openai/whisper" label="Whisper on Hugging Face"
Click the microphone icon under the audio box, say "give me the red one", stop, and press Submit. The output box shows the text Whisper heard, in the same shape \`hear.py\` prints.
:::

## Plan: loose words to an exact instruction

Claude gets what you said and must pick one instruction from a fixed list. The list is the two sentences your policy was trained on, plus "Do nothing." for anything else. Making it a fixed list means Claude cannot invent a third task the arm has never seen.

\`\`\`python title="plan.py"
import sys
from typing import Literal

import anthropic
from pydantic import BaseModel

# The only sentences the arm acts on: the ones your SmolVLA was fine-tuned on.
Instruction = Literal[
    "Put the red cube in the cup.",
    "Put the blue cube in the cup.",
    "Do nothing.",
]


class Plan(BaseModel):
    instruction: Instruction


if "--dry-run" in sys.argv:
    print(Plan.model_json_schema()["properties"]["instruction"]["enum"])
    sys.exit()

heard = sys.argv[1]
response = anthropic.Anthropic().messages.parse(
    model="claude-sonnet-5",
    max_tokens=1000,
    system="Turn what the person said into one instruction for the robot arm. If nothing fits, choose Do nothing.",
    messages=[{"role": "user", "content": heard}],
    output_format=Plan,
)
print(response.parsed_output.instruction)
\`\`\`

\`messages.parse\` makes Claude's reply match \`Plan\`, so the answer is always one of the three sentences, never a paragraph. The \`--dry-run\` flag prints the allowed answers without calling the API:

\`\`\`bash title="terminal"
uv run --with anthropic python plan.py --dry-run
\`\`\`

\`\`\`output
['Put the red cube in the cup.', 'Put the blue cube in the cup.', 'Do nothing.']
\`\`\`

With an API key in \`ANTHROPIC_API_KEY\`, run \`python plan.py "Give me the red one."\` and it prints one line from that list. We did not capture a live answer for this page; it should be the red sentence.

**Check: you say "put the green one in the cup". What should the arm do, and which part of the pipeline makes sure of it?**

It should do nothing, and \`plan.py\` makes sure: there is no green sentence in the list, so the reply has to be "Do nothing.". If you expected SmolVLA to reach for a green cube, the misconception is that a model that reads instructions can do anything you describe. It can do the two tasks it was fine-tuned on. The fixed list is what keeps a request for a third one from reaching the arm.

## Act: run the policy with that sentence

The last program takes the chosen sentence and starts the same \`lerobot-rollout\` command you ran at the end of the fine-tuning lesson, with \`--task\` set to it:

\`\`\`python title="go.py"
import subprocess
import sys

instruction = sys.argv[1]  # the sentence plan.py printed
if instruction == "Do nothing.":
    sys.exit("nothing to do")

command = [
    "lerobot-rollout",
    "--strategy.type=base",
    "--policy.path=YOUR_HF_USER/smolvla_two_cubes",
    "--robot.type=so101_follower",
    "--robot.port=/dev/ttyACM0",
    "--robot.id=my_follower",
    "--robot.cameras={ top: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, wrist: {type: opencv, index_or_path: 1, width: 640, height: 480, fps: 30}}",
    '--rename_map={"observation.images.top": "observation.images.camera1", "observation.images.wrist": "observation.images.camera2"}',
    f"--task={instruction}",
    "--duration=30",
]
if "--dry-run" in sys.argv:
    print(command[-2])
else:
    subprocess.run(command, check=True)
\`\`\`

Check it without the arm. With \`--dry-run\` it prints the task flag it would send:

\`\`\`bash title="terminal"
python go.py "Put the red cube in the cup." --dry-run
\`\`\`

\`\`\`output
--task=Put the red cube in the cup.
\`\`\`

Without \`--dry-run\`, this step needs the full arm, and the follower moves on its own for up to 30 seconds. Keep both cubes and the cup where you recorded them, and your hand near the power switch.

## Put it together

**In the browser:** use the Whisper Space above for the hearing step, and paste its text into \`plan.py\`.

**Starter, one servo:** replace \`go.py\` with a script that turns the servo left for "red" and right for "blue". The first two steps stay the same.

**Full arm:** install the four packages once with \`pip install faster-whisper sounddevice soundfile anthropic\`, then run the three in a row:

\`\`\`bash title="terminal"
python record.py && python go.py "$(python plan.py "$(python hear.py)")"
\`\`\`

Seeed's reSpeaker guide for these arms builds the same chain with a wake word, "Hey Jarvis", in front and a spoken reply at the end. It is a good next step once yours works.

## Go do this now

Run \`hear.py\` on your own voice saying "give me the red one", then pass what it printed to \`plan.py\`. You will see your loose words come back as "Put the red cube in the cup.", the exact sentence the arm knows. Then say something the arm cannot do, such as "wave at me", and watch it come back as "Do nothing.".
`}))();export{t as default};