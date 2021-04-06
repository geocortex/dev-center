(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(3),o=(n(0),n(243)),i=n(252),c=n(253);const s={title:"Dependency Injection",description:"Geocortex Mobile - Learn about dependency injection in Geocortex Mobile"},r={unversionedId:"mobile/sdk-dependency-injection",id:"mobile/sdk-dependency-injection",isDocsHomePage:!1,title:"Dependency Injection",description:"Geocortex Mobile - Learn about dependency injection in Geocortex Mobile",source:"@site/docs/mobile/sdk-dependency-injection.mdx",slug:"/mobile/sdk-dependency-injection",permalink:"/docs/mobile/sdk-dependency-injection",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/sdk-dependency-injection.mdx",version:"current",sidebar:"mobile",previous:{title:"Events Reference",permalink:"/docs/mobile/sdk-events-reference"},next:{title:"Component and Service Interactions",permalink:"/docs/mobile/sdk-component-service-interactions"}},l=[{value:"Components and Services",id:"components-and-services",children:[]},{value:"List of Registration Assembly Attributes",id:"list-of-registration-assembly-attributes",children:[{value:"<code>Export</code>",id:"export",children:[]},{value:"<code>Component</code>",id:"component",children:[]},{value:"<code>AppItemComponent</code>",id:"appitemcomponent",children:[]},{value:"<code>Service</code>",id:"service",children:[]},{value:"<code>AppItem</code>",id:"appitem",children:[]},{value:"<code>View</code>",id:"view",children:[]},{value:"<code>ViewModel</code>",id:"viewmodel",children:[]}]},{value:"Managing Sub-Dependencies",id:"managing-sub-dependencies",children:[]},{value:"Relevant SDK Sample",id:"relevant-sdk-sample",children:[]}],p={toc:l};function m({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you are new to the concepts of ",Object(o.b)("strong",{parentName:"p"},"inversion of control")," and ",Object(o.b)("strong",{parentName:"p"},"dependency injection"),", check out ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://martinfowler.com/articles/injection.html"}),"this article by Martin Fowler"),"."))),Object(o.b)("p",null,"Geocortex Mobile relies heavily on inversion of control patterns to inject dependencies into its components and services. Under the hood, Geocortex Mobile uses ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://autofaccn.readthedocs.io/en/latest/index.html"}),"Autofac")," to register and inject components, services and other classes. To inject a dependency into a class in Geocortex Mobile, two things must happen."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The class to be injected must register itself with the autofac container."),Object(o.b)("li",{parentName:"ol"},"The class that requires the dependency must accept a concrete class or abstract interface in its constructor as a placeholder for the injected class.")),Object(o.b)("p",null,"A good example of this pattern is the ",Object(o.b)("inlineCode",{parentName:"p"},"AlertOperations")," class in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/tutorial-implement-command-operation"}),"commands and operation")," tutorial ."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"using App1.Services.AlertOperations;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Composition.Messaging;\nusing VertiGIS.Mobile.Infrastructure.Messaging;\n\n[assembly: Export(typeof(AlertOperations), SingleInstance = true)]\nnamespace App1.Services.AlertOperations\n{\n    class AlertOperations : OperationsBase\n    {\n        public AlertOperations(IOperationRegistry operationRegistry)\n            : base(operationRegistry)\n        {\n        }\n    }\n}\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This class both registers itself as a dependency, and has dependencies injected itself."),Object(o.b)("li",{parentName:"ul"},"The assembly attribute ",Object(o.b)("inlineCode",{parentName:"li"},"Export")," is part of the Geocortex Mobile SDK, and registers the class with Autofac as a singleton."),Object(o.b)("li",{parentName:"ul"},"The constructor of the class takes an object of the type ",Object(o.b)("inlineCode",{parentName:"li"},"IOperationRegistry"),". This dependency will be resolved by Autofac at runtime ",Object(o.b)("strong",{parentName:"li"},"when")," ",Object(o.b)("inlineCode",{parentName:"li"},"AlertOperations")," is injected by another class. Chaining dependency injection in this manner is both a common and best practice pattern in Geocortex Mobile.")),Object(o.b)("p",null,"This is an example of a class that injects ",Object(o.b)("inlineCode",{parentName:"p"},"AlertOperations"),", which will in turn inject an ",Object(o.b)("inlineCode",{parentName:"p"},"IOperationRegistry")," into itself."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"[assembly: Service(typeof(CustomService), PropertiesAutowired = true)]\nnamespace App1.Services\n{\n    class CustomService : ServiceBase\n    {\n        public CustomService(AlertOperations AlertOperations)\n            :base()\n        {\n            ...\n        }\n    }\n    ...\n}\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Autofac has a number of ways to inject dependencies, including factory functions which can dynamically spin up instances of a class or lazy wrappers for dependencies. For details, check out ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://autofaccn.readthedocs.io/en/latest/resolve/relationships.html"}),"the Autofac documentation.")))),Object(o.b)("h2",{id:"components-and-services"},"Components and Services"),Object(o.b)("p",null,"Components and services in Geocortex Mobile are almost always initialized by Autofac. This means that they can inject any class that has been registered with Autofac in their constructor, allowing classes used for behavior like ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/configuration-commands-operations"}),"commands and operations")," to be easily shared and loosely coupled to many components and services. Root level components (components that are instantiated from a layout definition) must ",Object(o.b)("strong",{parentName:"p"},"always")," register with Autofac to be correctly initialized, and it is best practice to use dependency injection to initialize instances of any other custom classes, services or components that the root level component depends on."),Object(o.b)("h2",{id:"list-of-registration-assembly-attributes"},"List of Registration Assembly Attributes"),Object(o.b)("p",null,"There's a number of different Geocortex Mobile specific assembly attributes which allow classes to register themselves with Geocortex Mobile's Autofac container."),Object(o.b)("h3",{id:"export"},Object(o.b)("inlineCode",{parentName:"h3"},"Export")),Object(o.b)("p",null,"Used for registering a generic class with Autofac."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"[assembly: Export(typeof(MyCustomClass))]\n")),Object(o.b)("h3",{id:"component"},Object(o.b)("inlineCode",{parentName:"h3"},"Component")),Object(o.b)("p",null,"Used for registering a component that ",Object(o.b)("strong",{parentName:"p"},"does not")," consume configuration. For a more detailed example, see the tutorial on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/tutorial-implement-component-with-ui#create-a-component-skeleton"}),"implementing a custom component"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'[assembly: Component(typeof(MyCustomComponent), "my-custom-component")]\n')),Object(o.b)("h3",{id:"appitemcomponent"},Object(o.b)("inlineCode",{parentName:"h3"},"AppItemComponent")),Object(o.b)("p",null,"Used for registering a component that ",Object(o.b)("strong",{parentName:"p"},"does")," consume configuration. For a more detailed example, see the tutorial on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/tutorial-implement-component-participate-app-config#consume-the-configuration-in-the-component"}),"implementing a custom component with configuration"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'[assembly: AppItemComponent(typeof(MyCustomComponent), "my-custom-component", MyCustomComponentConfiguration.ConfigItemtype)]\n')),Object(o.b)("h3",{id:"service"},Object(o.b)("inlineCode",{parentName:"h3"},"Service")),Object(o.b)("p",null,"Used for registering a service. For a more detailed example, see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-services-create"}),"create a service"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"[assembly: Service(typeof(CustomService))]\n")),Object(o.b)("h3",{id:"appitem"},Object(o.b)("inlineCode",{parentName:"h3"},"AppItem")),Object(o.b)("p",null,"Used for registering the definition for an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/configuration-app-config-reference#app-items"}),"app item")," with Geocortex Mobile. For a more detailed example, see the tutorial on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/tutorial-implement-component-participate-app-config#create-a-skeleton-app-config-definition"}),"implementing a custom component with app configuration"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"[assembly: AppItem(CustomAppItem.AppItemType, typeof(CustomAppItem))]\n")),Object(o.b)("h3",{id:"view"},Object(o.b)("inlineCode",{parentName:"h3"},"View")),Object(o.b)("p",null,"Used for registering a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/enterprise-application-patterns/mvvm"}),"view")," with Geocortex Mobile. For a more detailed example see the tutorial on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/tutorial-implement-component-with-ui#use-xaml-to-define-your-ui"}),"implementing a custom component with UI"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"[assembly: View(typeof(CustomView))]\n")),Object(o.b)("h3",{id:"viewmodel"},Object(o.b)("inlineCode",{parentName:"h3"},"ViewModel")),Object(o.b)("p",null,"Used for registering a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/enterprise-application-patterns/mvvm"}),"view model")," with Geocortex Mobile. For a more detailed example see the tutorial on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/tutorial-implement-component-with-ui#example-progress-bar"}),"implementing a custom component with UI"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"[assembly: ViewModel(typeof(CustomViewModel))]\n")),Object(o.b)("h2",{id:"managing-sub-dependencies"},"Managing Sub-Dependencies"),Object(o.b)("p",null,"Sometimes, you may may want to split code associated with a component or service into multiple classes for individual views, utility functions, etc. Each of these classes may have dependencies on global classes registered with Autofac, such as operations, but only the registered component is instantiated by dependency injection, so only the component class can inject these global classes. One solution is to have the component class inject all the dependencies of its associated classes and pass them to the class constructors, but this pattern introduces unnecessary boilerplate and coupling. Instead, if the component class creates instances of associated classes through dependency injection, then Autofac will automatically resolve any dependencies the associated class has."),Object(o.b)("p",null,"In the example below, the ",Object(o.b)("inlineCode",{parentName:"p"},"RelatedClass")," has a global dependency, ",Object(o.b)("inlineCode",{parentName:"p"},"MapOperations"),". In order to resolve this dependency, the ",Object(o.b)("inlineCode",{parentName:"p"},"CustomComponent")," creates an instance of the ",Object(o.b)("inlineCode",{parentName:"p"},"RelatedClass")," through dependency injection."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Autofac allows for the injection of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://autofaccn.readthedocs.io/en/latest/resolve/relationships.html#supported-relationship-types"}),"factory functions for classes, partially resolved class constructors, and more"),"."))),Object(o.b)(i.a,{defaultValue:"related",values:[{label:"Related Class",value:"related"},{label:"Component",value:"component"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"related",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"using VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Infrastructure.Messaging;\nusing VertiGIS.Mobile.Samples.Samples.Custom.Component;\n\n// highlight-next-line\n[assembly: Export(typeof(RelatedClass))]\nnamespace VertiGIS.Mobile.Samples.Samples.Custom.Component\n{\n    internal class RelatedClass\n    {\n        private MapOperations _mapOperations;\n\n        // highlight-next-line\n        public RelatedClass(MapOperations mapOperations)\n        {\n            _mapOperations = mapOperations;\n        }\n    }\n}\n"))),Object(o.b)(c.a,{value:"component",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'using VertiGIS.Mobile.Samples;\nusing VertiGIS.Mobile.Samples.Samples.Custom.Component;\nusing VertiGIS.Mobile.Composition.Layout;\nusing System.Xml.Linq;\nusing Xamarin.Forms;\n\n[assembly: Component(typeof(CustomComponent), "component", XmlNamespace = XmlNamespaces.SamplesNamespace)]\nnamespace VertiGIS.Mobile.Samples.Samples.Custom.Component\n{\n    internal class CustomComponent : ComponentBase\n    {\n        private RelatedClass _relatedClass;\n\n        // highlight-next-line\n        public CustomComponent(RelatedClass relatedClass)\n        {\n            _relatedClass = relatedClass;\n        }\n\n        protected override VisualElement Create(XNode node)\n        {\n            return new Label()\n            {\n                Text = "Hello, World!",\n                HorizontalTextAlignment = TextAlignment.Center\n            };\n        }\n    }\n}\n')))),Object(o.b)("h2",{id:"relevant-sdk-sample"},"Relevant SDK Sample"),Object(o.b)("p",null,"Check out the Geocortex Mobile SDK Sample for ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Conceptual/DependencyInjection"}),"dependency injection"),"."))}m.isMDXComponent=!0},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,u=m["".concat(c,".").concat(d)]||m[d]||b[d]||i;return n?o.a.createElement(u,s(s({ref:t},l),{},{components:n})):o.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<i;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},246:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},250:function(e,t,n){"use strict";var a=n(0),o=n(251);t.a=function(){const e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},251:function(e,t,n){"use strict";var a=n(0);const o=Object(a.createContext)(void 0);t.a=o},252:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(250),c=n(246),s=n(56),r=n.n(s);const l=37,p=39;t.a=function(e){const{lazy:t,block:n,defaultValue:s,values:m,groupId:b,className:d}=e,{tabGroupChoices:u,setTabGroupChoices:h}=Object(i.a)(),[j,O]=Object(a.useState)(s),f=a.Children.toArray(e.children);if(null!=b){const e=u[b];null!=e&&e!==j&&m.some((t=>t.value===e))&&O(e)}const g=e=>{O(e),null!=b&&h(b,e)},v=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},d)},m.map((({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===e,className:Object(c.a)("tabs__item",r.a.tabItem,{"tabs__item--active":j===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e)},onFocus:()=>g(e),onClick:()=>{g(e)}},t)))),t?Object(a.cloneElement)(f.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}},253:function(e,t,n){"use strict";var a=n(3),o=n(0),i=n.n(o);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:n}),e)}}}]);