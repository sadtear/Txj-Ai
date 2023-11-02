import{B as K,C as A,D as O,F as j,w as q,G as z,H as G,b as H,I as J,t as Q,J as W,P as X}from"./element-plus.28f30ed2.js";import{_ as Y}from"./index.vue_vue_type_script_setup_true_lang.f7bc22c4.js";import{d as Z,s as ee,_ as ae,r as h,ar as te,o as n,c as B,V as e,M as t,u as l,ab as le,U as D,aa as oe,L as m,S as g,O as p,a as ne,k as ie,R as se,n as ue}from"./@vue.cb90fff3.js";import{u as me}from"./usePaging.5f3fbca9.js";import{_ as re,d as pe,c as de,s as ce}from"./edit.vue_vue_type_script_setup_true_lang.500fa05d.js";import{s as _e}from"./category.c6b58ff6.js";import{f as fe}from"./index.93d1c242.js";import"./lodash-es.020a3960.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.54201ba6.js";import"./@element-plus.36ce49f2.js";import"./dayjs.38099f94.js";import"./axios.db0b6952.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.265ebbd3.js";import"./picker.388df1e2.js";import"./index.1d239a72.js";import"./vue-drag-resize.44c30f3e.js";import"./index.e7300070.js";import"./index.e78156e7.js";import"./index.444b5790.js";import"./index.vue_vue_type_script_setup_true_lang.656a0ae6.js";import"./vue3-video-play.d779aa5d.js";import"./vuedraggable.1628d174.js";import"./vue.e7e238ee.js";import"./sortablejs.2a305349.js";import"./AI.bce785c3.js";import"./vue-router.bee126d8.js";import"./pinia.66d683d1.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.d9c88729.js";import"./color.8789f62b.js";import"./clone.7ebdaffc.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e8a38282.js";import"./ms.a9ae1d6d.js";import"./nprogress.a77a2697.js";import"./vue-clipboard3.70be7e6e.js";import"./clipboard.551ce183.js";import"./echarts.f889f12e.js";import"./zrender.ec6da783.js";import"./tslib.60310f1a.js";import"./highlight.js.9905ea4d.js";import"./@highlightjs.ae4f7a48.js";const ge={class:"flex justify-end mt-4"},_a=Z({__name:"manage",setup(Ee){const k=ee(),i=ae({name:"",categoryId:"",isEnable:""}),F=h(!1),v=h([]),C=async s=>{var o;F.value=!0,await ue(),(o=k.value)==null||o.open(s)},x=async s=>{await fe.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await pe({id:s}),E()},S=async()=>{const s=await _e();v.value=s},L=s=>{de({id:s})},{pager:d,getLists:E,resetPage:y,resetParams:I}=me({fetchFun:ce,params:i});return E(),S(),(s,o)=>{const U=K,b=A,c=O,w=j,_=q,$=z,V=G,R=H,u=J,P=Q,T=W,M=Y,f=te("perms"),N=X;return n(),B(D,null,[e(V,{shadow:"never",class:"!border-none mt-4"},{default:t(()=>[e($,{ref:"formRef",class:"mb-[-16px]",model:l(i),inline:!0},{default:t(()=>[e(b,{label:"\u6280\u80FD\u540D\u79F0"},{default:t(()=>[e(U,{class:"w-[280px]",modelValue:l(i).name,"onUpdate:modelValue":o[0]||(o[0]=a=>l(i).name=a),placeholder:"\u8BF7\u8F93\u5165\u6280\u80FD\u540D\u79F0",clearable:"",onKeyup:le(l(y),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(b,{label:"\u6240\u5C5E\u7C7B\u76EE"},{default:t(()=>[e(w,{class:"w-[280px]",modelValue:l(i).categoryId,"onUpdate:modelValue":o[1]||(o[1]=a=>l(i).categoryId=a)},{default:t(()=>[e(c,{label:"\u5168\u90E8",value:""}),(n(!0),B(D,null,oe(l(v),(a,r)=>(n(),m(c,{key:r,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(b,{label:"\u6280\u80FD\u72B6\u6001"},{default:t(()=>[e(w,{class:"w-[280px]",modelValue:l(i).isEnable,"onUpdate:modelValue":o[2]||(o[2]=a=>l(i).isEnable=a)},{default:t(()=>[e(c,{label:"\u5168\u90E8",value:""}),e(c,{label:"\u5F00\u542F",value:"1"}),e(c,{label:"\u5173\u95ED",value:"0"})]),_:1},8,["modelValue"])]),_:1}),e(b,null,{default:t(()=>[e(_,{type:"primary",onClick:l(y)},{default:t(()=>[g("\u67E5\u8BE2")]),_:1},8,["onClick"]),e(_,{onClick:l(I)},{default:t(()=>[g("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1}),e(V,{class:"!border-none mt-4",shadow:"never"},{default:t(()=>[p((n(),m(_,{type:"primary",class:"mb-4",onClick:o[3]||(o[3]=a=>C())},{default:t(()=>[g(" \u65B0\u589E\u6280\u80FD ")]),_:1})),[[f,["skill:manage:add"]]]),p((n(),m(T,{size:"large",data:l(d).lists},{default:t(()=>[e(u,{label:"\u56FE\u6807",prop:"sn","min-width":"100"},{default:t(({row:a})=>[e(R,{src:a.image,class:"w-[44px] h-[44px]"},null,8,["src"])]),_:1}),e(u,{label:"\u6280\u80FD\u540D\u79F0",prop:"name","min-width":"120"}),e(u,{label:"\u63CF\u8FF0",prop:"remarks","min-width":"180"}),e(u,{label:"\u6240\u5C5E\u7C7B\u76EE",prop:"category","min-width":"180"}),p((n(),m(u,{label:"\u72B6\u6001","min-width":"100"},{default:t(({row:a})=>[p(e(P,{modelValue:a.isEnable,"onUpdate:modelValue":r=>a.isEnable=r,"active-value":1,"inactive-value":0,onChange:r=>L(a.id)},null,8,["modelValue","onUpdate:modelValue","onChange"]),[[f,["skill:manage:change"]]])]),_:1})),[[f,["skill:manage:change"]]]),e(u,{label:"\u6392\u5E8F",prop:"sort","min-width":"100"}),e(u,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime","min-width":"180"}),e(u,{label:"\u64CD\u4F5C","min-width":"180"},{default:t(({row:a})=>[p((n(),m(_,{type:"primary",link:"",onClick:r=>C(a.id)},{default:t(()=>[g(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[f,["skill:manage:edit"]]]),p((n(),m(_,{type:"primary",link:"",onClick:r=>x(a.id)},{default:t(()=>[g(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[f,["skill:manage:del"]]])]),_:1})]),_:1},8,["data"])),[[N,l(d).loading]]),ne("div",ge,[e(M,{modelValue:l(d),"onUpdate:modelValue":o[4]||(o[4]=a=>ie(d)?d.value=a:null),onChange:l(E)},null,8,["modelValue","onChange"])])]),_:1}),l(F)?(n(),m(re,{key:0,ref_key:"editRef",ref:k,onSuccess:l(E),onClose:o[5]||(o[5]=a=>F.value=!1)},null,8,["onSuccess"])):se("",!0)],64)}}});export{_a as default};
