var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,r=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,a=f||u||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return a.Date.now()};function p(t,e,n){var i,o,r,f,u,a,c=0,p=!1,y=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=i,r=o;return i=o=void 0,c=e,f=t.apply(r,n)}function j(t){return c=t,u=setTimeout(T,e),p?g(t):f}function h(t){var n=t-a;return void 0===a||n>=e||n<0||y&&t-c>=r}function T(){var t=d();if(h(t))return w(t);u=setTimeout(T,function(t){var n=e-(t-a);return y?s(n,r-(t-c)):n}(t))}function w(t){return u=void 0,m&&i?g(t):(i=o=void 0,f)}function O(){var t=d(),n=h(t);if(i=arguments,o=this,a=t,n){if(void 0===u)return j(a);if(y)return u=setTimeout(T,e),g(a)}return void 0===u&&(u=setTimeout(T,e)),f}return e=b(e)||0,v(n)&&(p=!!n.leading,r=(y="maxWait"in n)?l(b(n.maxWait)||0,e):r,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=a=o=u=void 0},O.flush=function(){return void 0===u?f:w(d())},O}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==c.call(t)}(t))return NaN;if(v(t)){var f="function"==typeof t.valueOf?t.valueOf():t;t=v(f)?f+"":f}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var u=i.test(t);return u||o.test(t)?r(t.slice(2),u?2:8):n.test(t)?NaN:+t}
//# sourceMappingURL=02-video.683dfc68.js.map
