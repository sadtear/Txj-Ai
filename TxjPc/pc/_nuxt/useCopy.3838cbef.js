import{k as c}from"./entry.35d4c246.js";import{b as t}from"./index.142556ee.js";function p(){return{copy:async o=>{const{copy:s}=t();try{if(navigator.clipboard)await s(o);else{const e=document.createElement("input");e.setAttribute("value",o),document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}c.success({message:"复制成功"})}catch{c.success({message:"复制失败"})}}}}export{p as u};