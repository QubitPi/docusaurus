"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["49016"],{38060:function(e,a,n){n.r(a),n.d(a,{metadata:()=>t,contentTitle:()=>b,default:()=>f,assets:()=>p,toc:()=>m,frontMatter:()=>h});var t=JSON.parse('{"id":"guides/markdown-features/tabs","title":"Tabs","description":"Using tabs inside Docusaurus Markdown","source":"@site/docs/guides/markdown-features/markdown-features-tabs.mdx","sourceDirName":"guides/markdown-features","slug":"/markdown-features/tabs","permalink":"/docs/markdown-features/tabs","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-tabs.mdx","tags":[],"version":"current","lastUpdatedBy":"Jiaqi Liu","lastUpdatedAt":1729490122000,"frontMatter":{"id":"tabs","description":"Using tabs inside Docusaurus Markdown","slug":"/markdown-features/tabs"},"sidebar":"docs","previous":{"title":"MDX and React","permalink":"/docs/markdown-features/react"},"next":{"title":"Code blocks","permalink":"/docs/markdown-features/code-blocks"}}'),r=n("24246"),s=n("80980"),l=n("14522"),i=n("15398"),o=n("58636");let c="red_FE5X",u="orange_kp8w",d="yellow_uGry",h={id:"tabs",description:"Using tabs inside Docusaurus Markdown",slug:"/markdown-features/tabs"},b="Tabs",p={},m=[{value:"Displaying a default tab",id:"displaying-a-default-tab",level:2},{value:"Syncing tab choices",id:"syncing-tab-choices",level:2},{value:"Customizing tabs",id:"customizing-tabs",level:2},{value:"Customizing tab headings",id:"customizing-tab-headings",level:3},{value:"Query string",id:"query-string",level:2}];function g(e){let a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Details:n}=a;return!n&&function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"tabs",children:"Tabs"})}),"\n","\n",(0,r.jsxs)(a.p,{children:["Docusaurus provides the ",(0,r.jsx)(a.code,{children:"<Tabs>"})," component that you can use in Markdown thanks to ",(0,r.jsx)(a.a,{href:"/docs/markdown-features/react",children:"MDX"}),":"]}),"\n","\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-jsx",children:'import Tabs from \'@theme/Tabs\';\nimport TabItem from \'@theme/TabItem\';\n\n<Tabs>\n  <TabItem value="apple" label="Apple" default>\n    This is an apple \uD83C\uDF4E\n  </TabItem>\n  <TabItem value="orange" label="Orange">\n    This is an orange \uD83C\uDF4A\n  </TabItem>\n  <TabItem value="banana" label="Banana">\n    This is a banana \uD83C\uDF4C\n  </TabItem>\n</Tabs>\n'})}),"\n",(0,r.jsx)(l.Z,{children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(o.Z,{value:"apple",label:"Apple",children:"This is an apple \uD83C\uDF4E"}),(0,r.jsx)(o.Z,{value:"orange",label:"Orange",children:"This is an orange \uD83C\uDF4A"}),(0,r.jsx)(o.Z,{value:"banana",label:"Banana",children:"This is a banana \uD83C\uDF4C"})]})}),"\n",(0,r.jsx)(a.hr,{}),"\n",(0,r.jsxs)(a.p,{children:["It is also possible to provide ",(0,r.jsx)(a.code,{children:"values"})," and ",(0,r.jsx)(a.code,{children:"defaultValue"})," props to ",(0,r.jsx)(a.code,{children:"Tabs"}),":"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-jsx",children:"<Tabs\n  defaultValue=\"apple\"\n  values={[\n    {label: 'Apple', value: 'apple'},\n    {label: 'Orange', value: 'orange'},\n    {label: 'Banana', value: 'banana'},\n  ]}>\n  <TabItem value=\"apple\">This is an apple \uD83C\uDF4E</TabItem>\n  <TabItem value=\"orange\">This is an orange \uD83C\uDF4A</TabItem>\n  <TabItem value=\"banana\">This is a banana \uD83C\uDF4C</TabItem>\n</Tabs>\n"})}),"\n",(0,r.jsx)(l.Z,{children:(0,r.jsxs)(i.Z,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],children:[(0,r.jsx)(o.Z,{value:"apple",children:"This is an apple \uD83C\uDF4E"}),(0,r.jsx)(o.Z,{value:"orange",children:"This is an orange \uD83C\uDF4A"}),(0,r.jsx)(o.Z,{value:"banana",children:"This is a banana \uD83C\uDF4C"})]})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsxs)("summary",{children:[(0,r.jsx)("code",{children:"Tabs"})," props take precedence over the ",(0,r.jsx)("code",{children:"TabItem"})," props:"]}),(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-jsx",children:'<Tabs\n  defaultValue="apple"\n  values={[\n    {label: \'Apple 1\', value: \'apple\'},\n    {label: \'Orange 1\', value: \'orange\'},\n    {label: \'Banana 1\', value: \'banana\'},\n  ]}>\n  <TabItem value="apple" label="Apple 2">\n    This is an apple \uD83C\uDF4E\n  </TabItem>\n  <TabItem value="orange" label="Orange 2">\n    This is an orange \uD83C\uDF4A\n  </TabItem>\n  <TabItem value="banana" label="Banana 2" default>\n    This is a banana \uD83C\uDF4C\n  </TabItem>\n</Tabs>\n'})}),(0,r.jsx)(l.Z,{children:(0,r.jsxs)(i.Z,{defaultValue:"apple",values:[{label:"Apple 1",value:"apple"},{label:"Orange 1",value:"orange"},{label:"Banana 1",value:"banana"}],children:[(0,r.jsx)(o.Z,{value:"apple",label:"Apple 2",children:"This is an apple \uD83C\uDF4E"}),(0,r.jsx)(o.Z,{value:"orange",label:"Orange 2",children:"This is an orange \uD83C\uDF4A"}),(0,r.jsx)(o.Z,{value:"banana",label:"Banana 2",default:!0,children:"This is a banana \uD83C\uDF4C"})]})})]}),"\n",(0,r.jsxs)(a.admonition,{type:"tip",children:[(0,r.jsx)(a.p,{children:"By default, all tabs are rendered eagerly during the build process, and search engines can index hidden tabs."}),(0,r.jsxs)(a.p,{children:["It is possible to only render the default tab with ",(0,r.jsx)(a.code,{children:"<Tabs lazy />"}),"."]})]}),"\n",(0,r.jsx)(a.h2,{id:"displaying-a-default-tab",children:"Displaying a default tab"}),"\n",(0,r.jsxs)(a.p,{children:["The first tab is displayed by default, and to override this behavior, you can specify a default tab by adding ",(0,r.jsx)(a.code,{children:"default"})," to one of the tab items. You can also set the ",(0,r.jsx)(a.code,{children:"defaultValue"})," prop of the ",(0,r.jsx)(a.code,{children:"Tabs"})," component to the label value of your choice. For example, in the example above, either setting ",(0,r.jsx)(a.code,{children:"default"})," for the ",(0,r.jsx)(a.code,{children:'value="apple"'})," tab or setting ",(0,r.jsx)(a.code,{children:'defaultValue="apple"'}),' for the tabs forces the "Apple" tab to be open by default.']}),"\n",(0,r.jsxs)(a.p,{children:["Docusaurus will throw an error if a ",(0,r.jsx)(a.code,{children:"defaultValue"})," is provided for the ",(0,r.jsx)(a.code,{children:"Tabs"})," but it refers to a non-existing value. If you want none of the tabs to be shown by default, use ",(0,r.jsx)(a.code,{children:"defaultValue={null}"}),"."]}),"\n",(0,r.jsx)(a.h2,{id:"syncing-tab-choices",children:"Syncing tab choices"}),"\n",(0,r.jsxs)(a.p,{children:["You may want choices of the same kind of tabs to sync with each other. For example, you might want to provide different instructions for users on Windows vs users on macOS, and you want to change all OS-specific instructions tabs in one click. To achieve that, you can give all related tabs the same ",(0,r.jsx)(a.code,{children:"groupId"})," prop. Note that doing this will persist the choice in ",(0,r.jsx)(a.code,{children:"localStorage"})," and all ",(0,r.jsx)(a.code,{children:"<Tab>"})," instances with the same ",(0,r.jsx)(a.code,{children:"groupId"})," will update automatically when the value of one of them is changed. Note that group IDs are globally namespaced."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-jsx",children:'// highlight-next-line\n<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">Use Ctrl + C to copy.</TabItem>\n  <TabItem value="mac" label="macOS">Use Command + C to copy.</TabItem>\n</Tabs>\n\n// highlight-next-line\n<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">Use Ctrl + V to paste.</TabItem>\n  <TabItem value="mac" label="macOS">Use Command + V to paste.</TabItem>\n</Tabs>\n'})}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsxs)(i.Z,{groupId:"operating-systems",children:[(0,r.jsx)(o.Z,{value:"win",label:"Windows",children:"Use Ctrl + C to copy."}),(0,r.jsx)(o.Z,{value:"mac",label:"macOS",children:"Use Command + C to copy."})]}),(0,r.jsxs)(i.Z,{groupId:"operating-systems",children:[(0,r.jsx)(o.Z,{value:"win",label:"Windows",children:"Use Ctrl + V to paste."}),(0,r.jsx)(o.Z,{value:"mac",label:"macOS",children:"Use Command + V to paste."})]})]}),"\n",(0,r.jsxs)(a.p,{children:["For all tab groups that have the same ",(0,r.jsx)(a.code,{children:"groupId"}),", the possible values do not need to be the same. If one tab group is chosen a value that does not exist in another tab group with the same ",(0,r.jsx)(a.code,{children:"groupId"}),", the tab group with the missing value won't change its tab. You can see that from the following example. Try to select Linux, and the above tab groups don't change."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-jsx",children:'<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">\n    I am Windows.\n  </TabItem>\n  <TabItem value="mac" label="macOS">\n    I am macOS.\n  </TabItem>\n  <TabItem value="linux" label="Linux">\n    I am Linux.\n  </TabItem>\n</Tabs>\n'})}),"\n",(0,r.jsx)(l.Z,{children:(0,r.jsxs)(i.Z,{groupId:"operating-systems",children:[(0,r.jsx)(o.Z,{value:"win",label:"Windows",children:"I am Windows."}),(0,r.jsx)(o.Z,{value:"mac",label:"macOS",children:"I am macOS."}),(0,r.jsx)(o.Z,{value:"linux",label:"Linux",children:"I am Linux."})]})}),"\n",(0,r.jsx)(a.hr,{}),"\n",(0,r.jsx)(a.p,{children:"Tab choices with different group IDs will not interfere with each other:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-jsx",children:'// highlight-next-line\n<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">Windows in windows.</TabItem>\n  <TabItem value="mac" label="macOS">macOS is macOS.</TabItem>\n</Tabs>\n\n// highlight-next-line\n<Tabs groupId="non-mac-operating-systems">\n  <TabItem value="win" label="Windows">Windows is windows.</TabItem>\n  <TabItem value="unix" label="Unix">Unix is unix.</TabItem>\n</Tabs>\n'})}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsxs)(i.Z,{groupId:"operating-systems",children:[(0,r.jsx)(o.Z,{value:"win",label:"Windows",children:"Windows in windows."}),(0,r.jsx)(o.Z,{value:"mac",label:"macOS",children:"macOS is macOS."})]}),(0,r.jsxs)(i.Z,{groupId:"non-mac-operating-systems",children:[(0,r.jsx)(o.Z,{value:"win",label:"Windows",children:"Windows is windows."}),(0,r.jsx)(o.Z,{value:"unix",label:"Unix",children:"Unix is unix."})]})]}),"\n",(0,r.jsx)(a.h2,{id:"customizing-tabs",children:"Customizing tabs"}),"\n",(0,r.jsxs)(a.p,{children:["You might want to customize the appearance of a certain set of tabs. You can pass the string in ",(0,r.jsx)(a.code,{children:"className"})," prop, and the specified CSS class will be added to the ",(0,r.jsx)(a.code,{children:"Tabs"})," component:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-jsx",children:'// highlight-next-line\n<Tabs className="unique-tabs">\n  <TabItem value="Apple">This is an apple \uD83C\uDF4E</TabItem>\n  <TabItem value="Orange">This is an orange \uD83C\uDF4A</TabItem>\n  <TabItem value="Banana">This is a banana \uD83C\uDF4C</TabItem>\n</Tabs>\n'})}),"\n",(0,r.jsx)(l.Z,{children:(0,r.jsxs)(i.Z,{className:"unique-tabs",children:[(0,r.jsx)(o.Z,{value:"Apple",children:"This is an apple \uD83C\uDF4E"}),(0,r.jsx)(o.Z,{value:"Orange",children:"This is an orange \uD83C\uDF4A"}),(0,r.jsx)(o.Z,{value:"Banana",children:"This is a banana \uD83C\uDF4C"})]})}),"\n",(0,r.jsx)(a.h3,{id:"customizing-tab-headings",children:"Customizing tab headings"}),"\n",(0,r.jsxs)(a.p,{children:["You can also customize each tab heading independently by using the ",(0,r.jsx)(a.code,{children:"attributes"})," field. The extra props can be passed to the headings either through the ",(0,r.jsx)(a.code,{children:"values"})," prop in ",(0,r.jsx)(a.code,{children:"Tabs"}),", or props of each ",(0,r.jsx)(a.code,{children:"TabItem"}),"\u2014in the same way as you declare ",(0,r.jsx)(a.code,{children:"label"}),"."]}),"\n","\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-jsx",metastring:'title="some-doc.mdx"',children:'import styles from \'./styles.module.css\';\n\n<Tabs>\n  <TabItem value="apple" label="Apple" attributes={{className: styles.red}}>\n    This is an apple \uD83C\uDF4E\n  </TabItem>\n  <TabItem value="orange" label="Orange" attributes={{className: styles.orange}}>\n    This is an orange \uD83C\uDF4A\n  </TabItem>\n  <TabItem value="banana" label="Banana" attributes={{className: styles.yellow}}>\n    This is a banana \uD83C\uDF4C\n  </TabItem>\n</Tabs>\n'})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-css",metastring:'title="styles.module.css"',children:".red {\n  color: red;\n}\n.red[aria-selected='true'] {\n  border-bottom-color: red;\n}\n\n.orange {\n  color: orange;\n}\n.orange[aria-selected='true'] {\n  border-bottom-color: orange;\n}\n\n.yellow {\n  color: yellow;\n}\n.yellow[aria-selected='true'] {\n  border-bottom-color: yellow;\n}\n"})}),"\n",(0,r.jsx)(l.Z,{children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(o.Z,{value:"apple",label:"Apple",attributes:{className:c},children:(0,r.jsx)(a.p,{children:"This is an apple \uD83C\uDF4E"})}),(0,r.jsx)(o.Z,{value:"orange",label:"Orange",attributes:{className:u},children:(0,r.jsx)(a.p,{children:"This is an orange \uD83C\uDF4A"})}),(0,r.jsx)(o.Z,{value:"banana",label:"Banana",attributes:{className:d},children:(0,r.jsx)(a.p,{children:"This is a banana \uD83C\uDF4C"})})]})}),"\n",(0,r.jsxs)(a.admonition,{type:"tip",children:[(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"className"})," would be merged with other default class names. You may also use a custom ",(0,r.jsx)(a.code,{children:"data-value"})," field (",(0,r.jsx)(a.code,{children:"{'data-value': 'apple'}"}),") paired with CSS attribute selectors:"]}),(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-css",metastring:'title="styles.module.css"',children:"li[role='tab'][data-value='apple'] {\n  color: red;\n}\n"})})]}),"\n",(0,r.jsx)(a.h2,{id:"query-string",children:"Query string"}),"\n",(0,r.jsx)(a.p,{children:"It is possible to persist the selected tab into the url search parameters. This enables you to share a link to a page which pre-selects the tab - linking from your Android app to documentation with the Android tabs pre-selected. This feature does not provide an anchor link - the browser will not scroll to the tab."}),"\n",(0,r.jsxs)(a.p,{children:["Use the ",(0,r.jsx)(a.code,{children:"queryString"})," prop to enable this feature and define the search param name to use."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-tsx",children:'// highlight-next-line\n<Tabs queryString="current-os">\n  <TabItem value="android" label="Android">\n    Android\n  </TabItem>\n  <TabItem value="ios" label="iOS">\n    iOS\n  </TabItem>\n</Tabs>\n'})}),"\n",(0,r.jsx)(l.Z,{children:(0,r.jsxs)(i.Z,{queryString:"current-os",children:[(0,r.jsx)(o.Z,{value:"android",label:"Android",children:"Android"}),(0,r.jsx)(o.Z,{value:"ios",label:"iOS",children:"iOS"})]})}),"\n",(0,r.jsxs)(a.p,{children:["As soon as a tab is clicked, a search parameter is added at the end of the url: ",(0,r.jsx)(a.code,{children:"?current-os=android"})," or ",(0,r.jsx)(a.code,{children:"?current-os=ios"}),"."]}),"\n",(0,r.jsxs)(a.admonition,{type:"tip",children:[(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"queryString"})," can be used together with ",(0,r.jsx)(a.code,{children:"groupId"}),"."]}),(0,r.jsxs)(a.p,{children:["For convenience, when the ",(0,r.jsx)(a.code,{children:"queryString"})," prop is ",(0,r.jsx)(a.code,{children:"true"}),", the ",(0,r.jsx)(a.code,{children:"groupId"})," value will be used as a fallback."]}),(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-tsx",children:'// highlight-next-line\n<Tabs groupId="current-os" queryString>\n  <TabItem value="android" label="Android">\n    Android\n  </TabItem>\n  <TabItem value="ios" label="iOS">\n    iOS\n  </TabItem>\n</Tabs>\n'})}),(0,r.jsx)(l.Z,{children:(0,r.jsxs)(i.Z,{queryString:!0,groupId:"current-os",children:[(0,r.jsx)(o.Z,{value:"android",label:"Android",children:"Android"}),(0,r.jsx)(o.Z,{value:"ios",label:"iOS",children:"iOS"})]})}),(0,r.jsxs)(a.p,{children:["When the page loads, the tab query string choice will be restored in priority over the ",(0,r.jsx)(a.code,{children:"groupId"})," choice (using ",(0,r.jsx)(a.code,{children:"localStorage"}),")."]})]})]})}function f(e={}){let{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},58636:function(e,a,n){n.d(a,{Z:()=>l});var t=n("24246");n("27378");var r=n("90496");let s="tabItem_pnkT";function l(e){var a=e.children,n=e.hidden,l=e.className;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:n,children:a})}},15398:function(e,a,n){n.d(a,{Z:()=>I});var t=n("24246"),r=n("27378"),s=n("90496"),l=n("54947"),i=n("3620"),o=n("844"),c=n("97486"),u=n("32263"),d=n("16971");function h(e,a){(null==a||a>e.length)&&(a=e.length);for(var n=0,t=Array(a);n<a;n++)t[n]=e[n];return t}function b(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var n,t,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var s=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(s.push(n.value),!a||s.length!==a);l=!0);}catch(e){i=!0,t=e}finally{try{!l&&null!=r.return&&r.return()}finally{if(i)throw t}}return s}}(e,a)||function(e,a){if(e){if("string"==typeof e)return h(e,a);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,a)}}(e,a)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e){var a,n;return null!==(n=null===(a=r.Children.toArray(e).filter(function(e){return"\n"!==e}).map(function(e){var a,n;if(!e||(0,r.isValidElement)(e)&&(a=e.props)&&(void 0===a?"undefined":(n=a)&&"undefined"!=typeof Symbol&&n.constructor===Symbol?"symbol":typeof n)=="object"&&"value"in a)return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===a?void 0:a.filter(Boolean))&&void 0!==n?n:[]}function m(e){var a=e.value;return e.tabValues.some(function(e){return e.value===a})}var g=n("71607");let f="tabList_Qoir",j="tabItem_AQgk";function x(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(a){var t,r,s;t=e,r=a,s=n[a],r in t?Object.defineProperty(t,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[r]=s})}return e}function v(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):(function(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n.push.apply(n,t)}return n})(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}),e}function y(e){var a=e.className,n=e.block,r=e.selectedValue,i=e.selectValue,o=e.tabValues,c=[],u=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var a=e.currentTarget,n=o[c.indexOf(a)].value;n!==r&&(u(a),i(n))},h=function(e){var a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,t=c.indexOf(e.currentTarget)+1;a=null!==(n=c[t])&&void 0!==n?n:c[0];break;case"ArrowLeft":var r,s=c.indexOf(e.currentTarget)-1;a=null!==(r=c[s])&&void 0!==r?r:c[c.length-1]}null==a||a.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},a),children:o.map(function(e){var a=e.value,n=e.label,l=e.attributes;return(0,t.jsx)("li",v(x({role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:function(e){return c.push(e)},onKeyDown:h,onClick:d},l),{className:(0,s.Z)("tabs__item",j,null==l?void 0:l.className,{"tabs__item--active":r===a}),children:null!=n?n:a}),a)})})}function T(e){var a=e.lazy,n=e.children,l=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){var o=i.find(function(e){return e.props.value===l});return o?(0,r.cloneElement)(o,{className:(0,s.Z)("margin-top--md",o.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map(function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==l})})})}function w(e){var a=function(e){var a,n,t,s,l,h,g,f,j,x,v,y,T,w,I=e.defaultValue,O=e.queryString,S=e.groupId;var Z=(n=(a=e).values,t=a.children,(0,r.useMemo)(function(){var e=null!=n?n:p(t).map(function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}});return!function(e){var a=(0,u.lx)(e,function(e,a){return e.value===a.value});if(a.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(a.map(function(e){return e.value}).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[n,t])),k=b((0,r.useState)(function(){return function(e){var a,n=e.defaultValue,t=e.tabValues;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(n,'" but none of its children has the corresponding value. Available values are: ').concat(t.map(function(e){return e.value}).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return n}var r=null!==(a=t.find(function(e){return e.default}))&&void 0!==a?a:t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:I,tabValues:Z})}),2),N=k[0],A=k[1];var P=b((l=(s={queryString:void 0!==O&&O,groupId:S}).queryString,h=s.groupId,g=(0,i.k6)(),f=function(e){var a=e.queryString,n=void 0!==a&&a,t=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:void 0!==l&&l,groupId:h}),[(0,c._X)(f),(0,r.useCallback)(function(e){if(!!f){var a,n,t=new URLSearchParams(g.location.search);t.set(f,e),g.replace((a=function(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(a){var t,r,s;t=e,r=a,s=n[a],r in t?Object.defineProperty(t,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[r]=s})}return e}({},g.location),n=(n={search:t.toString()},n),Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):(function(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n.push.apply(n,t)}return n})(Object(n)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}),a))}},[f,g])]),2),V=P[0],D=P[1];var C=b((x=(j=({groupId:S}).groupId)?"docusaurus.tab.".concat(j):null,y=(v=b((0,d.Nk)(x),2))[0],T=v[1],[y,(0,r.useCallback)(function(e){if(!!x)T.set(e)},[x,T])]),2),q=C[0],E=C[1];var U=m({value:w=null!=V?V:q,tabValues:Z})?w:null;return(0,o.Z)(function(){U&&A(U)},[U]),{selectedValue:N,selectValue:(0,r.useCallback)(function(e){if(!m({value:e,tabValues:Z}))throw Error("Can't select invalid tab value=".concat(e));A(e),D(e),E(e)},[D,E,Z]),tabValues:Z}}(e);return(0,t.jsxs)("div",{className:(0,s.Z)("tabs-container",f),children:[(0,t.jsx)(y,x({},a,e)),(0,t.jsx)(T,x({},a,e))]})}function I(e){var a=(0,g.Z)();return(0,t.jsx)(w,v(x({},e),{children:p(e.children)}),String(a))}},14522:function(e,a,n){n.d(a,{Z:()=>b});var t=n("24246");n("27378");var r=n("90496");let s="browserWindow_my1Q",l="browserWindowHeader_jXSR",i="buttons_uHc7",o="browserWindowAddressBar_Pd8y",c="dot_giz1",u="browserWindowMenuIcon_Vhuh",d="bar_rrRL",h="browserWindowBody_Idgs";function b(e){var a,n,b=e.children,p=e.minHeight,m=e.url,g=e.style,f=e.bodyStyle;return(0,t.jsxs)("div",{className:s,style:(a=function(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(a){var t,r,s;t=e,r=a,s=n[a],r in t?Object.defineProperty(t,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[r]=s})}return e}({},g),n=(n={minHeight:p},n),Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):(function(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n.push.apply(n,t)}return n})(Object(n)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}),a),children:[(0,t.jsxs)("div",{className:l,children:[(0,t.jsxs)("div",{className:i,children:[(0,t.jsx)("span",{className:c,style:{background:"#f25f58"}}),(0,t.jsx)("span",{className:c,style:{background:"#fbbe3c"}}),(0,t.jsx)("span",{className:c,style:{background:"#58cb42"}})]}),(0,t.jsx)("div",{className:(0,r.Z)(o,"text--truncate"),children:void 0===m?"http://localhost:3000":m}),(0,t.jsx)("div",{className:u,children:(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:d}),(0,t.jsx)("span",{className:d}),(0,t.jsx)("span",{className:d})]})})]}),(0,t.jsx)("div",{className:h,style:f,children:b})]})}},80980:function(e,a,n){n.d(a,{Z:function(){return i},a:function(){return l}});var t=n(27378);let r={},s=t.createContext(r);function l(e){let a=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);