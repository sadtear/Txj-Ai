import{bh as t}from"./index-7044850c.js";function r(r){return t.post({url:"/draw/execute",data:r,method:"POST"})}function a(r){return t.post({url:"/draw/records/detail",data:r})}function u(r){return t.get({url:"/draw/records/list",data:r})}function n(r){return t.post({url:"/draw/records/del",data:r,method:"POST"})}function e(){return t.get({url:"/draw/category/get"})}function o(r){return t.get({url:"/draw/prompt/get",data:r})}function d(){return t.get({url:"/draw/prompt/example/get"})}function l(r){return t.post({url:"/draw/translate",data:r,method:"POST"})}function s(){return t.get({url:"/draw/getDrawBillingConfig"})}function i(r){return t.post({url:"/album/add",data:r})}function c(r){return t.post({url:"/album/del",data:r})}function f(r){return t.post({url:"/album/edit",data:r})}function g(r){return t.post({url:"/album/records/batch/add",data:r})}function p(){return t.get({url:"/album/list"})}function w(r){return t.get({url:"/draw/getMyContribute",data:r})}function m(r){return t.get({url:"/draw/work/collect/list",data:r})}function b(r){return t.post({url:"/draw/work/collect",data:r})}function h(r){return t.get({url:"/draw/image/category/list",data:r})}export{o as a,l as b,s as c,d,u as e,n as f,r as g,a as h,h as i,c as j,e as k,f as l,i as m,p as n,g as o,m as p,w as q,b as w};
