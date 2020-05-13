(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{221:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n(1),r=n(9),a=(n(0),n(279)),c={title:"UIContext",description:"Geocortex Web - Accessing the UIContext in Components"},i={id:"web/sdk-ui-context",title:"UIContext",description:"Geocortex Web - Accessing the UIContext in Components",source:"@site/docs/web/sdk-ui-context.mdx",permalink:"/docs/web/sdk-ui-context",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-ui-context.mdx",sidebar:"web",previous:{title:"Component Hooks",permalink:"/docs/web/sdk-component-hooks"},next:{title:"Commands and Operations in Components",permalink:"/docs/web/sdk-components-commands-operations"}},s=[{value:"Accessing the UIContext",id:"accessing-the-uicontext",children:[]},{value:"hostElement",id:"hostelement",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-create-component"}),"Custom components")," often need to access the application context to run ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/configuration-commands-operations"}),"commands and operations"),", subscribe and publish to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-events-overview"}),"events"),", and more. A component has two ways of accessing the application context."),Object(a.b)("p",null,"First, every component has a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-component-reference#models"}),"model")," which in turn has a ",Object(a.b)("inlineCode",{parentName:"p"},"messages")," property that can be used to access commands, operations, and events. All application level interactions should be facilitated by the model."),Object(a.b)("p",null,"Optionally, a component can use the ",Object(a.b)("inlineCode",{parentName:"p"},"UIContext")," to access commands, operations and events, as well as use the ",Object(a.b)("inlineCode",{parentName:"p"},"translate")," function to take advantage of our internationalization features."),Object(a.b)("h2",{id:"accessing-the-uicontext"},"Accessing the UIContext"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"UIContext")," is injected into a component with the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactjs.org/docs/hooks-reference.html#usecontext"}),"React ",Object(a.b)("inlineCode",{parentName:"a"},"useContext")," hook"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import { UIContext } from "@geocortex/web/ui";\nimport { useContext } from "react";\n\nexport default function CustomComponent(props) {\n    const { command, event, operation, translate, hostElement } = useContext(\n        UIContext\n    );\n    // ...\n}\n')),Object(a.b)("p",null,"Once you have reference to the ",Object(a.b)("inlineCode",{parentName:"p"},"UIContext"),", you can access its properties and interact with the application context in your custom component."),Object(a.b)("h2",{id:"hostelement"},"hostElement"),Object(a.b)("p",null,"The UIContext provides access to the DOM through the ",Object(a.b)("inlineCode",{parentName:"p"},"hostElement")," property. However, this is meant to be a last resort, intended for enabling complex third party libraries. The DOM should only be interacted with through the abstraction of React components whenever possible."))}l.isMDXComponent=!0},279:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=o,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||a;return n?r.a.createElement(d,i({ref:t},p,{components:n})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);