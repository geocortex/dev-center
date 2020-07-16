(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),s=n(9),o=(n(0),n(298)),i={},r={id:"web/snippets/prereqs-custom-code",isDocsHomePage:!1,title:"prereqs-custom-code",description:"-   Download and setup the Geocortex Web SDK.",source:"@site/docs/web/snippets/prereqs-custom-code.mdx",permalink:"/docs/web/snippets/prereqs-custom-code",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/prereqs-custom-code.mdx"},c=[],m={rightToc:c};function d(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Download and setup the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/web/sdk-overview"}),"Geocortex Web SDK"),"."),Object(o.b)("li",{parentName:"ul"},"Check out the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/web/sdk-deployment#uploading-custom-code-to-an-app"}),"deployment instructions")," to learn more about deploying custom code to a Geocortex Web App.")))}d.isMDXComponent=!0},139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),s=n(9),o=(n(0),n(298)),i={},r={id:"web/snippets/framework-components",isDocsHomePage:!1,title:"framework-components",description:"This example uses Geocortex Web layout components",source:"@site/docs/web/snippets/framework-components.mdx",permalink:"/docs/web/snippets/framework-components",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/framework-components.mdx"},c=[],m={rightToc:c};function d(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This example uses Geocortex Web layout components"))))}d.isMDXComponent=!0},250:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return v})),n.d(t,"default",(function(){return h}));var a=n(2),s=n(9),o=(n(0),n(298)),i=n(304),r=n(310),c=n(309),m=n(132),d=n(139),l=n(322),p=n(323),u={title:"Manage Dynamic Data with a Service",description:"Geocortex Web - Implement a service that manages dynamic data for a component"},b={id:"web/tutorial-service-dynamic-data",isDocsHomePage:!1,title:"Manage Dynamic Data with a Service",description:"Geocortex Web - Implement a service that manages dynamic data for a component",source:"@site/docs/web/tutorial-service-dynamic-data.mdx",permalink:"/docs/web/tutorial-service-dynamic-data",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/tutorial-service-dynamic-data.mdx",sidebar:"web",previous:{title:"Using the canExecute Command Hook",permalink:"/docs/web/tutorial-command-can-execute"},next:{title:"Commands, Operations and Events Reference",permalink:"/docs/web/api-commands-operations-events"}},v=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Create and Register the Service",id:"create-and-register-the-service",children:[]},{value:"Mock a Sporadically Updated Data Source",id:"mock-a-sporadically-updated-data-source",children:[]},{value:"Consume the Data in the Component",id:"consume-the-data-in-the-component",children:[]},{value:"Complete Example",id:"complete-example",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],w={rightToc:v};function h(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},w,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When extending Geocortex Web, you may find yourself creating multiple ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-components-overview"}),"components")," that have a shared concern, like a data source, or a REST endpoint call. Shared concerns like this present a good use case for creating a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-services-create"}),"custom service"),".\nImplementing a custom service in Geocortex Web allows you to implement logic and shared resources that are available on startup to any component. Custom Services are also the recommended way of registering implementations for ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-commands-operations#implementing-commands-and-operations"}),"custom commands and operations"),"."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)(m.default,{mdxType:"PrereqsCustomCodeSnippet"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"In this article, we will build a custom service that mocks a periodic fetch of data from a REST endpoint and stores that data for consumption by components. This service will populate a list of news items which will be consumed by a news feed component."),Object(o.b)("h2",{id:"create-and-register-the-service"},"Create and Register the Service"),Object(o.b)("p",null,"Create a new folder structure with the following files. These files define a new service and export it from the ",Object(o.b)("inlineCode",{parentName:"p"},"CustomService")," folder."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"src/services/CustomDataService/CustomDataService.ts")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"src/services/CustomDataService/index.ts"))),Object(o.b)(l.a,{defaultValue:"service",values:[{label:"Service",value:"service"},{label:"Index",value:"index"}],mdxType:"Tabs"},Object(o.b)(p.a,{value:"service",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/services/CustomDataService/CustomDataService.ts"',title:'"src/services/CustomDataService/CustomDataService.ts"'}),'import { ServiceBase } from "@vertigis/web/services";\n\nexport default class CustomDataService extends ServiceBase {}\n'))),Object(o.b)(p.a,{value:"index",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/services/CustomDataService/index.ts"',title:'"src/services/CustomDataService/index.ts"'}),'export { default } from "./CustomDataService";\n')))),Object(o.b)("p",null,"Every service needs to be registered with the Web SDK in order to be discovered and initialized."),Object(o.b)("p",null,"Add a call to ",Object(o.b)("inlineCode",{parentName:"p"},"registerService")," in ",Object(o.b)("inlineCode",{parentName:"p"},"src/index.ts"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'export default function(registry: LibraryRegistry) {\n    ...\n    registry.registerService({\n        id: "custom-service",\n        getService: (config) => new CustomService(config),\n    })\n    ...\n}\n')),Object(o.b)("h2",{id:"mock-a-sporadically-updated-data-source"},"Mock a Sporadically Updated Data Source"),Object(o.b)("p",null,"The purpose of this service will be to create a mock data source for the a news feed component. We can mock a sporadically updated news feed data source, simulating what a real news feed, with data arriving at unknown intervals, might behave like. This service will expose a single public property, ",Object(o.b)("inlineCode",{parentName:"p"},"newsItems")," which will act as a dynamic data source for the news feed component."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/services/CustomDataService/CustomDataService.ts"',title:'"src/services/CustomDataService/CustomDataService.ts"'}),'import { ServiceBase } from "@vertigis/web/services";\nimport Collection from "esri/core/Collection";\n\nconst newsItems = [\n    "New fire hydrant installed at Main and 5th.",\n    "Pipe burst at 4th and Broadview",\n    "Fire hydrant reported as needs maintenance by citizen.",\n    "Crack in road on the Johnson Street Bridge",\n    "Fire Hydrant vandalized in front of City Hall",\n];\n\nexport default class CustomDataService extends ServiceBase {\n    private _curIndex = 0;\n\n    // highlight-next-line\n    newsItems: Collection<string> = new Collection<string>();\n\n    private async _fetchRecentNews() {\n        // REST request for a news item would go here.\n        return newsItems[this._curIndex++ % newsItems.length];\n    }\n\n    // In a real application, you would want to subscribe to a\n    // data source and not use polling.\n    private _startPollingForNewItems() {\n        const fetchNewsLoop = async () => {\n            const newNews = await this._fetchRecentNews();\n            let curTime = new Date().toTimeString().split("GMT")[0];\n            this.newsItems.unshift(`${curTime}- ${newNews}`);\n            setTimeout(fetchNewsLoop, Math.random() * 6000);\n        };\n\n        fetchNewsLoop();\n    }\n\n    // highlight-start\n    protected _onInitialize(): Promise<void> {\n        super._onInitialize();\n        this._startPollingForNewItems();\n        return;\n    }\n    // highlight-end\n}\n')),Object(o.b)("h2",{id:"consume-the-data-in-the-component"},"Consume the Data in the Component"),Object(o.b)("p",null,"Now that we have the news feed data being populated by a service, we need to consume that data in the news feed component.\nFollowing the best practices for implementing components, the news item data should be managed by the news feed model. Component Models can ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-components-injecting-services"}),"inject services")," as properties, and doing so allows us to directly access the dynamically updated ",Object(o.b)("inlineCode",{parentName:"p"},"newsItems")," property on the service."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/NewsFeed//NewsFeedModel.ts"',title:'"src/components/NewsFeed//NewsFeedModel.ts"'}),'import { ComponentModelBase, serializable } from "@vertigis/web/models";\nimport Collection from "esri/core/Collection";\nimport CustomDataService from "../../services/CustomDataService";\nimport { inject } from "@vertigis/web/services";\n\n@serializable\nexport default class NewsFeedModel extends ComponentModelBase {\n    @inject("custom-data-service")\n    customDataService: CustomDataService | undefined;\n\n    /**\n     * Collection of items to display in the news feed\n     */\n    get newsItems(): Collection<string> {\n        if (\n            this.customDataService &&\n            this.customDataService.newsItems !== undefined\n        ) {\n            return this.customDataService.newsItems;\n        } else {\n            this.messages.commands.ui.displayNotification.execute({\n                message:\n                    "Could not retrieve news items from dynamic data source.",\n            });\n        }\n    }\n}\n')),Object(o.b)("h2",{id:"complete-example"},"Complete Example"),Object(o.b)("p",null,"Finally, we can bring it all together, and add the news item component and styling to the application. The news feed component watches for changes on the news feed model's ",Object(o.b)("inlineCode",{parentName:"p"},"newsItems")," property, which is in turn linked to the custom service's ",Object(o.b)("inlineCode",{parentName:"p"},"newsItems")," property. In this way, we've built a service which exposes shared data to components. Multiple news feed components could be created, and they would all rely on a single copy of the news items. For more information on how the news feed component was built, see the article on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/tutorial-implement-component-with-ui"}),"custom components")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/tutorial-implement-component-participate-app-config"}),"linking app config to custom components"),"."),Object(o.b)(d.default,{mdxType:"FrameworkComponentsSnippet"}),Object(o.b)(l.a,{defaultValue:"component",values:[{label:"News Feed Component",value:"component"},{label:"News Feed Model",value:"model"},{label:"Css",value:"css"},{label:"Data Service",value:"service"},{label:"Registration",value:"index"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(o.b)(p.a,{value:"service",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/services/CustomDataService/CustomDataService.ts"',title:'"src/services/CustomDataService/CustomDataService.ts"'}),'import { ServiceBase } from "@vertigis/web/services";\nimport Collection from "esri/core/Collection";\n\nconst newsItems = [\n    "New fire hydrant installed at Main and 5th.",\n    "Pipe burst at 4th and Broadview",\n    "Fire hydrant reported as needs maintenance by citizen.",\n    "Crack in road on the Johnson Street Bridge",\n    "Fire Hydrant vandalized in front of City Hall",\n];\n\nexport default class CustomDataService extends ServiceBase {\n    private _curIndex = 0;\n\n    newsItems: Collection<string> = new Collection<string>();\n\n    private async _fetchRecentNews() {\n        // REST request for a news item would go here.\n        return newsItems[this._curIndex++ % newsItems.length];\n    }\n\n    private _startPollingForNewItems() {\n        const fetchNewsLoop = async () => {\n            const newNews = await this._fetchRecentNews();\n            const curTime = new Date().toTimeString().split("GMT")[0];\n            this.newsItems.unshift(`${curTime}- ${newNews}`);\n            setTimeout(fetchNewsLoop, Math.random() * 6000);\n        };\n\n        fetchNewsLoop();\n    }\n\n    protected _onInitialize(): Promise<void> {\n        super._onInitialize();\n        this._startPollingForNewItems();\n        return;\n    }\n}\n'))),Object(o.b)(p.a,{value:"component",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/component/NewsFeed/NewsFeed.tsx"',title:'"src/component/NewsFeed/NewsFeed.tsx"'}),'import React from "react";\nimport {\n    LayoutElement,\n    LayoutElementProperties,\n} from "@vertigis/web/components";\nimport "./NewsFeed.css";\nimport { NewsFeedModel } from ".";\nimport { useWatchCollectionAndRerender } from "@vertigis/web/ui/hooks";\nimport List from "@vertigis/web/ui/List";\nimport ListItem from "@vertigis/web/ui/ListItem";\nimport TitleBar from "@vertigis/web/ui/TitleBar";\nimport "./NewsFeed.css";\nimport Typography from "@vertigis/web/ui/Typography";\n\nexport default function NewsFeed(\n    props: LayoutElementProperties<NewsFeedModel>\n) {\n    const { model } = props;\n\n    useWatchCollectionAndRerender(model.newsItems);\n\n    return (\n        <LayoutElement {...props}>\n            <List className="news-item-list">\n                <TitleBar text="Recent News" />\n                {model.newsItems.toArray().map((news, idx) => (\n                    <ListItem key={idx}>\n                        <Typography>{news}</Typography>\n                    </ListItem>\n                ))}\n            </List>\n        </LayoutElement>\n    );\n}\n'))),Object(o.b)(p.a,{value:"model",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/component/NewsFeed/NewsFeedModel.ts"',title:'"src/component/NewsFeed/NewsFeedModel.ts"'}),'import { ComponentModelBase, serializable } from "@vertigis/web/models";\nimport Collection from "esri/core/Collection";\nimport CustomDataService from "../../services/CustomDataService";\nimport { inject } from "@vertigis/web/services";\n\n@serializable\nexport default class NewsFeedModel extends ComponentModelBase {\n    @inject("custom-data-service")\n    customDataService: CustomDataService | undefined;\n\n    /**\n     * Collection of items to display in the news feed\n     */\n    get newsItems(): Collection<string> {\n        if (\n            this.customDataService &&\n            this.customDataService.newsItems !== undefined\n        ) {\n            return this.customDataService.newsItems;\n        } else {\n            this.messages.commands.ui.displayNotification.execute({\n                message:\n                    "Could not retrieve news items from dynamic data source.",\n            });\n        }\n    }\n}\n'))),Object(o.b)(p.a,{value:"css",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css",metastring:'title="src/components/NewsFeed/NewsFeed.css"',title:'"src/components/NewsFeed/NewsFeed.css"'}),".news-item-list {\n    max-height: 15em;\n    overflow: scroll;\n    padding: 1em;\n}\n"))),Object(o.b)(p.a,{value:"index",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'}),'import CustomDataService from "./services/CustomDataService";\nimport NewsFeed, { NewsFeedModel } from "./components/NewsFeed";\nimport { LibraryRegistry } from "@vertigis/web/config";\n\nexport default function (registry: LibraryRegistry) {\n    registry.registerService({\n        // highlight-next-line\n        id: "custom-data-service",\n        getService: (config) => new CustomDataService(config),\n    });\n    registry.registerComponent({\n        name: "news-feed",\n        namespace: "your.custom.namespace",\n        getComponentType: () => NewsFeed,\n        itemType: "news-feed-model",\n        title: "News Feed",\n    });\n    registry.registerModel({\n        getModel: (config) => new NewsFeedModel(config),\n        itemType: "news-feed-model",\n    });\n}\n'))),Object(o.b)(p.a,{value:"ui",mdxType:"TabItem"},Object(o.b)("img",{src:Object(i.a)("img/web-implement-service-example.png")}))),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)(c.a,{mdxType:"UseCaseContainer"},Object(o.b)(r.a,{title:"Check out the Component Reference",description:"Take a deep dive into components in the Geocortex Web SDK",link:Object(i.a)("docs/web/sdk-components-reference"),mdxType:"UseCaseCard"}),Object(o.b)(r.a,{title:"Check out the Service Reference",description:"Take a deep dive into services in the Geocortex Web SDK",link:Object(i.a)("docs/web/sdk-services-reference"),mdxType:"UseCaseCard"}),Object(o.b)(r.a,{title:"Learn more about Referencing Services in Components",description:"Learn the dependency injection pattern for referencing services",link:Object(i.a)("docs/web/sdk-components-injecting-services"),mdxType:"UseCaseCard"})))}h.isMDXComponent=!0},309:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),s=n.n(a),o=n(129),i=n.n(o);function r(e){var t=e.children;return s.a.createElement("div",{className:i.a.root},t)}},310:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));n(311);var a=n(305),s=n(0),o=n.n(s),i=n(300),r=n(130),c=n.n(r);function m(e){var t=e.title,n=e.description,s=e.link;return o.a.createElement("div",{className:Object(i.a)("card-demo",c.a.root)},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card__header"},o.a.createElement("h3",null,t)),o.a.createElement("div",{className:"card__body"},o.a.createElement("p",null,n)),o.a.createElement("div",{className:"card__footer"},o.a.createElement(a.a,{className:"button button--secondary button--block",to:s},"Get Started"))))}}}]);