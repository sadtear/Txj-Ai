import{W as D,X as U,C as v,B as w,w as N,G as R}from"./element-plus.28f30ed2.js";import{_ as $}from"./index.e78156e7.js";import{_ as j}from"./picker.5acdd411.js";import{_ as G}from"./picker.388df1e2.js";import{f as b}from"./index.93d1c242.js";import{D as I}from"./vuedraggable.1628d174.js";import{d as O,o as n,c as S,V as t,M as l,L as s,S as i,R as r,a as p,u as L}from"./@vue.cb90fff3.js";const M={class:"flex-1"},T=p("div",{class:"form-tips"},"\u6700\u591A\u6DFB\u52A05\u5F20\uFF0C\u5EFA\u8BAE\u56FE\u7247\u5C3A\u5BF8\uFF1A750px*340px",-1),W={class:"bg-fill-light flex items-center w-full p-4 mt-4 cursor-move"},X={class:"ml-3 flex-1"},_=5,Y=O({__name:"attr",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})},type:{type:String,default:"mobile"}},setup(o){const c=o,g=()=>{var d;((d=c.content.data)==null?void 0:d.length)<_?c.content.data.push({image:"",name:"",link:{}}):b.msgError(`\u6700\u591A\u6DFB\u52A0${_}\u5F20\u56FE\u7247`)},k=d=>{var u;if(((u=c.content.data)==null?void 0:u.length)<=1)return b.msgError("\u6700\u5C11\u4FDD\u7559\u4E00\u5F20\u56FE\u7247");c.content.data.splice(d,1)};return(d,u)=>{const f=D,y=U,m=v,B=G,F=w,h=j,x=$,A=N,C=R;return n(),S("div",null,[t(C,{"label-width":"70px"},{default:l(()=>{var V;return[o.type=="mobile"?(n(),s(m,{key:0,label:"\u662F\u5426\u542F\u7528"},{default:l(()=>[t(y,{modelValue:o.content.enabled,"onUpdate:modelValue":u[0]||(u[0]=e=>o.content.enabled=e)},{default:l(()=>[t(f,{label:1},{default:l(()=>[i("\u5F00\u542F")]),_:1}),t(f,{label:0},{default:l(()=>[i("\u505C\u7528")]),_:1})]),_:1},8,["modelValue"])]),_:1})):r("",!0),t(m,{label:"\u56FE\u7247\u8BBE\u7F6E"},{default:l(()=>[p("div",M,[T,t(L(I),{class:"draggable",modelValue:o.content.data,"onUpdate:modelValue":u[1]||(u[1]=e=>o.content.data=e),animation:"300"},{item:l(({element:e,index:E})=>[(n(),s(x,{key:E,onClose:a=>k(E),class:"max-w-[400px]"},{default:l(()=>[p("div",W,[t(B,{modelValue:e.image,"onUpdate:modelValue":a=>e.image=a,"upload-class":"bg-body","exclude-domain":""},null,8,["modelValue","onUpdate:modelValue"]),p("div",X,[t(m,{label:"\u56FE\u7247\u540D\u79F0"},{default:l(()=>[t(F,{modelValue:e.name,"onUpdate:modelValue":a=>e.name=a,placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(m,{class:"mt-[18px]",label:"\u56FE\u7247\u94FE\u63A5"},{default:l(()=>[o.type=="mobile"?(n(),s(h,{key:0,modelValue:e.link,"onUpdate:modelValue":a=>e.link=a},null,8,["modelValue","onUpdate:modelValue"])):r("",!0),o.type=="pc"?(n(),s(F,{key:1,placeholder:"\u8BF7\u8F93\u5165\u94FE\u63A5",modelValue:e.link.path,"onUpdate:modelValue":a=>e.link.path=a},null,8,["modelValue","onUpdate:modelValue"])):r("",!0)]),_:2},1024)])])]),_:2},1032,["onClose"]))]),_:1},8,["modelValue"])])]),_:1}),((V=o.content.data)==null?void 0:V.length)<_?(n(),s(m,{key:1},{default:l(()=>[t(A,{type:"primary",onClick:g},{default:l(()=>[i("\u6DFB\u52A0\u56FE\u7247")]),_:1})]),_:1})):r("",!0)]}),_:1})])}}});export{Y as _};