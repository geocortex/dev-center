(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[545,8512],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6742:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(7294),o=r(3727),i=r(2263),a=r(3919),s=r(412);const c=(0,n.createContext)({collectLink:()=>{}});var l=r(4996),u=r(8780);const d=function({isNavLink:e,to:t,href:r,activeClassName:d,isActive:p,"data-noBrokenLinkCheck":m,autoAddBaseUrl:f=!0,...h}){var v;const{siteConfig:{trailingSlash:w}}=(0,i.Z)(),{withBaseUrl:b}=(0,l.C)(),g=(0,n.useContext)(c),k=t||r,y=(0,a.Z)(k),S=null==k?void 0:k.replace("pathname://","");let E=void 0!==S?(x=S,f&&(e=>e.startsWith("/"))(x)?b(x):x):void 0;var x;E&&y&&(E=(0,u.applyTrailingSlash)(E,w));const N=(0,n.useRef)(!1),I=e?o.OL:o.rU,W=s.Z.canUseIntersectionObserver;let V;(0,n.useEffect)((()=>(!W&&y&&null!=E&&window.docusaurus.prefetch(E),()=>{W&&V&&V.disconnect()})),[E,W,y]);const C=null!==(v=null==E?void 0:E.startsWith("#"))&&void 0!==v&&v,G=!E||!y||C;return E&&y&&!C&&!m&&g.collectLink(E),G?n.createElement("a",{href:E,...k&&!y&&{target:"_blank",rel:"noopener noreferrer"},...h}):n.createElement(I,{...h,onMouseEnter:()=>{N.current||null==E||(window.docusaurus.preload(E),N.current=!0)},innerRef:e=>{var t,r;W&&e&&y&&(t=e,r=()=>{null!=E&&window.docusaurus.prefetch(E)},V=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(V.unobserve(t),V.disconnect(),r())}))})),V.observe(t))},to:E||"",...e&&{isActive:p,activeClassName:d}})}},3919:(e,t,r)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>o})},4996:(e,t,r)=>{"use strict";r.d(t,{C:()=>i,Z:()=>a});var n=r(2263),o=r(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(n)return t+r;const a=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+a:a}(t,e,r,n)}}function a(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[r]=e.split(/[#?]/),n="/"===r?"/":t?(o=r).endsWith("/")?o:`${o}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(r);var o;return e.replace(r,n)}},8780:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(o).default}});var i=r(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},7865:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(7294);const o="container_3hFW",i="iconCircle_3U46",a="iconContainer_2L0U",s="iconLabel_3IBE",c="arrowLine_3k7g",l="svgDashedLine_32XV",u="svgFillBlue_27_n",d="svgStrokeBlue_2Ynx";var p=r(6010);function m(){return n.createElement(n.Fragment,null,n.createElement("path",{fill:"#fff",d:"M68.4 89.2h151v110.2h-151z"}),n.createElement("path",{className:u,d:"M219.4 202.7h-151c-1.8 0-3.3-1.5-3.3-3.3V89.2c0-1.8 1.5-3.3 3.3-3.3h151c1.8 0 3.3 1.5 3.3 3.3v110.2c0 1.8-1.5 3.3-3.3 3.3zm-147.7-6.6h144.4V92.5H71.7v103.6z"}),n.createElement("path",{className:u,d:"M218.4 112.4h-150c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h150c1.8 0 3.3 1.5 3.3 3.3s-1.5 3.3-3.3 3.3z"}),n.createElement("g",null,n.createElement("path",{className:u,d:"M191.5 111.1c-1.8 0-3.3-1.5-3.3-3.3V89.2c0-1.8 1.5-3.3 3.3-3.3s3.3 1.5 3.3 3.3v18.6c0 1.8-1.5 3.3-3.3 3.3z"})),n.createElement("g",null,n.createElement("path",{className:u,d:"M141.8535 153.36022l5.42124-3.76464 19.6788 28.3383-5.42124 3.76464z"}),n.createElement("path",{className:u,d:"M129.4 170.3l-3.9-46.2 42 19.7z"})))}function f(){return n.createElement("path",{className:u,d:"M15 7H9V1h6v6zM7 17H1v6h6v-6zm8 0H9v6h6v-6zm8 0h-6v6h6v-6zm-10-6V8h-2v3H3v5h2v-3h6v3h2v-3h6v3h2v-5h-8z"})}function h(){return n.createElement(n.Fragment,null,n.createElement("path",{fill:"#fff",d:"M68.4 89.2h151v110.2h-151z"}),n.createElement("path",{className:u,d:"M219.4 202.7h-151c-1.8 0-3.3-1.5-3.3-3.3V89.2c0-1.8 1.5-3.3 3.3-3.3h151c1.8 0 3.3 1.5 3.3 3.3v110.2c0 1.8-1.5 3.3-3.3 3.3zm-147.7-6.6h144.4V92.5H71.7v103.6z"}),n.createElement("path",{className:u,d:"M218.4 112.4h-150c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h150c1.8 0 3.3 1.5 3.3 3.3s-1.5 3.3-3.3 3.3z"}),n.createElement("g",null,n.createElement("path",{className:u,d:"M191.5 111.1c-1.8 0-3.3-1.5-3.3-3.3V89.2c0-1.8 1.5-3.3 3.3-3.3s3.3 1.5 3.3 3.3v18.6c0 1.8-1.5 3.3-3.3 3.3z"})),n.createElement("g",null,n.createElement("path",{className:(0,p.Z)(u,d),d:"M125.6 176l-29.2-20.8v-5.1l29.2-22.6v9.2l-21.3 15.7v.2l21.3 14.2v9.2zM154.9 126.1l-16.6 59.2h-5l16.5-59.2h5.1zM192.3 154.9l-29.2 20.8v-9.2l21.4-14.1v-.3l-21.4-15.7v-9.2l29.2 22.5v5.2z"})))}function v(){return n.createElement("svg",{className:l,height:"80",xmlns:"http://www.w3.org/2000/svg"},n.createElement("defs",null,n.createElement("marker",{className:(0,p.Z)(u,d),id:"arrow",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"2.5",markerHeight:"2.5",orient:"auto-start-reverse"},n.createElement("path",{d:"M 0 0 L 10 5 L 0 10 z"}))),n.createElement("line",{className:(0,p.Z)(c,d),strokeDashoffset:"-2.5",strokeDasharray:"10,5",x1:"10",y1:"10",x2:"10",y2:"60",markerEnd:"url(#arrow)"}))}function w(e){return n.createElement("a",{className:a,href:e.linkUrl},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg"},n.createElement("circle",{className:i,cx:"2.5em",cy:"2.5em",r:"2.5em"}),n.createElement("svg",{height:"5em",width:"5em"},e.children)),n.createElement("h2",{className:s},e.iconLabel))}function b({configLink:e,workflowLink:t,customWorkflowLink:r,customCodeLink:i}){return n.createElement("div",{className:o},n.createElement(w,{iconLabel:"Application Configuration",linkUrl:e},n.createElement("svg",{viewBox:"-10 -10 300 300"},n.createElement(m,null))),n.createElement(v,null),n.createElement(w,{iconLabel:"VertiGIS Studio Workflow",linkUrl:t},n.createElement("svg",{viewBox:"-12 -11 48 48"},n.createElement(f,null))),n.createElement(v,null),n.createElement(w,{iconLabel:"Custom Workflow Activities and Form Elements",linkUrl:r},n.createElement("svg",{viewBox:"-12 -11 48 48"},n.createElement(f,null)),n.createElement("svg",{viewBox:"-200 -190 500 500"},n.createElement(h,null))),n.createElement(v,null),n.createElement(w,{iconLabel:"Custom Components and Services",linkUrl:i},n.createElement("svg",{viewBox:"-10 -10 300 300"},n.createElement(h,null))))}},1962:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(6742),o=r(7294),i=r(6010);const a="root_2PFE";function s({title:e,description:t,link:r}){return o.createElement("div",{className:(0,i.Z)("card-demo",a)},o.createElement("div",{className:"card"},o.createElement("div",{className:"card__header"},o.createElement("h3",null,e)),o.createElement("div",{className:"card__body"},o.createElement("p",null,t)),o.createElement("div",{className:"card__footer"},o.createElement(n.Z,{className:"button button--secondary button--block",to:r},"Get Started"))))}},7763:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(7294);const o="root_NqT0";function i({children:e}){return n.createElement("div",{className:o},e)}},4911:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>u,contentTitle:()=>d,metadata:()=>p,toc:()=>m,default:()=>h});var n=r(2122),o=(r(7294),r(3905)),i=r(4996),a=r(7351),s=r(1962),c=r(7763),l=r(7865);const u={title:"Overview",description:"VertiGIS Studio Web - Overview"},d=void 0,p={unversionedId:"web/overview",id:"web/overview",isDocsHomePage:!1,title:"Overview",description:"VertiGIS Studio Web - Overview",source:"@site/docs/web/overview.mdx",sourceDirName:"web",slug:"/web/overview",permalink:"/docs/web/overview",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/overview.mdx",version:"current",frontMatter:{title:"Overview",description:"VertiGIS Studio Web - Overview"},sidebar:"web",next:{title:"Key Concepts",permalink:"/docs/web/key-concepts"}},m=[{value:"Extending VertiGIS Studio Web",id:"extending-vertigis-studio-web",children:[{value:"Application Configuration",id:"application-configuration",children:[]},{value:"VertiGIS Studio Workflow",id:"vertigis-studio-workflow",children:[]},{value:"Custom Workflow Activities and Form Elements",id:"custom-workflow-activities-and-form-elements",children:[]},{value:"Custom Components and Services",id:"custom-components-and-services",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],f={toc:m};function h({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.vertigisstudio.com/products/vertigis-studio-web/"},"VertiGIS Studio Web")," is a next-generation framework for creating sleek and effective GIS applications for a wide variety of browsers. Apps allow users to view and interact with web-based maps and associated data. VertiGIS Studio Web can seamlessly display both 2D and 3D map data. VertiGIS Studio Web is part of the ",(0,o.kt)("a",{parentName:"p",href:"https://www.vertigisstudio.com/products/"},"VertiGIS Studio suite of products"),"."),(0,o.kt)("p",null,"VertiGIS Studio Web apps are created, configured and deployed with ",(0,o.kt)("a",{parentName:"p",href:"https://apps.geocortex.com/webviewer/designer/"},"VertiGIS Studio Web Designer"),". Web Designer is an intuitive web application that displays a live preview of VertiGIS Studio Web apps as they are being configured."),(0,o.kt)(a.default,{mdxType:"DesignerCallout"}),(0,o.kt)("h2",{id:"extending-vertigis-studio-web"},"Extending VertiGIS Studio Web"),(0,o.kt)("p",null,"If the VertiGIS Studio Web Designer cannot accomplish what you need, you can manually configure and extend VertiGIS Studio Web in a number of ways."),(0,o.kt)("p",null,"The simplest way to customize your application is through configuration. If you need to implement complex behavior and user interactions, VertiGIS Studio Workflow may be able to accomplish your goals through an easy to use interface. VertiGIS Studio Workflow can be taken even further through custom extensions to its activity and form element library. VertiGIS Studio Web can also be extended through its SDK to create completely custom experiences."),(0,o.kt)(l.Z,{configLink:"#application-configuration",workflowLink:"#vertigis-studio-workflow",customWorkflowLink:"#custom-workflow-activities-and-form-elements",customCodeLink:"#custom-components-and-services",mdxType:"ExtensibilitySpectrum"}),(0,o.kt)("h3",{id:"application-configuration"},"Application Configuration"),(0,o.kt)("p",null,"Every VertiGIS Studio Web application has a ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/configuration-layout-getting-started"},(0,o.kt)("strong",{parentName:"a"},"layout")),", which represents the visual layout of the application, and ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/configuration-app-config-getting-started"},(0,o.kt)("strong",{parentName:"a"},"app config"))," that configures various behaviors and settings within the application. Layout and app config can be easily edited to customize the appearance and behavior of an an VertiGIS Studio Web application without writing custom code."),(0,o.kt)("p",null,"Before investing in developing workflows or custom code, see if your use case can be solved through the use of layout and configuration. ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/key-concepts"},"Explore the concepts")," to learn more about layout and app config."),(0,o.kt)("h3",{id:"vertigis-studio-workflow"},"VertiGIS Studio Workflow"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/workflow/"},(0,o.kt)("strong",{parentName:"a"},"VertiGIS Studio Workflow"))," is a powerful tool that comes bundled with VertiGIS Studio Web which can create custom behavior and UI without custom code development. Many behaviors in VertiGIS Studio Web can be ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/tutorial-change-default-map-click-behavior"},"replaced by a workflow")," that runs entirely custom logic. VertiGIS Studio Workflow can even ",(0,o.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/forms.htm"},"display complex customized forms"),"."),(0,o.kt)("h3",{id:"custom-workflow-activities-and-form-elements"},"Custom Workflow Activities and Form Elements"),(0,o.kt)("p",null,"If VertiGIS Studio Workflow meets most of your need, but is missing a few crucial elements, the best solution may be to extend VertiGIS Studio Workflow with ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/web/tutorial-implement-custom-activity"},"custom activities"))," and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/web/tutorial-implement-custom-form-elements"},"form elements")),". Extending VertiGIS Studio Workflow can take the rich out of the box Workflow experience and augment it with business logic or UI specific to your use case."),(0,o.kt)("h3",{id:"custom-components-and-services"},"Custom Components and Services"),(0,o.kt)("p",null,"If you need to build entirely custom and new behavior and UI, you should check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/sdk-overview"},(0,o.kt)("strong",{parentName:"a"},"VertiGIS Studio Web SDK")),". Using the VertiGIS Studio Web SDK, you can develop custom behavior by creating new ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/tutorial-implement-command-operation"},"commands and operations")," which can be ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/configuration-commands-operations"},"used in the app config"),". If you need to create a new UI element, you can build ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/sdk-components-create"},"custom components"),". With the ability to create ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/tutorial-service-dynamic-data"},"background services"),", facilitate ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/sdk-components-interactions"},"component interactions"),", and ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/tutorial-implement-component-participate-app-config"},"participate in the app config"),", the possibilities for extending VertiGIS Studio Web are endless."),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)(c.Z,{mdxType:"UseCaseContainer"},(0,o.kt)(s.Z,{title:"Layout and App Config",description:"Learn more about the layout and app config",link:(0,i.Z)("docs/web/key-concepts"),mdxType:"UseCaseCard"}),(0,o.kt)(s.Z,{title:"Running Workflows in VertiGIS Studio Web",description:"Learn how to build and run a workflow in VertiGIS Studio Web",link:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm",mdxType:"UseCaseCard"}),(0,o.kt)(s.Z,{title:"Building Custom Workflow Activities",description:"Learn how to build custom workflow activities for VertiGIS Studio Web",link:(0,i.Z)("docs/web/tutorial-implement-custom-activity"),mdxType:"UseCaseCard"}),(0,o.kt)(s.Z,{title:"VertiGIS Studio Web SDK",description:"Develop custom commands and operations, components, and services using the VertiGIS Studio Web SDK",link:(0,i.Z)("docs/web/sdk-overview"),mdxType:"UseCaseCard"})))}h.isMDXComponent=!0},7351:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>a,metadata:()=>s,toc:()=>c,default:()=>u});var n=r(2122),o=(r(7294),r(3905));const i={},a=void 0,s={unversionedId:"web/snippets/designer-callout",id:"web/snippets/designer-callout",isDocsHomePage:!1,title:"designer-callout",description:"The VertiGIS Studio Web Designer allows you to edit your application's layout, configure custom behaviors for buttons and other UI components, and solve complex business problems through VertiGIS Studio Workflow. Many use cases can be solved through the VertiGIS Studio Web Designer and don't require custom development.",source:"@site/docs/web/snippets/designer-callout.mdx",sourceDirName:"web/snippets",slug:"/web/snippets/designer-callout",permalink:"/docs/web/snippets/designer-callout",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/designer-callout.mdx",version:"current",frontMatter:{}},c=[],l={toc:c};function u({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Have you explored the VertiGIS Studio Web Designer?")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("a",{parentName:"p",href:"https://apps.geocortex.com/webviewer/designer/"},"VertiGIS Studio Web Designer")," allows you to edit your application's layout, configure custom behaviors for buttons and other UI components, and solve complex business problems through ",(0,o.kt)("a",{parentName:"p",href:"/docs/workflow/overview"},"VertiGIS Studio Workflow"),". Many use cases can be solved through the VertiGIS Studio Web Designer and don't require custom development."))))}u.isMDXComponent=!0},6010:(e,t,r)=>{"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:()=>o})}}]);