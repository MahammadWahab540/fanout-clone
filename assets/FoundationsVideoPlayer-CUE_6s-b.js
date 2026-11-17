import{i as e,n as t}from"./rolldown-runtime-BgaNhQyE.js";import{t as n}from"./react-C65L1HE3.js";import{t as r}from"./jsx-runtime-CIkHs51R.js";import{t as i}from"./brand-C2gbhl7g.js";import{t as a}from"./PhIcon-C8YzW2Wq.js";import{Jt as o,qt as s}from"./index-CXfpSli5.js";import{n as c,t as l}from"./events-BAqcntRu.js";import{n as u,t as d}from"./learningContext-CoVotwlu.js";function f(e){return e.toLowerCase()}function p(e){if(typeof e==`boolean`)return e?``:void 0;if(typeof e!=`function`&&!(typeof e==`object`&&e))return e}function m({react:e,tagName:t,elementClass:n,events:r,displayName:i,defaultProps:a,toAttributeName:o=f,toAttributeValue:s=p}){let c=Number.parseInt(e.version)>=19,l=e.forwardRef((i,l)=>{let u=e.useRef(null),d=e.useRef(new Map),f={},m={},g={},_={};for(let[e,t]of Object.entries(i)){if(te.has(e)){g[e]=t;continue}let r=o(h[e]??e);if(n.prototype&&e in n.prototype&&!(e in(globalThis.HTMLElement?.prototype??{}))&&!n.observedAttributes?.some(e=>e===r)){_[e]=t;continue}if(e.startsWith(`on`)){f[e]=t;continue}let i=s(t);r&&i!=null&&(m[r]=String(i),c||(g[r]=i)),r&&c&&(i===p(t)?g[r]=t:g[r]=i)}if(typeof window<`u`){for(let t in f){let n=f[t],i=t.endsWith(`Capture`),a=(r?.[t]??t.slice(2).toLowerCase()).slice(0,i?-7:void 0);e.useLayoutEffect(()=>{let e=u?.current;if(!(!e||typeof n!=`function`))return e.addEventListener(a,n,i),()=>{e.removeEventListener(a,n,i)}},[u?.current,n])}e.useLayoutEffect(()=>{if(u.current===null)return;let e=new Map;for(let t in _)ee(u.current,t,_[t]),d.current.delete(t),e.set(t,_[t]);for(let[e,t]of d.current)ee(u.current,e,void 0);d.current=e})}if(typeof window>`u`&&n?.getTemplateHTML&&n?.shadowRootOptions){let{mode:t,delegatesFocus:r}=n.shadowRootOptions;g.children=[e.createElement(`template`,{shadowrootmode:t,shadowrootdelegatesfocus:r,dangerouslySetInnerHTML:{__html:n.getTemplateHTML(m,i)},key:`ce-la-react-ssr-template-shadow-root`}),g.children]}return e.createElement(t,{...a,...g,ref:e.useCallback(e=>{u.current=e,typeof l==`function`?l(e):l!==null&&(l.current=e)},[l])},g.children)});return l.displayName=i??n.name,l}function ee(e,t,n){e[t]=n,n==null&&t in(globalThis.HTMLElement?.prototype??{})&&e.removeAttribute(t)}var te,h,g=t((()=>{te=new Set([`style`,`children`,`ref`,`key`,`suppressContentEditableWarning`,`suppressHydrationWarning`,`dangerouslySetInnerHTML`]),h={className:`class`,htmlFor:`for`}})),_,v,ne,re,y,ie,ae,oe,se,ce,b,le,ue,x=t((()=>{_={MEDIA_PLAY_REQUEST:`mediaplayrequest`,MEDIA_PAUSE_REQUEST:`mediapauserequest`,MEDIA_MUTE_REQUEST:`mediamuterequest`,MEDIA_UNMUTE_REQUEST:`mediaunmuterequest`,MEDIA_LOOP_REQUEST:`medialooprequest`,MEDIA_VOLUME_REQUEST:`mediavolumerequest`,MEDIA_SEEK_REQUEST:`mediaseekrequest`,MEDIA_AIRPLAY_REQUEST:`mediaairplayrequest`,MEDIA_ENTER_FULLSCREEN_REQUEST:`mediaenterfullscreenrequest`,MEDIA_EXIT_FULLSCREEN_REQUEST:`mediaexitfullscreenrequest`,MEDIA_PREVIEW_REQUEST:`mediapreviewrequest`,MEDIA_ENTER_PIP_REQUEST:`mediaenterpiprequest`,MEDIA_EXIT_PIP_REQUEST:`mediaexitpiprequest`,MEDIA_ENTER_CAST_REQUEST:`mediaentercastrequest`,MEDIA_EXIT_CAST_REQUEST:`mediaexitcastrequest`,MEDIA_SHOW_TEXT_TRACKS_REQUEST:`mediashowtexttracksrequest`,MEDIA_HIDE_TEXT_TRACKS_REQUEST:`mediahidetexttracksrequest`,MEDIA_SHOW_SUBTITLES_REQUEST:`mediashowsubtitlesrequest`,MEDIA_DISABLE_SUBTITLES_REQUEST:`mediadisablesubtitlesrequest`,MEDIA_TOGGLE_SUBTITLES_REQUEST:`mediatogglesubtitlesrequest`,MEDIA_PLAYBACK_RATE_REQUEST:`mediaplaybackraterequest`,MEDIA_RENDITION_REQUEST:`mediarenditionrequest`,MEDIA_AUDIO_TRACK_REQUEST:`mediaaudiotrackrequest`,MEDIA_SEEK_TO_LIVE_REQUEST:`mediaseektoliverequest`,REGISTER_MEDIA_STATE_RECEIVER:`registermediastatereceiver`,UNREGISTER_MEDIA_STATE_RECEIVER:`unregistermediastatereceiver`},v={MEDIA_CHROME_ATTRIBUTES:`mediachromeattributes`,MEDIA_CONTROLLER:`mediacontroller`},ne={MEDIA_AIRPLAY_UNAVAILABLE:`mediaAirplayUnavailable`,MEDIA_AUDIO_TRACK_ENABLED:`mediaAudioTrackEnabled`,MEDIA_AUDIO_TRACK_LIST:`mediaAudioTrackList`,MEDIA_AUDIO_TRACK_UNAVAILABLE:`mediaAudioTrackUnavailable`,MEDIA_BUFFERED:`mediaBuffered`,MEDIA_CAST_UNAVAILABLE:`mediaCastUnavailable`,MEDIA_CHAPTERS_CUES:`mediaChaptersCues`,MEDIA_CURRENT_TIME:`mediaCurrentTime`,MEDIA_DURATION:`mediaDuration`,MEDIA_ENDED:`mediaEnded`,MEDIA_ERROR:`mediaError`,MEDIA_ERROR_CODE:`mediaErrorCode`,MEDIA_ERROR_MESSAGE:`mediaErrorMessage`,MEDIA_FULLSCREEN_UNAVAILABLE:`mediaFullscreenUnavailable`,MEDIA_HAS_PLAYED:`mediaHasPlayed`,MEDIA_HEIGHT:`mediaHeight`,MEDIA_IS_AIRPLAYING:`mediaIsAirplaying`,MEDIA_IS_CASTING:`mediaIsCasting`,MEDIA_IS_FULLSCREEN:`mediaIsFullscreen`,MEDIA_IS_PIP:`mediaIsPip`,MEDIA_LOADING:`mediaLoading`,MEDIA_MUTED:`mediaMuted`,MEDIA_LOOP:`mediaLoop`,MEDIA_PAUSED:`mediaPaused`,MEDIA_PIP_UNAVAILABLE:`mediaPipUnavailable`,MEDIA_PLAYBACK_RATE:`mediaPlaybackRate`,MEDIA_PREVIEW_CHAPTER:`mediaPreviewChapter`,MEDIA_PREVIEW_COORDS:`mediaPreviewCoords`,MEDIA_PREVIEW_IMAGE:`mediaPreviewImage`,MEDIA_PREVIEW_TIME:`mediaPreviewTime`,MEDIA_RENDITION_LIST:`mediaRenditionList`,MEDIA_RENDITION_SELECTED:`mediaRenditionSelected`,MEDIA_RENDITION_UNAVAILABLE:`mediaRenditionUnavailable`,MEDIA_SEEKABLE:`mediaSeekable`,MEDIA_STREAM_TYPE:`mediaStreamType`,MEDIA_SUBTITLES_LIST:`mediaSubtitlesList`,MEDIA_SUBTITLES_SHOWING:`mediaSubtitlesShowing`,MEDIA_TARGET_LIVE_WINDOW:`mediaTargetLiveWindow`,MEDIA_TIME_IS_LIVE:`mediaTimeIsLive`,MEDIA_VOLUME:`mediaVolume`,MEDIA_VOLUME_LEVEL:`mediaVolumeLevel`,MEDIA_VOLUME_UNAVAILABLE:`mediaVolumeUnavailable`,MEDIA_LANG:`mediaLang`,MEDIA_WIDTH:`mediaWidth`},re=Object.entries(ne),y=re.reduce((e,[t,n])=>(e[t]=n.toLowerCase(),e),{}),ie=re.reduce((e,[t,n])=>(e[t]=n.toLowerCase(),e),{USER_INACTIVE_CHANGE:`userinactivechange`,BREAKPOINTS_CHANGE:`breakpointchange`,BREAKPOINTS_COMPUTED:`breakpointscomputed`}),Object.entries(ie).reduce((e,[t,n])=>{let r=y[t];return r&&(e[n]=r),e},{userinactivechange:`userinactive`}),ae=Object.entries(y).reduce((e,[t,n])=>{let r=ie[t];return r&&(e[n]=r),e},{userinactive:`userinactivechange`}),oe={SUBTITLES:`subtitles`,CAPTIONS:`captions`,DESCRIPTIONS:`descriptions`,CHAPTERS:`chapters`,METADATA:`metadata`},se={DISABLED:`disabled`,HIDDEN:`hidden`,SHOWING:`showing`},ce={MOUSE:`mouse`,PEN:`pen`,TOUCH:`touch`},b={UNAVAILABLE:`unavailable`,UNSUPPORTED:`unsupported`},le={LIVE:`live`,ON_DEMAND:`on-demand`,UNKNOWN:`unknown`},ue={INLINE:`inline`,FULLSCREEN:`fullscreen`,PICTURE_IN_PICTURE:`picture-in-picture`}}));function de(e){return e?.map(fe).join(` `)}function fe(e){if(e){let{id:t,width:n,height:r}=e;return[t,n,r].filter(e=>e!=null).join(`:`)}}function pe(e){return e?.map(me).join(` `)}function me(e){if(e){let{id:t,kind:n,language:r,label:i}=e;return[t,n,r,i].filter(e=>e!=null).join(`:`)}}function he(e){return typeof e==`number`&&!Number.isNaN(e)&&Number.isFinite(e)}var ge,_e=t((()=>{ge=e=>new Promise(t=>setTimeout(t,e))})),ve,ye=t((()=>{ve={"Start airplay":`Start airplay`,"Stop airplay":`Stop airplay`,Audio:`Audio`,Captions:`Captions`,"Enable captions":`Enable captions`,"Disable captions":`Disable captions`,"Start casting":`Start casting`,"Stop casting":`Stop casting`,"Enter fullscreen mode":`Enter fullscreen mode`,"Exit fullscreen mode":`Exit fullscreen mode`,Mute:`Mute`,Unmute:`Unmute`,Loop:`Loop`,"Enter picture in picture mode":`Enter picture in picture mode`,"Exit picture in picture mode":`Exit picture in picture mode`,Play:`Play`,Pause:`Pause`,"Playback rate":`Playback rate`,"Playback rate {playbackRate}":`Playback rate {playbackRate}`,Quality:`Quality`,"Seek backward":`Seek backward`,"Seek forward":`Seek forward`,Settings:`Settings`,Auto:`Auto`,"audio player":`audio player`,"video player":`video player`,volume:`volume`,seek:`seek`,"closed captions":`closed captions`,"current playback rate":`current playback rate`,"playback time":`playback time`,"media loading":`media loading`,settings:`settings`,"audio tracks":`audio tracks`,quality:`quality`,play:`play`,pause:`pause`,mute:`mute`,unmute:`unmute`,"chapter: {chapterName}":`chapter: {chapterName}`,live:`live`,Off:`Off`,"start airplay":`start airplay`,"stop airplay":`stop airplay`,"start casting":`start casting`,"stop casting":`stop casting`,"enter fullscreen mode":`enter fullscreen mode`,"exit fullscreen mode":`exit fullscreen mode`,"enter picture in picture mode":`enter picture in picture mode`,"exit picture in picture mode":`exit picture in picture mode`,"seek to live":`seek to live`,"playing live":`playing live`,"seek back {seekOffset} seconds":`seek back {seekOffset} seconds`,"seek forward {seekOffset} seconds":`seek forward {seekOffset} seconds`,"Network Error":`Network Error`,"Decode Error":`Decode Error`,"Source Not Supported":`Source Not Supported`,"Encryption Error":`Encryption Error`,"A network error caused the media download to fail.":`A network error caused the media download to fail.`,"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":`A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.`,"An unsupported error occurred. The server or network failed, or your browser does not support this format.":`An unsupported error occurred. The server or network failed, or your browser does not support this format.`,"The media is encrypted and there are no keys to decrypt it.":`The media is encrypted and there are no keys to decrypt it.`,hour:`hour`,hours:`hours`,minute:`minute`,minutes:`minutes`,second:`second`,seconds:`seconds`,"{time} remaining":`{time} remaining`,"{currentTime} of {totalTime}":`{currentTime} of {totalTime}`,"video not loaded, unknown time.":`video not loaded, unknown time.`}})),be,xe,Se,Ce,we,S,C=t((()=>{ye(),be={en:ve},xe=globalThis.navigator?.language||`en`,Se=e=>{xe=e},Ce=e=>{let[t]=xe.split(`-`);return be[xe]?.[e]||be[t]?.[e]||be.en?.[e]||e},we=()=>{let[e]=xe.split(`-`);return be[xe]?xe:be[e]?e:`en`},S=(e,t={})=>Ce(e).replace(/\{(\w+)\}/g,(e,n)=>n in t?String(t[n]):`{${n}}`)}));function Te(e,t){let n=!1;e<0&&(n=!0,e=0-e),e=e<0?0:e;let r=Math.floor(e%60),i=Math.floor(e/60%60),a=Math.floor(e/3600),o=Math.floor(t/60%60),s=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(a=i=r=`0`),a=a>0||s>0?a+`:`:``,i=((a||o>=10)&&i<10?`0`+i:i)+`:`,r=r<10?`0`+r:r,(n?`-`:``)+a+i+r}var Ee,De,Oe,ke=t((()=>{_e(),C(),Ee=[{singular:`hour`,plural:`hours`},{singular:`minute`,plural:`minutes`},{singular:`second`,plural:`seconds`}],De=(e,t)=>`${e} ${S(e===1?Ee[t].singular:Ee[t].plural)}`,Oe=e=>{if(!he(e))return``;let t=Math.abs(e),n=t!==e,r=new Date(0,0,0,0,0,t,0),i=[r.getHours(),r.getMinutes(),r.getSeconds()].map((e,t)=>e&&De(e,t)).filter(e=>e).join(`, `);return n?S(`{time} remaining`,{time:i}):i},Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}})})),Ae,je,Me,Ne,Pe,Fe,Ie,Le,w,T,E=t((()=>{Ae=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}},je=class extends Ae{},Me=class extends je{constructor(){super(...arguments),this.role=null}},Ne=class{observe(){}unobserve(){}disconnect(){}},Pe={createElement:function(){return new Fe.HTMLElement},createElementNS:function(){return new Fe.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(e){return!1}},Fe={ResizeObserver:Ne,document:Pe,Node:je,Element:Me,HTMLElement:class extends Me{constructor(){super(...arguments),this.innerHTML=``}get content(){return new Fe.DocumentFragment}},DocumentFragment:class extends Ae{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(e){return null},setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return``}},matchMedia(e){return{matches:!1,media:e}},DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},Ie=`global`in globalThis&&(globalThis==null?void 0:globalThis.global)===globalThis||typeof window>`u`||window.customElements===void 0,Le=Object.keys(Fe).every(e=>e in globalThis),w=Ie&&!Le?Fe:globalThis,T=Ie&&!Le?Pe:globalThis.document}));function Re(e,t){Ve(e).add(t),He.observe(e)}function ze(e,t){let n=Ve(e);n.delete(t),n.size||He.unobserve(e)}var Be,Ve,He,Ue=t((()=>{E(),Be=new WeakMap,Ve=e=>{let t=Be.get(e);return t||Be.set(e,t=new Set),t},He=new w.ResizeObserver(e=>{for(let t of e)for(let e of Ve(t.target))e(t)})}));function We(e){let t={};for(let n of e)t[n.name]=n.value;return t}function Ge(e){return Ke(e)??rt(e,`media-controller`)}function Ke(e){let{MEDIA_CONTROLLER:t}=v,n=e.getAttribute(t);if(n)return Je(e)?.getElementById(n)}function qe(e=document){let t=e?.activeElement;return t?qe(t.shadowRoot)??t:null}function Je(e){let t=(e?.getRootNode)?.call(e);return t instanceof ShadowRoot||t instanceof Document?t:null}function Ye(e,{depth:t=3,checkOpacity:n=!0,checkVisibilityCSS:r=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:n,checkVisibilityCSS:r});let i=e;for(;i&&t>0;){let e=getComputedStyle(i);if(n&&e.opacity===`0`||r&&e.visibility===`hidden`||e.display===`none`)return!1;i=i.parentElement,t--}return!0}function Xe(e,t,n,r){let i=r.x-n.x,a=r.y-n.y,o=i*i+a*a;if(o===0)return 0;let s=((e-n.x)*i+(t-n.y)*a)/o;return Math.max(0,Math.min(1,s))}function D(e,t){return Ze(e,e=>e===t)||Qe(e,t)}function Ze(e,t){let n;for(n of e.querySelectorAll(`style:not([media])`)??[]){let e;try{e=n.sheet?.cssRules}catch{continue}for(let n of e??[])if(t(n.selectorText))return n}}function Qe(e,t){let n=e.querySelectorAll(`style:not([media])`)??[],r=n?.[n.length-1];if(!r?.sheet)return console.warn(`Media Chrome: No style sheet found on style tag of`,e),{style:{setProperty:()=>{},removeProperty:()=>``,getPropertyValue:()=>``}};let i=r?.sheet.insertRule(`${t}{}`,r.sheet.cssRules.length);return r.sheet.cssRules?.[i]}function O(e,t,n=NaN){let r=e.getAttribute(t);return r==null?n:+r}function k(e,t,n){let r=+n;if(n==null||Number.isNaN(r)){e.hasAttribute(t)&&e.removeAttribute(t);return}O(e,t,void 0)!==r&&e.setAttribute(t,`${r}`)}function A(e,t){return e.hasAttribute(t)}function j(e,t,n){if(n==null){e.hasAttribute(t)&&e.removeAttribute(t);return}A(e,t)!=n&&e.toggleAttribute(t,n)}function M(e,t,n=null){return e.getAttribute(t)??n}function N(e,t,n){if(n==null){e.hasAttribute(t)&&e.removeAttribute(t);return}let r=`${n}`;M(e,t,void 0)!==r&&e.setAttribute(t,r)}var $e,et,tt,nt,rt,P=t((()=>{x(),$e=(e,t,n=`.value`)=>{let r=e.querySelector(n);r&&(r.textContent=t)},et=(e,t)=>{let n=`slot[name="${t}"]`,r=e.shadowRoot.querySelector(n);return r?r.children:[]},tt=(e,t)=>et(e,t)[0],nt=(e,t)=>!e||!t?!1:e?.contains(t)?!0:nt(e,t.getRootNode().host),rt=(e,t)=>e?e.closest(t)||rt(e.getRootNode().host,t):null}));function it(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}function at(e){let t=e.getAttribute(v.MEDIA_CONTROLLER);return t?e.getRootNode()?.getElementById(t):rt(e,`media-controller`)}var ot,st,ct,lt,F,ut,dt,ft=t((()=>{x(),P(),E(),ot=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},st=(e,t,n)=>(ot(e,t,`read from private field`),n?n.call(e):t.get(e)),ct=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},lt=(e,t,n,r)=>(ot(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),ut=class extends w.HTMLElement{constructor(){if(super(),ct(this,F,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=We(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[v.MEDIA_CONTROLLER,y.MEDIA_PAUSED]}attributeChangedCallback(e,t,n){var r,i,a,o;e===v.MEDIA_CONTROLLER&&(t&&((i=(r=st(this,F))?.unassociateElement)==null||i.call(r,this),lt(this,F,null)),n&&this.isConnected&&(lt(this,F,this.getRootNode()?.getElementById(n)),(o=(a=st(this,F))?.associateElement)==null||o.call(a,this)))}connectedCallback(){var e,t;this.tabIndex=-1,this.setAttribute(`aria-hidden`,`true`),lt(this,F,at(this)),this.getAttribute(v.MEDIA_CONTROLLER)&&((t=(e=st(this,F))?.associateElement)==null||t.call(e,this)),st(this,F)&&(st(this,F).addEventListener(`pointerdown`,this),st(this,F).addEventListener(`click`,this),st(this,F).hasAttribute(`tabindex`)||(st(this,F).tabIndex=0))}disconnectedCallback(){var e,t,n,r;this.getAttribute(v.MEDIA_CONTROLLER)&&((t=(e=st(this,F))?.unassociateElement)==null||t.call(e,this)),(n=st(this,F))==null||n.removeEventListener(`pointerdown`,this),(r=st(this,F))==null||r.removeEventListener(`click`,this),lt(this,F,null)}handleEvent(e){let t=e.composedPath()?.[0];if([`video`,`media-controller`].includes(t?.localName)){if(e.type===`pointerdown`)this._pointerType=e.pointerType;else if(e.type===`click`){let{clientX:t,clientY:n}=e,{left:r,top:i,width:a,height:o}=this.getBoundingClientRect(),s=t-r,c=n-i;if(s<0||c<0||s>a||c>o||a===0&&o===0)return;let l=this._pointerType||`mouse`;if(this._pointerType=void 0,l===ce.TOUCH){this.handleTap(e);return}else if(l===ce.MOUSE||l===ce.PEN){this.handleMouseClick(e);return}}}}get mediaPaused(){return A(this,y.MEDIA_PAUSED)}set mediaPaused(e){j(this,y.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?_.MEDIA_PLAY_REQUEST:_.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new w.CustomEvent(t,{composed:!0,bubbles:!0}))}},F=new WeakMap,ut.shadowRootOptions={mode:`open`},ut.getTemplateHTML=it,w.customElements.get(`media-gesture-receiver`)||w.customElements.define(`media-gesture-receiver`,ut),dt=ut}));function pt(e){return`
    <style>
      
      :host([${y.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${R.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${R.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${R.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${R.AUDIO}])[${R.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${R.AUDIO}])[${R.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${R.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${R.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${R.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${R.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${R.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${R.USER_INACTIVE}]:not([${y.MEDIA_PAUSED}]):not([${y.MEDIA_IS_AIRPLAYING}]):not([${y.MEDIA_IS_CASTING}]):not([${R.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${R.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${R.USER_INACTIVE}]:not([${R.NO_AUTOHIDE}]):not([${y.MEDIA_PAUSED}]):not([${y.MEDIA_IS_CASTING}]):not([${R.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${R.USER_INACTIVE}][${R.AUTOHIDE_OVER_CONTROLS}]:not([${R.NO_AUTOHIDE}]):not([${y.MEDIA_PAUSED}]):not([${y.MEDIA_IS_CASTING}]):not([${R.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${R.AUDIO}])[${y.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${dt.shadowRootOptions.mode}">
          ${dt.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `}function mt(e){ht(e.target,e.contentRect.width)}function ht(e,t){if(!e.isConnected)return;let n=gt(e.getAttribute(R.BREAKPOINTS)??Ht),r=_t(n,t),i=!1;if(Object.keys(n).forEach(t=>{if(r.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,``),i=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),i=!0)}),i){let t=new CustomEvent(ie.BREAKPOINTS_CHANGE,{detail:r});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(ie.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function gt(e){let t=e.split(/\s+/);return Object.fromEntries(t.map(e=>e.split(`:`)))}function _t(e,t){return Object.keys(e).filter(n=>t>=parseInt(e[n]))}var vt,I,L,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt,zt,Bt,R,Vt,Ht,Ut,Wt,Gt=t((()=>{E(),x(),Ue(),ft(),C(),P(),vt=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},I=(e,t,n)=>(vt(e,t,`read from private field`),n?n.call(e):t.get(e)),L=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},yt=(e,t,n,r)=>(vt(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),bt=(e,t,n)=>(vt(e,t,`access private method`),n),R={AUDIO:`audio`,AUTOHIDE:`autohide`,BREAKPOINTS:`breakpoints`,GESTURES_DISABLED:`gesturesdisabled`,KEYBOARD_CONTROL:`keyboardcontrol`,NO_AUTOHIDE:`noautohide`,USER_INACTIVE:`userinactive`,AUTOHIDE_OVER_CONTROLS:`autohideovercontrols`},Vt=Object.values(y),Ht=`sm:384 md:576 lg:768 xl:960`,Ut=class extends w.HTMLElement{constructor(){if(super(),L(this,kt),L(this,jt),L(this,Nt),L(this,Ft),L(this,Lt),L(this,xt,void 0),L(this,St,0),L(this,Ct,null),L(this,wt,null),L(this,Tt,void 0),this.breakpointsComputed=!1,L(this,Et,e=>{let t=this.media;for(let n of e){if(n.type!==`childList`)continue;let e=n.removedNodes;for(let r of e){if(r.slot!=`media`||n.target!=this)continue;let e=n.previousSibling&&n.previousSibling.previousElementSibling;if(!e||!t)this.mediaUnsetCallback(r);else{let t=e.slot!==`media`;for(;(e=e.previousSibling)!==null;)e.slot==`media`&&(t=!1);t&&this.mediaUnsetCallback(r)}}if(t)for(let e of n.addedNodes)e===t&&this.handleMediaUpdated(t)}}),L(this,Dt,!1),L(this,Ot,e=>{I(this,Dt)||(setTimeout(()=>{mt(e),yt(this,Dt,!1)},0),yt(this,Dt,!0))}),L(this,zt,void 0),L(this,Bt,()=>{if(!I(this,zt).assignedElements({flatten:!0}).length){I(this,Ct)&&this.mediaUnsetCallback(I(this,Ct));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=We(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}yt(this,xt,new MutationObserver(I(this,Et)))}static get observedAttributes(){return[R.AUTOHIDE,R.GESTURES_DISABLED].concat(Vt).filter(e=>![y.MEDIA_RENDITION_LIST,y.MEDIA_AUDIO_TRACK_LIST,y.MEDIA_CHAPTERS_CUES,y.MEDIA_WIDTH,y.MEDIA_HEIGHT,y.MEDIA_ERROR,y.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,n){e.toLowerCase()==R.AUTOHIDE&&(this.autohide=n)}get media(){let e=this.querySelector(`:scope > [slot=media]`);return e?.nodeName==`SLOT`&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(yt(this,Ct,e),e.localName.includes(`-`)&&await w.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;I(this,xt).observe(this,{childList:!0,subtree:!0}),Re(this,I(this,Ot));let t=this.getAttribute(R.AUDIO)==null?S(`video player`):S(`audio player`);this.setAttribute(`role`,`region`),this.setAttribute(`aria-label`,t),this.handleMediaUpdated(this.media),this.setAttribute(R.USER_INACTIVE,``),ht(this,this.getBoundingClientRect().width);let n=this.querySelector(`:scope > slot[slot=media]`);n&&(yt(this,zt,n),I(this,zt).addEventListener(`slotchange`,I(this,Bt))),this.addEventListener(`pointerdown`,this),this.addEventListener(`pointermove`,this),this.addEventListener(`pointerup`,this),this.addEventListener(`mouseleave`,this),this.addEventListener(`keyup`,this),(e=w.window)==null||e.addEventListener(`mouseup`,this)}disconnectedCallback(){var e;ze(this,I(this,Ot)),clearTimeout(I(this,wt)),I(this,xt).disconnect(),this.media&&this.mediaUnsetCallback(this.media),(e=w.window)==null||e.removeEventListener(`mouseup`,this),this.removeEventListener(`pointerdown`,this),this.removeEventListener(`pointermove`,this),this.removeEventListener(`pointerup`,this),this.removeEventListener(`mouseleave`,this),this.removeEventListener(`keyup`,this),I(this,zt)&&(I(this,zt).removeEventListener(`slotchange`,I(this,Bt)),yt(this,zt,null)),yt(this,Dt,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){yt(this,Ct,null)}handleEvent(e){switch(e.type){case`pointerdown`:yt(this,St,e.timeStamp);break;case`pointermove`:bt(this,kt,At).call(this,e);break;case`pointerup`:bt(this,jt,Mt).call(this,e);break;case`mouseleave`:bt(this,Nt,Pt).call(this);break;case`mouseup`:this.removeAttribute(R.KEYBOARD_CONTROL);break;case`keyup`:bt(this,Lt,Rt).call(this),this.setAttribute(R.KEYBOARD_CONTROL,``);break}}set autohide(e){let t=Number(e);yt(this,Tt,isNaN(t)?0:t)}get autohide(){return(I(this,Tt)===void 0?2:I(this,Tt)).toString()}get breakpoints(){return M(this,R.BREAKPOINTS)}set breakpoints(e){N(this,R.BREAKPOINTS,e)}get audio(){return A(this,R.AUDIO)}set audio(e){j(this,R.AUDIO,e)}get gesturesDisabled(){return A(this,R.GESTURES_DISABLED)}set gesturesDisabled(e){j(this,R.GESTURES_DISABLED,e)}get keyboardControl(){return A(this,R.KEYBOARD_CONTROL)}set keyboardControl(e){j(this,R.KEYBOARD_CONTROL,e)}get noAutohide(){return A(this,R.NO_AUTOHIDE)}set noAutohide(e){j(this,R.NO_AUTOHIDE,e)}get autohideOverControls(){return A(this,R.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){j(this,R.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return A(this,R.USER_INACTIVE)}set userInteractive(e){j(this,R.USER_INACTIVE,e)}},xt=new WeakMap,St=new WeakMap,Ct=new WeakMap,wt=new WeakMap,Tt=new WeakMap,Et=new WeakMap,Dt=new WeakMap,Ot=new WeakMap,kt=new WeakSet,At=function(e){if(e.pointerType!==`mouse`&&e.timeStamp-I(this,St)<250)return;bt(this,Ft,It).call(this),clearTimeout(I(this,wt));let t=this.hasAttribute(R.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(e.target)||t)&&bt(this,Lt,Rt).call(this)},jt=new WeakSet,Mt=function(e){if(e.pointerType===`touch`){let t=!this.hasAttribute(R.USER_INACTIVE);[this,this.media].includes(e.target)&&t?bt(this,Nt,Pt).call(this):bt(this,Lt,Rt).call(this)}else e.composedPath().some(e=>[`media-play-button`,`media-fullscreen-button`].includes(e?.localName))&&bt(this,Lt,Rt).call(this)},Nt=new WeakSet,Pt=function(){if(I(this,Tt)<0||this.hasAttribute(R.USER_INACTIVE))return;this.setAttribute(R.USER_INACTIVE,``);let e=new w.CustomEvent(ie.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},Ft=new WeakSet,It=function(){if(!this.hasAttribute(R.USER_INACTIVE))return;this.removeAttribute(R.USER_INACTIVE);let e=new w.CustomEvent(ie.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},Lt=new WeakSet,Rt=function(){bt(this,Ft,It).call(this),clearTimeout(I(this,wt));let e=parseInt(this.autohide);e<0||yt(this,wt,setTimeout(()=>{bt(this,Nt,Pt).call(this)},e*1e3))},zt=new WeakMap,Bt=new WeakMap,Ut.shadowRootOptions={mode:`open`},Ut.getTemplateHTML=pt,w.customElements.get(`media-container`)||w.customElements.define(`media-container`,Ut),Wt=Ut})),Kt,z,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn=t((()=>{Kt=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},z=(e,t,n)=>(Kt(e,t,`read from private field`),n?n.call(e):t.get(e)),qt=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Jt=(e,t,n,r)=>(Kt(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),tn=class{constructor(e,t,{defaultValue:n}={defaultValue:void 0}){qt(this,$t),qt(this,Yt,void 0),qt(this,Xt,void 0),qt(this,Zt,void 0),qt(this,Qt,new Set),Jt(this,Yt,e),Jt(this,Xt,t),Jt(this,Zt,new Set(n))}[Symbol.iterator](){return z(this,$t,en).values()}get length(){return z(this,$t,en).size}get value(){return[...z(this,$t,en)].join(` `)??``}set value(e){e!==this.value&&(Jt(this,Qt,new Set),this.add(...e?.split(` `)??[]))}toString(){return this.value}item(e){return[...z(this,$t,en)][e]}values(){return z(this,$t,en).values()}forEach(e,t){z(this,$t,en).forEach(e,t)}add(...e){var t;e.forEach(e=>z(this,Qt).add(e)),!(this.value===``&&!z(this,Yt)?.hasAttribute(`${z(this,Xt)}`))&&((t=z(this,Yt))==null||t.setAttribute(`${z(this,Xt)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>z(this,Qt).delete(e)),(t=z(this,Yt))==null||t.setAttribute(`${z(this,Xt)}`,`${this.value}`)}contains(e){return z(this,$t,en).has(e)}toggle(e,t){return t===void 0?this.contains(e)?(this.remove(e),!1):(this.add(e),!0):t?(this.add(e),!0):(this.remove(e),!1)}replace(e,t){return this.remove(e),this.add(t),e===t}},Yt=new WeakMap,Xt=new WeakMap,Zt=new WeakMap,Qt=new WeakMap,$t=new WeakSet,en=function(){return z(this,Qt).size?z(this,Qt):z(this,Zt)}})),rn,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn=t((()=>{x(),rn=(e=``)=>e.split(/\s+/),an=(e=``)=>{let[t,n,r]=e.split(`:`),i=r?decodeURIComponent(r):void 0;return{kind:t===`cc`?oe.CAPTIONS:oe.SUBTITLES,language:n,label:i}},on=(e=``,t={})=>rn(e).map(e=>{let n=an(e);return{...t,...n}}),sn=e=>e?Array.isArray(e)?e.map(e=>typeof e==`string`?an(e):e):typeof e==`string`?on(e):[e]:[],cn=({kind:e,label:t,language:n}={kind:`subtitles`})=>t?`${e===`captions`?`cc`:`sb`}:${n}:${encodeURIComponent(t)}`:n,ln=(e=[])=>Array.prototype.map.call(e,cn).join(` `),un=(e,t)=>n=>n[e]===t,dn=e=>{let t=Object.entries(e).map(([e,t])=>un(e,t));return e=>t.every(t=>t(e))},fn=(e,t=[],n=[])=>{let r=sn(n).map(dn);Array.from(t).filter(e=>r.some(t=>t(e))).forEach(t=>{t.mode=e})},pn=(e,t=()=>!0)=>{if(!e?.textTracks)return[];let n=typeof t==`function`?t:dn(t);return Array.from(e.textTracks).filter(n)},mn=e=>!!e.mediaSubtitlesShowing?.length||e.hasAttribute(y.MEDIA_SUBTITLES_SHOWING)})),gn,_n,vn,yn,bn,xn,Sn,Cn,wn=t((()=>{x(),P(),E(),gn=e=>{let{media:t,fullscreenElement:n}=e;try{let e=n&&`requestFullscreen`in n?`requestFullscreen`:n&&`webkitRequestFullScreen`in n?`webkitRequestFullScreen`:void 0;if(e){let t=n[e]?.call(n);if(t instanceof Promise)return t.catch(()=>{})}else t?.webkitEnterFullscreen?t.webkitEnterFullscreen():t?.requestFullscreen&&t.requestFullscreen()}catch(e){console.error(e)}},_n=`exitFullscreen`in T?`exitFullscreen`:`webkitExitFullscreen`in T?`webkitExitFullscreen`:`webkitCancelFullScreen`in T?`webkitCancelFullScreen`:void 0,vn=e=>{let{documentElement:t}=e;if(_n){let e=(t?.[_n])?.call(t);if(e instanceof Promise)return e.catch(()=>{})}},yn=`fullscreenElement`in T?`fullscreenElement`:`webkitFullscreenElement`in T?`webkitFullscreenElement`:void 0,bn=e=>{let{documentElement:t,media:n}=e,r=t?.[yn];return!r&&`webkitDisplayingFullscreen`in n&&`webkitPresentationMode`in n&&n.webkitDisplayingFullscreen&&n.webkitPresentationMode===ue.FULLSCREEN?n:r},xn=e=>{let{media:t,documentElement:n,fullscreenElement:r=t}=e;if(!t||!n)return!1;let i=bn(e);if(!i)return!1;if(i===r||i===t)return!0;if(i.localName.includes(`-`)){let e=i.shadowRoot;if(!(yn in e))return nt(i,r);for(;e?.[yn];){if(e[yn]===r)return!0;e=e[yn]?.shadowRoot}}return!1},Sn=`fullscreenEnabled`in T?`fullscreenEnabled`:`webkitFullscreenEnabled`in T?`webkitFullscreenEnabled`:void 0,Cn=e=>{let{documentElement:t,media:n}=e;return!!t?.[Sn]||n&&`webkitSupportsFullscreen`in n}})),Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln=t((()=>{E(),_e(),wn(),En=()=>{var e;return Tn||(Tn=((e=T)?.createElement)?.call(e,`video`),Tn)},Dn=async(e=En())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let n=new AbortController,r=await Promise.race([On(e,n.signal),kn(e,t)]);return n.abort(),r},On=(e,t)=>new Promise(n=>{e.addEventListener(`volumechange`,()=>n(!0),{signal:t})}),kn=async(e,t)=>{for(let n=0;n<10;n++){if(e.volume===t)return!1;await ge(10)}return e.volume!==t},An=/.*Version\/.*Safari\/.*/.test(w.navigator.userAgent),jn=(e=En())=>w.matchMedia(`(display-mode: standalone)`).matches&&An?!1:typeof e?.requestPictureInPicture==`function`,Mn=(e=En())=>Cn({documentElement:T,media:e}),Nn=Mn(),Pn=jn(),Fn=!!w.WebKitPlaybackTargetAvailabilityEvent,In=!!w.chrome})),Rn,zn,Bn,Vn,Hn,Un=t((()=>{x(),hn(),E(),Rn=e=>pn(e.media,e=>[oe.SUBTITLES,oe.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),zn=e=>pn(e.media,e=>e.mode===se.SHOWING&&[oe.SUBTITLES,oe.CAPTIONS].includes(e.kind)),Bn=(e,t)=>{let n=Rn(e),r=zn(e),i=!!r.length;if(n.length){if(t===!1||i&&t!==!0)fn(se.DISABLED,n,r);else if(t===!0||!i&&t!==!1){let t=n[0],{options:i}=e;if(!i?.noSubtitlesLangPref){let e=w.localStorage.getItem(`media-chrome-pref-subtitles-lang`),r=e?[e,...w.navigator.languages]:w.navigator.languages,i=n.filter(e=>r.some(t=>e.language.toLowerCase().startsWith(t.split(`-`)[0]))).sort((e,t)=>r.findIndex(t=>e.language.toLowerCase().startsWith(t.split(`-`)[0]))-r.findIndex(e=>t.language.toLowerCase().startsWith(e.split(`-`)[0])));i[0]&&(t=i[0])}let{language:a,label:o,kind:s}=t;fn(se.DISABLED,n,r),fn(se.SHOWING,n,[{language:a,label:o,kind:s}])}}},Vn=(e,t)=>e===t?!0:e==null||t==null||typeof e!=typeof t?!1:typeof e==`number`&&Number.isNaN(e)&&Number.isNaN(t)?!0:typeof e==`object`?Array.isArray(e)?Hn(e,t):Object.entries(e).every(([e,n])=>e in t&&Vn(n,t[e])):!1,Hn=(e,t)=>{let n=Array.isArray(e),r=Array.isArray(t);return n===r?n||r?e.length===t.length&&e.every((e,n)=>Vn(e,t[n])):!0:!1}})),Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn=t((()=>{E(),x(),P(),wn(),Ln(),Un(),hn(),_e(),Wn=Object.values(le),Kn=Dn().then(e=>(Gn=e,Gn)),qn=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!(`localName`in e&&e instanceof w.HTMLElement))return;let t=e.localName;if(!t.includes(`-`))return;let n=w.customElements.get(t);n&&e instanceof n||(await w.customElements.whenDefined(t),w.customElements.upgrade(e))}))},Jn=new w.DOMParser,Yn=e=>e&&(Jn.parseFromString(e,`text/html`).body.textContent||e),Xn={mediaError:{get(e,t){let{media:n}=e;if(t?.type!==`playing`)return n?.error},mediaEvents:[`emptied`,`error`,`playing`]},mediaErrorCode:{get(e,t){let{media:n}=e;if(t?.type!==`playing`)return n?.error?.code},mediaEvents:[`emptied`,`error`,`playing`]},mediaErrorMessage:{get(e,t){let{media:n}=e;if(t?.type!==`playing`)return n?.error?.message??``},mediaEvents:[`emptied`,`error`,`playing`]},mediaWidth:{get(e){let{media:t}=e;return t?.videoWidth??0},mediaEvents:[`resize`]},mediaHeight:{get(e){let{media:t}=e;return t?.videoHeight??0},mediaEvents:[`resize`]},mediaPaused:{get(e){let{media:t}=e;return t?.paused??!0},set(e,t){var n;let{media:r}=t;r&&(e?r.pause():(n=r.play())==null||n.catch(()=>{}))},mediaEvents:[`play`,`playing`,`pause`,`emptied`]},mediaHasPlayed:{get(e,t){let{media:n}=e;return n?t?t.type===`playing`:!n.paused:!1},mediaEvents:[`playing`,`emptied`]},mediaEnded:{get(e){let{media:t}=e;return t?.ended??!1},mediaEvents:[`seeked`,`ended`,`emptied`]},mediaPlaybackRate:{get(e){let{media:t}=e;return t?.playbackRate??1},set(e,t){let{media:n}=t;n&&Number.isFinite(+e)&&(n.playbackRate=+e)},mediaEvents:[`ratechange`,`loadstart`]},mediaMuted:{get(e){let{media:t}=e;return t?.muted??!1},set(e,t){let{media:n,options:{noMutedPref:r}={}}=t;if(n){n.muted=e;try{let t=w.localStorage.getItem(`media-chrome-pref-muted`)!==null,i=n.hasAttribute(`muted`);if(r){t&&w.localStorage.removeItem(`media-chrome-pref-muted`);return}if(i&&!t)return;w.localStorage.setItem(`media-chrome-pref-muted`,e?`true`:`false`)}catch(e){console.debug(`Error setting muted pref`,e)}}},mediaEvents:[`volumechange`],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:n}}=t,{media:r}=t;if(!(!r||r.muted||n))try{let n=w.localStorage.getItem(`media-chrome-pref-muted`)===`true`;Xn.mediaMuted.set(n,t),e(n)}catch(e){console.debug(`Error getting muted pref`,e)}}]},mediaLoop:{get(e){let{media:t}=e;return t?.loop},set(e,t){let{media:n}=t;n&&(n.loop=e)},mediaEvents:[`medialooprequest`]},mediaVolume:{get(e){let{media:t}=e;return t?.volume??1},set(e,t){let{media:n,options:{noVolumePref:r}={}}=t;if(n){try{e==null?w.localStorage.removeItem(`media-chrome-pref-volume`):!n.hasAttribute(`muted`)&&!r&&w.localStorage.setItem(`media-chrome-pref-volume`,e.toString())}catch(e){console.debug(`Error setting volume pref`,e)}Number.isFinite(+e)&&(n.volume=+e)}},mediaEvents:[`volumechange`],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:n}}=t;if(!n)try{let{media:n}=t;if(!n)return;let r=w.localStorage.getItem(`media-chrome-pref-volume`);if(r==null)return;Xn.mediaVolume.set(+r,t),e(+r)}catch(e){console.debug(`Error getting volume pref`,e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return t?.volume===void 0?`high`:t.muted||t.volume===0?`off`:t.volume<.5?`low`:t.volume<.75?`medium`:`high`},mediaEvents:[`volumechange`]},mediaCurrentTime:{get(e){let{media:t}=e;return t?.currentTime??0},set(e,t){let{media:n}=t;!n||!he(e)||(n.currentTime=e)},mediaEvents:[`timeupdate`,`loadedmetadata`]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:n}={}}=e;return n&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?n:Number.isFinite(t?.duration)?t.duration:NaN},mediaEvents:[`durationchange`,`loadedmetadata`,`emptied`]},mediaLoading:{get(e){let{media:t}=e;return t?.readyState<3},mediaEvents:[`waiting`,`playing`,`emptied`]},mediaSeekable:{get(e){let{media:t}=e;if(!t?.seekable?.length)return;let n=t.seekable.start(0),r=t.seekable.end(t.seekable.length-1);if(!(!n&&!r))return[Number(n.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:[`loadedmetadata`,`emptied`,`progress`,`seekablechange`]},mediaBuffered:{get(e){let{media:t}=e,n=t?.buffered??[];return Array.from(n).map((e,t)=>[Number(n.start(t).toFixed(3)),Number(n.end(t).toFixed(3))])},mediaEvents:[`progress`,`emptied`]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:n}={}}=e,r=[le.LIVE,le.ON_DEMAND].includes(n)?n:void 0;if(!t)return r;let{streamType:i}=t;if(Wn.includes(i))return i===le.UNKNOWN?r:i;let a=t.duration;return a===1/0?le.LIVE:Number.isFinite(a)?le.ON_DEMAND:r},mediaEvents:[`emptied`,`durationchange`,`loadedmetadata`,`streamtypechange`]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return NaN;let{targetLiveWindow:n}=t,r=Xn.mediaStreamType.get(e);return(n==null||Number.isNaN(n))&&r===le.LIVE?0:n},mediaEvents:[`emptied`,`durationchange`,`loadedmetadata`,`streamtypechange`,`targetlivewindowchange`]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:n=10}={}}=e;if(!t)return!1;if(typeof t.liveEdgeStart==`number`)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(Xn.mediaStreamType.get(e)!==le.LIVE)return!1;let r=t.seekable;if(!r)return!0;if(!r.length)return!1;let i=r.end(r.length-1)-n;return t.currentTime>=i},mediaEvents:[`playing`,`timeupdate`,`progress`,`waiting`,`emptied`]},mediaSubtitlesList:{get(e){return Rn(e).map(({kind:e,label:t,language:n})=>({kind:e,label:t,language:n}))},mediaEvents:[`loadstart`],textTracksEvents:[`addtrack`,`removetrack`]},mediaSubtitlesShowing:{get(e){return zn(e).map(({kind:e,label:t,language:n})=>({kind:e,label:t,language:n}))},mediaEvents:[`loadstart`],textTracksEvents:[`addtrack`,`removetrack`,`change`],stateOwnersUpdateHandlers:[(e,t)=>{var n,r;let{media:i,options:a}=t;if(!i)return;let o=e=>{a.defaultSubtitles&&(e&&![oe.CAPTIONS,oe.SUBTITLES].includes(e?.track?.kind)||Bn(t,!0))};return i.addEventListener(`loadstart`,o),(n=i.textTracks)==null||n.addEventListener(`addtrack`,o),(r=i.textTracks)==null||r.addEventListener(`removetrack`,o),()=>{var e,t;i.removeEventListener(`loadstart`,o),(e=i.textTracks)==null||e.removeEventListener(`addtrack`,o),(t=i.textTracks)==null||t.removeEventListener(`removetrack`,o)}}]},mediaChaptersCues:{get(e){let{media:t}=e;if(!t)return[];let[n]=pn(t,{kind:oe.CHAPTERS});return Array.from(n?.cues??[]).map(({text:e,startTime:t,endTime:n})=>({text:Yn(e),startTime:t,endTime:n}))},mediaEvents:[`loadstart`,`loadedmetadata`],textTracksEvents:[`addtrack`,`removetrack`,`change`],stateOwnersUpdateHandlers:[(e,t)=>{let{media:n}=t;if(!n)return;let r=n.querySelector(`track[kind="chapters"][default][src]`),i=n.shadowRoot?.querySelector(`:is(video,audio) > track[kind="chapters"][default][src]`);return r?.addEventListener(`load`,e),i?.addEventListener(`load`,e),()=>{r?.removeEventListener(`load`,e),i?.removeEventListener(`load`,e)}}]},mediaIsPip:{get(e){let{media:t,documentElement:n}=e;if(!t||!n||!n.pictureInPictureElement)return!1;if(n.pictureInPictureElement===t)return!0;if(n.pictureInPictureElement instanceof HTMLMediaElement)return t.localName?.includes(`-`)?nt(t,n.pictureInPictureElement):!1;if(n.pictureInPictureElement.localName.includes(`-`)){let e=n.pictureInPictureElement.shadowRoot;for(;e?.pictureInPictureElement;){if(e.pictureInPictureElement===t)return!0;e=e.pictureInPictureElement?.shadowRoot}}return!1},set(e,t){let{media:n}=t;if(n)if(e){if(!T.pictureInPictureEnabled){console.warn(`MediaChrome: Picture-in-picture is not enabled`);return}if(!n.requestPictureInPicture){console.warn(`MediaChrome: The current media does not support picture-in-picture`);return}let e=()=>{console.warn(`MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.`)};n.requestPictureInPicture().catch(t=>{if(t.code===11){if(!n.src){console.warn(`MediaChrome: The media is not ready for picture-in-picture. It must have a src set.`);return}if(n.readyState===0&&n.preload===`none`){let t=()=>{n.removeEventListener(`loadedmetadata`,r),n.preload=`none`},r=()=>{n.requestPictureInPicture().catch(e),t()};n.addEventListener(`loadedmetadata`,r),n.preload=`metadata`,setTimeout(()=>{n.readyState===0&&e(),t()},1e3)}else throw t}else throw t})}else T.pictureInPictureElement&&T.exitPictureInPicture()},mediaEvents:[`enterpictureinpicture`,`leavepictureinpicture`]},mediaRenditionList:{get(e){let{media:t}=e;return[...t?.videoRenditions??[]].map(e=>({...e}))},mediaEvents:[`emptied`,`loadstart`],videoRenditionsEvents:[`addrendition`,`removerendition`]},mediaRenditionSelected:{get(e){let{media:t}=e;return t?.videoRenditions?.[t.videoRenditions?.selectedIndex]?.id},set(e,t){let{media:n}=t;if(!n?.videoRenditions){console.warn(`MediaController: Rendition selection not supported by this media.`);return}let r=e,i=Array.prototype.findIndex.call(n.videoRenditions,e=>e.id==r);n.videoRenditions.selectedIndex!=i&&(n.videoRenditions.selectedIndex=i)},mediaEvents:[`emptied`],videoRenditionsEvents:[`addrendition`,`removerendition`,`change`]},mediaAudioTrackList:{get(e){let{media:t}=e;return[...t?.audioTracks??[]]},mediaEvents:[`emptied`,`loadstart`],audioTracksEvents:[`addtrack`,`removetrack`]},mediaAudioTrackEnabled:{get(e){let{media:t}=e;return[...t?.audioTracks??[]].find(e=>e.enabled)?.id},set(e,t){let{media:n}=t;if(!n?.audioTracks){console.warn(`MediaChrome: Audio track selection not supported by this media.`);return}let r=e;for(let e of n.audioTracks)e.enabled=r==e.id},mediaEvents:[`emptied`],audioTracksEvents:[`addtrack`,`removetrack`,`change`]},mediaIsFullscreen:{get(e){return xn(e)},set(e,t,n){var r;e?(gn(t),n.detail&&!t.media?.inert&&((r=t.media)==null||r.focus())):vn(t)},rootEvents:[`fullscreenchange`,`webkitfullscreenchange`],mediaEvents:[`webkitbeginfullscreen`,`webkitendfullscreen`,`webkitpresentationmodechanged`]},mediaIsCasting:{get(e){let{media:t}=e;return!t?.remote||t.remote?.state===`disconnected`?!1:t.remote.state===`connected`},set(e,t){let{media:n}=t;if(n&&!(e&&n.remote?.state!==`disconnected`)&&!(!e&&n.remote?.state!==`connected`)){if(typeof n.remote.prompt!=`function`){console.warn(`MediaChrome: Casting is not supported in this environment`);return}n.remote.prompt().catch(()=>{})}},remoteEvents:[`connect`,`connecting`,`disconnect`]},mediaIsAirplaying:{get(){return!1},set(e,t){let{media:n}=t;if(n){if(!(n.webkitShowPlaybackTargetPicker&&w.WebKitPlaybackTargetAvailabilityEvent)){console.error(`MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment`);return}n.webkitShowPlaybackTargetPicker()}},mediaEvents:[`webkitcurrentplaybacktargetiswirelesschanged`]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!Nn||!Mn(t))return b.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;if(!Pn||!jn(t))return b.UNSUPPORTED;if(t?.disablePictureInPicture)return b.UNAVAILABLE}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(Gn===!1||t?.volume==null)return b.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{Gn??Kn.then(t=>e(t?void 0:b.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t=`not-available`}={}){let{media:n}=e;if(!In||!n?.remote?.state)return b.UNSUPPORTED;if(!(t==null||t===`available`))return b.UNAVAILABLE},stateOwnersUpdateHandlers:[(e,t)=>{var n;let{media:r}=t;if(r)return r.disableRemotePlayback||r.hasAttribute(`disableremoteplayback`)||(n=r?.remote)==null||n.watchAvailability(t=>{e({availability:t?`available`:`not-available`})}).catch(t=>{t.name===`NotSupportedError`?e({availability:null}):e({availability:`not-available`})}),()=>{var e;(e=r?.remote)==null||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get(e,t){if(!Fn)return b.UNSUPPORTED;if(t?.availability===`not-available`)return b.UNAVAILABLE},mediaEvents:[`webkitplaybacktargetavailabilitychanged`],stateOwnersUpdateHandlers:[(e,t)=>{var n;let{media:r}=t;if(r)return r.disableRemotePlayback||r.hasAttribute(`disableremoteplayback`)||(n=r?.remote)==null||n.watchAvailability(t=>{e({availability:t?`available`:`not-available`})}).catch(t=>{t.name===`NotSupportedError`?e({availability:null}):e({availability:`not-available`})}),()=>{var e;(e=r?.remote)==null||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){let{media:t}=e;if(!t?.videoRenditions)return b.UNSUPPORTED;if(!t.videoRenditions?.length)return b.UNAVAILABLE},mediaEvents:[`emptied`,`loadstart`],videoRenditionsEvents:[`addrendition`,`removerendition`]},mediaAudioTrackUnavailable:{get(e){let{media:t}=e;if(!t?.audioTracks)return b.UNSUPPORTED;if((t.audioTracks?.length??0)<=1)return b.UNAVAILABLE},mediaEvents:[`emptied`,`loadstart`],audioTracksEvents:[`addtrack`,`removetrack`]},mediaLang:{get(e){let{options:{mediaLang:t}={}}=e;return t??`en`}}}})),Qn,$n=t((()=>{E(),x(),hn(),Un(),Qn={[_.MEDIA_PREVIEW_REQUEST](e,t,{detail:n}){let{media:r}=t,i=n??void 0,a,o;if(r&&i!=null){let[e]=pn(r,{kind:oe.METADATA,label:`thumbnails`}),t=Array.prototype.find.call(e?.cues??[],(e,t,n)=>t===0?e.endTime>i:t===n.length-1?e.startTime<=i:e.startTime<=i&&e.endTime>i);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)?void 0:r?.querySelector(`track[label="thumbnails"]`)?.src,n=new URL(t.text,e);o=new URLSearchParams(n.hash).get(`#xywh`).split(`,`).map(e=>+e),a=n.href}}let s=e.mediaDuration.get(t),c=e.mediaChaptersCues.get(t).find((e,t,n)=>t===n.length-1&&s===e.endTime?e.startTime<=i&&e.endTime>=i:e.startTime<=i&&e.endTime>i)?.text;return n!=null&&c==null&&(c=``),{mediaPreviewTime:i,mediaPreviewImage:a,mediaPreviewCoords:o,mediaPreviewChapter:c}},[_.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[_.MEDIA_PLAY_REQUEST](e,t){let n=e.mediaStreamType.get(t)===le.LIVE,r=!t.options?.noAutoSeekToLive,i=e.mediaTargetLiveWindow.get(t)>0;if(n&&r&&!i){let n=e.mediaSeekable.get(t)?.[1];if(n){let r=n-(t.options?.seekToLiveOffset??0);e.mediaCurrentTime.set(r,t)}}e.mediaPaused.set(!1,t)},[_.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:n}){let r=n;e.mediaPlaybackRate.set(r,t)},[_.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[_.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[_.MEDIA_LOOP_REQUEST](e,t,{detail:n}){let r=!!n;return e.mediaLoop.set(r,t),{mediaLoop:r}},[_.MEDIA_VOLUME_REQUEST](e,t,{detail:n}){let r=n;r&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(r,t)},[_.MEDIA_SEEK_REQUEST](e,t,{detail:n}){let r=n;e.mediaCurrentTime.set(r,t)},[_.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){let n=e.mediaSeekable.get(t)?.[1];if(Number.isNaN(Number(n)))return;let r=n-(t.options?.seekToLiveOffset??0);e.mediaCurrentTime.set(r,t)},[_.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:n}){let{options:r}=t,i=Rn(t),a=sn(n),o=a[0]?.language;o&&!r.noSubtitlesLangPref&&w.localStorage.setItem(`media-chrome-pref-subtitles-lang`,o),fn(se.SHOWING,i,a)},[_.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:n}){let r=Rn(t),i=n??[];fn(se.DISABLED,r,i)},[_.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:n}){Bn(t,n)},[_.MEDIA_RENDITION_REQUEST](e,t,{detail:n}){let r=n;e.mediaRenditionSelected.set(r,t)},[_.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:n}){let r=n;e.mediaAudioTrackEnabled.set(r,t)},[_.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[_.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[_.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t,n){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t,n)},[_.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[_.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[_.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[_.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}}})),er,tr=t((()=>{Zn(),Un(),$n(),er=({media:e,fullscreenElement:t,documentElement:n,stateMediator:r=Xn,requestMap:i=Qn,options:a={},monitorStateOwnersOnlyWithSubscriptions:o=!0})=>{let s=[],c={options:{...a}},l=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),u=e=>{e!=null&&(Vn(e,l)||(l=Object.freeze({...l,...e}),s.forEach(e=>e(l))))},d=()=>{let e=Object.entries(r).reduce((e,[t,{get:n}])=>(e[t]=n(c),e),{});u(e)},f={},p,m=async(e,t)=>{let n=!!p;if(p={...c,...p??{},...e},n)return;await qn(...Object.values(e));let i=s.length>0&&t===0&&o,a=c.media!==p.media,l=c.media?.textTracks!==p.media?.textTracks,m=c.media?.videoRenditions!==p.media?.videoRenditions,ee=c.media?.audioTracks!==p.media?.audioTracks,te=c.media?.remote!==p.media?.remote,h=c.documentElement!==p.documentElement,g=!!c.media&&(a||i),_=!!c.media?.textTracks&&(l||i),v=!!c.media?.videoRenditions&&(m||i),ne=!!c.media?.audioTracks&&(ee||i),re=!!c.media?.remote&&(te||i),y=!!c.documentElement&&(h||i),ie=g||_||v||ne||re||y,ae=s.length===0&&t===1&&o,oe=!!p.media&&(a||ae),se=!!p.media?.textTracks&&(l||ae),ce=!!p.media?.videoRenditions&&(m||ae),b=!!p.media?.audioTracks&&(ee||ae),le=!!p.media?.remote&&(te||ae),ue=!!p.documentElement&&(h||ae),x=oe||se||ce||b||le||ue;if(!(ie||x)){Object.entries(p).forEach(([e,t])=>{c[e]=t}),d(),p=void 0;return}Object.entries(r).forEach(([e,{get:t,mediaEvents:n=[],textTracksEvents:r=[],videoRenditionsEvents:i=[],audioTracksEvents:a=[],remoteEvents:o=[],rootEvents:s=[],stateOwnersUpdateHandlers:l=[]}])=>{f[e]||(f[e]={});let d=n=>{let r=t(c,n);u({[e]:r})},m;m=f[e].mediaEvents,n.forEach(t=>{m&&g&&(c.media.removeEventListener(t,m),f[e].mediaEvents=void 0),oe&&(p.media.addEventListener(t,d),f[e].mediaEvents=d)}),m=f[e].textTracksEvents,r.forEach(t=>{var n,r;m&&_&&((n=c.media.textTracks)==null||n.removeEventListener(t,m),f[e].textTracksEvents=void 0),se&&((r=p.media.textTracks)==null||r.addEventListener(t,d),f[e].textTracksEvents=d)}),m=f[e].videoRenditionsEvents,i.forEach(t=>{var n,r;m&&v&&((n=c.media.videoRenditions)==null||n.removeEventListener(t,m),f[e].videoRenditionsEvents=void 0),ce&&((r=p.media.videoRenditions)==null||r.addEventListener(t,d),f[e].videoRenditionsEvents=d)}),m=f[e].audioTracksEvents,a.forEach(t=>{var n,r;m&&ne&&((n=c.media.audioTracks)==null||n.removeEventListener(t,m),f[e].audioTracksEvents=void 0),b&&((r=p.media.audioTracks)==null||r.addEventListener(t,d),f[e].audioTracksEvents=d)}),m=f[e].remoteEvents,o.forEach(t=>{var n,r;m&&re&&((n=c.media.remote)==null||n.removeEventListener(t,m),f[e].remoteEvents=void 0),le&&((r=p.media.remote)==null||r.addEventListener(t,d),f[e].remoteEvents=d)}),m=f[e].rootEvents,s.forEach(t=>{m&&y&&(c.documentElement.removeEventListener(t,m),f[e].rootEvents=void 0),ue&&(p.documentElement.addEventListener(t,d),f[e].rootEvents=d)});let ee=f[e].stateOwnersUpdateHandlers;if(ee&&ie&&(Array.isArray(ee)?ee:[ee]).forEach(e=>{typeof e==`function`&&e()}),x){let t=l.map(e=>e(d,p)).filter(e=>typeof e==`function`);f[e].stateOwnersUpdateHandlers=t.length===1?t[0]:t}else ie&&(f[e].stateOwnersUpdateHandlers=void 0)}),Object.entries(p).forEach(([e,t])=>{c[e]=t}),d(),p=void 0};return m({media:e,fullscreenElement:t,documentElement:n,options:a}),{dispatch(e){let{type:t,detail:n}=e;if(i[t]&&l.mediaErrorCode==null){u(i[t](r,c,e));return}t===`mediaelementchangerequest`?m({media:n}):t===`fullscreenelementchangerequest`?m({fullscreenElement:n}):t===`documentelementchangerequest`?m({documentElement:n}):t===`optionschangerequest`&&(Object.entries(n??{}).forEach(([e,t])=>{c.options[e]=t}),d())},getState(){return l},subscribe(e){return m({},s.length+1),s.push(e),e(l),()=>{let t=s.indexOf(e);t>=0&&(m({},s.length-1),s.splice(t,1))}}}}})),nr,B,rr,ir,ar,or,sr,V,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,H,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br=t((()=>{Gt(),E(),nn(),_e(),hn(),x(),P(),tr(),C(),nr=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},B=(e,t,n)=>(nr(e,t,`read from private field`),n?n.call(e):t.get(e)),rr=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},ir=(e,t,n,r)=>(nr(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),ar=(e,t,n)=>(nr(e,t,`access private method`),n),br=[`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Enter`,` `,`f`,`m`,`k`,`c`,`l`,`j`,`>`,`<`,`p`],xr=10,Sr=.025,Cr=.25,wr=.25,Tr=2,H={DEFAULT_SUBTITLES:`defaultsubtitles`,DEFAULT_STREAM_TYPE:`defaultstreamtype`,DEFAULT_DURATION:`defaultduration`,FULLSCREEN_ELEMENT:`fullscreenelement`,HOTKEYS:`hotkeys`,KEYBOARD_BACKWARD_SEEK_OFFSET:`keyboardbackwardseekoffset`,KEYBOARD_FORWARD_SEEK_OFFSET:`keyboardforwardseekoffset`,KEYBOARD_DOWN_VOLUME_STEP:`keyboarddownvolumestep`,KEYBOARD_UP_VOLUME_STEP:`keyboardupvolumestep`,KEYS_USED:`keysused`,LANG:`lang`,LOOP:`loop`,LIVE_EDGE_OFFSET:`liveedgeoffset`,NO_AUTO_SEEK_TO_LIVE:`noautoseektolive`,NO_DEFAULT_STORE:`nodefaultstore`,NO_HOTKEYS:`nohotkeys`,NO_MUTED_PREF:`nomutedpref`,NO_SUBTITLES_LANG_PREF:`nosubtitleslangpref`,NO_VOLUME_PREF:`novolumepref`,SEEK_TO_LIVE_OFFSET:`seektoliveoffset`},Er=class extends Ut{constructor(){super(),rr(this,pr),rr(this,gr),rr(this,vr),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,rr(this,or,new tn(this,H.HOTKEYS)),rr(this,sr,void 0),rr(this,V,void 0),rr(this,cr,null),rr(this,lr,void 0),rr(this,ur,void 0),rr(this,dr,e=>{var t;(t=B(this,V))==null||t.dispatch(e)}),rr(this,fr,void 0),rr(this,hr,e=>{let{key:t,shiftKey:n}=e;if(!(n&&(t===`/`||t===`?`)||br.includes(t))){this.removeEventListener(`keyup`,B(this,hr));return}this.keyboardShortcutHandler(e)}),this.associateElement(this);let e={};ir(this,lr,t=>{Object.entries(t).forEach(([t,n])=>{if(t in e&&e[t]===n)return;this.propagateMediaState(t,n);let r=t.toLowerCase(),i=new w.CustomEvent(ae[r],{composed:!0,detail:n});this.dispatchEvent(i)}),e=t})}static get observedAttributes(){return super.observedAttributes.concat(H.NO_HOTKEYS,H.HOTKEYS,H.DEFAULT_STREAM_TYPE,H.DEFAULT_SUBTITLES,H.DEFAULT_DURATION,H.NO_MUTED_PREF,H.NO_VOLUME_PREF,H.LANG,H.LOOP,H.LIVE_EDGE_OFFSET,H.SEEK_TO_LIVE_OFFSET,H.NO_AUTO_SEEK_TO_LIVE)}get mediaStore(){return B(this,V)}set mediaStore(e){var t;if(B(this,V)&&((t=B(this,ur))==null||t.call(this),ir(this,ur,void 0)),ir(this,V,e),!B(this,V)&&!this.hasAttribute(H.NO_DEFAULT_STORE)){ar(this,pr,mr).call(this);return}ir(this,ur,B(this,V)?.subscribe(B(this,lr)))}get fullscreenElement(){return B(this,sr)??this}set fullscreenElement(e){var t;this.hasAttribute(H.FULLSCREEN_ELEMENT)&&this.removeAttribute(H.FULLSCREEN_ELEMENT),ir(this,sr,e),(t=B(this,V))==null||t.dispatch({type:`fullscreenelementchangerequest`,detail:this.fullscreenElement})}get defaultSubtitles(){return A(this,H.DEFAULT_SUBTITLES)}set defaultSubtitles(e){j(this,H.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return M(this,H.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){N(this,H.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return O(this,H.DEFAULT_DURATION)}set defaultDuration(e){k(this,H.DEFAULT_DURATION,e)}get noHotkeys(){return A(this,H.NO_HOTKEYS)}set noHotkeys(e){j(this,H.NO_HOTKEYS,e)}get keysUsed(){return M(this,H.KEYS_USED)}set keysUsed(e){N(this,H.KEYS_USED,e)}get liveEdgeOffset(){return O(this,H.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){k(this,H.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return A(this,H.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){j(this,H.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return A(this,H.NO_VOLUME_PREF)}set noVolumePref(e){j(this,H.NO_VOLUME_PREF,e)}get noMutedPref(){return A(this,H.NO_MUTED_PREF)}set noMutedPref(e){j(this,H.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return A(this,H.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){j(this,H.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return A(this,H.NO_DEFAULT_STORE)}set noDefaultStore(e){j(this,H.NO_DEFAULT_STORE,e)}get resolvedLang(){return we()}attributeChangedCallback(e,t,n){var r,i,a,o,s,c,l,u,d,f;if(super.attributeChangedCallback(e,t,n),e===H.NO_HOTKEYS)n!==t&&n===``?(this.hasAttribute(H.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):n!==t&&n===null&&this.enableHotkeys();else if(e===H.HOTKEYS)B(this,or).value=n;else if(e===H.DEFAULT_SUBTITLES&&n!==t)(r=B(this,V))==null||r.dispatch({type:`optionschangerequest`,detail:{defaultSubtitles:this.hasAttribute(H.DEFAULT_SUBTITLES)}});else if(e===H.DEFAULT_STREAM_TYPE)(i=B(this,V))==null||i.dispatch({type:`optionschangerequest`,detail:{defaultStreamType:this.getAttribute(H.DEFAULT_STREAM_TYPE)??void 0}});else if(e===H.LIVE_EDGE_OFFSET&&n!==t)(a=B(this,V))==null||a.dispatch({type:`optionschangerequest`,detail:{liveEdgeOffset:this.hasAttribute(H.LIVE_EDGE_OFFSET)?+this.getAttribute(H.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(H.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(H.SEEK_TO_LIVE_OFFSET):this.hasAttribute(H.LIVE_EDGE_OFFSET)?+this.getAttribute(H.LIVE_EDGE_OFFSET):void 0}});else if(e===H.SEEK_TO_LIVE_OFFSET&&n!==t)(o=B(this,V))==null||o.dispatch({type:`optionschangerequest`,detail:{seekToLiveOffset:this.hasAttribute(H.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(H.SEEK_TO_LIVE_OFFSET):this.hasAttribute(H.LIVE_EDGE_OFFSET)?+this.getAttribute(H.LIVE_EDGE_OFFSET):void 0}});else if(e===H.NO_AUTO_SEEK_TO_LIVE)(s=B(this,V))==null||s.dispatch({type:`optionschangerequest`,detail:{noAutoSeekToLive:this.hasAttribute(H.NO_AUTO_SEEK_TO_LIVE)}});else if(e===H.FULLSCREEN_ELEMENT){let e=n?this.getRootNode()?.getElementById(n):void 0;ir(this,sr,e),(c=B(this,V))==null||c.dispatch({type:`fullscreenelementchangerequest`,detail:this.fullscreenElement})}else e===H.LANG&&n!==t?(Se(n),(l=B(this,V))==null||l.dispatch({type:`optionschangerequest`,detail:{mediaLang:n}})):e===H.LOOP&&n!==t?(u=B(this,V))==null||u.dispatch({type:_.MEDIA_LOOP_REQUEST,detail:n!=null}):e===H.NO_VOLUME_PREF&&n!==t?(d=B(this,V))==null||d.dispatch({type:`optionschangerequest`,detail:{noVolumePref:this.hasAttribute(H.NO_VOLUME_PREF)}}):e===H.NO_MUTED_PREF&&n!==t&&((f=B(this,V))==null||f.dispatch({type:`optionschangerequest`,detail:{noMutedPref:this.hasAttribute(H.NO_MUTED_PREF)}}))}connectedCallback(){var e,t;this.associateElement(this),!B(this,V)&&!this.hasAttribute(H.NO_DEFAULT_STORE)&&ar(this,pr,mr).call(this),(e=B(this,V))==null||e.dispatch({type:`documentelementchangerequest`,detail:T}),(t=B(this,V))==null||t.dispatch({type:`fullscreenelementchangerequest`,detail:this.fullscreenElement}),super.connectedCallback(),B(this,V)&&!B(this,ur)&&ir(this,ur,B(this,V)?.subscribe(B(this,lr))),B(this,fr)!==void 0&&B(this,V)&&this.media&&setTimeout(()=>{var e;this.media?.textTracks?.length&&((e=B(this,V))==null||e.dispatch({type:_.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:B(this,fr)}))},0),this.hasAttribute(H.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,t,n,r,i;if((e=super.disconnectedCallback)==null||e.call(this),this.disableHotkeys(),B(this,V)){let e=B(this,V).getState();ir(this,fr,!!e.mediaSubtitlesShowing?.length),(t=B(this,V))==null||t.dispatch({type:`fullscreenelementchangerequest`,detail:void 0}),(n=B(this,V))==null||n.dispatch({type:`documentelementchangerequest`,detail:void 0}),(r=B(this,V))==null||r.dispatch({type:_.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}B(this,ur)&&((i=B(this,ur))==null||i.call(this),ir(this,ur,void 0)),this.unassociateElement(this),B(this,cr)&&(B(this,cr).remove(),ir(this,cr,null))}mediaSetCallback(e){var t;super.mediaSetCallback(e),(t=B(this,V))==null||t.dispatch({type:`mediaelementchangerequest`,detail:e}),e.hasAttribute(`tabindex`)||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),(t=B(this,V))==null||t.dispatch({type:`mediaelementchangerequest`,detail:void 0})}propagateMediaState(e,t){Lr(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let n=this.registerMediaStateReceiver.bind(this),r=this.unregisterMediaStateReceiver.bind(this),i=Rr(e,n,r);Object.values(_).forEach(t=>{e.addEventListener(t,B(this,dr))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(_).forEach(t=>{e.removeEventListener(t,B(this,dr))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;t.indexOf(e)>-1||(t.push(e),B(this,V)&&Object.entries(B(this,V).getState()).forEach(([t,n])=>{Lr([e],t,n)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,n=t.indexOf(e);n<0||t.splice(n,1)}enableHotkeys(){this.addEventListener(`keydown`,ar(this,gr,_r))}disableHotkeys(){this.removeEventListener(`keydown`,ar(this,gr,_r)),this.removeEventListener(`keyup`,B(this,hr))}get hotkeys(){return B(this,or)}set hotkeys(e){N(this,H.HOTKEYS,e)}keyboardShortcutHandler(e){let t=e.target;if((t.getAttribute(H.KEYS_USED)?.split(` `)??t?.keysUsed??[]).map(e=>e===`Space`?` `:e).filter(Boolean).includes(e.key))return;let n,r,i;if(!B(this,or).contains(`no${e.key.toLowerCase()}`)&&!(e.key===` `&&B(this,or).contains(`nospace`))&&!(e.shiftKey&&(e.key===`/`||e.key===`?`)&&B(this,or).contains(`noshift+/`)))switch(e.key){case` `:case`k`:n=B(this,V).getState().mediaPaused?_.MEDIA_PLAY_REQUEST:_.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new w.CustomEvent(n,{composed:!0,bubbles:!0}));break;case`m`:n=this.mediaStore.getState().mediaVolumeLevel===`off`?_.MEDIA_UNMUTE_REQUEST:_.MEDIA_MUTE_REQUEST,this.dispatchEvent(new w.CustomEvent(n,{composed:!0,bubbles:!0}));break;case`f`:n=this.mediaStore.getState().mediaIsFullscreen?_.MEDIA_EXIT_FULLSCREEN_REQUEST:_.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new w.CustomEvent(n,{composed:!0,bubbles:!0}));break;case`c`:this.dispatchEvent(new w.CustomEvent(_.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case`ArrowLeft`:case`j`:{let e=this.hasAttribute(H.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(H.KEYBOARD_BACKWARD_SEEK_OFFSET):xr;r=Math.max((this.mediaStore.getState().mediaCurrentTime??0)-e,0),i=new w.CustomEvent(_.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:r}),this.dispatchEvent(i);break}case`ArrowRight`:case`l`:{let e=this.hasAttribute(H.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(H.KEYBOARD_FORWARD_SEEK_OFFSET):xr;r=Math.max((this.mediaStore.getState().mediaCurrentTime??0)+e,0),i=new w.CustomEvent(_.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:r}),this.dispatchEvent(i);break}case`ArrowUp`:{let e=this.hasAttribute(H.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(H.KEYBOARD_UP_VOLUME_STEP):Sr;r=Math.min((this.mediaStore.getState().mediaVolume??1)+e,1),i=new w.CustomEvent(_.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:r}),this.dispatchEvent(i);break}case`ArrowDown`:{let e=this.hasAttribute(H.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(H.KEYBOARD_DOWN_VOLUME_STEP):Sr;r=Math.max((this.mediaStore.getState().mediaVolume??1)-e,0),i=new w.CustomEvent(_.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:r}),this.dispatchEvent(i);break}case`<`:{let e=this.mediaStore.getState().mediaPlaybackRate??1;r=Math.max(e-Cr,wr).toFixed(2),i=new w.CustomEvent(_.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r}),this.dispatchEvent(i);break}case`>`:{let e=this.mediaStore.getState().mediaPlaybackRate??1;r=Math.min(e+Cr,Tr).toFixed(2),i=new w.CustomEvent(_.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r}),this.dispatchEvent(i);break}case`/`:case`?`:e.shiftKey&&ar(this,vr,yr).call(this);break;case`p`:n=this.mediaStore.getState().mediaIsPip?_.MEDIA_EXIT_PIP_REQUEST:_.MEDIA_ENTER_PIP_REQUEST,i=new w.CustomEvent(n,{composed:!0,bubbles:!0}),this.dispatchEvent(i);break;default:break}}},or=new WeakMap,sr=new WeakMap,V=new WeakMap,cr=new WeakMap,lr=new WeakMap,ur=new WeakMap,dr=new WeakMap,fr=new WeakMap,pr=new WeakSet,mr=function(){this.mediaStore=er({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(H.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(H.DEFAULT_DURATION)?+this.getAttribute(H.DEFAULT_DURATION):void 0,defaultStreamType:this.getAttribute(H.DEFAULT_STREAM_TYPE)??void 0,liveEdgeOffset:this.hasAttribute(H.LIVE_EDGE_OFFSET)?+this.getAttribute(H.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(H.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(H.SEEK_TO_LIVE_OFFSET):this.hasAttribute(H.LIVE_EDGE_OFFSET)?+this.getAttribute(H.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(H.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(H.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(H.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(H.NO_SUBTITLES_LANG_PREF)}})},hr=new WeakMap,gr=new WeakSet,_r=function(e){let{metaKey:t,altKey:n,key:r,shiftKey:i}=e,a=i&&(r===`/`||r===`?`);if(a&&B(this,cr)?.open){this.removeEventListener(`keyup`,B(this,hr));return}if(t||n||!a&&!br.includes(r)){this.removeEventListener(`keyup`,B(this,hr));return}let o=e.target,s=o instanceof HTMLElement&&(o.tagName.toLowerCase()===`media-volume-range`||o.tagName.toLowerCase()===`media-time-range`);[` `,`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`].includes(r)&&!(B(this,or).contains(`no${r.toLowerCase()}`)||r===` `&&B(this,or).contains(`nospace`))&&!s&&e.preventDefault(),this.addEventListener(`keyup`,B(this,hr),{once:!0})},vr=new WeakSet,yr=function(){B(this,cr)||(ir(this,cr,T.createElement(`media-keyboard-shortcuts-dialog`)),this.appendChild(B(this,cr))),B(this,cr).open=!0},Dr=Object.values(y),Or=Object.values(ne),kr=e=>{var t;let{observedAttributes:n}=e.constructor;!n&&e.nodeName?.includes(`-`)&&(w.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let r=((t=(e?.getAttribute)?.call(e,v.MEDIA_CHROME_ATTRIBUTES))?.split)?.call(t,/\s+/);return Array.isArray(n||r)?(n||r).filter(e=>Dr.includes(e)):[]},Ar=e=>(e.nodeName?.includes(`-`)&&w.customElements.get(e.nodeName?.toLowerCase())&&!(e instanceof w.customElements.get(e.nodeName.toLowerCase()))&&w.customElements.upgrade(e),Or.some(t=>t in e)),jr=e=>Ar(e)||!!kr(e).length,Mr=e=>(e?.join)?.call(e,`:`),Nr={[y.MEDIA_SUBTITLES_LIST]:ln,[y.MEDIA_SUBTITLES_SHOWING]:ln,[y.MEDIA_SEEKABLE]:Mr,[y.MEDIA_BUFFERED]:e=>e?.map(Mr).join(` `),[y.MEDIA_PREVIEW_COORDS]:e=>e?.join(` `),[y.MEDIA_RENDITION_LIST]:de,[y.MEDIA_AUDIO_TRACK_LIST]:pe},Pr=async(e,t,n)=>{if(e.isConnected||await ge(0),typeof n==`boolean`||n==null)return j(e,t,n);if(typeof n==`number`)return k(e,t,n);if(typeof n==`string`)return N(e,t,n);if(Array.isArray(n)&&!n.length)return e.removeAttribute(t);let r=Nr[t]?.call(Nr,n)??n;return e.setAttribute(t,r)},Fr=e=>!!e.closest?.call(e,`*[slot="media"]`),Ir=(e,t)=>{if(Fr(e))return;let n=(e,t)=>{jr(e)&&t(e);let{children:n=[]}=e??{},r=e?.shadowRoot?.children??[];[...n,...r].forEach(e=>Ir(e,t))},r=e?.nodeName.toLowerCase();if(r.includes(`-`)&&!jr(e)){w.customElements.whenDefined(r).then(()=>{n(e,t)});return}n(e,t)},Lr=(e,t,n)=>{e.forEach(e=>{if(t in e){e[t]=n;return}let r=kr(e),i=t.toLowerCase();r.includes(i)&&Pr(e,i,n)})},Rr=(e,t,n)=>{Ir(e,t);let r=e=>{t(e?.composedPath()[0]??e.target)},i=e=>{n(e?.composedPath()[0]??e.target)};e.addEventListener(_.REGISTER_MEDIA_STATE_RECEIVER,r),e.addEventListener(_.UNREGISTER_MEDIA_STATE_RECEIVER,i);let a=e=>{e.forEach(e=>{let{addedNodes:r=[],removedNodes:i=[],type:a,target:o,attributeName:s}=e;a===`childList`?(Array.prototype.forEach.call(r,e=>Ir(e,t)),Array.prototype.forEach.call(i,e=>Ir(e,n))):a===`attributes`&&s===v.MEDIA_CHROME_ATTRIBUTES&&(jr(o)?t(o):n(o))})},o=[],s=e=>{let r=e.target;r.name!==`media`&&(o.forEach(e=>Ir(e,n)),o=[...r.assignedElements({flatten:!0})],o.forEach(e=>Ir(e,t)))};e.addEventListener(`slotchange`,s);let c=new MutationObserver(a);return c.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{Ir(e,n),e.removeEventListener(`slotchange`,s),c.disconnect(),e.removeEventListener(_.REGISTER_MEDIA_STATE_RECEIVER,r),e.removeEventListener(_.UNREGISTER_MEDIA_STATE_RECEIVER,i)}},w.customElements.get(`media-controller`)||w.customElements.define(`media-controller`,Er),zr=Er}));function Vr(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `}var Hr,Ur,Wr,Gr=t((()=>{P(),E(),Hr={PLACEMENT:`placement`,BOUNDS:`bounds`},Ur=class extends w.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{if(!Ye(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let e=this.placement;if(e===`left`||e===`right`){this.style.removeProperty(`--media-tooltip-offset-x`);return}let t=getComputedStyle(this),n=rt(this,`#`+this.bounds)??Ge(this);if(!n)return;let{x:r,width:i}=n.getBoundingClientRect(),{x:a,width:o}=this.getBoundingClientRect(),s=a+o,c=r+i,l=t.getPropertyValue(`--media-tooltip-offset-x`),u=l?parseFloat(l.replace(`px`,``)):0,d=t.getPropertyValue(`--media-tooltip-container-margin`),f=d?parseFloat(d.replace(`px`,``)):0,p=a-r+u-f,m=s-c+u+f;if(p<0){this.style.setProperty(`--media-tooltip-offset-x`,`${p}px`);return}if(m>0){this.style.setProperty(`--media-tooltip-offset-x`,`${m}px`);return}this.style.removeProperty(`--media-tooltip-offset-x`)},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=We(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector(`#arrow`),Object.prototype.hasOwnProperty.call(this,`placement`)){let e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[Hr.PLACEMENT,Hr.BOUNDS]}get placement(){return M(this,Hr.PLACEMENT)}set placement(e){N(this,Hr.PLACEMENT,e)}get bounds(){return M(this,Hr.BOUNDS)}set bounds(e){N(this,Hr.BOUNDS,e)}},Ur.shadowRootOptions={mode:`open`},Ur.getTemplateHTML=Vr,w.customElements.get(`media-tooltip`)||w.customElements.define(`media-tooltip`,Ur),Wr=Ur}));function Kr(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      slot[name="icon"] {
        display: inline-flex;
        align-items: center;
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${Wr.shadowRootOptions.mode}">
          ${Wr.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `}function qr(e,t){return`
    <slot></slot>
  `}function Jr(){return``}var Yr,U,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,W,si,ci=t((()=>{x(),Gr(),P(),E(),Yr=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},U=(e,t,n)=>(Yr(e,t,`read from private field`),n?n.call(e):t.get(e)),Xr=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Zr=(e,t,n,r)=>(Yr(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Qr=(e,t,n)=>(Yr(e,t,`access private method`),n),oi={TOOLTIP_PLACEMENT:`tooltipplacement`,DISABLED:`disabled`,NO_TOOLTIP:`notooltip`},W=class extends w.HTMLElement{constructor(){if(super(),Xr(this,ii),Xr(this,$r,void 0),this.preventClick=!1,this.tooltipEl=null,Xr(this,ei,e=>{this.preventClick||this.handleClick(e),setTimeout(U(this,ti),0)}),Xr(this,ti,()=>{var e,t;(t=(e=this.tooltipEl)?.updateXOffset)==null||t.call(e)}),Xr(this,ni,e=>{let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener(`keyup`,U(this,ni));return}this.preventClick||this.handleClick(e)}),Xr(this,ri,e=>{let{metaKey:t,altKey:n,key:r}=e;if(t||n||!this.keysUsed.includes(r)){this.removeEventListener(`keyup`,U(this,ni));return}this.addEventListener(`keyup`,U(this,ni),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=We(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector(`media-tooltip`)}static get observedAttributes(){return[`disabled`,oi.TOOLTIP_PLACEMENT,v.MEDIA_CONTROLLER,y.MEDIA_LANG]}enable(){this.addEventListener(`click`,U(this,ei)),this.addEventListener(`keydown`,U(this,ri)),this.tabIndex=0}disable(){this.removeEventListener(`click`,U(this,ei)),this.removeEventListener(`keydown`,U(this,ri)),this.removeEventListener(`keyup`,U(this,ni)),this.tabIndex=-1}attributeChangedCallback(e,t,n){var r,i,a,o;e===v.MEDIA_CONTROLLER?(t&&((i=(r=U(this,$r))?.unassociateElement)==null||i.call(r,this),Zr(this,$r,null)),n&&this.isConnected&&(Zr(this,$r,this.getRootNode()?.getElementById(n)),(o=(a=U(this,$r))?.associateElement)==null||o.call(a,this))):e===`disabled`&&n!==t?n==null?this.enable():this.disable():e===oi.TOOLTIP_PLACEMENT&&this.tooltipEl&&n!==t?this.tooltipEl.placement=n:e===y.MEDIA_LANG&&(this.shadowRoot.querySelector(`slot[name="tooltip-content"]`).innerHTML=this.constructor.getTooltipContentHTML()),U(this,ti).call(this)}connectedCallback(){var e,t;let{style:n}=D(this.shadowRoot,`:host`);n.setProperty(`display`,`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute(`disabled`)?this.disable():this.enable(),this.setAttribute(`role`,`button`);let r=this.getAttribute(v.MEDIA_CONTROLLER);r&&(Zr(this,$r,this.getRootNode()?.getElementById(r)),(t=(e=U(this,$r))?.associateElement)==null||t.call(e,this)),w.customElements.whenDefined(`media-tooltip`).then(()=>Qr(this,ii,ai).call(this))}disconnectedCallback(){var e,t;this.disable(),(t=(e=U(this,$r))?.unassociateElement)==null||t.call(e,this),Zr(this,$r,null),this.removeEventListener(`mouseenter`,U(this,ti)),this.removeEventListener(`focus`,U(this,ti)),this.removeEventListener(`click`,U(this,ei))}get keysUsed(){return[`Enter`,` `]}get tooltipPlacement(){return M(this,oi.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){N(this,oi.TOOLTIP_PLACEMENT,e)}get mediaController(){return M(this,v.MEDIA_CONTROLLER)}set mediaController(e){N(this,v.MEDIA_CONTROLLER,e)}get disabled(){return A(this,oi.DISABLED)}set disabled(e){j(this,oi.DISABLED,e)}get noTooltip(){return A(this,oi.NO_TOOLTIP)}set noTooltip(e){j(this,oi.NO_TOOLTIP,e)}handleClick(e){}},$r=new WeakMap,ei=new WeakMap,ti=new WeakMap,ni=new WeakMap,ri=new WeakMap,ii=new WeakSet,ai=function(){this.addEventListener(`mouseenter`,U(this,ti)),this.addEventListener(`focus`,U(this,ti)),this.addEventListener(`click`,U(this,ei));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},W.shadowRootOptions={mode:`open`},W.getTemplateHTML=Kr,W.getSlotTemplateHTML=qr,W.getTooltipContentHTML=Jr,w.customElements.get(`media-chrome-button`)||w.customElements.define(`media-chrome-button`,W),si=W}));function li(e){return`
    <style>
      :host([${y.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${y.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${y.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${y.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${di}</slot>
      <slot name="exit">${di}</slot>
    </slot>
  `}function ui(){return`
    <slot name="tooltip-enter">${S(`start airplay`)}</slot>
    <slot name="tooltip-exit">${S(`stop airplay`)}</slot>
  `}var di,fi,pi,mi,hi=t((()=>{ci(),E(),x(),C(),P(),di=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,fi=e=>{let t=e.mediaIsAirplaying?S(`stop airplay`):S(`start airplay`);e.setAttribute(`aria-label`,t)},pi=class extends W{static get observedAttributes(){return[...super.observedAttributes,y.MEDIA_IS_AIRPLAYING,y.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),fi(this)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===y.MEDIA_IS_AIRPLAYING&&fi(this)}get mediaIsAirplaying(){return A(this,y.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){j(this,y.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return M(this,y.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){N(this,y.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new w.CustomEvent(_.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}},pi.getSlotTemplateHTML=li,pi.getTooltipContentHTML=ui,w.customElements.get(`media-airplay-button`)||w.customElements.define(`media-airplay-button`,pi),mi=pi}));function gi(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${vi}</slot>
      <slot name="off">${yi}</slot>
    </slot>
  `}function _i(){return`
    <slot name="tooltip-enable">${S(`Enable captions`)}</slot>
    <slot name="tooltip-disable">${S(`Disable captions`)}</slot>
  `}var vi,yi,bi,xi,Si,Ci,wi,Ti=t((()=>{ci(),E(),x(),hn(),C(),vi=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,yi=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,bi=e=>{e.setAttribute(`aria-checked`,mn(e).toString())},xi=class extends W{static get observedAttributes(){return[...super.observedAttributes,y.MEDIA_SUBTITLES_LIST,y.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`button`),this.setAttribute(`aria-label`,S(`closed captions`)),bi(this)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===y.MEDIA_SUBTITLES_SHOWING&&bi(this)}get mediaSubtitlesList(){return Si(this,y.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Ci(this,y.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Si(this,y.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Ci(this,y.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new w.CustomEvent(_.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}},xi.getSlotTemplateHTML=gi,xi.getTooltipContentHTML=_i,Si=(e,t)=>{let n=e.getAttribute(t);return n?on(n):[]},Ci=(e,t,n)=>{if(!n?.length){e.removeAttribute(t);return}let r=ln(n);e.getAttribute(t)!==r&&e.setAttribute(t,r)},w.customElements.get(`media-captions-button`)||w.customElements.define(`media-captions-button`,xi),wi=xi}));function Ei(e){return`
    <style>
      :host([${y.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${y.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${y.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${y.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Oi}</slot>
      <slot name="exit">${ki}</slot>
    </slot>
  `}function Di(){return`
    <slot name="tooltip-enter">${S(`Start casting`)}</slot>
    <slot name="tooltip-exit">${S(`Stop casting`)}</slot>
  `}var Oi,ki,Ai,ji,Mi,Ni=t((()=>{ci(),E(),x(),C(),P(),Oi=`<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>`,ki=`<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>`,Ai=e=>{let t=e.mediaIsCasting?S(`stop casting`):S(`start casting`);e.setAttribute(`aria-label`,t)},ji=class extends W{static get observedAttributes(){return[...super.observedAttributes,y.MEDIA_IS_CASTING,y.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Ai(this)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===y.MEDIA_IS_CASTING&&Ai(this)}get mediaIsCasting(){return A(this,y.MEDIA_IS_CASTING)}set mediaIsCasting(e){j(this,y.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return M(this,y.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){N(this,y.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?_.MEDIA_EXIT_CAST_REQUEST:_.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new w.CustomEvent(e,{composed:!0,bubbles:!0}))}},ji.getSlotTemplateHTML=Ei,ji.getTooltipContentHTML=Di,w.customElements.get(`media-cast-button`)||w.customElements.define(`media-cast-button`,ji),Mi=ji}));function Pi(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `}function Fi(e){return`
    <slot id="content"></slot>
  `}var Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa=t((()=>{E(),P(),Ii=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Li=(e,t,n)=>(Ii(e,t,`read from private field`),n?n.call(e):t.get(e)),Ri=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},zi=(e,t,n,r)=>(Ii(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Bi=(e,t,n)=>(Ii(e,t,`access private method`),n),na={OPEN:`open`,ANCHOR:`anchor`},ra=class extends w.HTMLElement{constructor(){super(),Ri(this,Wi),Ri(this,Ki),Ri(this,Ji),Ri(this,Xi),Ri(this,Qi),Ri(this,ea),Ri(this,Vi,!1),Ri(this,Hi,null),Ri(this,Ui,null)}static get observedAttributes(){return[na.OPEN,na.ANCHOR]}get open(){return A(this,na.OPEN)}set open(e){j(this,na.OPEN,e)}handleEvent(e){switch(e.type){case`invoke`:Bi(this,Xi,Zi).call(this,e);break;case`focusout`:Bi(this,Qi,$i).call(this,e);break;case`keydown`:Bi(this,ea,ta).call(this,e);break}}connectedCallback(){Bi(this,Wi,Gi).call(this),this.role||=`dialog`,this.addEventListener(`invoke`,this),this.addEventListener(`focusout`,this),this.addEventListener(`keydown`,this)}disconnectedCallback(){this.removeEventListener(`invoke`,this),this.removeEventListener(`focusout`,this),this.removeEventListener(`keydown`,this)}attributeChangedCallback(e,t,n){Bi(this,Wi,Gi).call(this),e===na.OPEN&&n!==t&&(this.open?Bi(this,Ki,qi).call(this):Bi(this,Ji,Yi).call(this))}focus(){zi(this,Hi,qe());let e=!this.dispatchEvent(new Event(`focus`,{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event(`focusin`,{composed:!0,bubbles:!0,cancelable:!0}));e||t||this.querySelector(`[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]`)?.focus()}get keysUsed(){return[`Escape`,`Tab`]}},Vi=new WeakMap,Hi=new WeakMap,Ui=new WeakMap,Wi=new WeakSet,Gi=function(){if(!Li(this,Vi)&&(zi(this,Vi,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=We(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=D(this.shadowRoot,`:host`);e.setProperty(`transition`,`display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in`)})}},Ki=new WeakSet,qi=function(){var e;(e=Li(this,Ui))==null||e.setAttribute(`aria-expanded`,`true`),this.dispatchEvent(new Event(`open`,{composed:!0,bubbles:!0})),this.addEventListener(`transitionend`,()=>this.focus(),{once:!0})},Ji=new WeakSet,Yi=function(){var e;(e=Li(this,Ui))==null||e.setAttribute(`aria-expanded`,`false`),this.dispatchEvent(new Event(`close`,{composed:!0,bubbles:!0}))},Xi=new WeakSet,Zi=function(e){zi(this,Ui,e.relatedTarget),nt(this,e.relatedTarget)||(this.open=!this.open)},Qi=new WeakSet,$i=function(e){var t;nt(this,e.relatedTarget)||((t=Li(this,Hi))==null||t.focus(),Li(this,Ui)&&Li(this,Ui)!==e.relatedTarget&&this.open&&(this.open=!1))},ea=new WeakSet,ta=function(e){var t,n,r,i,a;let{key:o,ctrlKey:s,altKey:c,metaKey:l}=e;s||c||l||this.keysUsed.includes(o)&&(e.preventDefault(),e.stopPropagation(),o===`Tab`?(e.shiftKey?(n=(t=this.previousElementSibling)?.focus)==null||n.call(t):(i=(r=this.nextElementSibling)?.focus)==null||i.call(r),this.blur()):o===`Escape`&&((a=Li(this,Hi))==null||a.focus(),this.open=!1))},ra.shadowRootOptions={mode:`open`},ra.getTemplateHTML=Pi,ra.getSlotTemplateHTML=Fi,w.customElements.get(`media-chrome-dialog`)||w.customElements.define(`media-chrome-dialog`,ra),ia=ra}));function oa(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, 0);
        height: var(--media-time-range-hover-height, max(100% , 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, 0);
          height: var(--media-time-range-hover-height, max(100%, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(e)}
    </div>
    <div id="rightgap"></div>
  `}function sa(e){return``}var ca,G,K,la,ua,da,fa,pa,ma,ha,ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra=t((()=>{x(),E(),P(),Ue(),ca=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},G=(e,t,n)=>(ca(e,t,`read from private field`),n?n.call(e):t.get(e)),K=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},la=(e,t,n,r)=>(ca(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),ua=(e,t,n)=>(ca(e,t,`access private method`),n),Ia=class extends w.HTMLElement{constructor(){if(super(),K(this,ba),K(this,Sa),K(this,wa),K(this,Ea),K(this,Oa),K(this,Aa),K(this,Ma),K(this,Pa),K(this,da,void 0),K(this,fa,void 0),K(this,pa,void 0),K(this,ma,void 0),K(this,ha,{}),K(this,ga,[]),K(this,_a,()=>{if(this.range.matches(`:focus-visible`)){let{style:e}=D(this.shadowRoot,`:host`);e.setProperty(`--_focus-visible-box-shadow`,`var(--_focus-box-shadow)`)}}),K(this,va,()=>{let{style:e}=D(this.shadowRoot,`:host`);e.removeProperty(`--_focus-visible-box-shadow`)}),K(this,ya,()=>{let e=this.shadowRoot.querySelector(`#segments-clipping`);e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=We(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector(`#container`),la(this,pa,this.shadowRoot.querySelector(`#startpoint`)),la(this,ma,this.shadowRoot.querySelector(`#endpoint`)),this.range=this.shadowRoot.querySelector(`#range`),this.appearance=this.shadowRoot.querySelector(`#appearance`)}static get observedAttributes(){return[`disabled`,`aria-disabled`,v.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,n){var r,i,a,o;e===v.MEDIA_CONTROLLER?(t&&((i=(r=G(this,da))?.unassociateElement)==null||i.call(r,this),la(this,da,null)),n&&this.isConnected&&(la(this,da,this.getRootNode()?.getElementById(n)),(o=(a=G(this,da))?.associateElement)==null||o.call(a,this))):(e===`disabled`||e===`aria-disabled`&&t!==n)&&(n==null?(this.range.removeAttribute(e),ua(this,Sa,Ca).call(this)):(this.range.setAttribute(e,n),ua(this,wa,Ta).call(this)))}connectedCallback(){var e,t;let{style:n}=D(this.shadowRoot,`:host`);n.setProperty(`display`,`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),G(this,ha).pointer=D(this.shadowRoot,`#pointer`),G(this,ha).progress=D(this.shadowRoot,`#progress`),G(this,ha).thumb=D(this.shadowRoot,`#thumb, ::slotted([slot="thumb"])`),G(this,ha).activeSegment=D(this.shadowRoot,`#segments-clipping rect:nth-child(0)`);let r=this.getAttribute(v.MEDIA_CONTROLLER);r&&(la(this,da,this.getRootNode()?.getElementById(r)),(t=(e=G(this,da))?.associateElement)==null||t.call(e,this)),this.updateBar(),this.shadowRoot.addEventListener(`focusin`,G(this,_a)),this.shadowRoot.addEventListener(`focusout`,G(this,va)),ua(this,Sa,Ca).call(this),Re(this.container,G(this,ya))}disconnectedCallback(){var e,t;ua(this,wa,Ta).call(this),(t=(e=G(this,da))?.unassociateElement)==null||t.call(e,this),la(this,da,null),this.shadowRoot.removeEventListener(`focusin`,G(this,_a)),this.shadowRoot.removeEventListener(`focusout`,G(this,va)),ze(this.container,G(this,ya))}updatePointerBar(e){var t;(t=G(this,ha).pointer)==null||t.style.setProperty(`width`,`${this.getPointerRatio(e)*100}%`)}updateBar(){var e,t;let n=this.range.valueAsNumber*100;(e=G(this,ha).progress)==null||e.style.setProperty(`width`,`${n}%`),(t=G(this,ha).thumb)==null||t.style.setProperty(`left`,`${n}%`)}updateSegments(e){let t=this.shadowRoot.querySelector(`#segments-clipping`);if(t.textContent=``,this.container.classList.toggle(`segments`,!!e?.length),!e?.length)return;let n=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];la(this,ga,[...n]);let r=n.pop();for(let[e,i]of n.entries()){let[a,o]=[e===0,e===n.length-1],s=a?`calc(var(--segments-gap) / -1)`:`${i*100}%`,c=`calc(${((o?r:n[e+1])-i)*100}%${a||o?``:` - var(--segments-gap)`})`,l=T.createElementNS(`http://www.w3.org/2000/svg`,`rect`),u=Qe(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);u.style.setProperty(`x`,s),u.style.setProperty(`width`,c),t.append(l)}}getPointerRatio(e){return Xe(e.clientX,e.clientY,G(this,pa).getBoundingClientRect(),G(this,ma).getBoundingClientRect())}get dragging(){return this.hasAttribute(`dragging`)}handleEvent(e){switch(e.type){case`pointermove`:ua(this,Pa,Fa).call(this,e);break;case`input`:this.updateBar();break;case`pointerenter`:ua(this,Oa,ka).call(this,e);break;case`pointerdown`:ua(this,Ea,Da).call(this,e);break;case`pointerup`:ua(this,Aa,ja).call(this);break;case`pointerleave`:ua(this,Ma,Na).call(this);break}}get keysUsed(){return[`ArrowUp`,`ArrowRight`,`ArrowDown`,`ArrowLeft`]}},da=new WeakMap,fa=new WeakMap,pa=new WeakMap,ma=new WeakMap,ha=new WeakMap,ga=new WeakMap,_a=new WeakMap,va=new WeakMap,ya=new WeakMap,ba=new WeakSet,xa=function(e){let t=G(this,ha).activeSegment;if(!t)return;let n=this.getPointerRatio(e),r=`#segments-clipping rect:nth-child(${G(this,ga).findIndex((e,t,r)=>{let i=r[t+1];return i!=null&&n>=e&&n<=i})+1})`;(t.selectorText!=r||!t.style.transform)&&(t.selectorText=r,t.style.setProperty(`transform`,`var(--media-range-segment-hover-transform, scaleY(2))`))},Sa=new WeakSet,Ca=function(){this.hasAttribute(`disabled`)||!this.isConnected||(this.addEventListener(`input`,this),this.addEventListener(`pointerdown`,this),this.addEventListener(`pointerenter`,this))},wa=new WeakSet,Ta=function(){var e,t;this.removeEventListener(`input`,this),this.removeEventListener(`pointerdown`,this),this.removeEventListener(`pointerenter`,this),this.removeEventListener(`pointerleave`,this),(e=w.window)==null||e.removeEventListener(`pointerup`,this),(t=w.window)==null||t.removeEventListener(`pointermove`,this)},Ea=new WeakSet,Da=function(e){var t;la(this,fa,e.composedPath().includes(this.range)),(t=w.window)==null||t.addEventListener(`pointerup`,this,{once:!0})},Oa=new WeakSet,ka=function(e){var t;e.pointerType!==`mouse`&&ua(this,Ea,Da).call(this,e),this.addEventListener(`pointerleave`,this,{once:!0}),(t=w.window)==null||t.addEventListener(`pointermove`,this)},Aa=new WeakSet,ja=function(){var e;(e=w.window)==null||e.removeEventListener(`pointerup`,this),this.toggleAttribute(`dragging`,!1),this.range.disabled=this.hasAttribute(`disabled`)},Ma=new WeakSet,Na=function(){var e,t;this.removeEventListener(`pointerleave`,this),(e=w.window)==null||e.removeEventListener(`pointermove`,this),this.toggleAttribute(`dragging`,!1),this.range.disabled=this.hasAttribute(`disabled`),(t=G(this,ha).activeSegment)==null||t.style.removeProperty(`transform`)},Pa=new WeakSet,Fa=function(e){e.pointerType===`pen`&&e.buttons===0||(this.toggleAttribute(`dragging`,e.buttons===1||e.pointerType!==`mouse`),this.updatePointerBar(e),ua(this,ba,xa).call(this,e),this.dragging&&(e.pointerType!==`mouse`||!G(this,fa))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))))},Ia.shadowRootOptions={mode:`open`},Ia.getTemplateHTML=oa,Ia.getContainerTemplateHTML=sa,w.customElements.get(`media-chrome-range`)||w.customElements.define(`media-chrome-range`,Ia),La=Ia}));function za(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `}var Ba,Va,Ha,Ua,Wa,Ga,Ka,qa=t((()=>{x(),P(),E(),Ba=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Va=(e,t,n)=>(Ba(e,t,`read from private field`),n?n.call(e):t.get(e)),Ha=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Ua=(e,t,n,r)=>(Ba(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Ga=class extends w.HTMLElement{constructor(){if(super(),Ha(this,Wa,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=We(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[v.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,n){var r,i,a,o;e===v.MEDIA_CONTROLLER&&(t&&((i=(r=Va(this,Wa))?.unassociateElement)==null||i.call(r,this),Ua(this,Wa,null)),n&&this.isConnected&&(Ua(this,Wa,this.getRootNode()?.getElementById(n)),(o=(a=Va(this,Wa))?.associateElement)==null||o.call(a,this)))}connectedCallback(){var e,t;let n=this.getAttribute(v.MEDIA_CONTROLLER);n&&(Ua(this,Wa,this.getRootNode()?.getElementById(n)),(t=(e=Va(this,Wa))?.associateElement)==null||t.call(e,this))}disconnectedCallback(){var e,t;(t=(e=Va(this,Wa))?.unassociateElement)==null||t.call(e,this),Ua(this,Wa,null)}},Wa=new WeakMap,Ga.shadowRootOptions={mode:`open`},Ga.getTemplateHTML=za,w.customElements.get(`media-control-bar`)||w.customElements.define(`media-control-bar`,Ga),Ka=Ga}));function Ja(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `}function Ya(e,t){return`
    <slot></slot>
  `}var Xa,Za,Qa,$a,eo,to,no,ro=t((()=>{x(),P(),E(),Xa=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Za=(e,t,n)=>(Xa(e,t,`read from private field`),n?n.call(e):t.get(e)),Qa=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},$a=(e,t,n,r)=>(Xa(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),to=class extends w.HTMLElement{constructor(){if(super(),Qa(this,eo,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=We(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[v.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,n){var r,i,a,o;e===v.MEDIA_CONTROLLER&&(t&&((i=(r=Za(this,eo))?.unassociateElement)==null||i.call(r,this),$a(this,eo,null)),n&&this.isConnected&&($a(this,eo,this.getRootNode()?.getElementById(n)),(o=(a=Za(this,eo))?.associateElement)==null||o.call(a,this)))}connectedCallback(){var e,t;let{style:n}=D(this.shadowRoot,`:host`);n.setProperty(`display`,`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(v.MEDIA_CONTROLLER);r&&($a(this,eo,this.getRootNode()?.getElementById(r)),(t=(e=Za(this,eo))?.associateElement)==null||t.call(e,this))}disconnectedCallback(){var e,t;(t=(e=Za(this,eo))?.unassociateElement)==null||t.call(e,this),$a(this,eo,null)}},eo=new WeakMap,to.shadowRootOptions={mode:`open`},to.getTemplateHTML=Ja,to.getSlotTemplateHTML=Ya,w.customElements.get(`media-text-display`)||w.customElements.define(`media-text-display`,to),no=to}));function io(e,t){return`
    <slot>${Te(t.mediaDuration)}</slot>
  `}var ao,oo,so,co,lo,uo,fo,po=t((()=>{ro(),E(),ke(),x(),P(),ao=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},oo=(e,t,n)=>(ao(e,t,`read from private field`),n?n.call(e):t.get(e)),so=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},co=(e,t,n,r)=>(ao(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),uo=class extends to{constructor(){super(),so(this,lo,void 0),co(this,lo,this.shadowRoot.querySelector(`slot`)),oo(this,lo).textContent=Te(this.mediaDuration??0)}static get observedAttributes(){return[...super.observedAttributes,y.MEDIA_DURATION]}attributeChangedCallback(e,t,n){e===y.MEDIA_DURATION&&(oo(this,lo).textContent=Te(+n)),super.attributeChangedCallback(e,t,n)}get mediaDuration(){return O(this,y.MEDIA_DURATION)}set mediaDuration(e){k(this,y.MEDIA_DURATION,e)}},lo=new WeakMap,uo.getSlotTemplateHTML=io,w.customElements.get(`media-duration-display`)||w.customElements.define(`media-duration-display`,uo),fo=uo})),mo,ho,go,_o=t((()=>{C(),mo={2:S(`Network Error`),3:S(`Decode Error`),4:S(`Source Not Supported`),5:S(`Encryption Error`)},ho={2:S(`A network error caused the media download to fail.`),3:S(`A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.`),4:S(`An unsupported error occurred. The server or network failed, or your browser does not support this format.`),5:S(`The media is encrypted and there are no keys to decrypt it.`)},go=e=>e.code===1?null:{title:mo[e.code]??`Error ${e.code}`,message:ho[e.code]??e.message}}));function vo(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${bo({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `}function yo(e){return e.code&&go(e)!==null}function bo(e){let{title:t,message:n}=go(e)??{},r=``;return t&&(r+=`<slot name="error-${e.code}-title"><h3>${t}</h3></slot>`),n&&(r+=`<slot name="error-${e.code}-message"><p>${n}</p></slot>`),r}var xo,So,Co,wo,To,Eo,Do,Oo,ko=t((()=>{E(),x(),_o(),aa(),P(),xo=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},So=(e,t,n)=>(xo(e,t,`read from private field`),n?n.call(e):t.get(e)),Co=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},wo=(e,t,n,r)=>(xo(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Eo=[y.MEDIA_ERROR_CODE,y.MEDIA_ERROR_MESSAGE],Do=class extends ra{constructor(){super(...arguments),Co(this,To,null)}static get observedAttributes(){return[...super.observedAttributes,...Eo]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),!Eo.includes(e))return;let r=this.mediaError??{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=yo(r),this.open&&(this.shadowRoot.querySelector(`slot`).name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector(`#content`).innerHTML=this.formatErrorMessage(r),!this.hasAttribute(`aria-label`))){let{title:e}=go(r);e&&this.setAttribute(`aria-label`,e)}}get mediaError(){return So(this,To)}set mediaError(e){wo(this,To,e)}get mediaErrorCode(){return O(this,`mediaerrorcode`)}set mediaErrorCode(e){k(this,`mediaerrorcode`,e)}get mediaErrorMessage(){return M(this,`mediaerrormessage`)}set mediaErrorMessage(e){N(this,`mediaerrormessage`,e)}},To=new WeakMap,Do.getSlotTemplateHTML=vo,Do.formatErrorMessage=bo,w.customElements.get(`media-error-dialog`)||w.customElements.define(`media-error-dialog`,Do),Oo=Do}));function Ao(e){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${jo()}
    </slot>
  `}function jo(){return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${[{keys:[`Space`,`k`],description:`Toggle Playback`},{keys:[`m`],description:`Toggle mute`},{keys:[`f`],description:`Toggle fullscreen`},{keys:[`c`],description:`Toggle captions or subtitles, if available`},{keys:[`p`],description:`Toggle Picture in Picture`},{keys:[`←`,`j`],description:`Seek back 10s`},{keys:[`→`,`l`],description:`Seek forward 10s`},{keys:[`↑`],description:`Turn volume up`},{keys:[`↓`],description:`Turn volume down`},{keys:[`< (SHIFT+,)`],description:`Decrease playback rate`},{keys:[`> (SHIFT+.)`],description:`Increase playback rate`}].map(({keys:e,description:t})=>`
      <tr>
        <td>
          <div class="key-combo">${e.map((e,t)=>t>0?`<span class="key-separator">or</span><span class="key">${e}</span>`:`<span class="key">${e}</span>`).join(``)}</div>
        </td>
        <td class="description">${t}</td>
      </tr>
    `).join(``)}</table>
  `}var Mo,No,Po,Fo,Io,Lo,Ro,zo=t((()=>{E(),aa(),Mo=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},No=(e,t,n)=>(Mo(e,t,`read from private field`),n?n.call(e):t.get(e)),Po=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Lo=class extends ra{constructor(){super(...arguments),Po(this,Fo,e=>{if(!this.open)return;let t=this.shadowRoot?.querySelector(`#content`);if(!t)return;let n=e.composedPath(),r=n[0]===this||n.includes(this),i=n.includes(t);r&&!i&&(this.open=!1)}),Po(this,Io,e=>{if(!this.open)return;let t=e.shiftKey&&(e.key===`/`||e.key===`?`);(e.key===`Escape`||t)&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener(`click`,No(this,Fo)),document.addEventListener(`keydown`,No(this,Io)))}disconnectedCallback(){this.removeEventListener(`click`,No(this,Fo)),document.removeEventListener(`keydown`,No(this,Io))}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===`open`&&(this.open?(this.addEventListener(`click`,No(this,Fo)),document.addEventListener(`keydown`,No(this,Io))):(this.removeEventListener(`click`,No(this,Fo)),document.removeEventListener(`keydown`,No(this,Io))))}},Fo=new WeakMap,Io=new WeakMap,Lo.getSlotTemplateHTML=Ao,w.customElements.get(`media-keyboard-shortcuts-dialog`)||w.customElements.define(`media-keyboard-shortcuts-dialog`,Lo),Ro=Lo}));function Bo(e){return`
    <style>
      :host([${y.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${y.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${y.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${y.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${qo}</slot>
      <slot name="exit">${Jo}</slot>
    </slot>
  `}function Vo(){return`
    <slot name="tooltip-enter">${S(`Enter fullscreen mode`)}</slot>
    <slot name="tooltip-exit">${S(`Exit fullscreen mode`)}</slot>
  `}var Ho,Uo,Wo,Go,Ko,qo,Jo,Yo,Xo,Zo,Qo=t((()=>{ci(),E(),x(),C(),P(),Ho=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Uo=(e,t,n)=>(Ho(e,t,`read from private field`),n?n.call(e):t.get(e)),Wo=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Go=(e,t,n,r)=>(Ho(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),qo=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,Jo=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,Yo=e=>{let t=e.mediaIsFullscreen?S(`exit fullscreen mode`):S(`enter fullscreen mode`);e.setAttribute(`aria-label`,t)},Xo=class extends W{constructor(){super(...arguments),Wo(this,Ko,null)}static get observedAttributes(){return[...super.observedAttributes,y.MEDIA_IS_FULLSCREEN,y.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Yo(this)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===y.MEDIA_IS_FULLSCREEN&&Yo(this)}get mediaFullscreenUnavailable(){return M(this,y.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){N(this,y.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return A(this,y.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){j(this,y.MEDIA_IS_FULLSCREEN,e)}handleClick(e){Go(this,Ko,e);let t=Uo(this,Ko)instanceof PointerEvent,n=this.mediaIsFullscreen?new w.CustomEvent(_.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new w.CustomEvent(_.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(n)}},Ko=new WeakMap,Xo.getSlotTemplateHTML=Bo,Xo.getTooltipContentHTML=Vo,w.customElements.get(`media-fullscreen-button`)||w.customElements.define(`media-fullscreen-button`,Xo),Zo=Xo}));function $o(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${es}]:not([${ts}])) slot[name=indicator] > *,
      :host([${es}]:not([${ts}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${es}]:not([${ts}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${is}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${S(`live`)}</slot>
  `}var es,ts,ns,rs,is,as,os,ss,cs=t((()=>{ci(),E(),x(),P(),C(),{MEDIA_TIME_IS_LIVE:es,MEDIA_PAUSED:ts}=y,{MEDIA_SEEK_TO_LIVE_REQUEST:ns,MEDIA_PLAY_REQUEST:rs}=_,is=`<svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg>`,as=e=>{let t=e.mediaPaused||!e.mediaTimeIsLive,n=S(t?`seek to live`:`playing live`);e.setAttribute(`aria-label`,n);let r=e.shadowRoot?.querySelector(`slot[name="text"]`);r&&(r.textContent=S(`live`)),t?e.removeAttribute(`aria-disabled`):e.setAttribute(`aria-disabled`,`true`)},os=class extends W{static get observedAttributes(){return[...super.observedAttributes,es,ts]}connectedCallback(){super.connectedCallback(),as(this)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),as(this)}get mediaPaused(){return A(this,y.MEDIA_PAUSED)}set mediaPaused(e){j(this,y.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return A(this,y.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){j(this,y.MEDIA_TIME_IS_LIVE,e)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new w.CustomEvent(ns,{composed:!0,bubbles:!0})),this.hasAttribute(ts)&&this.dispatchEvent(new w.CustomEvent(rs,{composed:!0,bubbles:!0})))}},os.getSlotTemplateHTML=$o,w.customElements.get(`media-live-button`)||w.customElements.define(`media-live-button`,os),ss=os}));function ls(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${_s}ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${y.MEDIA_LOADING}]:not([${y.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${y.MEDIA_LOADING}]:not([${y.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${y.MEDIA_LOADING}]:not([${y.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${vs}</slot>
    <div id="status" role="status" aria-live="polite">${S(`media loading`)}</div>
  `}var us,ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs=t((()=>{x(),E(),P(),C(),us=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},ds=(e,t,n)=>(us(e,t,`read from private field`),n?n.call(e):t.get(e)),fs=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},ps=(e,t,n,r)=>(us(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),gs={LOADING_DELAY:`loadingdelay`,NO_AUTOHIDE:`noautohide`},_s=500,vs=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`,ys=class extends w.HTMLElement{constructor(){if(super(),fs(this,ms,void 0),fs(this,hs,_s),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=We(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[v.MEDIA_CONTROLLER,y.MEDIA_PAUSED,y.MEDIA_LOADING,gs.LOADING_DELAY]}attributeChangedCallback(e,t,n){var r,i,a,o;e===gs.LOADING_DELAY&&t!==n?this.loadingDelay=Number(n):e===v.MEDIA_CONTROLLER&&(t&&((i=(r=ds(this,ms))?.unassociateElement)==null||i.call(r,this),ps(this,ms,null)),n&&this.isConnected&&(ps(this,ms,this.getRootNode()?.getElementById(n)),(o=(a=ds(this,ms))?.associateElement)==null||o.call(a,this)))}connectedCallback(){var e,t;let n=this.getAttribute(v.MEDIA_CONTROLLER);n&&(ps(this,ms,this.getRootNode()?.getElementById(n)),(t=(e=ds(this,ms))?.associateElement)==null||t.call(e,this))}disconnectedCallback(){var e,t;(t=(e=ds(this,ms))?.unassociateElement)==null||t.call(e,this),ps(this,ms,null)}get loadingDelay(){return ds(this,hs)}set loadingDelay(e){ps(this,hs,e);let{style:t}=D(this.shadowRoot,`:host`);t.setProperty(`--_loading-indicator-delay`,`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return A(this,y.MEDIA_PAUSED)}set mediaPaused(e){j(this,y.MEDIA_PAUSED,e)}get mediaLoading(){return A(this,y.MEDIA_LOADING)}set mediaLoading(e){j(this,y.MEDIA_LOADING,e)}get mediaController(){return M(this,v.MEDIA_CONTROLLER)}set mediaController(e){N(this,v.MEDIA_CONTROLLER,e)}get noAutohide(){return A(this,gs.NO_AUTOHIDE)}set noAutohide(e){j(this,gs.NO_AUTOHIDE,e)}},ms=new WeakMap,hs=new WeakMap,ys.shadowRootOptions={mode:`open`},ys.getTemplateHTML=ls,w.customElements.get(`media-loading-indicator`)||w.customElements.define(`media-loading-indicator`,ys),bs=ys}));function Ss(e){return`
    <style>
      :host(:not([${y.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${y.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${y.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${y.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${y.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${y.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${y.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${ws}</slot>
      <slot name="low">${Ts}</slot>
      <slot name="medium">${Ts}</slot>
      <slot name="high">${Es}</slot>
    </slot>
  `}function Cs(){return`
    <slot name="tooltip-mute">${S(`Mute`)}</slot>
    <slot name="tooltip-unmute">${S(`Unmute`)}</slot>
  `}var ws,Ts,Es,Ds,Os,ks,As=t((()=>{ci(),E(),x(),C(),P(),ws=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,Ts=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,Es=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,Ds=e=>{let t=e.mediaVolumeLevel===`off`?S(`unmute`):S(`mute`);e.setAttribute(`aria-label`,t)},Os=class extends W{static get observedAttributes(){return[...super.observedAttributes,y.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),Ds(this)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===y.MEDIA_VOLUME_LEVEL&&Ds(this)}get mediaVolumeLevel(){return M(this,y.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){N(this,y.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e=this.mediaVolumeLevel===`off`?_.MEDIA_UNMUTE_REQUEST:_.MEDIA_MUTE_REQUEST;this.dispatchEvent(new w.CustomEvent(e,{composed:!0,bubbles:!0}))}},Os.getSlotTemplateHTML=Ss,Os.getTooltipContentHTML=Cs,w.customElements.get(`media-mute-button`)||w.customElements.define(`media-mute-button`,Os),ks=Os}));function js(e){return`
    <style>
      :host([${y.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${y.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${y.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${y.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Ns}</slot>
      <slot name="exit">${Ns}</slot>
    </slot>
  `}function Ms(){return`
    <slot name="tooltip-enter">${S(`Enter picture in picture mode`)}</slot>
    <slot name="tooltip-exit">${S(`Exit picture in picture mode`)}</slot>
  `}var Ns,Ps,Fs,Is,Ls=t((()=>{ci(),E(),x(),C(),P(),Ns=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,Ps=e=>{let t=e.mediaIsPip?S(`exit picture in picture mode`):S(`enter picture in picture mode`);e.setAttribute(`aria-label`,t)},Fs=class extends W{static get observedAttributes(){return[...super.observedAttributes,y.MEDIA_IS_PIP,y.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Ps(this)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===y.MEDIA_IS_PIP&&Ps(this)}get mediaPipUnavailable(){return M(this,y.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){N(this,y.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return A(this,y.MEDIA_IS_PIP)}set mediaIsPip(e){j(this,y.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?_.MEDIA_EXIT_PIP_REQUEST:_.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new w.CustomEvent(e,{composed:!0,bubbles:!0}))}},Fs.getSlotTemplateHTML=js,Fs.getTooltipContentHTML=Ms,w.customElements.get(`media-pip-button`)||w.customElements.define(`media-pip-button`,Fs),Is=Fs}));function Rs(e){return Math.round(e*100)/100}function zs(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate?Rs(+e.mediaplaybackrate):1}x</slot>
  `}function Bs(){return S(`Playback rate`)}var Vs,Hs,Us,Ws,Gs,Ks,qs,Js,Ys=t((()=>{ci(),E(),x(),nn(),P(),C(),Vs=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Hs=(e,t,n)=>(Vs(e,t,`read from private field`),n?n.call(e):t.get(e)),Us=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Gs={RATES:`rates`},Ks=[1,1.2,1.5,1.7,2],qs=class extends W{constructor(){super(),Us(this,Ws,new tn(this,Gs.RATES,{defaultValue:Ks})),this.container=this.shadowRoot.querySelector(`slot[name="icon"]`),this.container.innerHTML=`${Rs(this.mediaPlaybackRate??1)}x`}static get observedAttributes(){return[...super.observedAttributes,y.MEDIA_PLAYBACK_RATE,Gs.RATES]}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),e===Gs.RATES&&(Hs(this,Ws).value=n),e===y.MEDIA_PLAYBACK_RATE){let e=n?+n:NaN,t=Rs(Number.isNaN(e)?1:e);this.container.innerHTML=`${t}x`,this.setAttribute(`aria-label`,S(`Playback rate {playbackRate}`,{playbackRate:t}))}}get rates(){return Hs(this,Ws)}set rates(e){e?Array.isArray(e)?Hs(this,Ws).value=e.join(` `):typeof e==`string`&&(Hs(this,Ws).value=e):Hs(this,Ws).value=``}get mediaPlaybackRate(){return O(this,y.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){k(this,y.MEDIA_PLAYBACK_RATE,e)}handleClick(){let e=Array.from(Hs(this,Ws).values(),e=>+e).sort((e,t)=>e-t),t=e.find(e=>e>this.mediaPlaybackRate)??e[0]??1,n=new w.CustomEvent(_.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(n)}},Ws=new WeakMap,qs.getSlotTemplateHTML=zs,qs.getTooltipContentHTML=Bs,w.customElements.get(`media-playback-rate-button`)||w.customElements.define(`media-playback-rate-button`,qs),Js=qs}));function Xs(e){return`
    <style>
      :host([${y.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${y.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${y.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${y.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${Qs}</slot>
      <slot name="pause">${$s}</slot>
    </slot>
  `}function Zs(){return`
    <slot name="tooltip-play">${S(`Play`)}</slot>
    <slot name="tooltip-pause">${S(`Pause`)}</slot>
  `}var Qs,$s,ec,tc,nc,rc=t((()=>{ci(),E(),x(),C(),P(),Qs=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,$s=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,ec=e=>{let t=e.mediaPaused?S(`play`):S(`pause`);e.setAttribute(`aria-label`,t)},tc=class extends W{static get observedAttributes(){return[...super.observedAttributes,y.MEDIA_PAUSED,y.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),ec(this)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),(e===y.MEDIA_PAUSED||e===y.MEDIA_LANG)&&ec(this)}get mediaPaused(){return A(this,y.MEDIA_PAUSED)}set mediaPaused(e){j(this,y.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?_.MEDIA_PLAY_REQUEST:_.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new w.CustomEvent(e,{composed:!0,bubbles:!0}))}},tc.getSlotTemplateHTML=Xs,tc.getTooltipContentHTML=Zs,w.customElements.get(`media-play-button`)||w.customElements.define(`media-play-button`,tc),nc=tc}));function ic(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `}var ac,oc,sc,cc,lc,uc=t((()=>{E(),P(),ac={PLACEHOLDER_SRC:`placeholdersrc`,SRC:`src`},oc=e=>{e.style.removeProperty(`background-image`)},sc=(e,t)=>{e.style[`background-image`]=`url('${t}')`},cc=class extends w.HTMLElement{static get observedAttributes(){return[ac.PLACEHOLDER_SRC,ac.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=We(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector(`#image`)}attributeChangedCallback(e,t,n){e===ac.SRC&&(n==null?this.image.removeAttribute(ac.SRC):this.image.setAttribute(ac.SRC,n)),e===ac.PLACEHOLDER_SRC&&(n==null?oc(this.image):sc(this.image,n))}get placeholderSrc(){return M(this,ac.PLACEHOLDER_SRC)}set placeholderSrc(e){N(this,ac.SRC,e)}get src(){return M(this,ac.SRC)}set src(e){N(this,ac.SRC,e)}},cc.shadowRootOptions={mode:`open`},cc.getTemplateHTML=ic,w.customElements.get(`media-poster-image`)||w.customElements.define(`media-poster-image`,cc),lc=cc})),dc,fc,pc,mc,hc,gc,_c,vc=t((()=>{ro(),E(),x(),P(),C(),dc=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},fc=(e,t,n)=>(dc(e,t,`read from private field`),n?n.call(e):t.get(e)),pc=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},mc=(e,t,n,r)=>(dc(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),gc=class extends to{constructor(){super(),pc(this,hc,void 0),mc(this,hc,this.shadowRoot.querySelector(`slot`))}static get observedAttributes(){return[...super.observedAttributes,y.MEDIA_PREVIEW_CHAPTER,y.MEDIA_LANG]}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),(e===y.MEDIA_PREVIEW_CHAPTER||e===y.MEDIA_LANG)&&n!==t&&n!=null)if(fc(this,hc).textContent=n,n!==``){let e=S(`chapter: {chapterName}`,{chapterName:n});this.setAttribute(`aria-valuetext`,e)}else this.removeAttribute(`aria-valuetext`)}get mediaPreviewChapter(){return M(this,y.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){N(this,y.MEDIA_PREVIEW_CHAPTER,e)}},hc=new WeakMap,w.customElements.get(`media-preview-chapter-display`)||w.customElements.define(`media-preview-chapter-display`,gc),_c=gc}));function yc(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `}var bc,xc,Sc,Cc,wc,Tc,Ec,Dc=t((()=>{E(),x(),P(),bc=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},xc=(e,t,n)=>(bc(e,t,`read from private field`),n?n.call(e):t.get(e)),Sc=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Cc=(e,t,n,r)=>(bc(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Tc=class extends w.HTMLElement{constructor(){if(super(),Sc(this,wc,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=We(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[v.MEDIA_CONTROLLER,y.MEDIA_PREVIEW_IMAGE,y.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t;let n=this.getAttribute(v.MEDIA_CONTROLLER);n&&(Cc(this,wc,this.getRootNode()?.getElementById(n)),(t=(e=xc(this,wc))?.associateElement)==null||t.call(e,this))}disconnectedCallback(){var e,t;(t=(e=xc(this,wc))?.unassociateElement)==null||t.call(e,this),Cc(this,wc,null)}attributeChangedCallback(e,t,n){var r,i,a,o;[y.MEDIA_PREVIEW_IMAGE,y.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===v.MEDIA_CONTROLLER&&(t&&((i=(r=xc(this,wc))?.unassociateElement)==null||i.call(r,this),Cc(this,wc,null)),n&&this.isConnected&&(Cc(this,wc,this.getRootNode()?.getElementById(n)),(o=(a=xc(this,wc))?.associateElement)==null||o.call(a,this)))}get mediaPreviewImage(){return M(this,y.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){N(this,y.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(y.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(y.MEDIA_PREVIEW_COORDS);return}this.setAttribute(y.MEDIA_PREVIEW_COORDS,e.join(` `))}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[n,r,i,a]=e,o=t.split(`#`)[0],s=getComputedStyle(this),{maxWidth:c,maxHeight:l,minWidth:u,minHeight:d}=s,f=s.getPropertyValue(`--media-preview-thumbnail-object-fit`).trim()||`contain`,p,m;if(f===`fill`){let e=parseInt(c)/i,t=parseInt(l)/a,n=parseInt(u)/i,r=parseInt(d)/a;p=e<1?e:Math.max(e,n),m=t<1?t:Math.max(t,r)}else{let e=Math.min(parseInt(c)/i,parseInt(l)/a),t=Math.max(parseInt(u)/i,parseInt(d)/a),n=e<1?e:t>1?t:1;p=n,m=n}let{style:ee}=D(this.shadowRoot,`:host`),te=D(this.shadowRoot,`img`).style,h=this.shadowRoot.querySelector(`img`),g=Math.min(p,m)<1?`min`:`max`;ee.setProperty(`${g}-width`,`initial`,`important`),ee.setProperty(`${g}-height`,`initial`,`important`),ee.width=`${i*p}px`,ee.height=`${a*m}px`;let _=()=>{te.width=`${this.imgWidth*p}px`,te.height=`${this.imgHeight*m}px`,te.display=`block`};h.src!==o&&(h.onload=()=>{this.imgWidth=h.naturalWidth,this.imgHeight=h.naturalHeight,_(),h.onload=null},h.src=o,_()),_(),te.transform=`translate(-${n*p}px, -${r*m}px)`}},wc=new WeakMap,Tc.shadowRootOptions={mode:`open`},Tc.getTemplateHTML=yc,w.customElements.get(`media-preview-thumbnail`)||w.customElements.define(`media-preview-thumbnail`,Tc),Ec=Tc})),Oc,kc,Ac,jc,Mc,Nc,Pc,Fc=t((()=>{ro(),E(),ke(),x(),P(),Oc=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},kc=(e,t,n)=>(Oc(e,t,`read from private field`),n?n.call(e):t.get(e)),Ac=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},jc=(e,t,n,r)=>(Oc(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Nc=class extends to{constructor(){super(),Ac(this,Mc,void 0),jc(this,Mc,this.shadowRoot.querySelector(`slot`)),kc(this,Mc).textContent=Te(0)}static get observedAttributes(){return[...super.observedAttributes,y.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===y.MEDIA_PREVIEW_TIME&&n!=null&&(kc(this,Mc).textContent=Te(parseFloat(n)))}get mediaPreviewTime(){return O(this,y.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){k(this,y.MEDIA_PREVIEW_TIME,e)}},Mc=new WeakMap,w.customElements.get(`media-preview-time-display`)||w.customElements.define(`media-preview-time-display`,Nc),Pc=Nc}));function Ic(e,t){return`
    <slot name="icon">${Bc(t.seekOffset)}</slot>
  `}function Lc(){return S(`Seek backward`)}var Rc,zc,Bc,Vc,Hc,Uc,Wc,Gc=t((()=>{ci(),E(),x(),P(),C(),Rc={SEEK_OFFSET:`seekoffset`},zc=30,Bc=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${e}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`,Vc=(e,t)=>{e.setAttribute(`aria-label`,S(`seek back {seekOffset} seconds`,{seekOffset:t}))},Hc=0,Uc=class extends W{static get observedAttributes(){return[...super.observedAttributes,y.MEDIA_CURRENT_TIME,Rc.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=O(this,Rc.SEEK_OFFSET,zc)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),Vc(this,this.seekOffset),e===Rc.SEEK_OFFSET&&(this.seekOffset=O(this,Rc.SEEK_OFFSET,zc))}get seekOffset(){return O(this,Rc.SEEK_OFFSET,zc)}set seekOffset(e){k(this,Rc.SEEK_OFFSET,e),this.setAttribute(`aria-label`,S(`seek back {seekOffset} seconds`,{seekOffset:this.seekOffset})),$e(tt(this,`icon`),this.seekOffset)}get mediaCurrentTime(){return O(this,y.MEDIA_CURRENT_TIME,Hc)}set mediaCurrentTime(e){k(this,y.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new w.CustomEvent(_.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}},Uc.getSlotTemplateHTML=Ic,Uc.getTooltipContentHTML=Lc,w.customElements.get(`media-seek-backward-button`)||w.customElements.define(`media-seek-backward-button`,Uc),Wc=Uc}));function Kc(e,t){return`
    <slot name="icon">${Xc(t.seekOffset)}</slot>
  `}function qc(){return S(`Seek forward`)}var Jc,Yc,Xc,Zc,Qc,$c,el,tl=t((()=>{ci(),E(),x(),P(),C(),Jc={SEEK_OFFSET:`seekoffset`},Yc=30,Xc=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${e}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`,Zc=(e,t)=>{e.setAttribute(`aria-label`,S(`seek forward {seekOffset} seconds`,{seekOffset:t}))},Qc=0,$c=class extends W{static get observedAttributes(){return[...super.observedAttributes,y.MEDIA_CURRENT_TIME,Jc.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=O(this,Jc.SEEK_OFFSET,Yc)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),Zc(this,this.seekOffset),e===Jc.SEEK_OFFSET&&(this.seekOffset=O(this,Jc.SEEK_OFFSET,Yc))}get seekOffset(){return O(this,Jc.SEEK_OFFSET,Yc)}set seekOffset(e){k(this,Jc.SEEK_OFFSET,e),this.setAttribute(`aria-label`,S(`seek forward {seekOffset} seconds`,{seekOffset:this.seekOffset})),$e(tt(this,`icon`),this.seekOffset)}get mediaCurrentTime(){return O(this,y.MEDIA_CURRENT_TIME,Qc)}set mediaCurrentTime(e){k(this,y.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new w.CustomEvent(_.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}},$c.getSlotTemplateHTML=Kc,$c.getTooltipContentHTML=qc,w.customElements.get(`media-seek-forward-button`)||w.customElements.define(`media-seek-forward-button`,$c),el=$c}));function nl(e,t){return`
    <slot>${Cl(t)}</slot>
  `}var rl,il,al,ol,sl,cl,ll,ul,dl,fl,pl,ml,hl,gl,_l,vl,yl,bl,xl,Sl,Cl,wl,Tl,El,Dl,Ol=t((()=>{ro(),P(),E(),ke(),x(),C(),rl=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},il=(e,t,n)=>(rl(e,t,`read from private field`),n?n.call(e):t.get(e)),al=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},ol=(e,t,n,r)=>(rl(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),sl=(e,t,n)=>(rl(e,t,`access private method`),n),yl={REMAINING:`remaining`,SHOW_DURATION:`showduration`,NO_TOGGLE:`notoggle`},bl=[...Object.values(yl),y.MEDIA_CURRENT_TIME,y.MEDIA_DURATION,y.MEDIA_SEEKABLE],xl=[`Enter`,` `],Sl=`&nbsp;/&nbsp;`,Cl=(e,{timesSep:t=Sl}={})=>{let n=e.mediaCurrentTime??0,[,r]=e.mediaSeekable??[],i=0;Number.isFinite(e.mediaDuration)?i=e.mediaDuration:Number.isFinite(r)&&(i=r);let a=e.remaining?Te(0-(i-n)):Te(n);return e.showDuration?`${a}${t}${Te(i)}`:a},wl=e=>{let t=e.mediaCurrentTime,[,n]=e.mediaSeekable??[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(n)&&(r=n),t==null||r===null){e.setAttribute(`aria-description`,S(`video not loaded, unknown time.`));return}let i=e.remaining?Oe(0-(r-t)):Oe(t);if(!e.showDuration){e.setAttribute(`aria-description`,i);return}let a=S(`{currentTime} of {totalTime}`,{currentTime:i,totalTime:Oe(r)});e.setAttribute(`aria-description`,a)},Tl=e=>{e.setAttribute(`aria-label`,S(`playback time`))},El=class extends to{constructor(){super(),al(this,dl),al(this,pl),al(this,hl),al(this,_l),al(this,cl,void 0),al(this,ll,null),al(this,ul,e=>{let{metaKey:t,altKey:n,key:r}=e;if(t||n||!xl.includes(r)){this.removeEventListener(`keyup`,il(this,ll));return}this.addEventListener(`keyup`,il(this,ll))}),ol(this,cl,this.shadowRoot.querySelector(`slot`)),il(this,cl).innerHTML=`${Cl(this)}`}static get observedAttributes(){return[...super.observedAttributes,...bl,`disabled`]}connectedCallback(){let{style:e}=D(this.shadowRoot,`:host(:hover:not([notoggle]))`);e.setProperty(`cursor`,`var(--media-cursor, pointer)`),e.setProperty(`background`,`var(--media-control-hover-background, rgba(50 50 70 / .7))`),this.setAttribute(`aria-label`,S(`playback time`)),sl(this,hl,gl).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute(`remaining`)?this.removeAttribute(`remaining`):this.setAttribute(`remaining`,``))}disconnectedCallback(){this.disable(),sl(this,pl,ml).call(this),super.disconnectedCallback()}attributeChangedCallback(e,t,n){Tl(this),bl.includes(e)?this.update():e===`disabled`&&n!==t?n==null?sl(this,hl,gl).call(this):sl(this,_l,vl).call(this):e===yl.NO_TOGGLE&&n!==t&&(this.noToggle?sl(this,_l,vl).call(this):sl(this,hl,gl).call(this)),super.attributeChangedCallback(e,t,n)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return A(this,yl.REMAINING)}set remaining(e){j(this,yl.REMAINING,e)}get showDuration(){return A(this,yl.SHOW_DURATION)}set showDuration(e){j(this,yl.SHOW_DURATION,e)}get noToggle(){return A(this,yl.NO_TOGGLE)}set noToggle(e){j(this,yl.NO_TOGGLE,e)}get mediaDuration(){return O(this,y.MEDIA_DURATION)}set mediaDuration(e){k(this,y.MEDIA_DURATION,e)}get mediaCurrentTime(){return O(this,y.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){k(this,y.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(y.MEDIA_SEEKABLE);if(e)return e.split(`:`).map(e=>+e)}set mediaSeekable(e){if(e==null){this.removeAttribute(y.MEDIA_SEEKABLE);return}this.setAttribute(y.MEDIA_SEEKABLE,e.join(`:`))}update(){let e=Cl(this);wl(this),e!==il(this,cl).innerHTML&&(il(this,cl).innerHTML=e)}},cl=new WeakMap,ll=new WeakMap,ul=new WeakMap,dl=new WeakSet,fl=function(){il(this,ll)||(ol(this,ll,e=>{let{key:t}=e;if(!xl.includes(t)){this.removeEventListener(`keyup`,il(this,ll));return}this.toggleTimeDisplay()}),this.addEventListener(`keydown`,il(this,ul)),this.addEventListener(`click`,this.toggleTimeDisplay))},pl=new WeakSet,ml=function(){il(this,ll)&&(this.removeEventListener(`keyup`,il(this,ll)),this.removeEventListener(`keydown`,il(this,ul)),this.removeEventListener(`click`,this.toggleTimeDisplay),ol(this,ll,null))},hl=new WeakSet,gl=function(){!this.noToggle&&!this.hasAttribute(`disabled`)&&(this.setAttribute(`role`,`button`),this.enable(),sl(this,dl,fl).call(this))},_l=new WeakSet,vl=function(){this.removeAttribute(`role`),this.disable(),sl(this,pl,ml).call(this)},El.getSlotTemplateHTML=nl,w.customElements.get(`media-time-display`)||w.customElements.define(`media-time-display`,El),Dl=El})),kl,q,Al,J,jl,Ml,Nl,Pl,Fl,Il,Ll,Rl,zl,Bl,Vl,Hl,Ul=t((()=>{kl=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},q=(e,t,n)=>(kl(e,t,`read from private field`),n?n.call(e):t.get(e)),Al=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},J=(e,t,n,r)=>(kl(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),jl=(e,t,n,r)=>({set _(r){J(e,t,r,n)},get _(){return q(e,t,r)}}),Hl=class{constructor(e,t,n){Al(this,Ml,void 0),Al(this,Nl,void 0),Al(this,Pl,void 0),Al(this,Fl,void 0),Al(this,Il,void 0),Al(this,Ll,void 0),Al(this,Rl,void 0),Al(this,zl,void 0),Al(this,Bl,0),Al(this,Vl,(e=performance.now())=>{J(this,Bl,requestAnimationFrame(q(this,Vl))),J(this,Fl,performance.now()-q(this,Pl));let t=1e3/this.fps;if(q(this,Fl)>t){J(this,Pl,e-q(this,Fl)%t);let n=1e3/((e-q(this,Nl))/++jl(this,Il)._),r=(e-q(this,Ll))/1e3/this.duration,i=q(this,Rl)+r*this.playbackRate;i-q(this,Ml).valueAsNumber>0?J(this,zl,this.playbackRate/this.duration/n):(J(this,zl,.995*q(this,zl)),i=q(this,Ml).valueAsNumber+q(this,zl)),this.callback(i)}}),J(this,Ml,e),this.callback=t,this.fps=n}start(){q(this,Bl)===0&&(J(this,Pl,performance.now()),J(this,Nl,q(this,Pl)),J(this,Il,0),q(this,Vl).call(this))}stop(){q(this,Bl)!==0&&(cancelAnimationFrame(q(this,Bl)),J(this,Bl,0))}update({start:e,duration:t,playbackRate:n}){let r=e-q(this,Ml).valueAsNumber,i=Math.abs(t-this.duration);(r>0||r<-.03||i>=.5)&&this.callback(e),J(this,Rl,e),J(this,Ll,performance.now()),this.duration=t,this.playbackRate=n}},Ml=new WeakMap,Nl=new WeakMap,Pl=new WeakMap,Fl=new WeakMap,Il=new WeakMap,Ll=new WeakMap,Rl=new WeakMap,zl=new WeakMap,Bl=new WeakMap,Vl=new WeakMap}));function Wl(e){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${y.MEDIA_PREVIEW_IMAGE}], [${y.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${y.MEDIA_PREVIEW_IMAGE}], [${y.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${y.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${y.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${y.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${y.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${y.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${y.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${y.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${y.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${y.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${y.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${y.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${y.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${Ec.shadowRootOptions.mode}">
            ${Ec.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `}var Gl,Y,X,Kl,ql,Jl,Yl,Xl,Zl,Ql,$l,eu,tu,nu,ru,iu,au,ou,su,cu,lu,uu,du,fu,pu,mu,hu,gu,_u,vu,yu,bu,xu,Su,Cu,wu,Tu=t((()=>{E(),Ra(),Dc(),Fc(),vc(),x(),_e(),ke(),P(),Ul(),C(),Gl=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Y=(e,t,n)=>(Gl(e,t,`read from private field`),n?n.call(e):t.get(e)),X=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Kl=(e,t,n,r)=>(Gl(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),ql=(e,t,n)=>(Gl(e,t,`access private method`),n),bu=e=>{let t=e.range,n=Oe(+Su(e)),r=Oe(+e.mediaSeekableEnd),i=n&&r?S(`{currentTime} of {totalTime}`,{currentTime:n,totalTime:r}):S(`video not loaded, unknown time.`);t.setAttribute(`aria-valuetext`,i)},xu=(e,t=e.mediaCurrentTime)=>{let n=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,r=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;if(Number.isNaN(r))return 0;let i=(t-n)/(r-n);return Math.max(0,Math.min(i,1))},Su=(e,t=e.range.valueAsNumber)=>{let n=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,r=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(r)?0:t*(r-n)+n},Cu=class extends Ia{constructor(){super(),X(this,au),X(this,cu),X(this,uu),X(this,fu),X(this,mu),X(this,gu),X(this,vu),X(this,Jl,null),X(this,Yl,void 0),X(this,Xl,void 0),X(this,Zl,void 0),X(this,Ql,void 0),X(this,$l,void 0),X(this,eu,void 0),X(this,tu,void 0),X(this,nu,void 0),X(this,ru,void 0),X(this,iu,()=>{ql(this,au,ou).call(this)?Y(this,Yl).start():Y(this,Yl).stop()}),X(this,su,e=>{this.dragging||(he(e)&&(this.range.valueAsNumber=e),Y(this,ru)||this.updateBar())}),this.shadowRoot.querySelector(`#track`).insertAdjacentHTML(`afterbegin`,`<div id="buffered" part="buffered"></div>`),Kl(this,Xl,this.shadowRoot.querySelectorAll(`[part~="box"]`)),Kl(this,Ql,this.shadowRoot.querySelector(`[part~="preview-box"]`)),Kl(this,$l,this.shadowRoot.querySelector(`[part~="current-box"]`));let e=getComputedStyle(this);Kl(this,eu,parseInt(e.getPropertyValue(`--media-box-padding-left`))),Kl(this,tu,parseInt(e.getPropertyValue(`--media-box-padding-right`))),Kl(this,Yl,new Hl(this.range,Y(this,su),60))}static get observedAttributes(){return[...super.observedAttributes,y.MEDIA_PAUSED,y.MEDIA_DURATION,y.MEDIA_SEEKABLE,y.MEDIA_CURRENT_TIME,y.MEDIA_PREVIEW_IMAGE,y.MEDIA_PREVIEW_TIME,y.MEDIA_PREVIEW_CHAPTER,y.MEDIA_BUFFERED,y.MEDIA_PLAYBACK_RATE,y.MEDIA_LOADING,y.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute(`aria-label`,S(`seek`)),Y(this,iu).call(this),Kl(this,Jl,this.getRootNode()),(e=Y(this,Jl))==null||e.addEventListener(`transitionstart`,this)}disconnectedCallback(){var e;super.disconnectedCallback(),Y(this,Yl).stop(),(e=Y(this,Jl))==null||e.removeEventListener(`transitionstart`,this),Kl(this,Jl,null)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),t!=n&&(e===y.MEDIA_CURRENT_TIME||e===y.MEDIA_PAUSED||e===y.MEDIA_ENDED||e===y.MEDIA_LOADING||e===y.MEDIA_DURATION||e===y.MEDIA_SEEKABLE?(Y(this,Yl).update({start:xu(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),Y(this,iu).call(this),bu(this)):e===y.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===y.MEDIA_DURATION||e===y.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=Y(this,nu),this.updateBar()))}get mediaChaptersCues(){return Y(this,nu)}set mediaChaptersCues(e){Kl(this,nu,e),this.updateSegments(Y(this,nu)?.map(e=>({start:xu(this,e.startTime),end:xu(this,e.endTime)})))}get mediaPaused(){return A(this,y.MEDIA_PAUSED)}set mediaPaused(e){j(this,y.MEDIA_PAUSED,e)}get mediaLoading(){return A(this,y.MEDIA_LOADING)}set mediaLoading(e){j(this,y.MEDIA_LOADING,e)}get mediaDuration(){return O(this,y.MEDIA_DURATION)}set mediaDuration(e){k(this,y.MEDIA_DURATION,e)}get mediaCurrentTime(){return O(this,y.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){k(this,y.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return O(this,y.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){k(this,y.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(y.MEDIA_BUFFERED);return e?e.split(` `).map(e=>e.split(`:`).map(e=>+e)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(y.MEDIA_BUFFERED);return}let t=e.map(e=>e.join(`:`)).join(` `);this.setAttribute(y.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(y.MEDIA_SEEKABLE);if(e)return e.split(`:`).map(e=>+e)}set mediaSeekable(e){if(e==null){this.removeAttribute(y.MEDIA_SEEKABLE);return}this.setAttribute(y.MEDIA_SEEKABLE,e.join(`:`))}get mediaSeekableEnd(){let[,e=this.mediaDuration]=this.mediaSeekable??[];return e}get mediaSeekableStart(){let[e=0]=this.mediaSeekable??[];return e}get mediaPreviewImage(){return M(this,y.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){N(this,y.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return O(this,y.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){k(this,y.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return A(this,y.MEDIA_ENDED)}set mediaEnded(e){j(this,y.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){let e=this.mediaBuffered;if(!e.length)return;let t;if(this.mediaEnded)t=1;else{let n=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=e.find(([e,t])=>e<=n&&n<=t)??[];t=xu(this,r)}let{style:n}=D(this.shadowRoot,`#buffered`);n.setProperty(`width`,`${t*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector(`slot[name="current"]`).assignedElements().length)return;let e=D(this.shadowRoot,`#current-rail`),t=D(this.shadowRoot,`[part~="current-box"]`),n=ql(this,cu,lu).call(this,Y(this,$l)),r=ql(this,uu,du).call(this,n,this.range.valueAsNumber),i=ql(this,fu,pu).call(this,n,this.range.valueAsNumber);e.style.transform=`translateX(${r})`,e.style.setProperty(`--_range-width`,`${n.range.width}`),t.style.setProperty(`--_box-shift`,`${i}`),t.style.setProperty(`--_box-width`,`${n.box.width}px`),t.style.setProperty(`visibility`,`initial`)}handleEvent(e){switch(super.handleEvent(e),e.type){case`input`:ql(this,vu,yu).call(this);break;case`pointermove`:ql(this,mu,hu).call(this,e);break;case`pointerup`:Y(this,ru)&&Kl(this,ru,!1);break;case`pointerdown`:Kl(this,ru,!0);break;case`pointerleave`:ql(this,gu,_u).call(this,null);break;case`transitionstart`:nt(e.target,this)&&setTimeout(()=>Y(this,iu).call(this),0);break}}},Jl=new WeakMap,Yl=new WeakMap,Xl=new WeakMap,Zl=new WeakMap,Ql=new WeakMap,$l=new WeakMap,eu=new WeakMap,tu=new WeakMap,nu=new WeakMap,ru=new WeakMap,iu=new WeakMap,au=new WeakSet,ou=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&Ye(this)},su=new WeakMap,cu=new WeakSet,lu=function(e){let t=((this.getAttribute(`bounds`)?rt(this,`#${this.getAttribute(`bounds`)}`):this.parentElement)??this).getBoundingClientRect(),n=this.range.getBoundingClientRect(),r=e.offsetWidth;return{box:{width:r,min:-(n.left-t.left-r/2),max:t.right-n.left-r/2},bounds:t,range:n}},uu=new WeakSet,du=function(e,t){let n=`${t*100}%`,{width:r,min:i,max:a}=e.box;if(!r)return n;if(Number.isNaN(i)||(n=`max(${`calc(1 / var(--_range-width) * 100 * ${i}% + var(--media-box-padding-left))`}, ${n})`),!Number.isNaN(a)){let e=`calc(1 / var(--_range-width) * 100 * ${a}% - var(--media-box-padding-right))`;n=`min(${n}, ${e})`}return n},fu=new WeakSet,pu=function(e,t){let{width:n,min:r,max:i}=e.box,a=t*e.range.width;if(a<r+Y(this,eu)){let t=e.range.left-e.bounds.left-Y(this,eu);return`${a-n/2+t}px`}if(a>i-Y(this,tu)){let t=e.bounds.right-e.range.right-Y(this,tu);return`${a+n/2-t-e.range.width}px`}return 0},mu=new WeakSet,hu=function(e){let t=[...Y(this,Xl)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this))){ql(this,gu,_u).call(this,null);return}let n=this.mediaSeekableEnd;if(!n)return;let r=D(this.shadowRoot,`#preview-rail`),i=D(this.shadowRoot,`[part~="preview-box"]`),a=ql(this,cu,lu).call(this,Y(this,Ql)),o=(e.clientX-a.range.left)/a.range.width;o=Math.max(0,Math.min(1,o));let s=ql(this,uu,du).call(this,a,o),c=ql(this,fu,pu).call(this,a,o);r.style.transform=`translateX(${s})`,r.style.setProperty(`--_range-width`,`${a.range.width}`),i.style.setProperty(`--_box-shift`,`${c}`),i.style.setProperty(`--_box-width`,`${a.box.width}px`);let l=Math.round(Y(this,Zl))-Math.round(o*n);Math.abs(l)<1&&o>.01&&o<.99||(Kl(this,Zl,o*n),ql(this,gu,_u).call(this,Y(this,Zl)))},gu=new WeakSet,_u=function(e){this.dispatchEvent(new w.CustomEvent(_.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},vu=new WeakSet,yu=function(){Y(this,Yl).stop();let e=Su(this);this.dispatchEvent(new w.CustomEvent(_.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},Cu.shadowRootOptions={mode:`open`},Cu.getContainerTemplateHTML=Wl,w.customElements.get(`media-time-range`)||w.customElements.define(`media-time-range`,Cu),wu=Cu})),Eu,Du,Ou,ku,Au,ju,Mu,Nu,Pu,Fu=t((()=>{E(),Ra(),x(),C(),P(),Eu=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Du=(e,t,n)=>(Eu(e,t,`read from private field`),n?n.call(e):t.get(e)),Ou=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Au=1,ju=e=>e.mediaMuted?0:e.mediaVolume,Mu=e=>`${Math.round(e*100)}%`,Nu=class extends Ia{constructor(){super(...arguments),Ou(this,ku,()=>{let e=this.range.value,t=new w.CustomEvent(_.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}static get observedAttributes(){return[...super.observedAttributes,y.MEDIA_VOLUME,y.MEDIA_MUTED,y.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute(`aria-label`,S(`volume`)),this.range.addEventListener(`input`,Du(this,ku))}disconnectedCallback(){this.range.removeEventListener(`input`,Du(this,ku)),super.disconnectedCallback()}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),(e===y.MEDIA_VOLUME||e===y.MEDIA_MUTED)&&(this.range.valueAsNumber=ju(this),this.range.setAttribute(`aria-valuetext`,Mu(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return O(this,y.MEDIA_VOLUME,Au)}set mediaVolume(e){k(this,y.MEDIA_VOLUME,e)}get mediaMuted(){return A(this,y.MEDIA_MUTED)}set mediaMuted(e){j(this,y.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return M(this,y.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){N(this,y.MEDIA_VOLUME_UNAVAILABLE,e)}},ku=new WeakMap,w.customElements.get(`media-volume-range`)||w.customElements.define(`media-volume-range`,Nu),Pu=Nu}));function Iu(e){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${y.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `}function Lu(){return S(`Loop`)}var Ru,zu,Bu=t((()=>{ci(),E(),x(),P(),C(),Ru=class extends W{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,y.MEDIA_LOOP]}connectedCallback(){super.connectedCallback(),this.container=this.shadowRoot?.querySelector(`#icon`)||null,this.container&&(this.container.textContent=S(`Loop`))}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===y.MEDIA_LOOP&&this.container&&this.setAttribute(`aria-checked`,this.mediaLoop?`true`:`false`)}get mediaLoop(){return A(this,y.MEDIA_LOOP)}set mediaLoop(e){j(this,y.MEDIA_LOOP,e)}handleClick(){let e=!this.mediaLoop,t=new w.CustomEvent(_.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}},Ru.getSlotTemplateHTML=Iu,Ru.getTooltipContentHTML=Lu,w.customElements.get(`media-loop-button`)||w.customElements.define(`media-loop-button`,Ru),zu=Ru})),Vu=t((()=>{x(),ke(),C(),Br(),hi(),Ti(),Ni(),ci(),aa(),Ra(),qa(),po(),ko(),zo(),Qo(),ft(),cs(),xs(),As(),Ls(),Ys(),rc(),uc(),vc(),Dc(),Fc(),Gc(),tl(),Ol(),Tu(),Gr(),Fu(),Gt(),ro(),Bu()}));function Z(e){if(typeof e==`boolean`)return e?``:void 0;if(typeof e!=`function`){if(Array.isArray(e)&&e.every(e=>typeof e==`string`||typeof e==`number`||typeof e==`boolean`))return e.join(` `);if(!(typeof e==`object`&&e))return e}}var Q,Hu,Uu,Wu,Gu,Ku,qu,Ju,Yu,Xu,Zu,Qu=t((()=>{Q=e(n(),1),g(),Vu(),m({tagName:`media-gesture-receiver`,elementClass:dt,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),m({tagName:`media-container`,elementClass:Wt,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),Hu=m({tagName:`media-controller`,elementClass:zr,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),m({tagName:`media-tooltip`,elementClass:Wr,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),m({tagName:`media-chrome-button`,elementClass:si,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),m({tagName:`media-airplay-button`,elementClass:mi,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),Uu=m({tagName:`media-captions-button`,elementClass:wi,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),m({tagName:`media-cast-button`,elementClass:Mi,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),m({tagName:`media-chrome-dialog`,elementClass:ia,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),m({tagName:`media-chrome-range`,elementClass:La,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),Wu=m({tagName:`media-control-bar`,elementClass:Ka,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),m({tagName:`media-text-display`,elementClass:no,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),m({tagName:`media-duration-display`,elementClass:fo,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),m({tagName:`media-error-dialog`,elementClass:Oo,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),m({tagName:`media-keyboard-shortcuts-dialog`,elementClass:Ro,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),Gu=m({tagName:`media-fullscreen-button`,elementClass:Zo,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),m({tagName:`media-live-button`,elementClass:ss,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),Ku=m({tagName:`media-loading-indicator`,elementClass:bs,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),qu=m({tagName:`media-mute-button`,elementClass:ks,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),m({tagName:`media-pip-button`,elementClass:Is,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),Ju=m({tagName:`media-playback-rate-button`,elementClass:Js,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),Yu=m({tagName:`media-play-button`,elementClass:nc,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),m({tagName:`media-poster-image`,elementClass:lc,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),m({tagName:`media-preview-chapter-display`,elementClass:_c,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),m({tagName:`media-preview-thumbnail`,elementClass:Ec,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),m({tagName:`media-preview-time-display`,elementClass:Pc,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),m({tagName:`media-seek-backward-button`,elementClass:Wc,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),m({tagName:`media-seek-forward-button`,elementClass:el,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),Xu=m({tagName:`media-time-display`,elementClass:Dl,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),Zu=m({tagName:`media-time-range`,elementClass:wu,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),m({tagName:`media-volume-range`,elementClass:Pu,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}}),m({tagName:`media-loop-button`,elementClass:zu,react:Q.default,toAttributeValue:Z,defaultProps:{suppressHydrationWarning:!0}})}));function $u(e,t){if(!Number.isFinite(e)||e<=0)return 0;let n=0,r=0;for(let[i,a]of[...t].sort((e,t)=>e[0]-t[0])){if(!Number.isFinite(i)||!Number.isFinite(a))continue;let t=Math.min(e,a);r+=Math.max(0,t-Math.max(0,i,n)),n=Math.max(n,t)}return Math.min(100,Math.max(0,r/e*100))}function ed(e,t,n,r=u){let i,a=!0,o=new Set,s=()=>({video_id:t.contentId,content_id:t.contentId,learning_space:t.space,provider:`fanout`,position_seconds:Math.round(e.currentTime||0),duration_seconds:Number.isFinite(e.duration)?Math.round(e.duration):null,playback_rate:e.playbackRate}),c=()=>{i?.(),i=void 0},d=()=>{i||(i=r({content_id:t.contentId,learning_space:t.space,content_kind:`video`,engagement_mode:`video`},10),n(l.video_played,{...s(),first_play:a}),a=!1)},f=()=>{let t=[];for(let n=0;n<e.played.length;n++)t.push([e.played.start(n),e.played.end(n)]);let r=$u(e.duration,t);for(let e of[25,50,75,95])r>=e&&!o.has(e)&&(o.add(e),n(l.video_progress,{...s(),played_percent:e}))},p={playing:d,waiting:c,seeking:c,stalled:c,pause:()=>{c(),n(l.video_paused,s())},seeked:()=>{n(l.video_seeked,s()),!e.paused&&!e.ended&&e.readyState>=3&&d()},timeupdate:f,ended:()=>{c(),f(),n(l.video_ended,s())},error:()=>{c(),n(l.video_failed,{...s(),media_error_code:e.error?.code??null})}};for(let[t,n]of Object.entries(p))e.addEventListener(t,n);return!e.paused&&!e.ended&&e.readyState>=3&&d(),()=>{c();for(let[t,n]of Object.entries(p))e.removeEventListener(t,n)}}function td(e){let t=o(),n=(0,nd.useRef)(void 0),r=e?.contentId,i=e?.space;return(0,nd.useCallback)(e=>{n.current?.(),n.current=void 0,e&&r&&i&&(n.current=ed(e,{contentId:r,space:i},t))},[r,i,t])}var nd,rd=t((()=>{nd=e(n(),1),s(),c(),d()})),id=t((()=>{})),ad=t((()=>{}));function od({label:e=`Fanout · fanout.sh`}){let[t,n]=(0,sd.useState)(0);return(0,sd.useEffect)(()=>{let e=window.setInterval(()=>n(e=>(e+1)%ld.length),45e3);return()=>clearInterval(e)},[]),(0,cd.jsx)(`div`,{slot:`centered-chrome`,noautohide:``,className:`viewer-watermark-layer`,"aria-hidden":`true`,children:(0,cd.jsx)(`span`,{className:`viewer-watermark`,"data-position":ld[t],children:e})})}var sd,cd,ld,ud=t((()=>{sd=e(n(),1),ad(),cd=r(),ld=[`top-left`,`top-right`]}));function dd({step:e,onDismiss:t}){return(0,$.jsxs)(`div`,{className:`foundations-player__up-next`,role:`region`,"aria-label":`Up next`,children:[(0,$.jsxs)(`button`,{type:`button`,className:`foundations-player__up-next-main`,onClick:e.onSelect,children:[(0,$.jsxs)(`span`,{className:`foundations-player__up-next-label`,children:[`Up next`,e.locked&&(0,$.jsx)(a,{name:`star`,weight:`fill`,size:11})]}),(0,$.jsx)(`span`,{className:`foundations-player__up-next-title`,children:e.title}),(0,$.jsxs)(`span`,{className:`foundations-player__up-next-cta`,children:[(0,$.jsx)(a,{name:`skip-forward`,weight:`fill`,size:14}),`Play next`]})]}),(0,$.jsx)(`button`,{type:`button`,className:`foundations-player__up-next-close`,"aria-label":`Dismiss up next`,onClick:t,children:(0,$.jsx)(a,{name:`x`,size:14})})]})}function fd({name:e,slot:t,weight:n=`regular`}){return(0,$.jsx)(`span`,{slot:t,className:`foundations-player__icon`,children:(0,$.jsx)(a,{name:e,size:18,weight:n})})}function pd({video:e,mediaRef:t,ariaLabel:n,watermark:r,protectedPlayback:i=!1,analytics:o,startAt:s,autoPlay:c=!1,onPosition:l,previous:u,next:d}){let[f,p]=(0,md.useState)(!1),[m,ee]=(0,md.useState)(!1),te=(0,md.useRef)(null);(0,md.useEffect)(()=>{let e=te.current;if(!e||!s&&!c)return;let t=()=>{s&&s<e.duration&&(e.currentTime=s),c&&e.play().catch(()=>{})};if(e.readyState>=1){t();return}return e.addEventListener(`loadedmetadata`,t,{once:!0}),()=>e.removeEventListener(`loadedmetadata`,t)},[s,c]);let h=(e,t)=>{let n=e.currentTarget,r=n.duration;if(!Number.isFinite(r)||r<=0)return;l?.(n.currentTime,r,t);let i=n.ended||r-n.currentTime<=hd;p(e=>e===i?e:i)},g=td(o),_=(0,md.useCallback)(e=>{te.current=e,g(e),typeof t==`function`?t(e):t&&(t.current=e)},[g,t]);return(0,$.jsxs)(Hu,{className:`foundations-player`,autohide:`2`,"aria-label":n??`${e.title} video lesson`,children:[(0,$.jsxs)(`video`,{ref:_,slot:`media`,className:`foundations-player__video`,crossOrigin:i?`use-credentials`:`anonymous`,disablePictureInPicture:!0,playsInline:!0,preload:`metadata`,poster:e.posterUrl,controlsList:`nodownload noremoteplayback`,disableRemotePlayback:!0,onContextMenu:e=>e.preventDefault(),onTimeUpdate:e=>h(e,!1),onPause:e=>h(e,!0),onSeeked:e=>h(e,!0),onEnded:e=>h(e,!0),children:[(0,$.jsx)(`source`,{src:e.videoUrl,type:`video/mp4`}),e.captionsUrl&&(0,$.jsx)(`track`,{kind:`captions`,src:e.captionsUrl,srcLang:`en`,label:`English`}),`Your browser does not support embedded video playback.`]}),(0,$.jsx)(Ku,{slot:`centered-chrome`}),(0,$.jsx)(od,{label:r}),(0,$.jsxs)(Yu,{slot:`centered-chrome`,className:`foundations-player__center-play`,noTooltip:!0,children:[(0,$.jsx)(fd,{name:`play`,slot:`play`,weight:`fill`}),(0,$.jsx)(fd,{name:`pause`,slot:`pause`,weight:`fill`})]}),d&&f&&!m&&(0,$.jsx)(dd,{step:d,onDismiss:()=>ee(!0)}),(0,$.jsxs)(Wu,{className:`foundations-player__controls`,children:[(u||d)&&(0,$.jsx)(`button`,{type:`button`,className:`foundations-player__step`,disabled:!u,"aria-label":u?`Previous: ${u.title}`:`No previous lesson`,title:u?`Previous: ${u.title}`:void 0,onClick:u?.onSelect,children:(0,$.jsx)(a,{name:`skip-back`,weight:`fill`,size:18})}),(0,$.jsxs)(Yu,{children:[(0,$.jsx)(fd,{name:`play`,slot:`play`,weight:`fill`}),(0,$.jsx)(fd,{name:`pause`,slot:`pause`,weight:`fill`})]}),(0,$.jsx)(Xu,{className:`foundations-player__time`,showDuration:!0,noToggle:!0}),(0,$.jsx)(Zu,{className:`foundations-player__timeline`}),(0,$.jsxs)(qu,{children:[(0,$.jsx)(fd,{name:`speaker-x`,slot:`off`}),(0,$.jsx)(fd,{name:`speaker-low`,slot:`low`}),(0,$.jsx)(fd,{name:`speaker-high`,slot:`medium`}),(0,$.jsx)(fd,{name:`speaker-high`,slot:`high`})]}),d&&(0,$.jsxs)(`button`,{type:`button`,className:`foundations-player__step foundations-player__next`,"aria-label":`Next: ${d.title}`,title:`Next: ${d.title}`,onClick:d.onSelect,children:[(0,$.jsx)(a,{name:`skip-forward`,weight:`fill`,size:16}),(0,$.jsx)(`span`,{className:`foundations-player__next-label`,children:`Next`}),d.locked&&(0,$.jsx)(a,{name:`star`,weight:`fill`,size:11})]}),(0,$.jsxs)(Uu,{children:[(0,$.jsx)(fd,{name:`closed-captioning`,slot:`off`}),(0,$.jsx)(fd,{name:`closed-captioning`,slot:`on`,weight:`fill`})]}),(0,$.jsx)(Ju,{rates:[.75,1,1.25,1.5,2]}),(0,$.jsxs)(Gu,{children:[(0,$.jsx)(fd,{name:`corners-out`,slot:`enter`}),(0,$.jsx)(fd,{name:`corners-in`,slot:`exit`})]})]})]})}var md,$,hd,gd=t((()=>{Qu(),md=e(n(),1),rd(),i(),id(),ud(),$=r(),hd=20}));gd();export{pd as SystemDesignVideoPlayer,gd as t};