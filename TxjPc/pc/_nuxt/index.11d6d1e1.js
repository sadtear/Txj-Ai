import{v as V,r as w,x as N,y as B,o as s,c as o,b as l,w as d,a as t,F as y,i as g,h as i,z as I,E as $,n as A,t as p,q as D}from"./entry.35d4c246.js";import{E as S}from"./el-card.6e2af8d2.js";import{_ as q}from"./nuxt-link.03dc7053.js";import{E as z}from"./index.e24e47ce.js";import{_ as F}from"./layout.bd874b6a.js";/* empty css                     */import{u as H}from"./asyncData.fb96340f.js";import{g as K}from"./create.65762b44.js";import{w as O}from"./index.a94e08ff.js";import{_ as R}from"./_plugin-vue_export-helper.c27b6911.js";const T={class:"flex"},U={class:"creation-lists flex-1"},X=["onClick"],j={class:"w-60 mt-[16px]"},G={class:"model-lists flex flex-wrap mt-[10px]"},J={class:"flex items-center"},M=["src"],P={class:"text-lg font-medium line-clamp-1"},Q={key:0,class:"text-xs text-tx-secondary mt-[10px] line-clamp-2"},W=V({__name:"index",async setup(Y){let r,x;const _=w(0),n=w(""),{data:f,refresh:b}=([r,x]=N(()=>H(()=>K({keyword:n.value}),{transform(a){const c={id:0,name:"全部",modelsList:a.reduce((u,m)=>u.concat(m.modelsList),[])};return a.unshift(c),a},default(){return[]}},"$rHT6XqBOcI")),r=await r,x(),r),C=B(()=>f.value[_.value]||{});return O(n,a=>{b()},{debounce:500}),(a,c)=>{const u=$,m=S,k=q,E=z,L=F;return s(),o("div",null,[l(L,{name:"default"},{default:d(()=>[l(E,{class:"h-full bg-white rounded-[4px] p-[16px] creation-container"},{default:d(()=>{var h;return[t("div",T,[t("div",U,[(s(!0),o(y,null,g(i(f),(e,v)=>(s(),o("div",{key:e.id,class:A(["creation-item",{"creation-item--active":v===i(_)}]),onClick:Z=>_.value=v},p(e.name),11,X))),128))]),t("div",j,[l(u,{modelValue:i(n),"onUpdate:modelValue":c[0]||(c[0]=e=>I(n)?n.value=e:null),placeholder:"请输入关键词搜索"},null,8,["modelValue"])])]),t("div",null,[t("div",G,[(s(!0),o(y,null,g((h=i(C))==null?void 0:h.modelsList,e=>(s(),o("div",{key:e.id,class:"model-item p-[5px] sm:p-[10px] 2xl:w-1/6 xl:w-1/4 lg:w-1/3 w-1/3"},[l(k,{to:`/create/produce?id=${e.id}`,class:"h-full"},{default:d(()=>[l(m,{class:"!border-none h-full rounded-[12px]",shadow:"none",style:{"box-shadow":"0 3px 10px #ebeefd"},"body-style":"padding: 20px;"},{default:d(()=>[t("div",J,[t("img",{class:"w-[34px] h-[34px] mr-[10px]",src:e.image,alt:""},null,8,M),t("div",P,p(e.name),1)]),e.tips?(s(),o("div",Q,p(e.tips),1)):D("",!0)]),_:2},1024)]),_:2},1032,["to"])]))),128))])])]}),_:1})]),_:1})])}}});const ie=R(W,[["__scopeId","data-v-df3187d9"]]);export{ie as default};
