import{_ as V}from"./index.7507a854.js";import{H as b,w as F}from"./element-plus.28f30ed2.js";import S from"./menu.4d207349.js";import C from"./preview.c012d285.js";import{_ as I}from"./attr-setting.vue_vue_type_script_setup_true_lang.386c98e4.js";import{w as N}from"./index.8f982adc.js";import{s as P,f as k}from"./decoration.d6d4e66c.js";import{n as A,f as O}from"./index.93d1c242.js";import{d as x,_ as h,r as f,e as g,w as M,ar as R,o as D,c as U,V as p,M as u,a as H,u as m,k as v,O as J,L as W,S as L}from"./@vue.cb90fff3.js";import{_ as $}from"./vue-drag-resize.44c30f3e.js";import"./lodash-es.020a3960.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.54201ba6.js";import"./@element-plus.36ce49f2.js";import"./dayjs.38099f94.js";import"./axios.db0b6952.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./attr.vue_vue_type_script_setup_true_lang.c482f1d9.js";import"./index.e78156e7.js";import"./picker.5acdd411.js";import"./index.1d239a72.js";import"./picker.388df1e2.js";import"./index.e7300070.js";import"./index.vue_vue_type_script_setup_true_lang.f7bc22c4.js";import"./index.444b5790.js";import"./index.vue_vue_type_script_setup_true_lang.656a0ae6.js";import"./usePaging.5f3fbca9.js";import"./lodash.265ebbd3.js";import"./vue3-video-play.d779aa5d.js";import"./vuedraggable.1628d174.js";import"./vue.e7e238ee.js";import"./sortablejs.2a305349.js";import"./vue-router.bee126d8.js";import"./pinia.66d683d1.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.d9c88729.js";import"./color.8789f62b.js";import"./clone.7ebdaffc.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e8a38282.js";import"./ms.a9ae1d6d.js";import"./nprogress.a77a2697.js";import"./vue-clipboard3.70be7e6e.js";import"./clipboard.551ce183.js";import"./echarts.f889f12e.js";import"./zrender.ec6da783.js";import"./tslib.60310f1a.js";import"./highlight.js.9905ea4d.js";import"./@highlightjs.ae4f7a48.js";import"./content.vue_vue_type_script_setup_true_lang.b07a40fe.js";import"./decoration-img.8f4e9c6e.js";import"./attr.vue_vue_type_script_setup_true_lang.9c1bfe88.js";import"./content.209f2dd6.js";import"./attr.6e467184.js";import"./index.vue_vue_type_script_setup_true_lang.eca3ca3f.js";import"./content.69925c6e.js";import"./code.7d55339d.js";import"./attr.vue_vue_type_script_setup_true_lang.33680f51.js";import"./content.7797c972.js";import"./attr.vue_vue_type_script_setup_true_lang.088fcba9.js";import"./content.87aeae6a.js";import"./attr.vue_vue_type_script_setup_true_lang.32e1a264.js";import"./content.vue_vue_type_script_setup_true_lang.e9ad91fe.js";import"./attr.be3b72bc.js";import"./content.663bb3ef.js";import"./attr.vue_vue_type_script_setup_true_lang.8c14fd39.js";import"./content.fd4e3e52.js";import"./attr.vue_vue_type_script_setup_true_lang.af16b944.js";import"./add-nav.vue_vue_type_script_setup_true_lang.0b2109b7.js";import"./content.cb977e4b.js";import"./attr.vue_vue_type_script_setup_true_lang.a5a8761a.js";import"./content.vue_vue_type_script_setup_true_lang.4366cf70.js";import"./attr.vue_vue_type_script_setup_true_lang.a5260d8e.js";import"./content.eb1ba853.js";import"./attr.vue_vue_type_script_setup_true_lang.370384cf.js";import"./content.e3b6e957.js";import"./attr.vue_vue_type_script_setup_true_lang.9b2dc070.js";import"./content.vue_vue_type_script_setup_true_lang.c87a9023.js";import"./attr.vue_vue_type_script_setup_true_lang.e788f95e.js";import"./content.13150f15.js";const j={class:"decoration-pages min-w-[1100px]"},q={class:"flex h-full items-start"},z=x({name:"decorationPages"}),G=x({...z,setup(K){let l;(t=>{t.HOME="1",t.USER="2",t.POSTER="4",t.INVITE="5",t.SERVICE="6"})(l||(l={}));const r=t=>t.map(e=>{var s;return{id:A(),...((s=N[e])==null?void 0:s.options())||{}}}),a=h({[1]:{id:1,type:7,name:"\u9996\u9875\u88C5\u4FEE",pageData:r(["index-example","index-tips","index-input"])},[2]:{id:2,type:1,name:"\u4E2A\u4EBA\u4E2D\u5FC3",pageData:r(["user-info","open-vip","my-service","user-banner"])},[4]:{id:4,type:5,name:"\u9080\u8BF7\u6D77\u62A5",pageData:r(["invite-poster","invite-rule"])},[5]:{id:5,type:6,name:"\u5BF9\u8BDD\u6D77\u62A5",pageData:r(["dialogue-poster"])},[6]:{id:6,type:3,name:"\u5BA2\u670D\u8BBE\u7F6E",pageData:r(["customer-service"])}}),o=f("1"),i=f(-1),c=g(()=>{var t,e;return(e=(t=a[o.value])==null?void 0:t.pageData)!=null?e:[]}),w=g(()=>{var t,e;return(e=(t=a[o.value])==null?void 0:t.pageData[i.value])!=null?e:""}),d=async()=>{const t=await k({type:a[o.value].type});a[o.value].pageData=JSON.parse(t.pageData)},y=async()=>{await P({...a[o.value],pageData:JSON.stringify(a[o.value].pageData)}),d(),O.msgSuccess("\u4FDD\u5B58\u6210\u529F")};return M(o,()=>{i.value=c.value.findIndex(t=>!t.disabled),d()},{immediate:!0}),(t,e)=>{const _=b,s=F,B=V,E=R("perms");return D(),U("div",j,[p(_,{shadow:"never",class:"!border-none flex-1 flex","body-style":{flex:1}},{default:u(()=>[H("div",q,[p(S,{modelValue:m(o),"onUpdate:modelValue":e[0]||(e[0]=n=>v(o)?o.value=n:null),menus:m(a)},null,8,["modelValue","menus"]),p(C,{modelValue:m(i),"onUpdate:modelValue":e[1]||(e[1]=n=>v(i)?i.value=n:null),pageData:m(c)},null,8,["modelValue","pageData"]),p(I,{class:"flex-1",widget:m(w)},null,8,["widget"])])]),_:1}),J((D(),W(B,{class:"mt-4",fixed:!1},{default:u(()=>[p(s,{type:"primary",onClick:y},{default:u(()=>[L("\u4FDD\u5B58")]),_:1})]),_:1})),[[E,["decorate:pages:save"]]])])}}});const Se=$(G,[["__scopeId","data-v-cb4565f0"]]);export{Se as default};