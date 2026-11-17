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
updated: 2026-09-25
---
# Fine-tune a model that reads

## Check the data before the GPU

Before an expensive training run, make sure every example says which task was performed, and that its fields match the configuration.

Check the dataset contract below. Fix one missing piece at a time and read why it matters.

:::interactive name="LanguageActivity"
A configuration exercise. It does not download, train, or evaluate SmolVLA.
:::

## Labels must tell tasks apart

Record two tasks and their sentences must say what differs. One vague label on two different behaviours erases the information language was supposed to add.

Camera names, image sizes, joint order, and action units must also match the training setup. A good label cannot repair those.

:::check
You record "pick the red block" and "pick the blue block" but label both "pick the block". What happens?
- [x] The model cannot tell the tasks apart :: The sentence was the only difference, and the label removed it.
- [ ] It learns both from the images :: With one label, nothing tells it which one you want.
:::

## A big brain on a server

The model can run on a rented GPU while the arm stays at home. Every round trip adds time between seeing the scene and acting on it.

Change the network delay. Compare waiting for every prediction with a short action buffer.

:::interactive name="ServerLatency"
Track when each observation was captured, not only when the answer arrived.
:::

## Late but correct

A prediction can be right for its image and still stale by the time it arrives. Buffers smooth execution, but you also need a rule for replacing old actions when new evidence comes in.

Label every request with its capture time. An old answer must not overwrite a newer plan just because it finished last.

:::check
An answer arrives for an image taken 400 ms ago. A newer plan already exists. What should the controller do?
- [ ] Use the latest arrival :: Latest to arrive is not latest to see.
- [x] Keep the plan built on the newer image :: Order plans by when their image was captured.
:::
`}))();export{t as default};