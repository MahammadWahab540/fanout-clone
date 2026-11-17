import{n as e}from"./rolldown-runtime-BgaNhQyE.js";function t(){return{torque:!1,present:p,goal:p,load:0}}function n(e){return(Math.round(e)%d+d)%d}function r(e){return e*360/d}function i(e){return n(e*d/360)}function a(e){return Math.min(100,Math.round(Math.abs(e)/400*100))}function o(e,t){return e.torque?e:{...e,present:n(t),load:0}}function s(e,t){return t?{...e,torque:t,goal:e.present,load:0}:{...e,torque:t,load:0}}function c(e,t){return{...e,goal:Math.min(f,Math.max(0,Math.round(t)))}}function l(e,t,n){if(!e.torque)return{...e,load:0};if(n!==void 0){let t=Math.min(f,Math.max(0,Math.round(n)));return{...e,present:t,load:a(e.goal-t)}}let r=e.goal-e.present,i=Math.max(-3e3,Math.min(m,6*r)),o=e.present+i*t/1e3;return(Math.abs(e.goal-o)<1||Math.sign(e.goal-o)!==Math.sign(r))&&(o=e.goal),{...e,present:o,load:a(e.goal-o)}}function u(e){return Math.abs(e.goal-e.present)<1}var d,f,p,m,h=e((()=>{d=4096,f=d-1,p=2048,m=3e3}));function g(e){let n=e!==`power-and-wiring`;return{servo:t(),wiring:{usb:n,cable:n,power:n,voltage:5},held:!1,paused:!1,achievements:[]}}function _(e){return e.power&&e.cable&&e.voltage===12?{ready:!1,reason:`12 V exceeds this 7.4 V servo’s rating. Disconnect power and select the 5 V supply.`}:e.usb?e.cable?e.power?{ready:!0,reason:`The command path and motor power are connected. The servo can answer.`}:{ready:!1,reason:`USB is connected, but the motor has no power. Connect the supply.`}:{ready:!1,reason:`The computer sees the board. Connect the three-wire servo cable with power off.`}:{ready:!1,reason:`Connect USB so the computer can send commands to the board.`}}function v(e,t){return e.achievements.includes(t)?e:{...e,achievements:[...e.achievements,t]}}function y(e,t){let n=e;switch(t.type){case`wire`:if(t.key===`cable`&&e.wiring.power)throw Error(`Disconnect the supply before changing the servo cable.`);n={...e,wiring:{...e.wiring,[t.key]:t.value}};break;case`voltage`:if(e.wiring.power)throw Error(`Disconnect the supply before changing it.`);n={...e,wiring:{...e.wiring,voltage:t.value}};break;case`torque`:if(t.value&&!_(e.wiring).ready)throw Error(_(e.wiring).reason);n={...e,servo:s(e.servo,t.value)};break;case`goal`:if(!Number.isInteger(t.value)||t.value<0||t.value>4095)throw Error(`Goal must be a whole encoder count from 0 to 4095.`);if(!_(e.wiring).ready)throw Error(_(e.wiring).reason);n={...e,servo:c(e.servo,t.value)};break;case`hand`:if(e.servo.torque)return e;n=v({...e,servo:o(e.servo,t.value)},`Turned the horn`);break;case`hold`:n={...e,held:t.value};break;case`pause`:n={...e,paused:t.value};break;case`step`:case`tick`:if(e.paused&&t.type===`tick`||!e.servo.torque||!_(e.wiring).ready)return e;n={...e,servo:l(e.servo,Math.max(0,Math.min(t.dt,100)),e.held?e.servo.present:void 0)},Math.abs(n.servo.present-e.servo.present)>0&&(n=v(n,`Moved the motor`));break;case`achievement`:return v(e,t.value)}return _(n.wiring).ready||(n={...n,servo:s(n.servo,!1)}),_(n.wiring).ready&&t.type===`wire`&&(n=v(n,`Connected the circuit`)),n}function b(e,t){let n=g(t);if(!e||typeof e!=`object`)return n;let r=e;return!r.servo||!r.wiring||![r.servo.present,r.servo.goal].every(e=>Number.isFinite(e)&&e>=0&&e<=4095)||![5,12].includes(r.wiring.voltage)||![r.wiring.usb,r.wiring.cable,r.wiring.power].every(e=>typeof e==`boolean`)?n:{...n,servo:{...n.servo,present:r.servo.present,goal:r.servo.goal},wiring:r.wiring,achievements:Array.isArray(r.achievements)?r.achievements.filter(e=>typeof e==`string`).slice(0,8):[]}}function x(e,t,n){if(e)return b(e,n);let r=b(t,n);return n===`power-and-wiring`?{...r,wiring:g(n).wiring}:r}function S(e,t){return`from fanout_sim import servo

positions = ${JSON.stringify(e)}
rate = ${t}

await servo.enable_torque()
await servo.move_to(positions[0])
await servo.wait(2)
for position in positions:
    await servo.move_to(position)
    await servo.wait(1 / rate)
await servo.wait(1)
print("Replayed", len(positions), "positions")
print("Measured:", await servo.position())
await servo.disable_torque()
`}function C(e){return e===`copycat-servo`?S([1024,1536,2048,2560,3072,2048],5):A}function w(e){if(!e||typeof e!=`object`)return null;let t=e;return![5,30].includes(t.rate)||!Array.isArray(t.positions)||t.positions.length<2||t.positions.length>150||!t.positions.every(e=>Number.isInteger(e)&&e>=0&&e<=4095)?null:{rate:t.rate,positions:t.positions}}var T,E,D,O,k,A,j=e((()=>{h(),T=[`inside-a-smart-servo`,`power-and-wiring`,`read-and-move-a-servo`],E=[...T,`many-motors-one-wire`,`copycat-servo`],D=e=>E.includes(e),O=e=>T.includes(e),k=`from fanout_sim import servo

# This controls the motor in your workbench.
start = await servo.position()
print("Starting at", start)

await servo.enable_torque()
await servo.move_to(1024)  # 90 degrees
await servo.wait(1)

actual = await servo.position()
print("Target: 1024 | Measured:", actual)
await servo.disable_torque()
`,A=`from fanout_sim import servo

target = 1024
await servo.enable_torque()
await servo.move_to(target)
await servo.wait(1)
print("Requested:", target)
print("Measured:", await servo.position())
await servo.disable_torque()
`}));export{l as C,u as S,i as _,x as a,c as b,O as c,b as d,w as f,r as g,f as h,_ as i,D as l,y as m,E as n,j as o,C as p,k as r,g as s,A as t,S as u,h as v,o as w,s as x,t as y};