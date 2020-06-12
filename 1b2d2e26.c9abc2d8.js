(window.webpackJsonp=window.webpackJsonp||[]).push([[17,139],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),o=n(9),c=(n(0),n(294)),m={},i={id:"web/snippets/prereqs-custom-code",title:"prereqs-custom-code",description:"-   Download and setup the Geocortex Web SDK.",source:"@site/docs/web/snippets/prereqs-custom-code.mdx",permalink:"/docs/web/snippets/prereqs-custom-code",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/prereqs-custom-code.mdx"},s=[],r={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},r,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Download and setup the ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/web/sdk-overview"}),"Geocortex Web SDK"),"."),Object(c.b)("li",{parentName:"ul"},"Check out the ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/web/sdk-deployment#uploading-custom-code-to-an-app"}),"deployment instructions")," to learn more about deploying custom code to a Geocortex Web App.")))}l.isMDXComponent=!0},172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(9),c=(n(0),n(294)),m=n(303),i=n(302),s=n(301),r=(n(299),n(298),n(128)),l={title:"Using the canExecute Command Hook",description:"Geocortex Web - Learn how to optionally disable a command with the canExecute hook"},u={id:"web/tutorial-command-can-execute",title:"Using the canExecute Command Hook",description:"Geocortex Web - Learn how to optionally disable a command with the canExecute hook",source:"@site/docs/web/tutorial-command-can-execute.mdx",permalink:"/docs/web/tutorial-command-can-execute",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/tutorial-command-can-execute.mdx",sidebar:"web",previous:{title:"Translate a Component's Text",permalink:"/docs/web/tutorial-internationalization"},next:{title:"Manage Dynamic Data with a Service",permalink:"/docs/web/tutorial-service-dynamic-data"}},d=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create an App with an IWTM and a Custom Component",id:"create-an-app-with-an-iwtm-and-a-custom-component",children:[]},{value:"Add a Button to Toggle the <code>canExecute</code> Status",id:"add-a-button-to-toggle-the-canexecute-status",children:[]},{value:"Implement the <code>canExecute</code> Function",id:"implement-the-canexecute-function",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],p={rightToc:d};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This article will guide you through how to prevent a custom command from executing through the ",Object(c.b)("inlineCode",{parentName:"p"},"canExecute")," hook."),Object(c.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(c.b)(r.default,{mdxType:"PrereqsCustomCodeSnippet"}),Object(c.b)("h2",{id:"create-an-app-with-an-iwtm-and-a-custom-component"},"Create an App with an IWTM and a Custom Component"),Object(c.b)("p",null,"First, let's create an app with an IWTM and a custom component that implements a simple command that displays an alert."),Object(c.b)(i.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"Component",value:"component"},{label:"Component Model",value:"model"},{label:"Component Index",value:"index"},{label:"Registration",value:"registration"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"layout",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="custom.abc123">\n    <map>\n        <iwtm config="iwtm-config" slot="top-left" />\n        <custom:custom-component margin="3" slot="top-center"/>\n    </map>\n</layout>\n'))),Object(c.b)(s.a,{value:"config",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "menu",\n            "id": "iwtm-config",\n            "items": [\n                {\n                    "$type": "menu-item",\n                    "id": "command-with-can-execute",\n                    "title": "Command With Can Execute",\n                    "iconId": "info",\n                    "action": "custom.command-with-can-execute"\n                }\n            ],\n            "title": "I want to..."\n        }\n    ]\n}\n'))),Object(c.b)(s.a,{value:"component",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/components/CustomComponent.tsx"',title:'"src/components/CustomComponent.tsx"'}),'import {\n    LayoutElement,\n    LayoutElementProperties,\n} from "@vertigis/web/components";\nimport Button from "@vertigis/web/ui/Button";\nimport React from "react";\n\nimport CustomModel from "./CustomModel";\n\nconst CustomComponent = (props: LayoutElementProperties<CustomModel>) => {\n    return (\n        <LayoutElement {...props}>\n            <Button>Placeholder</Button>\n        </LayoutElement>\n    );\n};\n\nexport default CustomComponent;\n'))),Object(c.b)(s.a,{value:"model",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/CustomModel.ts"',title:'"src/components/CustomModel.ts"'}),'import { ComponentModelBase, serializable } from "@vertigis/web/models";\nimport { command } from "@vertigis/web/messaging";\n\n@serializable\nexport default class CustomModel extends ComponentModelBase {\n    @command("custom.command-with-can-execute")\n    protected _commandWithCanExecute(): void {\n        this.messages.commands.ui.alert.execute({\n            message: "Executed `custom.command-with-can-execute`",\n        });\n        return;\n    }\n}\n'))),Object(c.b)(s.a,{value:"index",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/index.ts"',title:'"src/components/index.ts"'}),'export { default } from "./CustomComponent";\nexport { default as CustomModel } from "./CustomModel";\n'))),Object(c.b)(s.a,{value:"registration",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'}),'import { LibraryRegistry } from "@vertigis/web/config";\n\nimport CustomComponent, { CustomModel } from "./components/CustomComponent";\n\nconst LAYOUT_NAMESPACE = "custom.abc123";\n\nexport default function (registry: LibraryRegistry) {\n    registry.registerComponent({\n        name: "custom-component",\n        namespace: LAYOUT_NAMESPACE,\n        getComponentType: () => CustomComponent,\n        itemType: "custom-model",\n        title: "Custom Component",\n    });\n    registry.registerModel({\n        getModel: (config) => new CustomModel(config),\n        itemType: "custom-model",\n    });\n\n    registry.registerCommand({\n        name: "custom.command-with-can-execute",\n        itemType: "custom-model",\n    });\n}\n')))),Object(c.b)("h2",{id:"add-a-button-to-toggle-the-canexecute-status"},"Add a Button to Toggle the ",Object(c.b)("inlineCode",{parentName:"h2"},"canExecute")," Status"),Object(c.b)("p",null,"Next, let's add a button to the custom component that will toggle the ",Object(c.b)("inlineCode",{parentName:"p"},"canExecute")," status of the ",Object(c.b)("inlineCode",{parentName:"p"},"custom.command-with-can-execute")," command."),Object(c.b)(i.a,{defaultValue:"component",values:[{label:"Component",value:"component"},{label:"Component Model",value:"model"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"component",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/components/CustomComponent.tsx"',title:'"src/components/CustomComponent.tsx"'}),'import {\n    LayoutElement,\n    LayoutElementProperties,\n} from "@vertigis/web/components";\nimport Button from "@vertigis/web/ui/Button";\nimport React from "react";\n\nimport CustomModel from "./CustomModel";\n\nconst CustomComponent = (props: LayoutElementProperties<CustomModel>) => {\n    const { model } = props;\n\n    return (\n        <LayoutElement {...props}>\n            // highlight-next-line\n            <Button onClick={() => model.toggleCanExecute()}>\n                Toggle Can Execute\n            </Button>\n        </LayoutElement>\n    );\n};\n\nexport default CustomComponent;\n'))),Object(c.b)(s.a,{value:"model",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/CustomModel.ts"',title:'"src/components/CustomModel.ts"'}),'import { ComponentModelBase, serializable } from "@vertigis/web/models";\nimport { command } from "@vertigis/web/messaging";\n\n@serializable\nexport default class CustomModel extends ComponentModelBase {\n    // highlight-next-line\n    private _canExecuteValue: boolean = false;\n\n    @command("custom.command-with-can-execute")\n    protected _commandWithCanExecute(): void {\n        this.messages.commands.ui.alert.execute({\n            message: "Executed `custom.command-with-can-execute`",\n        });\n        return;\n    }\n\n    // highlight-start\n    toggleCanExecute(): void {\n        this._canExecuteValue = !this._canExecuteValue;\n    }\n    // highlight-end\n}\n')))),Object(c.b)("h2",{id:"implement-the-canexecute-function"},"Implement the ",Object(c.b)("inlineCode",{parentName:"h2"},"canExecute")," Function"),Object(c.b)("p",null,"Finally, we need to implement the ",Object(c.b)("inlineCode",{parentName:"p"},"canExecute")," method for the ",Object(c.b)("inlineCode",{parentName:"p"},"custom.command-with-can-execute")," command. This method should be decorated with ",Object(c.b)("inlineCode",{parentName:"p"},"@canExecute")," and return a boolean indicating whether the command can execute."),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"If the command takes an argument, the ",Object(c.b)("inlineCode",{parentName:"p"},"@canExecute")," method will also be passed that argument."))),Object(c.b)(i.a,{defaultValue:"model",values:[{label:"Component Model",value:"model"},{label:"UI - Command Disabled",value:"ui-disabled"},{label:"UI - Command Enabled",value:"ui-enabled"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"model",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/CustomModel.ts"',title:'"src/components/CustomModel.ts"'}),'import { ComponentModelBase, serializable } from "@vertigis/web/models";\nimport { command, canExecute } from "@vertigis/web/messaging";\n\n@serializable\nexport default class CustomModel extends ComponentModelBase {\n    private _canExecuteValue: boolean = false;\n\n    @command("custom.command-with-can-execute")\n    protected _commandWithCanExecute(): void {\n        this.messages.commands.ui.alert.execute({\n            message: "Executed `custom.command-with-can-execute`",\n        });\n        return;\n    }\n\n    // highlight-start\n    @canExecute("custom.command-with-can-execute")\n    protected _canExecuteImplementation_(): boolean {\n        return this._canExecuteValue;\n    }\n    // highlight-end\n\n    toggleCanExecute(): void {\n        this._canExecuteValue = !this._canExecuteValue;\n        // highlight-start\n        this.messages\n            .command("custom.command-with-can-execute")\n            .canExecuteChanged.publish();\n        // highlight-end\n    }\n}\n'))),Object(c.b)(s.a,{value:"ui-disabled",mdxType:"TabItem"},Object(c.b)("img",{src:Object(m.a)("img/web-command-can-execute-disabled.png")})),Object(c.b)(s.a,{value:"ui-enabled",mdxType:"TabItem"},Object(c.b)("img",{src:Object(m.a)("img/web-command-can-execute-enabled.png")}))),Object(c.b)("h2",{id:"next-steps"},"Next Steps"),Object(c.b)("p",null,"Check out a ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://vertigis-web-samples.netlify.app/commands-and-operations"}),"live SDK sample")," of a command that has a ",Object(c.b)("inlineCode",{parentName:"p"},"canExecute")," hook."))}b.isMDXComponent=!0},296:function(e,t,n){"use strict";n(297)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},297:function(e,t,n){var a=n(18),o=n(19),c=n(24),m=/"/g,i=function(e,t,n,a){var o=String(c(e)),i="<"+t;return""!==n&&(i+=" "+n+'="'+String(a).replace(m,"&quot;")+'"'),i+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(i),a(a.P+a.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),o=n.n(a),c=n(295),m=n.n(c),i=n(125),s=n.n(i);function r(e){var t=e.children;return o.a.createElement("div",{className:m()(s.a.root)},t)}},299:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(296);var a=n(304),o=n(0),c=n.n(o),m=n(295),i=n.n(m),s=n(126),r=n.n(s);function l(e){var t=e.title,n=e.description,o=e.link;return c.a.createElement("div",{className:i()("card-demo",r.a.root)},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card__header"},c.a.createElement("h3",null,t)),c.a.createElement("div",{className:"card__body"},c.a.createElement("p",null,n)),c.a.createElement("div",{className:"card__footer"},c.a.createElement(a.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}},300:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=o},301:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}},302:function(e,t,n){"use strict";n(25),n(21),n(20);var a=n(0),o=n.n(a),c=n(300);var m=function(){return Object(a.useContext)(c.a)},i=n(295),s=n.n(i),r=n(127),l=n.n(r),u=37,d=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,i=e.values,r=e.groupId,p=m(),b=p.tabGroupChoices,h=p.setTabGroupChoices,g=Object(a.useState)(c),x=g[0],f=g[1];if(null!=r){var C=b[r];null!=C&&C!==x&&f(C)}var v=function(e){f(e),null!=r&&h(r,e)},O=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},i.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":x===t,className:s()("tabs__item",l.a.tabItem,{"tabs__item--active":x===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(O,e.target,e)},onFocus:function(){return v(t)},onClick:function(){return v(t)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===x}))[0]))}}}]);