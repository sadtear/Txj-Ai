import{_ as e,o as t,e as a,f as s,g as l,n as r,y as n,D as c,k as i,d as o,E as u,x as d,a as f,b as p,G as g,t as m,j as h,i as _,F as y,l as b,u as x,h as v,H as k,J as w,K as C,L as D,M as j,B as S,O as L,C as I,P as N}from"./index-7044850c.js";import{_ as P}from"./page-meta.66d6713f.js";import{_ as B}from"./tabbar.vue_vue_type_script_setup_true_lang.ba1d1694.js";import"./u-icon.593ee39b.js";import"./u-badge.900e45cf.js";const O=e({name:"u-grid-item",emits:["click"],props:{bgColor:{type:String,default:"#ffffff"},index:{type:[Number,String],default:""},customStyle:{type:Object,default:()=>({padding:"30rpx 0"})}},data:()=>({parentData:{hoverClass:"",col:3,border:!0}}),created(){this.updateParentData(),this.parent.children.push(this)},computed:{width(){return 100/Number(this.parentData.col)+"%"}},methods:{updateParentData(){this.getParentData("u-grid")},click(){this.$emit("click",this.index),this.parent&&this.parent.click(this.index)}}},[["render",function(e,o,u,d,f,p){const g=i;return t(),a(g,{class:"u-grid-item","hover-class":f.parentData.hoverClass,"hover-stay-time":200,onClick:p.click,style:n({background:u.bgColor,width:p.width})},{default:s((()=>[l(g,{class:r(["u-grid-item-box",[f.parentData.border?"u-border-right u-border-bottom":""]]),style:n([u.customStyle])},{default:s((()=>[c(e.$slots,"default",{},void 0,!0)])),_:3},8,["style","class"])])),_:3},8,["hover-class","onClick","style"])}],["__scopeId","data-v-75b517e4"]]);const T=e({name:"u-grid",emits:["click"],props:{col:{type:[Number,String],default:3},border:{type:Boolean,default:!0},align:{type:String,default:"left"},hoverClass:{type:String,default:"u-hover-class"}},data:()=>({index:0}),watch:{parentData(){this.children.length&&this.children.map((e=>{"function"==typeof e.updateParentData&&e.updateParentData()}))}},created(){this.children=[]},computed:{parentData(){return[this.hoverClass,this.col,this.size,this.border]},gridStyle(){let e={};switch(this.align){case"left":default:e.justifyContent="flex-start";break;case"center":e.justifyContent="center";break;case"right":e.justifyContent="flex-end"}return e}},methods:{click(e){this.$emit("click",e)}}},[["render",function(e,l,o,u,d,f){const p=i;return t(),a(p,{class:r(["u-grid",{"u-border-top u-border-left":o.border}]),style:n([f.gridStyle])},{default:s((()=>[c(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])}],["__scopeId","data-v-27159421"]]),$=e(o({__name:"my-service",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup(e){const r=u(),{getImageUrl:n}=d();return(c,o)=>{const u=i,d=C,j=D,S=f(p("u-grid-item"),O),L=f(p("u-grid"),T);return t(),a(u,{class:"card-radius mt-4"},{default:s((()=>[l(u,{class:"title1 flex"},{default:s((()=>[e.content.title?(t(),a(u,{key:0,class:"title font-bold"},{default:s((()=>[g("div",null,m(e.content.title),1)])),_:1})):h("",!0)])),_:1}),l(u,{class:"line1"}),l(u,{class:"line2"}),1==e.content.style?(t(),a(u,{key:0,class:"menu-list"},{default:s((()=>[l(L,{border:!1,onClick:c.handleClickBaseFunction,col:4},{default:s((()=>[(t(!0),_(y,null,b(e.content.data,((e,c)=>(t(),a(S,{key:c,bgColor:"#29292e",onClick:t=>{return a=e.link,void(r.isLogin?w(a,!0):k({url:"/pages/login/login"}));var a}},{default:s((()=>[l(d,{src:x(n)(e.image),mode:"",style:{width:"60rpx",height:"60rpx"}},null,8,["src"]),l(j,{class:"grid-text"},{default:s((()=>[v(m(e.name),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1},8,["onClick"])])),_:1})):h("",!0)])),_:1})}}}),[["__scopeId","data-v-fd80c60d"]]);var F,q;(q=F||(F={})).navigate="navigateTo",q.redirect="redirectTo",q.reLaunch="reLaunch",q.switchTab="switchTab",q.navigateBack="navigateBack";const H=Symbol();const J=e(o({__name:"user",setup(e){const r=d();S({nickName:"123",avatar:"",avatarDeft:"https://qiniu.wiyitools.com/dawn/20230814/939c87971fe347249d0c2ee45038d8f7.png",msgCount:0,drawCount:0,vipDay:0}),S([{name:"https://qiniu.wiyitools.com/image/20230924/6826b009-ce4f-47e6-ac12-b49bc7183cf4.png",title:"问答记录",url:"/pages/user/issureList/issureList"}]);const n=S({pages:[]}),c=u(),{userInfo:o,isLogin:g}=L(c);I((()=>{c.getUser(),console.log("userInfo: ",o)})),(async()=>{const e=await N({type:1});n.pages=JSON.parse(e.pages)})(),j(H);const w=e=>{k({url:e})},D=e=>{console.log("是否",!c.isLogin,c.isLogin),c.isLogin?k({url:"/packages/pages/folder_pic/folder_pic?currentTab="+e}):k({url:"/pages/login/login"})};return(e,c)=>{const u=f(p("page-meta"),P),d=i,k=C,j=f(p("w-my-service"),$),S=f(p("tabbar"),B);return t(),_(y,null,[l(u,{"page-style":e.$theme.pageStyle},null,8,["page-style"]),l(d,{class:"user pages"},{default:s((()=>[l(d,{class:"head-box flex space-between flex-align"}),l(d,{class:"header-bg flex flex-align space-betwee"},{default:s((()=>[l(d,{class:"avatar"},{default:s((()=>{var e,s,l;return[x(g)?(t(),a(k,{key:0,class:"avatar-img",mode:"",onClick:c[0]||(c[0]=e=>w("/pages/user_set/user_set")),src:x(o).avatar},null,8,["src"])):(t(),a(k,{key:1,class:"avatar-img",mode:"",src:null==(l=null==(s=null==(e=x(r))?void 0:e.config)?void 0:s.website)?void 0:l.logo},null,8,["src"]))]})),_:1}),l(d,{class:"user-info flex flex-1"},{default:s((()=>[x(g)?(t(),a(d,{key:0,class:"flex flex-column space-between c-f",onClick:c[1]||(c[1]=e=>w("/pages/user_set/user_set"))},{default:s((()=>[l(d,{class:"user-name"},{default:s((()=>[v(m(x(o).nickname),1)])),_:1})])),_:1})):(t(),a(d,{key:1,style:{"min-height":"40rpx"},class:"mt-20 flex-row flex-center c-f",onClick:c[2]||(c[2]=e=>w("/pages/user_set/user_set"))},{default:s((()=>[v(" 请先登录 ")])),_:1}))])),_:1})])),_:1}),l(d,{class:"show-data flex flex-align"},{default:s((()=>[l(d,{class:"show-data-item flex flex-column flex-center flex-1 text-center",onClick:c[3]||(c[3]=e=>D(0))},{default:s((()=>[l(d,{class:"num"},{default:s((()=>[v(m(x(o).drawNum||0),1)])),_:1}),l(d,{class:"label"},{default:s((()=>[v(" 绘画作品 ")])),_:1})])),_:1}),l(d,{class:"Divider"}),l(d,{class:"show-data-item flex flex-column flex-center flex-1 text-center",onClick:c[4]||(c[4]=e=>D(1))},{default:s((()=>[l(d,{class:"num"},{default:s((()=>[v(m(x(o).collectNum||0),1)])),_:1}),l(d,{class:"label"},{default:s((()=>[v(" 我的收藏 ")])),_:1})])),_:1}),l(d,{class:"Divider"}),l(d,{class:"show-data-item flex flex-column flex-center flex-1 text-center"},{default:s((()=>[l(d,{class:"num"},{default:s((()=>[v(m(x(o).balance||0),1)])),_:1}),l(d,{class:"label"},{default:s((()=>[v(" 对话次数 ")])),_:1})])),_:1}),l(d,{class:"Divider"}),l(d,{class:"show-data-item flex flex-column flex-center flex-1 text-center"},{default:s((()=>[l(d,{class:"num"},{default:s((()=>[v(m(x(o).balanceDraw||0),1)])),_:1}),l(d,{class:"label"},{default:s((()=>[v(" 绘画次数 ")])),_:1})])),_:1})])),_:1}),(t(!0),_(y,null,b(n.pages,((e,l)=>(t(),a(d,{class:"mt-30",key:l},{default:s((()=>["my-service"==e.name?(t(),a(j,{key:0,content:e.content,styles:e.styles},null,8,["content","styles"])):h("",!0)])),_:2},1024)))),128)),l(S)])),_:1})],64)}}}),[["__scopeId","data-v-a84a8bb5"]]);export{J as default};