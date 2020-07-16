(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{281:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return f})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return v}));var n=r(2),o=r(9),i=(r(0),r(298)),c=r(304),a=r(309),u=r(310),f={title:"Geocortex Workflow .NET SDK Overview",sidebar_label:"Overview",description:"Geocortex Workflow - Overview of the .NET workflow SDK"},s={id:"workflow/sdk-net-overview",isDocsHomePage:!1,title:"Geocortex Workflow .NET SDK Overview",description:"Geocortex Workflow - Overview of the .NET workflow SDK",source:"@site/docs/workflow/sdk-net-overview.mdx",permalink:"/docs/workflow/sdk-net-overview",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/sdk-net-overview.mdx",sidebar_label:"Overview",sidebar:"workflow",previous:{title:"Implement a Star Rating Custom Form Element",permalink:"/docs/workflow/tutorial-web-implement-star-rating-form-element"},next:{title:"Registering .NET Activities with Geocortex Workflow Designer",permalink:"/docs/workflow/sdk-net-register-activities"}},l=[{value:"Get Started",id:"get-started",children:[]}],p={rightToc:l};function v(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Geocortex Workflow has a .NET runtime for executing workflows in a .NET environment. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.geocortex.com/mobileviewer/"}),"Geocortex Mobile")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/server-workflows.htm"}),"Geocortex Workflow Server")," both run workflows in a .NET environment."),Object(i.b)("p",null,"Workflows for Geocortex Mobile and Geocortex Workflow Server are still authored in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://apps.geocortex.com/workflow/designer/"}),"Geocortex Workflow Designer"),". Custom .NET workflow activities can be executed by name with the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/run-activity.htm"}),"Run Activity")," activity. In addition, the Geocortex Workflow Typescript SDK can be used to create ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workflow/sdk-net-register-activities"}),"activity stubs")," that give a user friendly interface for custom .NET workflow activities."),Object(i.b)("h2",{id:"get-started"},"Get Started"),Object(i.b)(a.a,{mdxType:"UseCaseContainer"},Object(i.b)(u.a,{title:"Create an Activity for Geocortex Mobile",description:"Create a custom activity in Geocortex Mobile",link:Object(c.a)("docs/workflow/sdk-mobile-create-activity"),mdxType:"UseCaseCard"}),Object(i.b)(u.a,{title:"Create an Activity for Geocortex Workflow Server",description:"Create a custom activity in Geocortex Workflow Server",link:Object(c.a)("docs/workflow/sdk-server-create-activity"),mdxType:"UseCaseCard"})))}v.isMDXComponent=!0},298:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f=o.a.createContext({}),s=function(e){var t=o.a.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return o.a.createElement(f.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},v=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,f=u(e,["components","mdxType","originalType","parentName"]),l=s(r),v=n,b=l["".concat(c,".").concat(v)]||l[v]||p[v]||i;return r?o.a.createElement(b,a(a({ref:t},f),{},{components:r})):o.a.createElement(b,a({ref:t},f))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=v;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var f=2;f<i;f++)c[f]=r[f];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},299:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}r.d(t,"a",(function(){return n}))},300:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},301:function(e,t,r){var n=r(81),o=r(55).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},302:function(e,t,r){t.f=r(3)},303:function(e,t,r){"use strict";var n=r(0),o=r(53);t.a=function(){return Object(n.useContext)(o.a)}},304:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r(78);var n=r(303),o=r(299);function i(e,t){var r=void 0===t?{}:t,i=r.forcePrependBaseUrl,c=void 0!==i&&i,a=r.absolute,u=void 0!==a&&a,f=Object(n.a)().siteConfig,s=(f=void 0===f?{}:f).baseUrl,l=void 0===s?"/":s,p=f.url;if(!e)return e;if(c)return l+e;if(!Object(o.a)(e))return e;var v=l+e.replace(/^\//,"");return u?p+v:v}},305:function(e,t,r){"use strict";r(54),r(306),r(314);var n=r(0),o=r.n(n),i=r(41),c=r(299),a=r(16),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};t.a=function(e){var t,r=e.isNavLink,f=u(e,["isNavLink"]),s=f.to,l=f.href,p=s||l,v=Object(c.a)(p),b=Object(n.useRef)(!1),d=r?i.c:i.b,m=a.a.canUseIntersectionObserver;return Object(n.useEffect)((function(){return!m&&v&&window.docusaurus.prefetch(p),function(){m&&t&&t.disconnect()}}),[p,m,v]),p&&v&&!p.startsWith("#")?o.a.createElement(d,Object.assign({},f,{onMouseEnter:function(){b.current||(window.docusaurus.preload(p),b.current=!0)},innerRef:function(e){var r,n;m&&e&&v&&(r=e,n=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),n())}))}))).observe(r))},to:p})):o.a.createElement("a",Object.assign({href:p},!v&&{target:"_blank",rel:"noopener noreferrer"},f))}},306:function(e,t,r){"use strict";var n=r(12),o=r(30),i=r(307),c="".startsWith;n(n.P+n.F*r(308)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),r=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return c?c.call(t,n,r):t.slice(r,r+n.length)===n}})},307:function(e,t,r){var n=r(79),o=r(29);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(e))}},308:function(e,t,r){var n=r(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(o){}}return!0}},309:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(0),o=r.n(n),i=r(129),c=r.n(i);function a(e){var t=e.children;return o.a.createElement("div",{className:c.a.root},t)}},310:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));r(311);var n=r(305),o=r(0),i=r.n(o),c=r(300),a=r(130),u=r.n(a);function f(e){var t=e.title,r=e.description,o=e.link;return i.a.createElement("div",{className:Object(c.a)("card-demo",u.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,r)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(n.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}},311:function(e,t,r){"use strict";r(319)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},312:function(e,t,r){var n=r(51),o=r(52),i=r(28),c=r(76),a=r(27),u=r(80),f=Object.getOwnPropertyDescriptor;t.f=r(10)?f:function(e,t){if(e=i(e),t=c(t,!0),u)try{return f(e,t)}catch(r){}if(a(e,t))return o(!n.f.call(e,t),e[t])}},313:function(e,t,r){var n=r(22);e.exports=Array.isArray||function(e){return"Array"==n(e)}},314:function(e,t,r){"use strict";var n=r(6),o=r(27),i=r(10),c=r(12),a=r(15),u=r(315).KEY,f=r(13),s=r(42),l=r(43),p=r(39),v=r(3),b=r(302),d=r(316),m=r(317),y=r(313),w=r(8),h=r(14),O=r(31),g=r(28),j=r(76),k=r(52),x=r(82),S=r(318),E=r(312),N=r(77),P=r(26),T=r(21),C=E.f,D=P.f,W=S.f,G=n.Symbol,_=n.JSON,F=_&&_.stringify,M=v("_hidden"),A=v("toPrimitive"),I={}.propertyIsEnumerable,K=s("symbol-registry"),R=s("symbols"),U=s("op-symbols"),J=Object.prototype,L="function"==typeof G&&!!N.f,X=n.QObject,Y=!X||!X.prototype||!X.prototype.findChild,q=i&&f((function(){return 7!=x(D({},"a",{get:function(){return D(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=C(J,t);n&&delete J[t],D(e,t,r),n&&e!==J&&D(J,t,n)}:D,z=function(e){var t=R[e]=x(G.prototype);return t._k=e,t},B=L&&"symbol"==typeof G.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof G},H=function(e,t,r){return e===J&&H(U,t,r),w(e),t=j(t,!0),w(r),o(R,t)?(r.enumerable?(o(e,M)&&e[M][t]&&(e[M][t]=!1),r=x(r,{enumerable:k(0,!1)})):(o(e,M)||D(e,M,k(1,{})),e[M][t]=!0),q(e,t,r)):D(e,t,r)},Q=function(e,t){w(e);for(var r,n=m(t=g(t)),o=0,i=n.length;i>o;)H(e,r=n[o++],t[r]);return e},V=function(e){var t=I.call(this,e=j(e,!0));return!(this===J&&o(R,e)&&!o(U,e))&&(!(t||!o(this,e)||!o(R,e)||o(this,M)&&this[M][e])||t)},Z=function(e,t){if(e=g(e),t=j(t,!0),e!==J||!o(R,t)||o(U,t)){var r=C(e,t);return!r||!o(R,t)||o(e,M)&&e[M][t]||(r.enumerable=!0),r}},$=function(e){for(var t,r=W(g(e)),n=[],i=0;r.length>i;)o(R,t=r[i++])||t==M||t==u||n.push(t);return n},ee=function(e){for(var t,r=e===J,n=W(r?U:g(e)),i=[],c=0;n.length>c;)!o(R,t=n[c++])||r&&!o(J,t)||i.push(R[t]);return i};L||(a((G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor!");var e=p(arguments.length>0?arguments[0]:void 0),t=function(r){this===J&&t.call(U,r),o(this,M)&&o(this[M],e)&&(this[M][e]=!1),q(this,e,k(1,r))};return i&&Y&&q(J,e,{configurable:!0,set:t}),z(e)}).prototype,"toString",(function(){return this._k})),E.f=Z,P.f=H,r(301).f=S.f=$,r(51).f=V,N.f=ee,i&&!r(40)&&a(J,"propertyIsEnumerable",V,!0),b.f=function(e){return z(v(e))}),c(c.G+c.W+c.F*!L,{Symbol:G});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),re=0;te.length>re;)v(te[re++]);for(var ne=T(v.store),oe=0;ne.length>oe;)d(ne[oe++]);c(c.S+c.F*!L,"Symbol",{for:function(e){return o(K,e+="")?K[e]:K[e]=G(e)},keyFor:function(e){if(!B(e))throw TypeError(e+" is not a symbol!");for(var t in K)if(K[t]===e)return t},useSetter:function(){Y=!0},useSimple:function(){Y=!1}}),c(c.S+c.F*!L,"Object",{create:function(e,t){return void 0===t?x(e):Q(x(e),t)},defineProperty:H,defineProperties:Q,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:ee});var ie=f((function(){N.f(1)}));c(c.S+c.F*ie,"Object",{getOwnPropertySymbols:function(e){return N.f(O(e))}}),_&&c(c.S+c.F*(!L||f((function(){var e=G();return"[null]"!=F([e])||"{}"!=F({a:e})||"{}"!=F(Object(e))}))),"JSON",{stringify:function(e){for(var t,r,n=[e],o=1;arguments.length>o;)n.push(arguments[o++]);if(r=t=n[1],(h(t)||void 0!==e)&&!B(e))return y(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!B(t))return t}),n[1]=t,F.apply(_,n)}}),G.prototype[A]||r(11)(G.prototype,A,G.prototype.valueOf),l(G,"Symbol"),l(Math,"Math",!0),l(n.JSON,"JSON",!0)},315:function(e,t,r){var n=r(39)("meta"),o=r(14),i=r(27),c=r(26).f,a=0,u=Object.isExtensible||function(){return!0},f=!r(13)((function(){return u(Object.preventExtensions({}))})),s=function(e){c(e,n,{value:{i:"O"+ ++a,w:{}}})},l=e.exports={KEY:n,NEED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,n)){if(!u(e))return"F";if(!t)return"E";s(e)}return e[n].i},getWeak:function(e,t){if(!i(e,n)){if(!u(e))return!0;if(!t)return!1;s(e)}return e[n].w},onFreeze:function(e){return f&&l.NEED&&u(e)&&!i(e,n)&&s(e),e}}},316:function(e,t,r){var n=r(6),o=r(17),i=r(40),c=r(302),a=r(26).f;e.exports=function(e){var t=o.Symbol||(o.Symbol=i?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||a(t,e,{value:c.f(e)})}},317:function(e,t,r){var n=r(21),o=r(77),i=r(51);e.exports=function(e){var t=n(e),r=o.f;if(r)for(var c,a=r(e),u=i.f,f=0;a.length>f;)u.call(e,c=a[f++])&&t.push(c);return t}},318:function(e,t,r){var n=r(28),o=r(301).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return c&&"[object Window]"==i.call(e)?function(e){try{return o(e)}catch(t){return c.slice()}}(e):o(n(e))}},319:function(e,t,r){var n=r(12),o=r(13),i=r(29),c=/"/g,a=function(e,t,r,n){var o=String(i(e)),a="<"+t;return""!==r&&(a+=" "+r+'="'+String(n).replace(c,"&quot;")+'"'),a+">"+o+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(a),n(n.P+n.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}}}]);