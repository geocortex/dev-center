(window.webpackJsonp=window.webpackJsonp||[]).push([[30,139],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var i=n(2),a=n(9),o=(n(0),n(294)),r={},c={id:"web/snippets/prereqs-custom-code",title:"prereqs-custom-code",description:"-   Download and setup the Geocortex Web SDK.",source:"@site/docs/web/snippets/prereqs-custom-code.mdx",permalink:"/docs/web/snippets/prereqs-custom-code",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/prereqs-custom-code.mdx"},s=[],m={rightToc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Download and setup the ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/web/sdk-overview"}),"Geocortex Web SDK"),"."),Object(o.b)("li",{parentName:"ul"},"Check out the ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/web/sdk-deployment#uploading-custom-code-to-an-app"}),"deployment instructions")," to learn more about deploying custom code to a Geocortex Web App.")))}d.isMDXComponent=!0},188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return v}));var i=n(2),a=n(9),o=(n(0),n(294)),r=n(128),c=n(303),s=n(302),m=n(301),d=n(299),u=n(298),l={title:"Build a Custom Command and Operation",description:"Geocortex Web - Learn how to implement a custom command or operation"},p={id:"web/tutorial-implement-command-operation",title:"Build a Custom Command and Operation",description:"Geocortex Web - Learn how to implement a custom command or operation",source:"@site/docs/web/tutorial-implement-command-operation.mdx",permalink:"/docs/web/tutorial-implement-command-operation",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/tutorial-implement-command-operation.mdx",sidebar:"web",previous:{title:"Reference Third Party Libraries",permalink:"/docs/web/sdk-reference-third-party-libraries"},next:{title:"Build a Custom Component with UI",permalink:"/docs/web/tutorial-implement-component-with-ui"}},b=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create the Backing Service",id:"create-the-backing-service",children:[]},{value:"Register the Service with the Web SDK",id:"register-the-service-with-the-web-sdk",children:[]},{value:"Register the Command and Operation",id:"register-the-command-and-operation",children:[]},{value:"Implement the Custom Command and Operation",id:"implement-the-custom-command-and-operation",children:[]},{value:"Test the Custom Command and Operation",id:"test-the-custom-command-and-operation",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],h={rightToc:b};function v(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Geocortex Web has many built-in ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/web/configuration-commands-operations"}),"Commands and Operations")," which can be ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/web/configuration-commands-operations#configuring-commands-and-operations"}),"chained together")," to build custom behaviors with. If these commands and operations are not enough to accomplish your goal, you can use ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/"}),"Geocortex Workflow")," to take custom behavior even further without writing custom code. If Workflow is still not enough to accomplish your needs, then it might be time to implement a custom command or operation."))),Object(o.b)("p",null,"This article will walk you through implementing a custom command in Geocortex Web that can record actions and a custom operation that returns a list of the executed actions."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)(r.default,{mdxType:"PrereqsCustomCodeSnippet"}),Object(o.b)("h2",{id:"create-the-backing-service"},"Create the Backing Service"),Object(o.b)("p",null,"Every command or operation in Geocortex Web needs to be registered and implemented by a ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/web/sdk-services-overview"}),"service")," or ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/web/sdk-components-overview"}),"component"),", so the first thing we will do is create a service."),Object(o.b)("p",null,"Create a new folder structure with the following files. These files define a new service and export it from the ",Object(o.b)("inlineCode",{parentName:"p"},"CustomService")," folder."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"src/services/CustomService/CustomService.ts")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"src/services/CustomService/index.ts"))),Object(o.b)(s.a,{defaultValue:"service",values:[{label:"Service",value:"service"},{label:"Index",value:"index"}],mdxType:"Tabs"},Object(o.b)(m.a,{value:"service",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/services/CustomService/CustomService.ts"',title:'"src/services/CustomService/CustomService.ts"'}),'import { ServiceBase } from "@vertigis/web/services";\n\nexport default class CustomService extends ServiceBase {}\n'))),Object(o.b)(m.a,{value:"index",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/services/CustomService/index.ts"',title:'"src/services/CustomService/index.ts"'}),'export { default } from "./CustomService";\n')))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Learn more about ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/web/sdk-services-create"}),"implementing custom services")))),Object(o.b)("h2",{id:"register-the-service-with-the-web-sdk"},"Register the Service with the Web SDK"),Object(o.b)("p",null,"Every service needs to be registered with the Web SDK in order to be discovered and initialized."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add a call to ",Object(o.b)("inlineCode",{parentName:"li"},"registerService")," in ",Object(o.b)("inlineCode",{parentName:"li"},"src/index.ts"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),'export default function(registry: LibraryRegistry) {\n    ...\n    registry.registerService({\n        id: "custom-service",\n        getService: (config) => new CustomService(config),\n    })\n    ...\n}\n')),Object(o.b)("h2",{id:"register-the-command-and-operation"},"Register the Command and Operation"),Object(o.b)("p",null,"Commands and operations are registered in ",Object(o.b)("inlineCode",{parentName:"p"},"src/index.ts"),". The ",Object(o.b)("inlineCode",{parentName:"p"},"serviceId")," of the command or operation registration must match the ",Object(o.b)("inlineCode",{parentName:"p"},"id")," used in the ",Object(o.b)("inlineCode",{parentName:"p"},"registerService")," call."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'}),'import { LibraryRegistry } from "@vertigis/web/config";\nimport CustomService from "./services/CustomService/CustomService";\n\nexport default function (registry: LibraryRegistry) {\n    registry.registerService({\n        // highlight-next-line\n        id: "custom-service",\n        getService: (config) => new CustomService(config),\n    });\n\n    // highlight-start\n    registry.registerCommand({\n        name: "custom-service.do-action",\n        serviceId: "custom-service",\n    });\n    // highlight-end\n\n    // highlight-start\n    registry.registerOperation({\n        name: "custom-service.get-action-history",\n        serviceId: "custom-service",\n    });\n    // highlight-end\n}\n')),Object(o.b)("h2",{id:"implement-the-custom-command-and-operation"},"Implement the Custom Command and Operation"),Object(o.b)("p",null,"It's now time to implement the command to record an action, and the operation that returns a history of executed actions in the ",Object(o.b)("inlineCode",{parentName:"p"},"CustomService"),". We can define each command and operation with an appropriately named ",Object(o.b)("inlineCode",{parentName:"p"},"protected")," method that is decorated with ",Object(o.b)("inlineCode",{parentName:"p"},"@command")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@operation")," respectively."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/services/CustomService/CustomService.ts',title:'"src/services/CustomService/CustomService.ts'}),'import { ServiceBase } from "@vertigis/web/services";\nimport { command, operation } from "@vertigis/web/messaging";\n\nexport type ActionType = "thing1" | "thing2";\n\nexport interface DoActionArgs {\n    type: ActionType;\n    value: string;\n}\n\nexport type ActionHistory = {\n    [key in ActionType]: string[];\n};\n\nexport default class CustomService extends ServiceBase {\n    history: ActionHistory = {\n        thing1: [],\n        thing2: [],\n    };\n\n    @command("custom-service.do-action")\n    protected _doAction(args: DoActionArgs) {\n        console.log(`Executing action of type ${args.type}`);\n        this.history[args.type].push(args.value);\n    }\n\n    @operation("custom-service.get-action-history")\n    protected _getActionHistory(): ActionHistory {\n        return this.history;\n    }\n}\n')),Object(o.b)("h2",{id:"test-the-custom-command-and-operation"},"Test the Custom Command and Operation"),Object(o.b)("p",null,"You can test your custom command and operation by adding entries to the I Want to Menu in the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/web/configuration-app-config-getting-started"}),"app config")," that run your commands and operation. For more information on customizing your app with commands and operations, see ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/web/configuration-commands-operations"}),"commands and operations"),"."),Object(o.b)("p",null,"The following app config and layout adds three entries to an I Want To Menu that run the custom commands and operations implemented in this article. The operation ",Object(o.b)("inlineCode",{parentName:"p"},"custom-service.get-action-history")," has been slightly changed to return an argument that is compatible with the inputs of ",Object(o.b)("inlineCode",{parentName:"p"},"ui.alert"),"."),Object(o.b)(s.a,{defaultValue:"config",values:[{label:"App Config",value:"config"},{label:"Layout",value:"layout"},{label:"Custom Service",value:"service"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(o.b)(m.a,{value:"config",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "menu",\n            "id": "iwtm-config",\n            "items": [\n                "item://menu-item/run-thing-1",\n                "item://menu-item/run-thing-2",\n                "item://menu-item/view-action-history"\n            ],\n            "title": "Execute Custom behavior",\n            "isLandmark": true\n        },\n        {\n            "$type": "menu-item",\n            "id": "run-thing-1",\n            "title": "Run Thing 1",\n            "action": {\n                "name": "custom-service.do-action",\n                "arguments": {\n                    "type": "thing1",\n                    "value": "Never Gonna Give You Up"\n                }\n            }\n        },\n        {\n            "$type": "menu-item",\n            "id": "run-thing-2",\n            "title": "Run Thing 2",\n            "action": {\n                "name": "custom-service.do-action",\n                "arguments": {\n                    "type": "thing2",\n                    "value": "Never Gonna Let You Down"\n                }\n            }\n        },\n        {\n            "id": "view-action-history",\n            "$type": "menu-item",\n            "title": "View Action History",\n            "action": ["custom-service.get-action-history", "ui.alert"]\n        }\n    ]\n}\n'))),Object(o.b)(m.a,{value:"layout",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="your.custom.namespace">\n    <map id="map-primary">\n        <iwtm config="iwtm-config"/>\n    </map>\n</layout>\n'))),Object(o.b)(m.a,{value:"service",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/services/CustomService/CustomService.ts"',title:'"src/services/CustomService/CustomService.ts"'}),'import { ServiceBase } from "@vertigis/web/services";\nimport { AlertCommandArgs } from "@vertigis/viewer-spec/messaging/registry/ui";\nimport { command, operation } from "@vertigis/web/messaging";\n\nexport type ActionType = "thing1" | "thing2";\n\nexport interface DoActionArgs {\n    type: ActionType;\n    value: string;\n}\n\nexport type ActionHistory = {\n    [key in ActionType]: string[];\n};\n\nexport default class CustomService extends ServiceBase {\n    history: ActionHistory = {\n        thing1: [],\n        thing2: [],\n    };\n\n    @command("custom-service.do-action")\n    protected _doAction(args: DoActionArgs) {\n        console.log(`Executing action of type ${args.type}`);\n        this.history[args.type].push(args.value);\n    }\n\n    // highlight-start\n    @operation("custom-service.get-action-history")\n    protected _getActionHistory(): AlertCommandArgs {\n        return { message: JSON.stringify(this.history) };\n    }\n    // highlight-end\n}\n'))),Object(o.b)(m.a,{value:"ui",mdxType:"TabItem"},Object(o.b)("img",{src:Object(c.a)("img/web-commands-operations-example.png")}))),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)("p",null,"Commands and operations are the logical building blocks of executing custom behavior in Geocortex Web, but sometimes you need to take things a bit further. Creating custom components can allow you to design completely custom UI for Geocortex Web, and creating services can enable shared logic and background tasks."),Object(o.b)(u.a,{mdxType:"UseCaseContainer"},Object(o.b)(d.a,{title:"Commands and Operations in Services",description:"Learn more about commands and operations in services",link:Object(c.a)("docs/web/sdk-commands-operations"),mdxType:"UseCaseCard"}),Object(o.b)(d.a,{title:"Implement a Custom Component with UI",description:"Learn how to implement a custom component using the Geocortex Web SDK",link:Object(c.a)("docs/web/sdk-components-create"),mdxType:"UseCaseCard"}),Object(o.b)(d.a,{title:"Custom Services",description:"Learn more about custom services",link:Object(c.a)("docs/web/sdk-services-reference"),mdxType:"UseCaseCard"})))}v.isMDXComponent=!0},296:function(e,t,n){"use strict";n(297)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},297:function(e,t,n){var i=n(18),a=n(19),o=n(24),r=/"/g,c=function(e,t,n,i){var a=String(o(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(i).replace(r,"&quot;")+'"'),c+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),i(i.P+i.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var i=n(0),a=n.n(i),o=n(295),r=n.n(o),c=n(125),s=n.n(c);function m(e){var t=e.children;return a.a.createElement("div",{className:r()(s.a.root)},t)}},299:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n(296);var i=n(304),a=n(0),o=n.n(a),r=n(295),c=n.n(r),s=n(126),m=n.n(s);function d(e){var t=e.title,n=e.description,a=e.link;return o.a.createElement("div",{className:c()("card-demo",m.a.root)},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card__header"},o.a.createElement("h3",null,t)),o.a.createElement("div",{className:"card__body"},o.a.createElement("p",null,n)),o.a.createElement("div",{className:"card__footer"},o.a.createElement(i.a,{className:"button button--secondary button--block",to:a},"Get Started"))))}},300:function(e,t,n){"use strict";var i=n(0),a=Object(i.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=a},301:function(e,t,n){"use strict";var i=n(0),a=n.n(i);t.a=function(e){return a.a.createElement("div",null,e.children)}},302:function(e,t,n){"use strict";n(25),n(21),n(20);var i=n(0),a=n.n(i),o=n(300);var r=function(){return Object(i.useContext)(o.a)},c=n(295),s=n.n(c),m=n(127),d=n.n(m),u=37,l=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,c=e.values,m=e.groupId,p=r(),b=p.tabGroupChoices,h=p.setTabGroupChoices,v=Object(i.useState)(o),g=v[0],O=v[1];if(null!=m){var f=b[m];null!=f&&f!==g&&O(f)}var j=function(e){O(e),null!=m&&h(m,e)},y=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":g===t,className:s()("tabs__item",d.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return j(t)},onClick:function(){return j(t)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}}}]);