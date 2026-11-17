import{n as e}from"./rolldown-runtime-BgaNhQyE.js";var t;e((()=>{t=`---
title: Drive the hand, not the joints
type: lesson
sources:
  - "https://huggingface.co/docs/lerobot/phone_teleop"
  - "https://github.com/huggingface/lerobot/blob/main/examples/phone_to_so100/teleoperate.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/teleoperators/keyboard/teleop_keyboard.py"
  - "https://github.com/huggingface/lerobot/blob/main/src/lerobot/model/kinematics.py"
  - "https://huggingface.co/docs/lerobot/hilserl"
  - "https://huggingface.co/docs/lerobot/il_robots"
  - "https://github.com/huggingface/lerobot/issues/3890"
  - "https://bambot.org/play/so-arm100"
updated: 2026-09-23
---
# Drive the hand, not the joints

With the leader arm you move joints, and the follower copies joints. This lesson drives the gripper directly instead: press a key or tilt your phone, and the hand moves forward, sideways, or up in a straight line while the software works out the joints. You will see where the nudging solver from the last lesson sits in that path, and what to expect when you run LeRobot's phone example on the arm.

## Joints are awkward to drive by hand

Try moving the gripper 5 cm straight forward on the SO-101, an open-source robot arm, one joint at a time. Raise the shoulder and the hand goes up and forward along an arc. Open the elbow to bring it back down, and it overshoots. Every straight line is a juggle of three joints.

The leader arm hides this, because your own arm does the juggling. A keyboard, a gamepad, or a phone cannot. They give you "forward", "left", "up". To use them, something has to turn "move the hand 5 mm forward" into new joint angles, thirty times a second. That something is inverse kinematics, the same step-and-repeat solver you ran in [Solving it by nudging](/robotics/lessons/ik-by-nudging).

## One loop, four steps

Every hand-driving setup in LeRobot runs the same loop at 30 cycles per second:

1. **Read the input.** The keyboard or phone says which way to move: a small change in x, y, and z.
2. **Add it to the hand's target.** The target starts where the hand is now, worked out with forward kinematics from the joint readings.
3. **Clamp it.** The target is kept inside a box you set, and one tick may not jump the hand more than a set distance.
4. **Solve and send.** The IK solver turns the target into five joint angles, starting from the joints the arm reports now, and the arm is told to go there.

Step 4 is the one you built by hand. Starting from the current joints is what keeps the elbow from flipping between the two answers you met in [From hand position to joint angles](/robotics/lessons/position-to-angles): the nearest answer wins.

:::interactive name="IkNudge"
Drag the target a short way, press Run, and watch the arm follow in a few steps. Now move it again by the same small amount: this is what one keypress asks the solver to do, many times a second.
:::

**You hold the forward key and the hand glides forward, then stops short of the far edge of the table and will not go farther, though the joints are nowhere near their limits. What stopped it?**

Most likely step 3. The workspace box you configured ended there, or the target left the arm's reach and the solver stretched the arm straight and gave up. The tempting reading is that a joint hit its limit or a servo stalled, which would blink its red light. When hand driving stops cleanly with no error, check the bounds box and the reach before you check the hardware.

## Driving from your phone

**Full arm.** LeRobot's phone teleop works on iOS through the HEBI Mobile I/O app and on Android through a web page the script serves. It lives in the repository's \`examples/\` folder, so you need LeRobot cloned from source, with the phone extra:

\`\`\`bash title="terminal"
pip install 'lerobot[phone]'
cd examples/phone_to_so100
python teleoperate.py
\`\`\`

Two setup steps come first, both from the LeRobot phone guide. Copy the \`SO101\` folder from the SO-ARM100 repository into \`examples/phone_to_so100/\`, so the script finds \`SO101/so101_new_calib.urdf\`; that URDF is the arm model the solver reads. Then edit the \`port\` and \`id\` at the top of \`teleoperate.py\` to match your follower, and pick \`PhoneOS.IOS\` or \`PhoneOS.ANDROID\`.

Hold the phone screen up, top edge pointing the way the gripper points. On iOS, hold \`B1\` to move and use \`A3\` for the gripper. On Android, open the address the script prints, tap Start, and hold Move; \`A\` opens the gripper and \`B\` closes it. Let go and the arm holds still. Before the first run, know what will move: the whole arm, following your hand, up to 10 cm per tick by the example's safety setting. Start with small motions and keep your other hand near the power switch.

:::note
Expect rough edges and budget an evening. An open LeRobot issue (#3890, June 2026) reports the SO-101 axes feeling swapped, the arm bobbing while the phone is held still, and the script crashing after about 30 seconds. The guide's own fix for inverted motion is to flip the signs in the \`MapPhoneActionToRobotAction\` step. If it fights you, the leader arm is still the better way to record demonstrations.
:::

## Driving from a keyboard

LeRobot also has a keyboard teleoperator for the hand, \`keyboard_ee\`. The arrow keys move x and y, the two Shift keys move z, and the two Ctrl keys open and close the gripper. It needs a desktop session that lets Python read keys: X11 on Linux, Windows, or macOS with Accessibility permission. It does not work on Wayland or over SSH.

Be clear about what it outputs: three small steps, \`delta_x\`, \`delta_y\`, \`delta_z\`, not joint angles. \`lerobot-teleoperate\` passes the teleoperator's output straight through, and the SO-101 follower only reads joint positions, so the keyboard alone does not drive the arm. The ready-made path that adds the IK loop is LeRobot's HIL-SERL setup, which is a bigger project; the phone example is the quicker way to see hand driving on real hardware.

**In the browser or with one servo:** use the simulator below. You drive a simulated SO-100 arm with the keyboard, and the second set of keys moves several joints at once.

:::tip title="Drive the hand in a simulator" href="https://bambot.org/play/so-arm100" label="BamBot SO-ARM100 simulator"
Click the 3D view, then hold \`u\`. Watch the joint table: pitch and elbow both change together, because the key moves the gripper backward, not one joint. Hold \`i\` and a different pair moves.
:::

## What to do now

Open the simulator and try to move the gripper straight toward the table's far edge using only the single-joint keys, \`w\` and \`e\`. Then do it with \`u\` and \`o\`. Watching two joint readings change for one key is what the IK loop does for you on every tick; when you set up the phone example, you will feel the same thing in your hand.
`}))();export{t as default};