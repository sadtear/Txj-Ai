import{D as K,F as A,C as h,B as U,t as q,G as L}from"./element-plus.28f30ed2.js";import{b as M}from"./ai_key.72a95a08.js";import{r as y,f as S}from"./index.93d1c242.js";import{p as I}from"./index.1d239a72.js";import{d as O,s as F,r as _,o as v,c as b,V as l,M as r,u as o,U as P,aa as j,L as z}from"./@vue.cb90fff3.js";import"./lodash-es.020a3960.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.54201ba6.js";import"./@element-plus.36ce49f2.js";import"./dayjs.38099f94.js";import"./axios.db0b6952.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.265ebbd3.js";import"./vue-router.bee126d8.js";import"./pinia.66d683d1.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.d9c88729.js";import"./color.8789f62b.js";import"./clone.7ebdaffc.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e8a38282.js";import"./ms.a9ae1d6d.js";import"./vue-drag-resize.44c30f3e.js";import"./nprogress.a77a2697.js";import"./vue-clipboard3.70be7e6e.js";import"./clipboard.551ce183.js";import"./echarts.f889f12e.js";import"./zrender.ec6da783.js";import"./tslib.60310f1a.js";import"./highlight.js.9905ea4d.js";import"./@highlightjs.ae4f7a48.js";function G(p){return y.get({url:"/ai/keypool/rule/detail",params:p})}function N(p){return y.post({url:"/ai/keypool/rule/add",data:p})}function T(p){return y.post({url:"/ai/keypool/rule/edit",data:p})}const H={class:"edit-popup"},Ke=O({__name:"edit",emits:["success"],setup(p,{expose:V,emit:B}){const w=F(),c=F(),f=_(""),C=_([]),t=_({id:"",type:"",rule:"",aiKey:"",prompt:"",status:1}),g={key:[{required:!0,message:"\u8BF7\u8F93\u5165APIKey",trigger:["blur"]}],rule:[{required:!0,message:"\u8BF7\u8F93\u5165\u505C\u7528\u89C4\u5219"}],prompt:[{required:!0,message:"\u8BF7\u8F93\u5165\u505C\u7528\u63D0\u793A"}]},k=async()=>{var a,e;try{await((a=w.value)==null?void 0:a.validate()),t.value.id==""?await N(t.value):t.value.id!=""&&await T(t.value),S.msgSuccess("\u64CD\u4F5C\u6210\u529F"),B("success"),(e=c.value)==null||e.close()}catch(i){return i}},x=async(a,e,i)=>{var n;if(e=="add")t.value={id:"",type:a,aiKey:"",rule:"",prompt:"",status:1},f.value="\u65B0\u589E\u89C4\u5219";else if(e=="edit"){const s=await G({id:i.id});Object.keys(t.value).map(m=>{var d;t.value[m]=(d=s[m])!=null?d:0}),t.value.type=a,f.value="\u7F16\u8F91\u89C4\u5219"}(n=c.value)==null||n.open(),D(a)},D=async a=>{try{const e=await M({type:a});C.value=e}catch(e){console.log(e)}};return V({open:x}),(a,e)=>{const i=K,n=A,s=h,m=U,d=q,R=L;return v(),b("div",H,[l(I,{ref_key:"popupRef",ref:c,title:o(f),async:!0,width:"550px",onConfirm:k},{default:r(()=>[l(R,{class:"ls-form",ref_key:"formRef",ref:w,rules:g,model:o(t),"label-width":"90px"},{default:r(()=>[l(s,{label:"\u63A5\u53E3\u7C7B\u578B"},{default:r(()=>[l(n,{class:"w-[330px]",modelValue:o(t).aiKey,"onUpdate:modelValue":e[0]||(e[0]=u=>o(t).aiKey=u)},{default:r(()=>[(v(!0),b(P,null,j(o(C),(u,E)=>(v(),z(i,{key:E,label:u.name,value:u.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(s,{label:"\u505C\u7528\u89C4\u5219",prop:"rule"},{default:r(()=>[l(m,{class:"w-[330px]",modelValue:o(t).rule,"onUpdate:modelValue":e[1]||(e[1]=u=>o(t).rule=u),placeholder:"\u8BF7\u8F93\u5165\u505C\u7528\u89C4\u5219",type:"textarea",autosize:{minRows:2,maxRows:4},clearable:""},null,8,["modelValue"])]),_:1}),l(s,{label:"\u505C\u7528\u63D0\u793A",prop:"prompt"},{default:r(()=>[l(m,{class:"w-[330px]",modelValue:o(t).prompt,"onUpdate:modelValue":e[2]||(e[2]=u=>o(t).prompt=u),placeholder:"\u8BF7\u8F93\u5165\u505C\u7528\u63D0\u793A",rows:4,clearable:""},null,8,["modelValue"])]),_:1}),l(s,{label:"\u72B6\u6001"},{default:r(()=>[l(d,{modelValue:o(t).status,"onUpdate:modelValue":e[3]||(e[3]=u=>o(t).status=u),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{Ke as default};
