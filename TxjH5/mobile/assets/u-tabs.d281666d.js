import{_ as t,aZ as e,aB as i,a,b as s,o as r,e as l,f as n,g as o,n as u,i as d,F as h,l as c,y as f,h as b,t as m,j as p,k as y,S as g}from"./index-7044850c.js";import{_ as x}from"./u-badge.900e45cf.js";/* empty css                                                               */const S=t({name:"u-tabs",emits:["update:modelValue","input","change"],props:{value:{type:[Number,String],default:0},modelValue:{type:[Number,String],default:0},current:{type:[Number,String],default:0},isScroll:{type:Boolean,default:!0},list:{type:Array,default:()=>[]},height:{type:[String,Number],default:80},fontSize:{type:[String,Number],default:30},duration:{type:[String,Number],default:.5},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#303133"},barWidth:{type:[String,Number],default:40},barHeight:{type:[String,Number],default:6},gutter:{type:[String,Number],default:30},bgColor:{type:String,default:"#ffffff"},name:{type:String,default:"name"},count:{type:String,default:"count"},offset:{type:Array,default:()=>[5,20]},bold:{type:Boolean,default:!0},activeItemStyle:{type:Object,default:()=>({})},showBar:{type:Boolean,default:!0},barStyle:{type:Object,default:()=>({})},itemWidth:{type:[Number,String],default:"auto"}},data(){return{scrollLeft:0,tabQueryInfo:[],componentWidth:0,scrollBarLeft:0,parentLeft:0,id:this.$u.guid(),currentIndex:this.current,barFirstTimeMove:!0}},watch:{list:{immediate:!0,handler(t,e){e&&t.length!==e.length&&(this.currentIndex=0),setTimeout((()=>{this.init()}),200)}},current:{immediate:!0,handler(t,e){this.$nextTick((()=>{this.currentIndex=t,this.scrollByIndex()}))}},valueCom:{immediate:!0,handler(t,e){this.$nextTick((()=>{this.currentIndex=t,this.scrollByIndex()}))}}},computed:{valueCom(){return this.modelValue},tabBarStyle(){let t={width:this.barWidth+"rpx",transform:`translate(${this.scrollBarLeft}px, -100%)`,"transition-duration":`${this.barFirstTimeMove?0:this.duration}s`,"background-color":this.activeColor,height:this.barHeight+"rpx","border-radius":this.barHeight/2+"px"};return Object.assign(t,this.barStyle),t},tabItemStyle(){return t=>{let e={height:this.height+"rpx","line-height":this.height+"rpx","font-size":this.fontSize+"rpx","transition-duration":`${this.duration}s`,padding:this.isScroll?`0 ${this.gutter}rpx`:"",flex:this.isScroll?"auto":"1",width:this.$u.addUnit(this.itemWidth)};return t==this.currentIndex&&this.bold&&(e.fontWeight="bold"),t==this.currentIndex?(e.color=this.activeColor,e=Object.assign(e,this.activeItemStyle)):e.color=this.inactiveColor,e}}},methods:{async init(){let t=await this.$uGetRect("#"+this.id);this.parentLeft=t.left,this.componentWidth=t.width,this.getTabRect()},clickTab(t){t!=this.currentIndex&&(this.$emit("change",t),this.$emit("input",t),this.$emit("update:modelValue",t))},getTabRect(){let t=e().in(this);for(let e=0;e<this.list.length;e++)t.select(`#u-tab-item-${e}`).fields({id:!0,size:!0,rect:!0});t.exec(function(t){this.tabQueryInfo=t,this.scrollByIndex()}.bind(this))},scrollByIndex(){let t=this.tabQueryInfo[this.currentIndex];if(!t)return;let e=t.width,a=t.left-this.parentLeft-(this.componentWidth-e)/2;this.scrollLeft=a<0?0:a;let s=t.left+t.width/2-this.parentLeft;this.scrollBarLeft=s-i(this.barWidth)/2,1==this.barFirstTimeMove&&setTimeout((()=>{this.barFirstTimeMove=!1}),100)}},mounted(){this.init()}},[["render",function(t,e,i,S,I,v){const _=a(s("u-badge"),x),B=y,$=g;return r(),l(B,{class:"u-tabs",style:f({background:i.bgColor})},{default:n((()=>[o(B,{id:I.id},{default:n((()=>[o($,{"scroll-x":"",class:"u-scroll-view","scroll-left":I.scrollLeft,"scroll-with-animation":""},{default:n((()=>[o(B,{class:u(["u-scroll-box",{"u-tabs-scorll-flex":!i.isScroll}])},{default:n((()=>[(r(!0),d(h,null,c(i.list,((t,e)=>(r(),l(B,{class:"u-tab-item u-line-1",id:"u-tab-item-"+e,key:e,onClick:t=>v.clickTab(e),style:f([v.tabItemStyle(e)])},{default:n((()=>[o(_,{count:t[i.count]||t.count||0,offset:i.offset,size:"mini"},null,8,["count","offset"]),b(" "+m(t[i.name]||t.name),1)])),_:2},1032,["id","onClick","style"])))),128)),i.showBar?(r(),l(B,{key:0,class:"u-tab-bar",style:f([v.tabBarStyle])},null,8,["style"])):p("",!0)])),_:1},8,["class"])])),_:1},8,["scroll-left"])])),_:1},8,["id"])])),_:1},8,["style"])}],["__scopeId","data-v-e6a415b0"]]);export{S as _};
