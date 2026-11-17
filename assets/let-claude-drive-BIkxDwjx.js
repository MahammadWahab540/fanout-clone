import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Let Claude drive the arm
type: lesson
sources:
  - "https://modelcontextprotocol.io/"
  - "https://github.com/modelcontextprotocol/python-sdk"
  - "https://github.com/IliaLarchenko/robot_MCP"
  - "https://github.com/anthropics/anthropic-sdk-python"
  - "https://huggingface.co/docs/lerobot/il_robots"
updated: 2026-09-25
---
# Let Claude drive the arm

## Proposals, not commands

A language model can propose a tool call. The robot's controller decides whether that call is allowed and how to carry it out.

Try the instruction box. Inspect the tool name, joint, and target before running the checked action. Then type something unsupported.

:::interactive name="LanguageActivity"
The proposal comes from fixed rules here. No Claude API request is made.
:::

## A small vocabulary

A few bounded tools are easier to check than arbitrary code. Check the tool's name, argument types, workspace limits, and the robot's current state before any motion.

In a full system, the planner might choose "pick this object" and a tested controller does the motion. The language model never has to write servo updates.

:::check
Why give the model a few named tools instead of letting it write Python for the arm?
- [x] Bounded tools can be checked before anything moves :: A small vocabulary has a small set of things to validate.
- [ ] Python is too slow :: Speed is not the issue. Checking is.
:::

## Checks do not carry over

Enter a valid instruction and inspect it. Then edit the text. The old checked action is cleared.

A past approval must never authorise a different request. On real hardware, keep API keys on your machine or server, and keep the checks around every call.
`}))();export{t as default};