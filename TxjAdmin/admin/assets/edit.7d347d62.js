import{$ as R,W as x,X as q,H as S,C as T,B as U,G as $,w as L,P as G}from"./element-plus.28f30ed2.js";import{_ as H}from"./index.7507a854.js";import{u as M,a as O}from"./vue-router.bee126d8.js";import{g as P,f as j}from"./index.93d1c242.js";import{n as z,a as W}from"./message.2f608d2e.js";import{d as v,r as X,_ as J,s as K,o as i,c as _,V as e,M as t,O as Q,u as a,L as Y,S as n,T as p,a as m,U as Z,aa as ee}from"./@vue.cb90fff3.js";import"./lodash-es.020a3960.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.54201ba6.js";import"./@element-plus.36ce49f2.js";import"./dayjs.38099f94.js";import"./axios.db0b6952.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./vue-drag-resize.44c30f3e.js";import"./lodash.265ebbd3.js";import"./pinia.66d683d1.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.d9c88729.js";import"./color.8789f62b.js";import"./clone.7ebdaffc.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e8a38282.js";import"./ms.a9ae1d6d.js";import"./nprogress.a77a2697.js";import"./vue-clipboard3.70be7e6e.js";import"./clipboard.551ce183.js";import"./echarts.f889f12e.js";import"./zrender.ec6da783.js";import"./tslib.60310f1a.js";import"./highlight.js.9905ea4d.js";import"./@highlightjs.ae4f7a48.js";const te=m("div",{class:"font-medium mb-7"},"\u901A\u77E5\u540D\u79F0",-1),oe=m("div",{class:"font-medium mb-7"},"\u77ED\u4FE1\u901A\u77E5",-1),ae={class:"w-80"},se={class:"flex-1"},ue={class:"w-full max-w-[320px]"},re={class:"form-tips"},le=v({name:"noticeEdit"}),ze=v({...le,setup(ne){const f=M(),g=O(),d=X(!1),o=J({id:"",name:"",type:"",remarks:"",smsNotice:{status:0,templateId:"",content:"",tips:[]}}),B={"smsNotice.templateId":[{required:!0,message:"\u8BF7\u8F93\u5165\u6A21\u677FID",trigger:"blur"}],"smsNotice.content":[{required:!0,message:"\u8BF7\u8F93\u5165\u77ED\u4FE1\u5185\u5BB9",trigger:"blur"}]},{removeTab:D}=P(),b=K(),N=async()=>{d.value=!0;const u=await z({id:f.query.id});Object.keys(u).forEach(s=>{o[s]=u[s]}),d.value=!1},w=async()=>{var u;await((u=b.value)==null?void 0:u.validate()),await W(o),j.msgSuccess("\u64CD\u4F5C\u6210\u529F"),D(),g.back()};return f.query.id&&N(),(u,s)=>{const V=R,c=S,l=T,E=x,k=q,F=U,y=$,h=L,A=H,I=G;return i(),_("div",null,[e(c,{class:"!border-none",shadow:"never"},{default:t(()=>[e(V,{content:u.$route.meta.title,onBack:s[0]||(s[0]=r=>u.$router.back())},null,8,["content"])]),_:1}),Q((i(),Y(y,{ref_key:"formRef",ref:b,model:a(o),"label-width":"120px",rules:B},{default:t(()=>[e(c,{class:"!border-none mt-4",shadow:"never"},{default:t(()=>[te,e(l,{label:"\u901A\u77E5\u540D\u79F0",prop:"name"},{default:t(()=>[n(p(a(o).name),1)]),_:1}),e(l,{label:"\u901A\u77E5\u7C7B\u578B",prop:"name"},{default:t(()=>[n(p(a(o).type),1)]),_:1}),e(l,{label:"\u901A\u77E5\u4E1A\u52A1",prop:"name"},{default:t(()=>[n(p(a(o).remarks),1)]),_:1})]),_:1}),e(c,{class:"!border-none mt-4",shadow:"never"},{default:t(()=>[oe,e(l,{label:"\u5F00\u542F\u72B6\u6001",prop:"smsNotice.status",required:""},{default:t(()=>[e(k,{modelValue:a(o).smsNotice.status,"onUpdate:modelValue":s[1]||(s[1]=r=>a(o).smsNotice.status=r)},{default:t(()=>[e(E,{label:"0"},{default:t(()=>[n("\u5173\u95ED")]),_:1}),e(E,{label:"1"},{default:t(()=>[n("\u5F00\u542F")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(l,{label:"\u6A21\u677FID",prop:"smsNotice.templateId"},{default:t(()=>[m("div",ae,[e(F,{modelValue:a(o).smsNotice.templateId,"onUpdate:modelValue":s[2]||(s[2]=r=>a(o).smsNotice.templateId=r),placeholder:"\u8BF7\u8F93\u5165\u6A21\u677FID"},null,8,["modelValue"])])]),_:1}),e(l,{label:"\u77ED\u4FE1\u5185\u5BB9",prop:"smsNotice.content"},{default:t(()=>[m("div",se,[m("div",ue,[e(F,{type:"textarea",autosize:{minRows:6,maxRows:6},modelValue:a(o).smsNotice.content,"onUpdate:modelValue":s[3]||(s[3]=r=>a(o).smsNotice.content=r)},null,8,["modelValue"])]),m("div",re,[(i(!0),_(Z,null,ee(a(o).smsNotice.tips,(r,C)=>(i(),_("div",{key:C},p(r),1))),128))])])]),_:1})]),_:1})]),_:1},8,["model"])),[[I,a(d)]]),e(A,null,{default:t(()=>[e(h,{type:"primary",onClick:w},{default:t(()=>[n("\u4FDD\u5B58")]),_:1})]),_:1})])}}});export{ze as default};