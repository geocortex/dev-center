(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[7833,5343,7499],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3919:(e,t,n)=>{"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,{b:()=>a,Z:()=>o})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>i,Z:()=>r});var a=n(2263),o=n(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(a)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+r:r}(t,e,n,a)}}function r(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(7294);const o=function({children:e,hidden:t,className:n}){return a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(7294),o=n(944),i=n(6010);const r="tabItem_1uMI",s="tabItemActive_2DSg";const p=37,l=39;const c=function(e){const{lazy:t,block:n,defaultValue:c,values:m,groupId:u,className:d}=e,{tabGroupChoices:f,setTabGroupChoices:h}=(0,o.Z)(),[g,k]=(0,a.useState)(c),y=a.Children.toArray(e.children),b=[];if(null!=u){const e=f[u];null!=e&&e!==g&&m.some((t=>t.value===e))&&k(e)}const v=e=>{const t=e.currentTarget,n=b.indexOf(t),a=m[n].value;k(a),null!=u&&(h(u,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:o}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:r}=window;return t>=0&&o<=r&&a<=i&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((()=>t.classList.remove(s)),2e3))}),150))},N=e=>{var t;let n;switch(e.keyCode){case l:{const t=b.indexOf(e.target)+1;n=b[t]||b[0];break}case p:{const t=b.indexOf(e.target)-1;n=b[t]||b[b.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},m.map((({value:e,label:t})=>a.createElement("li",{role:"tab",tabIndex:g===e?0:-1,"aria-selected":g===e,className:(0,i.Z)("tabs__item",r,{"tabs__item--active":g===e}),key:e,ref:e=>b.push(e),onKeyDown:N,onFocus:v,onClick:v},t)))),t?(0,a.cloneElement)(y.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(7294),o=n(9443);const i=function(){const e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},5139:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>m,metadata:()=>u,toc:()=>d,default:()=>h});var a=n(2122),o=(n(7294),n(3905)),i=n(2514),r=n(1895),s=n(4996),p=n(1395),l=n(8215);const c={title:"App Config Reference",description:"VertiGIS Studio Mobile - App config reference"},m=void 0,u={unversionedId:"mobile/configuration-app-config-reference",id:"mobile/configuration-app-config-reference",isDocsHomePage:!1,title:"App Config Reference",description:"VertiGIS Studio Mobile - App config reference",source:"@site/docs/mobile/configuration-app-config-reference.mdx",sourceDirName:"mobile",slug:"/mobile/configuration-app-config-reference",permalink:"/docs/mobile/configuration-app-config-reference",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/configuration-app-config-reference.mdx",version:"current",frontMatter:{title:"App Config Reference",description:"VertiGIS Studio Mobile - App config reference"},sidebar:"mobile",previous:{title:"Getting Started",permalink:"/docs/mobile/configuration-app-config-getting-started"},next:{title:"Configuring the Theme",permalink:"/docs/mobile/configuration-theme"}},d=[{value:"Schema Properties",id:"schema-properties",children:[]},{value:"App Items",id:"app-items",children:[{value:"Custom App Items",id:"custom-app-items",children:[]}]},{value:"Item URIs and Resource URIs",id:"item-uris-and-resource-uris",children:[]},{value:"Reusing Config",id:"reusing-config",children:[]},{value:"Internationalization",id:"internationalization",children:[]}],f={toc:d};function h({components:e,...t}){return(0,o.kt)("wrapper",(0,a.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"schema-properties"},"Schema Properties"),(0,o.kt)("p",null,"The two properties ",(0,o.kt)("inlineCode",{parentName:"p"},"$schema")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"schemaVersion")," should always be present in an ",(0,o.kt)("inlineCode",{parentName:"p"},"app.json")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n\n  "schemaVersion": "1.0",\n\n  "items": [...]\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"$schema")," property powers the Visual Studio intellisense in the ",(0,o.kt)("inlineCode",{parentName:"p"},"app.json")," file for the various properties that each ",(0,o.kt)("strong",{parentName:"p"},"app item")," has. The ",(0,o.kt)("inlineCode",{parentName:"p"},"app.json")," included with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-edit-layout-app-config"},"Quickstart")," references a schema at the root of the project. If you move an ",(0,o.kt)("inlineCode",{parentName:"p"},"app.json")," file, you will need to fix the relative path to the schema file. For more information on json schemas, see ",(0,o.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"json-schema.org"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ViewerFramework")," folder containing the schema will not be created until an initial build is complete."))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"schemaVersion")," property is a required property that informs VertiGIS Studio Mobile what version of app config you are using. This allows for the schema to be updated in future releases without breaking old configuration."),(0,o.kt)("h2",{id:"app-items"},"App Items"),(0,o.kt)(i.default,{mdxType:"AppItemSnippet"}),(0,o.kt)("h3",{id:"custom-app-items"},"Custom App Items"),(0,o.kt)("p",null,"App items in VertiGIS Studio Mobile correspond to a class that extends ",(0,o.kt)("inlineCode",{parentName:"p"},"VisualAppItem")," and registers with ",(0,o.kt)("strong",{parentName:"p"},"Autofac")," as an ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-dependency-injection#appitem"},(0,o.kt)("inlineCode",{parentName:"a"},"AppItem")," type"),", like the ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomComponentConfiguration")," in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/tutorial-implement-component-participate-app-config#create-a-skeleton-app-config-definition"},"app config tutorial"),"."),(0,o.kt)(r.default,{mdxType:"AutofacSnippet"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'[assembly: AppItem(CustomComponentConfiguration.ConfigItemtype, typeof(CustomComponentConfiguration))]\nnamespace App1.Configuration\n{\n    public class CustomComponentConfiguration : VisualAppItem\n    {\n        public const string ConfigItemtype = "custom-component-config";\n\n        ... // config properties, etc\n\n    }\n}\n')),(0,o.kt)("p",null,"Registering a class in this manner makes mobile aware of a new ",(0,o.kt)("strong",{parentName:"p"},"app item type"),", which can be added to the items list in the ",(0,o.kt)("inlineCode",{parentName:"p"},"app.json")," with the appropriate ",(0,o.kt)("inlineCode",{parentName:"p"},"$type")," specified. Components can consume these app items, and by extension, the configuration. Check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-components-reference#configuration-models"},"component configuration models")," for more details."),(0,o.kt)("h2",{id:"item-uris-and-resource-uris"},"Item URIs and Resource URIs"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Item URIs")," are a commonly used pattern in the ",(0,o.kt)("inlineCode",{parentName:"p"},"app.json")," to uniquely identify and reference app items. They take the format"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"item://<item-type>/<item-id>")),(0,o.kt)("p",null,"For example, the item URI for the following item is ",(0,o.kt)("inlineCode",{parentName:"p"},"item://menu-item/measureAction")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$type": "menu",\n  "id": "feature-actions",\n  "items": [...]\n}\n')),(0,o.kt)("p",null,"These item URIs can be used by app items to include other app items as property values, allowing reuse."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$type": "feature-details",\n    "id": "feature-details",\n    "featureActions": "item://menu/feature-actions"\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Resource URIs")," are used to load layouts in VertiGIS Studio Mobile. Layout files are ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/tutorial-add-medium-layout"},"added to VertiGIS Studio Mobile")," as an asset which is copied into the end users local data folder. These copied assets are referenced with a URI of the format"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"resource://layout-<size>.xml")),(0,o.kt)("p",null,"For example, here's references to a small, medium, and large layout in the ",(0,o.kt)("inlineCode",{parentName:"p"},"app.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schemaVersion": "1.0",\n  "items":[\n    ...\n    {\n        "$type": "layout",\n        "id": "desktop-layout",\n        "url": "resource://layout-large.xml",\n        "tags": ["mobile", "large"]\n    },\n    {\n        "$type": "layout",\n        "id": "tablet-layout",\n        "url": "resource://layout-medium.xml",\n        "tags": ["mobile", "medium"]\n    },\n    {\n        "$type": "layout",\n        "id": "handheld-layout",\n        "url": "resource://layout-small.xml",\n        "tags": ["mobile", "small"]\n    }\n    ...\n  ]\n}\n')),(0,o.kt)("h2",{id:"reusing-config"},"Reusing Config"),(0,o.kt)("p",null,"The same config can be used for multiple items in a layout. For example, this allows you to reuse the same button in multiple locations in the App."),(0,o.kt)(p.Z,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"layout",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1"\n        xmlns:gxm="https://geocortex.com/layout/mobile/v1">\n  <gxm:taskbar orientation="vertical">\n    <panel grow="1">\n        <stack margin="0.5">\n            // highlight-next-line\n          <button icon="info" config="do-something" slot="top-center-visible" margin="0.5">Do Something 2</button>\n        </stack>\n    </panel>\n    <map slot="main">\n      // highlight-next-line\n      <button icon="info" config="do-something" slot="top-center-visible" margin="0.5">Do Something 1</button>\n    </map>\n  </gxm:taskbar>\n</layout>\n'))),(0,o.kt)(l.Z,{value:"config",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "menu-item",\n            // highlight-next-line\n            "id": "do-something",\n            "title": "ui.alert",\n            "isEnabled": true,\n            "iconId": "info",\n            "action": {\n                "name": "ui.alert",\n                "arguments": {\n                    "title": "Something?",\n                    "message": "Fine, I did it",\n                    "buttonText": "OK"\n                }\n            }\n        }\n    ]\n}\n'))),(0,o.kt)(l.Z,{value:"ui",mdxType:"TabItem"},(0,o.kt)("img",{src:(0,s.Z)("img/mobile-app-config-linking.png")}))),(0,o.kt)("h2",{id:"internationalization"},"Internationalization"),(0,o.kt)("p",null,"All language strings used for properties in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-app-config-getting-started"},"app config"),', like "title" or "description", are automatically translated by the application.'),(0,o.kt)("p",null,"Learn more about how to ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-internationalization"},"use and create language resources"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "menu-item",\n            "id": "zoom-to-extent",\n            "iconId": "zoom-extent",\n            "title": "language-zoom-extent-title",\n            "description": "language-zoom-extent-description",\n            "action": "map.zoom-to-layer-extent"\n        },\n        ...\n    ]\n}\n')))}h.isMDXComponent=!0},2514:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>r,metadata:()=>s,toc:()=>p,default:()=>c});var a=n(2122),o=(n(7294),n(3905));const i={},r=void 0,s={unversionedId:"snippets/app-item",id:"snippets/app-item",isDocsHomePage:!1,title:"app-item",description:"An app config file is composed of a list of app items. App items can potentially be anything. Each app item has an item $type, which viewer is aware of and knows how to locate and load. They usually they represent configuration for components, maps, portal items, or shared data. All item app configuration is specified within the items array of the app.json file.",source:"@site/docs/snippets/app-item.mdx",sourceDirName:"snippets",slug:"/snippets/app-item",permalink:"/docs/snippets/app-item",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/snippets/app-item.mdx",version:"current",frontMatter:{}},p=[],l={toc:p};function c({components:e,...t}){return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An app config file is composed of a list of ",(0,o.kt)("strong",{parentName:"p"},"app items"),". App items can potentially be anything. Each app item has an ",(0,o.kt)("strong",{parentName:"p"},"item ",(0,o.kt)("inlineCode",{parentName:"strong"},"$type")),", which viewer is aware of and knows how to locate and load. They usually they represent configuration for components, maps, portal items, or shared data. All item app configuration is specified within the ",(0,o.kt)("inlineCode",{parentName:"p"},"items")," array of the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"app.json"))," file."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Each component can only load a certain ",(0,o.kt)("inlineCode",{parentName:"p"},"$type")," of app item which corresponds to it. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"<map>")," components can only load app items of type ",(0,o.kt)("inlineCode",{parentName:"p"},"map-extension")," as their configuration."))))}c.isMDXComponent=!0},1895:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>r,metadata:()=>s,toc:()=>p,default:()=>c});var a=n(2122),o=(n(7294),n(3905));const i={},r=void 0,s={unversionedId:"snippets/autofac-mobile",id:"snippets/autofac-mobile",isDocsHomePage:!1,title:"autofac-mobile",description:"VertiGIS Studio Mobile uses Autofac to register, locate, and inject components, services and other classes. See dependency injection for more info.",source:"@site/docs/snippets/autofac-mobile.mdx",sourceDirName:"snippets",slug:"/snippets/autofac-mobile",permalink:"/docs/snippets/autofac-mobile",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/snippets/autofac-mobile.mdx",version:"current",frontMatter:{}},p=[],l={toc:p};function c({components:e,...t}){return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"VertiGIS Studio Mobile uses ",(0,o.kt)("a",{parentName:"p",href:"https://autofaccn.readthedocs.io/en/latest/index.html"},"Autofac")," to register, locate, and inject components, services and other classes. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-dependency-injection"},"dependency injection")," for more info."))))}c.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:()=>o})}}]);