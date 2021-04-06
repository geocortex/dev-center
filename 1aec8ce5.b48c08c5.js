(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return m})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return c}));var o=n(3),r=(n(0),n(243));const a={title:"Workflow Form Element Reference",sidebar_label:"Form Element Reference",description:"Geocortex Workflow - Reference for workflow form elements for web applications"},m={unversionedId:"workflow/sdk-mobile-form-reference",id:"workflow/sdk-mobile-form-reference",isDocsHomePage:!1,title:"Workflow Form Element Reference",description:"Geocortex Workflow - Reference for workflow form elements for web applications",source:"@site/docs/workflow/sdk-mobile-form-reference.mdx",slug:"/workflow/sdk-mobile-form-reference",permalink:"/docs/workflow/sdk-mobile-form-reference",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/sdk-mobile-form-reference.mdx",version:"current",sidebar_label:"Form Element Reference",sidebar:"workflow",previous:{title:"Workflow Activity Reference",permalink:"/docs/workflow/sdk-mobile-activity-reference"},next:{title:"Reference a Third Party Library through the Geocortex Mobile SDK",permalink:"/docs/workflow/sdk-mobile-reference-third-party-library"}},i=[{value:"Registering Form Elements",id:"registering-form-elements",children:[]},{value:"Using Form Elements",id:"using-form-elements",children:[]},{value:"Raising Form Events",id:"raising-form-events",children:[]},{value:"Access Properties of Custom Form Elements",id:"access-properties-of-custom-form-elements",children:[]}],s={toc:i};function c({components:e,...t}){return Object(r.b)("wrapper",Object(o.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In the Geocortex Workflow .NET SDK, form elements are represented by classes that extend the ",Object(r.b)("inlineCode",{parentName:"p"},"FormComponent")," class."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cs"}),'namespace App1.Workflow\n{\n    class CustomFormElement : FormComponent\n    {\n        public CustomFormElement(Geocortex.Workflow.Runtime.Definition.Forms.Element element, string name)\n            : base (element, name)\n        {\n            _view = new Label(){\n                Text = "I\'m a custom form element"\n            }\n\n            Add(new GenericComponent(_view));\n        }\n    }\n}\n')),Object(r.b)("h2",{id:"registering-form-elements"},"Registering Form Elements"),Object(r.b)("p",null,"Form Elements must be registered through a ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/workflow/sdk-mobile-activity-reference#registering-activities"}),"custom workflow activity that extends ",Object(r.b)("inlineCode",{parentName:"a"},"RegisterCustomFormElementBase")),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cs"}),'[assembly: Export(typeof(RegisterCustomFormElements))]\nnamespace App1.Workflow\n{\n    class RegisterCustomFormElements : RegisterCustomFormElementBase\n    {\n        public const string Action = "CustomFormElement";\n\n        public override Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            Register("CustomFormElement", typeof(CustomFormElement), context);\n            return Task.FromResult((IDictionary<string, object>)new Dictionary<string, object>());\n        }\n    }\n}\n')),Object(r.b)("h2",{id:"using-form-elements"},"Using Form Elements"),Object(r.b)("p",null,"Custom form elements can be used in a form through the special ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/form-elements/custom.htm#Custom_Form_Elements%3FTocPath%3DForms%7CForm%2520Element%2520Reference%7CCustom%2520Form%2520Elements%7C_____0"}),'"custom" form element'),". This form element displays custom form elements by referencing them by the ",Object(r.b)("inlineCode",{parentName:"p"},"id")," they were registered with."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Custom form elements will ",Object(r.b)("strong",{parentName:"p"},"only")," be available to a workflow if the form element registration activity is run beforehand. It's best practice to run the form element registration activity at the start of a workflow."))),Object(r.b)("h2",{id:"raising-form-events"},"Raising Form Events"),Object(r.b)("p",null,"Geocortex Workflow form elements can raise ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/forms.htm#Events%3FTocPath%3DForms%7COverview%2520of%2520Forms%7CEvents%7C_____0"}),"events"),". A custom form element can also raise events, including a custom event type."),Object(r.b)("p",null,"Events are raised through the ",Object(r.b)("inlineCode",{parentName:"p"},"OnEventRaised")," method of the form component. The following custom form elements demonstrates how various form events can be raised."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cs"}),'namespace App1.Workflow\n{\n    class CustomFormComponent : FormComponent\n    {\n        private readonly StackLayout _view;\n\n        public CustomFormComponent(Geocortex.Workflow.Runtime.Definition.Forms.Element element, string name)\n            : base (element, name)\n        {\n            _view = new StackLayout();\n\n            _view.Children.Add(new EnhancedButton() {\n                Command = new Command(RaiseClickedEvent),\n                Text = "Raise Clicked Event"\n            });\n\n            _view.Children.Add(new EnhancedButton() {\n                Command = new Command(RaiseChangedEvent),\n                Text = "Raise Changed Event"\n            });\n\n            _view.Children.Add(new EnhancedButton() {\n                Command = new Command(RaiseCustomEvent),\n                Text = "Raise Custom Event"\n            });\n\n            Add(new GenericComponent(_view));\n        }\n\n        private void RaiseClickedEvent()\n        {\n            OnEventRaised(new Event()\n            {\n                Type = Event.CLICKED\n            });\n        }\n\n        private void RaiseChangedEvent()\n        {\n            OnEventRaised(new Event()\n            {\n                Type = Event.CHANGED\n            });\n        }\n\n        private void RaiseCustomEvent()\n        {\n            OnEventRaised(new Event()\n            {\n                Type = Event.CUSTOM,\n                Argument = "Custom Argument"\n            });\n        }\n    }\n}\n')),Object(r.b)("h2",{id:"access-properties-of-custom-form-elements"},"Access Properties of Custom Form Elements"),Object(r.b)("p",null,"A custom form element may produce a value that a workflow needs to access at runtime. You can set a property on the ",Object(r.b)("inlineCode",{parentName:"p"},"this.element")," object to expose that value to the form."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cs"}),'namespace App1.Workflow\n{\n    class CustomFormComponent : FormComponent\n    {\n        private readonly View _view;\n\n        public CustomFormComponent(Geocortex.Workflow.Runtime.Definition.Forms.Element element, string name)\n            : base (element, name)\n        {\n            _view = new Label() {\n                Text = "This form element has a static value of 42"\n            };\n\n            // highlight-next-line\n            this.Element.Value = 42;\n\n            Add(new GenericComponent(_view));\n        }\n    }\n}\n')),Object(r.b)("p",null,"You can then use the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/get-form-element-property.htm"}),"Get Form Element Property")," activity to access the ",Object(r.b)("inlineCode",{parentName:"p"},"value")," property, along with ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/form-elements/custom.htm#Custom_Form_Element_Properties%3FTocPath%3DForms%7CForm%2520Element%2520Reference%7CCustom%2520Form%2520Elements%7C_____1"}),"other properties supported by custom form elements"),"."))}c.isMDXComponent=!0},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=o,b=p["".concat(m,".").concat(u)]||p[u]||f[u]||a;return n?r.a.createElement(b,i(i({ref:t},c),{},{components:n})):r.a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,m=new Array(a);m[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,m[1]=i;for(var c=2;c<a;c++)m[c]=n[c];return r.a.createElement.apply(null,m)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);