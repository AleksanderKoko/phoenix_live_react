!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):"object"==typeof exports?exports.phoenix_live_react=t(require("react"),require("react-dom")):e.phoenix_live_react=t(e.react,e["react-dom"])}(self,((e,t)=>(()=>{"use strict";var r={745:(e,t,r)=>{var n=r(111);t.s=n.createRoot,n.hydrateRoot},156:t=>{t.exports=e},111:e=>{e.exports=t}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}};return r[e](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{o.r(i),o.d(i,{default:()=>f,initLiveReact:()=>d,initLiveReactElement:()=>p});var e=o(156),t=o.n(e),r=o(745);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e,n,o){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=e.dataset.liveReactProps?JSON.parse(e.dataset.liveReactProps):{};s=e.dataset.liveReactMerge?c(c(c({},a),s),i):c(c({},s),i);var u=t().createElement(o,s),l=(0,r.s)(n);return l.render(u),console.log("Test"),[s,l]},p=function(e,t){var r=e.nextElementSibling,n=Array.prototype.reduce.call(e.dataset.liveReactClass.split("."),(function(e,t){return e[t]}),window);return l(e,r,n,t),{target:r,componentClass:n}},d=function(){var e=document.querySelectorAll("[data-live-react-class]");Array.prototype.forEach.call(e,(function(e){p(e)}))},f={mounted:function(){var e=this.el,t=this.pushEvent.bind(this),r=this.pushEventTo&&this.pushEventTo.bind(this),o=this.handleEvent&&this.handleEvent.bind(this),i=p(e,{pushEvent:t}),a=i.target,s=i.componentClass,c=n(l(e,a,s,{pushEvent:t,pushEventTo:r,handleEvent:o}),2),u=c[0],d=c[1];this.root=d,e.dataset.liveReactMerge&&(this.props=u),Object.assign(this,{target:a,componentClass:s})},updated:function(){var e=this.el,t=this.target,r=this.componentClass,o=this.pushEvent.bind(this),i=this.pushEventTo&&this.pushEventTo.bind(this),a=(this.handleEvent,this.props),s=n(l(e,t,r,{pushEvent:o,pushEventTo:i},a),1)[0];e.dataset.liveReactMerge&&(this.props=s)},destroyed:function(){this.target,this.root.unmount()}}})(),i})()));