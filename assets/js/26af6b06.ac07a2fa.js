"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["14430"],{10953:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>p,assets:()=>d,toc:()=>u,frontMatter:()=>l});var r=JSON.parse('{"id":"advanced/ssg","title":"Static site generation (SSG)","description":"Docusaurus statically renders your React code into HTML, allowing faster load speed and better SEO.","source":"@site/docs/advanced/ssg.mdx","sourceDirName":"advanced","slug":"/advanced/ssg","permalink":"/docs/advanced/ssg","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/advanced/ssg.mdx","tags":[],"version":"current","lastUpdatedBy":"Jiaqi Liu","lastUpdatedAt":1729490122000,"frontMatter":{"sidebar_label":"Static site generation","description":"Docusaurus statically renders your React code into HTML, allowing faster load speed and better SEO."},"sidebar":"docs","previous":{"title":"Routing","permalink":"/docs/advanced/routing"},"next":{"title":"Client architecture","permalink":"/docs/advanced/client"}}'),o=t("24246"),s=t("80980"),i=t("15398"),a=t("58636");let l={sidebar_label:"Static site generation",description:"Docusaurus statically renders your React code into HTML, allowing faster load speed and better SEO."},c="Static site generation (SSG)",d={},u=[{value:"Understanding SSR",id:"understanding-ssr",level:2},{value:"Escape hatches",id:"escape-hatches",level:2},{value:"<code>&lt;BrowserOnly&gt;</code>",id:"browseronly",level:3},{value:"<code>useIsBrowser</code>",id:"useisbrowser",level:3},{value:"<code>useEffect</code>",id:"useeffect",level:3},{value:"<code>ExecutionEnvironment</code>",id:"executionenvironment",level:3}];function h(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"static-site-generation-ssg",children:"Static site generation (SSG)"})}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.a,{href:"/docs/advanced/architecture",children:"architecture"}),", we mentioned that the theme is run in Webpack. But beware: that doesn't mean it always has access to browser globals! The theme is built twice:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["During ",(0,o.jsx)(n.strong,{children:"server-side rendering"}),", the theme is compiled in a sandbox called ",(0,o.jsx)(n.a,{href:"https://reactjs.org/docs/react-dom-server.html",children:"React DOM Server"}),'. You can see this as a "headless browser", where there is no ',(0,o.jsx)(n.code,{children:"window"})," or ",(0,o.jsx)(n.code,{children:"document"}),", only React. SSR produces static HTML pages."]}),"\n",(0,o.jsxs)(n.li,{children:["During ",(0,o.jsx)(n.strong,{children:"client-side rendering"}),", the theme is compiled to JavaScript that gets eventually executed in the browser, so it has access to browser variables."]}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{title:"SSR or SSG?",type:"info",children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"Server-side rendering"})," and ",(0,o.jsx)(n.em,{children:"static site generation"})," can be different concepts, but we use them interchangeably."]}),(0,o.jsxs)(n.p,{children:["Strictly speaking, Docusaurus is a static site generator, because there's no server-side runtime\u2014we statically render to HTML files that are deployed on a CDN, instead of dynamically pre-rendering on each request. This differs from the working model of ",(0,o.jsx)(n.a,{href:"https://nextjs.org/",children:"Next.js"}),"."]})]}),"\n",(0,o.jsxs)(n.p,{children:["Therefore, while you probably know not to access Node globals like ",(0,o.jsx)(n.code,{children:"process"})," (",(0,o.jsx)(n.a,{href:"#node-env",children:"or can we?"}),") or the ",(0,o.jsx)(n.code,{children:"'fs'"})," module, you can't freely access browser globals either."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\n\nexport default function WhereAmI() {\n  return <span>{window.location.href}</span>;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This looks like idiomatic React, but if you run ",(0,o.jsx)(n.code,{children:"docusaurus build"}),", you will get an error:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"ReferenceError: window is not defined\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This is because during server-side rendering, the Docusaurus app isn't actually run in browser, and it doesn't know what ",(0,o.jsx)(n.code,{children:"window"})," is."]}),"\n",(0,o.jsxs)(t,{id:"node-env",children:[(0,o.jsxs)("summary",{children:["What about ",(0,o.jsx)("code",{children:"process.env.NODE_ENV"}),"?"]}),(0,o.jsxs)(n.p,{children:['One exception to the "no Node globals" rule is ',(0,o.jsx)(n.code,{children:"process.env.NODE_ENV"}),". In fact, you can use it in React, because Webpack injects this variable as a global:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\n\nexport default function expensiveComp() {\n  if (process.env.NODE_ENV === 'development') {\n    return <>This component is not shown in development</>;\n  }\n  const res = someExpensiveOperationThatLastsALongTime();\n  return <>{res}</>;\n}\n"})}),(0,o.jsxs)(n.p,{children:["During Webpack build, the ",(0,o.jsx)(n.code,{children:"process.env.NODE_ENV"})," will be replaced with the value, either ",(0,o.jsx)(n.code,{children:"'development'"})," or ",(0,o.jsx)(n.code,{children:"'production'"}),". You will then get different build results after dead code elimination:"]}),(0,o.jsxs)(i.Z,{children:[(0,o.jsx)(a.Z,{value:"Development",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-diff",children:"import React from 'react';\n\nexport default function expensiveComp() {\n  // highlight-next-line\n  if ('development' === 'development') {\n+   return <>This component is not shown in development</>;\n  }\n- const res = someExpensiveOperationThatLastsALongTime();\n- return <>{res}</>;\n}\n"})})}),(0,o.jsx)(a.Z,{value:"Production",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-diff",children:"import React from 'react';\n\nexport default function expensiveComp() {\n  // highlight-next-line\n- if ('production' === 'development') {\n-   return <>This component is not shown in development</>;\n- }\n+ const res = someExpensiveOperationThatLastsALongTime();\n+ return <>{res}</>;\n}\n"})})})]})]}),"\n",(0,o.jsx)(n.h2,{id:"understanding-ssr",children:"Understanding SSR"}),"\n",(0,o.jsx)(n.p,{children:"React is not just a dynamic UI runtime\u2014it's also a templating engine. Because Docusaurus sites mostly contain static contents, it should be able to work without any JavaScript (which React runs in), but only plain HTML/CSS. And that's what server-side rendering offers: statically rendering your React code into HTML, without any dynamic content. An HTML file has no concept of client state (it's purely markup), hence it shouldn't rely on browser APIs."}),"\n",(0,o.jsxs)(n.p,{children:["These HTML files are the first to arrive at the user's browser screen when a URL is visited (see ",(0,o.jsx)(n.a,{href:"/docs/advanced/routing",children:"routing"}),'). Afterwards, the browser fetches and runs other JS code to provide the "dynamic" parts of your site\u2014anything implemented with JavaScript. However, before that, the main content of your page is already visible, allowing faster loading.']}),"\n",(0,o.jsx)(n.p,{children:'In CSR-only apps, all DOM elements are generated on client side with React, and the HTML file only ever contains one root element for React to mount DOM to; in SSR, React is already facing a fully built HTML page, and it only needs to correlate the DOM elements with the virtual DOM in its model. This step is called "hydration". After React has hydrated the static markup, the app starts to work as any normal React app.'}),"\n",(0,o.jsxs)(n.p,{children:["Note that Docusaurus is ultimately a single-page application, so static site generation is only an optimization (",(0,o.jsx)(n.em,{children:"progressive enhancement"}),", as it's called), but our functionality does not fully depend on those HTML files. This is contrary to site generators like ",(0,o.jsx)(n.a,{href:"https://jekyllrb.com/",children:"Jekyll"})," and ",(0,o.jsx)(n.a,{href:"https://v1.docusaurus.io/",children:"Docusaurus v1"}),", where all files are statically transformed to markup, and interactiveness is added through external JavaScript linked with ",(0,o.jsx)(n.code,{children:"<script>"})," tags. If you inspect the build output, you will still see JS assets under ",(0,o.jsx)(n.code,{children:"build/assets/js"}),", which are, really, the core of Docusaurus."]}),"\n",(0,o.jsx)(n.h2,{id:"escape-hatches",children:"Escape hatches"}),"\n",(0,o.jsx)(n.p,{children:"If you want to render any dynamic content on your screen that relies on the browser API to be functional at all, for example:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Our ",(0,o.jsx)(n.a,{href:"/docs/markdown-features/code-blocks#interactive-code-editor",children:"live codeblock"}),", which runs in the browser's JS runtime"]}),"\n",(0,o.jsxs)(n.li,{children:["Our ",(0,o.jsx)(n.a,{href:"/docs/markdown-features/assets#themed-images",children:"themed image"})," that detects the user's color scheme to display different images"]}),"\n",(0,o.jsxs)(n.li,{children:["The JSON viewer of our debug panel which uses the ",(0,o.jsx)(n.code,{children:"window"})," global for styling"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"You may need to escape from SSR since static HTML can't display anything useful without knowing the client state."}),"\n",(0,o.jsxs)(n.admonition,{type:"warning",children:[(0,o.jsx)(n.p,{children:"It is important for the first client-side render to produce the exact same DOM structure as server-side rendering, otherwise, React will correlate virtual DOM with the wrong DOM elements."}),(0,o.jsxs)(n.p,{children:["Therefore, the na\xefve attempt of ",(0,o.jsx)(n.code,{children:"if (typeof window !== 'undefined) {/* render something */}"})," won't work appropriately as a browser vs. server detection, because the first client render would instantly render different markup from the server-generated one."]}),(0,o.jsxs)(n.p,{children:["You can read more about this pitfall in ",(0,o.jsx)(n.a,{href:"https://www.joshwcomeau.com/react/the-perils-of-rehydration/",children:"The Perils of Rehydration"}),"."]})]}),"\n",(0,o.jsx)(n.p,{children:"We provide several more reliable ways to escape SSR."}),"\n",(0,o.jsx)(n.h3,{id:"browseronly",children:(0,o.jsx)(n.code,{children:"<BrowserOnly>"})}),"\n",(0,o.jsxs)(n.p,{children:["If you need to render some component in browser only (for example, because the component relies on browser specifics to be functional at all), one common approach is to wrap your component with ",(0,o.jsx)(n.a,{href:"/docs/docusaurus-core#browseronly",children:(0,o.jsx)(n.code,{children:"<BrowserOnly>"})})," to make sure it's invisible during SSR and only rendered in CSR."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import BrowserOnly from '@docusaurus/BrowserOnly';\n\nfunction MyComponent(props) {\n  return (\n    // highlight-start\n    <BrowserOnly fallback={<div>Loading...</div>}>\n      {() => {\n        const LibComponent =\n          require('some-lib-that-accesses-window').LibComponent;\n        return <LibComponent {...props} />;\n      }}\n    </BrowserOnly>\n    // highlight-end\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["It's important to realize that the children of ",(0,o.jsx)(n.code,{children:"<BrowserOnly>"})," is not a JSX element, but a function that ",(0,o.jsx)(n.em,{children:"returns"})," an element. This is a design decision. Consider this code:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import BrowserOnly from '@docusaurus/BrowserOnly';\n\nfunction MyComponent() {\n  return (\n    <BrowserOnly>\n      {/* highlight-start */}\n      {/* DON'T DO THIS - doesn't actually work */}\n      <span>page url = {window.location.href}</span>\n      {/* highlight-end */}\n    </BrowserOnly>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["While you may expect that ",(0,o.jsx)(n.code,{children:"BrowserOnly"})," hides away the children during server-side rendering, it actually can't. When the React renderer tries to render this JSX tree, it does see the ",(0,o.jsx)(n.code,{children:"{window.location.href}"})," variable as a node of this tree and tries to render it, although it's actually not used! Using a function ensures that we only let the renderer see the browser-only component when it's needed."]}),"\n",(0,o.jsx)(n.h3,{id:"useisbrowser",children:(0,o.jsx)(n.code,{children:"useIsBrowser"})}),"\n",(0,o.jsxs)(n.p,{children:["You can also use the ",(0,o.jsx)(n.code,{children:"useIsBrowser()"})," hook to test if the component is currently in a browser environment. It returns ",(0,o.jsx)(n.code,{children:"false"})," in SSR and ",(0,o.jsx)(n.code,{children:"true"})," is CSR, after first client render. Use this hook if you only need to perform certain conditional operations on client-side, but not render an entirely different UI."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import useIsBrowser from '@docusaurus/useIsBrowser';\n\nfunction MyComponent() {\n  const isBrowser = useIsBrowser();\n  const location = isBrowser ? window.location.href : 'fetching location...';\n  return <span>{location}</span>;\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"useeffect",children:(0,o.jsx)(n.code,{children:"useEffect"})}),"\n",(0,o.jsxs)(n.p,{children:["Lastly, you can put your logic in ",(0,o.jsx)(n.code,{children:"useEffect()"})," to delay its execution until after first CSR. This is most appropriate if you are only performing side-effects but don't ",(0,o.jsx)(n.em,{children:"get"})," data from the client state."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'function MyComponent() {\n  useEffect(() => {\n    // Only logged in the browser console; nothing is logged during server-side rendering\n    console.log("I\'m now in the browser");\n  }, []);\n  return <span>Some content...</span>;\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"executionenvironment",children:(0,o.jsx)(n.code,{children:"ExecutionEnvironment"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/docs/docusaurus-core#executionenvironment",children:(0,o.jsx)(n.code,{children:"ExecutionEnvironment"})})," namespace contains several values, and ",(0,o.jsx)(n.code,{children:"canUseDOM"})," is an effective way to detect browser environment."]}),"\n",(0,o.jsxs)(n.p,{children:["Beware that it essentially checked ",(0,o.jsx)(n.code,{children:"typeof window !== 'undefined'"})," under the hood, so you should not use it for rendering-related logic, but only imperative code, like reacting to user input by sending web requests, or dynamically importing libraries, where DOM isn't updated at all."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="a-client-module.js"',children:"import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';\n\nif (ExecutionEnvironment.canUseDOM) {\n  document.title = \"I'm loaded!\";\n}\n"})})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},58636:function(e,n,t){t.d(n,{Z:()=>i});var r=t("24246");t("27378");var o=t("90496");let s="tabItem_pnkT";function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(s,i),hidden:t,children:n})}},15398:function(e,n,t){t.d(n,{Z:()=>S});var r=t("24246"),o=t("27378"),s=t("90496"),i=t("54947"),a=t("3620"),l=t("844"),c=t("97486"),d=t("32263"),u=t("16971");function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function p(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var s=[],i=!0,a=!1;try{for(o=o.call(e);!(i=(t=o.next()).done)&&(s.push(t.value),!n||s.length!==n);i=!0);}catch(e){a=!0,r=e}finally{try{!i&&null!=o.return&&o.return()}finally{if(a)throw r}}return s}}(e,n)||function(e,n){if(e){if("string"==typeof e)return h(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){var n,t;return null!==(t=null===(n=o.Children.toArray(e).filter(function(e){return"\n"!==e}).map(function(e){var n,t;if(!e||(0,o.isValidElement)(e)&&(n=e.props)&&(void 0===n?"undefined":(t=n)&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t)=="object"&&"value"in n)return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function m(e){var n=e.value;return e.tabValues.some(function(e){return e.value===n})}var b=t("71607");let y="tabList_Qoir",v="tabItem_AQgk";function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r,o,s;r=e,o=n,s=t[n],o in r?Object.defineProperty(r,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[o]=s})}return e}function x(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}function w(e){var n=e.className,t=e.block,o=e.selectedValue,a=e.selectValue,l=e.tabValues,c=[],d=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=l[c.indexOf(n)].value;t!==o&&(d(n),a(t))},h=function(e){var n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var t,r=c.indexOf(e.currentTarget)+1;n=null!==(t=c[r])&&void 0!==t?t:c[0];break;case"ArrowLeft":var o,s=c.indexOf(e.currentTarget)-1;n=null!==(o=c[s])&&void 0!==o?o:c[c.length-1]}null==n||n.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:l.map(function(e){var n=e.value,t=e.label,i=e.attributes;return(0,r.jsx)("li",x(g({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:function(e){return c.push(e)},onKeyDown:h,onClick:u},i),{className:(0,s.Z)("tabs__item",v,null==i?void 0:i.className,{"tabs__item--active":o===n}),children:null!=t?t:n}),n)})})}function j(e){var n=e.lazy,t=e.children,i=e.selectedValue,a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var l=a.find(function(e){return e.props.value===i});return l?(0,o.cloneElement)(l,{className:(0,s.Z)("margin-top--md",l.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:a.map(function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==i})})})}function O(e){var n=function(e){var n,t,r,s,i,h,b,y,v,g,x,w,j,O,S=e.defaultValue,k=e.queryString,T=e.groupId;var E=(t=(n=e).values,r=n.children,(0,o.useMemo)(function(){var e=null!=t?t:f(r).map(function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}});return!function(e){var n=(0,d.lx)(e,function(e,n){return e.value===n.value});if(n.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(n.map(function(e){return e.value}).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[t,r])),D=p((0,o.useState)(function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(t,'" but none of its children has the corresponding value. Available values are: ').concat(r.map(function(e){return e.value}).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return t}var o=null!==(n=r.find(function(e){return e.default}))&&void 0!==n?n:r[0];if(!o)throw Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:S,tabValues:E})}),2),I=D[0],R=D[1];var N=p((i=(s={queryString:void 0!==k&&k,groupId:T}).queryString,h=s.groupId,b=(0,a.k6)(),y=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:void 0!==i&&i,groupId:h}),[(0,c._X)(y),(0,o.useCallback)(function(e){if(!!y){var n,t,r=new URLSearchParams(b.location.search);r.set(y,e),b.replace((n=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r,o,s;r=e,o=n,s=t[n],o in r?Object.defineProperty(r,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[o]=s})}return e}({},b.location),t=(t={search:r.toString()},t),Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}),n))}},[y,b])]),2),M=N[0],C=N[1];var P=p((g=(v=({groupId:T}).groupId)?"docusaurus.tab.".concat(v):null,w=(x=p((0,u.Nk)(g),2))[0],j=x[1],[w,(0,o.useCallback)(function(e){if(!!g)j.set(e)},[g,j])]),2),L=P[0],B=P[1];var A=m({value:O=null!=M?M:L,tabValues:E})?O:null;return(0,l.Z)(function(){A&&R(A)},[A]),{selectedValue:I,selectValue:(0,o.useCallback)(function(e){if(!m({value:e,tabValues:E}))throw Error("Can't select invalid tab value=".concat(e));R(e),C(e),B(e)},[C,B,E]),tabValues:E}}(e);return(0,r.jsxs)("div",{className:(0,s.Z)("tabs-container",y),children:[(0,r.jsx)(w,g({},n,e)),(0,r.jsx)(j,g({},n,e))]})}function S(e){var n=(0,b.Z)();return(0,r.jsx)(O,x(g({},e),{children:f(e.children)}),String(n))}},80980:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var r=t(27378);let o={},s=r.createContext(o);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);