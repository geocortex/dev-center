/*! For license information please see 5b5d4b34.6c039c4d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),i=(n(0),n(279)),a=(n(300),n(303),n(302),{title:"Service Injection",description:"Geocortex Web - Injecting services into component models"}),c={id:"web/sdk-components-injecting-services",title:"Service Injection",description:"Geocortex Web - Injecting services into component models",source:"@site/docs/web/sdk-components-injecting-services.mdx",permalink:"/docs/web/sdk-components-injecting-services",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-components-injecting-services.mdx",sidebar:"web",previous:{title:"Component Interactions",permalink:"/docs/web/sdk-component-interactions"},next:{title:"Component Styling",permalink:"/docs/web/sdk-component-styling"}},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Geocortex Web uses dependency injection as a way to obtain a reference to Geocortex Web ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/web/sdk-services-overview"}),"services")," in your application. Services can be referenced from within a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/web/sdk-component-reference#models"}),"component model"),"."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/web/sdk-services-commands-operations#implementing-commands-and-operations"}),"custom command or operation")," can accomplish the behavior you need without a direct service reference, this is preferred to decrease the degree of coupling."))),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@inject")," decorator can be used to reference a service from within your component model. The following example demonstrates injecting the ",Object(i.b)("inlineCode",{parentName:"p"},"RegionService")," into a custom component model."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import { ComponentModelBase } from "@geocortex/web/models";\nimport { RegionService } from "@geocortex/web/region";\n// highlight-next-line\nimport { FrameworkServiceType, inject } from "@geocortex/web/services";\n\nexport default class ExampleComponentModel extends ComponentModelBase {\n    // NOTE: This property isn\'t populated until the model is `initialized`.\n    // It is not available in the constructor of this model.\n    // highlight-start\n    @inject(FrameworkServiceType.REGION)\n    regionService: RegionService | undefined;\n    // highlight-end\n\n    private _distance = "100";\n\n    get distance(): string {\n        return this.regionService &&\n            this.regionService.measurementSystem === "metric"\n            ? `${this._distance} m`\n            : `${this._distance} ft`;\n    }\n}\n')),Object(i.b)("p",null,"The property that the ",Object(i.b)("inlineCode",{parentName:"p"},"@inject")," decorator is bound to will be populated during the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/web/sdk-component-reference#initialization-and-teardown"}),"initialization process")," of the component model that the decorator was used in. The property value will be ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")," until the component model is initialized."))}u.isMDXComponent=!0},279:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(a,".").concat(m)]||p[m]||d[m]||i;return n?o.a.createElement(b,c({ref:t},l,{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},280:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},283:function(e,t,n){"use strict";var r=n(12),o=n(30),i=n(284),a="".startsWith;r(r.P+r.F*n(285)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return a?a.call(t,r,n):t.slice(n,n+r.length)===r}})},284:function(e,t,n){var r=n(79),o=n(29);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},285:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(o){}}return!0}},299:function(e,t,n){"use strict";var r=n(0),o=n(55);t.a=function(){return Object(r.useContext)(o.a)}},300:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(283);var r=n(299);function o(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},301:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=o},302:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){return o.a.createElement("div",null,e.children)}},303:function(e,t,n){"use strict";n(32),n(23),n(24);var r=n(0),o=n.n(r),i=n(301);var a=function(){return Object(r.useContext)(i.a)},c=n(280),s=n.n(c),l=n(132),u=n.n(l),p=37,d=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,c=e.values,l=e.groupId,m=a(),b=m.tabGroupChoices,f=m.setTabGroupChoices,v=Object(r.useState)(i),h=v[0],g=v[1];if(null!=l){var j=b[l];null!=j&&j!==h&&g(j)}var O=function(e){g(e),null!=l&&f(l,e)},y=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===t,className:s()("tab-item",u.a.tabItem,{"tab-item--active":h===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return O(t)},onClick:function(){return O(t)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}}}]);