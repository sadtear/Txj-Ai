import{cX as L,c8 as v,cY as M}from"./entry.35d4c246.js";var N=/\s/;function $(n){for(var r=n.length;r--&&N.test(n.charAt(r)););return r}var B=/^\s+/;function R(n){return n&&n.slice(0,$(n)+1).replace(B,"")}var k=0/0,F=/^[-+]0x[0-9a-f]+$/i,X=/^0b[01]+$/i,_=/^0o[0-7]+$/i,j=parseInt;function S(n){if(typeof n=="number")return n;if(L(n))return k;if(v(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=v(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=R(n);var t=X.test(n);return t||_.test(n)?j(n.slice(2),t?2:8):F.test(n)?k:+n}var D=function(){return M.Date.now()};const h=D;var H="Expected a function",P=Math.max,U=Math.min;function q(n,r,t){var u,s,l,c,i,f,o=0,p=!1,d=!1,T=!0;if(typeof n!="function")throw new TypeError(H);r=S(r)||0,v(t)&&(p=!!t.leading,d="maxWait"in t,l=d?P(S(t.maxWait)||0,r):l,T="trailing"in t?!!t.trailing:T);function x(e){var a=u,m=s;return u=s=void 0,o=e,c=n.apply(m,a),c}function W(e){return o=e,i=setTimeout(g,r),p?x(e):c}function O(e){var a=e-f,m=e-o,E=r-a;return d?U(E,l-m):E}function y(e){var a=e-f,m=e-o;return f===void 0||a>=r||a<0||d&&m>=l}function g(){var e=h();if(y(e))return b(e);i=setTimeout(g,O(e))}function b(e){return i=void 0,T&&u?x(e):(u=s=void 0,c)}function A(){i!==void 0&&clearTimeout(i),o=0,u=f=s=i=void 0}function C(){return i===void 0?c:b(h())}function I(){var e=h(),a=y(e);if(u=arguments,s=this,f=e,a){if(i===void 0)return W(f);if(d)return clearTimeout(i),i=setTimeout(g,r),x(f)}return i===void 0&&(i=setTimeout(g,r)),c}return I.cancel=A,I.flush=C,I}export{q as d,S as t};