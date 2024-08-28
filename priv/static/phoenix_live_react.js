!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom/client")):"function"==typeof define&&define.amd?define(["react","react-dom/client"],t):"object"==typeof exports?exports.phoenix_live_react=t(require("react"),require("react-dom/client")):e.phoenix_live_react=t(e.react,e["react-dom/client"])}(self,((e,t)=>(()=>{"use strict";var r={156:t=>{t.exports=e},715:e=>{e.exports=t}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}};return r[e](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{o.r(i),o.d(i,{default:()=>d,initLiveReact:()=>p,initLiveReactElement:()=>u});var e=o(156),t=o.n(e),r=o(715);function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e,r,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=e.dataset.liveReactProps?JSON.parse(e.dataset.liveReactProps):{};a=e.dataset.liveReactMerge?s(s(s({},i),a),o):s(s({},a),o);var c=t().createElement(n,a);return r.rootRenderer.render(c),console.log("Test"),a},u=function(e,t){var n=e.nextElementSibling;n.rootRenderer||(n.rootRenderer=(0,r.createRoot)(n));var o=Array.prototype.reduce.call(e.dataset.liveReactClass.split("."),(function(e,t){return e[t]}),window);return console.log({target:n}),l(e,n,o,t),{target:n,componentClass:o}},p=function(){var e=document.querySelectorAll("[data-live-react-class]");Array.prototype.forEach.call(e,(function(e){u(e)}))},d={mounted:function(){var e=this.el,t=this.pushEvent.bind(this),r=this.pushEventTo&&this.pushEventTo.bind(this),n=this.handleEvent&&this.handleEvent.bind(this),o=u(e,{pushEvent:t}),i=o.target,a=o.componentClass,s=l(e,i,a,{pushEvent:t,pushEventTo:r,handleEvent:n});e.dataset.liveReactMerge&&(this.props=s),Object.assign(this,{target:i,componentClass:a})},updated:function(){var e,t,r=this.el,o=this.target,i=this.componentClass,a=this.pushEvent.bind(this),s=this.pushEventTo&&this.pushEventTo.bind(this),c=(this.handleEvent,this.props),u=(e=l(r,o,i,{pushEvent:a,pushEventTo:s},c),t=1,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];r.dataset.liveReactMerge&&(this.props=u)},destroyed:function(){this.target.rootRenderer.unmount()}}})(),i})()));