import{_ as e,r as s,B as a,a2 as l,a9 as r,bd as t,aO as o,aS as n,bg as c,o as i,e as g,f as u,k as m,g as p,h as d,t as f,i as I,l as h,F as v,K as k,b9 as w,n as _,b8 as x}from"./index-7044850c.js";import{_ as b}from"./more-right.1c7b5787.js";import{i as y,s as D,k as U,l as j,n as L}from"./skills.7ca36a0a.js";const N=e({__name:"generate",setup(e){const N=s(!1),C=a({title:"正在为您生产您的作品",tips:"您可以退出本页面，在“我的”页面查看您的画作",current:0,swiperList:[],height:"",imgName:"",imgShow:!1,bgImg:"",testImg:"url(../../../static/img/example-item.jpg)",succImg:"../../../static/img/example-item.jpg",progress:"0%",prompt:"",styleName:"",picInfo:{},params:{},refreshData:{},activImg:0});let J=null;l((async e=>{if(console.log("接收传值：",e),e.id)y({id:e.id}).then((s=>{C.params=s,console.log("params",C.params),D(e.id).then((e=>{if(console.log("----",e),C.refreshData=e.taskId,"MJ"==C.params.channel)J=setInterval((()=>{T(C.refreshData)}),5e3);else{C.progress=e.progress,C.succImg=e.masterImageUrl;const s=r();s[s.length-1].route.includes("generate/generate")&&t({url:"/pages/skills/workInfo/workInfo?taskId="+e.id})}}))}));else{let e=JSON.parse(o("generateParams"));C.styleName=e.styleName,C.params=e,S(C.params)}}));(async()=>{C.current=0,console.log("轮播图列表 ===================="),await L({mode:0}).then((e=>{console.log("轮播图列表: ",e),C.swiperList=e})).catch((e=>{console.log("err",e)})),console.log("000000000000000 ",C.swiperList[0].imgUrl)})();const S=e=>{console.log("绘画参数",e),U(e).then((s=>{if(console.log("绘画接口：",s),C.refreshData=s.taskId,"MJ"==e.channel)J=setInterval((()=>{T(C.refreshData)}),5e3);else{C.progress=s.progress,C.succImg=s.masterImageUrl;const e=r();e[e.length-1].route.includes("generate/generate")&&t({url:"/pages/skills/workInfo/workInfo?taskId="+s.id})}})).catch((e=>{console.log("绘画接口报错",e),n({title:e,icon:"none",duration:2e3}),setTimeout((()=>{console.log("返回"),t({url:"/pages/skills/skills"})}),2e3)}))},F=s(!1),M=s(10);let O=null;const T=(e,s)=>{if(console.log("taskId: ",e),""==e)return clearInterval(J),void(J=null);1==s&&q(),N.value||(N.value=!0,j({channel:C.params.channel,taskId:e}).then((e=>{if(C.progress=e.progress,console.log("进度：----",e),2==e.status&&(console.log("制作失败啦！"),clearInterval(J),J=null,setTimeout((()=>{t({url:"/pages/skills/skills"})}),2e3)),3==e.status){console.log("制作完成！"),C.progress=e.progress,clearInterval(J),J=null,C.succImg=e.masterImageUrl;const s=r();s[s.length-1].route.includes("generate/generate")&&t({url:"/pages/skills/workInfo/workInfo?taskId="+e.id})}N.value=!1})).catch((e=>{N.value=!1})))},q=()=>{F.value=!0,O=setInterval((()=>{M.value-=1,M.value<=1&&(clearInterval(O),O=null,F.value=!1,M.value=10)}),1e3)},B=()=>{t({url:"/pages/skills/skills"})},K=e=>{C.current=e.detail.current},P=()=>{F.value||T(C.refreshData,!0)};return c((()=>{clearInterval(J),J=null})),(e,s)=>{const a=k,l=m,r=x,t=w;return i(),g(l,{class:"generate-box flex flex-column"},{default:u((()=>[p(l,{class:"bg-img"},{default:u((()=>{var e;return[p(a,{src:null==(e=C.swiperList[C.current])?void 0:e.imgUrl,mode:""},null,8,["src"])]})),_:1}),p(l,{class:"navbar"},{default:u((()=>[p(a,{src:b,mode:"",class:"back-left",onClick:B})])),_:1}),p(l,{class:"tiele font-bold"},{default:u((()=>[d(f(C.title),1)])),_:1}),p(l,{class:"loading"},{default:u((()=>[p(a,{style:{width:"200rpx",height:"200rpx"},src:"https://qiniu.wiyitools.com/dawn/20230814/c0266d237adc4d89b236535525ade8f9.gif",mode:""})])),_:1}),p(l,{class:"progress"},{default:u((()=>[d(f(C.progress),1)])),_:1}),p(l,{class:"tips"},{default:u((()=>[d(f(C.tips),1)])),_:1}),p(l,{class:"refresh-btn",onClick:P},{default:u((()=>[d(f(F.value?`${M.value}秒后刷新`:"刷新"),1)])),_:1}),p(l,{class:"swiper-box"},{default:u((()=>[p(l,{class:"swiper-title font-bold"},{default:u((()=>[d(" 作品艺廊 ")])),_:1}),p(t,{class:"swiper flex",current:C.current,circular:"","indicator-dots":!1,autoplay:!0,interval:" 3000","previous-margin":"150rpx","next-margin":"150rpx",onChange:K},{default:u((()=>[(i(!0),I(v,null,h(C.swiperList,((e,s)=>(i(),g(r,{class:"swiper-item flex flex-center"},{default:u((()=>[p(a,{class:_(["controls-play img",[{activeImg:C.current==s}]]),src:e.imgUrl,mode:"widthFix"},null,8,["class","src"])])),_:2},1024)))),256))])),_:1},8,["current"])])),_:1})])),_:1})}}},[["__scopeId","data-v-b54b34c9"]]);export{N as default};