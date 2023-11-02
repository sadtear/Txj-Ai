import{_ as c}from"./code.7d55339d.js";import{u as a}from"./index.93d1c242.js";import{d as B,o as l,c as i,a as u,u as o,a1 as s,P as r,T as F,R as p,bf as m,be as E}from"./@vue.cb90fff3.js";import{_ as C}from"./vue-drag-resize.44c30f3e.js";import"./element-plus.28f30ed2.js";import"./lodash-es.020a3960.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.54201ba6.js";import"./@element-plus.36ce49f2.js";import"./dayjs.38099f94.js";import"./axios.db0b6952.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.265ebbd3.js";import"./vue-router.bee126d8.js";import"./pinia.66d683d1.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.d9c88729.js";import"./color.8789f62b.js";import"./clone.7ebdaffc.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e8a38282.js";import"./ms.a9ae1d6d.js";import"./nprogress.a77a2697.js";import"./vue-clipboard3.70be7e6e.js";import"./clipboard.551ce183.js";import"./echarts.f889f12e.js";import"./zrender.ec6da783.js";import"./tslib.60310f1a.js";import"./highlight.js.9905ea4d.js";import"./@highlightjs.ae4f7a48.js";const n=t=>(m("data-v-94c9b028"),t=t(),E(),t),d={class:"poster-bg flex flex-col"},D=["src"],x={class:"px-[20px] pt-[120px]"},f={class:"bg-white rounded-lg p-[15px] text-tx-primary"},_=n(()=>u("span",{class:"text-[18px] font-bold"}," \u5B87\u5B99\u7684\u5C3D\u5934\u662F\u4EC0\u4E48\uFF1F\u5B87\u5B99\u7684\u5C3D\u5934\u662F\u4EC0\u4E48\uFF1F\u5B87\u5B99\u7684\u5C3D\u5934\u662F\u4EC0\u4E48\uFF1F\u5B87\u5B99\u2026 ",-1)),h=n(()=>u("br",null,null,-1)),A={class:"px-[20px] pt-[10px]"},g={class:"flex items-center justify-between"},v={class:"flex items-center"},y=["src"],b={class:"ml-[10px] text-[16px]"},w=n(()=>u("div",null,"\u674E\u5BCC\u8D35",-1)),I={key:0},S=n(()=>u("div",null,[u("img",{src:c,alt:"",class:"w-[100px] h-[100px]"}),u("div",null,"\u957F\u6309\u8BC6\u522B\u4E8C\u7EF4\u7801")],-1)),U=B({__name:"content",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})},height:{type:String,default:"170px"}},setup(t){const e=a();return(k,j)=>(l(),i("div",{class:"h-full poster",style:s(t.styles)},[u("div",d,[u("img",{class:"w-full",src:t.content.default==2?o(e).getImageUrl(t.content.posterUrl):t.content.poster==1?o(e).getImageUrl(t.content.defaultUrl1):o(e).getImageUrl(t.content.defaultUrl2),alt:""},null,8,D),u("div",{class:"flex-1 min-h-0",style:s({background:t.content.bgColor})},null,4)]),u("div",{class:"w-full h-full poster-contain1 bg-[#BBBBBB]",style:s({color:t.content.textColor})},[u("div",x,[u("div",f,[_,h,u("span",{class:r(["text-[14px]",{"line-clamp-[1]":t.content.showContentType==1}]),style:s({"-webkit-line-clamp":t.content.contentNum})}," \u76EE\u524D\u6211\u4EEC\u5BF9\u5B87\u5B99\u7684\u5C3D\u5934\u8FD8\u6CA1\u6709\u5B8C\u5168\u7684\u4E86\u89E3\uFF0C\u4E5F\u6CA1\u6709\u786E\u51FF\u7684\u8BC1\u636E\u8BC1\u660E\u5B87\u5B99\u662F\u5426\u6709\u5C3D\u5934\u3002\u6839\u636E\u6211\u4EEC\u76EE\u524D\u5BF9\u5B87\u5B99\u7684\u8BA4\u77E5\uFF0C\u5B87\u5B99\u662F\u65E0\u9650\u7684\uFF0C\u6CA1\u6709\u8FB9\u754C\u3002\u4F46\u662F\uFF0C\u6211\u4EEC\u53EA\u80FD\u89C2\u6D4B\u5230\u5B87\u5B99\u4E2D\u53EF\u89C1\u7684\u90E8\u5206\uFF0C\u800C\u5B87\u5B99\u4E2D\u8FD8\u6709\u5F88\u591A\u6211\u4EEC\u65E0\u6CD5\u89C2\u6D4B \u5230\u7684\u6697\u7269\u8D28\u548C\u6697\u80FD\u91CF\uFF0C\u56E0\u6B64\u6211\u4EEC\u5BF9\u5B87\u5B99\u7684\u8BA4\u8BC6\u8FD8\u6709\u5F88\u591A\u672A\u77E5\u548C\u5F85\u63A2\u7D22\u7684\u9886\u57DF\u3002 \u8FD1\u5E74\u6765\uFF0C\u79D1\u5B66\u5BB6\u4EEC\u901A\u8FC7\u5929\u6587\u89C2\u6D4B\u548C\u7406\u8BBA\u6A21\u578B \u7B49\u624B\u6BB5\uFF0C\u63D0\u51FA\u4E86\u4E00\u4E9B\u6709\u5173\u5B87\u5B99\u5C3D\u5934\u7684\u5047\u8BF4\uFF0C\u5982\u5B87\u5B99\u662F\u4E00\u4E2A\u95ED\u5408\u7684\u7403\u9762\u7A7A\u95F4\u7B49\u3002\u4F46\u8FD9\u4E9B\u5047\u8BF4\u8FD8\u9700\u8981\u66F4\u591A\u7684\u79D1\u5B66\u5B9E\u9A8C\u8BC1\u5B9E\u6216\u5426\u5B9A\u3002\u56E0\u6B64\uFF0C\u5B87\u5B99\u7684\u5C3D\u5934\u4ECD\u7136\u662F\u4E00\u4E2A\u5F85\u89E3\u51B3\u7684\u79D1\u5B66\u95EE\u9898\u3002 ",6)])]),u("div",A,[u("div",g,[u("div",v,[u("img",{src:o(e).getImageUrl(t.content.defaultAvatar),alt:"",class:"w-[60px] h-[60px] rounded-full"},null,8,y),u("div",b,[w,t.content.showData==1?(l(),i("div",I,F(t.content.data),1)):p("",!0)])]),S])])],4)],4))}});const Cu=C(U,[["__scopeId","data-v-94c9b028"]]);export{Cu as default};
