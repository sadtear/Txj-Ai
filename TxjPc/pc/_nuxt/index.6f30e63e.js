import{b as d,u as a,E as R}from"./index.d44e751f.js";import{A as U,aH as T,v as w,y as n,I as $,r as D,h as p,K as O,o as u,m as V,w as c,c as H,n as I,t as v,q as b,O as m,d as K,N as L,_ as q,dp as z,R as F}from"./entry.35d4c246.js";import{d as f}from"./dropdown.72fdcde9.js";const j=U({trigger:d.trigger,placement:f.placement,disabled:d.disabled,visible:a.visible,transition:a.transition,popperOptions:f.popperOptions,tabindex:f.tabindex,content:a.content,popperStyle:a.popperStyle,popperClass:a.popperClass,enterable:{...a.enterable,default:!0},effect:{...a.effect,default:"light"},teleported:a.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),G={"update:visible":t=>T(t),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},J="onUpdate:visible",M=w({name:"ElPopover"}),Q=w({...M,props:j,emits:G,setup(t,{expose:r,emit:s}){const o=t,g=n(()=>o[J]),l=$("popover"),i=D(),y=n(()=>{var e;return(e=p(i))==null?void 0:e.popperRef}),E=n(()=>[{width:O(o.width)},o.popperStyle]),P=n(()=>[l.b(),o.popperClass,{[l.m("plain")]:!!o.content}]),C=n(()=>o.transition===`${l.namespace.value}-fade-in-linear`),k=()=>{var e;(e=i.value)==null||e.hide()},N=()=>{s("before-enter")},S=()=>{s("before-leave")},A=()=>{s("after-enter")},B=()=>{s("update:visible",!1),s("after-leave")};return r({popperRef:y,hide:k}),(e,_)=>(u(),V(p(R),L({ref_key:"tooltipRef",ref:i},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":p(P),"popper-style":p(E),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":p(C),"onUpdate:visible":p(g),onBeforeShow:N,onBeforeHide:S,onShow:A,onHide:B}),{content:c(()=>[e.title?(u(),H("div",{key:0,class:I(p(l).e("title")),role:"title"},v(e.title),3)):b("v-if",!0),m(e.$slots,"default",{},()=>[K(v(e.content),1)])]),default:c(()=>[e.$slots.reference?m(e.$slots,"reference",{key:0}):b("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var W=q(Q,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);const h=(t,r)=>{const s=r.arg||r.value,o=s==null?void 0:s.popperRef;o&&(o.triggerRef=t)};var X={mounted(t,r){h(t,r)},updated(t,r){h(t,r)}};const Y="popover",Z=z(X,Y),oe=F(W,{directive:Z});export{oe as E};
