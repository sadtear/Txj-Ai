import{D as I,F as k,C as R,B as L,v as Q,t as U,G as N}from"./element-plus.28f30ed2.js";import{r,f as z}from"./index.93d1c242.js";import{g as G}from"./category.f8674778.js";import{p as M}from"./index.1d239a72.js";import{d as O,s as E,r as d,o as f,c as F,V as a,M as n,u as o,U as T,aa as j,L as H,a as v}from"./@vue.cb90fff3.js";function oe(u){return r.get({url:"/question/sample/list",params:u})}function le(u){return r.post({url:"/question/sample/del",params:u})}function ae(u){return r.post({url:"/question/sample/change",params:u})}function J(u){return r.post({url:"/question/sample/add",params:u})}function K(u){return r.post({url:"/question/sample/edit",params:u})}function P(u){return r.get({url:"/question/sample/detail",params:u})}const W={class:"edit-popup"},X=v("div",{class:"form-tips"},"\u9ED8\u8BA4\u4E3A0\uFF0C\u6570\u636E\u8D8A\u5927\u8D8A\u6392\u524D\u9762",-1),se=O({__name:"edit",emits:["success","close"],setup(u,{expose:y,emit:_}){const B=E(),p=E(),m=d(""),g=d([]),e=d({id:"",categoryId:"",content:"",sort:0,isEnable:1}),b={categoryId:[{required:!0,message:"\u8BF7\u9009\u62E9\u793A\u4F8B\u7C7B\u76EE",trigger:["blur"]}],content:[{required:!0,message:"\u8BF7\u8F93\u5165\u793A\u4F8B\u5185\u5BB9",trigger:["blur"]}]},w=async()=>{const s=await G();g.value=s},V=async()=>{var s,t;try{await((s=B.value)==null?void 0:s.validate()),e.value.id==""?await J(e.value):e.value.id!=""&&await K(e.value),(t=p.value)==null||t.close(),z.msgSuccess("\u4FDD\u5B58\u6210\u529F\uFF01"),_("success")}catch(c){return c}},A=()=>{_("close")};return y({open:async s=>{var t;w(),s?(m.value="\u7F16\u8F91\u95EE\u9898\u793A\u4F8B",e.value=await P({id:s})):m.value="\u65B0\u589E\u95EE\u9898\u793A\u4F8B",(t=p.value)==null||t.open()}}),(s,t)=>{const c=I,C=k,i=R,x=L,S=Q,h=U,q=N;return f(),F("div",W,[a(M,{ref_key:"popupRef",ref:p,title:o(m),async:!0,width:"550px",onConfirm:V,onClose:A},{default:n(()=>[a(q,{class:"ls-form",ref_key:"formRef",ref:B,rules:b,model:o(e),"label-width":"90px"},{default:n(()=>[a(i,{label:"\u793A\u4F8B\u7C7B\u76EE",prop:"categoryId"},{default:n(()=>[a(C,{class:"w-full",placeholder:"\u8BF7\u9009\u62E9",modelValue:o(e).categoryId,"onUpdate:modelValue":t[0]||(t[0]=l=>o(e).categoryId=l)},{default:n(()=>[(f(!0),F(T,null,j(o(g),(l,D)=>(f(),H(c,{key:D,value:l.id,label:l.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(i,{label:"\u793A\u4F8B\u5185\u5BB9",prop:"content"},{default:n(()=>[a(x,{modelValue:o(e).content,"onUpdate:modelValue":t[1]||(t[1]=l=>o(e).content=l),type:"textarea",autosize:{minRows:4,maxRows:6},placeholder:"\u8BF7\u8F93\u5165\u793A\u4F8B\u5185\u5BB9",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1}),a(i,{label:"\u6392\u5E8F",prop:"sort"},{default:n(()=>[v("div",null,[a(S,{modelValue:o(e).sort,"onUpdate:modelValue":t[2]||(t[2]=l=>o(e).sort=l),min:0,max:9999},null,8,["modelValue"]),X])]),_:1}),a(i,{label:"\u72B6\u6001",prop:"sort"},{default:n(()=>[a(h,{modelValue:o(e).isEnable,"onUpdate:modelValue":t[3]||(t[3]=l=>o(e).isEnable=l),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{se as _,le as d,ae as e,oe as g};