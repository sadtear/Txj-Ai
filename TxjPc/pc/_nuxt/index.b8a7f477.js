import{A as yl,v as el,I as El,y as Z,ae as $l,O as Sl,r as d,af as Al,ag as B,ah as K,ai as X,aj as kl,ak as Ll,al as Tl,b as e,am as U,d as E,an as fl,ao as Dl,R as Bl,l as Hl,a3 as jl,f as Ol,a5 as Fl,L as Yl,o as C,c as z,w as o,a as l,h as p,F as T,i as D,q as hl,E as Jl,D as Wl,a4 as Gl,ap as q,aq as Xl,ar as Zl,as as Kl,at as Ql,p as le,e as ee}from"./entry.35d4c246.js";import{E as se}from"./el-card.6e2af8d2.js";import{E as te}from"./el-col.bdd6d635.js";import{E as oe}from"./index.93e13010.js";import{E as ae}from"./el-row.5cfa1389.js";import{E as ne}from"./index.d44e751f.js";import{E as de,a as ie}from"./index.d4a9ac2e.js";import{E as ue,b as ce,a as re}from"./el-collapse.8f120924.js";import{E as me,a as pe}from"./el-slider.8fa8eb76.js";import{E as _e,a as ve}from"./el-tabs.de01d035.js";import{b as fe}from"./index.2f982f63.js";import{E as he}from"./index.25e0d62c.js";import{E as be}from"./index.e24e47ce.js";import{E as Ve}from"./el-affix.11589363.js";import{_ as ge}from"./layout.bd874b6a.js";/* empty css                  *//* empty css                */import"./el-tooltip.4ed993c7.js";/* empty css                  *//* empty css                  *//* empty css                     */import{E as bl}from"./el-checkbox.ff0ca7d1.js";/* empty css                  *//* empty css                    */import{_ as xe}from"./_plugin-vue_export-helper.c27b6911.js";import"./refs.179b14af.js";import"./strings.b7c92e5e.js";import"./isEqual.97080887.js";import"./_getTag.0a62c0db.js";import"./debounce.7d5a41e6.js";import"./castArray.048c84c6.js";import"./index.540b2914.js";import"./index.341c05ee.js";import"./index.1fc0ea57.js";import"./_baseClone.43deedb0.js";const we=yl({prefixCls:{type:String}}),Vl=el({name:"ElSpaceItem",props:we,setup(n,{slots:x}){const S=El("space"),h=Z(()=>`${n.prefixCls||S.b()}__item`);return()=>$l("div",{class:h.value},Sl(x,"default"))}}),gl={small:8,default:12,large:16};function ye(n){const x=El("space"),S=Z(()=>[x.b(),x.m(n.direction),n.class]),h=d(0),v=d(0),I=Z(()=>{const i=n.wrap||n.fill?{flexWrap:"wrap",marginBottom:`-${v.value}px`}:{},m={alignItems:n.alignment};return[i,m,n.style]}),w=Z(()=>{const i={paddingBottom:`${v.value}px`,marginRight:`${h.value}px`},m=n.fill?{flexGrow:1,minWidth:`${n.fillRatio}%`}:{};return[i,m]});return Al(()=>{const{size:i="small",wrap:m,direction:b,fill:c}=n;if(B(i)){const[u=0,r=0]=i;h.value=u,v.value=r}else{let u;K(i)?u=i:u=gl[i||"small"]||gl.small,(m||c)&&b==="horizontal"?h.value=v.value=u:b==="horizontal"?(h.value=u,v.value=0):(v.value=u,h.value=0)}}),{classes:S,containerStyle:I,itemStyle:w}}const Ee=yl({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},class:{type:X([String,Object,Array]),default:""},style:{type:X([String,Array,Object]),default:""},alignment:{type:X(String),default:"center"},prefixCls:{type:String},spacer:{type:X([Object,String,Number,Array]),default:null,validator:n=>kl(n)||K(n)||Ll(n)},wrap:Boolean,fill:Boolean,fillRatio:{type:Number,default:100},size:{type:[String,Array,Number],values:Tl,validator:n=>K(n)||B(n)&&n.length===2&&n.every(K)}}),Se=el({name:"ElSpace",props:Ee,setup(n,{slots:x}){const{classes:S,containerStyle:h,itemStyle:v}=ye(n);function I(w,i="",m=[]){const{prefixCls:b}=n;return w.forEach((c,u)=>{fl(c)?B(c.children)&&c.children.forEach((r,y)=>{fl(r)&&B(r.children)?I(r.children,`${i+y}-`,m):m.push(e(Vl,{style:v.value,prefixCls:b,key:`nested-${i+y}`},{default:()=>[r]},U.PROPS|U.STYLE,["style","prefixCls"]))}):Dl(c)&&m.push(e(Vl,{style:v.value,prefixCls:b,key:`LoopKey${i+u}`},{default:()=>[c]},U.PROPS|U.STYLE,["style","prefixCls"]))}),m}return()=>{var w;const{spacer:i,direction:m}=n,b=Sl(x,"default",{key:0},()=>[]);if(((w=b.children)!=null?w:[]).length===0)return null;if(B(b.children)){let c=I(b.children);if(i){const u=c.length-1;c=c.reduce((r,y,M)=>{const N=[...r,y];return M!==u&&N.push(e("span",{style:[v.value,m==="vertical"?"width: 100%":null],key:M},[kl(i)?i:E(i,U.TEXT)],U.STYLE)),N},[])}return e("div",{class:S.value,style:h.value},c,U.STYLE|U.CLASS)}return b.children}}}),ke=Bl(Se);const _=""+new URL("64c8afd79014750145LmvdAkYW1690.2cfe6eb7.png",import.meta.url).href,xl=""+new URL("下载.90b9a844.svg",import.meta.url).href,wl=""+new URL("删除.c7b0cbb1.svg",import.meta.url).href,a=n=>(le("data-v-dda44d7a"),n=n(),ee(),n),Ue={class:"container"},Ce={class:"right"},ze={class:"scrollbar-demo-item"},qe={class:"tsc"},Ie=a(()=>l("strong",{class:"cueword"},"提示词",-1)),Me=a(()=>l("span",{class:"sj"},"随机输入",-1)),Ne=a(()=>l("div",{class:"prompt"},[l("span",null,"不知道如果输入？可以试试大神的描述词")],-1)),Re={class:"czfg"},Pe=a(()=>l("strong",null," 创作风格 ",-1)),$e=a(()=>l("img",{src:_,alt:""},null,-1)),Ae=a(()=>l("div",{class:"size",style:{position:"relative",top:"-70px",right:"-60px"}},[l("p",null,"MiracleVision 2.0"),l("p",{class:"qi"},"奇想智能，通用万能模型")],-1)),Le=a(()=>l("span",null,[l("div",{class:"qb"},[l("p",null,"全部"),l("div")]),l("div",{class:"img"},[l("img",{src:_,alt:""}),l("div",null,[l("div",null,[l("p",{class:"size"},"MiracleVision 2.0"),l("p",{class:"qi"},"奇想智能，通用万能模型")])])])],-1)),Te={class:"demo-collapse"},De={class:"dropdown"},Be=a(()=>l("p",{class:"draw"},"画面尺寸",-1)),He={class:"tooltip-base-box"},je={class:"row center"},Oe={class:"selector"},Fe={class:"dropdown"},Ye=a(()=>l("p",{class:"draw"},"生成张数",-1)),Je={class:"tooltip-base-box"},We={class:"row center"},Ge={class:"number"},Xe={class:"slider-demo-block"},Ze=a(()=>l("strong",{class:"cueword"},"提示词",-1)),Ke=a(()=>l("span",{class:"sj"},"随机输入",-1)),Qe=a(()=>l("div",{class:"prompt"},[l("span",null,"不知道如果输入？可以试试大神的描述词")],-1)),ls=a(()=>l("strong",{class:"cueword"},"不希望呈现的内容",-1)),es={class:"czfg"},ss=a(()=>l("strong",null," 模型 ",-1)),ts={class:"czfg"},os=a(()=>l("img",{src:_,alt:""},null,-1)),as=a(()=>l("div",{class:"size",style:{position:"relative",top:"-70px",right:"-60px"}},[l("p",null,"MiracleVision 2.0"),l("p",{class:"qi"},"奇想智能，通用万能模型")],-1)),ns=a(()=>l("div",{class:"qb"},[l("p",null,"全部"),l("div")],-1)),ds={class:"img"},is=a(()=>l("img",{src:_,alt:""},null,-1)),us=a(()=>l("div",null,[l("p",{class:"size"},"MiracleVision 2.0"),l("p",{class:"qi"},"奇想智能，通用万能模型")],-1)),cs={class:"fgmx"},rs=a(()=>l("strong",null,"风格模型",-1)),ms=a(()=>l("span",null,[l("div",{class:"qb"},[l("p",null,"全部"),l("div")]),l("div",{class:"card"},[l("div",{class:"img"},[l("div",null,[l("img",{src:_,alt:""})]),l("div",null,[l("div",null,[l("p",{class:"size"},"MiracleVision 2.0"),l("p",{class:"qi"},"奇想智能，通用万能模型")])])]),l("div",{class:"img"},[l("div",null,[l("img",{src:_,alt:""})]),l("div",null,[l("div",null,[l("p",{class:"size"},"MiracleVision 2.0"),l("p",{class:"qi"},"奇想智能，通用万能模型")])])]),l("div",{class:"img"},[l("div",null,[l("img",{src:_,alt:""})]),l("div",null,[l("div",null,[l("p",{class:"size"},"MiracleVision 2.0"),l("p",{class:"qi"},"奇想智能，通用万能模型")])])]),l("div",{class:"img"},[l("div",null,[l("img",{src:_,alt:""})]),l("div",null,[l("div",null,[l("p",{class:"size"},"MiracleVision 2.0"),l("p",{class:"qi"},"奇想智能，通用万能模型")])])]),l("div",{class:"img"},[l("div",null,[l("img",{src:_,alt:""})]),l("div",null,[l("div",null,[l("p",{class:"size"},"MiracleVision 2.0"),l("p",{class:"qi"},"奇想智能，通用万能模型")])])]),l("div",{class:"img"},[l("div",null,[l("img",{src:_,alt:""})]),l("div",null,[l("div",null,[l("p",{class:"size"},"MiracleVision 2.0"),l("p",{class:"qi"},"奇想智能，通用万能模型")])])])])],-1)),ps={class:"demo-collapse"},_s={class:"dropdown"},vs=a(()=>l("p",{class:"draw"},"画面尺寸",-1)),fs={class:"tooltip-base-box"},hs={class:"row center"},bs={class:"selector"},Vs={class:"dropdown"},gs=a(()=>l("p",{class:"draw"},"创意相关性",-1)),xs={class:"tooltip-base-box"},ws={class:"row center"},ys={class:"number"},Es={class:"slider-demo-block"},Ss={class:"dropdown"},ks=a(()=>l("p",{class:"draw"},"生成张数",-1)),Us={class:"tooltip-base-box"},Cs={class:"row center"},zs={class:"number"},qs={class:"slider-demo-block"},Is={class:"dropdown"},Ms=a(()=>l("p",{class:"draw"},"采样器",-1)),Ns={class:"tooltip-base-box"},Rs={class:"row center"},Ps={class:"slider-demo-block"},$s={class:"dropdown dropdown1"},As=a(()=>l("p",{class:"draw"},"采样步骤",-1)),Ls={class:"tooltip-base-box"},Ts={class:"row center"},Ds={class:"number"},Bs={class:"slider-demo-block"},Hs={class:"dropdown dropdown2"},js=a(()=>l("p",{class:"draw"},"Seed",-1)),Os={class:"tooltip-base-box"},Fs={class:"row center"},Ys={class:"input"},Js={class:"dropdown dropdown-mb"},Ws=a(()=>l("p",{class:"draw"},"面部修复",-1)),Gs={class:"dropdown dropdown-xf"},Xs=a(()=>l("p",{class:"draw"},"高清修复",-1)),Zs={class:"hmkz"},Ks=a(()=>l("strong",null,"画面控制",-1)),Qs={class:"kz"},lt={class:"sc"},et=["src"],st={class:"el-upload-list__item-actions"},tt=["onClick"],ot=["onClick"],at=["onClick"],nt=["src"],dt={class:"qz"},it={class:"dropdown"},ut=a(()=>l("p",{class:"draw"},"权重",-1)),ct={class:"number qz-1"},rt={class:"slider-demo-block"},mt={class:"dropdown"},pt=a(()=>l("p",{class:"draw"},"引导介入时机",-1)),_t={class:"number"},vt={class:"slider-demo-block"},ft={class:"dropdown"},ht=a(()=>l("p",{class:"draw"},"引导结束时机",-1)),bt={class:"number"},Vt={class:"slider-demo-block"},gt={class:"ljsc"},xt=a(()=>l("div",{class:"left"},[l("div",{class:"left-1"},[l("div",{class:"size"},[l("div",null,[l("span",{class:"s-1"}," 公共建筑，现代主义，纯净，光滑，街道，金属，玻璃，广场，金属网格 ")]),l("div",null,[l("span",{class:"s-3"},[E("渠道: "),l("span",null,"MJ")]),E("| "),l("span",{class:"s-2"},"2023-09-16 00:00"),E(" | "),l("button",null,[l("img",{src:xl,alt:""})]),l("button",null,[l("img",{src:wl,alt:""})])])]),l("div",{class:"img"},[l("div",null,[l("img",{src:_,alt:""})]),l("div",null,[l("img",{src:_,alt:""})])])]),l("div",{class:"left-1"},[l("div",{class:"size"},[l("div",null,[l("span",{class:"s-1"}," 公共建筑，现代主义，纯净，光滑，街道，金属，玻璃，广场，金属网格 ")]),l("div",null,[l("span",{class:"s-3"},[E("渠道:"),l("span",null,"MJ")]),E("| "),l("span",{class:"s-2"},"2023-09-16 00:00"),E(" | "),l("button",null,[l("img",{src:xl,alt:""})]),l("button",null,[l("img",{src:wl,alt:""})])])]),l("div",{class:"img"},[l("div",null,[l("img",{src:_,alt:""})]),l("div",null,[l("img",{src:_,alt:""})])])])],-1)),wt=el({__name:"index",setup(n){Hl(),jl(),Ol(),Fl(),d(!0);const x=d(!0),S=d(!0),h=d(!0),v=d(""),I=d(!1),w=d(!1),i=V=>{console.log(V)},m=V=>{v.value=V.url,c.value=!0},b=V=>{console.log(V)},c=d(!1),u=d(!1),r=d(1),y=d(7),M=d(1),N=d(0),H=d(0),j=d(0),R=V=>{console.log(V)},sl=d(""),tl=d(""),Ul=[{value:"1",label:"Euler A"},{value:"2",label:"Euler"},{value:"3",label:"Ddim"},{value:"4",label:"Dpm 2 M"},{value:"5",label:"Dpm 2 M karras"},{value:"6",label:"Dpm  Sde"},{value:"7",label:"Dpm Sde karras"}],O=d(""),ol=[{value:"1",label:"自定义"},{value:"2",label:"2:3"},{value:"3",label:"3:4"},{value:"4",label:"9:16"},{value:"5",label:"3:2"},{value:"6",label:"4:3"},{value:"5",label:"16:9"}],F=d(""),al=[{value:"1",label:"576x768"},{value:"2",label:"768x1024"}],Y=d(["1"]);d(["1"]);const nl=V=>{console.log(V)},J=d(""),dl=d(""),il=d("first"),Cl=(V,t)=>{console.log(V,t)};return d(""),d(!1),(V,t)=>{const W=Jl,ul=se,cl=te,G=oe,Q=ae,f=Wl,g=Gl,k=ne,A=ie,L=de,rl=ue,P=me,$=pe,ml=ce,pl=re,ll=_e,zl=Yl("StarFilled"),ql=fe,Il=ke,_l=ve,Ml=he,Nl=be,Rl=Ve,Pl=ge;return C(),z("div",null,[e(Pl,{name:"default"},{default:o(()=>[l("div",Ue,[l("div",Ce,[e(Nl,{height:"100%"},{default:o(()=>[l("p",ze,[e(_l,{modelValue:il.value,"onUpdate:modelValue":t[35]||(t[35]=s=>il.value=s),type:"border-card",class:"demo-tabs",onTabClick:Cl,stretch:"true"},{default:o(()=>[e(ll,{class:"mj",label:"MJ",name:"first"},{default:o(()=>[l("div",qe,[Ie,e(W,{class:"textarea",modelValue:dl.value,"onUpdate:modelValue":t[0]||(t[0]=s=>dl.value=s),maxlength:"800",placeholder:"请输入你的创意","show-word-limit":"",type:"textarea",style:{"border-radius":"10px"},autosize:{minRows:2,maxRows:4}},null,8,["modelValue"]),Me,Ne]),l("div",Re,[Pe,e(Q,{gutter:12},{default:o(()=>[e(cl,{span:8},{default:o(()=>[e(ul,{shadow:"hover",onClick:t[1]||(t[1]=s=>u.value=!0)},{default:o(()=>[$e,Ae]),_:1})]),_:1}),e(G,{modelValue:u.value,"onUpdate:modelValue":t[2]||(t[2]=s=>u.value=s),title:"创作风格",width:"30%"},{default:o(()=>[Le]),_:1},8,["modelValue"])]),_:1})]),l("div",Te,[e(pl,{modelValue:Y.value,"onUpdate:modelValue":t[7]||(t[7]=s=>Y.value=s),onHandleChange:nl},{default:o(()=>[e(ml,{class:"title",title:"参数设定",name:"1"},{default:o(()=>[l("div",De,[Be,l("div",null,[l("div",He,[l("div",je,[e(k,{class:"box-item",effect:"dark",content:"选择需要的比例与尺寸，尺寸越大耗时越久。",placement:"top-start"},{default:o(()=>[e(g,null,{default:o(()=>[e(f,null,{default:o(()=>[e(p(q))]),_:1})]),_:1})]),_:1})])])])]),l("div",Oe,[e(L,{modelValue:O.value,"onUpdate:modelValue":t[3]||(t[3]=s=>O.value=s),class:"m-2",placeholder:"3:4"},{default:o(()=>[(C(),z(T,null,D(ol,s=>e(A,{key:s.value,label:s.label,value:s.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),e(L,{modelValue:F.value,"onUpdate:modelValue":t[4]||(t[4]=s=>F.value=s),class:"m-2",placeholder:"760x1024"},{default:o(()=>[(C(),z(T,null,D(al,s=>e(A,{key:s.value,label:s.label,value:s.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),e(rl),l("div",Fe,[Ye,l("div",null,[l("div",Je,[l("div",We,[e(k,{class:"box-item",effect:"dark",content:"生成张数越多，耗时越久。",placement:"top-start"},{default:o(()=>[e(g,null,{default:o(()=>[e(f,null,{default:o(()=>[e(p(q))]),_:1})]),_:1})]),_:1})])])]),l("div",Ge,[e(P,{modelValue:r.value,"onUpdate:modelValue":t[5]||(t[5]=s=>r.value=s),class:"mx-3",min:1,max:4,"controls-position":"right",onHandleChange1:R},null,8,["modelValue"])])]),l("div",Xe,[e($,{modelValue:r.value,"onUpdate:modelValue":t[6]||(t[6]=s=>r.value=s),"show-tooltip":!1,min:1,max:4},null,8,["modelValue"])])]),_:1})]),_:1},8,["modelValue"])])]),_:1}),e(ll,{label:"SD",name:"second"},{default:o(()=>[Ze,e(W,{class:"textarea",modelValue:J.value,"onUpdate:modelValue":t[8]||(t[8]=s=>J.value=s),maxlength:"800",placeholder:"请输入你的创意","show-word-limit":"",type:"textarea",style:{"border-radius":"10px"}},null,8,["modelValue"]),Ke,Qe,ls,e(W,{class:"textarea",modelValue:J.value,"onUpdate:modelValue":t[9]||(t[9]=s=>J.value=s),maxlength:"800",placeholder:"请输入你的创意","show-word-limit":"",type:"textarea",style:{"border-radius":"10px"}},null,8,["modelValue"]),l("div",es,[ss,l("div",ts,[e(Q,{style:{"margin-bottom":"15px"},gutter:12},{default:o(()=>[e(cl,{span:8},{default:o(()=>[e(ul,{shadow:"hover",onClick:t[10]||(t[10]=s=>u.value=!0)},{default:o(()=>[os,as]),_:1})]),_:1}),e(G,{modelValue:u.value,"onUpdate:modelValue":t[11]||(t[11]=s=>u.value=s),title:"创作风格",width:"30%"},{default:o(()=>[l("span",null,[ns,l("div",ds,[is,l("div",null,[us,e(f,null,{default:o(()=>[e(zl)]),_:1})])])])]),_:1},8,["modelValue"])]),_:1})])]),l("div",cs,[rs,e(Q,{class:"mb-4"},{default:o(()=>[e(g,{class:"fgms",text:"",onClick:t[12]||(t[12]=s=>c.value=!0)},{default:o(()=>[E(" 添加风格模型 ")]),_:1}),e(G,{modelValue:c.value,"onUpdate:modelValue":t[13]||(t[13]=s=>c.value=s),title:"风格模型",width:"30%"},{default:o(()=>[ms]),_:1},8,["modelValue"])]),_:1})]),e(Il,{direction:"vertical"},{default:o(()=>[l("div",ps,[e(pl,{modelValue:Y.value,"onUpdate:modelValue":t[27]||(t[27]=s=>Y.value=s),onHandleChange:nl},{default:o(()=>[e(ml,{class:"title",title:"参数设定",name:"1"},{default:o(()=>[l("div",_s,[vs,l("div",null,[l("div",fs,[l("div",hs,[e(k,{class:"box-item",effect:"dark",content:"选择需要的比例与尺寸，尺寸越大耗时越久。",placement:"top-start"},{default:o(()=>[e(g,null,{default:o(()=>[e(f,null,{default:o(()=>[e(p(q))]),_:1})]),_:1})]),_:1})])])])]),l("div",bs,[e(L,{modelValue:O.value,"onUpdate:modelValue":t[14]||(t[14]=s=>O.value=s),class:"m-2",placeholder:"3:4"},{default:o(()=>[(C(),z(T,null,D(ol,s=>e(A,{key:s.value,label:s.label,value:s.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),e(L,{modelValue:F.value,"onUpdate:modelValue":t[15]||(t[15]=s=>F.value=s),class:"m-2",placeholder:"760x1024"},{default:o(()=>[(C(),z(T,null,D(al,s=>e(A,{key:s.value,label:s.label,value:s.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),e(rl),l("div",Vs,[gs,l("div",xs,[l("div",ws,[e(k,{class:"box-item",effect:"dark",content:"控制图片生成过程中遵循提示词的程度，值越高，图像就越贴合描述内容。但较高的值会降低创意性与质量。",placement:"top-start"},{default:o(()=>[e(g,null,{default:o(()=>[e(f,null,{default:o(()=>[e(p(q))]),_:1})]),_:1})]),_:1})])]),l("div",ys,[e(P,{modelValue:y.value,"onUpdate:modelValue":t[16]||(t[16]=s=>y.value=s),class:"mx-1",min:1,max:20,step:.5,"controls-position":"right",onHandleChange1:R},null,8,["modelValue"])])]),l("div",Es,[e($,{modelValue:y.value,"onUpdate:modelValue":t[17]||(t[17]=s=>y.value=s),step:.5,min:1,max:20},null,8,["modelValue"])]),l("div",Ss,[ks,l("div",Us,[l("div",Cs,[e(k,{class:"box-item",effect:"dark",content:"生成张数越多，耗时越久。",placement:"top-start"},{default:o(()=>[e(g,null,{default:o(()=>[e(f,null,{default:o(()=>[e(p(q))]),_:1})]),_:1})]),_:1})])]),l("div",zs,[e(P,{modelValue:r.value,"onUpdate:modelValue":t[18]||(t[18]=s=>r.value=s),class:"mx-2",min:1,max:4,"controls-position":"right",onHandleChange1:R},null,8,["modelValue"])])]),l("div",qs,[e($,{modelValue:r.value,"onUpdate:modelValue":t[19]||(t[19]=s=>r.value=s),"show-tooltip":!1,min:1,max:4},null,8,["modelValue"])]),l("div",Is,[Ms,l("div",Ns,[l("div",Rs,[e(k,{class:"box-item",effect:"dark",content:"选择不同的采样器效果与耗时会有所不同",placement:"top-start"},{default:o(()=>[e(g,null,{default:o(()=>[e(f,null,{default:o(()=>[e(p(q))]),_:1})]),_:1})]),_:1})])])]),l("div",Ps,[e(L,{modelValue:tl.value,"onUpdate:modelValue":t[20]||(t[20]=s=>tl.value=s),class:"s-1",placeholder:"Euler A"},{default:o(()=>[(C(),z(T,null,D(Ul,s=>e(A,{key:s.value,label:s.label,value:s.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),l("div",$s,[As,l("div",Ls,[l("div",Ts,[e(k,{class:"box-item",effect:"dark",content:"生成图片所需的步骤，步骤越多耗时越久，通常25个步骤足以获得高质量的图片。",placement:"top-start"},{default:o(()=>[e(g,null,{default:o(()=>[e(f,null,{default:o(()=>[e(p(q))]),_:1})]),_:1})]),_:1})])]),l("div",Ds,[e(P,{modelValue:M.value,"onUpdate:modelValue":t[21]||(t[21]=s=>M.value=s),class:"mx-2",min:1,max:20,"controls-position":"right",onHandleChange1:R},null,8,["modelValue"])])]),l("div",Bs,[e($,{modelValue:M.value,"onUpdate:modelValue":t[22]||(t[22]=s=>M.value=s),"show-tooltip":!1,min:1,max:20},null,8,["modelValue"])]),l("div",Hs,[js,l("div",Os,[l("div",Fs,[e(k,{class:"box-item",effect:"dark",content:"稳定图片风格的种子，当随机出一组觉得不错的风格图片时，可固定seed种子进行描述或其他参数的微调来达到最佳效果。",placement:"top-start"},{default:o(()=>[e(g,null,{default:o(()=>[e(f,null,{default:o(()=>[e(p(q))]),_:1})]),_:1})]),_:1})])]),l("div",null,[e(ql,{modelValue:h.value,"onUpdate:modelValue":t[23]||(t[23]=s=>h.value=s),label:"随机",size:"large"},null,8,["modelValue"])])]),l("div",Ys,[e(W,{modelValue:sl.value,"onUpdate:modelValue":t[24]||(t[24]=s=>sl.value=s),placeholder:"请输入",clearable:""},null,8,["modelValue"])]),l("div",Js,[Ws,l("div",null,[e(p(bl),{modelValue:S.value,"onUpdate:modelValue":t[25]||(t[25]=s=>S.value=s)},null,8,["modelValue"])])]),l("div",Gs,[Xs,l("div",null,[e(p(bl),{modelValue:x.value,"onUpdate:modelValue":t[26]||(t[26]=s=>x.value=s)},null,8,["modelValue"])])])]),_:1})]),_:1},8,["modelValue"])])]),_:1}),l("div",Zs,[Ks,l("div",Qs,[e(_l,{type:"border-card",stretch:"true"},{default:o(()=>[e(ll,{label:"控制"})]),_:1})]),l("div",lt,[e(Ml,{action:"#","list-type":"picture-card","auto-upload":!1},{file:o(({file:s})=>[l("div",null,[l("img",{class:"el-upload-list__item-thumbnail",src:s.url,alt:""},null,8,et),l("span",st,[l("span",{class:"el-upload-list__item-preview",onClick:vl=>m(s)},[e(f,null,{default:o(()=>[e(p(Xl))]),_:1})],8,tt),w.value?hl("",!0):(C(),z("span",{key:0,class:"el-upload-list__item-delete",onClick:vl=>b(s)},[e(f,null,{default:o(()=>[e(p(Zl))]),_:1})],8,ot)),w.value?hl("",!0):(C(),z("span",{key:1,class:"el-upload-list__item-delete",onClick:vl=>i(s)},[e(f,null,{default:o(()=>[e(p(Kl))]),_:1})],8,at))])])]),default:o(()=>[e(f,null,{default:o(()=>[e(p(Ql))]),_:1})]),_:1}),e(G,{modelValue:I.value,"onUpdate:modelValue":t[28]||(t[28]=s=>I.value=s)},{default:o(()=>[l("img",{"w-full":"",src:v.value,alt:"Preview Image"},null,8,nt)]),_:1},8,["modelValue"])]),l("div",dt,[l("div",it,[ut,l("div",ct,[e(P,{modelValue:N.value,"onUpdate:modelValue":t[29]||(t[29]=s=>N.value=s),class:"mx-2",min:0,max:2,step:.01,"controls-position":"right",onHandleChange1:R},null,8,["modelValue"])])]),l("div",rt,[e($,{modelValue:N.value,"onUpdate:modelValue":t[30]||(t[30]=s=>N.value=s),min:0,max:2,step:.01},null,8,["modelValue"])]),l("div",mt,[pt,l("div",_t,[e(P,{modelValue:H.value,"onUpdate:modelValue":t[31]||(t[31]=s=>H.value=s),class:"mx-2",min:0,max:1,step:.01,"controls-position":"right",onHandleChange1:R},null,8,["modelValue"])])]),l("div",vt,[e($,{modelValue:H.value,"onUpdate:modelValue":t[32]||(t[32]=s=>H.value=s),min:0,max:1,step:.01},null,8,["modelValue"])]),l("div",ft,[ht,l("div",bt,[e(P,{modelValue:j.value,"onUpdate:modelValue":t[33]||(t[33]=s=>j.value=s),class:"mx-2",min:0,max:1,step:.01,"controls-position":"right",onHandleChange1:R},null,8,["modelValue"])])]),l("div",Vt,[e($,{modelValue:j.value,"onUpdate:modelValue":t[34]||(t[34]=s=>j.value=s),min:0,max:1,step:.01},null,8,["modelValue"])])])])]),_:1})]),_:1},8,["modelValue"])])]),_:1}),l("div",gt,[e(Rl,{position:"bottom",offset:20},{default:o(()=>[e(g,{type:"primary"},{default:o(()=>[E("立即生成")]),_:1})]),_:1})])]),xt])]),_:1})])}}});const oo=xe(wt,[["__scopeId","data-v-dda44d7a"]]);export{oo as default};
