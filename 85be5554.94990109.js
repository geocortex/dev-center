(window.webpackJsonp=window.webpackJsonp||[]).push([[82,87],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(9),i=(n(0),n(294)),c={},s={id:"web/snippets/follow-along",title:"follow-along",description:"Download and setup the Geocortex Web SDK and edit the minimal layout and app config provided.",source:"@site/docs/web/snippets/follow-along.mdx",permalink:"/docs/web/snippets/follow-along",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/follow-along.mdx"},r=[],l={rightToc:r};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Want to follow along?")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Download and setup the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-overview"}),"Geocortex Web SDK")," and edit the minimal layout and app config provided."))))}p.isMDXComponent=!0},234:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return h}));var a=n(2),o=n(9),i=(n(0),n(294)),c=n(303),s=n(302),r=n(301),l=(n(327),n(299)),p=n(298),m=(n(139),{title:"Commands and Operations",description:"Geocortex Web - Learn about commands and operations"}),d={id:"web/configuration-commands-operations",title:"Commands and Operations",description:"Geocortex Web - Learn about commands and operations",source:"@site/docs/web/configuration-commands-operations.mdx",permalink:"/docs/web/configuration-commands-operations",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/configuration-commands-operations.mdx",sidebar:"web",previous:{title:"Configuring the Theme",permalink:"/docs/web/configuration-theme"},next:{title:"Configure Button Click Behavior",permalink:"/docs/web/tutorial-configure-button-click"}},u=[{value:"Workflow Command",id:"workflow-command",children:[]},{value:"Configuring Commands and Operations",id:"configuring-commands-and-operations",children:[{value:"Passing Explicit Arguments",id:"passing-explicit-arguments",children:[]},{value:"Passing Implicit Arguments",id:"passing-implicit-arguments",children:[]}]},{value:"Command Chains",id:"command-chains",children:[{value:"Example: Configured Map and I Want to Menu",id:"example-configured-map-and-i-want-to-menu",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],b={rightToc:u};function h(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Commands and operations")," are runnable, independent units of work within\nGeocortex Web. Commands and operations act as global functions which can be\nexecuted from any component or service."),Object(i.b)("p",null,'Commands and operations have one key difference. Commands execute behavior that can have effects on the application, while operations produce outputs which can be passed to commands. Commands and operations can be run sequentially in what\'s called a "command chain" to enable complex behavior.'),Object(i.b)("p",null,"Commands and Operations are grouped by namespace, for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"auth.sign-in\nauth.sign-out\nedit.add-feature\nedit.delete-features\n")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The full list of existing commands and operations available in Geocortex Web can be ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/api-commands-operations-events"}),"found in the API documentation"),"."))),Object(i.b)("p",null,"Commands and operations are used to power much of Geocortex Web's built in behavior and interactions. They can be run through configuration, or through ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-services-overview"}),"custom services")," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-components-overview"}),"components"),"."),Object(i.b)("p",null,"One thing that makes commands and operations so powerful is that built in components have properties in the app config which take them as values. They power everything from basic components like the IWTM, to advanced functionality like the results list. This allows built-in component's internal behavior to be configured with different commands and operations."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "items": [\n        ...\n        {\n            "id": "iwtm-config-1",\n            "items": [\n                {\n                    "id": "return-to-initial-view",\n                    "iconId": "zoom-initial",\n                    "title": "Return to Initial View",\n                    // highlight-next-line\n                    "action": "map.zoom-to-initial-viewpoint",\n                    "$type": "menu-item"\n                },\n            ],\n            "$type": "menu"\n        },\n        {\n            "id": "results-list-config",\n            "featureActions":     {\n                "id": "results-context",\n                "items": [\n                    {\n                        "id": "zoom",\n                        "iconId": "zoom-feature",\n                        "title": "Zoom to Feature",\n                        // highlight-next-line\n                        "action": "map.zoom-to-features",\n                        "$type": "menu-item"\n                    },\n                    {\n                        "id": "remove-feature",\n                        "iconId": "trash",\n                        "title": "Remove Feature",\n                        // highlight-next-line\n                        "action": "results.remove",\n                        "$type": "menu-item"\n                    },\n                ],\n                "$type": "menu"\n            },\n            "onFeatureClick": [\n                // highlight-next-line\n                "results.display-details"\n            ],\n            "$type": "results"\n        },\n        ...\n    ]\n}\n')),Object(i.b)("h2",{id:"workflow-command"},"Workflow Command"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/"}),"Geocortex Workflow")," can allow for the creation of completely customized behavior without writing custom code. Geocortex Web has a special command, ",Object(i.b)("inlineCode",{parentName:"p"},"workflow.run"),", which allows you to run workflows anywhere you would run a command or operation. Using workflow, you can take custom behavior in Geocortex Web further without having to write custom code."),Object(i.b)("p",null,"Check out this example of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/tutorial-run-workflow-app-config"}),"running a workflow from app config"),"."),Object(i.b)("h2",{id:"configuring-commands-and-operations"},"Configuring Commands and Operations"),Object(i.b)("p",null,"Commands and operations can be used through the app config to customize built in components."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "id": "button-config",\n            "iconId": "zoom-in",\n            "title": "Zoom In",\n            // highlight-next-line\n            "action": "map.zoom-in",\n            "$type": "menu-item"\n        }\n        ...\n    ]\n}\n')),Object(i.b)("p",null,"App config properties like ",Object(i.b)("inlineCode",{parentName:"p"},"action")," can accept a singular command/operation or a ",Object(i.b)("strong",{parentName:"p"},"command chain")," ."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Command chains are arrays of commands and operations which are executed sequentially. The output of previous operations is passed along the chain to future operations and commands, allowing for complex input dependent behavior."))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "id": "zoom",\n    "$type": "menu-item",\n    "title": "Zoom to Features",\n    // highlight-next-line\n    "action": ["map.zoom-to-features", "highlights.pulse"]\n}\n')),Object(i.b)("h3",{id:"passing-explicit-arguments"},"Passing Explicit Arguments"),Object(i.b)("p",null,"Commands and operations can be configured with an ",Object(i.b)("inlineCode",{parentName:"p"},"arguments")," property that passes values to the function at execution time."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You can find out what arguments a command or operation takes in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/api-commands-operations-events"}),"commands and operations API reference"),"."))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$type": "menu",\n    "id": "iwtm",\n    "items": [\n        {\n            "title": "Hello",\n            "isEnabled": true,\n            "iconId": "info",\n            "action": {\n                "name": "ui.display-notification",\n                // highlight-start\n                "arguments": {\n                    "message": "World"\n                }\n                // highlight-end\n            }\n        }\n    ]\n}\n')),Object(i.b)("h3",{id:"passing-implicit-arguments"},"Passing Implicit Arguments"),Object(i.b)("p",null,"If you do not pass explicit arguments, then implicit arguments will be passed to the command or operation. Implicit arguments come from the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input"}),"context")," that a command or operation is running in, or from a previous operation in the command chain"),Object(i.b)("p",null,"For example, let's look at the configuration for the ",Object(i.b)("inlineCode",{parentName:"p"},"onFeatureClick")," property of a ",Object(i.b)("inlineCode",{parentName:"p"},"<results-list>")," component model."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "id": "results-list",\n            "$type": "results",\n            // highlight-next-line\n            "onFeatureClick": "results.display-details"\n        },\n        ...\n    ]\n}\n')),Object(i.b)("p",null,"In this example, the context is an item in the results list, so ",Object(i.b)("inlineCode",{parentName:"p"},"results.display-details")," will receive an argument with a ",Object(i.b)("inlineCode",{parentName:"p"},"Features")," property, which is the shape of argument it needs."),Object(i.b)("p",null,"Arguments are also passed implicitly if you create a command chain, which runs operations one after the other."),Object(i.b)("h2",{id:"command-chains"},"Command Chains"),Object(i.b)("p",null,"App config properties that accept a command or operation can take a single operation or they can take a ",Object(i.b)("strong",{parentName:"p"},"command chain"),". Command chains are arrays of commands and operations which are executed sequentially. The output of previous operations is passed along the chain to future operations, allowing for complex chains of behavior."),Object(i.b)("p",null,"For example, here's configuration for the various behaviors of a ",Object(i.b)("inlineCode",{parentName:"p"},"<results-list>")," component."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "id": "results-list",\n            "$type": "results",\n            "featureActions": [\n                "item://menu-item/zoom-to-features",\n                "item://menu-item/save-features-to-csv"\n            ],\n            // highlight-next-line\n            "onFeatureClick": "results.display-details"\n        },\n        {\n            "id": "zoom-to-features",\n            "$type": "menu-item",\n            "title": "Zoom to Features",\n            // highlight-next-line\n            "action": ["map.zoom-to-features", "highlights.pulse"]\n        },\n        {\n            "id": "save-features-to-csv",\n            "$type": "menu-item",\n            "title": "Save Features to CSV",\n            // highlight-next-line\n            "action": ["results.convert-to-csv", "system.download-file"]\n        },\n        ...\n    ]\n}\n')),Object(i.b)("p",null,"Since these commands and operations are running from the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input"}),"context")," of a ",Object(i.b)("inlineCode",{parentName:"p"},"<results-list>")," component, the first command or operation will receive the relevant feature as its input. If the property is a command chain, the next step in line will receive one of two possible inputs."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"If the previous step was a command (which doesn't produce output), then the original input is passed on to the next step."),Object(i.b)("li",{parentName:"ol"},"If the previous step was an operation (which produces an output), then the output of that operation is passed onto the next step.")),Object(i.b)("p",null,"In this way, you can run multiple commands in a row that receive a feature as input, as seen in the ",Object(i.b)("inlineCode",{parentName:"p"},"action")," command chain of ",Object(i.b)("inlineCode",{parentName:"p"},"zoom-to-features")," in the example."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'// Both of these commands will receive the Features argument passed into the\n// command chain.\n["map.zoom-to-features", "highlights.pulse"]\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"action")," command chain of ",Object(i.b)("inlineCode",{parentName:"p"},"save-features-to-csv")," demonstrates how an operation can pass its output to the next command or operation in the list. In this case, it's passing the CSV content to ",Object(i.b)("inlineCode",{parentName:"p"},"system.download-file"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'// `system.download-file` will receive the output of `results.convert-to-csv`.\n["results.convert-to-csv", "system.download-file"]\n')),Object(i.b)("h3",{id:"example-configured-map-and-i-want-to-menu"},"Example: Configured Map and I Want to Menu"),Object(i.b)("p",null,"This example demonstrates two different types of argument passing behavior."),Object(i.b)(s.a,{defaultValue:"app",values:[{label:"App Config",value:"app"},{label:"Layout",value:"layout"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"app",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "webMap": "https://www.arcgis.com/home/item.html?id=0ba877a4185448cb832af9a661031e31",\n            "onClick": [\n                "tasks.identify",\n                "highlights.add-focus",\n                "results.display"\n            ]\n        },\n        {\n            "$type": "menu",\n            "id": "iwtm",\n            "items": [\n                {\n                    "title": "Return to Default Map View",\n                    "isEnabled": true,\n                    "action": [\n                        {\n                            "name": "map.zoom-to-initial-viewpoint",\n                            "arguments": ["item://map-extension/default"]\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}\n'))),Object(i.b)(r.a,{value:"layout",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    <split resizable="true">\n        <panel show-close-button="false" width="26">\n            <results-list active="true"/>\n            <feature-details active="false"/>\n        </panel>\n        <map config="default">\n            <iwtm config="iwtm" slot="top-left"/>\n        </map>\n    </split>\n</layout>\n')))),Object(i.b)("p",null,"Let's first look at the command chain defined on the ",Object(i.b)("inlineCode",{parentName:"p"},"onClick")," property of a map. This chain consists of three operations and commands:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"task.identify"),","),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"highlights.add-focus")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"results.display"))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"tasks.identify")," does not have any named arguments defined, so it will take arguments passed into it from its current ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input"}),"context"),". Since this chain is run on a map click, the context argument passed in has the shape:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "geometry": "Esri.Point(<map-click-location>)",\n  ... <other props>\n}\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"tasks.identify")," receives this argument, and since it is an operation, produces an output. Looking at the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/api-commands-operations-events"}),"Commands and Operations Documentation"),", ",Object(i.b)("inlineCode",{parentName:"p"},"tasks.identify")," has output of type ",Object(i.b)("inlineCode",{parentName:"p"},"Features"),"."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"highlights.add-focus")," and ",Object(i.b)("inlineCode",{parentName:"p"},"results.display")," both take a ",Object(i.b)("inlineCode",{parentName:"p"},"Features")," type input, so the output of ",Object(i.b)("inlineCode",{parentName:"p"},"tasks.identify")," will work nicely. ",Object(i.b)("inlineCode",{parentName:"p"},"highlights.add-focus")," is immediately after ",Object(i.b)("inlineCode",{parentName:"p"},"tasks.identify"),", so it receives the output of identify. Since ",Object(i.b)("inlineCode",{parentName:"p"},"highlights.add-focus")," is a command, it does not produce any output. Therefore, ",Object(i.b)("inlineCode",{parentName:"p"},"results.display")," will receive the output of the last operation, ",Object(i.b)("inlineCode",{parentName:"p"},"tasks.identify"),". In this way, you can pass the output of an operation to multiple commands."),Object(i.b)("p",null,"The second behavior in this application is a ",Object(i.b)("inlineCode",{parentName:"p"},"map.zoom-to-initial-viewpoint")," command on the I Want To Menu. This command takes ",Object(i.b)("inlineCode",{parentName:"p"},"Maps")," type argument. The ",Object(i.b)("inlineCode",{parentName:"p"},"argument")," property in the app config supplies an array of maps by referencing the ",Object(i.b)("inlineCode",{parentName:"p"},"default")," map with an ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/configuration-app-config-reference#item-uris"}),Object(i.b)("strong",{parentName:"a"},"Item URI")),". Item URIs are a way of referencing other items within the app config."),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)("p",null,"Geocortex Web has a large array of built-in command and operations that you can chain to power custom behavior. Custom commands and operations can also be implemented with the SDK."),Object(i.b)(p.a,{mdxType:"UseCaseContainer"},Object(i.b)(l.a,{title:"Commands, Operations, and Events API",description:"Check out the available commands and operations",link:Object(c.a)("docs/web/api-commands-operations-events"),mdxType:"UseCaseCard"}),Object(i.b)(l.a,{title:"Run a Command or Operation with a Button",description:"Learn how to configure a button to run a command or operation",link:Object(c.a)("docs/web/tutorial-configure-button-click"),mdxType:"UseCaseCard"}),Object(i.b)(l.a,{title:"Build your own Commands and Operations",description:"Use the SDK to implement custom commands and operations",link:Object(c.a)("docs/web/tutorial-implement-command-operation"),mdxType:"UseCaseCard"}),Object(i.b)(l.a,{title:"Learn about Events built into Geocortex Web",description:"Learn about the global event infrastructure in Geocortex Web",link:Object(c.a)("docs/web/sdk-events-overview"),mdxType:"UseCaseCard"})))}h.isMDXComponent=!0},296:function(e,t,n){"use strict";n(297)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},297:function(e,t,n){var a=n(18),o=n(19),i=n(24),c=/"/g,s=function(e,t,n,a){var o=String(i(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(a).replace(c,"&quot;")+'"'),s+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),a(a.P+a.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),o=n.n(a),i=n(295),c=n.n(i),s=n(125),r=n.n(s);function l(e){var t=e.children;return o.a.createElement("div",{className:c()(r.a.root)},t)}},299:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n(296);var a=n(304),o=n(0),i=n.n(o),c=n(295),s=n.n(c),r=n(126),l=n.n(r);function p(e){var t=e.title,n=e.description,o=e.link;return i.a.createElement("div",{className:s()("card-demo",l.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,n)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(a.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}},300:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=o},301:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}},302:function(e,t,n){"use strict";n(25),n(21),n(20);var a=n(0),o=n.n(a),i=n(300);var c=function(){return Object(a.useContext)(i.a)},s=n(295),r=n.n(s),l=n(127),p=n.n(l),m=37,d=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,s=e.values,l=e.groupId,u=c(),b=u.tabGroupChoices,h=u.setTabGroupChoices,f=Object(a.useState)(i),g=f[0],j=f[1];if(null!=l){var O=b[l];null!=O&&O!==g&&j(O)}var v=function(e){j(e),null!=l&&h(l,e)},w=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:r()("tabs",{"tabs--block":t})},s.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":g===t,className:r()("tabs__item",p.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case m:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return v(t)},onClick:function(){return v(t)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},327:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),o=n.n(a),i=n(149),c=n.n(i);function s(e){var t=e.src;return o.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,className:c.a.video},o.a.createElement("source",{src:t,type:"video/webm"}),"Your browser does not support the video tag.")}}}]);