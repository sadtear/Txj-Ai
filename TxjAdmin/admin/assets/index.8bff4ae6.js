import{_ as V}from"./index.7507a854.js";import{t as K,C as h,B as w,G as D,H as b,w as x}from"./element-plus.28f30ed2.js";import{r as F,f as I}from"./index.93d1c242.js";import{d as k,r as i,_ as P,j as S,o as m,c as d,V as u,M as o,a,U as c,R as U,S as _}from"./@vue.cb90fff3.js";import"./vue-drag-resize.44c30f3e.js";import"./lodash-es.020a3960.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.54201ba6.js";import"./@element-plus.36ce49f2.js";import"./dayjs.38099f94.js";import"./axios.db0b6952.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.265ebbd3.js";import"./vue-router.bee126d8.js";import"./pinia.66d683d1.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.d9c88729.js";import"./color.8789f62b.js";import"./clone.7ebdaffc.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e8a38282.js";import"./ms.a9ae1d6d.js";import"./nprogress.a77a2697.js";import"./vue-clipboard3.70be7e6e.js";import"./clipboard.551ce183.js";import"./echarts.f889f12e.js";import"./zrender.ec6da783.js";import"./tslib.60310f1a.js";import"./highlight.js.9905ea4d.js";import"./@highlightjs.ae4f7a48.js";function q(){return F.get({url:"/setting/textReview/detail"})}function N(p){return F.post({url:"/setting/textReview/save",params:p})}const R=a("div",{class:"text-lg font-medium"},"\u5185\u5BB9\u5BA1\u6838",-1),M={class:"mt-4"},j=a("div",{class:"form-tips"}," \u9ED8\u8BA4\u5173\u95ED\uFF0C\u5F00\u542F\u540E\uFF0C\u540E\u53F0\u8BA1\u5212\u4EFB\u52A1\u626B\u63CF\u5185\u5BB9\u63D0\u4EA4\u81F3\u767E\u5EA6\uFF0C\u5BA1\u6838\u8FDD\u89C4\u4F1A\u9690\u85CF\u5185\u5BB9\uFF0C\u6709\u4E00\u5B9A\u65F6\u95F4\u5EF6\u8FDF\u3002\u8BF7\u586B\u5199\u76F8\u5E94\u7684appid\u548Ckey ",-1),G=a("div",{class:"form-tips"},[_(" \u5982\u679C\u60A8\u5DF2\u5F00\u901A\uFF0C\u53EF\u76F4\u63A5\u586B\u5199\uFF1B\u5982\u679C\u672A\u5F00\u901A\uFF0C\u70B9\u51FB "),a("a",{href:"https://ai.baidu.com/solution/censoring?track=cp:ainsem|pf:pc|pp:chanpin-neirongshenhe|pu:neirongshenhe-baidu|ci:|kw:10008266",target:"_blank",rel:"noopener noreferrer"},[a("span",{class:"ml-2 text-primary"},"\u524D\u5F80\u5F00\u901A")])],-1),Ke=k({__name:"index",setup(p){const f=i(),e=i({status:"",appId:"",apiKey:"",secretKey:""}),n=async()=>{e.value=await q()},B=P({appId:[{required:!0,message:"\u8BF7\u8F93\u5165appid",trigger:"change"}],apiKey:[{required:!0,message:"\u8BF7\u8F93\u5165apiKey",trigger:"change"}],secretKey:[{required:!0,message:"\u8BF7\u8F93\u5165secretKey",trigger:"change"}]}),g=async()=>{await N(e.value),I.msgSuccess("\u64CD\u4F5C\u6210\u529F"),n()};return S(()=>{n()}),(H,t)=>{const v=K,l=h,s=w,y=D,C=b,A=x,E=V;return m(),d(c,null,[u(C,{shadow:"never",class:"!border-none"},{default:o(()=>[R,a("div",M,[u(y,{"label-width":"120px",ref:f.value,model:e.value,rules:B},{default:o(()=>[u(l,{label:"\u5185\u5BB9\u5BA1\u6838"},{default:o(()=>[a("div",null,[u(v,{modelValue:e.value.status,"onUpdate:modelValue":t[0]||(t[0]=r=>e.value.status=r),"active-value":"1","inactive-value":"0"},null,8,["modelValue"]),j])]),_:1}),e.value.status?(m(),d(c,{key:0},[u(l,{label:"APPID",prop:"appId"},{default:o(()=>[a("div",null,[u(s,{modelValue:e.value.appId,"onUpdate:modelValue":t[1]||(t[1]=r=>e.value.appId=r),class:"w-[400px]",placeholder:"\u8BF7\u8F93\u5165APPID"},null,8,["modelValue"]),G])]),_:1}),u(l,{label:"APIKey",prop:"apiKey"},{default:o(()=>[u(s,{modelValue:e.value.apiKey,"onUpdate:modelValue":t[2]||(t[2]=r=>e.value.apiKey=r),class:"w-[400px]",placeholder:"\u8BF7\u8F93\u5165APIKey"},null,8,["modelValue"])]),_:1}),u(l,{label:"Secret Key",prop:"secretKey"},{default:o(()=>[u(s,{modelValue:e.value.secretKey,"onUpdate:modelValue":t[3]||(t[3]=r=>e.value.secretKey=r),class:"w-[400px]",placeholder:"\u8BF7\u8F93\u5165Secret Key"},null,8,["modelValue"])]),_:1})],64)):U("",!0)]),_:1},8,["model","rules"])])]),_:1}),u(E,null,{default:o(()=>[u(A,{type:"primary",onClick:g},{default:o(()=>[_("\u4FDD\u5B58")]),_:1})]),_:1})],64)}}});export{Ke as default};
