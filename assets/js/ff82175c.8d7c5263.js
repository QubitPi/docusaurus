"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["16034"],{95231:function(e,t,s){s.r(t),s.d(t,{metadata:()=>i,contentTitle:()=>c,default:()=>f,assets:()=>a,toc:()=>d,frontMatter:()=>o});var i=JSON.parse('{"id":"tests/visibility/index","title":"Visibility","description":"A category to play with draft/unlisted front matter.","source":"@site/_dogfooding/_docs tests/tests/visibility/index.mdx","sourceDirName":"tests/visibility","slug":"/tests/visibility/","permalink":"/tests/docs/tests/visibility/","draft":false,"unlisted":false,"tags":[{"inline":false,"label":"Visibility","permalink":"/tests/docs/tags/visibility"}],"version":"current","lastUpdatedBy":"Andrew Asche","lastUpdatedAt":1729270941000,"frontMatter":{"tags":["visibility"]},"sidebar":"sidebar","previous":{"title":"TOC partial test","permalink":"/tests/docs/tests/toc-partials/"},"next":{"title":"Some Drafts - Listed 1","permalink":"/tests/docs/tests/visibility/some-drafts/draft-subcategory/listed1"}}'),n=s("24246"),r=s("80980"),l=s("78042");let o={tags:["visibility"]},c="Visibility",a={},d=[];function u(e){let t={a:"a",h1:"h1",header:"header",hr:"hr",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"visibility",children:"Visibility"})}),"\n",(0,n.jsx)(t.p,{children:"A category to play with draft/unlisted front matter."}),"\n",(0,n.jsx)(t.p,{children:"In dev, both draft/unlisted items are displayed."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"In production, draft items shouldn't be accessible:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"pathname:///tests/docs/tests/visibility/only-drafts/draft1",children:"/tests/docs/tests/visibility/only-drafts/draft1"})}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"In production, unlisted items should remain accessible, but be hidden in the sidebar (unless currently browsed):"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/tests/docs/tests/visibility/only-unlisteds/unlisted1",children:"./only-unlisteds/unlisted1.md"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/tests/docs/tests/visibility/only-unlisteds/unlisted2",children:"./only-unlisteds/unlisted2.md"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/tests/docs/tests/visibility/only-unlisteds/unlisted-subcategory/unlisted3",children:"./only-unlisteds/unlisted-subcategory/unlisted3.md"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/tests/docs/tests/visibility/some-unlisteds/unlisted1",children:"./some-unlisteds/unlisted1.md"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/tests/docs/tests/visibility/some-unlisteds/unlisted2",children:"./some-unlisteds/unlisted2.md"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/tests/docs/tests/visibility/some-unlisteds/unlisted-subcategory/unlisted3",children:"./some-unlisteds/unlisted-subcategory/unlisted3.md"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/tests/docs/tests/visibility/force-unlisted",children:"./force-unlisted.mdx"})}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n","\n",(0,n.jsx)(l.Z,{})]})}function f(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}f.displayName="MDXContent(_dogfooding/_docs tests/tests/visibility/index.mdx)"},78042:function(e,t,s){s.d(t,{Z:()=>x});var i=s("24246");s("27378");var n=s("90496"),r=s("85921"),l=s("35363"),o=s("11660"),c=s("82095"),a=s("77827"),d=s("57922");let u={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function f(e){var t=e.href,s=e.children;return(0,i.jsx)(l.Z,{href:t,className:(0,n.Z)("card padding--lg",u.cardContainer),children:s})}function h(e){var t=e.href,s=e.icon,r=e.title,l=e.description;return(0,i.jsxs)(f,{href:t,children:[(0,i.jsxs)(d.Z,{as:"h2",className:(0,n.Z)("text--truncate",u.cardTitle),title:r,children:[s," ",r]}),l&&(0,i.jsx)("p",{className:(0,n.Z)("text--truncate",u.cardDescription),title:l,children:l})]})}function m(e){var t,s,n=e.item,l=(0,r.LM)(n);var c=(t=(0,o.c)().selectMessage,function(e){return t(e,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))});return l?(0,i.jsx)(h,{href:l,icon:"\uD83D\uDDC3\uFE0F",title:n.label,description:null!==(s=n.description)&&void 0!==s?s:c(n.items.length)}):null}function p(e){var t,s,n=e.item,l=(0,c.Z)(n.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",o=(0,r.xz)(null!==(t=n.docId)&&void 0!==t?t:void 0);return(0,i.jsx)(h,{href:n.href,icon:l,title:n.label,description:null!==(s=n.description)&&void 0!==s?s:null==o?void 0:o.description})}function y(e){var t=e.item;switch(t.type){case"link":return(0,i.jsx)(p,{item:t});case"category":return(0,i.jsx)(m,{item:t});default:throw Error("unknown item type ".concat(JSON.stringify(t)))}}function b(e){var t=e.className,s=(0,r.jA)();return(0,i.jsx)(x,{items:s.items,className:t})}function x(e){var t=e.items,s=e.className;if(!t)return(0,i.jsx)(b,function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},i=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),i.forEach(function(t){var i,n,r;i=e,n=t,r=s[t],n in i?Object.defineProperty(i,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[n]=r})}return e}({},e));var l=(0,r.MN)(t);return(0,i.jsx)("section",{className:(0,n.Z)("row",s),children:l.map(function(e,t){return(0,i.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,i.jsx)(y,{item:e})},t)})})}},11660:function(e,t,s){s.d(t,{c:function(){return c}});var i=s(27378),n=s(8156),r=["zero","one","two","few","many","other"];function l(e){return r.filter(function(t){return e.includes(t)})}var o={locale:"en",pluralForms:l(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e,t=(e=(0,n.Z)().i18n.currentLocale,(0,i.useMemo)(function(){try{var t,s;return t=e,s=new Intl.PluralRules(t),{locale:t,pluralForms:l(s.resolvedOptions().pluralCategories),select:function(e){return s.select(e)}}}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'.concat(e,'".\nDocusaurus will fallback to the default (English) implementation.\nError: ').concat(t.message,"\n")),o}},[e]));return{selectMessage:function(e,s){return function(e,t,s){var i=e.split("|");if(1===i.length)return i[0];i.length>s.pluralForms.length&&console.error("For locale=".concat(s.locale,", a maximum of ").concat(s.pluralForms.length," plural forms are expected (").concat(s.pluralForms.join(","),"), but the message contains ").concat(i.length,": ").concat(e));var n=s.select(t);return i[Math.min(s.pluralForms.indexOf(n),i.length-1)]}(s,e,t)}}}},80980:function(e,t,s){s.d(t,{Z:function(){return o},a:function(){return l}});var i=s(27378);let n={},r=i.createContext(n);function l(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);