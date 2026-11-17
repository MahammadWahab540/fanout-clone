import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Set up your computer
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/installation"
  - "https://huggingface.co/docs/lerobot/so101"
  - "https://docs.astral.sh/uv/getting-started/installation/"
  - "https://github.com/huggingface/lerobot/releases/tag/v0.6.1"
updated: 2026-09-25
---
# Set up your computer

## What you are installing

Every motor, camera, and robot brain in this course runs through LeRobot, Hugging Face's open-source robot library. About ten minutes, no hardware. Three pieces:

1. **uv** installs Python and keeps this project's packages in their own folder, a **virtual environment**, so nothing else on your computer breaks.
2. **Python 3.12**, the version LeRobot asks for.
3. **LeRobot with the Feetech extra**, which adds the library that talks to the SO-101's motors.

Checked against LeRobot 0.6.1.

## Install uv

On Mac or Linux:

\`\`\`bash title="terminal"
curl -LsSf https://astral.sh/uv/install.sh | sh
\`\`\`

On Windows PowerShell:

\`\`\`bash title="PowerShell"
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
\`\`\`

Open a new terminal and run \`uv --version\`. Any version line means it worked.

## Make a folder and install LeRobot

\`\`\`bash title="terminal"
mkdir robot-arm && cd robot-arm
uv python install 3.12
uv venv --python 3.12
source .venv/bin/activate
uv pip install 'lerobot[feetech]'
\`\`\`

On Windows the activate line is \`.venv\\Scripts\\activate\`. Your prompt now starts with \`(robot-arm)\`. The install downloads PyTorch, so let a slow connection run.

## The check

This line needs two things to print anything: LeRobot itself and \`scservo_sdk\`, the Feetech library.

\`\`\`bash title="terminal"
python -c "import lerobot, scservo_sdk; print('lerobot', lerobot.__version__, 'ready')"
\`\`\`

\`\`\`output
lerobot 0.6.1 ready
\`\`\`

A newer version is fine. If one is missing, Python stops with \`ModuleNotFoundError\` and names it.

:::check
Next day, a new terminal, the check fails with \`No module named 'lerobot'\`. What happened?
- [ ] The install broke overnight :: Nothing changed on disk. The install is still in \`.venv\`.
- [x] The environment is not active in this terminal :: A new terminal starts with it off. Run \`source .venv/bin/activate\` in the robot-arm folder and the check passes.
:::

## Notes for your system

- **Linux:** if the port refuses you, \`sudo chmod 666 /dev/ttyACM0\`, possibly again after replugging.
- **Mac:** nothing extra. Ports look like \`/dev/tty.usbmodem575E0032081\`.
- **Windows:** ports are \`COM3\`, \`COM4\`. If an install step fails, LeRobot's guide supports WSL.

:::tip title="The official install guide" href="https://huggingface.co/docs/lerobot/installation" label="LeRobot installation guide"
If a step fails, find your system here and compare one line at a time.
:::

## Run it now

Install uv, make the folder, run the check. When you see \`ready\`, that terminal is set for the first real motor in [What is inside a smart servo](/robotics/lessons/inside-a-smart-servo).
`}))();export{t as default};