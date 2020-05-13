(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{134:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return i})),o.d(t,"rightToc",(function(){return m})),o.d(t,"default",(function(){return p}));var n=o(1),a=o(9),r=(o(0),o(279)),c={},i={id:"web/snippets/prereqs-custom-code",title:"prereqs-custom-code",description:"-   Download and setup the [Geocortex Web SDK](../sdk-overview.mdx).",source:"@site/docs/web/snippets/prereqs-custom-code.mdx",permalink:"/docs/web/snippets/prereqs-custom-code",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/prereqs-custom-code.mdx"},m=[],s={rightToc:m};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Download and setup the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/web/sdk-overview"}),"Geocortex Web SDK"),"."),Object(r.b)("li",{parentName:"ul"},"Check out the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/web/sdk-deployment#uploading-custom-code-to-an-app"}),"deployment instructions")," to learn more about deploying custom code to a Geocortex Web App.")))}p.isMDXComponent=!0},193:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return d})),o.d(t,"metadata",(function(){return u})),o.d(t,"rightToc",(function(){return b})),o.d(t,"default",(function(){return j}));var n=o(1),a=o(9),r=(o(0),o(279)),c=o(300),i=o(298),m=o(297),s=o(303),p=o(302),l=o(134),d={title:"Import the MapModel into a Component",description:"Geocortex Web - Learn how to interact with the map in a custom component"},u={id:"web/tutorial-import-map-model",title:"Import the MapModel into a Component",description:"Geocortex Web - Learn how to interact with the map in a custom component",source:"@site/docs/web/tutorial-import-map-model.mdx",permalink:"/docs/web/tutorial-import-map-model",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/tutorial-import-map-model.mdx",sidebar:"web",previous:{title:"Build a Custom Component with UI",permalink:"/docs/web/tutorial-implement-component-with-ui"},next:{title:"Pull Component Data from App Config",permalink:"/docs/web/tutorial-implement-component-participate-app-config"}},b=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create a Custom Component With a Model",id:"create-a-custom-component-with-a-model",children:[]},{value:"Inject the Map Model into the Component",id:"inject-the-map-model-into-the-component",children:[]},{value:"Use the Map Model to Add a New Graphics Layer",id:"use-the-map-model-to-add-a-new-graphics-layer",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],h={rightToc:b};function j(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},h,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Custom components can already interface with much of the functionality in Geocortex Web through commands and operations. However, sometimes more direct access to the data structures that power components is needed."),Object(r.b)("p",null,"This article will teach you how to inject the Map model into a custom component so you can directly access the Esri Map object and add a graphics layer to it."),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)(l.default,{mdxType:"PrereqsCustomCodeSnippet"}),Object(r.b)("h2",{id:"create-a-custom-component-with-a-model"},"Create a Custom Component With a Model"),Object(r.b)("p",null,"First, we will create a custom component that has an associated model."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"To learn more about registering and using a component in the layout, check out ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/web/sdk-component-reference"}),"the component reference")))),Object(r.b)(s.a,{defaultValue:"component",values:[{label:"Component",value:"component"},{label:"Model",value:"model"},{label:"Layout",value:"layout"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"component",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/components/CustomComponent/CustomComponent.tsx"',title:'"src/components/CustomComponent/CustomComponent.tsx"'}),'import React from "react";\nimport {\n    LayoutElement,\n    LayoutElementProperties,\n} from "@geocortex/web/components";\nimport Button from "@geocortex/web/ui/button/Button";\nimport { CustomModel } from ".";\n\nexport default function CustomComponent(\n    props: LayoutElementProperties<CustomModel>\n) {\n    return (\n        <LayoutElement {...props}>\n            <Button onClick={() => props.model.addGraphic()}>\n                Add a Graphic to the Map\n            </Button>\n        </LayoutElement>\n    );\n}\n'))),Object(r.b)(p.a,{value:"model",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/CustomComponent/CustomModel.ts"',title:'"src/components/CustomComponent/CustomModel.ts"'}),'import {\n    ComponentModelBase,\n    serializable,\n    importModel,\n} from "@geocortex/web/models";\nimport { MapExtension } from "@geocortex/api/mapping/MapExtension";\nimport Graphic from "esri/Graphic";\nimport GraphicsLayer from "esri/layers/GraphicsLayer";\nimport { Polygon } from "esri/geometry";\nimport { SimpleFillSymbol } from "esri/symbols";\n\n@serializable\nexport default class CustomModel extends ComponentModelBase {\n    addGraphic() {\n        throw new Error("Not yet implemented.");\n    }\n}\n'))),Object(r.b)(p.a,{value:"layout",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="your.custom.namespace">\n    <map>\n        <custom:custom-component slot="top-center"/>\n    </map>\n</layout>\n')))),Object(r.b)("h2",{id:"inject-the-map-model-into-the-component"},"Inject the Map Model into the Component"),Object(r.b)("p",null,"Next, we can inject the Map model, which is the type ",Object(r.b)("inlineCode",{parentName:"p"},"MapExtension"),", into the component using the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/web/sdk-component-interactions#interacting-with-components-through-models"}),"model injection")," pattern."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'\n@serializable\nexport default class CustomModel extends ComponentModelBase {\n    // highlight-start\n    @importModel("map-extension")\n    mapExtension: MapExtension | undefined;\n    // highlight-end\n    ...\n}\n')),Object(r.b)("h2",{id:"use-the-map-model-to-add-a-new-graphics-layer"},"Use the Map Model to Add a New Graphics Layer"),Object(r.b)("p",null,"Finally, we can use the ",Object(r.b)("inlineCode",{parentName:"p"},"MapExtension")," to add a custom graphics layer to the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html"}),"ArcGIS Map object"),"."),Object(r.b)(s.a,{defaultValue:"component",values:[{label:"Component",value:"component"},{label:"Model",value:"model"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"component",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/components/CustomComponent/CustomComponent.tsx"',title:'"src/components/CustomComponent/CustomComponent.tsx"'}),'import React from "react";\nimport {\n    LayoutElement,\n    LayoutElementProperties,\n} from "@geocortex/web/components";\nimport Button from "@geocortex/web/ui/button/Button";\nimport { CustomModel } from ".";\n\nexport default function CustomComponent(\n    props: LayoutElementProperties<CustomModel>\n) {\n    return (\n        <LayoutElement {...props}>\n            <Button onClick={() => props.model.addGraphic()}>\n                Add a Graphic to the Map\n            </Button>\n        </LayoutElement>\n    );\n}\n'))),Object(r.b)(p.a,{value:"model",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/CustomComponent/CustomModel.ts"',title:'"src/components/CustomComponent/CustomModel.ts"'}),'import {\n    ComponentModelBase,\n    serializable,\n    importModel,\n} from "@geocortex/web/models";\nimport { MapExtension } from "@geocortex/api/mapping/MapExtension";\nimport Graphic from "esri/Graphic";\nimport GraphicsLayer from "esri/layers/GraphicsLayer";\nimport { Polygon } from "esri/geometry";\nimport { SimpleFillSymbol } from "esri/symbols";\n\n@serializable\nexport default class CustomModel extends ComponentModelBase {\n    @importModel("map-extension")\n    mapExtension: MapExtension | undefined;\n\n    // based on https://developers.arcgis.com/javascript/latest/sample-code/sandbox/index.html?sample=intro-graphics\n    triangleGraphic = new GraphicsLayer({\n        graphics: [\n            new Graphic({\n                symbol: new SimpleFillSymbol({ color: "orange" }),\n                geometry: new Polygon({\n                    rings: [\n                        [\n                            [-64.78, 32.3],\n                            [-66.07, 18.45],\n                            [-80.21, 25.78],\n                            [-64.78, 32.3],\n                        ],\n                    ],\n                }),\n            }),\n        ],\n    });\n\n    addGraphic() {\n        if (this.mapExtension) {\n            const esriMap = this.mapExtension.map;\n            esriMap.add(this.triangleGraphic);\n        } else {\n            console.error(\n                "Could not add graphic to map, as no map model was imported into the \'CustomModel\'."\n            );\n            return;\n        }\n    }\n}\n'))),Object(r.b)(p.a,{value:"ui",mdxType:"TabItem"},Object(r.b)("img",{src:Object(c.a)("img/web-add-graphics-layer-component.png")}))),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)(m.a,{mdxType:"UseCaseContainer"},Object(r.b)(i.a,{title:"Learn more about Component Interactions",description:"Learn more about how components interact with each other through models and services",link:"sdk-component-interactions",mdxType:"UseCaseCard"}),Object(r.b)(i.a,{title:"Learn how Components are Bound to Models in the Layout",description:"Learn how layout structure can be used to bind components to their required models",link:"configuration-advanced-model-binding",mdxType:"UseCaseCard"})))}j.isMDXComponent=!0},297:function(e,t,o){"use strict";o.d(t,"a",(function(){return s}));var n=o(0),a=o.n(n),r=o(280),c=o.n(r),i=o(130),m=o.n(i);function s(e){var t=e.children;return a.a.createElement("div",{className:c()(m.a.root)},t)}},298:function(e,t,o){"use strict";o.d(t,"a",(function(){return p}));o(295);var n=o(286),a=o(0),r=o.n(a),c=o(280),i=o.n(c),m=o(131),s=o.n(m);function p(e){var t=e.title,o=e.description,a=e.link;return r.a.createElement("div",{className:i()("card-demo",s.a.root)},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"card__body"},r.a.createElement("p",null,o)),r.a.createElement("div",{className:"card__footer"},r.a.createElement(n.a,{className:"button button--secondary button--block",to:a},"Get Started"))))}}}]);