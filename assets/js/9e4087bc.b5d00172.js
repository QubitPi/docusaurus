"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["47293"],{61302:function(e,r,t){t.r(r),t.d(r,{default:function(){return m}});var n=t(24246);t(27378);var a=t(35363),i=t(77827),o=t(57335),l=t(90177),c=t(98143),s=t(57922);function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function f(e,r){if(e){if("string"==typeof e)return u(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,r)}}function d(e){var r=e.year,t=e.posts,i=(0,l.P)({day:"numeric",month:"long",timeZone:"UTC"});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{as:"h3",id:r,children:r}),(0,n.jsx)("ul",{children:t.map(function(e){var r;return(0,n.jsx)("li",{children:(0,n.jsxs)(a.Z,{to:e.metadata.permalink,children:[(r=e.metadata.date,i.format(new Date(r)))," - ",e.metadata.title]})},e.metadata.date)})})]})}function h(e){var r=e.years;return(0,n.jsx)("section",{className:"margin-vert--lg",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:r.map(function(e,r){return(0,n.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,n.jsx)(d,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){var n,a,i;n=e,a=r,i=t[r],a in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i})}return e}({},e))},r)})})})})}function m(e){var r=e.archive,t=(0,i.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),a=(0,i.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),l=Array.from(r.blogPosts.reduce(function(e,r){var t,n,a=r.metadata.date.split("-")[0],i=null!==(n=e.get(a))&&void 0!==n?n:[];return e.set(a,[r].concat(function(e){if(Array.isArray(e))return u(e)}(t=i)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||f(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))},new Map),function(e){var r,t,n=(t=2,function(e){if(Array.isArray(e))return e}(r=e)||function(e,r){var t,n,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var i=[],o=!0,l=!1;try{for(a=a.call(e);!(o=(t=a.next()).done)&&(i.push(t.value),!r||i.length!==r);o=!0);}catch(e){l=!0,n=e}finally{try{!o&&null!=a.return&&a.return()}finally{if(l)throw n}}return i}}(r,2)||f(r,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());return{year:n[0],posts:n[1]}});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.d,{title:t,description:a}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("header",{className:"hero hero--primary",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(s.Z,{as:"h1",className:"hero__title",children:t}),(0,n.jsx)("p",{className:"hero__subtitle",children:a})]})}),(0,n.jsx)("main",{children:l.length>0&&(0,n.jsx)(h,{years:l})})]})]})}},90177:function(e,r,t){t.d(r,{P:function(){return a}});var n=t(8156);function a(){var e,r,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=(0,n.Z)().i18n.currentLocale;var i=(r=(e=(0,n.Z)().i18n).currentLocale,e.localeConfigs[r].calendar);return new Intl.DateTimeFormat(a,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){var n,a,i;n=e,a=r,i=t[r],a in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i})}return e}({calendar:i},t))}}}]);