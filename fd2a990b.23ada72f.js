(window.webpackJsonp=window.webpackJsonp||[]).push([[155,76],{234:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),r=(n(0),n(243)),o=n(244),i=n(249),c=n(248),s=n(77);const l={title:"Internationalization",description:"Geocortex Mobile - Internationalization reference"},u={unversionedId:"mobile/sdk-internationalization",id:"mobile/sdk-internationalization",isDocsHomePage:!1,title:"Internationalization",description:"Geocortex Mobile - Internationalization reference",source:"@site/docs/mobile/sdk-internationalization.mdx",slug:"/mobile/sdk-internationalization",permalink:"/docs/mobile/sdk-internationalization",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/sdk-internationalization.mdx",version:"current",sidebar:"mobile",previous:{title:"Component and Service Interactions",permalink:"/docs/mobile/sdk-component-service-interactions"},next:{title:"Memory Management",permalink:"/docs/mobile/sdk-memory-leaks"}},p=[{value:"Specifying a Default Language",id:"specifying-a-default-language",children:[]},{value:"Adding New Cultures for Existing Language Strings",id:"adding-new-cultures-for-existing-language-strings",children:[]},{value:"Relevant SDK Sample",id:"relevant-sdk-sample",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],d={toc:p};function b({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)(s.default,{mdxType:"TranslationCallout"}),Object(r.b)("p",null,"Geocortex Mobile was designed to be fully internationalizable on all levels of the product, from app config to custom code. This internationalization is handled by Xamarin Forms."),Object(r.b)("h2",{id:"specifying-a-default-language"},"Specifying a Default Language"),Object(r.b)("p",null,"Xamarin Forms describes how to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/app-fundamentals/localization/text?pivots=windows#specify-the-default-culture"}),"specify a default language for your app"),"."),Object(r.b)("h2",{id:"adding-new-cultures-for-existing-language-strings"},"Adding New Cultures for Existing Language Strings"),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-quickstart"}),"Quickstart")," project comes with multiple ",Object(r.b)("inlineCode",{parentName:"p"},"AppResources")," files in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-quickstart/tree/master/App1/App1"}),"root of the platform agnostic project")," to provide an example of adding a culture to your application. You can also check out the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/app-fundamentals/localization/"}),"Xamarin Documentation on Localization"),"."),Object(r.b)("h2",{id:"relevant-sdk-sample"},"Relevant SDK Sample"),Object(r.b)("p",null,"Check out the relevant Geocortex Mobile SDK Sample:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Conceptual/Internationalization"}),"Internationalization"))),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)(c.a,{mdxType:"UseCaseContainer"},Object(r.b)(i.a,{title:"Internationalization in App Config",description:"Learn how to use language strings in the app config",link:Object(o.a)("docs/mobile/configuration-app-config-reference#internationalization"),mdxType:"UseCaseCard"}),Object(r.b)(i.a,{title:"Internationalize Components",description:"Learn how to use language strings for user facing text in components",link:Object(o.a)("docs/mobile/sdk-components-internationalization"),mdxType:"UseCaseCard"})))}b.isMDXComponent=!0},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},244:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(21),r=n(245);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,a)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},245:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},246:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},247:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(11),i=n(245),c=n(9);const s=Object(a.createContext)({collectLink:()=>{}});var l=n(244),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:d,activeClassName:b,isActive:m,"data-noBrokenLinkCheck":f,autoAddBaseUrl:g=!0}=e,v=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:O}=Object(l.b)(),h=Object(a.useContext)(s),j=p||d,y=Object(i.a)(j),w=null==j?void 0:j.replace("pathname://",""),x=void 0!==w?(k=w,g&&(e=>e.startsWith("/"))(k)?O(k):k):void 0;var k;const N=Object(a.useRef)(!1),C=n?o.e:o.c,E=c.a.canUseIntersectionObserver;let z;Object(a.useEffect)((()=>(!E&&y&&window.docusaurus.prefetch(x),()=>{E&&z&&z.disconnect()})),[x,E,y]);const M=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,S=!x||!y||M;return x&&y&&!M&&!f&&h.collectLink(x),S?r.a.createElement("a",Object.assign({href:x},j&&!y&&{target:"_blank",rel:"noopener noreferrer"},v)):r.a.createElement(C,Object.assign({},v,{onMouseEnter:()=>{N.current||(window.docusaurus.preload(x),N.current=!0)},innerRef:e=>{var t,n;E&&e&&y&&(t=e,n=()=>{window.docusaurus.prefetch(x)},z=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(z.unobserve(t),z.disconnect(),n())}))})),z.observe(t))},to:x||""},n&&{isActive:m,activeClassName:b}))}},248:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a),o=n(54),i=n.n(o);function c({children:e}){return r.a.createElement("div",{className:i.a.root},e)}},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(247),r=n(0),o=n.n(r),i=n(246),c=n(55),s=n.n(c);function l({title:e,description:t,link:n}){return o.a.createElement("div",{className:Object(i.a)("card-demo",s.a.root)},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card__header"},o.a.createElement("h3",null,e)),o.a.createElement("div",{className:"card__body"},o.a.createElement("p",null,t)),o.a.createElement("div",{className:"card__footer"},o.a.createElement(a.a,{className:"button button--secondary button--block",to:n},"Get Started"))))}},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),r=(n(0),n(243));const o={},i={unversionedId:"mobile/snippets/translation-callout",id:"mobile/snippets/translation-callout",isDocsHomePage:!1,title:"translation-callout",description:"Existing language strings for an application can be customized for any language in the Geocortex Mobile s Designer. To provide a complete translation in an entirely new locale for Geocortex Mobile, please contact us.",source:"@site/docs/mobile/snippets/translation-callout.mdx",slug:"/mobile/snippets/translation-callout",permalink:"/docs/mobile/snippets/translation-callout",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/translation-callout.mdx",version:"current"},c=[],s={toc:c};function l({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Existing language strings for an application can be ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/mobileviewer/latest/admin-help/Default.htm#gmv/designer/internationalize-GXM.htm"}),"customized for any language in the Geocortex Mobile s Designer"),". To provide a complete translation in an entirely new locale for Geocortex Mobile, please ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.geocortex.com/contact/"}),"contact us"),"."))))}l.isMDXComponent=!0}}]);