"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["47038"],{88593:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/social-card-0662a6f419d0032829f99915ccf8918b.png"},88345:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/argos-github-comment-8b62a1561b13881608d5c9f8a8f833a5.png"},8906:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/argos-github-status-05e8264c59fa4f8a21292f59665edf3d.png"},64851:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/argos-react-native-regression-216ace77baedfaf873a770112ec817ac.png"},37261:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/docusaurus-argos-example-repo-screenshot-a56583e16aa02c7fa96c592f1339928f.png"},40610:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/social-card-0662a6f419d0032829f99915ccf8918b.png"},76808:function(e,n,s){s.r(n),s.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return o},metadata:function(){return t},toc:function(){return c}});var t=s(68164),i=s(24246),r=s(80980);let o={authors:["slorber"],tags:["release"],slug:"/upgrading-frontend-dependencies-with-confidence-using-visual-regression-testing",description:"Upgrade npm dependencies with confidence thanks to a visual regression testing workflow using GitHub Actions, Playwright and Argos.",image:"./img/social-card.png"},a="Upgrading frontend dependencies with confidence",l={image:s(88593).Z,authorsImageUrls:[void 0]},c=[{value:"Workflow overview",id:"workflow-overview",level:2},{value:"Workflow implementation",id:"workflow-implementation",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"GitHub Action",id:"github-action",level:3},{value:"Playwright config",id:"playwright-config",level:3},{value:"Playwright test",id:"playwright-test",level:3},{value:"Stylesheet",id:"stylesheet",level:3},{value:"Example repository",id:"example-repository",level:2},{value:"Make it cheap",id:"make-it-cheap",level:2},{value:"Limit the number of pathnames",id:"limit-the-number-of-pathnames",level:3},{value:"Limit the workflow concurrency",id:"limit-the-workflow-concurrency",level:3},{value:"Run your workflow conditionally",id:"run-your-workflow-conditionally",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"See also",id:"see-also",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Frontend developers often need to ",(0,i.jsx)(n.strong,{children:"upgrade npm dependencies"}),", but those upgrades can feel scary and lead to ",(0,i.jsx)(n.strong,{children:"subtle UI side effects"})," not caught by your regular test suite."]}),"\n",(0,i.jsxs)(n.p,{children:["Upgrading Docusaurus is a good example: without reviewing all the pages one by one, it's hard to be sure there's no visual regression. ",(0,i.jsx)(n.strong,{children:"Docusaurus v3 is around the corner"})," (currently in ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/discussions/9312",children:"beta"}),"), and we would like to help you do this upgrade with confidence."]}),"\n",(0,i.jsxs)(n.p,{children:["This article introduces a ",(0,i.jsx)(n.strong,{children:"visual regression testing"})," workflow based on ",(0,i.jsx)(n.a,{href:"https://github.com/features/actions",children:(0,i.jsx)(n.strong,{children:"GitHub Actions"})}),", ",(0,i.jsx)(n.a,{href:"https://playwright.dev/",children:(0,i.jsx)(n.strong,{children:"Playwright"})}),", and ",(0,i.jsx)(n.a,{href:"https://argos-ci.com/",children:(0,i.jsx)(n.strong,{children:"Argos"})}),". It is not directly coupled to Docusaurus or React, and can be adapted to work with other frontend applications and frameworks."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Upgrading frontend dependencies with confidence - social card",src:s(40610).Z+"",width:"1500",height:"785"})}),"\n",(0,i.jsxs)(n.p,{children:["This workflow has been tested while upgrading Docusaurus v2 to v3, and already helped catch a few visual regressions on sites such as ",(0,i.jsx)(n.a,{href:"https://reactnative.dev/",children:"React Native"}),", ",(0,i.jsx)(n.a,{href:"https://jestjs.io/",children:"Jest"}),", and the ",(0,i.jsx)(n.a,{href:"https://docusaurus.io/",children:"Docusaurus"})," site itself."]}),"\n",(0,i.jsxs)(n.p,{children:["Docusaurus v3 comes with infrastructure changes and major dependency upgrades such as ",(0,i.jsx)(n.a,{href:"https://mdxjs.com/blog/v3/",children:"MDX v3"})," and ",(0,i.jsx)(n.a,{href:"https://react.dev/blog/2022/03/29/react-v18",children:"React 18"}),", which can produce unexpected side effects. It would have been difficult to notice all the visual regressions without such a workflow. That's why we encourage site owners to consider adopting visual regression testing, especially for highly customized sites."]}),"\n",(0,i.jsx)(n.h2,{id:"workflow-overview",children:"Workflow overview"}),"\n",(0,i.jsx)(n.p,{children:"The general idea is pretty simple:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Build your site in CI with ",(0,i.jsx)(n.a,{href:"https://github.com/features/actions",children:"GitHub Actions"})]}),"\n",(0,i.jsxs)(n.li,{children:["Take screenshots of all ",(0,i.jsx)(n.code,{children:"sitemap.xml"})," pages with ",(0,i.jsx)(n.a,{href:"https://playwright.dev/",children:"Playwright"})]}),"\n",(0,i.jsxs)(n.li,{children:["Upload them to ",(0,i.jsx)(n.a,{href:"https://argos-ci.com/",children:"Argos"})]}),"\n",(0,i.jsxs)(n.li,{children:["Do this for both Git branches ",(0,i.jsx)(n.code,{children:"main"})," and ",(0,i.jsx)(n.code,{children:"pr-branch"})]}),"\n",(0,i.jsxs)(n.li,{children:["Compare the screenshots side-by-side in ",(0,i.jsx)(n.a,{href:"https://argos-ci.com/",children:"Argos"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Argos will then ",(0,i.jsx)(n.strong,{children:"report visual differences"})," found between ",(0,i.jsx)(n.code,{children:"main"})," and ",(0,i.jsx)(n.code,{children:"pr-branch"})," as a GitHub commit status and pull-request comment. This can help you detect visual regressions ahead of time in an automated way."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Argos GitHub commit status",src:s(8906).Z+"",width:"978",height:"375"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Argos GitHub PR comment",src:s(88345).Z+"",width:"982",height:"303"})}),"\n",(0,i.jsx)(n.p,{children:"Argos creates a report referencing all the visual differences found while comparing the 2 Git branches sites side-by-side, and provides a convenient UX to easily spot the difference."}),"\n",(0,i.jsxs)(n.p,{children:["Check the ",(0,i.jsx)(n.a,{href:"https://app.argos-ci.com/meta-open-source/docusaurus",children:"Docusaurus Argos page"})," to explore our own website reports."]}),"\n",(0,i.jsxs)(n.p,{children:["Here is a more concrete example of Argos ",(0,i.jsx)(n.a,{href:"https://app.argos-ci.com/slorber/rnw-visual-tests/builds/32/56012838",children:"reporting a visual regression"})," found while upgrading the React-Native website:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://app.argos-ci.com/slorber/rnw-visual-tests/builds/32/56012838",children:(0,i.jsx)(n.img,{alt:"Argos GitHub PR comment",src:s(64851).Z+"",width:"1959",height:"979"})})}),"\n",(0,i.jsx)(n.h2,{id:"workflow-implementation",children:"Workflow implementation"}),"\n",(0,i.jsx)(n.p,{children:"This section will describe the implementation details of each step of the workflow."}),"\n",(0,i.jsxs)(n.p,{children:["You will need to ",(0,i.jsx)(n.a,{href:"https://app.argos-ci.com/signup",children:"sign up to Argos"})," and ",(0,i.jsx)(n.a,{href:"https://argos-ci.com/docs/github",children:"connect Argos to your GitHub repository"})]}),"\n",(0,i.jsx)(n.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsx)(n.p,{children:"This workflow requires the following dev dependencies, in addition to the usual Docusaurus ones:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add -D @argos-ci/cli @argos-ci/playwright @playwright/test cheerio\n"})}),"\n",(0,i.jsx)(n.h3,{id:"github-action",children:"GitHub Action"}),"\n",(0,i.jsx)(n.p,{children:"The GitHub action is responsible for executing the workflow for each Git branch."}),"\n",(0,i.jsx)(n.p,{children:"A minimal workflow could look like:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title=".github/workflows/argos.yml"',children:"name: Argos CI Screenshots\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  take-screenshots:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Check out repository code\n        uses: actions/checkout@v4\n\n      - name: Use Node.js\n        uses: actions/setup-node@v3\n        with:\n          node-version: current\n\n      - name: Install dependencies\n        run: yarn install --frozen-lockfile\n\n      - name: Install Playwright browsers\n        run: yarn playwright install --with-deps chromium\n\n      - name: Build the website\n        run: yarn docusaurus build\n\n      - name: Take screenshots with Playwright\n        run: yarn playwright test\n\n      - name: Upload screenshots to Argos\n        run: yarn argos upload ./screenshots\n"})}),"\n",(0,i.jsx)(n.h3,{id:"playwright-config",children:"Playwright config"}),"\n",(0,i.jsx)(n.p,{children:"Playwright is responsible for taking screenshots of the website previously built locally by the GitHub action."}),"\n",(0,i.jsxs)(n.p,{children:["A minimal ",(0,i.jsx)(n.a,{href:"https://playwright.dev/docs/test-configuration",children:"Playwright config"})," could look like:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="playwright.config.ts"',children:"import {devices} from '@playwright/test';\nimport type {PlaywrightTestConfig} from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  webServer: {\n    port: 3000,\n    command: 'yarn docusaurus serve',\n  },\n  projects: [\n    {\n      name: 'chromium',\n      use: {\n        ...devices['Desktop Chrome'],\n      },\n    },\n  ],\n};\n\nexport default config;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"playwright-test",children:"Playwright test"}),"\n",(0,i.jsx)(n.p,{children:"A Playwright config is not enough: we also need to write a Playwright test file to generate the site screenshots."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="screenshot.spec.ts"',children:"import * as fs from 'fs';\nimport {test} from '@playwright/test';\nimport {argosScreenshot} from '@argos-ci/playwright';\nimport {extractSitemapPathnames, pathnameToArgosName} from './utils';\n\n// Constants\nconst siteUrl = 'http://localhost:3000';\nconst sitemapPath = './build/sitemap.xml';\nconst stylesheetPath = './screenshot.css';\nconst stylesheet = fs.readFileSync(stylesheetPath).toString();\n\n// Wait for hydration, requires Docusaurus v2.4.3+\n// Docusaurus adds a <html data-has-hydrated=\"true\"> once hydrated\n// See https://github.com/facebook/docusaurus/pull/9256\nfunction waitForDocusaurusHydration() {\n  return document.documentElement.dataset.hasHydrated === 'true';\n}\n\nfunction screenshotPathname(pathname: string) {\n  test(`pathname ${pathname}`, async ({page}) => {\n    const url = siteUrl + pathname;\n    await page.goto(url);\n    await page.waitForFunction(waitForDocusaurusHydration);\n    await page.addStyleTag({content: stylesheet});\n    await argosScreenshot(page, pathnameToArgosName(pathname));\n  });\n}\n\ntest.describe('Docusaurus site screenshots', () => {\n  const pathnames = extractSitemapPathnames(sitemapPath);\n  console.log('Pathnames to screenshot:', pathnames);\n  pathnames.forEach(screenshotPathname);\n});\n"})}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Why do we take screenshots with Argos instead of Playwright?"}),(0,i.jsxs)(n.p,{children:["Argos has a ",(0,i.jsx)(n.a,{href:"https://argos-ci.com/docs/playwright",children:"Playwright integration"})," that wraps the original Playwright screenshot API and provides better defaults to make screenshots more deterministic."]})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsxs)("summary",{children:["What's inside ",(0,i.jsx)("code",{children:"utils.ts"}),"?"]}),(0,i.jsx)(n.p,{children:"This module contains implementation details that we choose to hide for clarity."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import * as cheerio from 'cheerio';\nimport * as fs from 'fs';\n\n// Extract a list of pathnames, given a fs path to a sitemap.xml file\n// Docusaurus generates a build/sitemap.xml file for you!\nexport function extractSitemapPathnames(sitemapPath: string): string[] {\n  const sitemap = fs.readFileSync(sitemapPath).toString();\n  const $ = cheerio.load(sitemap, {xmlMode: true});\n  const urls: string[] = [];\n  $('loc').each(function handleLoc() {\n    urls.push($(this).text());\n  });\n  return urls.map((url) => new URL(url).pathname);\n}\n\n// Converts a pathname to a decent screenshot name\nexport function pathnameToArgosName(pathname: string): string {\n  return pathname.replace(/^\\/|\\/$/g, '') || 'index';\n}\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"stylesheet",children:"Stylesheet"}),"\n",(0,i.jsxs)(n.p,{children:["Screenshots are not always deterministic, and taking a screenshot of a page twice can lead to subtle variations that will be reported by Argos as ",(0,i.jsx)(n.strong,{children:"false positive"})," visual regressions."]}),"\n",(0,i.jsxs)(n.p,{children:["For this reason, we recommend injecting an extra stylesheet to hide the problematic elements. You will probably need to add new CSS rules to this base stylesheet, according to flaky elements found on your own site. Read ",(0,i.jsx)(n.a,{href:"https://argos-ci.com/docs/about-flaky",children:"Argos - About flaky tests docs"})," for details."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",metastring:'title="screenshot.css"',children:"/* Iframes can load lazily */\niframe,\n/* Avatars can be flaky due to using external sources: GitHub/Unavatar */\n.avatar__photo,\n/* Gifs load lazily and are animated */\nimg[src$='.gif'],\n/* Algolia keyboard shortcuts appear with a little delay */\n.DocSearch-Button-Keys > kbd,\n/* The live playground preview can often display dates/counters */\n[class*='playgroundPreview'] {\n  visibility: hidden;\n}\n\n/* Different docs last-update dates can alter layout */\n.theme-last-updated,\n/* Mermaid diagrams are rendered client-side and produce layout shifts */\n.docusaurus-mermaid-container {\n  display: none;\n}\n"})}),"\n",(0,i.jsxs)(n.admonition,{title:"prevent layout shifts",type:"tip",children:[(0,i.jsxs)(n.p,{children:["We recommend hiding flaky UI elements affecting layout with ",(0,i.jsx)(n.code,{children:"display: none;"}),"."]}),(0,i.jsx)(n.p,{children:'For example, the docs "Last Updated on" might render on more than 1 line, eventually "pushing" the rest of your content further down, leading to Argos detecting many different pixels.'})]}),"\n",(0,i.jsx)(n.h2,{id:"example-repository",children:"Example repository"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/slorber/docusaurus-argos-example",children:"slorber/docusaurus-argos-example"})," repo shows a complete example of implementing this workflow on a newly initialized Docusaurus v2 site, using a Yarn monorepo."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/slorber/docusaurus-argos-example",children:(0,i.jsx)(n.img,{alt:"Docusaurus + Argos monorepo example screenshot",src:s(37261).Z+"",width:"767",height:"427"})})}),"\n",(0,i.jsx)(n.p,{children:"Relevant pull-requests:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/slorber/docusaurus-argos-example/pull/1",children:"PR - Set up GitHub Action + Playwright + Argos"}),": implements the minimal workflow described above"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/slorber/docusaurus-argos-example/pull/2",children:"PR - Upgrading Docusaurus from v2 to v3"}),": shows how Argos caught 3 visual regressions while upgrading"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{title:"More advanced example?",type:"tip",children:[(0,i.jsx)(n.p,{children:"Browse the Docusaurus repository for a more advanced integration:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/blob/main/.github/workflows/argos.yml",children:"GitHub Action"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/tree/main/argos",children:"Playwright + Argos tests"})}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"make-it-cheap",children:"Make it cheap"}),"\n",(0,i.jsx)(n.p,{children:"The tools we choose are implementation details of this visual regression testing workflow."}),"\n",(0,i.jsxs)(n.p,{children:["For Docusaurus, we choose ",(0,i.jsx)(n.a,{href:"https://argos-ci.com/",children:"Argos"}),": it works well for us, and offers ",(0,i.jsx)(n.a,{href:"https://argos-ci.com/pricing",children:"free"})," and ",(0,i.jsx)(n.a,{href:"https://argos-ci.com/docs/open-source",children:"open source"})," plans. However, you are free to adopt alternative tools."]}),"\n",(0,i.jsxs)(n.p,{children:["In case you don't mind storing large screenshots in Git, you can also try the free, self-hosted ",(0,i.jsx)(n.a,{href:"https://playwright.dev/docs/test-snapshots",children:"Playwright Visual Comparisons"})," and browse visual differences with ",(0,i.jsx)(n.code,{children:"npx playwright show-report"}),". However, we found using a dedicated external tool is more convenient."]}),"\n",(0,i.jsx)(n.p,{children:"External tools can be expensive, but generally offer free plans with an ample quota of screenshots. You can reduce your screenshot consumption by implementing a few tricks below."}),"\n",(0,i.jsx)(n.h3,{id:"limit-the-number-of-pathnames",children:"Limit the number of pathnames"}),"\n",(0,i.jsxs)(n.p,{children:["The base setup involves taking a screenshot of every single pathname found in ",(0,i.jsx)(n.code,{children:"sitemap.xml"}),". For large sites, that can lead to a lot of screenshots."]}),"\n",(0,i.jsx)(n.p,{children:"You can decide to filter the pathnames to only take screenshots of the most critical pages."}),"\n",(0,i.jsx)(n.p,{children:"For the Docusaurus website, do not take screenshots for versioned docs pages:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="screenshot.spec.ts"',children:"// highlight-start\nfunction isVersionedDocsPathname(pathname: string): boolean {\n  return pathname.match(/^\\/docs\\/((\\d\\.\\d\\.\\d)|(next))\\//);\n}\n// highlight-end\n\ntest.describe('Docusaurus site screenshots', () => {\n  const pathnames = extractSitemapPathnames(sitemapPath)\n    // highlight-next-line\n    .filter(isVersionedDocsPathname);\n\n  pathnames.forEach(screenshotPathname);\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"limit-the-workflow-concurrency",children:"Limit the workflow concurrency"}),"\n",(0,i.jsxs)(n.p,{children:["Implementing ",(0,i.jsx)(n.a,{href:"https://docs.github.com/en/actions/using-jobs/using-concurrency",children:"GitHub Actions concurrency groups"})," will prevent successive commits to trigger multiple useless workflow runs. The workflow will only be executed for the last commit, and previous commits will be canceled automatically."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title=".github/workflows/argos.yml"',children:"concurrency:\n  group: ${{ github.workflow }}-${{ github.head_ref || github.run_id }}\n  cancel-in-progress: true\n"})}),"\n",(0,i.jsx)(n.h3,{id:"run-your-workflow-conditionally",children:"Run your workflow conditionally"}),"\n",(0,i.jsx)(n.p,{children:"It's not worth running this workflow for every single commit and pull-request."}),"\n",(0,i.jsx)(n.p,{children:"For example, if someone corrects a typo in your documentation, you probably don't want to take hundreds of screenshots and have Argos to point out that only the modified page has a visual difference: duh, that's a bit expected!"}),"\n",(0,i.jsxs)(n.p,{children:["For the Docusaurus website, we only run the workflow for pull-request having the ",(0,i.jsx)(n.code,{children:"Argos"})," label:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title=".github/workflows/argos.yml"',children:"name: Argos CI Screenshots\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n    # highlight-start\n    types:\n      - opened\n      - synchronize\n      - reopened\n      - labeled\n    # highlight-end\n\njobs:\n  take-screenshots:\n    # highlight-start\n    if: ${{ github.ref_name == 'main' || (github.event_name == 'pull_request' && contains(github.event.pull_request.labels.*.name, 'Argos')) }}\n    # highlight-end\n    runs-on: ubuntu-latest\n    steps:\n      # Your job steps here ...\n"})}),"\n",(0,i.jsxs)(n.p,{children:["There are many options to explore, such as ",(0,i.jsx)(n.a,{href:"https://docs.github.com/en/actions/using-workflows/manually-running-a-workflow",children:"triggering the workflow manually"})," or ",(0,i.jsx)(n.a,{href:"https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#example-including-paths",children:"only when files matching a specific pattern are modified"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(n.p,{children:["I believe ",(0,i.jsx)(n.strong,{children:"visual regression testing is underused"})," in the frontend ecosystem."]}),"\n",(0,i.jsxs)(n.p,{children:["Taking full-page screenshots is a ",(0,i.jsx)(n.strong,{children:"low-hanging fruit"})," that is easy to set up and can help you ",(0,i.jsx)(n.strong,{children:"catch a new class of bugs"})," that your regular test suite would miss. This technique shines not only for npm package upgrades, but also for ",(0,i.jsx)(n.strong,{children:"any kind of refactoring"})," that shouldn't change the user interface."]}),"\n",(0,i.jsx)(n.p,{children:"So why not give it a try?"}),"\n",(0,i.jsx)(n.p,{children:"Happy hacking!"}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:"Useful documentation links:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://playwright.dev/docs/intro",children:"Playwright - Installation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://playwright.dev/docs/test-configuration",children:"Playwright - Test config guide"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://playwright.dev/docs/api/class-testconfig",children:"Playwright - Test config API"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://argos-ci.com/docs/installation",children:"Argos - Installation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://argos-ci.com/docs/github-actions",children:"Argos - Use with GitHub Actions"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://argos-ci.com/docs/playwright",children:"Argos - Use with Playwright"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://argos-ci.com/docs/about-flaky",children:"Argos - About flaky tests"})}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},80980:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return o}});var t=s(27378);let i={},r=t.createContext(i);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}},68164:function(e){e.exports=JSON.parse('{"permalink":"/blog/upgrading-frontend-dependencies-with-confidence-using-visual-regression-testing","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/2023/09-22-upgrading-frontend-dependencies-with-confidence-using-visual-regression-testing/index.mdx","source":"@site/blog/2023/09-22-upgrading-frontend-dependencies-with-confidence-using-visual-regression-testing/index.mdx","title":"Upgrading frontend dependencies with confidence","description":"Upgrade npm dependencies with confidence thanks to a visual regression testing workflow using GitHub Actions, Playwright and Argos.","date":"2023-09-22T00:00:00.000Z","tags":[{"inline":false,"label":"Release","permalink":"/blog/tags/release","description":"Blog posts about Docusaurus\' new releases"}],"readingTime":8.355,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer, This Week In React editor","url":"https://thisweekinreact.com","page":{"permalink":"/blog/authors/slorber"},"description":"A freelance React and React-Native developer near Paris and Docusaurus maintainer. Also runs ThisWeekInReact.com, a newsletter to stay updated with the React ecosystem.\\n","socials":{"x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"authors":["slorber"],"tags":["release"],"slug":"/upgrading-frontend-dependencies-with-confidence-using-visual-regression-testing","description":"Upgrade npm dependencies with confidence thanks to a visual regression testing workflow using GitHub Actions, Playwright and Argos.","image":"./img/social-card.png"},"unlisted":false,"lastUpdatedAt":1729270941000,"lastUpdatedBy":"Andrew Asche","prevItem":{"title":"Preparing your site for Docusaurus v3","permalink":"/blog/preparing-your-site-for-docusaurus-v3"},"nextItem":{"title":"Docusaurus 2.4","permalink":"/blog/releases/2.4"}}')}}]);