import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Robots that read instructions
type: lesson
sources:
  - "https://huggingface.co/blog/smolvla"
  - "https://arxiv.org/abs/2506.01844"
  - "https://huggingface.co/docs/lerobot/smolvla"
  - "https://huggingface.co/lerobot/smolvla_base"
  - "https://github.com/huggingface/lerobot/issues/1763"
  - "https://github.com/Physical-Intelligence/openpi"
  - "https://www.physicalintelligence.company/blog/pi05"
  - "https://github.com/NVIDIA/Isaac-GR00T"
  - "https://github.com/allenai/molmoact2"
  - "https://huggingface.co/docs/lerobot/hardware_guide"
  - "https://huggingface.co/datasets/lerobot/svla_so100_sorting"
  - "https://huggingface.co/spaces/lerobot/robot-learning-tutorial"
updated: 2026-09-25
---
# Robots that read instructions

## Same scene, different request

A sentence can tell the robot which behaviour you want. It does not replace seeing the scene or knowing how to move.

Try two instructions. The scene stays the same while the requested action changes.

:::interactive name="LanguageActivity"
Fixed rules show the interface; this is not a vision-language-action model. Unknown instructions leave the arm still.
:::

## Where the sentence goes

A **vision-language-action** model turns camera images, joint state, and a sentence into actions. Training has to connect those inputs to the right moves.

A downloaded model does not automatically understand your camera placement or your arm.

:::check
You download a VLA trained on other robots and run it on your arm. What should you expect?
- [ ] It works, because it understands language :: Language is one input. Your cameras and joints are new to it.
- [x] It probably needs fine-tuning on your own data :: It has never seen your setup. That is the next lesson.
:::

## Understanding is not permission

Ask for a 90° turn. The tool refuses, even though the sentence makes sense.

Understanding a request and allowing it are separate jobs. Keep the safety check outside the part that reads language.
`}))();export{t as default};