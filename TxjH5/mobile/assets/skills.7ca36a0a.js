import{bh as r}from"./index-7044850c.js";function t(t){return r.get({url:"/draw/async/progress",data:t})}function a(t){return r.get({url:"/draw/style/list",data:t})}function n(t){return r.get({url:"/dictData/drawChannel",data:t})}function e(t){return r.post({url:"/draw/execute",data:t})}function u(t){return r.get({url:"/draw/records/list",data:t})}function d(t){return r.get({url:"/draw/record",data:t})}function s(t){return r.get({url:"/draw/random/promptExample",data:t})}function o(t){return r.get({url:"/draw/size/list",data:t})}function l(t){return r.post({url:"/draw/records/del",data:t})}function c(t){return r.post({url:"/draw/contribute",data:t})}function i(t){return r.get({url:"/draw/gallery",data:t})}function f(t){return r.get({url:"/draw/galleryRandom",data:t})}function g(t){return r.get({url:"/decorate/banner/list",data:t})}function w(t){return r.post({url:"/draw/execute/same?drawWorkId="+t})}function p(){return r.get({url:"/draw/sd/models"})}function m(){return r.get({url:"/draw/sd/samplers"})}export{m as a,f as b,o as c,s as d,n as e,a as f,p as g,l as h,d as i,c as j,e as k,t as l,u as m,g as n,i as o,w as s};