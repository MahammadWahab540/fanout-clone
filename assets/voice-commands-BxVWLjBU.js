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
updated: 2026-09-25
---
# Project: voice commands

## Three translations

Speech adds a step: audio becomes text, text becomes a task, and the controller turns the task into motion.

Type a transcript below. Practise the checking before adding a microphone. A misheard word must never bypass the limits.

:::interactive name="LanguageActivity"
Typed transcripts only. No audio is recorded and no speech service is called.
:::

## Every step can be wrong

- The recogniser can produce believable text that is wrong.
- The planner can understand the words but pick the wrong tool.
- The controller can receive a valid call that is wrong for the scene.

Check each boundary. Ambiguous? Ask before moving. Out of range? Reject it.

:::check
The recogniser hears "turn left ninety" and the limit is 45°. What should happen?
- [ ] Turn 90°, the user asked :: The limit applies no matter how clear the words are.
- [ ] Turn 45° without saying anything :: Quietly changing the request hides the problem.
- [x] Reject it and say why :: Out-of-range requests are refused, and the user hears the reason.
:::

## Test three phrases

Try a normal phrase, an unknown phrase, and an excessive turn. Only the supported, bounded instruction should become runnable.
`}))();export{t as default};