import{v as ze,l as Ve,a3 as Be,f as Ue,a5 as $e,r as a,aB as De,g as f,L as Ge,o as d,c as _,b as l,w as n,a as t,m as F,h as G,t as C,F as b,i as S,d as x,k as g,aC as K,aD as Le,D as Ne,a4 as Te,at as qe,ap as Q,aE as Ae,n as Y,q as Fe,p as He,e as Me,aF as Re,aG as Je}from"./entry.35d4c246.js";import{E as Oe}from"./index.25e0d62c.js";import{E as We}from"./el-card.6e2af8d2.js";import{E as je}from"./index.93e13010.js";import{E as Pe}from"./index.d44e751f.js";import{E as Ke,a as Qe}from"./index.d4a9ac2e.js";import{E as Ye,b as Xe,a as Ze}from"./el-collapse.8f120924.js";import{E as et,a as tt}from"./el-slider.8fa8eb76.js";import{E as st}from"./index.e24e47ce.js";import{E as ot}from"./el-affix.11589363.js";import{E as at}from"./index.6f30e63e.js";import{E as lt}from"./index.1fc0ea57.js";import{_ as nt}from"./layout.bd874b6a.js";/* empty css                *//* empty css                  *//* empty css                    *//* empty css                  */import"./el-tooltip.4ed993c7.js";/* empty css                  *//* empty css                  *//* empty css                     *//* empty css                   */import{b as it}from"./create.65762b44.js";import{_ as rt}from"./_plugin-vue_export-helper.c27b6911.js";import"./_baseClone.43deedb0.js";import"./_getTag.0a62c0db.js";import"./isEqual.97080887.js";import"./refs.179b14af.js";import"./strings.b7c92e5e.js";import"./debounce.7d5a41e6.js";import"./castArray.048c84c6.js";import"./index.540b2914.js";import"./dropdown.72fdcde9.js";const p=I=>(He("data-v-4b989867"),I=I(),Me(),I),ct={class:"container"},dt={class:"right"},ut={class:"scrollbar-demo-item"},_t={class:"tsc"},pt=p(()=>t("strong",{class:"cueword"},"上传原图",-1)),mt={class:"sc"},gt=["src"],vt={class:"mx"},ht=p(()=>t("strong",null," 创作风格 ",-1)),ft={class:"czfg"},yt=["src"],wt={class:"size"},bt=p(()=>t("p",{class:"qi"},"奇想智能，通用万能模型",-1)),St=p(()=>t("div",{class:"qb"},[t("p",null,"全部"),t("div")],-1)),xt={class:"itemimg",style:{display:"flex","justify-content":"flex-start"}},Et=["onClick"],kt=["src"],Ct={class:"size"},It=p(()=>t("p",{class:"qi"},"奇想智能，通用万能模型",-1)),zt={class:"demo-collapse"},Vt={class:"dropdown"},Bt=p(()=>t("p",{class:"draw"},"画面尺寸",-1)),Ut={class:"tooltip-base-box"},$t={class:"row center"},Dt={class:"selector"},Gt=p(()=>t("div",{class:"dropdown"},[t("div",{class:"draw"},"图片质量")],-1)),Lt={class:"selector"},Nt={class:"dropdown"},Tt=p(()=>t("p",{class:"draw"},"生成张数",-1)),qt={class:"tooltip-base-box"},At={class:"row center"},Ft={class:"number"},Ht={class:"slider-demo-block"},Mt={class:"ljsc"},Rt={class:"rightshow"},Jt=p(()=>t("div",{class:"allbox"},[t("span",null,"生成记录")],-1)),Ot={class:"showpicture"},Wt={class:"showGenerateBox"},jt={class:"showGenerateBoxTop"},Pt={class:"showGenerateBoxTopLeft"},Kt={class:"showGenerateBoxTopRight"},Qt=p(()=>t("span",null,"|",-1)),Yt=["src"],Xt=ze({__name:"index copy",setup(I){Ve(),Be(),Ue(),$e();const X=a(`${De()}/api/upload/image`),E=a(""),Z=(e,o)=>{E.value=e.data.path},ee=e=>e.type!=="image/jpeg"?(g.error("Avatar picture must be JPG format!"),!1):e.size/1024/1024>2?(g.error("Avatar picture size can not exceed 2MB!"),!1):!0,v=a(null),H=a(""),L=a("MJ"),k=a(4),te=a("generate"),z=a(""),N=a(1),T=a(""),M=a(""),se=f([{label:"普通",value:0},{label:"高清",value:1},{label:"超清",value:2},{label:"精汇",value:3}]),oe=f({channel:L}),R=f([]),q=a(""),V=a("");(async()=>{const e=await it(oe);for(var o=0;o<e.length;o++)R.push(e[o]);q.value=e[0].imgUrl,V.value=e[0].name})();const ae=e=>{q.value=e.imgUrl,V.value=e.name,B.value=!1},J=f({channel:L,prompt:H,batchSize:k,action:te,sizeRatio:z,quality:N,imageBase:E}),le=f({channel:L,taskId:T}),c=f([]);if(sessionStorage.getItem("historyImgGenerateData")){const e=JSON.parse(sessionStorage.getItem("historyImgGenerateData"));for(var ne in e)c.push(e[ne])}const A=()=>{Re(le).then(e=>{if(M.value=e.progress,M.value!=="100%")setTimeout(A,8e3),c.length==0?c.unshift(e):v.value&&c.length>0&&(e.id==c[0].id?e.progress!=="100%"&&(c[0]=e):c.unshift(e));else{c[0]=e,sessionStorage.setItem("historyImgGenerateData",JSON.stringify(c)),v.value=!1;return}}).catch(e=>{g({message:e,type:"warning"}),v.value=!1})},ie=e=>e.progress.split("%")[0],re=async()=>{if(!E.value)return g({message:"请上传图片",type:"warning"});if(v.value){g({message:"正在生成中...",type:"warning"});return}J.styleName=V.value,await K(J).then(e=>{v.value=!0,T.value=e.msg,A()}).catch(e=>{g({message:e,type:"warning"}),v.value=!1})},ce=async(e,o)=>{const i=f({channel:e.channel,prompt:e.prompt,batchSize:e.batchSize,sizeRatio:e.scale,quality:e.quality,action:"generate",styleName:""});await K(i).then(u=>{v.value=!0,T.value=u.msg,A()}),c.splice(o,1),sessionStorage.setItem("historyImgGenerateData",JSON.stringify(c))},de=e=>{c.splice(e,1),sessionStorage.setItem("historyImgGenerateData",JSON.stringify(c)),g({message:"删除成功",type:"success"})},ue=e=>{Je({drawRecordId:e.id,usageMoney:2}).then(o=>{g({Message:"投稿成功",type:"success"})})},_e=(e,o)=>{var i=new Image;i.setAttribute("crossOrigin","anonymous"),i.onload=function(){var u=document.createElement("canvas");u.width=i.width,u.height=i.height;var y=u.getContext("2d");y.drawImage(i,0,0,i.width,i.height);var w=u.toDataURL("image/png"),m=document.createElement("a"),r=new MouseEvent("click");m.download=o||"photo",m.href=w,m.dispatchEvent(r)},i.src=e},pe=e=>{let o=new Date().getTime();_e(e,`${o}`)},me=e=>{for(var o=0;o<e.imageUrlList.length;o++)pe(e.imageUrlList[o])},ge=e=>{H.value=e.prompt,g({message:"复制成功",type:"success"})},ve=e=>{const o=new Date(e*1e3);console.log(o);const i=o.getFullYear(),u=o.getMonth()+1,y=o.getDate(),w=o.getHours(),m=o.getMinutes(),r=o.getSeconds(),U=`${i}-${u<10?"0"+u:u}-${y<10?"0"+y:y}`,$=`${w<10?"0"+w:w}:${m<10?"0"+m:m}:${r<10?"0"+r:r}`;return`${U}  ${$}`};a(!0),a(!0),a(!0),a(""),a(!1),a(!1),a(!1);const B=a(!1);a(1),a(7),a(1),a(0),a(0),a(0);const he=e=>{console.log(e)};a(""),a("");const O=f([]);(async()=>{await Le().then(e=>{O.push(...e),z.value=e[0].ratioWidth+":"+e[0].ratioHeight})})(),a(""),a("");const W=a(["1"]);a(["1"]);const fe=e=>{console.log(e)};return a(""),a(""),a(""),a(!1),(e,o)=>{const i=Ne,u=Oe,y=We,w=Ge("StarFilled"),m=je,r=Te,U=Pe,$=Qe,j=Ke,P=Ye,ye=et,we=tt,be=Xe,Se=Ze,xe=st,Ee=ot,ke=at,Ce=lt,Ie=nt;return d(),_("div",null,[l(Ie,{name:"default"},{default:n(()=>[t("div",ct,[t("div",dt,[l(xe,{height:"100%"},{default:n(()=>[t("p",ut,[t("div",_t,[pt,t("div",mt,[l(u,{class:"avatar-uploader",action:X.value,"show-file-list":!1,"on-success":Z,"before-upload":ee},{default:n(()=>[E.value?(d(),_("img",{key:0,src:E.value,class:"avatar"},null,8,gt)):(d(),F(i,{key:1,class:"avatar-uploader-icon"},{default:n(()=>[l(G(qe))]),_:1}))]),_:1},8,["action"])])]),t("div",vt,[ht,t("div",ft,[l(y,{"body-class":"selectStyle",shadow:"hover",onClick:o[0]||(o[0]=s=>B.value=!0)},{default:n(()=>[t("img",{src:q.value,alt:""},null,8,yt),t("div",wt,[t("p",null,C(V.value),1),bt])]),_:1}),l(m,{modelValue:B.value,"onUpdate:modelValue":o[1]||(o[1]=s=>B.value=s),title:"创作风格",width:"30%"},{default:n(()=>[t("span",null,[St,t("div",xt,[(d(!0),_(b,null,S(R,(s,D)=>(d(),_("div",{class:"img",key:D,onClick:h=>ae(s)},[t("img",{src:s.imgUrl,alt:""},null,8,kt),t("div",null,[t("div",null,[t("p",Ct,C(s.name),1),It]),l(i,null,{default:n(()=>[l(w)]),_:1})])],8,Et))),128))])])]),_:1},8,["modelValue"])])]),t("div",zt,[l(Se,{modelValue:W.value,"onUpdate:modelValue":o[6]||(o[6]=s=>W.value=s),onHandleChange:fe},{default:n(()=>[l(be,{class:"title",title:"参数设定",name:"1"},{default:n(()=>[t("div",Vt,[Bt,t("div",null,[t("div",Ut,[t("div",$t,[l(U,{class:"box-item",effect:"dark",content:"选择需要的比例与尺寸，尺寸越大耗时越久。",placement:"top-start"},{default:n(()=>[l(r,null,{default:n(()=>[l(i,null,{default:n(()=>[l(G(Q))]),_:1})]),_:1})]),_:1})])])])]),t("div",Dt,[l(j,{modelValue:z.value,"onUpdate:modelValue":o[2]||(o[2]=s=>z.value=s),class:"m-2",placeholder:"3:4"},{default:n(()=>[(d(!0),_(b,null,S(O,s=>(d(),F($,{key:s.ratioWidth+":"+s.ratioHeight,label:s.name+""+s.ratioWidth+":"+s.ratioHeight,value:s.ratioWidth+":"+s.ratioHeight},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),l(P),Gt,t("div",Lt,[l(j,{modelValue:N.value,"onUpdate:modelValue":o[3]||(o[3]=s=>N.value=s),class:"m-2"},{default:n(()=>[(d(!0),_(b,null,S(se,s=>(d(),F($,{key:s.value,label:s.label,value:s.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),l(P),t("div",Nt,[Tt,t("div",null,[t("div",qt,[t("div",At,[l(U,{class:"box-item",effect:"dark",content:"生成张数越多，耗时越久。",placement:"top-start"},{default:n(()=>[l(r,null,{default:n(()=>[l(i,null,{default:n(()=>[l(G(Q))]),_:1})]),_:1})]),_:1})])])]),t("div",Ft,[l(ye,{modelValue:k.value,"onUpdate:modelValue":o[4]||(o[4]=s=>k.value=s),class:"mx-3",min:1,max:4,"controls-position":"right",onHandleChange1:he},null,8,["modelValue"])])]),t("div",Ht,[l(we,{modelValue:k.value,"onUpdate:modelValue":o[5]||(o[5]=s=>k.value=s),"show-tooltip":!1,min:1,max:4},null,8,["modelValue"])])]),_:1})]),_:1},8,["modelValue"])])])]),_:1}),t("div",Mt,[l(Ee,{position:"bottom",offset:20},{default:n(()=>[l(r,{type:"primary",onClick:re},{default:n(()=>[x("立即生成")]),_:1})]),_:1})])]),t("div",Rt,[Jt,t("div",Ot,[(d(!0),_(b,null,S(c,(s,D)=>(d(),_("div",Wt,[t("div",jt,[t("div",Pt,[l(ke,{placement:"top-start",width:150,trigger:"hover",content:"复制文本到‘描述’中"},{reference:n(()=>[l(r,{icon:G(Ae),onClick:h=>ge(s),size:"small",circle:"",style:{width:"1em",height:"1em","margin-right":"8px",cursor:"pointer"}},null,8,["icon","onClick"])]),_:2},1024),t("span",null,C(s.prompt),1)]),t("div",Kt,[t("span",null,C(ve(s.createTime)),1),t("span",null,"渠道: "+C(s.channel?s.channel:"无"),1),Qt,l(r,{onClick:h=>me(s)},{default:n(()=>[x("下载")]),_:2},1032,["onClick"]),l(r,{onClick:h=>ce(s,D)},{default:n(()=>[x("重绘")]),_:2},1032,["onClick"]),l(r,{onClick:h=>de(D)},{default:n(()=>[x("删除")]),_:2},1032,["onClick"]),l(r,{onClick:h=>ue(s)},{default:n(()=>[x("投稿")]),_:2},1032,["onClick"]),l(r,null,{default:n(()=>[x("详情")]),_:1})])]),t("div",{class:Y(["showGenerateBoxBottom",s.progress!=="100%"?"showGenerateBoxBottomLoadBox":""])},[s.progress=="100%"?(d(!0),_(b,{key:0},S(s.imageUrlList,h=>(d(),_("img",{src:h},null,8,Yt))),256)):v.value==!0?(d(),_(b,{key:1},S(4,h=>t("div",{class:Y([s.scale=="1:1"?"imageSize1_1":s.scale=="2:3"?"imageSize2_3":s.scale=="3:2"?"imageSize3_2":s.scale=="3:4"?"imageSize3_4":s.scale=="4:3"?"imageSize4_3":s.scale=="9:16"?"imageSize9_16":s.scale=="16:9"?"imageSize16_9":" ","showGenerateBoxBottomLoad"])},[l(Ce,{type:"circle",percentage:ie(s)},null,8,["percentage"])],2)),64)):Fe("",!0)],2)]))),256))])])])]),_:1})])}}});const Gs=rt(Xt,[["__scopeId","data-v-4b989867"]]);export{Gs as default};