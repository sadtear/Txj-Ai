function e(r){return $request.post({url:"/draw/records/del",params:r,method:"POST"})}function t(){return $request.get({url:"/draw/category/get"})}function u(r){return $request.get({url:"/draw/prompt/get",params:r})}function a(r){return $request.get({url:"/draw/galleryRandom",params:r})}function n(r){return $request.post({url:"/draw/translate",params:r})}function s(){return $request.get({url:"/draw/getDrawBillingConfig"})}function l(r){return $request.get({url:"/draw/records/list",params:r})}function o(r){return $request.get({url:"/album/list",params:r})}function d(r){return $request.post({url:"/album/add",params:r})}function i(r){return $request.post({url:"/album/edit",params:r})}function c(r){return $request.post({url:"/album/del",params:r})}function g(r){return $request.post({url:"/album/records/batch/add",params:r})}export{l as a,e as b,a as c,s as d,t as e,u as f,o as g,c as h,d as i,i as j,n as k,g as m};
