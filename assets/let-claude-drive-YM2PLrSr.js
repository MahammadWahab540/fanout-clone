import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Let Claude drive the arm
type: lesson
sources:
  - "https://modelcontextprotocol.io/"
  - "https://github.com/modelcontextprotocol/python-sdk"
  - "https://github.com/IliaLarchenko/robot_MCP"
  - "https://github.com/anthropics/anthropic-sdk-python"
  - "https://huggingface.co/docs/lerobot/il_robots"
updated: 2026-09-23
---
# Let Claude drive the arm

A policy learns motions from your demos. A language model like Claude is good at something else: breaking "put the red block in the cup" into steps. This lesson gives Claude three tools, \`look\`, \`move_to\`, and \`grip\`, and lets it plan a task by calling them. You will build the tool server in Python, list its tools without an API key, and see where the safety rules have to live.

## A planner with hands

Claude cannot move a motor. What it can do is ask for a **tool**: a function you wrote, with a name, a short description, and the inputs it takes. Claude replies "call \`move_to\` with x 0.20, y 0.05, z 0.08", your code runs the function, and the result goes back to Claude so it can decide the next step.

**MCP**, the Model Context Protocol, is a standard way to offer tools like these. You write a small **MCP server** that lists your tools. Any program that speaks MCP, such as Claude Desktop or your own script, can then connect to it and let a model use them.

Tools are big steps, not motor commands. Claude decides "move above the red block"; your code does the inverse kinematics and sends joint targets at 30 per second. A language model takes seconds to reply, far too slow to steer a joint, and that split keeps each part doing what it is good at.

## Three tools and a box

Here is the whole server. The functions are stubs that report what they would do, so you can run it with no arm. The comments mark where the real arm code goes: the inverse kinematics from [Solving it by nudging](/robotics/lessons/ik-by-nudging) and the colour finder from [Sort by colour](/robotics/lessons/sort-by-colour).

\`\`\`python title="arm_server.py"
from mcp.server.mcpserver import MCPServer

mcp = MCPServer("so101-arm")

# The box the gripper may move inside, in metres, measured from the base.
LIMITS = {"x": (0.10, 0.30), "y": (-0.15, 0.15), "z": (0.02, 0.20)}


def inside_box(x, y, z):
    return all(lo <= v <= hi for v, (lo, hi) in zip((x, y, z), LIMITS.values()))


@mcp.tool()
def move_to(x: float, y: float, z: float) -> str:
    """Move the gripper to a point in metres, measured from the arm's base.
    x is forward, y is left, z is up. Points outside the safe box are refused."""
    if not inside_box(x, y, z):
        return f"refused: ({x}, {y}, {z}) is outside the safe box {LIMITS}"
    # Real version: inverse kinematics, then send joint targets to the follower.
    return f"moved to ({x}, {y}, {z})"


@mcp.tool()
def grip(open: bool) -> str:
    """Open the gripper (open=true) or close it (open=false)."""
    return "gripper open" if open else "gripper closed"


@mcp.tool()
def look() -> str:
    """Describe what the overhead camera sees, with table positions in metres."""
    # Real version: grab a frame and run the colour finder from the camera lessons.
    return "red block at (0.20, 0.05); blue block at (0.22, -0.08); cup at (0.15, -0.12)"


if __name__ == "__main__":
    mcp.run()
\`\`\`

The docstrings matter more than they look. They are the only thing Claude reads about each tool, so they say what the units are, which way is forward, and what happens at the edge.

The box check sits inside \`move_to\`, not in the instructions to Claude. A model can misread a number or invent a position. Code that refuses a bad target cannot be talked out of it.

## Check the tools without a key

This script starts the server, asks it for its tools, and makes two calls by hand, one inside the box and one outside. No API key and no arm are needed.

\`\`\`python title="list_tools.py"
import asyncio
import sys

from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client

server = StdioServerParameters(command=sys.executable, args=["arm_server.py"])


async def main():
    async with stdio_client(server) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()
            tools = await session.list_tools()
            for tool in tools.tools:
                print(tool.name, list(tool.input_schema["properties"]))
            for args in ({"x": 0.20, "y": 0.05, "z": 0.03}, {"x": 0.50, "y": 0.0, "z": 0.03}):
                result = await session.call_tool("move_to", args)
                print(result.content[0].text)


asyncio.run(main())
\`\`\`

Run it in the same folder as \`arm_server.py\` (captured 23 September 2026 with \`mcp\` 2.2.0):

\`\`\`bash title="terminal"
uv run --with mcp python list_tools.py
\`\`\`

\`\`\`output
move_to ['x', 'y', 'z']
grip ['open']
look []
moved to (0.2, 0.05, 0.03)
refused: (0.5, 0.0, 0.03) is outside the safe box {'x': (0.1, 0.3), 'y': (-0.15, 0.15), 'z': (0.02, 0.2)}
\`\`\`

The first three lines are exactly what Claude will be offered. The last line is the box doing its job: 50 cm forward is off your table and past the arm's reach, so the call never gets near a motor.

## Hand the tools to Claude

The Anthropic Python SDK can turn each MCP tool into one Claude can call, and run the ask, call, answer loop for you. This part needs an API key in \`ANTHROPIC_API_KEY\`, and each call costs a little.

\`\`\`python title="drive.py"
import asyncio
import sys

from anthropic import AsyncAnthropic
from anthropic.lib.tools.mcp import async_mcp_tool
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client

server = StdioServerParameters(command=sys.executable, args=["arm_server.py"])
task = "Put the red block in the cup."


async def main():
    async with stdio_client(server) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()
            listed = await session.list_tools()
            tools = [async_mcp_tool(t, session) for t in listed.tools]
            for tool in tools:
                spec = tool.to_dict()
                print("tool:", spec["name"], list(spec["input_schema"]["properties"]))

            if "--dry-run" in sys.argv:
                return

            runner = AsyncAnthropic().beta.messages.tool_runner(
                model="claude-sonnet-5",
                max_tokens=4000,
                system="You control a small robot arm. Call look first. Move above an object before lowering onto it.",
                tools=tools,
                messages=[{"role": "user", "content": task}],
            )
            async for message in runner:
                for block in message.content:
                    if block.type == "tool_use":
                        print("claude calls", block.name, block.input)
                    elif block.type == "text":
                        print("claude says", block.text)


asyncio.run(main())
\`\`\`

With \`--dry-run\` it stops after converting the tools, so you can check the wiring for free (captured 23 September 2026, \`anthropic\` 1.8.0):

\`\`\`bash title="terminal"
uv run --with "anthropic[mcp]" python drive.py --dry-run
\`\`\`

\`\`\`output
tool: move_to ['x', 'y', 'z']
tool: grip ['open']
tool: look []
\`\`\`

Without the flag, Claude plans the task and the script prints one \`claude calls\` line per tool call. We did not run the live version for this page, so there is no captured output here. The system prompt asks for \`look\` first and for a hover before any lowering; check that your run does both, and read every \`move_to\` target against the box before you connect a real arm.

**Check: you added "stay inside the box" to the system prompt. Claude still calls \`move_to\` with x 0.35, and nothing moves. What went wrong, and where is the fix?**

Nothing went wrong in the code: \`move_to\` refused the target, because 0.35 is past the box's 0.30 limit. The fix belongs in the box, if 0.35 is really safe on your table, not in the prompt. If you expected the prompt to be enough, the misconception is that instructions to a model are a safety rule. They are advice it usually follows. Keep every limit in the tool code, where it holds even when the model gets it wrong.

## Rules before the arm

Swapping the stubs for the real follower takes three rules. The tools only allow whitelisted moves: no tool sets a raw joint angle or turns torque off. The box is measured on your own table, with the cup, the lamp, and your laptop outside it. A person watches every run with a hand on the power switch, because Claude can plan a path that clips the cup on the way.

Ilia Larchenko's \`robot_MCP\` is a working version of this for the SO-100 and the SO-101, an open-source robot arm, with a camera tool that sends images and moves in millimetres and degrees. Its README warns that sending camera images on every step can cost many tokens, and that a later LeRobot update broke the original code, so expect to adjust it.

:::tip title="Open a real arm MCP server" href="https://github.com/IliaLarchenko/robot_MCP" label="robot_MCP on GitHub"
Open \`mcp_robot_server.py\` and compare its four tools with the three here. Notice that its move tool takes small relative steps, up 10 mm or forward 5 mm, instead of absolute positions: another way to keep each call small and safe.
:::

## Go do this now

Save \`arm_server.py\` and \`list_tools.py\` and run the second one. Then add a fourth tool, \`home()\`, with the docstring "Move the arm to its rest pose." and a return value of "moved to rest pose", and run it again. You will see \`home []\` as a fourth line in the list, which is all it takes for Claude to know the arm can go home.
`}))();export{t as default};