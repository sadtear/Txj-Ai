import{A as n,ai as p,v as d,I as c,o,c as t,n as r,h as s,O as l,d as i,t as y,q as u,a as m,ab as h,_ as f,R as v}from"./entry.35d4c246.js";const b=n({header:{type:String,default:""},bodyStyle:{type:p([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),C=d({name:"ElCard"}),S=d({...C,props:b,setup(_){const a=c("card");return(e,g)=>(o(),t("div",{class:r([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),t("div",{key:0,class:r(s(a).e("header"))},[l(e.$slots,"header",{},()=>[i(y(e.header),1)])],2)):u("v-if",!0),m("div",{class:r([s(a).e("body"),e.bodyClass]),style:h(e.bodyStyle)},[l(e.$slots,"default")],6)],2))}});var w=f(S,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const E=v(w);export{E};
