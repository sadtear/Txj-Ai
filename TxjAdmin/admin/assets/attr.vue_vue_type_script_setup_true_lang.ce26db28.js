import{x as S,y as I,C as L,B as M,t as R,w as j,G}from"./element-plus.28f30ed2.js";import{_ as O}from"./index.vue_vue_type_script_setup_true_lang.eca3ca3f.js";import{_ as q}from"./index.e78156e7.js";import{_ as H}from"./picker.5acdd411.js";import{_ as J}from"./picker.388df1e2.js";import{f,_ as K}from"./index.93d1c242.js";import{D as Q}from"./vuedraggable.1628d174.js";import{d as W,e as x,o as h,c as X,V as e,M as l,a as d,u as n,P as Y,L as Z,S as E,R as ee,U as le}from"./@vue.cb90fff3.js";const oe=d("div",{class:"title flex items-center before:w-[3px] before:h-[14px] before:block before:bg-primary before:mr-2"},[E(" \u5E95\u90E8\u5BFC\u822A\u8BBE\u7F6E "),d("span",{class:"form-tips ml-[10px] !mt-0"}," \u81F3\u5C11\u6DFB\u52A02\u4E2A\u5BFC\u822A\uFF0C\u6700\u591A\u6DFB\u52A05\u4E2A\u5BFC\u822A ")],-1),ae={class:"mb-[18px] max-w-[400px]"},te={class:"bg-fill-light w-full p-4 mt-4"},ue={class:"upload-btn w-[60px] h-[60px]"},se=d("span",{class:"text-xs leading-5"}," \u672A\u9009\u4E2D ",-1),ne={class:"upload-btn w-[60px] h-[60px]"},de=d("span",{class:"text-xs leading-5"}," \u9009\u4E2D ",-1),me={class:"flex-1 flex items-center"},ce={class:"drag-move cursor-move ml-auto"},b=5,_=2,xe=W({__name:"attr",props:{modelValue:{type:Object,default:()=>({list:[],style:{}})}},emits:["update:modelValue"],setup(F,{emit:C}){const v=F,o=x({get(){return v.modelValue},set(a){C("update:modelValue",a)}}),w=x(()=>{var a;return((a=o.value.list)==null?void 0:a.filter(t=>t.is_show=="1"))||[]}),A=()=>{var a;((a=o.value.list)==null?void 0:a.length)<b?o.value.list.push({name:"",selected:"",unselected:"",is_show:1,link:{}}):f.msgError(`\u6700\u591A\u6DFB\u52A0${b}\u4E2A`)},B=a=>{var t;if(((t=o.value.list)==null?void 0:t.length)<=_)return f.msgError(`\u6700\u5C11\u4FDD\u7559${_}\u4E2A`);o.value.list.splice(a,1)},k=a=>a.relatedContext.index!=0,y=a=>{if(w.value.length<_)return a.is_show="1",f.msgError(`\u6700\u5C11\u663E\u793A${_}\u4E2A`)};return(a,t)=>{const i=K,V=J,m=L,D=M,U=H,$=R,z=q,N=j,g=S,p=O,P=I,T=G;return h(),X(le,null,[oe,e(T,{class:"mt-4","label-width":"70px"},{default:l(()=>[e(P,{"model-value":"content"},{default:l(()=>[e(g,{label:"\u5BFC\u822A\u56FE\u7247",name:"content"},{default:l(()=>{var c;return[d("div",ae,[e(n(Q),{class:"draggable",modelValue:n(o).list,"onUpdate:modelValue":t[0]||(t[0]=u=>n(o).list=u),animation:"300",draggable:".draggable",handle:".drag-move",move:k},{item:l(({element:u,index:r})=>[e(z,{onClose:s=>B(r),class:Y(["max-w-[400px]",{draggable:r!=0}]),"show-close":r!==0},{default:l(()=>[d("div",te,[e(m,{label:"\u5BFC\u822A\u56FE\u6807"},{default:l(()=>[e(V,{modelValue:u.unselected,"onUpdate:modelValue":s=>u.unselected=s,"upload-class":"bg-body","exclude-domain":"",size:"60px"},{upload:l(()=>[d("div",ue,[e(i,{name:"el-icon-Plus",size:16}),se])]),_:2},1032,["modelValue","onUpdate:modelValue"]),e(V,{modelValue:u.selected,"onUpdate:modelValue":s=>u.selected=s,"exclude-domain":"","upload-class":"bg-body",size:"60px"},{upload:l(()=>[d("div",ne,[e(i,{name:"el-icon-Plus",size:16}),de])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(m,{label:"\u5BFC\u822A\u540D\u79F0"},{default:l(()=>[e(D,{modelValue:u.name,"onUpdate:modelValue":s=>u.name=s,placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(m,{label:"\u94FE\u63A5\u5730\u5740"},{default:l(()=>[e(U,{"is-tab":!0,disabled:r===0,modelValue:u.link,"onUpdate:modelValue":s=>u.link=s},null,8,["disabled","modelValue","onUpdate:modelValue"])]),_:2},1024),e(m,{label:"\u662F\u5426\u663E\u793A"},{default:l(()=>[d("div",me,[e($,{disabled:r==0,modelValue:u.is_show,"onUpdate:modelValue":s=>u.is_show=s,"active-value":"1","inactive-value":"0",onChange:s=>y(u)},null,8,["disabled","modelValue","onUpdate:modelValue","onChange"]),d("div",ce,[e(i,{name:"el-icon-Rank",size:"18"})])])]),_:2},1024)])]),_:2},1032,["onClose","show-close","class"])]),_:1},8,["modelValue"])]),((c=n(o).list)==null?void 0:c.length)<b?(h(),Z(m,{key:0,"label-width":"0"},{default:l(()=>[e(N,{type:"primary",onClick:A},{default:l(()=>[E(" \u6DFB\u52A0\u5BFC\u822A ")]),_:1})]),_:1})):ee("",!0)]}),_:1}),e(g,{label:"\u6837\u5F0F\u8BBE\u7F6E",name:"styles"},{default:l(()=>[e(m,{label:"\u9ED8\u8BA4\u989C\u8272"},{default:l(()=>[e(p,{class:"max-w-[400px]",modelValue:n(o).style.default_color,"onUpdate:modelValue":t[1]||(t[1]=c=>n(o).style.default_color=c),"default-color":"#6f6e73"},null,8,["modelValue"])]),_:1}),e(m,{label:"\u9009\u4E2D\u989C\u8272"},{default:l(()=>[e(p,{class:"max-w-[400px]",modelValue:n(o).style.selected_color,"onUpdate:modelValue":t[2]||(t[2]=c=>n(o).style.selected_color=c),"default-color":"#fff"},null,8,["modelValue"])]),_:1}),e(m,{label:"\u80CC\u666F\u8272"},{default:l(()=>[e(p,{class:"max-w-[400px]",modelValue:n(o).style.tabbar_backgroundColor,"onUpdate:modelValue":t[3]||(t[3]=c=>n(o).style.tabbar_backgroundColor=c),"default-color":"#1a191e"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});export{xe as _};
