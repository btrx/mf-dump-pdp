"use strict";(self.webpackChunkpdp=self.webpackChunkpdp||[]).push([[588],{588:(e,t,r)=>{function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.r(t),r.d(t,{default:()=>s});var l=r(950),a=r.n(l),c=r(235),u=r(289),i=r(117),o=r.n(i);function s(){var e,t,r=(0,c.useParams)().id,i=(e=(0,l.useState)(null),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,a=[],c=!0,u=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);c=!0);}catch(e){u=!0,l=e}finally{try{c||null==r.return||r.return()}finally{if(u)throw l}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=i[0],f=i[1];(0,l.useEffect)((function(){r?(0,u.getProductById)(r).then(f):f(null)}),[r]);var m=(0,l.useRef)(null);return(0,l.useEffect)((function(){m.current&&o()(m.current,s.id)}),[s]),s?a().createElement("div",{className:"grid grid-cols-2 gap-5"},a().createElement("div",null,a().createElement("img",{src:s.image,alt:s.name})),a().createElement("div",null,a().createElement("div",{className:"flex"},a().createElement("h1",{className:"font-bold text-3xl flex-grow"},s.name),a().createElement("div",{className:"font-bold text-3xl flex-end"},u.currency.format(s.price))),a().createElement("div",{ref:m}),a().createElement("div",{className:"mt-10"},s.description),a().createElement("div",{className:"mt-10"},s.longDescription))):null}}}]);