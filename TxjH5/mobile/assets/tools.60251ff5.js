import{b2 as e,aS as o}from"./index-7044850c.js";const a=()=>{console.log("set navigation"),e({frontColor:"#ffffff",backgroundColor:"#1c1c1e"})},n=e=>{let a=document.createElement("textarea");a.value=e,a.readOnly="readOnly",document.body.appendChild(a),a.select(),a.setSelectionRange(0,e.length),o({title:"复制成功",icon:"none"}),document.execCommand("copy"),a.remove()},t=(e,o="image")=>e instanceof Array?(console.log("数组"),e.map((e=>{e[o]=e[o]+"?imageView2/0/format/jpg/interlace/1/q/90|imageslim"})),e):(console.log("字符串"),e+"?imageView2/0/format/jpg/interlace/1/q/90|imageslim");export{n as a,t as c,a as s};
