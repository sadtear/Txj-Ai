import{r as e}from"./index.93d1c242.js";function l(o){return e.get({url:"/ai/keypool/list",params:o})}function r(o){return e.get({url:"/ai/keypool/detail",params:o})}function i(o){return e.get({url:"/ai/keypool/ai_key/list",params:o})}function a(o){return e.post({url:"/ai/keypool/add",data:o})}function u(o){return e.post({url:"/ai/keypool/edit",data:o})}function n(o){return e.post({url:"/ai/keypool/del",data:o})}function s(o){return e.post({url:"/ai/keypool/change",data:o})}export{a,i as b,l as c,n as d,u as e,r as g,s};