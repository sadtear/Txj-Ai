import{d as n}from"./debounce.7d5a41e6.js";import{c8 as l}from"./entry.35d4c246.js";var g="Expected a function";function c(t,a,r){var i=!0,e=!0;if(typeof t!="function")throw new TypeError(g);return l(r)&&(i="leading"in r?!!r.leading:i,e="trailing"in r?!!r.trailing:e),n(t,a,{leading:i,maxWait:a,trailing:e})}export{c as t};