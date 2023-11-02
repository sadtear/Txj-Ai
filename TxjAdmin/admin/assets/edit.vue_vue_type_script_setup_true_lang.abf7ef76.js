import{Y as A,B as I,C as R,t as U,G as q}from"./element-plus.28f30ed2.js";import{r as i}from"./index.93d1c242.js";import{c as P}from"./draw_category.1aa49f7b.js";import{p as L}from"./index.1d239a72.js";import{d as S,s as C,r as f,_ as N,o as E,c as v,V as o,M as n,u as t,L as j,a as d,U as z}from"./@vue.cb90fff3.js";function te(a){return i.get({url:"/ai/draw/prompt/list",params:a})}function G(a){return i.post({url:"/ai/draw/prompt/add",params:a})}function M(a){return i.post({url:"/ai/draw/prompt/edit",params:a})}function oe(a){return i.post({url:"/ai/draw/prompt/del",params:a})}function le(a){return i.post({url:"/ai/draw/prompt/change",params:a})}const O={class:"edit-popup"},T={class:"w-full"},Y=d("div",{class:"form-tips"},"\u6DFB\u52A0\u591A\u4E2A\u5173\u952E\u8BCD\uFF0C\u4E2D\u82F1\u6587\u4EE5&\u9694\u5F00\uFF0C\u6309\u56DE\u8F66\u6362\u884C",-1),H={class:"w-full"},J={class:"w-full"},K={class:"w-full"},Q=d("div",{class:"form-tips"},"\u9ED8\u8BA4\u4E3A0\uFF0C\u6570\u636E\u8D8A\u5927\u8D8A\u6392\u524D\u9762",-1),ae=S({__name:"edit",emits:["success","close"],setup(a,{expose:g,emit:F}){const _=C(),m=C(),c=f(""),B=f([]),D=N({multiple:!1,checkStrictly:!0,label:"name",value:"id",children:"childrens",emitPath:!1}),e=f({id:"",categoryId:"",content:"",prompt:"",promptEn:"",sort:0,status:"1"}),w={content:[{required:!0,message:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD",trigger:["blur"]}],prompt:[{required:!0,message:"\u8BF7\u8F93\u5165\u4E2D\u6587\u5173\u952E\u8BCD",trigger:["blur"]}],promptEn:[{required:!0,message:"\u8BF7\u8F93\u5165\u82F1\u6587\u5173\u952E\u8BCD",trigger:["blur"]}],categoryId:[{required:!0,message:"\u8BF7\u9009\u62E9\u6240\u5C5E\u7C7B\u76EE",trigger:["blur"]}]},V=async()=>{const p=await P({level:1});B.value=p},y=async()=>{var p,u;try{await((p=_.value)==null?void 0:p.validate()),e.value.id==""?await G({...e.value,prompt:e.value.prompt.split(`
`)}):e.value.id!=""&&await M(e.value),(u=m.value)==null||u.close(),F("success")}catch(r){return r}},b=()=>{F("close")};return g({open:(p,u)=>{var r;V(),p=="add"?(e.value={id:"",categoryId:"",prompt:"",promptEn:"",sort:0,status:1},c.value="\u65B0\u589E\u63CF\u8FF0\u8BCD"):p=="edit"&&(Object.keys(e.value).map(s=>{e.value[s]=u[s]}),console.log(e.value,u),c.value="\u7F16\u8F91\u63CF\u8FF0\u8BCD"),(r=m.value)==null||r.open()}}),(p,u)=>{const r=I,s=R,h=A,x=U,k=q;return E(),v("div",O,[o(L,{ref_key:"popupRef",ref:m,title:t(c),async:!0,width:"550px",onConfirm:y,onClose:b},{default:n(()=>[o(k,{ref_key:"formRef",ref:_,rules:w,model:t(e),"label-width":"100px"},{default:n(()=>[t(e).id?(E(),v(z,{key:1},[o(s,{label:"\u82F1\u6587\u5173\u952E\u8BCD",prop:"promptEn"},{default:n(()=>[d("div",H,[o(r,{modelValue:t(e).promptEn,"onUpdate:modelValue":u[1]||(u[1]=l=>t(e).promptEn=l),placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD"},null,8,["modelValue"])])]),_:1}),o(s,{label:"\u4E2D\u6587\u5173\u952E\u8BCD",prop:"prompt"},{default:n(()=>[d("div",J,[o(r,{modelValue:t(e).prompt,"onUpdate:modelValue":u[2]||(u[2]=l=>t(e).prompt=l),placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD"},null,8,["modelValue"])])]),_:1})],64)):(E(),j(s,{key:0,label:"\u5173\u952E\u8BCD",prop:"content"},{default:n(()=>[d("div",T,[o(r,{modelValue:t(e).content,"onUpdate:modelValue":u[0]||(u[0]=l=>t(e).content=l),type:"textarea",autosize:{minRows:8,maxRows:20},placeholder:`\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\uFF0C\u5982\uFF1ASurrealism&\u8D85\u73B0\u5B9E\u4E3B\u4E49\r
Baroque&\u5DF4\u6D1B\u514B\r
modern&\u73B0\u4EE3`},null,8,["modelValue"]),Y])]),_:1})),o(s,{label:"\u6240\u5C5E\u7C7B\u76EE",prop:"categoryId"},{default:n(()=>[o(h,{class:"w-full",modelValue:t(e).categoryId,"onUpdate:modelValue":u[3]||(u[3]=l=>t(e).categoryId=l),options:t(B),props:t(D),clearable:!0,filterable:!0},null,8,["modelValue","options","props"])]),_:1}),o(s,{label:"\u6392\u5E8F",prop:"sort"},{default:n(()=>[d("div",K,[o(r,{type:"text",modelValue:t(e).sort,"onUpdate:modelValue":u[4]||(u[4]=l=>t(e).sort=l),min:0,max:9999},null,8,["modelValue"]),Q])]),_:1}),o(s,{label:"\u72B6\u6001",prop:"sort"},{default:n(()=>[o(x,{modelValue:t(e).status,"onUpdate:modelValue":u[5]||(u[5]=l=>t(e).status=l),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{ae as _,oe as d,le as e,te as g};
