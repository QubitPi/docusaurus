"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85118],{71482:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=i(24246),s=i(71670);const a={mdx:{format:"md"},date:"2019-10-26T20:00"},o="2.0.0-alpha.31",l={permalink:"/changelog/2.0.0-alpha.31",source:"@site/changelog/source/2.0.0-alpha.31.md",title:"2.0.0-alpha.31",description:"- Footer is now sticky/ pinned to the bottom of the viewport in desktop browsers.",date:"2019-10-26T20:00:00.000Z",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{mdx:{format:"md"},date:"2019-10-26T20:00"},unlisted:!1,prevItem:{title:"2.0.0-alpha.32",permalink:"/changelog/2.0.0-alpha.32"},nextItem:{title:"2.0.0-alpha.30",permalink:"/changelog/2.0.0-alpha.30"},listPageLink:"/changelog/page/4"},r={authorsImageUrls:[]},c=[];function d(e){const t={code:"code",li:"li",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Footer is now sticky/ pinned to the bottom of the viewport in desktop browsers."}),"\n",(0,n.jsx)(t.li,{children:"Footer is now also displayed in docs page for consistency."}),"\n",(0,n.jsx)(t.li,{children:"Remove empty doc sidebar container if sidebar for a particular doc page does not exist. Otherwise, it will cause an additional empty space."}),"\n",(0,n.jsx)(t.li,{children:"Default PostCSS loader now only polyfills stage 3+ features (previously it was stage 2) like Create React App. Stage 2 CSS is considered relatively unstable and subject to change while Stage 3 features will likely become a standard."}),"\n",(0,n.jsx)(t.li,{children:"Fix search bar focus bug. When you put the focus on search input, previously the focus will remain although we have clicked to other area outside of the search input."}),"\n",(0,n.jsxs)(t.li,{children:["New themeConfig option ",(0,n.jsx)(t.code,{children:"sidebarCollapsible"}),". It is on by default. If explicitly set to ",(0,n.jsx)(t.code,{children:"false"}),", all doc items in sidebar is expanded. Otherwise, it will still be a collapsible sidebar."]}),"\n",(0,n.jsx)(t.li,{children:"Disable adding hashes to the generated class names of CSS modules in dev mode. Generating unique identifiers takes some time, which can be saved since including paths to files in class names is enough to avoid collisions."}),"\n",(0,n.jsx)(t.li,{children:"Fix showing sidebar category with empty items."}),"\n",(0,n.jsxs)(t.li,{children:["Update infima from 0.2.0-alpha.2 to 0.2.0-alpha.3\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Fix pagination nav and right sidebar color contrast ratio"}),"\n",(0,n.jsx)(t.li,{children:"Fix sidebar arrow color in dark mode"}),"\n",(0,n.jsx)(t.li,{children:"Fix footer mobile issue"}),"\n",(0,n.jsx)(t.li,{children:"Increase sidebar width"}),"\n",(0,n.jsx)(t.li,{children:"etc"}),"\n"]}),"\n"]}),"\n"]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},71670:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>o});var n=i(27378);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);