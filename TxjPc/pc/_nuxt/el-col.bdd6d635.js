import{A as h,ai as o,bt as n,v as m,aw as g,y as c,I as _,ah as p,bo as $,o as N,m as C,w as j,O as v,n as x,h as f,ab as O,W as w,_ as E,R as k}from"./entry.35d4c246.js";import{r as S}from"./el-row.5cfa1389.js";const B=h({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:o([Number,Object]),default:()=>n({})},sm:{type:o([Number,Object]),default:()=>n({})},md:{type:o([Number,Object]),default:()=>n({})},lg:{type:o([Number,Object]),default:()=>n({})},xl:{type:o([Number,Object]),default:()=>n({})}}),I=m({name:"ElCol"}),K=m({...I,props:B,setup(b){const t=b,{gutter:u}=g(S,{gutter:c(()=>0)}),a=_("col"),d=c(()=>{const e={};return u.value&&(e.paddingLeft=e.paddingRight=`${u.value/2}px`),e}),i=c(()=>{const e=[];return["span","offset","pull","push"].forEach(s=>{const l=t[s];p(l)&&(s==="span"?e.push(a.b(`${t[s]}`)):l>0&&e.push(a.b(`${s}-${t[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{p(t[s])?e.push(a.b(`${s}-${t[s]}`)):$(t[s])&&Object.entries(t[s]).forEach(([l,r])=>{e.push(l!=="span"?a.b(`${s}-${l}-${r}`):a.b(`${s}-${r}`))})}),u.value&&e.push(a.is("guttered")),[a.b(),e]});return(e,y)=>(N(),C(w(e.tag),{class:x(f(i)),style:O(f(d))},{default:j(()=>[v(e.$slots,"default")]),_:3},8,["class","style"]))}});var P=E(K,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const L=k(P);export{L as E};