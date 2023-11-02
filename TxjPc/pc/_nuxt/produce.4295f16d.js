import{A as De,_ as Te,v as z,B as nt,C as rt,D as Fe,G as it,H as Be,y as F,r as $,I as He,J as Pe,K as ut,L as Z,o as n,m as w,b as v,w as g,M as he,a as i,N as j,j as ge,n as k,c as _,O as H,t as W,q as E,P as ct,T as dt,Q as pt,R as Ae,S as mt,U as ft,V as _t,h as r,W as Ne,d as q,X as vt,Y as yt,Z as ie,$ as ht,z as A,E as we,a0 as ke,F as B,i as P,a1 as ee,a2 as ne,a3 as Ce,a4 as Ve,l as gt,a5 as bt,f as wt,g as ze,x as _e,a6 as Q,k as kt,a7 as Ct,p as Vt,e as Et,a8 as $t}from"./entry.35d4c246.js";import{E as St,a as xt,b as Rt}from"./el-collapse.8f120924.js";import{E as It,a as Bt}from"./el-form.c9be7d71.js";import{a as zt,E as Lt}from"./index.d4a9ac2e.js";/* empty css                  *//* empty css                     *//* empty css                  */import{_ as te}from"./_plugin-vue_export-helper.c27b6911.js";import{E as Dt,a as Tt}from"./el-radio-group.3e93ee2b.js";import{E as Ft,a as Ht}from"./index.2f982f63.js";import{_ as Ue,a as Pt,c as At,b as Nt,d as Ut,g as qt}from"./model-picker.vue.eeb7924b.js";import{_ as Mt}from"./index.vue.7a2b704e.js";import{E as re}from"./index.e24e47ce.js";import{d as Ot,a as Wt,u as jt}from"./index.93e13010.js";import{_ as Gt}from"./layout.bd874b6a.js";import{u as ve}from"./asyncData.fb96340f.js";import{u as Jt}from"./useLockFn.ed801410.js";import{u as Kt}from"./index.142556ee.js";import{g as Yt,a as Xt}from"./create.65762b44.js";import{u as Qt}from"./useCopy.3838cbef.js";import{g as Zt}from"./position.fdd244ba.js";import{t as Le}from"./throttle.203d98ad.js";import{w as eo}from"./index.a94e08ff.js";import"./castArray.048c84c6.js";import"./index.540b2914.js";import"./_baseClone.43deedb0.js";import"./_getTag.0a62c0db.js";import"./index.d44e751f.js";import"./strings.b7c92e5e.js";import"./isEqual.97080887.js";import"./debounce.7d5a41e6.js";import"./_commonjsHelpers.87174ba5.js";import"./client-only.944bbeec.js";/* empty css                  */import"./index.85266373.js";import"./dropdown.72fdcde9.js";import"./refs.179b14af.js";/* empty css                *//* empty css                    */const to=De({...Ot,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0},headerAriaLevel:{type:String,default:"2"}}),oo=Wt,lo=z({name:"ElDrawer",components:{ElOverlay:nt,ElFocusTrap:rt,ElIcon:Fe,Close:it},inheritAttrs:!1,props:to,emits:oo,setup(e,{slots:s}){Be({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},F(()=>!!s.title)),Be({scope:"el-drawer",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/drawer.html#attributes",type:"Attribute"},F(()=>!!e.customClass));const l=$(),o=$(),t=He("drawer"),{t:u}=Pe(),c=F(()=>e.direction==="rtl"||e.direction==="ltr"),a=F(()=>ut(e.size));return{...jt(e,l),drawerRef:l,focusStartRef:o,isHorizontal:c,drawerSize:a,ns:t,t:u}}}),so=["aria-label","aria-labelledby","aria-describedby"],ao=["id","aria-level"],no=["aria-label"],ro=["id"];function io(e,s,l,o,t,u){const c=Z("close"),a=Z("el-icon"),d=Z("el-focus-trap"),p=Z("el-overlay");return n(),w(pt,{to:"body",disabled:!e.appendToBody},[v(dt,{name:e.ns.b("fade"),onAfterEnter:e.afterEnter,onAfterLeave:e.afterLeave,onBeforeLeave:e.beforeLeave,persisted:""},{default:g(()=>[he(v(p,{mask:e.modal,"overlay-class":e.modalClass,"z-index":e.zIndex,onClick:e.onModalClick},{default:g(()=>[v(d,{loop:"",trapped:e.visible,"focus-trap-el":e.drawerRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:g(()=>[i("div",j({ref:"drawerRef","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:e.titleId,"aria-describedby":e.bodyId},e.$attrs,{class:[e.ns.b(),e.direction,e.visible&&"open",e.customClass],style:e.isHorizontal?"width: "+e.drawerSize:"height: "+e.drawerSize,role:"dialog",onClick:s[1]||(s[1]=ge(()=>{},["stop"]))}),[i("span",{ref:"focusStartRef",class:k(e.ns.e("sr-focus")),tabindex:"-1"},null,2),e.withHeader?(n(),_("header",{key:0,class:k(e.ns.e("header"))},[e.$slots.title?H(e.$slots,"title",{key:1},()=>[E(" DEPRECATED SLOT ")]):H(e.$slots,"header",{key:0,close:e.handleClose,titleId:e.titleId,titleClass:e.ns.e("title")},()=>[e.$slots.title?E("v-if",!0):(n(),_("span",{key:0,id:e.titleId,role:"heading","aria-level":e.headerAriaLevel,class:k(e.ns.e("title"))},W(e.title),11,ao))]),e.showClose?(n(),_("button",{key:2,"aria-label":e.t("el.drawer.close"),class:k(e.ns.e("close-btn")),type:"button",onClick:s[0]||(s[0]=(...y)=>e.handleClose&&e.handleClose(...y))},[v(a,{class:k(e.ns.e("close"))},{default:g(()=>[v(c)]),_:1},8,["class"])],10,no)):E("v-if",!0)],2)):E("v-if",!0),e.rendered?(n(),_("div",{key:1,id:e.bodyId,class:k(e.ns.e("body"))},[H(e.$slots,"default")],10,ro)):E("v-if",!0),e.$slots.footer?(n(),_("div",{key:2,class:k(e.ns.e("footer"))},[H(e.$slots,"footer")],2)):E("v-if",!0)],16,so)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])]),_:3},8,["mask","overlay-class","z-index","onClick"]),[[ct,e.visible]])]),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"])}var uo=Te(lo,[["render",io],["__file","/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]);const co=Ae(uo),po=De({icon:{type:mt,default:()=>ft},title:String,content:{type:String,default:""}}),mo={back:()=>!0},fo=["aria-label"],_o=z({name:"ElPageHeader"}),vo=z({..._o,props:po,emits:mo,setup(e,{emit:s}){const l=_t(),{t:o}=Pe(),t=He("page-header"),u=F(()=>[t.b(),{[t.m("has-breadcrumb")]:!!l.breadcrumb,[t.m("has-extra")]:!!l.extra,[t.is("contentful")]:!!l.default}]);function c(){s("back")}return(a,d)=>(n(),_("div",{class:k(r(u))},[a.$slots.breadcrumb?(n(),_("div",{key:0,class:k(r(t).e("breadcrumb"))},[H(a.$slots,"breadcrumb")],2)):E("v-if",!0),i("div",{class:k(r(t).e("header"))},[i("div",{class:k(r(t).e("left"))},[i("div",{class:k(r(t).e("back")),role:"button",tabindex:"0",onClick:c},[a.icon||a.$slots.icon?(n(),_("div",{key:0,"aria-label":a.title||r(o)("el.pageHeader.title"),class:k(r(t).e("icon"))},[H(a.$slots,"icon",{},()=>[a.icon?(n(),w(r(Fe),{key:0},{default:g(()=>[(n(),w(Ne(a.icon)))]),_:1})):E("v-if",!0)])],10,fo)):E("v-if",!0),i("div",{class:k(r(t).e("title"))},[H(a.$slots,"title",{},()=>[q(W(a.title||r(o)("el.pageHeader.title")),1)])],2)],2),v(r(St),{direction:"vertical"}),i("div",{class:k(r(t).e("content"))},[H(a.$slots,"content",{},()=>[q(W(a.content),1)])],2)],2),a.$slots.extra?(n(),_("div",{key:0,class:k(r(t).e("extra"))},[H(a.$slots,"extra")],2)):E("v-if",!0)],2),a.$slots.default?(n(),_("div",{key:1,class:k(r(t).e("main"))},[H(a.$slots,"default")],2)):E("v-if",!0)],2))}});var yo=Te(vo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/page-header/src/page-header.vue"]]);const ho=Ae(yo),T="ElInfiniteScroll",go=50,bo=200,wo=0,ko={delay:{type:Number,default:bo},distance:{type:Number,default:wo},disabled:{type:Boolean,default:!1},immediate:{type:Boolean,default:!0}},Ee=(e,s)=>Object.entries(ko).reduce((l,[o,t])=>{var u,c;const{type:a,default:d}=t,p=e.getAttribute(`infinite-scroll-${o}`);let y=(c=(u=s[p])!=null?u:p)!=null?c:d;return y=y==="false"?!1:y,y=a(y),l[o]=Number.isNaN(y)?d:y,l},{}),qe=e=>{const{observer:s}=e[T];s&&(s.disconnect(),delete e[T].observer)},Co=(e,s)=>{const{container:l,containerEl:o,instance:t,observer:u,lastScrollTop:c}=e[T],{disabled:a,distance:d}=Ee(e,t),{clientHeight:p,scrollHeight:y,scrollTop:h}=o,I=h-c;if(e[T].lastScrollTop=h,u||a||I<0)return;let C=!1;if(l===e)C=y-(p+h)<=d;else{const{clientTop:S,scrollHeight:N}=e,J=Zt(e,o);C=h+p>=J+S+N-d}C&&s.call(t)};function ye(e,s){const{containerEl:l,instance:o}=e[T],{disabled:t}=Ee(e,o);t||l.clientHeight===0||(l.scrollHeight<=l.clientHeight?s.call(o):qe(e))}const Vo={async mounted(e,s){const{instance:l,value:o}=s;vt(o)||yt(T,"'v-infinite-scroll' binding value must be a function"),await ie();const{delay:t,immediate:u}=Ee(e,l),c=ht(e,!0),a=c===window?document.documentElement:c,d=Le(Co.bind(null,e,o),t);if(c){if(e[T]={instance:l,container:c,containerEl:a,delay:t,cb:o,onScroll:d,lastScrollTop:a.scrollTop},u){const p=new MutationObserver(Le(ye.bind(null,e,o),go));e[T].observer=p,p.observe(e,{childList:!0,subtree:!0}),ye(e,o)}c.addEventListener("scroll",d)}},unmounted(e){const{container:s,onScroll:l}=e[T];s==null||s.removeEventListener("scroll",l),qe(e)},async updated(e){if(!e[T])await ie();else{const{containerEl:s,cb:l,observer:o}=e[T];s.clientHeight&&o&&ye(e,l)}}},be=Vo;be.install=e=>{e.directive("InfiniteScroll",be)};const Eo=be,$o=z({__name:"input",props:{id:{},size:{},disabled:{type:Boolean},modelValue:{},type:{},resize:{},autosize:{},autocomplete:{},formatter:{},parser:{},placeholder:{},form:{},readonly:{type:Boolean},clearable:{type:Boolean},showPassword:{type:Boolean},showWordLimit:{type:Boolean,default:!0},suffixIcon:{},prefixIcon:{},containerRole:{},label:{},tabindex:{},validateEvent:{type:Boolean},inputStyle:{}},emits:["update:modelValue"],setup(e,{emit:s}){const l=e,o=F({get(){return l.modelValue},set(t){s("update:modelValue",t)}});return(t,u)=>{const c=we;return n(),w(c,j(l,{modelValue:r(o),"onUpdate:modelValue":u[0]||(u[0]=a=>A(o)?o.value=a:null)}),null,16,["modelValue"])}}}),So=z({__name:"textarea",props:{id:{},size:{},disabled:{type:Boolean},modelValue:{},type:{},resize:{},autosize:{},autocomplete:{},formatter:{},parser:{},placeholder:{},form:{},readonly:{type:Boolean},clearable:{type:Boolean},showPassword:{type:Boolean},showWordLimit:{type:Boolean,default:!0},suffixIcon:{},prefixIcon:{},containerRole:{},label:{},tabindex:{},validateEvent:{type:Boolean},inputStyle:{}},emits:["update:modelValue"],setup(e,{emit:s}){const l=e,o=F({get(){return l.modelValue},set(t){s("update:modelValue",t)}});return(t,u)=>{const c=we;return n(),w(c,j(l,{modelValue:r(o),"onUpdate:modelValue":u[0]||(u[0]=a=>A(o)?o.value=a:null),type:"textarea",autosize:t.autosize?{minRows:2}:!1}),null,16,["modelValue","autosize"])}}}),xo=z({__name:"select",props:{defaultValue:{},modelValue:{},options:{default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:s}){const l=e,o=F({get(){return l.modelValue},set(t){s("update:modelValue",t)}});return ke(()=>{l.defaultValue&&(o.value=l.defaultValue)}),(t,u)=>{const c=zt,a=Lt;return n(),w(a,j(t.$attrs,{modelValue:r(o),"onUpdate:modelValue":u[0]||(u[0]=d=>A(o)?o.value=d:null)}),{default:g(()=>[(n(!0),_(B,null,P(t.options,(d,p)=>(n(),w(c,{key:p,label:d,value:d},null,8,["label","value"]))),128))]),_:1},16,["modelValue"])}}});const Ro=te(xo,[["__scopeId","data-v-4dc954c1"]]);const Io=z({__name:"radio",props:{modelValue:{},options:{},defaultValue:{}},emits:["update:modelValue"],setup(e,{emit:s}){const l=e,o=F({get(){return l.modelValue},set(t){s("update:modelValue",t)}});return ke(()=>{l.defaultValue&&(o.value=l.defaultValue)}),(t,u)=>{const c=Dt,a=Tt;return n(),w(a,j(t.$attrs,{modelValue:r(o),"onUpdate:modelValue":u[0]||(u[0]=d=>A(o)?o.value=d:null)}),{default:g(()=>[(n(!0),_(B,null,P(t.options,(d,p)=>(n(),w(c,{key:p,label:d,name:d},null,8,["label","name"]))),128))]),_:1},16,["modelValue"])}}});const Bo=te(Io,[["__scopeId","data-v-29241213"]]);const zo=z({__name:"checkbox",props:{modelValue:{},options:{},defaultValue:{}},emits:["update:modelValue"],setup(e,{emit:s}){const l=e,o=F({get(){return l.modelValue},set(t){s("update:modelValue",t)}});return ke(()=>{l.defaultValue&&(o.value=l.defaultValue)}),(t,u)=>{const c=Ft,a=Ht;return n(),w(a,j(t.$attrs,{modelValue:r(o),"onUpdate:modelValue":u[0]||(u[0]=d=>A(o)?o.value=d:null)}),{default:g(()=>[(n(!0),_(B,null,P(t.options,(d,p)=>(n(),w(c,{key:p,label:d,name:d},null,8,["label","name"]))),128))]),_:1},16,["modelValue"])}}});const Lo=te(zo,[["__scopeId","data-v-b84a6acb"]]),Do=Object.freeze(Object.defineProperty({__proto__:null,WidgetCheckbox:Lo,WidgetInput:$o,WidgetRadio:Bo,WidgetSelect:Ro,WidgetTextarea:So},Symbol.toStringTag,{value:"Module"})),To=z({__name:"index",props:{formLists:{default:()=>[]},modelValue:{},model:{},rules:{},labelPosition:{default:"top"},requireAsteriskPosition:{},labelWidth:{},labelSuffix:{},inline:{type:Boolean},inlineMessage:{type:Boolean},statusIcon:{type:Boolean},showMessage:{type:Boolean},validateOnRuleChange:{type:Boolean},hideRequiredAsterisk:{type:Boolean},scrollToError:{type:Boolean},scrollIntoViewOptions:{},size:{},disabled:{type:Boolean}},emits:["update:modelValue"],setup(e,{expose:s,emit:l}){const o=e,t=ee(),u=F({get(){return o.modelValue},set(p){l("update:modelValue",p)}}),c=$({}),a=p=>Do[p],d=async()=>{var p;await((p=t.value)==null?void 0:p.validate())};return ne(()=>o.formLists,async p=>{var y;c.value=p==null?void 0:p.reduce((h,I)=>(u.value[I.props.field]=void 0,I.props.isRequired&&(h[I.id]=[{required:!0,message:"必填项不能为空",trigger:"blur"}]),h),{}),await ie(),(y=t.value)==null||y.resetFields()},{immediate:!0}),s({validate:d}),(p,y)=>{const h=It,I=Bt;return n(),w(I,j({ref_key:"formRef",ref:t},o,{rules:r(c),model:r(u)}),{default:g(()=>[(n(!0),_(B,null,P(p.formLists,C=>(n(),w(h,{key:C.id,prop:C.props.field,label:C.props.title,required:C.props.isRequired},{default:g(()=>[(n(),w(Ne(a(C.name)),j(C.props,{modelValue:r(u)[C.props.field],"onUpdate:modelValue":S=>r(u)[C.props.field]=S}),null,16,["modelValue","onUpdate:modelValue"]))]),_:2},1032,["prop","label","required"]))),128))]),_:1},16,["rules","model"])}}}),Fo={class:"create-record-item"},Ho={class:"flex items-center"},Po={class:"mr-auto line-clamp-1 text-lg font-medium"},Ao={class:"flex items-center flex-none mt-[10px]"},No={class:"text-xs text-tx-secondary mr-auto"},Uo=z({__name:"record-item",props:{title:{default:""},time:{default:""},content:{default:""},showRewrite:{type:Boolean,default:!1},showCopy:{type:Boolean,default:!0},overflow:{type:Boolean,default:!1}},emits:["copy","rewrite"],setup(e,{emit:s}){const l=Ce();return(o,t)=>{var a,d;const u=Ue,c=Ve;return n(),_("div",Fo,[i("div",Ho,[i("div",Po,W(o.title),1)]),i("div",{class:k(["mt-[10px]",{"line-clamp-[8]":o.overflow}])},[v(u,{content:o.content,"use-markdown":!!((d=(a=r(l).config)==null?void 0:a.chat)!=null&&d.isMarkdown)},null,8,["content","use-markdown"])],2),i("div",Ao,[i("div",No,W(o.time),1),o.showRewrite?(n(),w(c,{key:0,round:"",size:"small",color:"#F2F2F2",onClick:t[0]||(t[0]=ge(p=>s("rewrite"),["stop"]))},{default:g(()=>[q(" 重写 ")]),_:1})):E("",!0),o.showCopy?(n(),w(c,{key:1,round:"",size:"small",color:"#F2F2F2",onClick:t[1]||(t[1]=ge(p=>s("copy",o.content),["stop"]))},{default:g(()=>[q(" 复制 ")]),_:1})):E("",!0)])])}}});const qo=te(Uo,[["__scopeId","data-v-886c8108"]]);const Mo={class:"h-full flex flex-col"},Oo={class:"flex items-center pb-[16px]"},Wo={class:"text-lg flex-1 min-w-0 font-medium"},jo=i("span",{class:"ml-[10px]"},"复制",-1),Go={class:"flex-1 min-h-0"},Jo={class:"pt-[16px]"},Ko=z({__name:"record-preview",props:{title:{default:""},time:{default:""},content:{default:""},overflow:{type:Boolean,default:!1}},emits:["copy"],setup(e,{expose:s,emit:l}){const o=Ce(),t=$(!1);return s({open:()=>{t.value=!0}}),(c,a)=>{const d=Z("overflow-tooltip"),p=Mt,y=Ve,h=Ue,I=re,C=co;return n(),w(C,{ref:"drawerRef",modelValue:r(t),"onUpdate:modelValue":a[1]||(a[1]=S=>A(t)?t.value=S:null),title:"创作详情",direction:"rtl",class:"record-preview-drawer",size:"50%","append-to-body":""},{default:g(()=>[i("div",Mo,[i("div",Oo,[i("div",Wo,[v(d,{content:c.title},null,8,["content"])]),v(y,{link:"",onClick:a[0]||(a[0]=S=>l("copy",c.content))},{default:g(()=>[v(p,{name:"el-icon-DocumentCopy",size:18}),jo]),_:1})]),i("div",Go,[v(I,null,{default:g(()=>{var S,N;return[i("div",Jo,[v(h,{content:c.content,"use-markdown":!!((N=(S=r(o).config)==null?void 0:S.chat)!=null&&N.isMarkdown)},null,8,["content","use-markdown"])])]}),_:1})])])]),_:1},8,["modelValue"])}}});const Yo=(e,s="yyyy-mm-dd")=>{e||(e=Number(new Date)),e.toString().length==10&&(e*=1e3);const l=new Date(e);let o;const t={"y+":l.getFullYear().toString(),"m+":(l.getMonth()+1).toString(),"d+":l.getDate().toString(),"h+":l.getHours().toString(),"M+":l.getMinutes().toString(),"s+":l.getSeconds().toString()};for(const u in t)o=new RegExp("("+u+")").exec(s),o&&(s=s.replace(o[1],o[1].length==1?t[u]:t[u].padStart(o[1].length,"0")));return s},Xo=""+new URL("create_record_null.353a2bee.png",import.meta.url).href,oe=e=>(Vt("data-v-d75a1005"),e=e(),Et(),e),Qo={class:"bg-white flex flex-col h-full w-[200px] text-tx-primary"},Zo={class:"pt-[16px] px-[16px]"},el={class:"mt-[16px]"},tl={class:"flex justify-end mt-[16px] mb-[10px]"},ol={class:"flex-1 min-h-0"},ll={class:"creation-lists"},sl={class:"px-[16px]"},al=["onClick"],nl=["src"],rl={class:"ml-[10px]"},il={class:"h-full sm:flex"},ul={class:"xl:h-full xl:w-[400px] flex flex-col rounded-[6px] bg-white p-[20px]"},cl={class:"flex pb-[20px]"},dl={class:"text-lg font-medium line-clamp-1 mr-auto"},pl={class:"flex-1 min-h-0"},ml={class:""},fl={class:"flex flex-col justify-center items-center"},_l={class:"flex-1 sm:ml-[16px] mt-[16px] sm:mt-0 min-w-0"},vl=oe(()=>i("div",{class:"text-lg font-medium mb-[16px]"}," 本次创作结果 ",-1)),yl={key:1,class:"overflow-x-hidden"},hl=oe(()=>i("div",{class:"text-lg font-medium mr-[10px]"}," 创作历史 ",-1)),gl={class:"2xl:flex 2xl:flex-wrap 2xl:mx-[-8px] items-stretch"},bl={key:1,class:"h-full flex flex-col items-center justify-center py-[100px]"},wl=oe(()=>i("img",{class:"w-[120px] h-[120px]",src:Xo,alt:""},null,-1)),kl=oe(()=>i("div",{class:"my-[16px] font-medium"}," AI创作结果会在显示这里，现在你只需要 ",-1)),Cl=oe(()=>i("div",{class:"text-tx-regular text-sm"},[q(" 1. 在左侧填好必要的信息，填写越详细，结果越准确哦 "),i("br"),q(" 2.点击立即生成按钮，静待AI妙笔生花，一般在10秒内搞定 ")],-1)),Vl=[wl,kl,Cl],El=z({__name:"produce",async setup(e){let s,l;const o=gt(),t=$(""),u=bt(),c=ee(),a=ee(),d=$(!0),p=$([]),y=$(Number(u.query.id)),h=$({}),I=ee(),C=ee(),S=$(null);Ce(),wt();const N=ze({title:"",content:""}),J=$(""),$e=$(),{data:ue,pending:$l,refresh:Me}=([s,l]=_e(()=>ve(()=>Yt({keyword:t.value}),{default(){return[]}},"$p6CyUgWcnC")),s=await s,l(),s),Oe=[{name:"WidgetTextarea",title:"多行文本",id:"question",props:{title:"内容描述",placeholder:"",rows:8,maxlength:400,autosize:!1,isRequired:!1}}],We=async()=>{await Q.confirm("确定清空创作记录？"),await At({type:2,otherId:y.value}),Q.msgSuccess("清空成功"),R.value=[],x.lists=[],ce()},{data:le,refresh:je}=([s,l]=_e(()=>ve(()=>Xt({id:y.value}),{default(){return{}},transform(m){return m.form||(m.form=Oe),m.form=m.formJson,m}},"$x8e8L4FufG")),s=await s,l(),s),x=ze({pageNo:1,count:0,pageSize:15,lists:[]}),{refresh:Se,pending:xe}=([s,l]=_e(()=>ve(()=>qt({otherId:y.value,pageSize:x.pageSize,pageNo:x.pageNo,type:2}),{default(){return[]},transform(m){const f=m.map(V=>{let L="";if($t(V.ask)){const D=(V==null?void 0:V.ask[0])||{};L=`${D.title}：${D.value}`}else L=V.ask;return{...V,title:L}});return x.lists.push(...f),f}},"$V2mL5dOeXY")),s=await s,l(),s),ce=()=>{Object.assign(x,{pageNo:1,count:0,pageSize:15}),Se()},Ge=()=>{xe.value||x.count>=x.pageNo*x.pageSize&&(x.pageNo++,Se())},Je=(m,f)=>{var V;N.title=m,N.content=f,(V=I.value)==null||V.open()},Ke=m=>{y.value=m.id},{lockFn:Ye}=Jt(async m=>{m.reply&&(h.value=m.reply,await ie(),Ie())});eo(t,m=>{Me()},{debounce:500});const Xe=()=>{var m;(m=le.value)==null||m.form.forEach(f=>{f.props.placeholder&&!f.props.defaultValue&&(h.value[f.props.field]=f.props.placeholder)})},Re=()=>{d.value?(d.value=!1,p.value=[]):(p.value=ue.value.map(m=>m.id),d.value=!0)},R=$([]),Qe=()=>{var f;if(h.value.question)return h.value.question;const m=((f=le.value)==null?void 0:f.form[0])||{};return`${m.props.title}：${h.value[m.id]||""}`},M=$(!1);let se=null;const Ze=()=>{se==null||se.cancel(),M.value=!1},et=m=>{$e.value=m},Ie=async()=>{var m;if(o.userInfo.balance<$e.value){kt({type:"success",message:"请联系管理员"});return}try{await((m=a.value)==null?void 0:m.validate())}catch{Q.msgError("必填项不能为空");return}if(!M.value)try{M.value=!0,await Nt({modelKey:J.value,otherId:y.value,form:h.value.question?void 0:h.value,question:h.value.question,type:2},{onstart(f){se=f,R.value.length&&(R.value=[],ce())},onmessage(f){f.trim().split("data:").forEach(async V=>{var L;if(V!=="")try{const D=JSON.parse(V),{id:O,event:pe,data:ae,index:K,error:Y}=D;if(Y&&Y.errCode===101){(L=c.value)==null||L.open();return}else if(Y){Q.msgError(Y.errMsg);return}if(pe==="finish"||!O)return;let G=R.value.findIndex(me=>me.id===O);G===-1&&(R.value.push({createTime:Yo(new Date,"yyyy-mm-dd hh:MM:ss"),title:h.value.question?h.value.question:Qe(),reply:[],id:O}),G=R.value.length-1),ae&&(R.value[G].reply[K]||(R.value[G].reply[K]=""),R.value[G].reply[K]+=ae)}catch{M.value=!1}})},onclose(){o.getUser(),M.value=!1}})}catch{M.value=!1}},{copy:tt}=Qt(),de=async m=>{try{await tt(m)}catch{Q.msgSuccess("复制失败")}};ne(ue,m=>{d.value=!1,Re()},{immediate:!0});const{height:ot}=Kt(C);return ne(ot,m=>{var f,V,L;if(M.value){const D=(V=(f=S.value)==null?void 0:f.wrapRef)==null?void 0:V.offsetHeight,O=m-D;O>0&&((L=S.value)==null||L.setScrollTop(O))}}),ne(y,()=>{Ze(),je(),ce(),R.value=[],x.lists=[]}),(m,f)=>{const V=ho,L=we,D=Ve,O=Rt,pe=xt,ae=To,K=qo,Y=Ko,G=Ut,me=Gt,lt=Eo,st=Ct;return n(),_("div",null,[v(me,{name:"default"},{panel:g(()=>[i("div",Qo,[i("div",Zo,[v(V,{content:"",onBack:f[0]||(f[0]=b=>m.$router.back())}),i("div",el,[v(L,{modelValue:r(t),"onUpdate:modelValue":f[1]||(f[1]=b=>A(t)?t.value=b:null),placeholder:"请输入关键词搜索"},null,8,["modelValue"])]),i("div",tl,[v(D,{link:"",type:"primary",onClick:Re},{default:g(()=>[q(" 全部"+W(r(d)?"收起":"展开"),1)]),_:1})])]),i("div",ol,[v(r(re),null,{default:g(()=>[i("div",ll,[v(pe,{modelValue:r(p),"onUpdate:modelValue":f[2]||(f[2]=b=>A(p)?p.value=b:null)},{default:g(()=>[(n(!0),_(B,null,P(r(ue),b=>(n(),w(O,{key:b.id,title:b.name,name:b.id},{default:g(()=>[i("div",sl,[(n(!0),_(B,null,P(b.modelsList,U=>(n(),_("div",{key:U.id,class:k(["creation-item",{"creation-item--active":r(y)==U.id}]),onClick:X=>Ke(U)},[i("img",{class:"w-[28px] h-28px",src:U.image,alt:""},null,8,nl),i("div",rl,W(U.name),1)],10,al))),128))])]),_:2},1032,["title","name"]))),128))]),_:1},8,["modelValue"])])]),_:1})])])]),default:g(()=>[i("div",il,[i("div",ul,[i("div",cl,[i("div",dl,W(r(le).name),1),v(D,{link:"",type:"primary",onClick:Xe},{default:g(()=>[q("插入示例")]),_:1})]),i("div",pl,[v(r(re),null,{default:g(()=>[i("div",ml,[v(ae,{ref_key:"formDesignerRef",ref:a,modelValue:r(h),"onUpdate:modelValue":f[3]||(f[3]=b=>A(h)?h.value=b:null),"form-lists":r(le).form,size:"large"},null,8,["modelValue","form-lists"])])]),_:1})]),i("div",null,[v(Pt,{modelValue:r(J),"onUpdate:modelValue":f[4]||(f[4]=b=>A(J)?J.value=b:null),onMemberFree:et},null,8,["modelValue"]),i("div",fl,[v(D,{class:"create-btn",onClick:Ie,loading:r(M)},{default:g(()=>[q(" 立即生成 ")]),_:1},8,["loading"])])])]),he((n(),_("div",_l,[r(R).length||r(x).lists.length?(n(),w(r(re),{key:0,ref_key:"scrollbarRef",ref:S},{default:g(()=>[r(R).length?(n(),_("div",{key:0,ref_key:"currentCreationHistoryRef",ref:C},[vl,(n(!0),_(B,null,P(r(R),(b,U)=>(n(),_(B,{key:U},[(n(!0),_(B,null,P(b.reply,(X,fe)=>(n(),w(K,{key:fe,class:"mb-[16px]",content:X,time:b.createTime,title:b.title,onCopy:de},null,8,["content","time","title"]))),128))],64))),128))],512)):E("",!0),r(x).lists.length?he((n(),_("div",yl,[i("div",{class:"flex items-center mb-[16px]"},[hl,i("div",{class:"bg-[#f2f2f2] text-sm px-[15px] py-[2px] rounded-full cursor-pointer",onClick:We}," 清空记录 ")]),i("div",gl,[(n(!0),_(B,null,P(r(x).lists,(b,U)=>(n(),_(B,{key:U},[(n(!0),_(B,null,P(b.reply,(X,fe)=>(n(),_("div",{key:fe,class:"2xl:w-1/2 2xl:px-[8px] mb-[16px]"},[v(K,{class:"cursor-pointer h-full",content:X,time:b.createTime,title:b.title,overflow:!0,"show-rewrite":!1,onClick:at=>Je(b.title,X),onCopy:de,onRewrite:at=>r(Ye)(b)},null,8,["content","time","title","onClick","onRewrite"])]))),128))],64))),128))])])),[[lt,Ge]]):E("",!0)]),_:1},512)):(n(),_("div",bl,Vl))])),[[st,r(xe)]])]),v(Y,{ref_key:"createRecordPreviewRef",ref:I,content:r(N).content,title:r(N).title,onCopy:de},null,8,["content","title"]),v(G,{ref_key:"guidedPopupRef",ref:c},null,512)]),_:1})])}}});const ps=te(El,[["__scopeId","data-v-d75a1005"]]);export{ps as default};
