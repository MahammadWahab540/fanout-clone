import{i as e,n as t}from"./rolldown-runtime-BgaNhQyE.js";import{t as n}from"./react-C65L1HE3.js";import{t as r}from"./jsx-runtime-CIkHs51R.js";function i(){if(!s){let e=async e=>{let t=await fetch(`/assets/tinyllama/${e}`);if(!t.ok)throw Error(`Could not load ${e}. Check your connection and retry.`);return t};s=Promise.all([e(`inference.js`).then(e=>e.text()),e(`cache-lab.js`).then(e=>e.text()),e(`lesson-labs.js`).then(e=>e.text()),e(`advanced-labs.js`).then(e=>e.text()),e(`stories260K.bin`).then(e=>e.arrayBuffer()),e(`tok512.bin`).then(e=>e.arrayBuffer())]).then(([e,t,n,r,i,a])=>({library:e,runner:t,lessons:n,advanced:r,modelBytes:i,tokenizerBytes:a})).catch(e=>{throw s=void 0,e})}return s}function a(e,t,n){let r=document.createElement(`iframe`);r.sandbox.add(`allow-scripts`),r.hidden=!0,r.title=`Isolated inference runner`;let i=new MessageChannel,a=!1,o=window.setTimeout(()=>{s(),n(`Stopped after 30 seconds. Check for an endless loop or reduce the work, then run again.`)},3e4);function s(){a||(a=!0,clearTimeout(o),i.port1.postMessage({type:`stop`}),i.port1.close(),r.remove())}return r.onload=()=>r.contentWindow?.postMessage(`connect`,`*`,[i.port2]),i.port1.onmessage=async({data:r})=>{if(!a)if(r.ready)try{let{source:t,input:n}=await e();if(a)return;i.port1.postMessage({source:t,input:n})}catch(e){s(),n(e instanceof Error?e.message:String(e))}else r.error?(s(),n(String(r.error))):r.result&&(s(),t(r.result))},r.srcdoc=c,document.body.appendChild(r),s}function o(e,t,n){return a(async()=>{let{library:t,runner:n,lessons:r,advanced:a,modelBytes:o,tokenizerBytes:s}=await i(),c=t.slice(0,t.indexOf(`// Optional browser loader.`)).replace(/^export /gm,``),l=n.replace(/^import .*from '\.\/inference\.js';\n/,``).replace(/^export /gm,``),u=r.replace(/^import .*from '\.\/inference\.js';\n/,``).replace(/^export /gm,``),d=a.replace(/^import .*from '\.\/inference\.js';\n/,``).replace(/^export /gm,``);return{source:`(function() {
`+c+`
`+l+`
`+u+`
`+d+`
self.onmessage = ({data}) => {
  try { self.postMessage({result:advancedKinds.includes(data.kind) ? runAdvancedExperiment(data) : data.kind ? runLessonExperiment(data) : runCacheExperiment(data)}); }
  catch(error) { self.postMessage({error:error.message || String(error)}); }
};
})();`,input:{...e,modelBytes:o,tokenizerBytes:s}}},t,n)}var s,c,l=t((()=>{c=`<!doctype html><meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline' 'unsafe-eval' blob:; worker-src blob:; connect-src 'none'; base-uri 'none'; form-action 'none'"><script>
addEventListener('message', function init(event) {
  if (event.source !== parent || !event.ports[0]) return;
  removeEventListener('message', init);
  const port = event.ports[0];
  let worker;
  port.onmessage = ({data}) => {
    if (data.type === 'stop') { worker?.terminate(); return; }
    try {
      const url = URL.createObjectURL(new Blob([data.source], {type:'text/javascript'}));
      worker = new Worker(url);
      worker.onmessage = ({data}) => { URL.revokeObjectURL(url); port.postMessage(data); };
      worker.onerror = (event) => { URL.revokeObjectURL(url); port.postMessage({error:event.message || 'The worker could not start.'}); };
      worker.postMessage(data.input);
    } catch(error) { port.postMessage({error:error.message}); }
  };
  port.start();
  port.postMessage({ready:true});
});
<\/script>`}));function u(e){let t=[],n=0;for(let r of e.matchAll(m)){let i=r[0],a=r.index;t.push(e.slice(n,a));let o=i.startsWith(`//`)||i.startsWith(`/*`)?`comment`:/^["'`]/.test(i)?`string`:/^\d/.test(i)||g.has(i)?`number`:h.has(i)?`keyword`:/^\s*\(/.test(e.slice(a+i.length))?`function`:``;t.push(o?(0,p.jsx)(`span`,{className:`cache-syntax-${o}`,children:i},a):i),n=a+i.length}return t.push(e.slice(n),`
`),t}function d({value:e,className:t=``,onScroll:n,...r}){let i=(0,f.useRef)(null);return(0,p.jsxs)(`div`,{className:`cache-highlight-editor`,children:[(0,p.jsx)(`div`,{className:`cache-highlight-viewport`,"aria-hidden":`true`,children:(0,p.jsx)(`pre`,{ref:i,className:`cache-code cache-highlight-paint`,children:(0,f.useMemo)(()=>u(e),[e])})}),(0,p.jsx)(`textarea`,{...r,value:e,className:`${t} cache-highlight-input`,wrap:`off`,onScroll:e=>{i.current&&(i.current.style.transform=`translate(${-e.currentTarget.scrollLeft}px, ${-e.currentTarget.scrollTop}px)`),n?.(e)}})]})}var f,p,m,h,g,_=t((()=>{f=e(n(),1),p=r(),m=/\/\/[^\n\r]*|\/\*[\s\S]*?(?:\*\/|$)|"(?:\\[\s\S]|[^"\\])*"?|'(?:\\[\s\S]|[^'\\])*'?|`(?:\\[\s\S]|[^`\\])*`?|\b(?:0[xX][\da-fA-F]+|0[bB][01]+|\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)n?\b|\b[$\w]+\b/g,h=new Set(`async await break case catch class const continue debugger default delete do else export extends finally for function if import in instanceof let new of return static super switch throw try typeof var void while with yield`.split(` `)),g=new Set(`true false null undefined NaN Infinity`.split(` `))})),v=t((()=>{}));export{i as a,l as i,d as n,o,_ as r,a as s,v as t};