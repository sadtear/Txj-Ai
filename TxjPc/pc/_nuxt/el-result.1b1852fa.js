import{ba as g,bb as k,bc as y,bd as w,A as C,v as m,I as $,y as h,o as l,c as a,a as p,O as i,h as s,m as I,n as t,W as R,q as c,t as f,_ as S,R as B}from"./entry.35d4c246.js";const n={success:"icon-success",warning:"icon-warning",error:"icon-error",info:"icon-info"},d={[n.success]:g,[n.warning]:k,[n.error]:y,[n.info]:w},E=C({title:{type:String,default:""},subTitle:{type:String,default:""},icon:{type:String,values:["success","warning","info","error"],default:"info"}}),N=m({name:"ElResult"}),T=m({...N,props:E,setup(v){const b=v,o=$("result"),r=h(()=>{const e=b.icon,u=e&&n[e]?n[e]:"icon-info",_=d[u]||d["icon-info"];return{class:u,component:_}});return(e,u)=>(l(),a("div",{class:t(s(o).b())},[p("div",{class:t(s(o).e("icon"))},[i(e.$slots,"icon",{},()=>[s(r).component?(l(),I(R(s(r).component),{key:0,class:t(s(r).class)},null,8,["class"])):c("v-if",!0)])],2),e.title||e.$slots.title?(l(),a("div",{key:0,class:t(s(o).e("title"))},[i(e.$slots,"title",{},()=>[p("p",null,f(e.title),1)])],2)):c("v-if",!0),e.subTitle||e.$slots["sub-title"]?(l(),a("div",{key:1,class:t(s(o).e("subtitle"))},[i(e.$slots,"sub-title",{},()=>[p("p",null,f(e.subTitle),1)])],2)):c("v-if",!0),e.$slots.extra?(l(),a("div",{key:2,class:t(s(o).e("extra"))},[i(e.$slots,"extra")],2)):c("v-if",!0)],2))}});var D=S(T,[["__file","/home/runner/work/element-plus/element-plus/packages/components/result/src/result.vue"]]);const P=B(D);export{P as E};
