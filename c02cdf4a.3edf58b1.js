(window.webpackJsonp=window.webpackJsonp||[]).push([[121,51,132,145],{207:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),o=(n(0),n(243)),r=n(244),i=(n(252),n(253),n(58)),c=(n(66),n(71),n(248)),s=n(249);const l={title:"Implement an Activity that Calculates a Logarithm",description:"Geocortex Workflow - Implement a custom activity for web applications that calculates the logarithm of a number"},p={unversionedId:"workflow/tutorial-web-calculate-logarithm-activity",id:"workflow/tutorial-web-calculate-logarithm-activity",isDocsHomePage:!1,title:"Implement an Activity that Calculates a Logarithm",description:"Geocortex Workflow - Implement a custom activity for web applications that calculates the logarithm of a number",source:"@site/docs/workflow/tutorial-web-calculate-logarithm-activity.mdx",slug:"/workflow/tutorial-web-calculate-logarithm-activity",permalink:"/docs/workflow/tutorial-web-calculate-logarithm-activity",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/tutorial-web-calculate-logarithm-activity.mdx",version:"current",sidebar:"workflow",previous:{title:"Reference a Third Party Library for Web Application Environments",permalink:"/docs/workflow/sdk-web-reference-third-party-library"},next:{title:"Add a Layer to a Map with an Activity",permalink:"/docs/workflow/tutorial-web-add-layer-to-map"}},b=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Set up Activity Skeleton",id:"set-up-activity-skeleton",children:[]},{value:"Implement the Activity",id:"implement-the-activity",children:[]},{value:"Deploy the Activity",id:"deploy-the-activity",children:[]},{value:"Test the Activity",id:"test-the-activity",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],d={toc:b};function u({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Implementing a custom ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/workflow/key-concepts#activities"}),"activity")," allows you to build a reusable, completely custom behavior to augment the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activity-reference.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____0"}),"existing activities")," that come with Geocortex Workflow."),Object(o.b)("p",null,"In this article, you will learn how to create a custom activity that calculates the logarithm of a number with a given base."),Object(o.b)("img",{src:Object(r.a)("img/workflow-web-calculate-logarithm-activity.png")}),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)(i.default,{mdxType:"WebPrereqs"}),Object(o.b)("h2",{id:"set-up-activity-skeleton"},"Set up Activity Skeleton"),Object(o.b)("p",null,"To create a new activity:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open the Workflow activity SDK in Visual Studio Code"),Object(o.b)("li",{parentName:"ol"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"npm run generate")," in the terminal."),Object(o.b)("li",{parentName:"ol"},"When prompted enter the name of the activity you would like to create and press ",Object(o.b)("inlineCode",{parentName:"li"},"Enter"),". For example, ",Object(o.b)("inlineCode",{parentName:"li"},"CustomActivity"),"."),Object(o.b)("li",{parentName:"ol"},"Open the newly created ",Object(o.b)("inlineCode",{parentName:"li"},"src/activities/CustomActivity.ts")," file.")),Object(o.b)("h2",{id:"implement-the-activity"},"Implement the Activity"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"npm run generate")," script creates a custom activity with some dummy inputs and outputs. By changing the inputs, outputs, execute logic, and tags, you can create your own custom activity that has an easy to use interface in the Geocortex Workflow Designer."),Object(o.b)("p",null,"First, let's change the inputs and outputs to properties that make sense for calculating a logarithm."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/workflow/sdk-web-activity-block-tags"}),"Block tags")," are used to provide descriptions for inputs and outputs in the Geocortex Workflow Designer."))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/activities/CustomActivity.ts"',title:'"src/activities/CustomActivity.ts"'}),'import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";\n\n// highlight-start\nexport interface CalculateLogInputs {\n    /**\n     * @description The base of the logarithm. Defaults to the natural log.\n     */\n    base?: number;\n\n    /**\n     * @description The number to calculate the logarithm for.\n     * @required\n     */\n    value: number;\n}\n// highlight-end\n\n// highlight-start\nexport interface CalculateLogOutputs {\n    /**\n     * @description The logarithm output.\n     */\n    result: number;\n}\n// highlight-end\n\n/**\n * @category Custom Activities\n * @description Calculates the logarithm of a number with an optional base.\n */\nexport class CalculateLog implements IActivityHandler {\n    // highlight-next-line\n    async execute(inputs: CalculateLogInputs): Promise<CalculateLogOutputs> {\n        return { result: 0 };\n    }\n}\n')),Object(o.b)("p",null,"Next, modify the ",Object(o.b)("inlineCode",{parentName:"p"},"execute")," method of the activity to calculate the logarithm of a number given an optional base"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/activities/CustomActivity.cs"',title:'"src/activities/CustomActivity.cs"'}),'import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";\n\nexport interface CalculateLogInputs {\n    /**\n     * @description The base of the logarithm. Defaults to the natural log.\n     */\n    base?: number;\n\n    /**\n     * @description The number to calculate the logarithm for.\n     * @required\n     */\n    value: number;\n}\n\nexport interface CalculateLogOutputs {\n    /**\n     * @description The logarithm output.\n     */\n    result: number;\n}\n\n/**\n * @category Custom Activities\n * @description An activity that calculates the log of a number with the given base.\n */\nexport class CalculateLog implements IActivityHandler {\n    async execute(inputs: CalculateLogInputs): Promise<CalculateLogOutputs> {\n        // highlight-start\n        return {\n            result:\n                Math.log(inputs.value) /\n                (inputs.base !== undefined ? Math.log(inputs.base) : 1),\n        };\n        // highlight-end\n    }\n}\n')),Object(o.b)("h2",{id:"deploy-the-activity"},"Deploy the Activity"),Object(o.b)("p",null,"Follow the instructions to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/workflow/sdk-web-overview#deployment"}),"build and deploy the activity pack"),"."),Object(o.b)("h2",{id:"test-the-activity"},"Test the Activity"),Object(o.b)("p",null,"Once your activity pack is hosted and registered, your custom activity should appear in the activity toolbox in Geocortex Workflow Designer alongside the built-in activities, and can be used in the graphical interface like any other activity."),Object(o.b)("p",null,"Now you can build a workflow that uses your new custom activity!"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",null,"You can",Object(o.b)("a",{href:Object(r.a)("workflows/web-calculate-logarithm-activity.json"),download:"calculate-logarithm-workflow.json"}," ","download this demo workflow"," "),"that uses the custom activity and then",Object(o.b)("a",{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank"}," ","import it into the Geocortex Workflow Designer."," "),"You will have to"," ",Object(o.b)("a",{href:Object(r.a)("docs/workflow/sdk-web-overview#host-the-activity-pack")}," ","deploy the custom activity and form element")," ","for it to function. This workflow assumes you are hosting the activity pack with the dev server on https://localhost:57999/."))),Object(o.b)("img",{src:Object(r.a)("img/workflow-web-calculate-logarithm-activity.png")}),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)("p",null,"Now you know how to build a basic Workflow activity for web applications. Next, you can learn how to access app properties in an activity, build custom form elements, use the ArcGIS API for JavaScript in your activities and more."),Object(o.b)(c.a,{mdxType:"UseCaseContainer"},Object(o.b)(s.a,{title:"Implement a Custom Form Element",description:"Implement a custom form element for applications like Geocortex Web",link:Object(r.a)("docs/workflow/tutorial-web-implement-star-rating-form-element"),mdxType:"UseCaseCard"}),Object(o.b)(s.a,{title:"Add a Layer to the Map with a Custom Activity",description:"Access application properties like the map in custom activities for Web Applications",link:Object(r.a)("docs/workflow/tutorial-web-add-layer-to-map"),mdxType:"UseCaseCard"}),Object(o.b)(s.a,{title:"Use the ArcGIS API for JavaScript in an activity.",description:"Use the ArcGIS API for JavaScript in an activity or form element",link:Object(r.a)("docs/workflow/sdk-web-integrating-the-arcgis-api"),mdxType:"UseCaseCard"}),Object(o.b)(s.a,{title:"Reference other Third Party Libraries",description:"Reference other third party libraries in your activities and form elements",link:Object(r.a)("docs/workflow/sdk-web-reference-third-party-library"),mdxType:"UseCaseCard"})))}u.isMDXComponent=!0},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||r;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},244:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var a=n(21),o=n(245);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+i:i}(t,e,n,a)}}function i(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},245:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))},246:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},247:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(11),i=n(245),c=n(9);const s=Object(a.createContext)({collectLink:()=>{}});var l=n(244),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n};t.a=function(e){var t,{isNavLink:n,to:b,href:d,activeClassName:u,isActive:m,"data-noBrokenLinkCheck":h,autoAddBaseUrl:f=!0}=e,v=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:w}=Object(l.b)(),O=Object(a.useContext)(s),j=b||d,g=Object(i.a)(j),y=null==j?void 0:j.replace("pathname://",""),k=void 0!==y?(N=y,f&&(e=>e.startsWith("/"))(N)?w(N):N):void 0;var N;const x=Object(a.useRef)(!1),C=n?r.e:r.c,A=c.a.canUseIntersectionObserver;let M;Object(a.useEffect)((()=>(!A&&g&&window.docusaurus.prefetch(k),()=>{A&&M&&M.disconnect()})),[k,A,g]);const E=null!==(t=null==k?void 0:k.startsWith("#"))&&void 0!==t&&t,D=!k||!g||E;return k&&g&&!E&&!h&&O.collectLink(k),D?o.a.createElement("a",Object.assign({href:k},j&&!g&&{target:"_blank",rel:"noopener noreferrer"},v)):o.a.createElement(C,Object.assign({},v,{onMouseEnter:()=>{x.current||(window.docusaurus.preload(k),x.current=!0)},innerRef:e=>{var t,n;A&&e&&g&&(t=e,n=()=>{window.docusaurus.prefetch(k)},M=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.unobserve(t),M.disconnect(),n())}))})),M.observe(t))},to:k||""},n&&{isActive:m,activeClassName:u}))}},248:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),o=n.n(a),r=n(54),i=n.n(r);function c({children:e}){return o.a.createElement("div",{className:i.a.root},e)}},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(247),o=n(0),r=n.n(o),i=n(246),c=n(55),s=n.n(c);function l({title:e,description:t,link:n}){return r.a.createElement("div",{className:Object(i.a)("card-demo",s.a.root)},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("h3",null,e)),r.a.createElement("div",{className:"card__body"},r.a.createElement("p",null,t)),r.a.createElement("div",{className:"card__footer"},r.a.createElement(a.a,{className:"button button--secondary button--block",to:n},"Get Started"))))}},250:function(e,t,n){"use strict";var a=n(0),o=n(251);t.a=function(){const e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},251:function(e,t,n){"use strict";var a=n(0);const o=Object(a.createContext)(void 0);t.a=o},252:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(250),i=n(246),c=n(56),s=n.n(c);const l=37,p=39;t.a=function(e){const{lazy:t,block:n,defaultValue:c,values:b,groupId:d,className:u}=e,{tabGroupChoices:m,setTabGroupChoices:h}=Object(r.a)(),[f,v]=Object(a.useState)(c),w=a.Children.toArray(e.children);if(null!=d){const e=m[d];null!=e&&e!==f&&b.some((t=>t.value===e))&&v(e)}const O=e=>{v(e),null!=d&&h(d,e)},j=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},u)},b.map((({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e)},onFocus:()=>O(e),onClick:()=>{O(e)}},t)))),t?Object(a.cloneElement)(w.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},w.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},253:function(e,t,n){"use strict";var a=n(3),o=n(0),r=n.n(o);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:n}),e)}},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),o=(n(0),n(243));const r={},i={unversionedId:"workflow/snippets/prereqs-web",id:"workflow/snippets/prereqs-web",isDocsHomePage:!1,title:"prereqs-web",description:"Follow the instructions in the Web Applications SDK page to set up your development environment.",source:"@site/docs/workflow/snippets/prereqs-web.mdx",slug:"/workflow/snippets/prereqs-web",permalink:"/docs/workflow/snippets/prereqs-web",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/prereqs-web.mdx",version:"current"},c=[],s={toc:c};function l({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Follow the instructions in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/workflow/sdk-web-overview"}),"Web Applications SDK")," page to set up your development environment."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"A working knowledge of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," is recommended before extending Workflow for web-based hosts."))))}l.isMDXComponent=!0},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),o=(n(0),n(243));const r={},i={unversionedId:"workflow/snippets/prereqs-mobile",id:"workflow/snippets/prereqs-mobile",isDocsHomePage:!1,title:"prereqs-mobile",description:"Extending Geocortex Workflow for Mobile requires development and deployment of a custom Geocortex Mobile Application using the Geocortex Mobile SDK",source:"@site/docs/workflow/snippets/prereqs-mobile.mdx",slug:"/workflow/snippets/prereqs-mobile",permalink:"/docs/workflow/snippets/prereqs-mobile",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/prereqs-mobile.mdx",version:"current"},c=[],s={toc:c};function l({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Extending Geocortex Workflow for Mobile requires development and deployment of a custom Geocortex Mobile Application using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-overview"}),"Geocortex Mobile SDK")))),Object(o.b)("p",null,"Follow the instructions in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/workflow/sdk-mobile-overview"}),"Geocortex Mobile SDK")," page to set up the environment for extending Workflow for Geocortex Mobile."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"A working knowledge of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-ca/dotnet/csharp/"}),"C#")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://dotnet.microsoft.com/platform/dotnet-standard"}),".NET Standard")," is recommended before extending Workflow for Geocortex Mobile"))))}l.isMDXComponent=!0},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),o=(n(0),n(243));const r={},i={unversionedId:"workflow/snippets/prereqs-server",id:"workflow/snippets/prereqs-server",isDocsHomePage:!1,title:"prereqs-server",description:"Extending Geocortex Workflow with server side components requires an on-premises installation of Geocortex Workflow. You will need administrative access to this installation.",source:"@site/docs/workflow/snippets/prereqs-server.mdx",slug:"/workflow/snippets/prereqs-server",permalink:"/docs/workflow/snippets/prereqs-server",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/prereqs-server.mdx",version:"current"},c=[],s={toc:c};function l({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Extending Geocortex Workflow with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/server-workflows.htm%3FTocPath%3DServer%2520Workflows%7C_____0"}),"server side components")," requires an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/installation.htm"}),"on-premises installation of Geocortex Workflow"),". You will need administrative access to this installation."))),Object(o.b)("p",null,"Follow the instructions in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/workflow/sdk-server-overview"}),"Geocortex Workflow Server")," page to set up your development environment and Geocortex Workflow Server extension project."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"A working knowledge of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-ca/dotnet/csharp/"}),"C#")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://dotnet.microsoft.com/platform/dotnet-standard"}),".NET Standard")," is recommended before extending Geocortex Workflow Server"))))}l.isMDXComponent=!0}}]);