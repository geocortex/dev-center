(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[4696,385,7499],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6742:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(7294),o=n(3727),i=n(2263),r=n(3919),s=n(412);const l=(0,a.createContext)({collectLink:()=>{}});var p=n(4996),c=n(8780);const m=function({isNavLink:e,to:t,href:n,activeClassName:m,isActive:d,"data-noBrokenLinkCheck":u,autoAddBaseUrl:f=!0,...g}){var h;const{siteConfig:{trailingSlash:v}}=(0,i.Z)(),{withBaseUrl:b}=(0,p.C)(),w=(0,a.useContext)(l),k=t||n,y=(0,r.Z)(k),N=null==k?void 0:k.replace("pathname://","");let x=void 0!==N?(T=N,f&&(e=>e.startsWith("/"))(T)?b(T):T):void 0;var T;x&&y&&(x=(0,c.applyTrailingSlash)(x,v));const C=(0,a.useRef)(!1),I=e?o.OL:o.rU,S=s.Z.canUseIntersectionObserver;let Z;(0,a.useEffect)((()=>(!S&&y&&null!=x&&window.docusaurus.prefetch(x),()=>{S&&Z&&Z.disconnect()})),[x,S,y]);const M=null!==(h=null==x?void 0:x.startsWith("#"))&&void 0!==h&&h,E=!x||!y||M;return x&&y&&!M&&!u&&w.collectLink(x),E?a.createElement("a",{href:x,...k&&!y&&{target:"_blank",rel:"noopener noreferrer"},...g}):a.createElement(I,{...g,onMouseEnter:()=>{C.current||null==x||(window.docusaurus.preload(x),C.current=!0)},innerRef:e=>{var t,n;S&&e&&y&&(t=e,n=()=>{null!=x&&window.docusaurus.prefetch(x)},Z=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(Z.unobserve(t),Z.disconnect(),n())}))})),Z.observe(t))},to:x||"",...e&&{isActive:d,activeClassName:m}})}},3919:(e,t,n)=>{"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,{b:()=>a,Z:()=>o})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>i,Z:()=>r});var a=n(2263),o=n(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(a)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+r:r}(t,e,n,a)}}function r(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(7294);const o=function({children:e,hidden:t,className:n}){return a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(7294),o=n(944),i=n(6010);const r="tabItem_1uMI",s="tabItemActive_2DSg";const l=37,p=39;const c=function(e){const{lazy:t,block:n,defaultValue:c,values:m,groupId:d,className:u}=e,{tabGroupChoices:f,setTabGroupChoices:g}=(0,o.Z)(),[h,v]=(0,a.useState)(c),b=a.Children.toArray(e.children),w=[];if(null!=d){const e=f[d];null!=e&&e!==h&&m.some((t=>t.value===e))&&v(e)}const k=e=>{const t=e.currentTarget,n=w.indexOf(t),a=m[n].value;v(a),null!=d&&(g(d,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:o}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:r}=window;return t>=0&&o<=r&&a<=i&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((()=>t.classList.remove(s)),2e3))}),150))},y=e=>{var t;let n;switch(e.keyCode){case p:{const t=w.indexOf(e.target)+1;n=w[t]||w[0];break}case l:{const t=w.indexOf(e.target)-1;n=w[t]||w[w.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},u)},m.map((({value:e,label:t})=>a.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:(0,i.Z)("tabs__item",r,{"tabs__item--active":h===e}),key:e,ref:e=>w.push(e),onKeyDown:y,onFocus:k,onClick:k},t)))),t?(0,a.cloneElement)(b.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(7294),o=n(9443);const i=function(){const e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),a="/"===n?"/":t?(o=n).endsWith("/")?o:`${o}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);var o;return e.replace(n,a)}},8780:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(o).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(i).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(6742),o=n(7294),i=n(6010);const r="root_2PFE";function s({title:e,description:t,link:n}){return o.createElement("div",{className:(0,i.Z)("card-demo",r)},o.createElement("div",{className:"card"},o.createElement("div",{className:"card__header"},o.createElement("h3",null,e)),o.createElement("div",{className:"card__body"},o.createElement("p",null,t)),o.createElement("div",{className:"card__footer"},o.createElement(a.Z,{className:"button button--secondary button--block",to:n},"Get Started"))))}},7763:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(7294);const o="root_NqT0";function i({children:e}){return a.createElement("div",{className:o},e)}},2514:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>r,metadata:()=>s,toc:()=>l,default:()=>c});var a=n(2122),o=(n(7294),n(3905));const i={},r=void 0,s={unversionedId:"snippets/app-item",id:"snippets/app-item",isDocsHomePage:!1,title:"app-item",description:"An app config file is composed of a list of app items. App items can potentially be anything. Each app item has an item $type, which viewer is aware of and knows how to locate and load. They usually they represent configuration for components, maps, portal items, or shared data. All item app configuration is specified within the items array of the app.json file.",source:"@site/docs/snippets/app-item.mdx",sourceDirName:"snippets",slug:"/snippets/app-item",permalink:"/docs/snippets/app-item",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/snippets/app-item.mdx",version:"current",frontMatter:{}},l=[],p={toc:l};function c({components:e,...t}){return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An app config file is composed of a list of ",(0,o.kt)("strong",{parentName:"p"},"app items"),". App items can potentially be anything. Each app item has an ",(0,o.kt)("strong",{parentName:"p"},"item ",(0,o.kt)("inlineCode",{parentName:"strong"},"$type")),", which viewer is aware of and knows how to locate and load. They usually they represent configuration for components, maps, portal items, or shared data. All item app configuration is specified within the ",(0,o.kt)("inlineCode",{parentName:"p"},"items")," array of the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"app.json"))," file."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Each component can only load a certain ",(0,o.kt)("inlineCode",{parentName:"p"},"$type")," of app item which corresponds to it. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"<map>")," components can only load app items of type ",(0,o.kt)("inlineCode",{parentName:"p"},"map-extension")," as their configuration."))))}c.isMDXComponent=!0},1146:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>d,contentTitle:()=>u,metadata:()=>f,toc:()=>g,default:()=>v});var a=n(2122),o=(n(7294),n(3905)),i=n(4996),r=n(1395),s=n(8215),l=n(1962),p=n(7763),c=n(2514),m=n(7466);const d={title:"App Config",sidebar_label:"Getting Started",description:"VertiGIS Studio Web - Learn about VertiGIS Studio Web's configuration concepts"},u=void 0,f={unversionedId:"web/configuration-app-config-getting-started",id:"web/configuration-app-config-getting-started",isDocsHomePage:!1,title:"App Config",description:"VertiGIS Studio Web - Learn about VertiGIS Studio Web's configuration concepts",source:"@site/docs/web/configuration-app-config-getting-started.mdx",sourceDirName:"web",slug:"/web/configuration-app-config-getting-started",permalink:"/docs/web/configuration-app-config-getting-started",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/configuration-app-config-getting-started.mdx",version:"current",frontMatter:{title:"App Config",sidebar_label:"Getting Started",description:"VertiGIS Studio Web - Learn about VertiGIS Studio Web's configuration concepts"},sidebar:"web",previous:{title:"Advanced Model Binding",permalink:"/docs/web/configuration-advanced-model-binding"},next:{title:"App Config Reference",permalink:"/docs/web/configuration-app-config-reference"}},g=[{value:"Anatomy of an App Config",id:"anatomy-of-an-app-config",children:[]},{value:"Linking Layout to App Config",id:"linking-layout-to-app-config",children:[]},{value:"Targeting Components by ID",id:"targeting-components-by-id",children:[]},{value:"Example: Application with Hidden Side Panel",id:"example-application-with-hidden-side-panel",children:[]},{value:"Next Steps: Commands and Operations",id:"next-steps-commands-and-operations",children:[]}],h={toc:g};function v({components:e,...t}){return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Before learning about app config...")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/key-concepts"},"Key Concepts"),"."))),(0,o.kt)("p",null,"While ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/configuration-layout-getting-started"},"layouts")," depict the visual structure of how components are going to appear in the viewer, ",(0,o.kt)("strong",{parentName:"p"},"app config")," is used to define the functional structure within a given component."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Think of the app config as the structural materials for building a house (wood, bricks, etc.) and the layout as the blueprints for the house.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The materials are the fundamental building blocks that create the house itself, and the blueprints allow for them to be structured together into something that people can interact with."))),(0,o.kt)("p",null,"Every component within the viewer that requires functional, compositional content needs to be configured within the viewer's corresponding app config."),(0,o.kt)(m.default,{mdxType:"FollowAlongSnippet"}),(0,o.kt)("h2",{id:"anatomy-of-an-app-config"},"Anatomy of an App Config"),(0,o.kt)(c.default,{mdxType:"AppItemSnippet"}),(0,o.kt)("h2",{id:"linking-layout-to-app-config"},"Linking Layout to App Config"),(0,o.kt)("p",null,"Every component in the layout can be linked to app config with the ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," attribute. The ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," attribute is used to identify the item in the app config that has configuration for the component."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you do not provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," attribute for a component, VertiGIS Studio Web will attempt to ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/sdk-components-reference#component-defaults"},"infer a default value"),"."))),(0,o.kt)(r.Z,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"layout",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    <map config="my-map-config"/>\n</layout>\n'))),(0,o.kt)(s.Z,{value:"config",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "map-extension",\n            "id": "my-map-config",\n            "onInitialized": [\n                {\n                    "name": "ui.alert",\n                    "arguments": {\n                        "message": "Hello World"\n                    }\n                }\n            ]\n        }\n    ]\n}\n'))),(0,o.kt)(s.Z,{value:"ui",mdxType:"TabItem"},(0,o.kt)("img",{src:(0,i.Z)("img/web-app-config-dead-simple.png")}))),(0,o.kt)("h2",{id:"targeting-components-by-id"},"Targeting Components by ID"),(0,o.kt)("p",null,"Every component can also have an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," attribute. The ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," attribute uniquely identifies a component within a layout and allows app items to target the component. The ID can be used by ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/configuration-commands-operations"},"commands")," like ",(0,o.kt)("inlineCode",{parentName:"p"},"ui.activate")," to target components, or by commands like ",(0,o.kt)("inlineCode",{parentName:"p"},"run.workflow")," to target a host container component to display workflow UI within."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This example uses ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/configuration-commands-operations"},"commands and operations")," to power its behavior."))),(0,o.kt)(r.Z,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"layout",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'},'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    <split resizable="true">\n        // highlight-next-line\n        <panel width="30" active="true" id="main-panel"></panel>\n        <map slot="main">\n            <button icon="info" config="run-workflow" slot="top-center" margin="0.5">Run Workflow in Side Panel</button>\n            <split slot="bottom-center">\n                <button config="showIwtm" margin="0.5">Show I Want To Menu</button>\n                <button config="hideIwtm" margin="0.5">Hide I Want To Menu</button>\n            </split>\n            // highlight-next-line\n            <iwtm config="iwtm-config" slot="top-left" active="false" id="iwtm"/>\n        </map>\n    </split>\n</layout>\n'))),(0,o.kt)(s.Z,{value:"config",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'},'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "workflow",\n            "id": "demo-workflow",\n            "title": "Demo Workflow",\n            // highlight-next-line\n            "target": "main-panel",\n            "portalItem": "c3964768dfa84fe5acf7a72ef95dc92b"\n        },\n        {\n            "$type": "menu-item",\n            "id": "run-workflow",\n            "title": "Run Workflow in Sidebar",\n            "isEnabled": true,\n            "iconId": "info",\n            "action": {\n                "name": "workflow.run",\n                "arguments": {\n                    "id": "demo-workflow"\n                }\n            }\n        },\n        {\n            "$type": "menu-item",\n            "id": "showIwtm",\n            "title": "Show I Want To Menu",\n            "isEnabled": true,\n            "iconId": "",\n            "action": {\n                "name": "ui.activate",\n                // highlight-next-line\n                "arguments": "iwtm"\n            }\n        },\n        {\n            "$type": "menu-item",\n            "id": "hideIwtm",\n            "title": "Hide I Want To Menu",\n            "isEnabled": true,\n            "iconId": "",\n            "action": {\n                "name": "ui.deactivate",\n                // highlight-next-line\n                "arguments": "iwtm"\n            }\n        },\n        {\n            "id": "iwtm-config",\n            "items": ["item://menu-item/run-workflow"],\n            "title": "I Want To Menu",\n            "$type": "menu"\n        }\n    ]\n}\n'))),(0,o.kt)(s.Z,{value:"ui",mdxType:"TabItem"},(0,o.kt)("img",{src:(0,i.Z)("img/web-app-config-target-by-id.png")}))),(0,o.kt)("h2",{id:"example-application-with-hidden-side-panel"},"Example: Application with Hidden Side Panel"),(0,o.kt)("p",null,"This example demonstrates a web application with a hidden side panel that pops out when you click a button. It was created entirely with app config and layout. Some ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/configuration-advanced-model-binding"},"advanced layout concepts")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/configuration-app-config-reference"},"advanced app config concepts"),", such as linking config items through ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/configuration-app-config-reference#item-uris"},"item URIs"),", were used."),(0,o.kt)(r.Z,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"layout",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:web="https://geocortex.com/layout/web/v1">\n    <split resizable="true">\n        <panel id="hidden-panel" show-close-button="true" width="50" active="false">\n            <stack padding="2" halign="center" valign="center">\n                <map id="small-map" config="small-map" grow="1" margin="4"/>\n                <scalebar config="small-map-scalebar" grow="1" slot="bottom-left" models="#small-map"/>\n                <button grow="1" config="zoom-both-maps"/>\n                <split grow="1" valign="center">\n                    <button grow="1" config="zoom-small-map"/>\n                    <button grow="1" config="zoom-large-map"/>\n                </split>\n                </stack>\n        </panel>\n        <map id="large-map" config="large-map">\n            <iwtm config="iwtm" slot="top-left"/>\n            <compass slot="top-right"/>\n            <expand slot="bottom-right" >\n                <web:bookmarks />\n            </expand>\n            <web:scale-input slot="bottom-left" />\n            <scalebar slot="bottom-left"/>\n            <map-coordinates slot="context-menu"/>\n        </map>\n    </split>\n</layout>\n'))),(0,o.kt)(s.Z,{value:"config",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "geocortex-web-viewer",\n            "id": "default",\n            "onInitialized": [\n                {\n                    "name": "ui.display-notification",\n                    "arguments": {\n                        "message": "Use the I Want To Menu to open up a hidden side panel."\n                    }\n                }\n            ]\n        },\n        {\n            "$type": "map-extension",\n            "id": "small-map"\n        },\n        {\n            "$type": "map-extension",\n            "id": "large-map"\n        },\n        {\n            "$type": "menu",\n            "id": "iwtm",\n            "items": [\n                {\n                    "$type": "menu-item",\n                    "iconId": "open",\n                    "title": "Open Hidden Side Panel",\n                    "action": {\n                        "name": "ui.activate",\n                        "arguments": "hidden-panel"\n                    }\n                }\n            ],\n            "title": "I Want To Menu",\n            "isLandmark": true\n        },\n        {\n            "$type": "menu-item",\n            "id": "zoom-both-maps",\n            "title": "Zoom Both Maps In",\n            "isEnabled": true,\n            "iconId": "zoom",\n            "action": {\n                "name": "map.zoom-in",\n                "arguments": {\n                    "maps": [\n                        "item://map-extension/small-map",\n                        "item://map-extension/large-map"\n                    ]\n                }\n            }\n        },\n        {\n            "$type": "menu-item",\n            "id": "zoom-small-map",\n            "title": "Zoom Small Map Out",\n            "isEnabled": true,\n            "iconId": "zoom",\n            "action": {\n                "name": "map.zoom-out",\n                "arguments": {\n                    "maps": ["item://map-extension/small-map"]\n                }\n            }\n        },\n        {\n            "$type": "menu-item",\n            "id": "zoom-large-map",\n            "title": "Zoom Large Map Out",\n            "isEnabled": true,\n            "iconId": "zoom",\n            "action": {\n                "name": "map.zoom-out",\n                "arguments": {\n                    "maps": ["item://map-extension/large-map"]\n                }\n            }\n        },\n        {\n            "$type": "scalebar",\n            "id": "small-map-scalebar",\n            "showDualUnits": true\n        }\n    ]\n}\n'))),(0,o.kt)(s.Z,{value:"ui",mdxType:"TabItem"},(0,o.kt)("img",{src:(0,i.Z)("img/web-app-config-hidden-side-panel.png")}))),(0,o.kt)("h2",{id:"next-steps-commands-and-operations"},"Next Steps: Commands and Operations"),(0,o.kt)("p",null,"This article demonstrated some simple examples of layouts with buttons that affect the map or other components in the UI. Commands and operations are the infrastructure which powers those behaviors, and power much of the behavior internal to VertiGIS Studio Web."),(0,o.kt)(p.Z,{mdxType:"UseCaseContainer"},(0,o.kt)(l.Z,{title:"Commands and Operations",description:"Learn about commands and operations and how to configure them",link:(0,i.Z)("docs/web/configuration-commands-operations"),mdxType:"UseCaseCard"}),(0,o.kt)(l.Z,{title:"Create a Custom Theme",description:"Learn how to create a custom theme using app config",link:(0,i.Z)("docs/web/configuration-theme"),mdxType:"UseCaseCard"}),(0,o.kt)(l.Z,{title:"Advanced App Config Topics",description:"Learn more about what you can accomplish with app config",link:(0,i.Z)("docs/web/configuration-app-config-reference"),mdxType:"UseCaseCard"})))}v.isMDXComponent=!0},7466:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>r,metadata:()=>s,toc:()=>l,default:()=>c});var a=n(2122),o=(n(7294),n(3905));const i={},r=void 0,s={unversionedId:"web/snippets/follow-along",id:"web/snippets/follow-along",isDocsHomePage:!1,title:"follow-along",description:"Download and setup the VertiGIS Studio Web SDK and edit the minimal layout and app config provided.",source:"@site/docs/web/snippets/follow-along.mdx",sourceDirName:"web/snippets",slug:"/web/snippets/follow-along",permalink:"/docs/web/snippets/follow-along",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/follow-along.mdx",version:"current",frontMatter:{}},l=[],p={toc:l};function c({components:e,...t}){return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Want to follow along?")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Download and setup the ",(0,o.kt)("a",{parentName:"p",href:"/docs/web/sdk-overview"},"VertiGIS Studio Web SDK")," and edit the minimal layout and app config provided."))))}c.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:()=>o})}}]);