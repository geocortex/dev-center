(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{169:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return f})),r.d(e,"metadata",(function(){return s})),r.d(e,"rightToc",(function(){return l})),r.d(e,"default",(function(){return b}));var n=r(2),o=r(9),i=(r(0),r(298)),c=r(304),a=r(309),u=r(310),f={title:"SDK Overview",description:"Geocortex Workflow - Overview of the SDK"},s={id:"workflow/sdk-overview",isDocsHomePage:!1,title:"SDK Overview",description:"Geocortex Workflow - Overview of the SDK",source:"@site/docs/workflow/sdk-overview.mdx",permalink:"/docs/workflow/sdk-overview",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/sdk-overview.mdx"},l=[],p={rightToc:l};function b(t){var e=t.components,r=Object(o.a)(t,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Geocortex Workflow is a cross platform product, has a number of different SDKs and extension points available for use, depending on which platform is targeted."),Object(i.b)(a.a,{mdxType:"UseCaseContainer"},Object(i.b)(u.a,{title:"Web Applications SDK",description:"Extend Geocortex Workflow for Web Applications",link:Object(c.a)("docs/workflow/getting-started-web"),mdxType:"UseCaseCard"}),Object(i.b)(u.a,{title:"Geocortex Mobile SDK",description:"Extend Geocortex Workflow in Geocortex Mobile",link:Object(c.a)("docs/workflow/getting-started-mobile"),mdxType:"UseCaseCard"}),Object(i.b)(u.a,{title:"Geocortex Workflow Server",description:"Extend Geocortex Workflow Server",link:Object(c.a)("docs/workflow/getting-started-server"),mdxType:"UseCaseCard"})))}b.isMDXComponent=!0},298:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var f=o.a.createContext({}),s=function(t){var e=o.a.useContext(f),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},l=function(t){var e=s(t.components);return o.a.createElement(f.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},b=o.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,f=u(t,["components","mdxType","originalType","parentName"]),l=s(r),b=n,d=l["".concat(c,".").concat(b)]||l[b]||p[b]||i;return r?o.a.createElement(d,a(a({ref:e},f),{},{components:r})):o.a.createElement(d,a({ref:e},f))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,c=new Array(i);c[0]=b;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a.mdxType="string"==typeof t?t:n,c[1]=a;for(var f=2;f<i;f++)c[f]=r[f];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},299:function(t,e,r){"use strict";function n(t){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(t)}r.d(e,"a",(function(){return n}))},300:function(t,e,r){"use strict";function n(t){var e,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(r=n(t[e]))&&(o&&(o+=" "),o+=r);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}e.a=function(){for(var t,e,r=0,o="";r<arguments.length;)(t=arguments[r++])&&(e=n(t))&&(o&&(o+=" "),o+=e);return o}},301:function(t,e,r){var n=r(81),o=r(55).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},302:function(t,e,r){e.f=r(3)},303:function(t,e,r){"use strict";var n=r(0),o=r(53);e.a=function(){return Object(n.useContext)(o.a)}},304:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r(78);var n=r(303),o=r(299);function i(t,e){var r=void 0===e?{}:e,i=r.forcePrependBaseUrl,c=void 0!==i&&i,a=r.absolute,u=void 0!==a&&a,f=Object(n.a)().siteConfig,s=(f=void 0===f?{}:f).baseUrl,l=void 0===s?"/":s,p=f.url;if(!t)return t;if(c)return l+t;if(!Object(o.a)(t))return t;var b=l+t.replace(/^\//,"");return u?p+b:b}},305:function(t,e,r){"use strict";r(54),r(306),r(314);var n=r(0),o=r.n(n),i=r(41),c=r(299),a=r(16),u=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r};e.a=function(t){var e,r=t.isNavLink,f=u(t,["isNavLink"]),s=f.to,l=f.href,p=s||l,b=Object(c.a)(p),d=Object(n.useRef)(!1),v=r?i.c:i.b,y=a.a.canUseIntersectionObserver;return Object(n.useEffect)((function(){return!y&&b&&window.docusaurus.prefetch(p),function(){y&&e&&e.disconnect()}}),[p,y,b]),p&&b&&!p.startsWith("#")?o.a.createElement(v,Object.assign({},f,{onMouseEnter:function(){d.current||(window.docusaurus.preload(p),d.current=!0)},innerRef:function(t){var r,n;y&&t&&b&&(r=t,n=function(){window.docusaurus.prefetch(p)},(e=new window.IntersectionObserver((function(t){t.forEach((function(t){r===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(e.unobserve(r),e.disconnect(),n())}))}))).observe(r))},to:p})):o.a.createElement("a",Object.assign({href:p},!b&&{target:"_blank",rel:"noopener noreferrer"},f))}},306:function(t,e,r){"use strict";var n=r(12),o=r(30),i=r(307),c="".startsWith;n(n.P+n.F*r(308)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),r=o(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return c?c.call(e,n,r):e.slice(r,r+n.length)===n}})},307:function(t,e,r){var n=r(79),o=r(29);t.exports=function(t,e,r){if(n(e))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))}},308:function(t,e,r){var n=r(3)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,!"/./"[t](e)}catch(o){}}return!0}},309:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(0),o=r.n(n),i=r(129),c=r.n(i);function a(t){var e=t.children;return o.a.createElement("div",{className:c.a.root},e)}},310:function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));r(311);var n=r(305),o=r(0),i=r.n(o),c=r(300),a=r(130),u=r.n(a);function f(t){var e=t.title,r=t.description,o=t.link;return i.a.createElement("div",{className:Object(c.a)("card-demo",u.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,e)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,r)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(n.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}},311:function(t,e,r){"use strict";r(319)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},312:function(t,e,r){var n=r(51),o=r(52),i=r(28),c=r(76),a=r(27),u=r(80),f=Object.getOwnPropertyDescriptor;e.f=r(10)?f:function(t,e){if(t=i(t),e=c(e,!0),u)try{return f(t,e)}catch(r){}if(a(t,e))return o(!n.f.call(t,e),t[e])}},313:function(t,e,r){var n=r(22);t.exports=Array.isArray||function(t){return"Array"==n(t)}},314:function(t,e,r){"use strict";var n=r(6),o=r(27),i=r(10),c=r(12),a=r(15),u=r(315).KEY,f=r(13),s=r(42),l=r(43),p=r(39),b=r(3),d=r(302),v=r(316),y=r(317),m=r(313),h=r(8),O=r(14),g=r(31),w=r(28),j=r(76),S=r(52),x=r(82),E=r(318),k=r(312),P=r(77),N=r(26),D=r(21),C=k.f,T=N.f,W=E.f,F=n.Symbol,G=n.JSON,_=G&&G.stringify,K=b("_hidden"),M=b("toPrimitive"),A={}.propertyIsEnumerable,I=s("symbol-registry"),U=s("symbols"),J=s("op-symbols"),L=Object.prototype,R="function"==typeof F&&!!P.f,X=n.QObject,Y=!X||!X.prototype||!X.prototype.findChild,q=i&&f((function(){return 7!=x(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=C(L,e);n&&delete L[e],T(t,e,r),n&&t!==L&&T(L,e,n)}:T,z=function(t){var e=U[t]=x(F.prototype);return e._k=t,e},B=R&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},H=function(t,e,r){return t===L&&H(J,e,r),h(t),e=j(e,!0),h(r),o(U,e)?(r.enumerable?(o(t,K)&&t[K][e]&&(t[K][e]=!1),r=x(r,{enumerable:S(0,!1)})):(o(t,K)||T(t,K,S(1,{})),t[K][e]=!0),q(t,e,r)):T(t,e,r)},Q=function(t,e){h(t);for(var r,n=y(e=w(e)),o=0,i=n.length;i>o;)H(t,r=n[o++],e[r]);return t},V=function(t){var e=A.call(this,t=j(t,!0));return!(this===L&&o(U,t)&&!o(J,t))&&(!(e||!o(this,t)||!o(U,t)||o(this,K)&&this[K][t])||e)},Z=function(t,e){if(t=w(t),e=j(e,!0),t!==L||!o(U,e)||o(J,e)){var r=C(t,e);return!r||!o(U,e)||o(t,K)&&t[K][e]||(r.enumerable=!0),r}},$=function(t){for(var e,r=W(w(t)),n=[],i=0;r.length>i;)o(U,e=r[i++])||e==K||e==u||n.push(e);return n},tt=function(t){for(var e,r=t===L,n=W(r?J:w(t)),i=[],c=0;n.length>c;)!o(U,e=n[c++])||r&&!o(L,e)||i.push(U[e]);return i};R||(a((F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(r){this===L&&e.call(J,r),o(this,K)&&o(this[K],t)&&(this[K][t]=!1),q(this,t,S(1,r))};return i&&Y&&q(L,t,{configurable:!0,set:e}),z(t)}).prototype,"toString",(function(){return this._k})),k.f=Z,N.f=H,r(301).f=E.f=$,r(51).f=V,P.f=tt,i&&!r(40)&&a(L,"propertyIsEnumerable",V,!0),d.f=function(t){return z(b(t))}),c(c.G+c.W+c.F*!R,{Symbol:F});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;et.length>rt;)b(et[rt++]);for(var nt=D(b.store),ot=0;nt.length>ot;)v(nt[ot++]);c(c.S+c.F*!R,"Symbol",{for:function(t){return o(I,t+="")?I[t]:I[t]=F(t)},keyFor:function(t){if(!B(t))throw TypeError(t+" is not a symbol!");for(var e in I)if(I[e]===t)return e},useSetter:function(){Y=!0},useSimple:function(){Y=!1}}),c(c.S+c.F*!R,"Object",{create:function(t,e){return void 0===e?x(t):Q(x(t),e)},defineProperty:H,defineProperties:Q,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:tt});var it=f((function(){P.f(1)}));c(c.S+c.F*it,"Object",{getOwnPropertySymbols:function(t){return P.f(g(t))}}),G&&c(c.S+c.F*(!R||f((function(){var t=F();return"[null]"!=_([t])||"{}"!=_({a:t})||"{}"!=_(Object(t))}))),"JSON",{stringify:function(t){for(var e,r,n=[t],o=1;arguments.length>o;)n.push(arguments[o++]);if(r=e=n[1],(O(e)||void 0!==t)&&!B(t))return m(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!B(e))return e}),n[1]=e,_.apply(G,n)}}),F.prototype[M]||r(11)(F.prototype,M,F.prototype.valueOf),l(F,"Symbol"),l(Math,"Math",!0),l(n.JSON,"JSON",!0)},315:function(t,e,r){var n=r(39)("meta"),o=r(14),i=r(27),c=r(26).f,a=0,u=Object.isExtensible||function(){return!0},f=!r(13)((function(){return u(Object.preventExtensions({}))})),s=function(t){c(t,n,{value:{i:"O"+ ++a,w:{}}})},l=t.exports={KEY:n,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,n)){if(!u(t))return"F";if(!e)return"E";s(t)}return t[n].i},getWeak:function(t,e){if(!i(t,n)){if(!u(t))return!0;if(!e)return!1;s(t)}return t[n].w},onFreeze:function(t){return f&&l.NEED&&u(t)&&!i(t,n)&&s(t),t}}},316:function(t,e,r){var n=r(6),o=r(17),i=r(40),c=r(302),a=r(26).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:c.f(t)})}},317:function(t,e,r){var n=r(21),o=r(77),i=r(51);t.exports=function(t){var e=n(t),r=o.f;if(r)for(var c,a=r(t),u=i.f,f=0;a.length>f;)u.call(t,c=a[f++])&&e.push(c);return e}},318:function(t,e,r){var n=r(28),o=r(301).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(e){return c.slice()}}(t):o(n(t))}},319:function(t,e,r){var n=r(12),o=r(13),i=r(29),c=/"/g,a=function(t,e,r,n){var o=String(i(t)),a="<"+e;return""!==r&&(a+=" "+r+'="'+String(n).replace(c,"&quot;")+'"'),a+">"+o+"</"+e+">"};t.exports=function(t,e){var r={};r[t]=e(a),n(n.P+n.F*o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",r)}}}]);