(globalThis.webpackChunkgeocortex_dev_center=globalThis.webpackChunkgeocortex_dev_center||[]).push([[9261],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:(e,t,n)=>{"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,{b:()=>a,Z:()=>i})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>o,Z:()=>r});var a=n(2263),i=n(3919);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(a)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+r:r}(t,e,n,a)}}function r(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(7294);const i=function({children:e,hidden:t,className:n}){return a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(7294),i=n(944),o=n(6010);const r="tabItem_1uMI",l="tabItemActive_2DSg";const s=37,c=39;const p=function(e){const{lazy:t,block:n,defaultValue:p,values:m,groupId:d,className:u}=e,{tabGroupChoices:h,setTabGroupChoices:g}=(0,i.Z)(),[k,f]=(0,a.useState)(p),v=a.Children.toArray(e.children),b=[];if(null!=d){const e=h[d];null!=e&&e!==k&&m.some((t=>t.value===e))&&f(e)}const N=e=>{const t=e.currentTarget,n=b.indexOf(t),a=m[n].value;f(a),null!=d&&(g(d,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:i}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:r}=window;return t>=0&&i<=r&&a<=o&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},x=e=>{var t;let n;switch(e.keyCode){case c:{const t=b.indexOf(e.target)+1;n=b[t]||b[0];break}case s:{const t=b.indexOf(e.target)-1;n=b[t]||b[b.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},u)},m.map((({value:e,label:t})=>a.createElement("li",{role:"tab",tabIndex:k===e?0:-1,"aria-selected":k===e,className:(0,o.Z)("tabs__item",r,{"tabs__item--active":k===e}),key:e,ref:e=>b.push(e),onKeyDown:x,onFocus:N,onClick:N},t)))),t?(0,a.cloneElement)(v.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(7294),i=n(9443);const o=function(){const e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},4929:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>p,toc:()=>m,default:()=>u});var a=n(2122),i=(n(7294),n(3905)),o=n(4996),r=n(1395),l=n(8215);const s={title:"Layout Reference",description:"VertiGIS Studio Mobile - Layout Reference"},c=void 0,p={unversionedId:"mobile/configuration-layout-reference",id:"mobile/configuration-layout-reference",isDocsHomePage:!1,title:"Layout Reference",description:"VertiGIS Studio Mobile - Layout Reference",source:"@site/docs/mobile/configuration-layout-reference.mdx",sourceDirName:"mobile",slug:"/mobile/configuration-layout-reference",permalink:"/docs/mobile/configuration-layout-reference",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/configuration-layout-reference.mdx",version:"current",frontMatter:{title:"Layout Reference",description:"VertiGIS Studio Mobile - Layout Reference"},sidebar:"mobile",previous:{title:"Getting Started",permalink:"/docs/mobile/configuration-layout-getting-started"},next:{title:"Advanced Model Binding",permalink:"/docs/mobile/configuration-advanced-model-binding"}},m=[{value:"Autocomplete Properties",id:"autocomplete-properties",children:[]},{value:"Basic Attributes",id:"basic-attributes",children:[{value:"<code>id</code>",id:"id",children:[]},{value:"<code>config</code>",id:"config",children:[]},{value:"<code>active</code>",id:"active",children:[]}]},{value:"Core Layout Components",id:"core-layout-components",children:[{value:"Stacks and Splits",id:"stacks-and-splits",children:[]},{value:"Panels",id:"panels",children:[]},{value:"Taskbar",id:"taskbar",children:[]}]},{value:"Presentation Attributes",id:"presentation-attributes",children:[{value:"<code>margin</code>",id:"margin",children:[]},{value:"<code>padding</code>",id:"padding",children:[]},{value:"<code>width</code>",id:"width",children:[]},{value:"<code>height</code>",id:"height",children:[]},{value:"<code>grow</code>",id:"grow",children:[]},{value:"<code>halign</code> (Horizontal Align)",id:"halign-horizontal-align",children:[]},{value:"<code>valign</code> (Vertical Align)",id:"valign-vertical-align",children:[]},{value:"Alignments Effect on cross-axis stretching",id:"alignments-effect-on-cross-axis-stretching",children:[]}]}],d={toc:m};function u({components:e,...t}){return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"autocomplete-properties"},"Autocomplete Properties"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"layout-*.xml")," files that come with the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-quickstart"},"Quickstart")," reference an xml schema. This XML schema allows Visual Studio to autocomplete property names and provide linting for types. Two attributes on the layout, ",(0,i.kt)("inlineCode",{parentName:"p"},"xmlns:xsi"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"xsi:schemaLocation")," allow this to happen. If you move the ",(0,i.kt)("inlineCode",{parentName:"p"},"layout-*.xml")," files, you will need to adjust the relative reference to the layout schema for autocomplete to still function."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ViewerFramework")," folder containing the schema will not be created until an initial build has been run."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n    ...\n</layout>\n')),(0,i.kt)("h2",{id:"basic-attributes"},"Basic Attributes"),(0,i.kt)("p",null,"This is a reference for the attributes available to all components in an app layout. All components support these attributes, as well as any custom attributes the component defines. Some of these attributes are accessible through the ",(0,i.kt)("a",{parentName:"p",href:"https://apps.geocortex.com/mobileviewer/designer/"},"VertiGIS Studio Mobile Designer"),", and the rest can be configured through layout."),(0,i.kt)("p",null,"All attributes are specified as string values, and parsed into their respective types by VertiGIS Studio Mobile"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- string attribute --\x3e\n<stack id="some-id"/>\n\x3c!-- number attribute --\x3e\n<stack margin="3"/>\n\x3c!-- boolean attribute --\x3e\n<stack active="false"/>\n')),(0,i.kt)("h3",{id:"id"},(0,i.kt)("inlineCode",{parentName:"h3"},"id")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Description"),": Used to uniquely identify the component in the layout."),(0,i.kt)("h3",{id:"config"},(0,i.kt)("inlineCode",{parentName:"h3"},"config")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Description"),": Used to bind a component to an item in the app config. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-app-config-getting-started#linking-layout-to-app-config"},"linking layout app config")," for more details."),(0,i.kt)("h3",{id:"active"},(0,i.kt)("inlineCode",{parentName:"h3"},"active")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Description"),": Used to mark a component as initially active and visible."),(0,i.kt)("h2",{id:"core-layout-components"},"Core Layout Components"),(0,i.kt)("p",null,"The following is a reference for the main components used for visual organization in the layout."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All of these components are available for use in the ",(0,i.kt)("a",{parentName:"p",href:"https://apps.geocortex.com/mobileviewer/designer/"},"VertiGIS Studio Mobile\nDesigner"),"."))),(0,i.kt)("h3",{id:"stacks-and-splits"},"Stacks and Splits"),(0,i.kt)("p",null,"Stacks and splits are used to partition the viewer into rectangular sectors, each filled with whichever components you desire."),(0,i.kt)("p",null,"The best way to think of stacks is that every item within them is being ordered top to bottom:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<stack>\n    <text text="item1"/>\n    <text text="item2"/>\n    <text text="item3"/>\n</stack>\n')),(0,i.kt)("img",{className:"stackSplitImage",src:(0,o.Z)("img/stack-split-1.png")}),(0,i.kt)("p",null,"The best way to think of splits is that every item within them is being ordered left to right:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<split>\n    <text text="item1"/>\n    <text text="item2"/>\n    <text text="item3"/>\n</split>\n')),(0,i.kt)("img",{className:"stackSplitImage",src:(0,o.Z)("img/stack-split-2.png")}),(0,i.kt)("p",null,"When creating complex layouts with embedded stacks and splits, it's good to picture building it from the inside out:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<stack>\n    <split>\n        <text text="item1"/>\n        <stack>\n            <text text="item2"/>\n            <text text="item3"/>\n        </stack>\n    </split>\n    <split>\n        <text text="item4"/>\n        <text text="item5"/>\n        <text text="item6"/>\n    </split>\n</stack>\n')),(0,i.kt)("p",null,"We start by building the first inner-most stack:"),(0,i.kt)("img",{className:"stackSplitImage",src:(0,o.Z)("img/stack-split-4.png")}),(0,i.kt)("p",null,"Then slot that into the split one level up:"),(0,i.kt)("img",{className:"stackSplitImage",src:(0,o.Z)("img/stack-split-5.png")}),(0,i.kt)("p",null,"We then build the next split:"),(0,i.kt)("img",{className:"stackSplitImage",src:(0,o.Z)("img/stack-split-6.png")}),(0,i.kt)("p",null,"And finally slot those two splits into the outer-most stack:"),(0,i.kt)("img",{className:"stackSplitImage",src:(0,o.Z)("img/stack-split-3.png")}),(0,i.kt)("h3",{id:"panels"},"Panels"),(0,i.kt)("p",null,"Panels are a container component that enable hierarchical navigation between different components."),(0,i.kt)(r.Z,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"Stack",value:"stack"},{label:"Feature Details",value:"feature-details"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"layout",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<panel>\n    <stack>\n        <search config="search"/>\n        <results-list config="results" active="false" />\n    </stack>\n    <feature-details config="feature-details"/>\n</panel>\n'))),(0,i.kt)(l.Z,{value:"stack",mdxType:"TabItem"},(0,i.kt)("img",{src:(0,o.Z)("img/mobile-panel-one.png")})),(0,i.kt)(l.Z,{value:"feature-details",mdxType:"TabItem"},(0,i.kt)("img",{src:(0,o.Z)("img/mobile-panel-two.png")}))),(0,i.kt)("p",null,"This ",(0,i.kt)("inlineCode",{parentName:"p"},"search-panel")," has two root components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A stack containing a ",(0,i.kt)("inlineCode",{parentName:"li"},"<search>")," and a ",(0,i.kt)("inlineCode",{parentName:"li"},"<results-list>")),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"<feature-details>"))),(0,i.kt)("p",null,"When you first open the panel, the first component in the panel that is not explicitly set to ",(0,i.kt)("inlineCode",{parentName:"p"},'active="false"')," is activated. In this example, it's the ",(0,i.kt)("inlineCode",{parentName:"p"},"<stack>")," component containing a ",(0,i.kt)("inlineCode",{parentName:"p"},"<search>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<results-list>"),".\nWhen a feature in the results list is opened, the ",(0,i.kt)("inlineCode",{parentName:"p"},"<feature-details>")," component will be activated. At this point, the panel takes over the activation of the component. It will display the new component in the place of the existing component, and provide a back button to navigate to the previous component. The activation and deactivation algorithms for a panel rely on the concept of a stacking order of components laid on top of each other, with the first component being the bottommost, and the last being the topmost. In the example above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"<stack>")," containing ",(0,i.kt)("inlineCode",{parentName:"p"},"<search>")," is the lowest, while the ",(0,i.kt)("inlineCode",{parentName:"p"},"<feature-details>")," is the topmost."),(0,i.kt)("h4",{id:"activation"},"Activation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the target component exists in the panel, then deactivate components above it until the target component is active",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Else, the target component must be deactivated, so activate it and place it above the existing component")))),(0,i.kt)("h4",{id:"deactivation"},"Deactivation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the component is the topmost element (it is active), then deactivate it.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Else, the component is already inactive")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The default ",(0,i.kt)("inlineCode",{parentName:"p"},"layout-large.xml")," in the VertiGIS Studio Mobile ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-quickstart"},"Quickstart")," has examples of multiple panels that live in the taskbar."))),(0,i.kt)("h3",{id:"taskbar"},"Taskbar"),(0,i.kt)("p",null,"The taskbar is a major organizational element in VertiGIS Studio Mobile Apps. It provides an expandable menu designed for mobile form factors that hosts panels with dynamic content."),(0,i.kt)("p",null,"Every taskbar has a ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," slot, which hosts the primary content, usually a map."),(0,i.kt)(r.Z,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"layout",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n  <gxm:taskbar id="taskbar" orientation="vertical">\n\n    \x3c!-- Taskbar main content --\x3e\n    <map slot="main"/>\n\n  </gxm:taskbar>\n</layout>\n\n'))),(0,i.kt)(l.Z,{value:"ui",mdxType:"TabItem"},(0,i.kt)("img",{src:(0,o.Z)("img/mobile-taskbar-simple.png")}))),(0,i.kt)("p",null,"Items that live in the sidebar can be defined within the taskbar component, and typically consist of Panels containing other components, like a results list, or a workflow container."),(0,i.kt)(r.Z,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"layout",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n  <gxm:taskbar id="taskbar" orientation="vertical">\n\n    \x3c!-- Taskbar main content --\x3e\n    <map config="map1" slot="main"/>\n\n    \x3c!-- Taskbar / search --\x3e\n    <panel>\n      <stack id="search">\n        <search config="search"/>\n        <results-list config="results" active="false" />\n      </stack>\n      <feature-details config="feature-details"/>\n    </panel>\n\n    \x3c!-- Taskbar / layers --\x3e\n    <panel id="layers">\n      <layer-list />\n    </panel>\n\n    \x3c!--Taskbar / workflow--\x3e\n    <panel>\n      <workflow config="workflow" icon="workflow"/>\n    </panel>\n  </gxm:taskbar>\n</layout>\n'))),(0,i.kt)(l.Z,{value:"ui",mdxType:"TabItem"},(0,i.kt)("img",{src:(0,o.Z)("img/mobile-taskbar-complex.png")}))),(0,i.kt)("h2",{id:"presentation-attributes"},"Presentation Attributes"),(0,i.kt)("p",null,"Components support a number of presentation attributes to adjust their positioning and styling in the application after slotting. Some of these presentation attributes are accessible through the ",(0,i.kt)("a",{parentName:"p",href:"https://apps.geocortex.com/mobileviewer/designer/"},"VertiGIS Studio Mobile Designer"),", and the rest must be configured through layout."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All dimensional units are expressed in 'em's, where 1 em is equal to the current font size."))),(0,i.kt)("h3",{id:"margin"},(0,i.kt)("inlineCode",{parentName:"h3"},"margin")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Description"),": Sets the size of the white space outside of the component.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Example"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<map margin="1.5"/> \x3c!-- Sets the margin on a map to be equal to 1.5em. This would be 22.5 pts high if the current font size is 15 --\x3e\n')),(0,i.kt)("h3",{id:"padding"},(0,i.kt)("inlineCode",{parentName:"h3"},"padding")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Description"),": Sets the size of the white space between a component and its content.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Applies to"),": This attribute will only apply to components with children.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Example"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<stack padding="0.5"/> \x3c!-- Sets the padding on a stack to be equal to 0.5em. This would be 7.5 pts high if the current font size is 15 --\x3e\n')),(0,i.kt)("h3",{id:"width"},(0,i.kt)("inlineCode",{parentName:"h3"},"width")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Default value"),": If a width is not set, then the width shall be the natural width of the component or a dynamic size based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"grow")," and alignment attributes.\n",(0,i.kt)("strong",{parentName:"p"},"Description"),": Sets the width of a component."),(0,i.kt)("h3",{id:"height"},(0,i.kt)("inlineCode",{parentName:"h3"},"height")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Description"),": Sets the height of a component.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Example"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- Sets the width of a map to 30em, and the height to 20em. --\x3e\n<map width="30" height="20"/>\n')),(0,i.kt)("h3",{id:"grow"},(0,i.kt)("inlineCode",{parentName:"h3"},"grow")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Description"),": Sets whether or not a component's width or height will grow over its parents primary axis. Components with a grow of 0 will fill to their natural or requested height. Components with a specified grow will fill up a percentage of the remaining space equal to their grow value divided by the total grow of all sibling components (including the component in question).",(0,i.kt)("br",{parentName:"p"}),"\n",'The default value for a component varies by component. For most components, if no grow value is specified, they will default to a grow value of "0". The following components however will have a default grow value of "1":'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Map"),(0,i.kt)("li",{parentName:"ul"},"Stack"),(0,i.kt)("li",{parentName:"ul"},"Split")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Applies to"),": All components may specify this value, but it will only take effect if the component is a child of a split or a stack. For stacks, grow indicates how the child grows along the vertical axis. For splits, grow indicates how the child grows along the horizontal axis.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Example"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<stack>\n    \x3c!-- Heading will take up whatever vertical space it requires, and will occupy its natural width. --\x3e\n    <text content="Heading"/>\n    \x3c!-- The first map will occupy 1/3 of the remaining vertical space, and will occupy the full width available. --\x3e\n    <map grow="1"/>\n    \x3c!-- The first map will occupy 2/3 of the remaining vertical space, and will occupy the full width available. --\x3e\n    <map grow="2"/>\n</stack>\n')),(0,i.kt)("h3",{id:"halign-horizontal-align"},(0,i.kt)("inlineCode",{parentName:"h3"},"halign")," (Horizontal Align)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"start" | "center" | "end"'),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Description"),": Describes how the content of a component is aligned ",(0,i.kt)("strong",{parentName:"p"},"horizontally"),". For stacks and splits, the content is the child components. For a component like text, the content is the text itself."),(0,i.kt)("h3",{id:"valign-vertical-align"},(0,i.kt)("inlineCode",{parentName:"h3"},"valign")," (Vertical Align)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"start" | "center" | "end"'),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Description"),": Describes how the content of a component is aligned ",(0,i.kt)("strong",{parentName:"p"},"vertically"),". For stacks and splits, the content is the child components. For a component like text, the content is the text itself."),(0,i.kt)("h3",{id:"alignments-effect-on-cross-axis-stretching"},"Alignments Effect on cross-axis stretching"),(0,i.kt)("p",null,"All components will stretch across the cross-axis if the corresponding alignment attribute (",(0,i.kt)("inlineCode",{parentName:"p"},"halign")," for stacks, ",(0,i.kt)("inlineCode",{parentName:"p"},"valign")," for splits) is not set on the parent of that component. But if a cross-axis alignment is set, then they will no longer stretch across the cross axis (otherwise the effect of alignment would not be observed).",(0,i.kt)("br",{parentName:"p"}),"\n","Some components will stretch across the cross-axis even if the cross-axis alignment is set on the parent: map, stack, split."))}u.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:()=>i})}}]);