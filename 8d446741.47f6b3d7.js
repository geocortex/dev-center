(window.webpackJsonp=window.webpackJsonp||[]).push([[89,79],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var i=n(2),a=n(9),r=(n(0),n(294)),o={},c={id:"mobile/snippets/quickstart-prereqs",title:"quickstart-prereqs",description:"Check out and setup the Geocortex Mobile SDK Quickstart project.",source:"@site/docs/mobile/snippets/quickstart-prereqs.mdx",permalink:"/docs/mobile/snippets/quickstart-prereqs",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/quickstart-prereqs.mdx"},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Check out and setup the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/mobile/sdk-overview"}),"Geocortex Mobile SDK Quickstart project"),"."))}p.isMDXComponent=!0},238:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var i=n(2),a=n(9),r=(n(0),n(294)),o=n(303),c=n(129),s=n(298),l=n(299),p={title:"Build a Custom Command",description:"Geocortex Mobile - Learn how to implement a custom command"},m={id:"mobile/tutorial-implement-command-operation",title:"Build a Custom Command",description:"Geocortex Mobile - Learn how to implement a custom command",source:"@site/docs/mobile/tutorial-implement-command-operation.mdx",permalink:"/docs/mobile/tutorial-implement-command-operation",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/tutorial-implement-command-operation.mdx",sidebar:"mobile",previous:{title:"Memory Management",permalink:"/docs/mobile/sdk-memory-leaks"},next:{title:"Build a Custom Component with UI",permalink:"/docs/mobile/tutorial-implement-component-with-ui"}},b=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create the Backing Service",id:"create-the-backing-service",children:[]},{value:"Implementing the Operation",id:"implementing-the-operation",children:[{value:"Define the Operation",id:"define-the-operation",children:[]},{value:"Register an Implementation for the Operation",id:"register-an-implementation-for-the-operation",children:[]}]},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],u={rightToc:b};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Geocortex Mobile has many built-in ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/mobile/configuration-commands-operations"}),"Commands and Operations")," which can be chained together to build custom behaviors. If these Commands and Operations are not enough to accomplish your goal, you can use ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/"}),"Geocortex Workflow")," to take custom behavior even further without writing custom code. If Workflow is still not enough to accomplish your needs, then it might be time to implement a Custom Command / Operation."))),Object(r.b)("p",null,"This article will walk you through implementing a custom command in Geocortex Mobile that displays an alert."),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)(c.default,{mdxType:"PrereqsSnippet"}),Object(r.b)("h2",{id:"create-the-backing-service"},"Create the Backing Service"),Object(r.b)("p",null,"It's convention that commands and operations in Geocortex Mobile are registered and implemented by a service or component, so the first thing we will do is create a service."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create a new file ",Object(r.b)("inlineCode",{parentName:"li"},"Services/AlertService.cs")," under the platform agnostic project.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"In the file, add a new service class ",Object(r.b)("inlineCode",{parentName:"li"},"AlertService")," and ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/mobile/sdk-dependency-injection"}),"register it with ",Object(r.b)("strong",{parentName:"a"},"Autofac")),".")))),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/services/AlertService.cs"',title:'"App1/App1/services/AlertService.cs"'}),"using App1.Services.AlertService;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Composition.Services;\n\n// highlight-next-line\n[assembly: Service(typeof(AlertService), PropertiesAutowired = true)]\nnamespace App1.Services.AlertService\n{\n    // highlight-next-line\n    class AlertService : ServiceBase\n    {\n    }\n}\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Create a class ",Object(r.b)("inlineCode",{parentName:"li"},"Services/AlertOperations")," under the platform agnostic project.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"In the file, add a new class ",Object(r.b)("inlineCode",{parentName:"li"},"AlertOperations")," and register it with Autofac.")))),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/services/AlertOperations.cs"',title:'"App1/App1/services/AlertOperations.cs"'}),"using App1.Services.AlertOperations;\nusing VertiGIS.Mobile.Composition;\nusing VertiGIS.Mobile.Composition.Messaging;\nusing VertiGIS.Mobile.Infrastructure.Messaging;\n\n// highlight-next-line\n[assembly: Export(typeof(AlertOperations), SingleInstance = true)]\nnamespace App1.Services.AlertOperations\n{\n    // highlight-next-line\n    class AlertOperations : OperationsBase\n    {\n        public AlertOperations(IOperationRegistry operationRegistry)\n            : base(operationRegistry)\n        {\n        }\n    }\n}\n")),Object(r.b)("h2",{id:"implementing-the-operation"},"Implementing the Operation"),Object(r.b)("p",null,"Creating a new operation in Geocortex Mobile consists of two pieces:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Defining the operation's name, inputs, and outputs in the ",Object(r.b)("inlineCode",{parentName:"li"},"OperationsBase")," class"),Object(r.b)("li",{parentName:"ul"},"Registering an execution implementation in the service.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"This function will be the actual code that executes when the operation is called.")))),Object(r.b)("h3",{id:"define-the-operation"},"Define the Operation"),Object(r.b)("p",null,"For this example, let's define a operation with some input and no output."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cs"}),'class AlertOperations : OperationsBase\n{\n    // highlight-next-line\n    public IVoidOperation<string> DisplayCustomAlert => GetVoidOperation<string>("custom-alert.display");\n\n    public AlertOperations(IOperationRegistry operationRegistry)\n        : base(operationRegistry)\n    {\n    }\n}\n')),Object(r.b)("h3",{id:"register-an-implementation-for-the-operation"},"Register an Implementation for the Operation"),Object(r.b)("p",null,"Next, we need to register an implementation for our operation in the ",Object(r.b)("inlineCode",{parentName:"p"},"AlertService"),"."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Add a public constructor that takes an ",Object(r.b)("inlineCode",{parentName:"li"},"AlertOperations")," to the Service.")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cs"}),"    [assembly: Service(typeof(Service), PropertiesAutowired = true)]\n    class AlertService : ServiceBase\n    {\n        // highlight-next-line\n        public AlertService(AlertOperations alertOperations)\n        {\n        }\n    }\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Create an implementation for displaying a custom alert and register it as an execution for the operation.")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cs"}),'[assembly: Service(typeof(AlertService))]\nnamespace App1.Services\n{\n    class AlertService : ServiceBase\n    {\n        public AlertService(AlertOperations alertOperations)\n        {\n            // highlight-start\n            alertOperations.DisplayCustomAlert.RegisterExecute(\n                (args) =>\n                {\n                    Application.Current.MainPage.DisplayAlert("Custom Alert", args, "OK");\n                    return Task.FromResult((object)null);\n                }, this);\n            // highlight-end\n        }\n    }\n}\n')),Object(r.b)("p",null,"Congratulations! You just created your first custom operation. You can easily test your new operation by setting it to ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/mobile/tutorial-change-default-behavior"}),"run it on map initialization"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "map-extension",\n            "id": "map1",\n            "onClick": [ "tasks.identify", "highlights.pulse", "results.display" ],\n            "onInitialized": [\n                {\n                    "name": "custom-alert.display",\n                    "arguments": "This is a custom operation!"\n                }\n            ]\n        },\n        ...\n    ]\n}\n')),Object(r.b)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),Object(r.b)("p",null,"Check out the relevant Geocortex Mobile SDK Samples:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/Operation"}),"Custom Operation"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/Service"}),"Custom Service")))),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)("p",null,"Commands and operations are the logical building blocks of executing custom behavior in Geocortex Mobile, but sometimes you need to take things a bit further. Creating custom components can allow you to design completely custom UI for Geocortex Mobile, and creating background services can enable the execution of tasks on an arbitrary schedule."),Object(r.b)(s.a,{mdxType:"UseCaseContainer"},Object(r.b)(l.a,{title:"Commands and Operations",description:"Learn more about commands and operations",link:Object(o.a)("docs/mobile/sdk-commands-operations"),mdxType:"UseCaseCard"}),Object(r.b)(l.a,{title:"Implement a Custom Component with UI",description:"Learn how to implement a custom component using the Geocortex Mobile SDK",link:Object(o.a)("docs/mobile/tutorial-implement-component-with-ui"),mdxType:"UseCaseCard"}),Object(r.b)(l.a,{title:"Implement a Custom Service",description:"Learn how to implement a custom service using the Geocortex Mobile SDK",link:Object(o.a)("docs/mobile/sdk-services-create"),mdxType:"UseCaseCard"})))}d.isMDXComponent=!0},296:function(e,t,n){"use strict";n(297)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},297:function(e,t,n){var i=n(18),a=n(19),r=n(24),o=/"/g,c=function(e,t,n,i){var a=String(r(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(i).replace(o,"&quot;")+'"'),c+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),i(i.P+i.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n(0),a=n.n(i),r=n(295),o=n.n(r),c=n(125),s=n.n(c);function l(e){var t=e.children;return a.a.createElement("div",{className:o()(s.a.root)},t)}},299:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n(296);var i=n(304),a=n(0),r=n.n(a),o=n(295),c=n.n(o),s=n(126),l=n.n(s);function p(e){var t=e.title,n=e.description,a=e.link;return r.a.createElement("div",{className:c()("card-demo",l.a.root)},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"card__body"},r.a.createElement("p",null,n)),r.a.createElement("div",{className:"card__footer"},r.a.createElement(i.a,{className:"button button--secondary button--block",to:a},"Get Started"))))}}}]);