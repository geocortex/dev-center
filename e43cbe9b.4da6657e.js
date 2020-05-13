(window.webpackJsonp=window.webpackJsonp||[]).push([[115,61],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(9),r=(n(0),n(279)),o={},c={id:"mobile/snippets/quickstart-prereqs",title:"quickstart-prereqs",description:"Checkout and setup the [Geocortex Mobile SDK Quickstart project](../sdk-getting-started.mdx).",source:"@site/docs/mobile/snippets/quickstart-prereqs.mdx",permalink:"/docs/mobile/snippets/quickstart-prereqs",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/quickstart-prereqs.mdx"},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Checkout and setup the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-getting-started"}),"Geocortex Mobile SDK Quickstart project"),"."))}p.isMDXComponent=!0},262:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(1),i=n(9),r=(n(0),n(279)),o=n(133),c={title:"Internationalization",description:"Geocortex Mobile - Internationalization"},s={id:"mobile/usecases-internationalization",title:"Internationalization",description:"Geocortex Mobile - Internationalization",source:"@site/docs/mobile/usecases-internationalization.mdx",permalink:"/docs/mobile/usecases-internationalization",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/usecases-internationalization.mdx",sidebar:"mobile",previous:{title:"Add a Medium Layout",permalink:"/docs/mobile/usecases-add-medium-layout"},next:{title:"Display a Custom Form",permalink:"/docs/mobile/usecases-display-custom-form"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Specifying a Default Language",id:"specifying-a-default-language",children:[]},{value:"Adding New Cultures for Existing Language Strings",id:"adding-new-cultures-for-existing-language-strings",children:[]},{value:"Providing Language Strings for a Component",id:"providing-language-strings-for-a-component",children:[]},{value:"Language Strings and App Config",id:"language-strings-and-app-config",children:[]},{value:"Relevant SDK Sample",id:"relevant-sdk-sample",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Geocortex Mobile, being a Xamarin Forms Application, comes with built-in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/app-fundamentals/localization/text?pivots=windows"}),"support for full internationalization")," of existing and new language strings."),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)(o.default,{mdxType:"QuickstartPrereqsSnippet"}),Object(r.b)("h2",{id:"specifying-a-default-language"},"Specifying a Default Language"),Object(r.b)("p",null,"Xamarin forms describes how to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/app-fundamentals/localization/text?pivots=windows#specify-the-default-culture"}),"specify a default language for your app"),"."),Object(r.b)("h2",{id:"adding-new-cultures-for-existing-language-strings"},"Adding New Cultures for Existing Language Strings"),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-getting-started"}),"Quickstart")," project comes with multiple ",Object(r.b)("inlineCode",{parentName:"p"},"AppResources")," files in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-quickstart/tree/master/App1/App1"}),"root of the platform agnostic project")," to provide an example of adding a culture to your application."),Object(r.b)("h2",{id:"providing-language-strings-for-a-component"},"Providing Language Strings for a Component"),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-samples"}),"SDK Samples")," project includes a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Conceptual/Internationalization"}),"internationalization example")," which demonstrates how to configure resource files on a component level."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"By convention, all language string keys take the format ",Object(r.b)("inlineCode",{parentName:"p"},"language-kebab-cased-description"),"."))),Object(r.b)("h2",{id:"language-strings-and-app-config"},"Language Strings and App Config"),Object(r.b)("p",null,"All language strings used for properties in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/concepts-app-config"}),"app config"),', like "title" or "description", are automatically translated by the application.'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "menu-item",\n            "id": "zoom-to-extent",\n            "iconId": "zoom-extent",\n            // highlight-next-line\n            "title": "language-zoom-extent-title",\n            // highlight-next-line\n            "description": "language-zoom-extent-description",\n            "action": "map.zoom-to-layer-extent"\n        },\n        ...\n    ]\n}\n')),Object(r.b)("h2",{id:"relevant-sdk-sample"},"Relevant SDK Sample"),Object(r.b)("p",null,"Check out the relevant Geocortex Mobile SDK Sample:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Conceptual/Internationalization"}),"Internationalization"))))}u.isMDXComponent=!0},279:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||r;return n?i.a.createElement(d,c({ref:t},l,{components:n})):i.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);