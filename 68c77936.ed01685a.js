(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{224:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return m}));var a=n(1),o=n(9),i=(n(0),n(296)),c=(n(303),n(302),n(301),n(299),n(298),{title:"Component and Service Interactions",description:"Geocortex Mobile - Learn how to make custom components and services interact with the larger application"}),r={id:"mobile/sdk-component-service-interactions",title:"Component and Service Interactions",description:"Geocortex Mobile - Learn how to make custom components and services interact with the larger application",source:"@site/docs/mobile/sdk-component-service-interactions.mdx",permalink:"/docs/mobile/sdk-component-service-interactions",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/sdk-component-service-interactions.mdx",sidebar:"mobile",previous:{title:"Dependency Injection",permalink:"/docs/mobile/sdk-dependency-injection"},next:{title:"Internationalization",permalink:"/docs/mobile/sdk-internationalization"}},s=[{value:"Interacting with the <code>MapView</code>",id:"interacting-with-the-mapview",children:[]},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]}],l={rightToc:s};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Components and services have multiple ways of interacting with other components and services."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"When possible, interaction through ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/mobile/sdk-commands-operations#running-commands-and-operations"}),"commands and operations")," should be preferred, as this introduces the loosest coupling."),Object(i.b)("li",{parentName:"ul"},"When you need stronger coupling and direct access to a service, then ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/mobile/sdk-dependency-injection"}),"dependency injection")," can be used to reference services.")),Object(i.b)("p",null,"If a component or service needs access to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.arcgis.com/net/latest/uwp/api-reference/html/T_Esri_ArcGISRuntime_Xamarin_Forms_MapView.htm"}),"ArcGIS MapView object")," powering the applications map, it can reference it through an ",Object(i.b)("inlineCode",{parentName:"p"},"ILayoutModel"),"."),Object(i.b)("h2",{id:"interacting-with-the-mapview"},"Interacting with the ",Object(i.b)("inlineCode",{parentName:"h2"},"MapView")),Object(i.b)("p",null,"Components or services can interact with the ",Object(i.b)("inlineCode",{parentName:"p"},"MapView")," by injecting an ",Object(i.b)("inlineCode",{parentName:"p"},"ILayoutModel")," that takes a ",Object(i.b)("inlineCode",{parentName:"p"},"MapView"),". The actual ",Object(i.b)("inlineCode",{parentName:"p"},"MapView")," needs to be resolved once the map component has loaded, so it's best practice to resolve the ",Object(i.b)("inlineCode",{parentName:"p"},"ILayoutModel")," in the initialization method of the component or service."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"A layout model is resolved according to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/configuration-advanced-model-binding"}),"layout hierarchy"),"."))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"class CustomComponent : ComponentBase\n{\n    private readonly ILayoutModel<MapView> _mapViewResolver;\n\n    private MapView _mapView;\n\n    // highlight-next-line\n    public CustomComponent(ILayoutModel<MapView> mapViewResolver)\n    {\n        _mapViewResolver = mapViewResolver;\n    }\n\n    protected async override Task DoInitializeAsync()\n    {\n        // highlight-next-line\n        _mapView = await _mapViewResolver.ResolveAsync();\n\n        var wkid = _mapView.SpatialReference.Wkid;\n\n        ...\n    }\n    ...\n}\n")),Object(i.b)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),Object(i.b)("p",null,"Check out the relevant Geocortex Mobile SDK Samples:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/CustomSamples/BasemapToggle"}),"Basemap Toggle that uses Custom Services and Components"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/CustomSamples/BreadCrumbs"}),"Breadcrumb Tracker that uses Custom Services and Components")))))}m.isMDXComponent=!0},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),o=n.n(a),i=n(297),c=n.n(i),r=n(130),s=n.n(r);function l(e){var t=e.children;return o.a.createElement("div",{className:c()(s.a.root)},t)}},299:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));n(305);var a=n(304),o=n(0),i=n.n(o),c=n(297),r=n.n(c),s=n(131),l=n.n(s);function m(e){var t=e.title,n=e.description,o=e.link;return i.a.createElement("div",{className:r()("card-demo",l.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,n)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(a.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}},300:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=o},301:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}},302:function(e,t,n){"use strict";n(26),n(21),n(22);var a=n(0),o=n.n(a),i=n(300);var c=function(){return Object(a.useContext)(i.a)},r=n(297),s=n.n(r),l=n(132),m=n.n(l),p=37,d=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,r=e.values,l=e.groupId,b=c(),u=b.tabGroupChoices,h=b.setTabGroupChoices,v=Object(a.useState)(i),j=v[0],f=v[1];if(null!=l){var O=u[l];null!=O&&O!==j&&f(O)}var w=function(e){f(e),null!=l&&h(l,e)},g=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},r.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":j===t,className:s()("tab-item",m.a.tabItem,{"tab-item--active":j===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(g,e.target,e)},onFocus:function(){return w(t)},onClick:function(){return w(t)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===j}))[0]))}}}]);