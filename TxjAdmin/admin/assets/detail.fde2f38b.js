import{$ as L,H as M,o as V,w as U,C as z,G as H}from"./element-plus.28f30ed2.js";import{_ as O}from"./index.vue_vue_type_script_setup_true_lang.656a0ae6.js";import{m as Q,f as x,_ as G}from"./index.93d1c242.js";import{u as J}from"./vue-router.bee126d8.js";import{g as K,u as W,a as X,b as Y,d as Z}from"./consumer.7cda2a3d.js";import{_ as k}from"./account-adjust.vue_vue_type_script_setup_true_lang.626f8067.js";import{d as $,_ as h,r as g,s as A,ar as ee,o as c,c as te,V as u,M as s,u as t,a as o,S as r,T as n,O as F,L as d,R as j,k as se}from"./@vue.cb90fff3.js";import"./lodash-es.020a3960.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.54201ba6.js";import"./@element-plus.36ce49f2.js";import"./dayjs.38099f94.js";import"./axios.db0b6952.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.265ebbd3.js";import"./pinia.66d683d1.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.d9c88729.js";import"./color.8789f62b.js";import"./clone.7ebdaffc.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e8a38282.js";import"./ms.a9ae1d6d.js";import"./vue-drag-resize.44c30f3e.js";import"./nprogress.a77a2697.js";import"./vue-clipboard3.70be7e6e.js";import"./clipboard.551ce183.js";import"./echarts.f889f12e.js";import"./zrender.ec6da783.js";import"./tslib.60310f1a.js";import"./highlight.js.9905ea4d.js";import"./@highlightjs.ae4f7a48.js";import"./index.1d239a72.js";const ae={class:"flex items-center py-5 mb-10 bg-page"},ue={class:"flex flex-col items-center justify-center basis-40"},oe=o("div",{class:"mb-2 text-tx-regular"},"\u7528\u6237\u5934\u50CF",-1),le={class:"flex flex-col items-center justify-center basis-40"},ie=o("div",{class:"text-tx-regular"},"\u4F59\u989D",-1),re={class:"flex items-center mt-2"},ne={class:"flex flex-col items-center justify-center basis-40"},me=o("div",{class:"text-tx-regular"},"\u7ED8\u753B\u4F59\u989D",-1),ce={class:"flex items-center mt-2"},de={class:"flex flex-col items-center justify-center basis-40"},fe=o("div",{class:"text-tx-regular"},"\u7D2F\u8BA1\u6D88\u8D39",-1),pe={class:"flex items-center mt-2"},_e={class:"flex flex-col items-center justify-center basis-40"},Fe=o("div",{class:"text-tx-regular"},"\u7D2F\u8BA1\u63D0\u95EE",-1),ve={class:"flex items-center mt-2"},De={class:"flex flex-col items-center justify-center basis-40"},be=o("div",{class:"text-tx-regular"},"\u7D2F\u8BA1\u7ED8\u753B",-1),xe={class:"flex items-center mt-2"},ye=$({name:"consumerDetail"}),rt=$({...ye,setup(we){const v=J(),a=h({avatar:"",balance:"",balanceDraw:"",channel:"",createTime:"",id:"",isMemberEnd:"",isBlacklist:0,lastLoginIp:"",lastLoginTime:"",memberPackageName:"",memberPackageId:"",memberPerpetual:"",memberExpire:"",memberMsg:"",mobile:"",nickname:"",realName:"",sex:"",sn:"",totalAmount:"",totalDraw:"",totalQuiz:"",username:""}),p=h({show:!1,value:""}),D=g(!1),N=A(),b=async()=>{const l=await K({id:v.query.id});Object.keys(a).forEach(e=>{a[e]=l[e]})},y=async(l,e)=>{Q(l)||(await W({id:v.query.id,field:e,value:l}),b())},I=l=>{p.show=!0,p.value=l},P=async l=>{await X({userId:v.query.id,...l}),x.msgSuccess("\u4FDD\u5B58\u6210\u529F\uFF01"),p.show=!1,b()},R=async l=>{await Y({userId:v.query.id,...l}),D.value=!1,x.msgSuccess("\u4FDD\u5B58\u6210\u529F\uFF01"),b()};b(),A(),g(!1);const B=async l=>{await x.confirm(`\u662F\u5426${l?"\u79FB\u51FA\u9ED1\u540D\u5355":"\u52A0\u5165\u9ED1\u540D\u5355"}`),await Z({userId:v.query.id,blackList:l}),x.msgSuccess("\u64CD\u4F5C\u6210\u529F"),await b()};return(l,e)=>{const S=L,C=M,T=V,f=U,m=z,w=G,E=O,q=H,_=ee("perms");return c(),te("div",null,[u(C,{class:"!border-none",shadow:"never"},{default:s(()=>[u(S,{content:"\u7528\u6237\u8BE6\u60C5",onBack:e[0]||(e[0]=i=>l.$router.back())})]),_:1}),u(C,{class:"mt-4 !border-none",header:"\u57FA\u672C\u8D44\u6599",shadow:"never"},{default:s(()=>[u(q,{ref_key:"formRef",ref:N,class:"ls-form",model:t(a),"label-width":"120px"},{default:s(()=>[o("div",ae,[o("div",ue,[oe,u(T,{src:t(a).avatar,size:58},null,8,["src"])]),o("div",le,[ie,o("div",re,[r(n(t(a).balance)+"\u6761 ",1),F((c(),d(f,{type:"primary",link:"",onClick:e[1]||(e[1]=i=>I(t(a).balance))},{default:s(()=>[r(" \u8C03\u6574 ")]),_:1})),[[_,["user:adjustMoney"]]])])]),o("div",ne,[me,o("div",ce,[r(n(t(a).balanceDraw||"0")+" ",1),F((c(),d(f,{type:"primary",link:"",onClick:e[2]||(e[2]=i=>D.value=!0)},{default:s(()=>[r(" \u8C03\u6574 ")]),_:1})),[[_,["user:adjustBalanceDraw"]]])])]),o("div",de,[fe,o("div",pe,n(t(a).totalAmount),1)]),o("div",_e,[Fe,o("div",ve,n(t(a).totalQuiz)+"\u6B21",1)]),o("div",De,[be,o("div",xe,n(t(a).totalDraw||"0")+"\u6B21",1)])]),u(m,{label:"\u7528\u6237ID\uFF1A"},{default:s(()=>[r(n(t(a).sn),1)]),_:1}),u(m,{label:"\u7528\u6237\u6635\u79F0\uFF1A"},{default:s(()=>[r(n(t(a).nickname),1)]),_:1}),u(m,{label:"\u771F\u5B9E\u59D3\u540D\uFF1A"},{default:s(()=>[r(n(t(a).realName||"-")+" ",1),F((c(),d(E,{class:"ml-[10px]",onConfirm:e[3]||(e[3]=i=>y(i,"realName")),limit:32},{default:s(()=>[u(f,{type:"primary",link:""},{default:s(()=>[u(w,{name:"el-icon-EditPen"})]),_:1})]),_:1})),[[_,["user:edit"]]])]),_:1}),u(m,{label:"\u6027\u522B\uFF1A"},{default:s(()=>[r(n(t(a).sex)+" ",1),F((c(),d(E,{class:"ml-[10px]",type:"select",options:[{label:"\u672A\u77E5",value:0},{label:"\u7537",value:1},{label:"\u5973",value:2}],onConfirm:e[4]||(e[4]=i=>y(i,"sex"))},{default:s(()=>[u(f,{type:"primary",link:""},{default:s(()=>[u(w,{name:"el-icon-EditPen"})]),_:1})]),_:1})),[[_,["user:edit"]]])]),_:1}),u(m,{label:"\u8054\u7CFB\u7535\u8BDD\uFF1A"},{default:s(()=>[r(n(t(a).mobile||"-")+" ",1),F((c(),d(E,{class:"ml-[10px]",type:"number",onConfirm:e[5]||(e[5]=i=>y(i,"mobile"))},{default:s(()=>[u(f,{type:"primary",link:""},{default:s(()=>[u(w,{name:"el-icon-EditPen"})]),_:1})]),_:1})),[[_,["user:edit"]]])]),_:1}),u(m,{label:"\u6CE8\u518C\u6765\u6E90\uFF1A"},{default:s(()=>[r(n(t(a).channel),1)]),_:1}),u(m,{label:"\u6CE8\u518C\u65F6\u95F4\uFF1A"},{default:s(()=>[r(n(t(a).createTime),1)]),_:1}),u(m,{label:"\u6700\u8FD1\u767B\u5F55\u65F6\u95F4\uFF1A"},{default:s(()=>[r(n(t(a).lastLoginTime),1)]),_:1}),F((c(),d(m,null,{default:s(()=>[t(a).isBlacklist==0?(c(),d(f,{key:0,onClick:e[6]||(e[6]=i=>B(0))},{default:s(()=>[r(" \u52A0\u5165\u9ED1\u540D\u5355 ")]),_:1})):j("",!0),t(a).isBlacklist==1?(c(),d(f,{key:1,onClick:e[7]||(e[7]=i=>B(1))},{default:s(()=>[r(" \u79FB\u9664\u9ED1\u540D\u5355 ")]),_:1})):j("",!0)]),_:1})),[[_,["user:adjustBlacklist"]]])]),_:1},8,["model"])]),_:1}),u(k,{show:t(p).show,"onUpdate:show":e[8]||(e[8]=i=>t(p).show=i),value:t(p).value,onConfirm:P},null,8,["show","value"]),u(k,{title:"\u7ED8\u753B\u4F59\u989D\u8C03\u6574",show:t(D),"onUpdate:show":e[9]||(e[9]=i=>se(D)?D.value=i:null),value:t(a).balanceDraw,onConfirm:R},null,8,["show","value"])])}}});export{rt as default};