(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(9),i=(n(0),n(294)),c=n(303),r=n(302),s=n(301),m={title:"Component Styling",description:"Geocortex Web - Learn how to style a custom component",hide_table_of_contents:!0},l={id:"web/sdk-components-styling",title:"Component Styling",description:"Geocortex Web - Learn how to style a custom component",source:"@site/docs/web/sdk-components-styling.mdx",permalink:"/docs/web/sdk-components-styling",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-components-styling.mdx",sidebar:"web",previous:{title:"Service Injection",permalink:"/docs/web/sdk-components-injecting-services"},next:{title:"Internationalization",permalink:"/docs/web/sdk-components-internationalization"}},u=[{value:"Component that Uses Built-in Icons",id:"component-that-uses-built-in-icons",children:[]}],b={rightToc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Geocortex Web Components support fully custom styling using CSS. However, by using Geocortex Web layout components, you can take advantage of styled, well tested, UI components that already participate in the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/configuration-theme"}),"application theme"),"."),Object(i.b)(r.a,{defaultValue:"component",values:[{label:"Component",value:"component"},{label:"CSS",value:"css"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"component",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import React from "react";\nimport {\n    LayoutElement,\n    LayoutElementProperties,\n} from "@vertigis/web/components";\nimport List from "@vertigis/web/ui/List";\nimport ListItem from "@vertigis/web/ui/ListItem";\nimport TitleBar from "@vertigis/web/ui/TitleBar";\nimport Button from "@vertigis/web/ui/Button";\nimport ExampleComponentModel from "./ExampleComponentModel";\nimport "./ExampleComponent.css";\n\nexport default function ExampleComponent(\n    props: LayoutElementProperties<ExampleComponentModel>\n) {\n    return (\n        <LayoutElement {...props}>\n            <List dense={true}>\n                <TitleBar>Some Title</TitleBar>\n                <ListItem>\n                    <Button>Item 1</Button>\n                </ListItem>\n                <ListItem>\n                    <Button>Item 2</Button>\n                </ListItem>\n                <ListItem>\n                    <Button>Item 2</Button>\n                </ListItem>\n                <div className="red">I have a red background</div>\n            </List>\n        </LayoutElement>\n    );\n}\n'))),Object(i.b)(s.a,{value:"css",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-css"}),".red {\n    background-color: red;\n    color: white;\n}\n"))),Object(i.b)(s.a,{value:"ui",mdxType:"TabItem"},Object(i.b)("img",{src:Object(c.a)("img/web-sdk-components-reference-styling.png")}))),Object(i.b)("p",null,"However, if you need to manually theme the component, you can use the various theming colors in custom css, through the ",Object(i.b)("inlineCode",{parentName:"p"},"var(...)")," css function."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"A full list of all the color keys available in a theme ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/configuration-theme#theme-color-reference"}),"can be found here"),"."))),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-css"}),".my-element {\n    background-color: var(--primaryBackground);\n}\n")),Object(i.b)("h2",{id:"component-that-uses-built-in-icons"},"Component that Uses Built-in Icons"),Object(i.b)("p",null,"The following example demonstrates a component that uses Geocortex Web layout components and an icon from the Geocortex Icons library."),Object(i.b)(r.a,{defaultValue:"component",values:[{label:"Component",value:"component"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"component",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import React from "react";\nimport { LayoutElement } from "@vertigis/web/components";\nimport DynamicIcon from "@vertigis/web/ui/DynamicIcon";\nimport IconButton from "@vertigis/web/ui/IconButton";\nimport MenuItem from "@vertigis/web/ui/MenuItem";\nimport MenuItemSecondaryAction from "@vertigis/web/ui/MenuItemSecondaryAction";\nimport ListItemText from "@vertigis/web/ui/ListItemText";\n\nexport default function ComponentWithIcon(props) {\n    return (\n        <LayoutElement {...props} style={{ backgroundColor: "white" }}>\n            <MenuItem>\n                <ListItemText\n                    primary={"Icon Example"}\n                    secondary={"cloud-download icon"}\n                />\n                <MenuItemSecondaryAction>\n                    // highlight-start\n                    <IconButton title="IconExample">\n                        <DynamicIcon src="cloud-download" size="large" />\n                    </IconButton>\n                    // highlight-end\n                </MenuItemSecondaryAction>\n            </MenuItem>\n        </LayoutElement>\n    );\n}\n'))),Object(i.b)(s.a,{value:"ui",mdxType:"TabItem"},Object(i.b)("img",{src:Object(c.a)("img/web-component-with-icon.png")}))))}p.isMDXComponent=!0},300:function(e,t,n){"use strict";var o=n(0),a=Object(o.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=a},301:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(e){return a.a.createElement("div",null,e.children)}},302:function(e,t,n){"use strict";n(25),n(21),n(20);var o=n(0),a=n.n(o),i=n(300);var c=function(){return Object(o.useContext)(i.a)},r=n(295),s=n.n(r),m=n(127),l=n.n(m),u=37,b=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,r=e.values,m=e.groupId,p=c(),d=p.tabGroupChoices,f=p.setTabGroupChoices,v=Object(o.useState)(i),h=v[0],g=v[1];if(null!=m){var y=d[m];null!=y&&y!==h&&g(y)}var j=function(e){g(e),null!=m&&f(m,e)},O=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},r.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===t,className:s()("tabs__item",l.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(O,e.target,e)},onFocus:function(){return j(t)},onClick:function(){return j(t)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}}}]);