"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[446],{446:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});s(511),s(510),s(569),s(815);s(295);var c=s(650);s(85),s(703);var a=s(18),n=s(451);s(389),s(445);const r={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};s(659);class u extends n._{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(r)}async _handle(e,t){const s=t.fetchAndCachePut(e).catch((()=>{}));t.waitUntil(s);let c,n=await t.cacheMatch(e);if(n)0;else{0;try{n=await s}catch(e){e instanceof Error&&(c=e)}}if(!n)throw new a.V("no-response",{url:e.url,error:c});return n}}s(540);function o(e){e.debug&&console.log("[Docusaurus-PWA][SW]: running swCustom code",e),(0,c.X)((e=>[/graph\.facebook\.com\/.*\/picture/,/netlify\.com\/img/,/avatars1\.githubusercontent/].some((t=>e.url.href.match(t)))),new u)}}}]);