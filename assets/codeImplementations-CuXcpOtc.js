import{n as e}from"./rolldown-runtime-BgaNhQyE.js";import{b as t,y as n}from"./course-BTCj9yDO.js";var r,i=e((()=>{r=`# Sliding Window Rate Limiter

This limiter keeps recent request timestamps per key and rejects calls once a key has too many hits inside the active window.

Production systems usually store this state in Redis or another shared store. The in-memory version makes the algorithm easy to see first.

Read in order:

1. \`src/limiter.ts\`
2. \`src/demo.ts\`

The demo prints numbered steps showing accepted requests, blocked requests, retry timing, and capacity returning as the window moves.
`})),a,o=e((()=>{a=`import { SlidingWindowRateLimiter } from "./limiter";

const limiter = new SlidingWindowRateLimiter(3, 10_000);
const userKey = "user:42";
const start = 1_700_000_000_000;

console.log("1. Allow at most 3 requests per user inside a rolling 10 second window.");
console.log("2. Send five requests one second apart.");
for (let i = 0; i < 5; i += 1) {
  const now = start + i * 1_000;
  const result = limiter.allow(userKey, now);
  console.log(\`   t+\${i}s request \${i + 1} -> \${formatResult(result)}\`);
}

console.log("\\n3. Wait until the first timestamp leaves the window.");
const later = limiter.allow(userKey, start + 11_000);
console.log(\`   t+11s request 6 -> \${formatResult(later)}\`);

console.log(
  "\\nBehavior to remember: capacity comes back as old timestamps fall out of the rolling window.",
);

function formatResult(result: { allowed: boolean; remaining: number; retryAfterMs: number }) {
  if (result.allowed) return \`allowed, remaining=\${result.remaining}\`;
  return \`blocked, retryAfterMs=\${result.retryAfterMs}\`;
}
`})),s,c=e((()=>{s=`export class SlidingWindowRateLimiter {
  private hitsByKey = new Map<string, number[]>();

  constructor(
    private maxRequests: number,
    private windowMs: number,
  ) {}

  allow(key: string, now = Date.now()) {
    const windowStart = now - this.windowMs;
    // Drop timestamps that are outside the active rolling window.
    const recentHits = (this.hitsByKey.get(key) ?? []).filter((hit) => hit > windowStart);

    if (recentHits.length >= this.maxRequests) {
      this.hitsByKey.set(key, recentHits);
      // The oldest kept hit tells the client when capacity opens again.
      return {
        allowed: false,
        remaining: 0,
        retryAfterMs: recentHits[0] + this.windowMs - now,
      };
    }

    // Store the accepted request time so future calls see it.
    recentHits.push(now);
    this.hitsByKey.set(key, recentHits);

    return {
      allowed: true,
      remaining: this.maxRequests - recentHits.length,
      retryAfterMs: 0,
    };
  }
}
`})),l,u,d=e((()=>{i(),o(),c(),l=Object.assign({"../../../../implementations/sliding-window-rate-limiter/README.md":r,"../../../../implementations/sliding-window-rate-limiter/src/demo.ts":a,"../../../../implementations/sliding-window-rate-limiter/src/limiter.ts":s}),u=[`sliding-window-rate-limiter`]}));function f(e){return g.get(e)}function p(e){let t=f(e);return t?[t.title,t.summary,t.primaryLanguage,t.takeaways.join(` `),t.files.map(e=>{let t=`${e.path} ${e.role} ${e.language}`;return e.source?`${t}\n${e.source}`:t}).join(`
`)].join(`
`):``}function m(e,t,n){if(!n)return null;let r=`../../../../implementations/${e}/${t}`,i=l[r];if(typeof i!=`string`)throw Error(`Missing implementation file: ${r}`);return i}var h,g,_=e((()=>{d(),t(),h=n.map(e=>{let t=u.includes(e.id)?`free`:`pro`,n=t===`pro`;return{...e,access:t,locked:n,files:e.files.map(n=>({...n,source:m(e.id,n.path,t===`free`)}))}}),g=new Map;for(let e of h)for(let t of e.archiveSlugs)g.set(t,e)}));export{_ as a,p as i,g as n,f as r,h as t};