(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[6547,8512],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6742:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var o=n(7294),r=n(3727),i=n(2263),a=n(3919),s=n(412);const c=(0,o.createContext)({collectLink:()=>{}});var l=n(4996),d=n(8780);const p=function({isNavLink:e,to:t,href:n,activeClassName:p,isActive:u,"data-noBrokenLinkCheck":m,autoAddBaseUrl:h=!0,...v}){var f;const{siteConfig:{trailingSlash:b}}=(0,i.Z)(),{withBaseUrl:g}=(0,l.C)(),k=(0,o.useContext)(c),y=t||n,w=(0,a.Z)(y),S=null==y?void 0:y.replace("pathname://","");let N=void 0!==S?(C=S,h&&(e=>e.startsWith("/"))(C)?g(C):C):void 0;var C;N&&w&&(N=(0,d.applyTrailingSlash)(N,b));const x=(0,o.useRef)(!1),D=e?r.OL:r.rU,I=s.Z.canUseIntersectionObserver;let O;(0,o.useEffect)((()=>(!I&&w&&null!=N&&window.docusaurus.prefetch(N),()=>{I&&O&&O.disconnect()})),[N,I,w]);const T=null!==(f=null==N?void 0:N.startsWith("#"))&&void 0!==f&&f,W=!N||!w||T;return N&&w&&!T&&!m&&k.collectLink(N),W?o.createElement("a",{href:N,...y&&!w&&{target:"_blank",rel:"noopener noreferrer"},...v}):o.createElement(D,{...v,onMouseEnter:()=>{x.current||null==N||(window.docusaurus.preload(N),x.current=!0)},innerRef:e=>{var t,n;I&&e&&w&&(t=e,n=()=>{null!=N&&window.docusaurus.prefetch(N)},O=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(O.unobserve(t),O.disconnect(),n())}))})),O.observe(t))},to:N||"",...e&&{isActive:u,activeClassName:p}})}},3919:(e,t,n)=>{"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,{b:()=>o,Z:()=>r})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>i,Z:()=>a});var o=n(2263),r=n(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,o.Z)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+a:a}(t,e,n,o)}}function a(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),o="/"===n?"/":t?(r=n).endsWith("/")?r:`${r}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);var r;return e.replace(n,o)}},8780:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return o(r).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return o(i).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(6742),r=n(7294),i=n(6010);const a="root_2PFE";function s({title:e,description:t,link:n}){return r.createElement("div",{className:(0,i.Z)("card-demo",a)},r.createElement("div",{className:"card"},r.createElement("div",{className:"card__header"},r.createElement("h3",null,e)),r.createElement("div",{className:"card__body"},r.createElement("p",null,t)),r.createElement("div",{className:"card__footer"},r.createElement(o.Z,{className:"button button--secondary button--block",to:n},"Get Started"))))}},7763:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(7294);const r="root_NqT0";function i({children:e}){return o.createElement("div",{className:r},e)}},4284:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>d,metadata:()=>p,toc:()=>u,default:()=>h});var o=n(2122),r=(n(7294),n(3905)),i=n(4996),a=n(7351),s=n(1962),c=n(7763);const l={title:"SDK Overview",description:"VertiGIS Studio Web - Learn how to get started with the VertiGIS Studio Web SDK"},d=void 0,p={unversionedId:"web/sdk-overview",id:"web/sdk-overview",isDocsHomePage:!1,title:"SDK Overview",description:"VertiGIS Studio Web - Learn how to get started with the VertiGIS Studio Web SDK",source:"@site/docs/web/sdk-overview.mdx",sourceDirName:"web",slug:"/web/sdk-overview",permalink:"/docs/web/sdk-overview",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-overview.mdx",version:"current",frontMatter:{title:"SDK Overview",description:"VertiGIS Studio Web - Learn how to get started with the VertiGIS Studio Web SDK"},sidebar:"web",previous:{title:"Implement a Custom Form Element",permalink:"/docs/web/tutorial-implement-custom-form-elements"},next:{title:"SDK Samples",permalink:"/docs/web/sdk-samples"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Extension Points",id:"extension-points",children:[{value:"Components",id:"components",children:[]},{value:"Services",id:"services",children:[]},{value:"Commands and Operations",id:"commands-and-operations",children:[]}]},{value:"Application Interactions",id:"application-interactions",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Project Structure",id:"project-structure",children:[{value:"Library Entry Point",id:"library-entry-point",children:[]}]},{value:"Development Patterns",id:"development-patterns",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],m={toc:u};function h({components:e,...t}){return(0,r.kt)("wrapper",(0,o.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If the built-in configurability of VertiGIS Studio Web does not serve your purposes, then it might be time to dive into the VertiGIS Studio Web SDK. Building applications on top of the VertiGIS Studio Web SDK requires engaging in the development, testing, and deployment of custom code, so it's worthwhile to make sure your problem cannot be solved ",(0,r.kt)("a",{parentName:"p",href:"/docs/web/overview"},"with workflow or other advanced configuration"),"."),(0,r.kt)("p",null,"If you still think you need to use the VertiGIS Studio Web SDK, then let's get started!"),(0,r.kt)(a.default,{mdxType:"DesignerCallout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The VertiGIS Studio Web SDK provides a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-web-sdk"},"development toolkit")," for building ",(0,r.kt)("a",{parentName:"p",href:"/docs/web/sdk-components-create"},"custom components"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/web/sdk-services-create"},"services"),", and more into a package that can be deployed to VertiGIS Studio Web called a ",(0,r.kt)("em",{parentName:"p"},"library"),". Once the ",(0,r.kt)("em",{parentName:"p"},"library")," has been developed, it can then be ",(0,r.kt)("a",{parentName:"p",href:"/docs/web/sdk-deployment"},"deployed")," to your SaaS or on-premises environment."),(0,r.kt)("h2",{id:"extension-points"},"Extension Points"),(0,r.kt)("p",null,"There are three main extension points in the SDK:"),(0,r.kt)("h3",{id:"components"},"Components"),(0,r.kt)("p",null,"Components power the UI experience of VertiGIS Studio Web. Components are composed of a React Component and a backing data model. Layout files are composed of a nested hierarchy of components which are instantiated at runtime."),(0,r.kt)("h3",{id:"services"},"Services"),(0,r.kt)("p",null,"Services provide the shared infrastructure and core logic that power app behavior. Services do not have an associated UI, and there is only one instance of a service per application."),(0,r.kt)("h3",{id:"commands-and-operations"},"Commands and Operations"),(0,r.kt)("p",null,"Commands and operations provide a framework for executing application wide behavior. Services and components can both run and implement commands and operations, allowing for interaction and consistent behavior without tight coupling. Commands and operations can also be run ",(0,r.kt)("a",{parentName:"p",href:"/docs/web/tutorial-configure-button-click"},"in the app config")," and by ",(0,r.kt)("a",{parentName:"p",href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/run-command.htm"},"Workflows"),". This can allow you to ",(0,r.kt)("a",{parentName:"p",href:"/docs/web/tutorial-change-default-behavior"},"customize the behavior of built-in components"),"."),(0,r.kt)("h2",{id:"application-interactions"},"Application Interactions"),(0,r.kt)("p",null,"Components, services, and commands and operations interact to form a VertiGIS Studio Web Application."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Services are used to implement application wide behavior, such as theming or authentication, and then expose that logic through commands and operations, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"ui.set-theme")," (implemented by the ",(0,r.kt)("inlineCode",{parentName:"li"},"BrandingService"),") or ",(0,r.kt)("inlineCode",{parentName:"li"},"auth.sign")," (implemented by the ",(0,r.kt)("inlineCode",{parentName:"li"},"AuthenticationService"),")."),(0,r.kt)("li",{parentName:"ul"},"Components can run commands and operations to interact with services or other components. Components can also implement commands and operations to allow themselves to be affected by other services and components."),(0,r.kt)("li",{parentName:"ul"},"Component and service interaction through commands and operations is preferred, but components and services can also be tightly coupled to each other through ",(0,r.kt)("a",{parentName:"li",href:"/docs/web/sdk-components-interactions#importing-models"},"model injection")," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/web/sdk-services-injecting-services"},"service injection"),".")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The latest LTS version of ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can run ",(0,r.kt)("inlineCode",{parentName:"li"},"node -v")," in your terminal to check the version you have installed"))),(0,r.kt)("li",{parentName:"ul"},"A code editor of your choice. We recommend ",(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code"))),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"npx @vertigis/web-sdk create <library-name>")," where ",(0,r.kt)("inlineCode",{parentName:"li"},"<library-name>")," is the name of the directory that will be created in the current working directory",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For example: ",(0,r.kt)("inlineCode",{parentName:"li"},"npx @vertigis/web-sdk create test-lib")))),(0,r.kt)("li",{parentName:"ol"},"Open the ",(0,r.kt)("inlineCode",{parentName:"li"},"library-name")," directory in your favorite IDE. We recommend using Visual Studio Code for the best experience."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm start")," to start the development server")),(0,r.kt)("p",null,"The running development server automatically detects changes to your source files. You can simply edit the layout, config, or custom code and the development server will automatically refresh the application with the latest changes."),(0,r.kt)("h2",{id:"project-structure"},"Project Structure"),(0,r.kt)("p",null,"The created project contains a few important directories:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"src")," directory, which contains your custom library code. We've included a sample component to get you started"),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"app")," directory, which contains a minimal development application ",(0,r.kt)("a",{parentName:"li",href:"/docs/web/key-concepts"},"layout and app config")," to be used for testing your custom code before deployment to production")),(0,r.kt)("h3",{id:"library-entry-point"},"Library Entry Point"),(0,r.kt)("p",null,"The VertiGIS Studio Web SDK compiles custom components, services, and commands and operations into a library. The library is defined by the registration function exported from ",(0,r.kt)("inlineCode",{parentName:"p"},"src/index.ts"),". This registration code informs VertiGIS Studio Web about the components, services, and commands and operations in your library so that they can be referenced in the app config and layout."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'},'export default function (registry: LibraryRegistry) {\n    registry.registerService({\n        id: "custom-service",\n        getService: (config) => new CustomService(config),\n    });\n    registry.registerComponent({\n        name: "custom-component",\n        namespace: "your.custom.namespace",\n        getComponentType: () => CustomComponent,\n        itemType: "custom-component-model",\n        title: "Custom Component",\n    });\n    registry.registerModel({\n        getModel: (config) => new CustomComponentModel(config),\n        itemType: "custom-component-model",\n    });\n    registry.registerCommand({\n        name: "my.custom-command",\n        serviceId: "custom-service",\n    });\n    registry.registerOperation({\n        name: "my.custom-operation",\n        serviceId: "custom-service",\n    });\n}\n')),(0,r.kt)("h2",{id:"development-patterns"},"Development Patterns"),(0,r.kt)("p",null,"If you are developing custom code that is mostly independent of app context, we suggest that you use the minimal layout and app config with only the required components."),(0,r.kt)("p",null,"If you need to develop custom code that requires the context of a custom application built in VertiGIS Studio Web Designer, take the following steps to import your SaaS or on-premises application into your local Web SDK environment."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open your application in VertiGIS Studio Web Designer."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/download-app-configuration.htm"},"Download the application configuration"),"."),(0,r.kt)("li",{parentName:"ol"},"Delete the contents of the ",(0,r.kt)("inlineCode",{parentName:"li"},"app")," directory."),(0,r.kt)("li",{parentName:"ol"},"Extract the contents to you in your Web SDK Applications ",(0,r.kt)("inlineCode",{parentName:"li"},"app")," directory, overwriting existing app config and layout."),(0,r.kt)("li",{parentName:"ol"},"Develop your custom code on top of your existing application.")),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You may need to rename the downloaded layout file to ",(0,r.kt)("inlineCode",{parentName:"p"},"layout.xml"),"."))),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)(c.Z,{mdxType:"UseCaseContainer"},(0,r.kt)(s.Z,{title:"Create a Component",description:"Learn how to create a basic component",link:(0,i.Z)("docs/web/sdk-components-create"),mdxType:"UseCaseCard"}),(0,r.kt)(s.Z,{title:"Create a Service",description:"Learn how to create a basic service",link:(0,i.Z)("docs/web/sdk-services-create"),mdxType:"UseCaseCard"}),(0,r.kt)(s.Z,{title:"Deploy your Application",description:"Learn how to deploy your custom library, layout and app config",link:(0,i.Z)("docs/web/sdk-deployment"),mdxType:"UseCaseCard"}),(0,r.kt)(s.Z,{title:"SDK Samples",description:"Check out a collection of samples that demonstrate how to configure and customize VertiGIS Studio Web apps using the VertiGIS Studio Web SDK",link:(0,i.Z)("docs/web/sdk-samples"),mdxType:"UseCaseCard"})))}h.isMDXComponent=!0},7351:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>a,metadata:()=>s,toc:()=>c,default:()=>d});var o=n(2122),r=(n(7294),n(3905));const i={},a=void 0,s={unversionedId:"web/snippets/designer-callout",id:"web/snippets/designer-callout",isDocsHomePage:!1,title:"designer-callout",description:"The VertiGIS Studio Web Designer allows you to edit your application's layout, configure custom behaviors for buttons and other UI components, and solve complex business problems through VertiGIS Studio Workflow. Many use cases can be solved through the VertiGIS Studio Web Designer and don't require custom development.",source:"@site/docs/web/snippets/designer-callout.mdx",sourceDirName:"web/snippets",slug:"/web/snippets/designer-callout",permalink:"/docs/web/snippets/designer-callout",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/designer-callout.mdx",version:"current",frontMatter:{}},c=[],l={toc:c};function d({components:e,...t}){return(0,r.kt)("wrapper",(0,o.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Have you explored the VertiGIS Studio Web Designer?")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://apps.geocortex.com/webviewer/designer/"},"VertiGIS Studio Web Designer")," allows you to edit your application's layout, configure custom behaviors for buttons and other UI components, and solve complex business problems through ",(0,r.kt)("a",{parentName:"p",href:"/docs/workflow/overview"},"VertiGIS Studio Workflow"),". Many use cases can be solved through the VertiGIS Studio Web Designer and don't require custom development."))))}d.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:()=>r})}}]);