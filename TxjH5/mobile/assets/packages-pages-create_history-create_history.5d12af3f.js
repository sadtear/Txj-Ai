import{d as e,x as a,B as t,r as l,A as s,a2 as o,o as r,i,g as u,f as p,ap as n,aq as m,h as c,t as d,e as f,j as x,F as _,l as y,aR as v,an as g,a as h,b as j,k as w,K as b,S as k,u as C}from"./index-7044850c.js";import{_ as V}from"./page-meta.66d6713f.js";import{_ as T}from"./u-image.a4ee0c05.js";import{_ as $,a as z}from"./create_record.d15dea62.js";import{_ as F}from"./z-paging.9d3db72c.js";import{_ as K}from"./u-popup.449ebc77.js";import{j as R,a as S,f as U}from"./chat.e60728da.js";import{u as q}from"./useCopy.e03ce727.js";import"./u-icon.593ee39b.js";import"./text-item.vue_vue_type_script_setup_true_lang.3f8512ea.js";import"./_commonjsHelpers.5f26be78.js";const A=e({__name:"create_history",setup(e){const{copy:A}=q();a();const B=t({id:0,type:2}),D=l({}),H=l(!1),I=t({title:"",text:""}),M=l([]),N=s(),P=async(e,a)=>{var t;const l=(await S({otherId:B.id,type:B.type})).map((e=>{let a="";if(v(e.ask)){const t=(null==e?void 0:e.ask[0])||{};a=`${t.title}：${t.value}`}else a=e.ask;return{...e,title:a}}));null==(t=N.value)||t.complete(l)},Q=async()=>{var e;(await g({title:"温馨提示",content:"删除的记录无法恢复，确定？"})).cancel||(await U({type:B.type,other_id:B.id}),null==(e=N.value)||e.reload())};return o((async e=>{var a;B.id=Number(null==e?void 0:e.id),await(async()=>{const e=await R({id:B.id});D.value=e})(),null==(a=N.value)||a.reload(!0)})),(e,a)=>{const t=h(j("page-meta"),V),l=h(j("u-image"),T),s=w,o=h(j("creation-history-item"),z),v=b,g=h(j("z-paging"),F),R=k,S=h(j("u-popup"),K);return r(),i(_,null,[u(t,{"page-style":e.$theme.pageStyle},null,8,["page-style"]),u(g,{ref_key:"pagingRef",ref:N,auto:!1,modelValue:M.value,"onUpdate:modelValue":a[0]||(a[0]=e=>M.value=e),"auto-show-back-to-top":"",onQuery:P},{top:p((()=>[n(u(s,{class:"flex items-center p-[20rpx]"},{default:p((()=>[u(l,{src:D.value.image,width:"42",height:"42"},null,8,["src"]),u(s,{class:"flex-1 min-w-0 text-xl font-medium line-clamp-1 mx-[20rpx]"},{default:p((()=>[c(d(D.value.name),1)])),_:1}),M.value.length?(r(),f(s,{key:0,class:"text-sm",onClick:Q},{default:p((()=>[c(" 清空记录 ")])),_:1})):x("",!0)])),_:1},512),[[m,D.value.name]])])),empty:p((()=>[u(s,{class:"flex flex-col justify-center items-center pb-[300rpx]"},{default:p((()=>[u(v,{class:"w-[300rpx] h-[300rpx]",src:$,alt:""}),u(s,{class:"my-[32rpx] text-muted"},{default:p((()=>[c(" 暂无数据～ ")])),_:1})])),_:1})])),default:p((()=>[u(s,{class:"px-[20rpx]"},{default:p((()=>[(r(!0),i(_,null,y(M.value,(e=>(r(),f(s,{class:"mt-[20rpx]",key:e.id},{default:p((()=>[u(o,{title:e.ask,time:e.createTime,content:e.reply,overflow:!0,onCopy:C(A),onDelete:Q,onClickTitle:a=>{return t=a,l=e.title,I.text=t,I.title=l,void(H.value=!0);var t,l}},null,8,["title","time","content","onCopy","onClickTitle"])])),_:2},1024)))),128))])),_:1})])),_:1},8,["modelValue"]),u(S,{modelValue:H.value,"onUpdate:modelValue":a[1]||(a[1]=e=>H.value=e),mode:"bottom","border-radius":"14",closeable:""},{default:p((()=>[u(s,{class:"h-[85vh] flex flex-col"},{default:p((()=>[u(s,{class:"p-[30rpx] pr-[60rpx] text-xl font-medium border-0 border-b border-light border-solid"},{default:p((()=>[u(s,{class:"line-clamp-1"},{default:p((()=>[c(" 标题详情 ")])),_:1})])),_:1}),u(s,{class:"flex-1 min-h-0"},{default:p((()=>[u(R,{class:"h-full","scroll-y":""},{default:p((()=>[u(s,{class:"p-[30rpx]"},{default:p((()=>[u(s,{class:"flex-1 min-w-0 text-lg whitespace-pre-wrap"},{default:p((()=>[c(d(I.title),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}});export{A as default};