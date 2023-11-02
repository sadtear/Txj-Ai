import{_ as w}from"./index.7507a854.js";import{T as x,N as k,a3 as W,C as O,t as T,w as q,B as S,H as U,G as N}from"./element-plus.28f30ed2.js";import{g as L,s as M}from"./user.abc6bcfb.js";import{f as R}from"./index.93d1c242.js";import{d as g,r as j,_ as E,ar as G,o as B,c as I,V as e,M as l,a as t,u as r,S as n,T as c,O as P,L as H}from"./@vue.cb90fff3.js";import"./vue-drag-resize.44c30f3e.js";import"./lodash-es.020a3960.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.54201ba6.js";import"./@element-plus.36ce49f2.js";import"./dayjs.38099f94.js";import"./axios.db0b6952.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.265ebbd3.js";import"./vue-router.bee126d8.js";import"./pinia.66d683d1.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.d9c88729.js";import"./color.8789f62b.js";import"./clone.7ebdaffc.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e8a38282.js";import"./ms.a9ae1d6d.js";import"./nprogress.a77a2697.js";import"./vue-clipboard3.70be7e6e.js";import"./clipboard.551ce183.js";import"./echarts.f889f12e.js";import"./zrender.ec6da783.js";import"./tslib.60310f1a.js";import"./highlight.js.9905ea4d.js";import"./@highlightjs.ae4f7a48.js";const z="/assets/follow_official.5d85732b.png",J={class:"login-register"},K=t("div",{class:"font-medium mb-7"},"\u901A\u7528\u8BBE\u7F6E",-1),Q=t("div",{class:"form-tips"},"\u7CFB\u7EDF\u901A\u7528\u767B\u5F55\u65B9\u5F0F\uFF0C\u81F3\u5C11\u9009\u62E9\u4E00\u9879",-1),X={class:"mt-1 ml-2"},Y=t("div",{class:"form-tips"},[n(" 1\u3001\u7528\u6237\u901A\u8FC7\u624B\u673A\u53F7\u7801/\u90AE\u7BB1\u6CE8\u518C\u5E10\u53F7\u65F6\uFF0C\u662F\u5426\u9700\u8981\u77ED\u4FE1\u9A8C\u8BC1\u7801\u9A8C\u8BC1\u586B\u5199\u7684\u624B\u673A\u53F7\u7801/\u90AE\u7BB1\uFF0C\u9ED8\u8BA4\u5173\u95ED"),t("br"),n(" 2\u3001\u8BF7\u5F00\u542F\u5BF9\u5E94\u77ED\u4FE1\u9A8C\u8BC1\u7801\u529F\u80FD ")],-1),Z={class:"mt-1 ml-2"},$=t("div",{class:"form-tips"},"\u767B\u5F55\uFF0C\u662F\u5426\u663E\u793A\u670D\u52A1\u534F\u8BAE\u548C\u9690\u79C1\u653F\u7B56",-1),uu={class:"mt-1 mx-2"},eu=t("img",{class:"w-[200px]",src:z,alt:""},null,-1),ou=t("div",{class:"form-tips"},[n(" \u9ED8\u8BA4\u5173\u95ED\uFF0C\u5F00\u542F\u65F6\u4F1A\u5728\u524D\u7AEF\u9996\u9875\u663E\u793A\uFF0C\u6CE8\u610F\uFF1A "),t("span",{class:"text-danger"}," \u5F00\u542F\u7684\u8BDD\u8BF7\u524D\u5F80\u6E20\u9053\u8BBE\u7F6E-\u516C\u4F17\u53F7\u914D\u7F6E-\u4E0A\u4F20\u516C\u4F17\u53F7\u4E8C\u7EF4\u7801 ")],-1),tu={class:"flex"},lu=g({name:"loginRegister"}),Iu=g({...lu,setup(ru){const p=j(),u=E({loginWay:[],forceBindMobile:0,openAgreement:0,openOtherAuth:0,smsVerify:1,followOfficial:0,involvedText:""}),v=E({loginWay:[{required:!0,validator:(s,o,a)=>{if(u.loginWay.join("").length===0)a(new Error("\u767B\u5F55\u65B9\u5F0F\u81F3\u5C11\u9009\u62E9\u4E00\u9879\uFF01"));else{if(u.loginWay!==""){if(!p.value)return;p.value.validateField("checkPass",()=>null)}a()}},trigger:"change"}],forceBindMobile:[{required:!0,trigger:"blur"}],openAgreement:[{required:!0,trigger:"blur"}],openOtherAuth:[{required:!0,trigger:"blur"}],followOfficial:[{required:!0,trigger:"blur"}],involvedText:[{required:!0,trigger:"blur"}]}),F=async()=>{try{const s=await L();for(const o in u)u[o]=s[o]}catch(s){console.log("\u83B7\u53D6=>",s)}},C=async()=>{var o;const s=u.loginWay.join(",");await((o=p.value)==null?void 0:o.validate());try{await M({...u,loginWay:s}),R.msgSuccess("\u64CD\u4F5C\u6210\u529F"),F()}catch(a){console.log("\u4FDD\u5B58=>",a)}};return F(),(s,o)=>{const a=k,_=W,m=O,d=T,f=q,A=x,D=S,b=U,y=N,h=w,V=G("perms");return B(),I("div",J,[e(y,{ref_key:"formRef",ref:p,rules:r(v),model:r(u),"label-width":"130px"},{default:l(()=>[e(b,{shadow:"never",class:"!border-none"},{default:l(()=>[K,e(m,{label:"\u767B\u5F55\u65B9\u5F0F",prop:"loginWay"},{default:l(()=>[t("div",null,[e(_,{modelValue:r(u).loginWay,"onUpdate:modelValue":o[0]||(o[0]=i=>r(u).loginWay=i)},{default:l(()=>[e(a,{label:1},{default:l(()=>[n("\u5FAE\u4FE1\u767B\u5F55")]),_:1}),e(a,{label:2},{default:l(()=>[n("\u624B\u673A\u53F7\u767B\u5F55")]),_:1}),e(a,{label:3},{default:l(()=>[n("\u90AE\u7BB1\u767B\u5F55")]),_:1})]),_:1},8,["modelValue"]),Q])]),_:1}),e(m,{label:"\u6CE8\u518C\u9700\u9A8C\u8BC1\u7801",prop:"smsVerify"},{default:l(()=>[t("div",null,[e(d,{modelValue:r(u).smsVerify,"onUpdate:modelValue":o[1]||(o[1]=i=>r(u).smsVerify=i),"active-value":1,"inactive-value":0},null,8,["modelValue"]),t("span",X,c(r(u).smsVerify?"\u5F00\u542F":"\u5173\u95ED"),1),Y])]),_:1}),e(m,{label:"\u653F\u7B56\u534F\u8BAE",prop:"openAgreement"},{default:l(()=>[t("div",null,[e(d,{modelValue:r(u).openAgreement,"onUpdate:modelValue":o[2]||(o[2]=i=>r(u).openAgreement=i),"active-value":1,"inactive-value":0},null,8,["modelValue"]),t("span",Z,c(r(u).openAgreement?"\u5F00\u542F":"\u5173\u95ED"),1),$])]),_:1}),e(m,{label:"\u5F15\u5BFC\u5173\u6CE8\u516C\u4F17\u53F7",prop:"followOfficial"},{default:l(()=>[t("div",null,[e(d,{modelValue:r(u).followOfficial,"onUpdate:modelValue":o[3]||(o[3]=i=>r(u).followOfficial=i),"active-value":1,"inactive-value":0},null,8,["modelValue"]),t("span",uu,c(r(u).followOfficial?"\u5F00\u542F":"\u5173\u95ED"),1),e(A,{placement:"top-start",width:"250",trigger:"hover"},{reference:l(()=>[e(f,{link:"",type:"primary"},{default:l(()=>[n("\u67E5\u770B\u793A\u4F8B")]),_:1})]),default:l(()=>[eu]),_:1}),ou])]),_:1}),e(m,{label:"\u5173\u6CE8\u6587\u6848",prop:"involvedText"},{default:l(()=>[t("div",null,[t("div",tu,[e(D,{placeholder:"\u8BF7\u8F93\u5165\u5173\u6CE8\u6587\u6848",class:"w-[400px]",modelValue:r(u).involvedText,"onUpdate:modelValue":o[4]||(o[4]=i=>r(u).involvedText=i)},null,8,["modelValue"])])])]),_:1})]),_:1})]),_:1},8,["rules","model"]),P((B(),H(h,null,{default:l(()=>[e(f,{type:"primary",onClick:C},{default:l(()=>[n("\u4FDD\u5B58")]),_:1})]),_:1})),[[V,["setting:login:save"]]])])}}});export{Iu as default};
