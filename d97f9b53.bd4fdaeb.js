/*! For license information please see d97f9b53.bd4fdaeb.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{257:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(1),i=r(9),o=(r(0),r(279)),c=r(298),a=r(297),s={title:"Create a Service",description:"Geocortex Web - Create a Service for Geocortex Web"},l={id:"web/sdk-create-service",title:"Create a Service",description:"Geocortex Web - Create a Service for Geocortex Web",source:"@site/docs/web/sdk-create-service.mdx",permalink:"/docs/web/sdk-create-service",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-create-service.mdx",sidebar:"web",previous:{title:"Services Overview",permalink:"/docs/web/sdk-services-overview"},next:{title:"Service Reference",permalink:"/docs/web/sdk-service-reference"}},u=[{value:"Create the Service",id:"create-the-service",children:[]},{value:"Register the Service",id:"register-the-service",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],f={rightToc:u};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},f,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Creating a new ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/web/sdk-create-service"}),"custom service")," involves a few important steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#create-the-service"}),"Create the service source file")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#register-the-service"}),"Register the service in your library registration file"))),Object(o.b)("h2",{id:"create-the-service"},"Create the Service"),Object(o.b)("p",null,"Create the service source file in a new folder within the ",Object(o.b)("inlineCode",{parentName:"p"},"src/services")," folder. For example to create a new service called ",Object(o.b)("inlineCode",{parentName:"p"},"ExampleService"),", create a new file called ",Object(o.b)("inlineCode",{parentName:"p"},"ExampleService.ts")," in ",Object(o.b)("inlineCode",{parentName:"p"},"src/services/ExampleService")," with the following content:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/services/ExampleService.ts"',title:'"src/services/ExampleService.ts"'}),'import { ServiceBase } from "@geocortex/web/services";\n\nexport default class ExampleService extends ServiceBase {}\n')),Object(o.b)("p",null,"If you want your service to be able to serialize and deserialize configuration specific to the service from ",Object(o.b)("inlineCode",{parentName:"p"},"app.json"),", you can extend from ",Object(o.b)("inlineCode",{parentName:"p"},"ConfigurableServiceBase")," instead:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/services/ExampleService.ts"',title:'"src/services/ExampleService.ts"'}),'import { ServiceModelProperties } from "@geocortex/web/models";\nimport { ConfigurableServiceBase, serializable } from "@geocortex/web/services";\n\ninterface ExampleModelProperties extends ServiceModelProperties {\n    exampleProperty: string;\n}\n\n// highlight-start\n@serializable\nexport default class ExampleService extends ConfigurableServiceBase<\n    ExampleModelProperties\n> {\n    // highlight-end\n    exampleProperty: string;\n}\n')),Object(o.b)("h2",{id:"register-the-service"},"Register the Service"),Object(o.b)("p",null,"Finally we need to register the service with the Geocortex Web service registry so that it is aware of your new service."),Object(o.b)("p",null,"To simplify the module imports, we'll make a new file in the ",Object(o.b)("inlineCode",{parentName:"p"},"ExampleService")," folder called ",Object(o.b)("inlineCode",{parentName:"p"},"index.ts"),". Note that this file is for convenience, and is not required:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/services/ExampleService/index.ts"',title:'"src/services/ExampleService/index.ts"'}),'export { default } from "./ExampleService";\n')),Object(o.b)("p",null,"Now register your service with the service registry by modifying the ",Object(o.b)("inlineCode",{parentName:"p"},"src/index.ts")," file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'}),'import { LibraryRegistry } from "@geocortex/web/config";\n\n// highlight-next-line\nimport ExampleService from "./services/ExampleService";\n\nexport default function (registry: LibraryRegistry) {\n    // ... other item registrations\n\n    // highlight-start\n    registry.registerService({\n        id: "example",\n        getServiceType: () => ExampleService,\n        // Use this setting if you want your service to load on\n        // application startup. Defaults to `false`.\n        loadOnStartup: true,\n    });\n    // highlight-end\n}\n')),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)(a.a,{mdxType:"UseCaseContainer"},Object(o.b)(c.a,{title:"Deploy your Service",description:"Learn how to deploy your custom service",link:"sdk-deployment",mdxType:"UseCaseCard"}),Object(o.b)(c.a,{title:"Create a Service that Manages Dynamic Data",description:"Follow along with a more in depth service example",link:"tutorial-service-dynamic-data",mdxType:"UseCaseCard"})))}p.isMDXComponent=!0},279:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return v}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a({},t,{},e)),r},f=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(r),b=n,v=f["".concat(c,".").concat(b)]||f[b]||p[b]||o;return r?i.a.createElement(v,a({ref:t},l,{components:r})):i.a.createElement(v,a({ref:t},l))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},280:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var c=i.apply(null,n);c&&e.push(c)}else if("object"===o)for(var a in n)r.call(n,a)&&n[a]&&e.push(a)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},281:function(e,t,r){var n=r(81),i=r(54).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,i)}},282:function(e,t,r){t.f=r(2)},283:function(e,t,r){"use strict";var n=r(12),i=r(30),o=r(284),c="".startsWith;n(n.P+n.F*r(285)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),r=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return c?c.call(t,n,r):t.slice(r,r+n.length)===n}})},284:function(e,t,r){var n=r(79),i=r(29);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(e))}},285:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(i){}}return!0}},286:function(e,t,r){"use strict";r(53),r(283),r(290);var n=r(0),i=r.n(n),o=r(41),c=r(287),a=r(17),s=r.n(a),l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r};t.a=function(e){var t,r=e.isNavLink,a=l(e,["isNavLink"]),u=a.to,f=a.href,p=u||f,b=Object(c.a)(p),v=Object(n.useRef)(!1),d=r?o.c:o.b,m=s.a.canUseIntersectionObserver;return Object(n.useEffect)((function(){return!m&&b&&window.docusaurus.prefetch(p),function(){m&&t&&t.disconnect()}}),[p,m,b]),p&&b&&!p.startsWith("#")?i.a.createElement(d,Object.assign({},a,{onMouseEnter:function(){v.current||(window.docusaurus.preload(p),v.current=!0)},innerRef:function(e){var r,n;m&&e&&b&&(r=e,n=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),n())}))}))).observe(r))},to:p})):i.a.createElement("a",Object.assign({},a,{href:p}))}},287:function(e,t,r){"use strict";function n(e){return/^\/(?!\/)/.test(e)}r.d(t,"a",(function(){return n}))},288:function(e,t,r){var n=r(22);e.exports=Array.isArray||function(e){return"Array"==n(e)}},289:function(e,t,r){var n=r(51),i=r(52),o=r(28),c=r(77),a=r(27),s=r(80),l=Object.getOwnPropertyDescriptor;t.f=r(10)?l:function(e,t){if(e=o(e),t=c(t,!0),s)try{return l(e,t)}catch(r){}if(a(e,t))return i(!n.f.call(e,t),e[t])}},290:function(e,t,r){"use strict";var n=r(5),i=r(27),o=r(10),c=r(12),a=r(15),s=r(291).KEY,l=r(13),u=r(42),f=r(43),p=r(39),b=r(2),v=r(282),d=r(292),m=r(293),y=r(288),h=r(8),g=r(14),O=r(31),w=r(28),j=r(77),x=r(52),S=r(82),E=r(294),N=r(289),P=r(78),C=r(26),k=r(21),T=N.f,D=C.f,F=E.f,M=n.Symbol,W=n.JSON,R=W&&W.stringify,_=b("_hidden"),I=b("toPrimitive"),A={}.propertyIsEnumerable,G=u("symbol-registry"),L=u("symbols"),J=u("op-symbols"),U=Object.prototype,z="function"==typeof M&&!!P.f,B=n.QObject,K=!B||!B.prototype||!B.prototype.findChild,X=o&&l((function(){return 7!=S(D({},"a",{get:function(){return D(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=T(U,t);n&&delete U[t],D(e,t,r),n&&e!==U&&D(U,t,n)}:D,q=function(e){var t=L[e]=S(M.prototype);return t._k=e,t},Y=z&&"symbol"==typeof M.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof M},Q=function(e,t,r){return e===U&&Q(J,t,r),h(e),t=j(t,!0),h(r),i(L,t)?(r.enumerable?(i(e,_)&&e[_][t]&&(e[_][t]=!1),r=S(r,{enumerable:x(0,!1)})):(i(e,_)||D(e,_,x(1,{})),e[_][t]=!0),X(e,t,r)):D(e,t,r)},H=function(e,t){h(e);for(var r,n=m(t=w(t)),i=0,o=n.length;o>i;)Q(e,r=n[i++],t[r]);return e},V=function(e){var t=A.call(this,e=j(e,!0));return!(this===U&&i(L,e)&&!i(J,e))&&(!(t||!i(this,e)||!i(L,e)||i(this,_)&&this[_][e])||t)},Z=function(e,t){if(e=w(e),t=j(t,!0),e!==U||!i(L,t)||i(J,t)){var r=T(e,t);return!r||!i(L,t)||i(e,_)&&e[_][t]||(r.enumerable=!0),r}},$=function(e){for(var t,r=F(w(e)),n=[],o=0;r.length>o;)i(L,t=r[o++])||t==_||t==s||n.push(t);return n},ee=function(e){for(var t,r=e===U,n=F(r?J:w(e)),o=[],c=0;n.length>c;)!i(L,t=n[c++])||r&&!i(U,t)||o.push(L[t]);return o};z||(a((M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var e=p(arguments.length>0?arguments[0]:void 0),t=function(r){this===U&&t.call(J,r),i(this,_)&&i(this[_],e)&&(this[_][e]=!1),X(this,e,x(1,r))};return o&&K&&X(U,e,{configurable:!0,set:t}),q(e)}).prototype,"toString",(function(){return this._k})),N.f=Z,C.f=Q,r(281).f=E.f=$,r(51).f=V,P.f=ee,o&&!r(40)&&a(U,"propertyIsEnumerable",V,!0),v.f=function(e){return q(b(e))}),c(c.G+c.W+c.F*!z,{Symbol:M});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),re=0;te.length>re;)b(te[re++]);for(var ne=k(b.store),ie=0;ne.length>ie;)d(ne[ie++]);c(c.S+c.F*!z,"Symbol",{for:function(e){return i(G,e+="")?G[e]:G[e]=M(e)},keyFor:function(e){if(!Y(e))throw TypeError(e+" is not a symbol!");for(var t in G)if(G[t]===e)return t},useSetter:function(){K=!0},useSimple:function(){K=!1}}),c(c.S+c.F*!z,"Object",{create:function(e,t){return void 0===t?S(e):H(S(e),t)},defineProperty:Q,defineProperties:H,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:ee});var oe=l((function(){P.f(1)}));c(c.S+c.F*oe,"Object",{getOwnPropertySymbols:function(e){return P.f(O(e))}}),W&&c(c.S+c.F*(!z||l((function(){var e=M();return"[null]"!=R([e])||"{}"!=R({a:e})||"{}"!=R(Object(e))}))),"JSON",{stringify:function(e){for(var t,r,n=[e],i=1;arguments.length>i;)n.push(arguments[i++]);if(r=t=n[1],(g(t)||void 0!==e)&&!Y(e))return y(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!Y(t))return t}),n[1]=t,R.apply(W,n)}}),M.prototype[I]||r(11)(M.prototype,I,M.prototype.valueOf),f(M,"Symbol"),f(Math,"Math",!0),f(n.JSON,"JSON",!0)},291:function(e,t,r){var n=r(39)("meta"),i=r(14),o=r(27),c=r(26).f,a=0,s=Object.isExtensible||function(){return!0},l=!r(13)((function(){return s(Object.preventExtensions({}))})),u=function(e){c(e,n,{value:{i:"O"+ ++a,w:{}}})},f=e.exports={KEY:n,NEED:!1,fastKey:function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,n)){if(!s(e))return"F";if(!t)return"E";u(e)}return e[n].i},getWeak:function(e,t){if(!o(e,n)){if(!s(e))return!0;if(!t)return!1;u(e)}return e[n].w},onFreeze:function(e){return l&&f.NEED&&s(e)&&!o(e,n)&&u(e),e}}},292:function(e,t,r){var n=r(5),i=r(16),o=r(40),c=r(282),a=r(26).f;e.exports=function(e){var t=i.Symbol||(i.Symbol=o?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||a(t,e,{value:c.f(e)})}},293:function(e,t,r){var n=r(21),i=r(78),o=r(51);e.exports=function(e){var t=n(e),r=i.f;if(r)for(var c,a=r(e),s=o.f,l=0;a.length>l;)s.call(e,c=a[l++])&&t.push(c);return t}},294:function(e,t,r){var n=r(28),i=r(281).f,o={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return c&&"[object Window]"==o.call(e)?function(e){try{return i(e)}catch(t){return c.slice()}}(e):i(n(e))}},295:function(e,t,r){"use strict";r(296)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},296:function(e,t,r){var n=r(12),i=r(13),o=r(29),c=/"/g,a=function(e,t,r,n){var i=String(o(e)),a="<"+t;return""!==r&&(a+=" "+r+'="'+String(n).replace(c,"&quot;")+'"'),a+">"+i+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(a),n(n.P+n.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},297:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(0),i=r.n(n),o=r(280),c=r.n(o),a=r(130),s=r.n(a);function l(e){var t=e.children;return i.a.createElement("div",{className:c()(s.a.root)},t)}},298:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));r(295);var n=r(286),i=r(0),o=r.n(i),c=r(280),a=r.n(c),s=r(131),l=r.n(s);function u(e){var t=e.title,r=e.description,i=e.link;return o.a.createElement("div",{className:a()("card-demo",l.a.root)},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card__header"},o.a.createElement("h3",null,t)),o.a.createElement("div",{className:"card__body"},o.a.createElement("p",null,r)),o.a.createElement("div",{className:"card__footer"},o.a.createElement(n.a,{className:"button button--secondary button--block",to:i},"Get Started"))))}}}]);