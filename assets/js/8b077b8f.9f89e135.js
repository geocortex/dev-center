(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[4375],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6742:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var o=n(7294),r=n(3727),i=n(2263),a=n(3919),c=n(412);const s=(0,o.createContext)({collectLink:()=>{}});var l=n(4996),u=n(8780);const m=function({isNavLink:e,to:t,href:n,activeClassName:m,isActive:p,"data-noBrokenLinkCheck":d,autoAddBaseUrl:f=!0,...h}){var g;const{siteConfig:{trailingSlash:v}}=(0,i.Z)(),{withBaseUrl:b}=(0,l.C)(),y=(0,o.useContext)(s),w=t||n,I=(0,a.Z)(w),k=null==w?void 0:w.replace("pathname://","");let C=void 0!==k?(x=k,f&&(e=>e.startsWith("/"))(x)?b(x):x):void 0;var x;C&&I&&(C=(0,u.applyTrailingSlash)(C,v));const N=(0,o.useRef)(!1),T=e?r.OL:r.rU,E=c.Z.canUseIntersectionObserver;let O;(0,o.useEffect)((()=>(!E&&I&&null!=C&&window.docusaurus.prefetch(C),()=>{E&&O&&O.disconnect()})),[C,E,I]);const S=null!==(g=null==C?void 0:C.startsWith("#"))&&void 0!==g&&g,W=!C||!I||S;return C&&I&&!S&&!d&&y.collectLink(C),W?o.createElement("a",{href:C,...w&&!I&&{target:"_blank",rel:"noopener noreferrer"},...h}):o.createElement(T,{...h,onMouseEnter:()=>{N.current||null==C||(window.docusaurus.preload(C),N.current=!0)},innerRef:e=>{var t,n;E&&e&&I&&(t=e,n=()=>{null!=C&&window.docusaurus.prefetch(C)},O=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(O.unobserve(t),O.disconnect(),n())}))})),O.observe(t))},to:C||"",...e&&{isActive:p,activeClassName:m}})}},3919:(e,t,n)=>{"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,{b:()=>o,Z:()=>r})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>i,Z:()=>a});var o=n(2263),r=n(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,o.Z)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+a:a}(t,e,n,o)}}function a(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(7294);const r=function({children:e,hidden:t,className:n}){return o.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(7294),r=n(944),i=n(6010);const a="tabItem_1uMI",c="tabItemActive_2DSg";const s=37,l=39;const u=function(e){const{lazy:t,block:n,defaultValue:u,values:m,groupId:p,className:d}=e,{tabGroupChoices:f,setTabGroupChoices:h}=(0,r.Z)(),[g,v]=(0,o.useState)(u),b=o.Children.toArray(e.children),y=[];if(null!=p){const e=f[p];null!=e&&e!==g&&m.some((t=>t.value===e))&&v(e)}const w=e=>{const t=e.currentTarget,n=y.indexOf(t),o=m[n].value;v(o),null!=p&&(h(p,o),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:o,right:r}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:a}=window;return t>=0&&r<=a&&o<=i&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((()=>t.classList.remove(c)),2e3))}),150))},I=e=>{var t;let n;switch(e.keyCode){case l:{const t=y.indexOf(e.target)+1;n=y[t]||y[0];break}case s:{const t=y.indexOf(e.target)-1;n=y[t]||y[y.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},m.map((({value:e,label:t})=>o.createElement("li",{role:"tab",tabIndex:g===e?0:-1,"aria-selected":g===e,className:(0,i.Z)("tabs__item",a,{"tabs__item--active":g===e}),key:e,ref:e=>y.push(e),onKeyDown:I,onFocus:w,onClick:w},t)))),t?(0,o.cloneElement)(b.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(7294),r=n(9443);const i=function(){const e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),o="/"===n?"/":t?(r=n).endsWith("/")?r:`${r}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);var r;return e.replace(n,o)}},8780:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return o(r).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return o(i).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var o=n(6742),r=n(7294),i=n(6010);const a="root_2PFE";function c({title:e,description:t,link:n}){return r.createElement("div",{className:(0,i.Z)("card-demo",a)},r.createElement("div",{className:"card"},r.createElement("div",{className:"card__header"},r.createElement("h3",null,e)),r.createElement("div",{className:"card__body"},r.createElement("p",null,t)),r.createElement("div",{className:"card__footer"},r.createElement(o.Z,{className:"button button--secondary button--block",to:n},"Get Started"))))}},7763:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(7294);const r="root_NqT0";function i({children:e}){return o.createElement("div",{className:r},e)}},9022:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>u,contentTitle:()=>m,metadata:()=>p,toc:()=>d,default:()=>h});var o=n(2122),r=(n(7294),n(3905)),i=n(4996),a=n(1395),c=n(8215),s=n(1962),l=n(7763);const u={title:"Adding Icons",description:"VertiGIS Studio Web - Learn how to add custom icons to the Web SDK",hide_table_of_contents:!0},m=void 0,p={unversionedId:"web/sdk-adding-icons",id:"web/sdk-adding-icons",isDocsHomePage:!1,title:"Adding Icons",description:"VertiGIS Studio Web - Learn how to add custom icons to the Web SDK",source:"@site/docs/web/sdk-adding-icons.mdx",sourceDirName:"web",slug:"/web/sdk-adding-icons",permalink:"/docs/web/sdk-adding-icons",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-adding-icons.mdx",version:"current",frontMatter:{title:"Adding Icons",description:"VertiGIS Studio Web - Learn how to add custom icons to the Web SDK",hide_table_of_contents:!0},sidebar:"web",previous:{title:"Serializable Properties",permalink:"/docs/web/sdk-serializable-properties"},next:{title:"Internationalization",permalink:"/docs/web/sdk-internationalization"}},d=[{value:"Next Steps",id:"next-steps",children:[]}],f={toc:d};function h({components:e,...t}){return(0,r.kt)("wrapper",(0,o.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The VertiGIS Studio Web SDK supports adding custom icons to applications. Icon components are created with the ",(0,r.kt)("inlineCode",{parentName:"p"},"createSvgIcon")," function. These icon components can then be registered to make them available to app config, layout, and other built-in web components."),(0,r.kt)("p",null,"To create a new SVG icon, create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"tsx")," file that exports the ",(0,r.kt)("inlineCode",{parentName:"p"},"createSvgIcon")," function. This function will create a React component icon that can be used in VertiGIS Studio Web Components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/icons/CustomIcon.tsx"',title:'"src/icons/CustomIcon.tsx"'},'import createSvgIcon from "@vertigis/web/ui/icons/utils/createSvgIcon";\nimport React from "react";\n\nexport default createSvgIcon(\n    <path d="M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20v-2z" />\n);\n')),(0,r.kt)("p",null,"You can then register this icon with the library using the ",(0,r.kt)("inlineCode",{parentName:"p"},"registry.registerIcon(...)")," function. This allows it to be used in the app config, layout, and built-in web components like ",(0,r.kt)("inlineCode",{parentName:"p"},"DynamicIcon"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"Button"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Icon IDs should be chosen to be globally unique - one easy way to ensure this is to preface the icon ID with your company name."))),(0,r.kt)(a.Z,{defaultValue:"registration",values:[{label:"Registration",value:"registration"},{label:"Component With Icon",value:"component"},{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"registration",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'},'import { LibraryRegistry } from "@vertigis/web/config";\nimport ComponentWithIcon from "./components/ComponentWithIcon/ComponentWithIcon";\nimport ComponentWithIconModel from "./components/ComponentWithIcon/ComponentWithIconModel";\nimport CustomIcon from "./icons/CustomIcon";\nconst LAYOUT_NAMESPACE = "my.custom.namespace";\n\nexport default function (registry: LibraryRegistry): void {\n    registry.registerComponent({\n        name: "component-with-icon",\n        namespace: LAYOUT_NAMESPACE,\n        getComponentType: () => ComponentWithIcon,\n        itemType: "component-with-icon-model",\n        title: "Component With Icon",\n    });\n    registry.registerModel({\n        getModel: (config) => new ComponentWithIconModel(config),\n        itemType: "component-with-icon-model",\n    });\n    registry.registerIcon({\n        id: "my-company-name-arrow",\n        getComponentType: () => CustomIcon,\n    });\n}\n'))),(0,r.kt)(c.Z,{value:"component",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/ComponentWithIcon/ComponentWithIcon.tsx"',title:'"src/components/ComponentWithIcon/ComponentWithIcon.tsx"'},'import React, { FC } from "react";\nimport {\n    LayoutElement,\n    LayoutElementProperties,\n} from "@vertigis/web/components";\nimport DynamicIcon from "@vertigis/web/ui/DynamicIcon";\nimport ComponentWithIconModel from "./ComponentWithIconModel";\nimport MenuItem from "@vertigis/web/ui/MenuItem";\nimport IconButton from "@vertigis/web/ui/IconButton";\nimport ListItemText from "@vertigis/web/ui/ListItemText";\n\nconst ComponentWithIcon: FC<\n    LayoutElementProperties<ComponentWithIconModel>\n> = (props) => {\n    // highlight-next-line\n    const { icon } = props.model;\n    return (\n        <LayoutElement\n            {...props}\n            style={{ backgroundColor: "white" }}\n        >\n            <MenuItem>\n                <ListItemText primary="Custom Arrow Icon" />\n                <IconButton title="Custom Arrow Icon">\n                    // highlight-next-line\n                    <DynamicIcon src={icon} />\n                </IconButton>\n            </MenuItem>\n        </LayoutElement>\n    );\n};\n\nexport default ComponentWithIcon;\n'))),(0,r.kt)(c.Z,{value:"config",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'},'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "default",\n            "title": "Default",\n            "url": "./layout.xml"\n        },\n        {\n            "$type": "component-with-icon-model",\n            "id": "default",\n            // highlight-next-line\n            "icon": "my-company-name-arrow"\n        },\n        {\n            "$type": "menu",\n            "id": "iwtm-config",\n            "title": "I Want To Menu",\n            "items": [\n                {\n                    "$type": "menu-item",\n                    "title": "Menu Item With Custom Icon",\n                    // highlight-next-line\n                    "icon": "my-company-name-arrow"\n                }\n            ]\n        }\n    ]\n}\n'))),(0,r.kt)(c.Z,{value:"layout",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'},'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="my.custom.namespace">\n    <map config="map-1">\n        <custom:component-with-icon slot="top-left" width="22" height="5" config="default"/>\n        <iwtm slot="top-right" config="iwtm-config" />\n    </map>\n</layout>\n'))),(0,r.kt)(c.Z,{value:"ui",mdxType:"TabItem"},(0,r.kt)("img",{src:(0,i.Z)("img/web-custom-dynamic-icon.png")}))),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)(l.Z,{mdxType:"UseCaseContainer"},(0,r.kt)(s.Z,{title:"Use Icons in Components",description:"Learn how to use icons in custom components",link:(0,i.Z)("docs/web/sdk-components-styling"),mdxType:"UseCaseCard"})))}h.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:()=>r})}}]);