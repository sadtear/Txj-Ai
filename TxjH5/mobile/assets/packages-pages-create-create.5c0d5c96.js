import{bJ as e,bK as t,bL as a,bM as l,bN as o,bO as r,bP as u,bQ as s,bR as n,aR as c,bS as i,bT as d,bU as p,bV as f,bW as m,bX as v,bY as b,bZ as y,b_ as x,b$ as _,c0 as h,c1 as g,c2 as j,c3 as V,c4 as w,c5 as k,d as A,c as U,a as I,b as C,o as L,e as O,f as S,g as R,bn as W,u as q,m as B,h as M,t as $,j as D,k as P,_ as E,p as F,i as T,F as z,l as N,n as J,r as K,A as H,w as G,E as Q,x as X,B as Y,a2 as Z,$ as ee,aJ as te,W as ae,aS as le,T as oe,K as re,L as ue,bk as se,am as ne}from"./index-7044850c.js";import{_ as ce}from"./page-meta.66d6713f.js";import{_ as ie}from"./u-image.a4ee0c05.js";import{_ as de}from"./u-form-item.9f9aa37f.js";import{_ as pe}from"./u-form.17c058c3.js";import{_ as fe}from"./u-input.1eff233e.js";import{_ as me}from"./u-icon.593ee39b.js";import{_ as ve}from"./u-select.d8e58a6c.js";import{_ as be,a as ye}from"./create_record.d15dea62.js";import{_ as xe}from"./u-button.5deae2bc.js";import{_ as _e}from"./u-picker.28f70a2f.js";import{u as he,w as ge,_ as je}from"./index.e66e4f7b.js";import{k as Ve,j as we,h as ke}from"./chat.e60728da.js";import{t as Ae}from"./date.7d6fe851.js";import{u as Ue}from"./useCopy.e03ce727.js";import{u as Ie}from"./useLockFn.b248adc4.js";import"./u-popup.449ebc77.js";import"./text-item.vue_vue_type_script_setup_true_lang.3f8512ea.js";import"./_commonjsHelpers.5f26be78.js";const Ce=e(t,"WeakMap");const Le=a(Object.keys,Object);var Oe=Object.prototype.hasOwnProperty;function Se(e){return o(e)?r(e):function(e){if(!l(e))return Le(e);var t=[];for(var a in Object(e))Oe.call(e,a)&&"constructor"!=a&&t.push(a);return t}(e)}function Re(e,t){for(var a=-1,l=t.length,o=e.length;++a<l;)e[o+a]=t[a];return e}function We(){return[]}var qe=Object.prototype.propertyIsEnumerable,Be=Object.getOwnPropertySymbols;const Me=Be?function(e){return null==e?[]:(e=Object(e),function(e,t){for(var a=-1,l=null==e?0:e.length,o=0,r=[];++a<l;){var u=e[a];t(u,a,e)&&(r[o++]=u)}return r}(Be(e),(function(t){return qe.call(e,t)})))}:We;const $e=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)Re(t,Me(e)),e=n(e);return t}:We;function De(e,t,a){var l=t(e);return c(e)?l:Re(l,a(e))}function Pe(e){return De(e,Se,Me)}function Ee(e){return De(e,s,$e)}const Fe=e(t,"DataView");const Te=e(t,"Promise");const ze=e(t,"Set");var Ne="[object Map]",Je="[object Promise]",Ke="[object Set]",He="[object WeakMap]",Ge="[object DataView]",Qe=i(Fe),Xe=i(p),Ye=i(Te),Ze=i(ze),et=i(Ce),tt=d;(Fe&&tt(new Fe(new ArrayBuffer(1)))!=Ge||p&&tt(new p)!=Ne||Te&&tt(Te.resolve())!=Je||ze&&tt(new ze)!=Ke||Ce&&tt(new Ce)!=He)&&(tt=function(e){var t=d(e),a="[object Object]"==t?e.constructor:void 0,l=a?i(a):"";if(l)switch(l){case Qe:return Ge;case Xe:return Ne;case Ye:return Je;case Ze:return Ke;case et:return He}return t});const at=tt;var lt=Object.prototype.hasOwnProperty;var ot=/\w*$/;var rt=m?m.prototype:void 0,ut=rt?rt.valueOf:void 0;var st="[object Boolean]",nt="[object Date]",ct="[object Map]",it="[object Number]",dt="[object RegExp]",pt="[object Set]",ft="[object String]",mt="[object Symbol]",vt="[object ArrayBuffer]",bt="[object DataView]",yt="[object Float32Array]",xt="[object Float64Array]",_t="[object Int8Array]",ht="[object Int16Array]",gt="[object Int32Array]",jt="[object Uint8Array]",Vt="[object Uint8ClampedArray]",wt="[object Uint16Array]",kt="[object Uint32Array]";function At(e,t,a){var l,o,r,u=e.constructor;switch(t){case vt:return f(e);case st:case nt:return new u(+e);case bt:return function(e,t){var a=t?f(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.byteLength)}(e,a);case yt:case xt:case _t:case ht:case gt:case jt:case Vt:case wt:case kt:return v(e,a);case ct:return new u;case it:case ft:return new u(e);case dt:return(r=new(o=e).constructor(o.source,ot.exec(o))).lastIndex=o.lastIndex,r;case pt:return new u;case mt:return l=e,ut?Object(ut.call(l)):{}}}var Ut=y&&y.isMap;const It=Ut?x(Ut):function(e){return b(e)&&"[object Map]"==at(e)};var Ct=y&&y.isSet;const Lt=Ct?x(Ct):function(e){return b(e)&&"[object Set]"==at(e)};var Ot=1,St=2,Rt=4,Wt="[object Arguments]",qt="[object Function]",Bt="[object GeneratorFunction]",Mt="[object Object]",$t={};function Dt(e,t,a,l,o,r){var n,i=t&Ot,d=t&St,p=t&Rt;if(a&&(n=o?a(e,l,o,r):a(e)),void 0!==n)return n;if(!_(e))return e;var f=c(e);if(f){if(n=function(e){var t=e.length,a=new e.constructor(t);return t&&"string"==typeof e[0]&&lt.call(e,"index")&&(a.index=e.index,a.input=e.input),a}(e),!i)return h(e,n)}else{var m=at(e),v=m==qt||m==Bt;if(g(e))return j(e,i);if(m==Mt||m==Wt||v&&!o){if(n=d||v?{}:V(e),!i)return d?function(e,t){return u(e,$e(e),t)}(e,function(e,t){return e&&u(t,s(t),e)}(n,e)):function(e,t){return u(e,Me(e),t)}(e,function(e,t){return e&&u(t,Se(t),e)}(n,e))}else{if(!$t[m])return o?e:{};n=At(e,m,i)}}r||(r=new w);var b=r.get(e);if(b)return b;r.set(e,n),Lt(e)?e.forEach((function(l){n.add(Dt(l,t,a,l,e,r))})):It(e)&&e.forEach((function(l,o){n.set(o,Dt(l,t,a,o,e,r))}));var y=f?void 0:(p?d?Ee:Pe:d?s:Se)(e);return function(e,t){for(var a=-1,l=null==e?0:e.length;++a<l&&!1!==t(e[a],a,e););}(y||e,(function(l,o){y&&(l=e[o=l]),k(n,o,Dt(l,t,a,o,e,r))})),n}$t[Wt]=$t["[object Array]"]=$t["[object ArrayBuffer]"]=$t["[object DataView]"]=$t["[object Boolean]"]=$t["[object Date]"]=$t["[object Float32Array]"]=$t["[object Float64Array]"]=$t["[object Int8Array]"]=$t["[object Int16Array]"]=$t["[object Int32Array]"]=$t["[object Map]"]=$t["[object Number]"]=$t[Mt]=$t["[object RegExp]"]=$t["[object Set]"]=$t["[object String]"]=$t["[object Symbol]"]=$t["[object Uint8Array]"]=$t["[object Uint8ClampedArray]"]=$t["[object Uint16Array]"]=$t["[object Uint32Array]"]=!0,$t["[object Error]"]=$t[qt]=$t["[object WeakMap]"]=!1;function Pt(e){return Dt(e,5)}const Et=E(A({__name:"input",props:{modelValue:{default:""},placeholder:{default:"请输入"},showWordLimit:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(e,{emit:t}){const a=e,l=U({get:()=>a.modelValue,set(e){t("update:modelValue",e)}});return(t,a)=>{const o=I(C("u-input"),fe),r=P;return L(),O(r,{class:"widget-input"},{default:S((()=>[R(o,W({class:"flex-1 min-w-0",modelValue:q(l),"onUpdate:modelValue":a[0]||(a[0]=e=>B(l)?l.value=e:null),placeholder:e.placeholder,height:"70","placeholder-style":"color: #999"},t.$attrs),null,16,["modelValue","placeholder"]),e.showWordLimit?(L(),O(r,{key:0,class:"text-xs text-muted ml-[20rpx]"},{default:S((()=>{var e;return[M($(null==(e=q(l))?void 0:e.length)+" / "+$(t.$attrs.maxlength),1)]})),_:1})):D("",!0)])),_:1})}}}),[["__scopeId","data-v-2f727c0a"]]),Ft=E(A({__name:"textarea",props:{modelValue:{default:""},placeholder:{default:"请输入"},rows:{default:1},showWordLimit:{type:Boolean,default:!0},autosize:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const a=e,l=U({get:()=>a.modelValue,set(e){t("update:modelValue",e)}}),o=U((()=>({height:a.autosize?"auto":40*a.rows+"rpx",minHeight:"80rpx",fontSize:"28rpx"})));return(t,a)=>{const r=I(C("u-input"),fe),u=P;return L(),O(u,{class:"widget-textarea"},{default:S((()=>[R(r,{class:"w-full",modelValue:q(l),"onUpdate:modelValue":a[0]||(a[0]=e=>B(l)?l.value=e:null),placeholder:e.placeholder,"auto-height":e.autosize,"custom-style":q(o),"placeholder-style":"color: #999",maxlength:t.$attrs.maxlength,type:"textarea"},null,8,["modelValue","placeholder","auto-height","custom-style","maxlength"]),e.showWordLimit?(L(),O(u,{key:0,class:"text-xs bg-page text-muted absolute right-[20rpx] bottom-[10rpx] leading-[28rpx]",style:{"background-color":"#1c1c1e"}},{default:S((()=>{var e;return[M($(null==(e=q(l))?void 0:e.length)+" / "+$(t.$attrs.maxlength),1)]})),_:1})):D("",!0)])),_:1})}}}),[["__scopeId","data-v-97d07648"]]),Tt=E(A({__name:"radio",props:{defaultValue:null,modelValue:{default:""},options:{default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:t}){const a=e,l=U({get:()=>a.modelValue,set(e){t("update:modelValue",e)}});return F((()=>{a.defaultValue&&(l.value=a.defaultValue)})),(t,a)=>{const o=P;return L(),O(o,{class:"widget-radio"},{default:S((()=>[R(o,{class:"radio-group"},{default:S((()=>[(L(!0),T(z,null,N(e.options,((e,t)=>(L(),O(o,{class:J(["radio-item",{"radio-item--active":q(l)===e}]),key:t,onClick:t=>l.value=e},{default:S((()=>[M($(e),1)])),_:2},1032,["onClick","class"])))),128))])),_:1})])),_:1})}}}),[["__scopeId","data-v-c1ff67bd"]]),zt=E(A({__name:"select",props:{defaultValue:null,modelValue:{default:""},options:{default:()=>[]},placeholder:{default:"请输入"}},emits:["update:modelValue"],setup(e,{emit:t}){const a=e,l=U({get:()=>a.modelValue,set(e){t("update:modelValue",e)}}),o=K(!1),r=U((()=>a.options.map((e=>({value:e,label:e}))))),u=e=>{l.value=e[0].value};return F((()=>{a.defaultValue&&(l.value=a.defaultValue)})),(t,a)=>{const s=I(C("u-input"),fe),n=P,c=I(C("u-icon"),me),i=I(C("u-select"),ve);return L(),T(z,null,[R(n,{class:"widget-select"},{default:S((()=>[R(n,{class:"flex-1"},{default:S((()=>[R(s,{modelValue:q(l),"onUpdate:modelValue":a[0]||(a[0]=e=>B(l)?l.value=e:null),height:"70",placeholder:e.placeholder,type:"text","placeholder-style":"color: #999",disabled:"",clearable:"",onClick:a[1]||(a[1]=e=>o.value=!0)},null,8,["modelValue","placeholder"])])),_:1}),R(n,{class:J(["text-muted arrow-icon",{"arrow-icon--top":o.value}])},{default:S((()=>[R(c,{name:"arrow-down"})])),_:1},8,["class"])])),_:1}),R(i,{modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=e=>o.value=e),list:q(r),onConfirm:u},null,8,["modelValue","list"])],64)}}}),[["__scopeId","data-v-4fc70f0c"]]),Nt=E(A({__name:"checkbox",props:{defaultValue:null,modelValue:{default:()=>[]},options:{default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:t}){const a=e,l=U({get:()=>a.modelValue,set(e){t("update:modelValue",e)}}),o=e=>l.value.includes(e);return F((()=>{a.defaultValue&&(l.value=a.defaultValue)})),(t,a)=>{const r=P;return L(),O(r,{class:"widget-radio"},{default:S((()=>[R(r,{class:"radio-group"},{default:S((()=>[(L(!0),T(z,null,N(e.options,((e,t)=>(L(),O(r,{class:J(["radio-item",{"radio-item--active":o(e)}]),key:t,onClick:t=>(e=>{var t,a,o;const r=null==(t=l.value)?void 0:t.findIndex((t=>e===t));-1===r?null==(a=l.value)||a.push(e):null==(o=l.value)||o.splice(r,1)})(e)},{default:S((()=>[M($(e),1)])),_:2},1032,["onClick","class"])))),128))])),_:1})])),_:1})}}}),[["__scopeId","data-v-d26889f9"]]),Jt=A({__name:"form-designer",props:{formLists:{default:()=>[]},modelValue:null,labelPosition:{default:"top"},borderBottom:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{expose:t,emit:a}){const l=e,o=H(),r=U({get:()=>l.modelValue,set(e){a("update:modelValue",e)}}),u=K({});return G((()=>l.formLists),(e=>{u.value=null==e?void 0:e.reduce(((e,t)=>(t.props.isRequired&&(e[t.props.field]=[{required:!0}]),e)),{}),setTimeout((()=>{var e;null==(e=o.value)||e.setRules(u.value),console.log(o.value)}),50)}),{immediate:!0}),t({validate:async()=>new Promise(((e,t)=>{var a;null==(a=o.value)||a.validate((a=>{a?e(!0):t()}))}))}),(t,a)=>{const s=I(C("u-form-item"),de),n=I(C("u-form"),pe);return L(),O(n,W({model:q(r),ref_key:"formRef",ref:o},{...t.$attrs,...l},{"error-type":["none"],rules:u.value}),{default:S((()=>[(L(!0),T(z,null,N(e.formLists,(t=>(L(),O(s,{key:t.id,prop:t.id,label:t.props.title,borderBottom:e.borderBottom,required:t.props.isRequired,labelStyle:{color:"#fff"}},{default:S((()=>["WidgetInput"===t.name?(L(),O(Et,W({key:0,class:"w-full"},t.props,{modelValue:q(r)[t.props.field],"onUpdate:modelValue":e=>q(r)[t.props.field]=e}),null,16,["modelValue","onUpdate:modelValue"])):"WidgetTextarea"===t.name?(L(),O(Ft,W({key:1,class:"w-full"},t.props,{modelValue:q(r)[t.props.field],"onUpdate:modelValue":e=>q(r)[t.props.field]=e,style:{backgroundColor:"#1c1c1e"}}),null,16,["modelValue","onUpdate:modelValue"])):"WidgetRadio"===t.name?(L(),O(Tt,W({key:2},t.props,{modelValue:q(r)[t.props.field],"onUpdate:modelValue":e=>q(r)[t.props.field]=e}),null,16,["modelValue","onUpdate:modelValue"])):"WidgetSelect"===t.name?(L(),O(zt,W({key:3,class:"w-full"},t.props,{modelValue:q(r)[t.props.field],"onUpdate:modelValue":e=>q(r)[t.props.field]=e}),null,16,["modelValue","onUpdate:modelValue"])):"WidgetCheckbox"===t.name?(L(),O(Nt,W({key:4},t.props,{modelValue:q(r)[t.props.field],"onUpdate:modelValue":e=>q(r)[t.props.field]=e}),null,16,["modelValue","onUpdate:modelValue"])):D("",!0)])),_:2},1032,["prop","label","borderBottom","required"])))),128))])),_:1},16,["model","rules"])}}}),Kt=E(A({__name:"create",setup(e){const t=Q(),a=[{name:"WidgetTextarea",title:"多行文本",id:"question",props:{title:"内容描述",placeholder:"",rows:8,maxlength:400,autosize:!1,isRequired:!1}}],l=H();X();const{copy:o}=Ue(),r=Y({id:0,type:1,token:""}),u=H(),s=H(),n=K([]),c=K({}),i=K({}),d=K([]),p=Y({show:!1,current:{balance:1,key:"",member_free:!1,model:"",default:!1},modelList:[]});(async()=>{try{const e=await Ve();p.modelList=e,p.current=e.find((e=>e.default))||e[0]}catch(e){console.log("获取聊天模型数据错误=>",e)}})();const f=e=>{p.current=p.modelList[e[0]]},m=K(!1),v=()=>{var e;if(c.value.question)return c.value.question;const t=(null==(e=i.value)?void 0:e.form[0])||{};return`${t.props.title}：${c.value[t.props.field]||""}`},b=async()=>{var e,a;if(1!=p.current.member_free&&t.userInfo.balance<p.current.balance)le({title:"请联系管理员",icon:"none"});else{try{await(null==(e=u.value)?void 0:e.validate())}catch(o){return void uni.$u.toast("必填项不能为空")}console.log("formData: ",c.value);try{m.value=!0,await ke({modelKey:(null==(a=null==p?void 0:p.current)?void 0:a.key)||"",otherId:r.id,form:c.value.question?void 0:c.value,question:c.value.question,type:2},{onstart(e){n.value.length&&(n.value=[])},onmessage(e){e.trim().split("data:").forEach((e=>{var t;if(""!==e)try{const a=JSON.parse(e),{id:o,event:r,data:u,index:s,error:i}=a;if(i&&101==(null==i?void 0:i.errCode)?null==(t=l.value)||t.open():i&&(uni.$u.toast(i.errMsg),m.value=!1),"finish"===r||!o)return;let d=n.value.findIndex((e=>e.id===o));if(-1===d&&(n.value.push({create_time:Ae(new Date,"yyyy-mm-dd hh:MM:ss"),title:c.value.question?c.value.question:v(),reply:[],id:o}),d=n.value.length-1),u&&(n.value[d].reply[s]||(n.value[d].reply[s]=""),n.value[d].reply[s]+=u),"finish"===r)return void x()}catch(o){}}))},onclose(){setTimeout((()=>{m.value=!1}),500)}})}catch(o){m.value=!1}}},y=()=>{var e;null==(e=i.value)||e.form.forEach((e=>{e.props.placeholder&&!e.props.defaultValue&&(c.value[e.props.field]=e.props.placeholder)}))},x=()=>{var e;null==(e=i.value)||e.form.forEach((e=>{console.log("item: ",e),e.props.defaultValue?(console.log("cloneDeep: ",Pt(e.props.defaultValue)),c.value[e.props.field]=Pt(e.props.defaultValue)):c.value[e.props.field]=void 0,console.log("formData: ",c.value)}))},_=oe(),{lockFn:h}=Ie((async e=>{e&&(se({scrollTop:0,duration:0}),c.value=e,await ne(),b())})),g=()=>_.navigateTo({path:"/packages/pages/create_history/create_history",query:{id:r.id}}),{height:j}=he(s);return ge(j,(()=>{m.value&&se({selector:"#bottom-line",duration:0})}),{throttle:200}),Z((async e=>{r.id=Number(null==e?void 0:e.id),r.type=Number(null==e?void 0:e.type),await(async()=>{const e=await we({id:r.id});e.form=e.formJson,i.value=e,i.value.form||(i.value.form=a),console.log("form: ",i.value.form),d.value=Pt(i.value.form),x()})(),ee("createRewrite",(e=>{h(e)}))})),te((()=>{ae("createRewrite")})),(e,a)=>{const r=I(C("page-meta"),ce),v=I(C("u-image"),ie),_=P,j=I(C("form-designer"),Jt),V=I(C("creation-history-item"),ye),w=re,k=ue,A=I(C("u-icon"),me),U=I(C("u-button"),xe),W=I(C("u-picker"),_e),B=I(C("guided-popup"),je);return L(),T(z,null,[R(r,{"page-style":e.$theme.pageStyle},null,8,["page-style"]),i.value.name?(L(),O(_,{key:0,class:"safe-area-inset-bottom bg1"},{default:S((()=>[R(_,{class:"pt-[20rpx] pb-[220rpx]"},{default:S((()=>[R(_,{class:"px-[20rpx]"},{default:S((()=>[R(_,{class:"px-[30rpx] py-[24rpx] flex rounded-[14rpx] bg-c items-center"},{default:S((()=>[R(v,{src:i.value.image,width:"84",height:"84"},null,8,["src"]),R(_,{class:"flex-1 min-w-0 ml-[20rpx]"},{default:S((()=>[R(_,{class:"text-xl font-medium fc"},{default:S((()=>[M($(i.value.name),1)])),_:1}),i.value.tips?(L(),O(_,{key:0,class:"text-content line-clamp-2 text-xs mt-[10rpx]"},{default:S((()=>[M($(i.value.tips),1)])),_:1})):D("",!0)])),_:1})])),_:1}),R(_,{class:"px-[30rpx] py-[24rpx] rounded-[14rpx] bg-c mt-[20rpx]"},{default:S((()=>[R(j,{ref_key:"formDesignerRef",ref:u,formLists:d.value,modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=e=>c.value=e)},null,8,["formLists","modelValue"]),R(_,{class:"bg-[#9c50f4] text-xs rounded-full inline-block px-[30rpx] py-[14rpx] text-[#fff] mt-[10rpx]",onClick:y},{default:S((()=>[M(" 不知道写啥？点击插入示例 👈🏻 ")])),_:1})])),_:1})])),_:1}),R(_,null,{default:S((()=>[R(_,{class:"flex items-center px-[20rpx] py-[30rpx]"},{default:S((()=>[R(_,{class:"text-lg font-medium mr-auto fc"},{default:S((()=>[M(" 本次创作结果 ")])),_:1}),R(_,{class:"text-content fc",onClick:g},{default:S((()=>[M(" 创作历史 ")])),_:1})])),_:1}),R(_,null,{default:S((()=>[R(_,{class:"current-history",ref_key:"currentHistoryRef",ref:s},{default:S((()=>[R(_,{class:"px-[20rpx]"},{default:S((()=>[(L(!0),T(z,null,N(n.value,(e=>(L(),O(_,{class:"mt-[20rpx]",key:e.id},{default:S((()=>[R(V,{title:e.title,time:e.createTime,content:e.reply,showDelete:!1,"show-rewrite":!1,onCopy:q(o),onRewrite:t=>q(h)(e.extra)},null,8,["title","time","content","onCopy","onRewrite"])])),_:2},1024)))),128))])),_:1})])),_:1},512)])),_:1})])),_:1}),n.value.length?D("",!0):(L(),O(_,{key:0,class:"flex flex-col justify-center items-center pb-[200rpx]"},{default:S((()=>[R(w,{class:"w-[300rpx] h-[300rpx]",src:be,alt:""}),R(_,{class:"my-[32rpx] font-medium fc"},{default:S((()=>[M(" AI创作结果会在显示这里，现在你只需要 ")])),_:1}),R(_,null,{default:S((()=>[R(_,{class:"text-content text-sm"},{default:S((()=>[M(" 1.填写越详细，结果越准确哦 ")])),_:1}),R(_,{class:"text-content text-sm"},{default:S((()=>[M(" 2.点击立即生成按钮，一般在10秒内搞定 ")])),_:1})])),_:1})])),_:1}))])),_:1}),R(_,{id:"bottom-line",class:"h-[1px]"}),R(_,{class:"safe-area-inset-bottom bg1 fixed bottom-0 left-0 w-full bg-c z-10"},{default:S((()=>[R(_,{class:"p-[20rpx]"},{default:S((()=>[p.modelList.length?(L(),O(_,{key:0,class:"flex items-center justify-between text-xs pb-[20rpx]"},{default:S((()=>{var e;return[R(_,{class:"inline-flex justify-center items-center rounded-[30px] h-[60rpx] px-[24rpx]",style:{"box-shadow":"0 2px 6px 0 rgba(0, 0, 0, 0.1)"},onClick:a[1]||(a[1]=e=>p.show=!0)},{default:S((()=>[R(k,{class:"text-[#415058] mr-[6px] fc"},{default:S((()=>[M($(p.current.alias),1)])),_:1}),R(A,{name:"arrow-down",size:"24rpx",color:"#fff"})])),_:1}),(null==(e=null==p?void 0:p.current)?void 0:e.member_free)&&q(t).userInfo.isMember?(L(),O(_,{key:1,class:"ml-[10px] text-[#999999]"},{default:S((()=>[M(" 已开通会员，不消耗条数 ")])),_:1})):(L(),O(_,{key:0,class:"ml-[10px] text-[#999999]"},{default:S((()=>[R(k,null,{default:S((()=>[M("消耗 ")])),_:1}),R(k,{class:"text-primary"},{default:S((()=>{var e;return[M($((null==(e=null==p?void 0:p.current)?void 0:e.balance)||0),1)]})),_:1}),R(k,null,{default:S((()=>[M(" 条对话次数")])),_:1})])),_:1}))]})),_:1})):D("",!0),R(_,{class:"flex"},{default:S((()=>[R(_,{class:"w-[40%]"},{default:S((()=>[R(U,{hairLine:!1,"custom-style":{width:"100%",border:"none",background:"#f5f5f5"},onClick:x},{default:S((()=>[R(A,{name:"trash"}),M(" 重置内容 ")])),_:1})])),_:1}),R(_,{class:"flex-1 ml-[20rpx]"},{default:S((()=>[R(U,{type:"primary",loading:m.value,"custom-style":{width:"100%"},onClick:b},{default:S((()=>[M(" 立即生成 ")])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1}),R(W,{modelValue:p.show,"onUpdate:modelValue":a[2]||(a[2]=e=>p.show=e),"safe-area-inset-bottom":!0,"confirm-color":e.$theme.primaryColor,mode:"selector",range:p.modelList,"range-key":"alias",onConfirm:f},null,8,["modelValue","confirm-color","range"]),R(B,{ref_key:"guidedPopupRef",ref:l},null,512)])),_:1})):D("",!0)],64)}}}),[["__scopeId","data-v-9e6c9101"]]);export{Kt as default};