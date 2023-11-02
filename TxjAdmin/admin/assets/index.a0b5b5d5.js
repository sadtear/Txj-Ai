import{D as T,F as U,C as I,w as O,G as j,H as q,I as z,t as G,J as H,P as J}from"./element-plus.28f30ed2.js";import{_ as M}from"./index.vue_vue_type_script_setup_true_lang.f7bc22c4.js";import{f as g,_ as K}from"./index.93d1c242.js";import{u as Q}from"./usePaging.5f3fbca9.js";import{_ as W,d as X,e as Y,g as Z}from"./edit.vue_vue_type_script_setup_true_lang.d40149b7.js";import{d as h,r as ee,s as te,_ as oe,ar as ae,o as n,c as le,V as e,M as t,u as a,S as d,a as x,O as c,L as m,k as ne,R as se,n as ie}from"./@vue.cb90fff3.js";import"./lodash-es.020a3960.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.54201ba6.js";import"./@element-plus.36ce49f2.js";import"./dayjs.38099f94.js";import"./axios.db0b6952.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.265ebbd3.js";import"./vue-router.bee126d8.js";import"./pinia.66d683d1.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.d9c88729.js";import"./color.8789f62b.js";import"./clone.7ebdaffc.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e8a38282.js";import"./ms.a9ae1d6d.js";import"./vue-drag-resize.44c30f3e.js";import"./nprogress.a77a2697.js";import"./vue-clipboard3.70be7e6e.js";import"./clipboard.551ce183.js";import"./echarts.f889f12e.js";import"./zrender.ec6da783.js";import"./tslib.60310f1a.js";import"./highlight.js.9905ea4d.js";import"./@highlightjs.ae4f7a48.js";import"./index.1d239a72.js";const me={class:"flex justify-end mt-4"},re=h({name:"drawPromptExample"}),We=h({...re,setup(ue){const C=ee(!1),w=te(),_=oe({status:""}),F=async(s,l)=>{var i;C.value=!0,await ie(),(i=w.value)==null||i.open(s,l)},B=async s=>{await g.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await X({id:s}),g.msgSuccess("\u5220\u9664\u6210\u529F"),f()},V=async s=>{await Y({id:s}),g.msgSuccess("\u4FEE\u6539\u6210\u529F")},{pager:r,getLists:f,resetPage:y,resetParams:P}=Q({fetchFun:Z,params:_});return f(),(s,l)=>{const i=T,S=U,k=I,u=O,$=j,b=q,D=K,p=z,R=G,A=H,L=M,v=ae("perms"),N=J;return n(),le("div",null,[e(b,{class:"!border-none",shadow:"never"},{default:t(()=>[e($,{ref:"formRef",class:"mb-[-16px]",model:a(_),inline:!0},{default:t(()=>[e(k,{label:"\u793A\u4F8B\u72B6\u6001"},{default:t(()=>[e(S,{class:"w-[280px]",modelValue:a(_).status,"onUpdate:modelValue":l[0]||(l[0]=o=>a(_).status=o)},{default:t(()=>[e(i,{label:"\u5168\u90E8",value:""}),e(i,{label:"\u5F00\u542F",value:1}),e(i,{label:"\u5173\u95ED",value:0})]),_:1},8,["modelValue"])]),_:1}),e(k,null,{default:t(()=>[e(u,{type:"primary",onClick:a(y)},{default:t(()=>[d("\u67E5\u8BE2")]),_:1},8,["onClick"]),e(u,{onClick:a(P)},{default:t(()=>[d("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1}),e(b,{class:"!border-none mt-4",shadow:"never"},{default:t(()=>[x("div",null,[c((n(),m(u,{type:"primary",onClick:l[1]||(l[1]=o=>F("add"))},{icon:t(()=>[e(D,{name:"el-icon-Plus"})]),default:t(()=>[d(" \u65B0\u589E ")]),_:1})),[[v,["ai:draw:prompt:example:add"]]])]),c((n(),m(A,{size:"large",class:"mt-4",data:a(r).lists},{default:t(()=>[e(p,{label:"\u793A\u4F8B\u6807\u9898",prop:"prompt","min-width":"140"}),e(p,{label:"\u793A\u4F8B\u5185\u5BB9",prop:"promptEn","min-width":"140"}),c((n(),m(p,{label:"\u72B6\u6001","min-width":"100"},{default:t(({row:o})=>[e(R,{modelValue:o.status,"onUpdate:modelValue":E=>o.status=E,"active-value":1,"inactive-value":0,onChange:E=>V(o.id)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1})),[[v,["ai:draw:prompt:example:change"]]]),e(p,{label:"\u6392\u5E8F",prop:"sort","min-width":"120"}),e(p,{label:"\u64CD\u4F5C",width:"150",fixed:"right"},{default:t(({row:o})=>[c((n(),m(u,{type:"primary",link:!0,onClick:E=>F("edit",o.id)},{default:t(()=>[d(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[v,["ai:draw:prompt:example:edit"]]]),c((n(),m(u,{type:"danger",link:!0,onClick:E=>B(o.id)},{default:t(()=>[d(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[v,["ai:draw:prompt:example:del"]]])]),_:1})]),_:1},8,["data"])),[[N,a(r).loading]]),x("div",me,[e(L,{modelValue:a(r),"onUpdate:modelValue":l[2]||(l[2]=o=>ne(r)?r.value=o:null),onChange:a(f)},null,8,["modelValue","onChange"])])]),_:1}),a(C)?(n(),m(W,{key:0,ref_key:"editRef",ref:w,onSuccess:a(f),onClose:l[3]||(l[3]=o=>C.value=!1)},null,8,["onSuccess"])):se("",!0)])}}});export{We as default};
