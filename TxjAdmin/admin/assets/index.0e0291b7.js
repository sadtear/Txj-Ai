import{_ as h}from"./index.7507a854.js";import{t as y,C as A,B as k,H as x,G as S,w as q}from"./element-plus.28f30ed2.js";import{_ as N}from"./index.vue_vue_type_style_index_0_lang.3ff8d1ed.js";import{r as d,f as U}from"./index.93d1c242.js";import{d as f,r as I,_ as c,ar as R,o as _,c as T,V as e,M as n,a as s,u as r,T as G,O as H,L,S as M}from"./@vue.cb90fff3.js";import"./vue-drag-resize.44c30f3e.js";import"./lodash-es.020a3960.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.54201ba6.js";import"./@element-plus.36ce49f2.js";import"./dayjs.38099f94.js";import"./axios.db0b6952.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@wangeditor.24a34727.js";import"./picker.388df1e2.js";import"./index.1d239a72.js";import"./index.e7300070.js";import"./index.vue_vue_type_script_setup_true_lang.f7bc22c4.js";import"./index.e78156e7.js";import"./index.444b5790.js";import"./index.vue_vue_type_script_setup_true_lang.656a0ae6.js";import"./usePaging.5f3fbca9.js";import"./lodash.265ebbd3.js";import"./vue3-video-play.d779aa5d.js";import"./vuedraggable.1628d174.js";import"./vue.e7e238ee.js";import"./sortablejs.2a305349.js";import"./vue-router.bee126d8.js";import"./pinia.66d683d1.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.d9c88729.js";import"./color.8789f62b.js";import"./clone.7ebdaffc.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e8a38282.js";import"./ms.a9ae1d6d.js";import"./nprogress.a77a2697.js";import"./vue-clipboard3.70be7e6e.js";import"./clipboard.551ce183.js";import"./echarts.f889f12e.js";import"./zrender.ec6da783.js";import"./tslib.60310f1a.js";import"./highlight.js.9905ea4d.js";import"./@highlightjs.ae4f7a48.js";function O(){return d.get({url:"/setting/announcement/detail"})}function $(m){return d.post({url:"/setting/announcement/save",params:m})}const j={class:"notice-config"},z=s("div",{class:"font-medium mb-7"},"\u516C\u544A\u8BBE\u7F6E",-1),J={class:"mt-1 ml-2"},K=s("div",{class:"form-tips"},"\u7528\u6237\u6BCF\u5929\u9996\u6B21\u8FDB\u5165\u7AD9\u70B9\u4F1A\u89E6\u53D1\u5F39\u7A97",-1),P=f({name:"noticeConfig"}),zt=f({...P,setup(m){const l=I(),t=c({status:"1",title:"",content:""}),g=c({status:[{required:!0,trigger:"blur"}],title:[{required:!0,trigger:"blur"}]}),p=async()=>{try{const i=await O();for(const o in t)t[o]=i[o];console.log(t)}catch(i){console.log("\u83B7\u53D6=>",i)}},v=async()=>{var i;await((i=l.value)==null?void 0:i.validate());try{await $(t),U.msgSuccess("\u64CD\u4F5C\u6210\u529F"),await p()}catch(o){console.log("\u4FDD\u5B58=>",o)}};return p(),(i,o)=>{const B=y,a=A,F=k,C=N,D=x,w=S,E=q,V=h,b=R("perms");return _(),T("div",j,[e(w,{ref_key:"formRef",ref:l,rules:r(g),model:r(t),"label-width":"120px"},{default:n(()=>[e(D,{shadow:"never",class:"!border-none"},{default:n(()=>[z,e(a,{label:"\u516C\u544A\u5F39\u7A97",prop:"status"},{default:n(()=>[s("div",null,[e(B,{modelValue:r(t).status,"onUpdate:modelValue":o[0]||(o[0]=u=>r(t).status=u),"active-value":"1","inactive-value":"0"},null,8,["modelValue"]),s("span",J,G(r(t).status?"\u5F00\u542F":"\u5173\u95ED"),1),K])]),_:1}),e(a,{label:"\u516C\u544A\u6807\u9898",prop:"title"},{default:n(()=>[e(F,{modelValue:r(t).title,"onUpdate:modelValue":o[1]||(o[1]=u=>r(t).title=u),class:"w-[370px]",placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"},null,8,["modelValue"])]),_:1}),e(a,{label:"\u516C\u544A\u8BBE\u7F6E",prop:"content"},{default:n(()=>[e(C,{modelValue:r(t).content,"onUpdate:modelValue":o[2]||(o[2]=u=>r(t).content=u),height:667,width:375},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["rules","model"]),H((_(),L(V,null,{default:n(()=>[e(E,{type:"primary",onClick:v},{default:n(()=>[M("\u4FDD\u5B58")]),_:1})]),_:1})),[[b,["setting/announcement/save"]]])])}}});export{zt as default};