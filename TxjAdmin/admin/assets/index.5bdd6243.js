import{U as w,I as y,w as C,J as B,H as x,P as D}from"./element-plus.28f30ed2.js";import{e as F}from"./message.2f608d2e.js";import{_ as L}from"./edit.vue_vue_type_script_setup_true_lang.bda3e958.js";import{d as f,s as T,_ as R,ar as S,o,c as V,O as d,u,L as a,M as t,V as i,S as m}from"./@vue.cb90fff3.js";import"./lodash-es.020a3960.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.54201ba6.js";import"./@element-plus.36ce49f2.js";import"./dayjs.38099f94.js";import"./axios.db0b6952.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.93d1c242.js";import"./lodash.265ebbd3.js";import"./vue-router.bee126d8.js";import"./pinia.66d683d1.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.d9c88729.js";import"./color.8789f62b.js";import"./clone.7ebdaffc.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e8a38282.js";import"./ms.a9ae1d6d.js";import"./vue-drag-resize.44c30f3e.js";import"./nprogress.a77a2697.js";import"./vue-clipboard3.70be7e6e.js";import"./clipboard.551ce183.js";import"./echarts.f889f12e.js";import"./zrender.ec6da783.js";import"./tslib.60310f1a.js";import"./highlight.js.9905ea4d.js";import"./@highlightjs.ae4f7a48.js";import"./index.1d239a72.js";const N=f({name:"shortLetter"}),kt=f({...N,setup($){const p=T(),e=R({loading:!1,lists:[]}),c=async()=>{try{e.loading=!0,e.lists=await F(),e.loading=!1}catch{e.loading=!1}},g=r=>{var s;(s=p.value)==null||s.open(r)};return c(),(r,s)=>{const n=y,_=w,h=C,E=B,v=x,b=S("perms"),k=D;return o(),V("div",null,[d((o(),a(v,{class:"!border-none",shadow:"never"},{default:t(()=>[i(E,{size:"large",data:u(e).lists},{default:t(()=>[i(n,{label:"\u77ED\u4FE1\u6E20\u9053",prop:"name","min-width":"120"}),i(n,{label:"\u72B6\u6001","min-width":"120"},{default:t(({row:l})=>[l.status==1?(o(),a(_,{key:0},{default:t(()=>[m("\u5F00\u542F")]),_:1})):(o(),a(_,{key:1,type:"danger"},{default:t(()=>[m("\u5173\u95ED")]),_:1}))]),_:1}),i(n,{label:"\u64CD\u4F5C","min-width":"120",fixed:"right"},{default:t(({row:l})=>[d((o(),a(h,{type:"primary",link:"",onClick:z=>g(l.alias)},{default:t(()=>[m(" \u8BBE\u7F6E ")]),_:2},1032,["onClick"])),[[b,["setting:storage:edit"]]])]),_:1})]),_:1},8,["data"])]),_:1})),[[k,u(e).loading]]),i(L,{ref_key:"editRef",ref:p,onSuccess:c},null,512)])}}});export{kt as default};
