var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,a=f||u||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return a.Date.now()};function m(e,t,n){var o,r,i,f,u,a,c=0,m=!1,p=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function j(e){return c=e,u=setTimeout(O,t),m?g(e):f}function T(e){var n=e-a;return void 0===a||n>=t||n<0||p&&e-c>=i}function O(){var e=d();if(T(e))return h(e);u=setTimeout(O,function(e){var n=t-(e-a);return p?s(n,i-(e-c)):n}(e))}function h(e){return u=void 0,y&&o?g(e):(o=r=void 0,f)}function w(){var e=d(),n=T(e);if(o=arguments,r=this,a=e,n){if(void 0===u)return j(a);if(p)return u=setTimeout(O,t),g(a)}return void 0===u&&(u=setTimeout(O,t)),f}return t=b(t)||0,v(n)&&(m=!!n.leading,i=(p="maxWait"in n)?l(b(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=a=r=u=void 0},w.flush=function(){return void 0===u?f:h(d())},w}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var f="function"==typeof e.valueOf?e.valueOf():e;e=v(f)?f+"":f}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var u=o.test(e);return u||r.test(e)?i(e.slice(2),u?2:8):n.test(e)?NaN:+e}const p=document.querySelector(".feedback-form"),{message:y,email:g}=formElements;p.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),STORAGE_KEY="feedback-form-state",function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(console.log(e),y.value=e.message,g.value=e.email)}();
//# sourceMappingURL=03-feedback.514c08ed.js.map
