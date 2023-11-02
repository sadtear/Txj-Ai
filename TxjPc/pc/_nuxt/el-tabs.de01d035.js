import{A as I,ai as Q,bt as ne,v as M,aw as X,Y as Z,I as K,r as T,a2 as O,Z as J,bN as le,o as oe,c as re,n as ie,h as $,ab as _e,_ as ce,ax as U,bR as Ne,bS as Te,y as F,au as ue,aQ as Pe,b as d,D as V,bx as Ce,az as we,G as Se,b7 as D,H as Ee,av as $e,at as xe,O as de,a_ as be,b0 as te,ak as Be,ah as ke,V as Oe,bT as ae,g as Re,bB as ze,M as Ae,P as Me,q as Fe,R as Le,ay as Ve}from"./entry.35d4c246.js";import{c as k}from"./strings.b7c92e5e.js";import{u as De}from"./index.341c05ee.js";const q=Symbol("tabsRootContextKey"),Ie=I({tabs:{type:Q(Array),default:()=>ne([])}}),ve="ElTabBar",Ke=M({name:ve}),Ue=M({...Ke,props:Ie,setup(e,{expose:o}){const P=e,R=U(),i=X(q);i||Z(ve,"<el-tabs><el-tab-bar /></el-tabs>");const n=K("tabs"),b=T(),x=T(),c=()=>{let v=0,f=0;const u=["top","bottom"].includes(i.props.tabPosition)?"width":"height",s=u==="width"?"x":"y",B=s==="x"?"left":"top";return P.tabs.every(S=>{var w,t;const p=(t=(w=R.parent)==null?void 0:w.refs)==null?void 0:t[`tab-${S.uid}`];if(!p)return!1;if(!S.active)return!0;v=p[`offset${k(B)}`],f=p[`client${k(u)}`];const g=window.getComputedStyle(p);return u==="width"&&(P.tabs.length>1&&(f-=Number.parseFloat(g.paddingLeft)+Number.parseFloat(g.paddingRight)),v+=Number.parseFloat(g.paddingLeft)),!1}),{[u]:`${f}px`,transform:`translate${k(s)}(${v}px)`}},h=()=>x.value=c();return O(()=>P.tabs,async()=>{await J(),h()},{immediate:!0}),le(b,()=>h()),o({ref:b,update:h}),(v,f)=>(oe(),re("div",{ref_key:"barRef",ref:b,class:ie([$(n).e("active-bar"),$(n).is($(i).props.tabPosition)]),style:_e(x.value)},null,6))}});var qe=ce(Ue,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const He=I({panes:{type:Q(Array),default:()=>ne([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),We={tabClick:(e,o,P)=>P instanceof Event,tabRemove:(e,o)=>o instanceof Event},se="ElTabNav",Ye=M({name:se,props:He,emits:We,setup(e,{expose:o,emit:P}){const R=U(),i=X(q);i||Z(se,"<el-tabs><tab-nav /></el-tabs>");const n=K("tabs"),b=Ne(),x=Te(),c=T(),h=T(),v=T(),f=T(),u=T(!1),s=T(0),B=T(!1),S=T(!0),w=F(()=>["top","bottom"].includes(i.props.tabPosition)?"width":"height"),t=F(()=>({transform:`translate${w.value==="width"?"X":"Y"}(-${s.value}px)`})),p=()=>{if(!c.value)return;const l=c.value[`offset${k(w.value)}`],r=s.value;if(!r)return;const a=r>l?r-l:0;s.value=a},g=()=>{if(!c.value||!h.value)return;const l=h.value[`offset${k(w.value)}`],r=c.value[`offset${k(w.value)}`],a=s.value;if(l-a<=r)return;const _=l-a>r*2?a+r:l-r;s.value=_},z=async()=>{const l=h.value;if(!u.value||!v.value||!c.value||!l)return;await J();const r=v.value.querySelector(".is-active");if(!r)return;const a=c.value,_=["top","bottom"].includes(i.props.tabPosition),N=r.getBoundingClientRect(),y=a.getBoundingClientRect(),E=_?l.offsetWidth-y.width:l.offsetHeight-y.height,C=s.value;let m=C;_?(N.left<y.left&&(m=C-(y.left-N.left)),N.right>y.right&&(m=C+N.right-y.right)):(N.top<y.top&&(m=C-(y.top-N.top)),N.bottom>y.bottom&&(m=C+(N.bottom-y.bottom))),m=Math.max(m,0),s.value=Math.min(m,E)},L=()=>{var l;if(!h.value||!c.value)return;e.stretch&&((l=f.value)==null||l.update());const r=h.value[`offset${k(w.value)}`],a=c.value[`offset${k(w.value)}`],_=s.value;a<r?(u.value=u.value||{},u.value.prev=_,u.value.next=_+a<r,r-_<a&&(s.value=r-a)):(u.value=!1,_>0&&(s.value=0))},pe=l=>{const r=l.code,{up:a,down:_,left:N,right:y}=D;if(![a,_,N,y].includes(r))return;const E=Array.from(l.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),C=E.indexOf(l.target);let m;r===N||r===a?C===0?m=E.length-1:m=C-1:C<E.length-1?m=C+1:m=0,E[m].focus({preventScroll:!0}),E[m].click(),ee()},ee=()=>{S.value&&(B.value=!0)},H=()=>B.value=!1;return O(b,l=>{l==="hidden"?S.value=!1:l==="visible"&&setTimeout(()=>S.value=!0,50)}),O(x,l=>{l?setTimeout(()=>S.value=!0,50):S.value=!1}),le(v,L),ue(()=>setTimeout(()=>z(),0)),Pe(()=>L()),o({scrollToActiveTab:z,removeFocus:H}),O(()=>e.panes,()=>R.update(),{flush:"post",deep:!0}),()=>{const l=u.value?[d("span",{class:[n.e("nav-prev"),n.is("disabled",!u.value.prev)],onClick:p},[d(V,null,{default:()=>[d(Ce,null,null)]})]),d("span",{class:[n.e("nav-next"),n.is("disabled",!u.value.next)],onClick:g},[d(V,null,{default:()=>[d(we,null,null)]})])]:null,r=e.panes.map((a,_)=>{var N,y,E,C;const m=a.uid,W=a.props.disabled,Y=(y=(N=a.props.name)!=null?N:a.index)!=null?y:`${_}`,j=!W&&(a.isClosable||e.editable);a.index=`${_}`;const he=j?d(V,{class:"is-icon-close",onClick:A=>P("tabRemove",a,A)},{default:()=>[d(Se,null,null)]}):null,ye=((C=(E=a.slots).label)==null?void 0:C.call(E))||a.props.label,ge=!W&&a.active?0:-1;return d("div",{ref:`tab-${m}`,class:[n.e("item"),n.is(i.props.tabPosition),n.is("active",a.active),n.is("disabled",W),n.is("closable",j),n.is("focus",B.value)],id:`tab-${Y}`,key:`tab-${m}`,"aria-controls":`pane-${Y}`,role:"tab","aria-selected":a.active,tabindex:ge,onFocus:()=>ee(),onBlur:()=>H(),onClick:A=>{H(),P("tabClick",a,Y,A)},onKeydown:A=>{j&&(A.code===D.delete||A.code===D.backspace)&&P("tabRemove",a,A)}},[ye,he])});return d("div",{ref:v,class:[n.e("nav-wrap"),n.is("scrollable",!!u.value),n.is(i.props.tabPosition)]},[l,d("div",{class:n.e("nav-scroll"),ref:c},[d("div",{class:[n.e("nav"),n.is(i.props.tabPosition),n.is("stretch",e.stretch&&["top","bottom"].includes(i.props.tabPosition))],ref:h,style:t.value,role:"tablist",onKeydown:pe},[e.type?null:d(qe,{ref:f,tabs:[...e.panes]},null),r])])])}}}),je=I({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:Q(Function),default:()=>!0},stretch:Boolean}),G=e=>Be(e)||ke(e),Ge={[be]:e=>G(e),tabClick:(e,o)=>o instanceof Event,tabChange:e=>G(e),edit:(e,o)=>["remove","add"].includes(o),tabRemove:e=>G(e),tabAdd:()=>!0};var Qe=M({name:"ElTabs",props:je,emits:Ge,setup(e,{emit:o,slots:P,expose:R}){var i,n;const b=K("tabs"),{children:x,addChild:c,removeChild:h}=De(U(),"ElTabPane"),v=T(),f=T((n=(i=e.modelValue)!=null?i:e.activeName)!=null?n:"0"),u=t=>{f.value=t,o(be,t),o("tabChange",t)},s=async t=>{var p,g,z;if(!(f.value===t||te(t)))try{await((p=e.beforeLeave)==null?void 0:p.call(e,t,f.value))!==!1&&(u(t),(z=(g=v.value)==null?void 0:g.removeFocus)==null||z.call(g))}catch{}},B=(t,p,g)=>{t.props.disabled||(s(p),o("tabClick",t,g))},S=(t,p)=>{t.props.disabled||te(t.props.name)||(p.stopPropagation(),o("edit",t.props.name,"remove"),o("tabRemove",t.props.name))},w=()=>{o("edit",void 0,"add"),o("tabAdd")};return Ee({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},F(()=>!!e.activeName)),O(()=>e.activeName,t=>s(t)),O(()=>e.modelValue,t=>s(t)),O(f,async()=>{var t;await J(),(t=v.value)==null||t.scrollToActiveTab()}),$e(q,{props:e,currentName:f,registerPane:c,unregisterPane:h}),R({currentName:f}),()=>{const t=e.editable||e.addable?d("span",{class:b.e("new-tab"),tabindex:"0",onClick:w,onKeydown:z=>{z.code===D.enter&&w()}},[d(V,{class:b.is("icon-plus")},{default:()=>[d(xe,null,null)]})]):null,p=d("div",{class:[b.e("header"),b.is(e.tabPosition)]},[t,d(Ye,{ref:v,currentName:f.value,editable:e.editable,type:e.type,panes:x.value,stretch:e.stretch,onTabClick:B,onTabRemove:S},null)]),g=d("div",{class:b.e("content")},[de(P,"default")]);return d("div",{class:[b.b(),b.m(e.tabPosition),{[b.m("card")]:e.type==="card",[b.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[p,g]:[g,p]])}}});const Xe=I({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),Ze=["id","aria-hidden","aria-labelledby"],fe="ElTabPane",Je=M({name:fe}),et=M({...Je,props:Xe,setup(e){const o=e,P=U(),R=Oe(),i=X(q);i||Z(fe,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const n=K("tab-pane"),b=T(),x=F(()=>o.closable||i.props.closable),c=ae(()=>{var s;return i.currentName.value===((s=o.name)!=null?s:b.value)}),h=T(c.value),v=F(()=>{var s;return(s=o.name)!=null?s:b.value}),f=ae(()=>!o.lazy||h.value||c.value);O(c,s=>{s&&(h.value=!0)});const u=Re({uid:P.uid,slots:R,props:o,paneName:v,active:c,index:b,isClosable:x});return ue(()=>{i.registerPane(u)}),ze(()=>{i.unregisterPane(u.uid)}),(s,B)=>$(f)?Ae((oe(),re("div",{key:0,id:`pane-${$(v)}`,class:ie($(n).b()),role:"tabpanel","aria-hidden":!$(c),"aria-labelledby":`tab-${$(v)}`},[de(s.$slots,"default")],10,Ze)),[[Me,$(c)]]):Fe("v-if",!0)}});var me=ce(et,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const nt=Le(Qe,{TabPane:me}),lt=Ve(me);export{lt as E,nt as a};
