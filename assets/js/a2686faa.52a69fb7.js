(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[1616],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6742:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var i=n(7294),r=n(3727),a=n(2263),o=n(3919),l=n(412);const s=(0,i.createContext)({collectLink:()=>{}});var p=n(4996),c=n(8780);const d=function({isNavLink:e,to:t,href:n,activeClassName:d,isActive:u,"data-noBrokenLinkCheck":m,autoAddBaseUrl:f=!0,...h}){var g;const{siteConfig:{trailingSlash:v}}=(0,a.Z)(),{withBaseUrl:b}=(0,p.C)(),C=(0,i.useContext)(s),k=t||n,y=(0,o.Z)(k),N=null==k?void 0:k.replace("pathname://","");let w=void 0!==N?(x=N,f&&(e=>e.startsWith("/"))(x)?b(x):x):void 0;var x;w&&y&&(w=(0,c.applyTrailingSlash)(w,v));const z=(0,i.useRef)(!1),S=e?r.OL:r.rU,P=l.Z.canUseIntersectionObserver;let M;(0,i.useEffect)((()=>(!P&&y&&null!=w&&window.docusaurus.prefetch(w),()=>{P&&M&&M.disconnect()})),[w,P,y]);const E=null!==(g=null==w?void 0:w.startsWith("#"))&&void 0!==g&&g,T=!w||!y||E;return w&&y&&!E&&!m&&C.collectLink(w),T?i.createElement("a",{href:w,...k&&!y&&{target:"_blank",rel:"noopener noreferrer"},...h}):i.createElement(S,{...h,onMouseEnter:()=>{z.current||null==w||(window.docusaurus.preload(w),z.current=!0)},innerRef:e=>{var t,n;P&&e&&y&&(t=e,n=()=>{null!=w&&window.docusaurus.prefetch(w)},M=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.unobserve(t),M.disconnect(),n())}))})),M.observe(t))},to:w||"",...e&&{isActive:u,activeClassName:d}})}},3919:(e,t,n)=>{"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,{b:()=>i,Z:()=>r})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>a,Z:()=>o});var i=n(2263),r=n(3919);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,i.Z)();return{withBaseUrl:(n,i)=>function(e,t,n,{forcePrependBaseUrl:i=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(i)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+o:o}(t,e,n,i)}}function o(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var i=n(7294);const r=function({children:e,hidden:t,className:n}){return i.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var i=n(7294),r=n(944),a=n(6010);const o="tabItem_1uMI",l="tabItemActive_2DSg";const s=37,p=39;const c=function(e){const{lazy:t,block:n,defaultValue:c,values:d,groupId:u,className:m}=e,{tabGroupChoices:f,setTabGroupChoices:h}=(0,r.Z)(),[g,v]=(0,i.useState)(c),b=i.Children.toArray(e.children),C=[];if(null!=u){const e=f[u];null!=e&&e!==g&&d.some((t=>t.value===e))&&v(e)}const k=e=>{const t=e.currentTarget,n=C.indexOf(t),i=d[n].value;v(i),null!=u&&(h(u,i),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:i,right:r}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:o}=window;return t>=0&&r<=o&&i<=a&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},y=e=>{var t;let n;switch(e.keyCode){case p:{const t=C.indexOf(e.target)+1;n=C[t]||C[0];break}case s:{const t=C.indexOf(e.target)-1;n=C[t]||C[C.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},m)},d.map((({value:e,label:t})=>i.createElement("li",{role:"tab",tabIndex:g===e?0:-1,"aria-selected":g===e,className:(0,a.Z)("tabs__item",o,{"tabs__item--active":g===e}),key:e,ref:e=>C.push(e),onKeyDown:y,onFocus:k,onClick:k},t)))),t?(0,i.cloneElement)(b.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});const i=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(7294),r=n(9443);const a=function(){const e=(0,i.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),i="/"===n?"/":t?(r=n).endsWith("/")?r:`${r}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);var r;return e.replace(n,i)}},8780:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return i(r).default}});var a=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return i(a).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1962:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var i=n(6742),r=n(7294),a=n(6010);const o="root_2PFE";function l({title:e,description:t,link:n}){return r.createElement("div",{className:(0,a.Z)("card-demo",o)},r.createElement("div",{className:"card"},r.createElement("div",{className:"card__header"},r.createElement("h3",null,e)),r.createElement("div",{className:"card__body"},r.createElement("p",null,t)),r.createElement("div",{className:"card__footer"},r.createElement(i.Z,{className:"button button--secondary button--block",to:n},"Get Started"))))}},7763:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(7294);const r="root_NqT0";function a({children:e}){return i.createElement("div",{className:r},e)}},4087:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>d,metadata:()=>u,toc:()=>m,default:()=>h});var i=n(2122),r=(n(7294),n(3905)),a=n(4996),o=n(1962),l=n(7763),s=n(1395),p=n(8215);const c={title:"Serializable Properties",description:"VertiGIS Studio Web - Learn how to serialize and deserialize app config properties"},d=void 0,u={unversionedId:"web/sdk-serializable-properties",id:"web/sdk-serializable-properties",isDocsHomePage:!1,title:"Serializable Properties",description:"VertiGIS Studio Web - Learn how to serialize and deserialize app config properties",source:"@site/docs/web/sdk-serializable-properties.mdx",sourceDirName:"web",slug:"/web/sdk-serializable-properties",permalink:"/docs/web/sdk-serializable-properties",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-serializable-properties.mdx",version:"current",frontMatter:{title:"Serializable Properties",description:"VertiGIS Studio Web - Learn how to serialize and deserialize app config properties"},sidebar:"web",previous:{title:"Commands and Operations",permalink:"/docs/web/sdk-commands-operations"},next:{title:"Adding Icons",permalink:"/docs/web/sdk-adding-icons"}},m=[{value:"Defining a Serializable Class",id:"defining-a-serializable-class",children:[]},{value:"Populating the Class with Configuration Values.",id:"populating-the-class-with-configuration-values",children:[]},{value:"Serialization Modes",id:"serialization-modes",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],f={toc:m};function h({components:e,...t}){return(0,r.kt)("wrapper",(0,i.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"VertiGIS Studio Web uses static, plain, app config JSON files to represent settings and properties for various components and services in an application. At some point, each of the values in the JSON file must be serialized and populate a JavaScript object. Component models and custom services can both consume configuration; therefore, they must also define the logic for translating configuration to runtime values."),(0,r.kt)("h2",{id:"defining-a-serializable-class"},"Defining a Serializable Class"),(0,r.kt)("p",null,"In order for a component to participate in configuration, it must be marked as serializable with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@serializable")," decorator."),(0,r.kt)(s.Z,{defaultValue:"model",values:[{label:"Custom Component Model",value:"model"},{label:"Custom Service",value:"service"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"model",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"...\n// highlight-next-line\n@serializable\nexport default class ExampleComponentModel extends ComponentModelBase<\n    ExampleComponentModelProperties\n> {\n    items: Collection<string> = new Collection<string>();\n    ...\n}\n"))),(0,r.kt)(p.Z,{value:"service",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"...\n// highlight-next-line\n@serializable\nexport default class CustomServiceWithConfig extends ConfigurableServiceBase<\n    CustomServiceProperties\n> {\n   items: Collection<string> = new Collection<string>();\n\n")))),(0,r.kt)("p",null,"Every serializable class extends a generically typed base class, like ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentModelBase")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigurableServiceBase"),". The type passed into the base class is an interface consisting of primitive, serializable types, like ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"array"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", etc. Each property on the interface will correspond exactly to a property in the app config JSON."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Marking properties in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentModelProperties")," interface as optional allows them to be left out of config and populated with default values. It's best practice to make properties optional and provide a default value if possible."))),(0,r.kt)(s.Z,{defaultValue:"model",values:[{label:"Custom Component Model",value:"model"},{label:"Custom Service",value:"service"},{label:"App Config",value:"config"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"model",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"...\n// highlight-start\ninterface ExampleComponentModelProperties extends ComponentModelProperties {\n    items?: string[];\n}\n// highlight-end\n\n@serializable\nexport default class ExampleComponentModel extends ComponentModelBase<\n    ExampleComponentModelProperties\n> {\n    items: Collection<string> = new Collection<string>();\n    ...\n}\n"))),(0,r.kt)(p.Z,{value:"service",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"...\n// highlight-start\ninterface CustomServiceProperties extends ComponentModelProperties {\n    items?: string[];\n}\n// highlight-end\n\n@serializable\nexport default class CustomServiceWithConfig extends ConfigurableServiceBase<\n    CustomServiceProperties\n> {\n   items: Collection<string> = new Collection<string>();\n\n"))),(0,r.kt)(p.Z,{value:"config",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "custom-service",\n            "id": "custom-service-config",\n            "title": "Custom Service Config",\n            // highlight-next-line\n            "items": ["some", "string", "values"]\n        },\n        {\n            "$type": "example-component-model",\n            "id": "example-component-model-config",\n            "title": "Example Component Model Config",\n            // highlight-next-line\n            "items": ["more", "string", "values"]\n        }\n        ...\n    ]\n}\n')))),(0,r.kt)("h2",{id:"populating-the-class-with-configuration-values"},"Populating the Class with Configuration Values."),(0,r.kt)("p",null,"The class is responsible for turning the ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentModelProperties")," interface, which will be populated with primitive values from the app config JSON, into complex properties on the class object itself. This work is done through the ",(0,r.kt)("inlineCode",{parentName:"p"},"_getSerializableProperties")," method."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"_getSerializableProperties()")," method has a few purposes."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Provide deserialization logic from the ",(0,r.kt)("inlineCode",{parentName:"li"},"ComponentModelProperties")," interface to class properties."),(0,r.kt)("li",{parentName:"ol"},"Provide serialization logic from an class property to the ",(0,r.kt)("inlineCode",{parentName:"li"},"ComponentModelProperties")," interface, which can be serialized in a JSON file."),(0,r.kt)("li",{parentName:"ol"},"Provide a default value for the JSON object if one is not given in the app config.")),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It's key that the existing properties also get serialized through a call to ",(0,r.kt)("inlineCode",{parentName:"p"},"super._getSerializableProperties()"),"."))),(0,r.kt)("p",null,"In the following example, the serialization logic for the ",(0,r.kt)("inlineCode",{parentName:"p"},"ExampleComponentModelProperties")," string array property ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," is defined. The corresponding class property is an ",(0,r.kt)("a",{parentName:"p",href:"https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html"},"ArcGIS API for JavaScript Collection"),". Therefore, the ",(0,r.kt)("inlineCode",{parentName:"p"},"deserialize")," method takes each item from the string array, and adds it to to collection. The ",(0,r.kt)("inlineCode",{parentName:"p"},"serialize")," method does the opposite, turning the collection into a plain string array. A default value for the ",(0,r.kt)("inlineCode",{parentName:"p"},"string[]")," is also provided."),(0,r.kt)(s.Z,{defaultValue:"model",values:[{label:"Custom Component Model",value:"model"},{label:"Custom Service",value:"service"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"model",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'...\ninterface ExampleComponentModelProperties extends ComponentModelProperties {\n    items?: string[];\n}\n\n\n@serializable\nexport default class ExampleComponentModel extends ComponentModelBase<\n    ExampleComponentModelProperties\n> {\n    items: Collection<string> = new Collection<string>();\n\n    ...\n\n    protected _getSerializableProperties(): PropertyDefs<\n        ExampleComponentModelProperties\n    > {\n        // highlight-next-line\n        const props = super._getSerializableProperties();\n        return {\n            ...props,\n            items: {\n\n                serializeModes: ["initial"],\n                default: ["Some Default Value"],\n                serialize: () => this.items.toArray(),\n                deserialize: (items: string[]) => {\n                    this.items.removeAll();\n                    this.items.addMany(items); s\n                },\n            },\n        };\n    }\n}\n'))),(0,r.kt)(p.Z,{value:"service",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'...\ninterface CustomServiceProperties extends ComponentModelProperties {\n    items?: string[];\n}\n\n@serializable\nexport default class CustomServiceWithConfig extends ConfigurableServiceBase<\n    CustomServiceProperties\n> {\n    items: Collection<string> = new Collection<string>();\n\n    ...\n\n    protected _getSerializableProperties(): PropertyDefs<\n        ExampleComponentModelProperties\n    > {\n        // highlight-next-line\n        const props = super._getSerializableProperties();\n        return {\n            ...props,\n            items: {\n\n                serializeModes: ["initial"],\n                default: ["Some Default Value"],\n                serialize: () => this.items.toArray(),\n                deserialize: (items: string[]) => {\n                    this.items.removeAll();\n                    this.items.addMany(items); s\n                },\n            },\n        };\n    }\n}\n')))),(0,r.kt)("p",null,"Already serializable properties such as ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," values or ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," values can have their serialization logic omitted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'...\ninterface ExampleComponentModelProperties extends ComponentModelProperties {\n    stringVal?: string;\n}\n\n@serializable\nexport default class ExampleComponentModel extends ComponentModelBase<\n    ExampleComponentModelProperties\n> {\n    stringVal: string;\n\n    protected _getSerializableProperties(): PropertyDefs<\n        ExampleComponentModelProperties\n    > {\n        const props = super._getSerializableProperties();\n        return {\n            ...props,\n            stringVal: {\n                serializeModes: ["initial"],\n                default: "Simple String Value",\n            },\n        };\n    }\n}\n')),(0,r.kt)("h2",{id:"serialization-modes"},"Serialization Modes"),(0,r.kt)("p",null,"Every property has a number of serialization modes it can use to persist the values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'export declare type SerializeMode = "initial" | "all" | "preferences";\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"initial")," will serialize to the app config JSON only if it is different from the default."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"all")," will serialize all values to the app config JSON every time."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"preferences")," will serialize the value to storage which will persist between application loads, but only apply to a single user."),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)(l.Z,{mdxType:"UseCaseContainer"},(0,r.kt)(o.Z,{title:"Check out the Component Reference for Configuration",description:"Learn more about how components interact with configuration",link:(0,a.Z)("docs/web/sdk-components-reference#configuration"),mdxType:"UseCaseCard"}),(0,r.kt)(o.Z,{title:"Check out the Service Reference for Configuration",description:"Learn more about how services interact with configuration",link:(0,a.Z)("docs/web/sdk-services-reference#models-and-configuration"),mdxType:"UseCaseCard"})))}h.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:()=>r})}}]);