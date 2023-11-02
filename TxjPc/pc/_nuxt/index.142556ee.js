import{n as z,t as E,a as R,i as C,b as N,c as T,d as W}from"./index.a94e08ff.js";import{a2 as w,y as S,r as b,af as F,ax as L,au as P}from"./entry.35d4c246.js";function y(e){var t;const o=E(e);return(t=o==null?void 0:o.$el)!=null?t:o}const x=C?window:void 0,B=C?window.navigator:void 0;function $(...e){let t,o,n,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([o,n,i]=e,t=x):[t,o,n,i]=e,!t)return z;Array.isArray(o)||(o=[o]),Array.isArray(n)||(n=[n]);const d=[],r=()=>{d.forEach(l=>l()),d.length=0},a=(l,f,v,c)=>(l.addEventListener(f,v,c),()=>l.removeEventListener(f,v,c)),s=w(()=>[y(t),E(i)],([l,f])=>{r(),l&&d.push(...o.flatMap(v=>n.map(c=>a(l,v,c,f))))},{immediate:!0,flush:"post"}),u=()=>{s(),r()};return N(u),u}function j(){const e=b(!1);return L()&&P(()=>{e.value=!0}),e}function M(e){const t=j();return S(()=>(t.value,!!e()))}function D(e,t={}){const{window:o=x}=t,n=M(()=>o&&"matchMedia"in o&&typeof o.matchMedia=="function");let i;const d=b(!1),r=u=>{d.value=u.matches},a=()=>{i&&("removeEventListener"in i?i.removeEventListener("change",r):i.removeListener(r))},s=F(()=>{n.value&&(a(),i=o.matchMedia(E(e)),"addEventListener"in i?i.addEventListener("change",r):i.addListener(r),d.value=i.matches)});return N(()=>{s(),a(),i=void 0}),d}function X(e={}){const{navigator:t=B,read:o=!1,source:n,copiedDuring:i=1500,legacy:d=!1}=e,r=M(()=>t&&"clipboard"in t),a=S(()=>r.value||d),s=b(""),u=b(!1),l=W(()=>u.value=!1,i);function f(){r.value?t.clipboard.readText().then(p=>{s.value=p}):s.value=_()}a.value&&o&&$(["copy","cut"],f);async function v(p=E(n)){a.value&&p!=null&&(r.value?await t.clipboard.writeText(p):c(p),s.value=p,u.value=!0,l.start())}function c(p){const m=document.createElement("textarea");m.value=p??"",m.style.position="absolute",m.style.opacity="0",document.body.appendChild(m),m.select(),document.execCommand("copy"),m.remove()}function _(){var p,m,g;return(g=(m=(p=document==null?void 0:document.getSelection)==null?void 0:p.call(document))==null?void 0:m.toString())!=null?g:""}return{isSupported:a,text:s,copied:u,copy:v}}function H(e){return JSON.parse(JSON.stringify(e))}var V=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,Y=(e,t)=>{var o={};for(var n in e)J.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&V)for(var n of V(e))t.indexOf(n)<0&&Q.call(e,n)&&(o[n]=e[n]);return o};function G(e,t,o={}){const n=o,{window:i=x}=n,d=Y(n,["window"]);let r;const a=M(()=>i&&"ResizeObserver"in i),s=()=>{r&&(r.disconnect(),r=void 0)},u=S(()=>Array.isArray(e)?e.map(v=>y(v)):[y(e)]),l=w(u,v=>{if(s(),a.value&&i){r=new ResizeObserver(t);for(const c of v)c&&r.observe(c,d)}},{immediate:!0,flush:"post",deep:!0}),f=()=>{s(),l()};return N(f),{isSupported:a,stop:f}}function Z(e,t={width:0,height:0},o={}){const{window:n=x,box:i="content-box"}=o,d=S(()=>{var s,u;return(u=(s=y(e))==null?void 0:s.namespaceURI)==null?void 0:u.includes("svg")}),r=b(t.width),a=b(t.height);return G(e,([s])=>{const u=i==="border-box"?s.borderBoxSize:i==="content-box"?s.contentBoxSize:s.devicePixelContentBoxSize;if(n&&d.value){const l=y(e);if(l){const f=n.getComputedStyle(l);r.value=Number.parseFloat(f.width),a.value=Number.parseFloat(f.height)}}else if(u){const l=Array.isArray(u)?u:[u];r.value=l.reduce((f,{inlineSize:v})=>f+v,0),a.value=l.reduce((f,{blockSize:v})=>f+v,0)}else r.value=s.contentRect.width,a.value=s.contentRect.height},o),w(()=>y(e),s=>{r.value=s?t.width:0,a.value=s?t.height:0}),{width:r,height:a}}function U(e,t,o,n={}){var i,d,r;const{clone:a=!1,passive:s=!1,eventName:u,deep:l=!1,defaultValue:f,shouldEmit:v}=n,c=L(),_=o||(c==null?void 0:c.emit)||((i=c==null?void 0:c.$emit)==null?void 0:i.bind(c))||((r=(d=c==null?void 0:c.proxy)==null?void 0:d.$emit)==null?void 0:r.bind(c==null?void 0:c.proxy));let p=u;t||(t="modelValue"),p=p||`update:${t.toString()}`;const m=h=>a?typeof a=="function"?a(h):H(h):h,g=()=>T(e[t])?m(e[t]):f,A=h=>{v?v(h)&&_(p,h):_(p,h)};if(s){const h=g(),I=b(h);return w(()=>e[t],O=>I.value=m(O)),w(I,O=>{(O!==e[t]||l)&&A(O)},{deep:l}),I}else return S({get(){return g()},set(h){A(h)}})}function k(e,t,o={}){const n={};for(const i in e)n[i]=U(e,i,t,o);return n}function ee(e={}){const{window:t=x,initialWidth:o=Number.POSITIVE_INFINITY,initialHeight:n=Number.POSITIVE_INFINITY,listenOrientation:i=!0,includeScrollbar:d=!0}=e,r=b(o),a=b(n),s=()=>{t&&(d?(r.value=t.innerWidth,a.value=t.innerHeight):(r.value=t.document.documentElement.clientWidth,a.value=t.document.documentElement.clientHeight))};if(s(),R(s),$("resize",s,{passive:!0}),i){const u=D("(orientation: portrait)");w(u,()=>s())}return{width:r,height:a}}export{k as a,X as b,$ as c,ee as d,Z as u};
