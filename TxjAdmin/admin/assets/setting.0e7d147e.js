import{_ as v}from"./index.7507a854.js";import{C as D,B as A,G as b,H as U,w as y}from"./element-plus.28f30ed2.js";import{_ as k}from"./picker.388df1e2.js";import{b as h,v as I,f as P}from"./index.93d1c242.js";import{d as _,r as S,_ as f,o as x,c as M,V as u,M as a,u as e,a as p,S as N}from"./@vue.cb90fff3.js";import"./vue-drag-resize.44c30f3e.js";import"./lodash-es.020a3960.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.54201ba6.js";import"./@element-plus.36ce49f2.js";import"./dayjs.38099f94.js";import"./axios.db0b6952.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.1d239a72.js";import"./index.e7300070.js";import"./index.vue_vue_type_script_setup_true_lang.f7bc22c4.js";import"./index.e78156e7.js";import"./index.444b5790.js";import"./index.vue_vue_type_script_setup_true_lang.656a0ae6.js";import"./usePaging.5f3fbca9.js";import"./lodash.265ebbd3.js";import"./vue3-video-play.d779aa5d.js";import"./vuedraggable.1628d174.js";import"./vue.e7e238ee.js";import"./sortablejs.2a305349.js";import"./vue-router.bee126d8.js";import"./pinia.66d683d1.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.d9c88729.js";import"./color.8789f62b.js";import"./clone.7ebdaffc.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e8a38282.js";import"./ms.a9ae1d6d.js";import"./nprogress.a77a2697.js";import"./vue-clipboard3.70be7e6e.js";import"./clipboard.551ce183.js";import"./echarts.f889f12e.js";import"./zrender.ec6da783.js";import"./tslib.60310f1a.js";import"./highlight.js.9905ea4d.js";import"./@highlightjs.ae4f7a48.js";const q={class:"user-setting"},R={class:"w-80"},G={class:"w-80"},H={class:"w-80"},T={class:"w-80"},j={class:"w-80"},z=_({name:"userSetting"}),Ho=_({...z,setup(J){const n=S(),d=h(),r=f({avatar:"",username:"",nickname:"",currPassword:"",password:"",passwordConfirm:""}),F=f({avatar:[{required:!0,message:"\u5934\u50CF\u4E0D\u80FD\u4E3A\u7A7A",trigger:["change"]}],nickname:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}],currPassword:[{validator:(l,o,t)=>{r.password&&(o||t(new Error("\u8BF7\u8F93\u5165\u5F53\u524D\u5BC6\u7801"))),t()},trigger:"blur"}],password:[{validator:(l,o,t)=>{r.currPassword&&(o||t(new Error("\u8BF7\u8F93\u5165\u65B0\u7684\u5BC6\u7801"))),t()},trigger:"blur"}],passwordConfirm:[{validator:(l,o,t)=>{r.password&&(o||t(new Error("\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801")),o!==r.password&&t(new Error("\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4!"))),t()},trigger:"blur"}]}),c=async()=>{const l=d.userInfo;for(const o in r)r[o]=l[o]},w=async()=>{await I(r),P.msgSuccess("\u4FDD\u5B58\u6210\u529F"),d.getUserInfo()},B=async()=>{var l;await((l=n.value)==null?void 0:l.validate()),w()};return c(),(l,o)=>{const t=k,m=D,i=A,E=b,C=U,V=y,g=v;return x(),M("div",q,[u(C,{class:"!border-none",shadow:"never"},{default:a(()=>[u(E,{ref_key:"formRef",ref:n,class:"ls-form",model:e(r),rules:e(F),"label-width":"100px"},{default:a(()=>[u(m,{label:"\u5934\u50CF\uFF1A",prop:"avatar"},{default:a(()=>[u(t,{modelValue:e(r).avatar,"onUpdate:modelValue":o[0]||(o[0]=s=>e(r).avatar=s),limit:1},null,8,["modelValue"])]),_:1}),u(m,{label:"\u8D26\u53F7\uFF1A",prop:"username"},{default:a(()=>[p("div",R,[u(i,{modelValue:e(r).username,"onUpdate:modelValue":o[1]||(o[1]=s=>e(r).username=s),disabled:""},null,8,["modelValue"])])]),_:1}),u(m,{label:"\u540D\u79F0\uFF1A",prop:"nickname"},{default:a(()=>[p("div",G,[u(i,{modelValue:e(r).nickname,"onUpdate:modelValue":o[2]||(o[2]=s=>e(r).nickname=s),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])])]),_:1}),u(m,{label:"\u5F53\u524D\u5BC6\u7801\uFF1A",prop:"currPassword"},{default:a(()=>[p("div",H,[u(i,{modelValue:e(r).currPassword,"onUpdate:modelValue":o[3]||(o[3]=s=>e(r).currPassword=s),modelModifiers:{trim:!0},placeholder:"\u4FEE\u6539\u5BC6\u7801\u65F6\u5FC5\u586B, \u4E0D\u4FEE\u6539\u5BC6\u7801\u65F6\u7559\u7A7A",type:"password","show-password":""},null,8,["modelValue"])])]),_:1}),u(m,{label:"\u65B0\u7684\u5BC6\u7801\uFF1A",prop:"password"},{default:a(()=>[p("div",T,[u(i,{modelValue:e(r).password,"onUpdate:modelValue":o[4]||(o[4]=s=>e(r).password=s),modelModifiers:{trim:!0},placeholder:"\u4FEE\u6539\u5BC6\u7801\u65F6\u5FC5\u586B, \u4E0D\u4FEE\u6539\u5BC6\u7801\u65F6\u7559\u7A7A",type:"password","show-password":""},null,8,["modelValue"])])]),_:1}),u(m,{label:"\u786E\u5B9A\u5BC6\u7801\uFF1A",prop:"passwordConfirm"},{default:a(()=>[p("div",j,[u(i,{modelValue:e(r).passwordConfirm,"onUpdate:modelValue":o[5]||(o[5]=s=>e(r).passwordConfirm=s),modelModifiers:{trim:!0},placeholder:"\u4FEE\u6539\u5BC6\u7801\u65F6\u5FC5\u586B, \u4E0D\u4FEE\u6539\u5BC6\u7801\u65F6\u7559\u7A7A",type:"password","show-password":""},null,8,["modelValue"])])]),_:1})]),_:1},8,["model","rules"])]),_:1}),u(g,null,{default:a(()=>[u(V,{type:"primary",onClick:B},{default:a(()=>[N("\u4FDD\u5B58")]),_:1})]),_:1})])}}});export{Ho as default};
