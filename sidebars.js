/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
    web: [
        "web/overview",
        {
            type: "category",
            label: "Concepts",
            items: ["web/concepts-commands-operations"],
        },
    ],
    workflow: [
        "workflow/overview",
        {
            type: "category",
            label: "Use Cases",
            items: [
                {
                    type: "category",
                    label: "Web Applications",
                    items: [
                        "workflow/implement-custom-activity-web",
                        "workflow/access-app-properties-web",
                        "workflow/implement-custom-form-elements-web",
                        "workflow/reference-third-party-library-web",
                    ],
                },
                {
                    type: "category",
                    label: "Geocortex Mobile",
                    items: [
                        "workflow/implement-custom-activity-mobile",
                        "workflow/access-app-properties-mobile",
                        "workflow/implement-custom-form-elements-mobile",
                        "workflow/reference-third-party-library-mobile",
                    ],
                },
                {
                    type: "category",
                    label: "Geocortex Workflow Server",
                    items: [
                        "workflow/implement-custom-activity-server",
                        "workflow/reference-third-party-library-server",
                    ],
                },
            ],
        },
        "workflow/concepts-key-concepts",
        {
            type: "category",
            label: "Getting Started with the SDK",
            items: [
                "workflow/sdk-overview",
                {
                    type: "category",
                    label: "Web Applications",
                    items: [
                        "workflow/getting-started-web",
                        "workflow/integrating-the-esri-api-web",
                        "workflow/typescript-activity-block-tags",
                    ],
                },
                {
                    type: "category",
                    label: ".NET Applications",
                    items: [
                        "workflow/getting-started-mobile",
                        "workflow/getting-started-server",
                        "workflow/register-dotnet-activities",
                        "workflow/integrating-the-esri-api-dotnet",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "API",
            items: ["workflow/workflow-server-api"],
        },
    ],
    mobile: [
        "mobile/overview",
        {
            type: "category",
            label: "Use Cases",
            items: [
                {
                    type: "category",
                    label: "Basics",
                    items: [
                        "mobile/change-default-behavior",
                        "mobile/look-and-feel",
                        "mobile/add-medium-layout",
                        "mobile/internationalization",
                    ],
                },
                {
                    type: "category",
                    label: "Workflow",
                    items: [
                        {
                            type: "link",
                            label: "Display a Custom Form",
                            href:
                                "https://docs.geocortex.com/mobileviewer/latest/admin-help/Default.htm#gmv/designer/create-your-first-app.htm#Integrat",
                        },
                        "mobile/change-default-search-behavior",
                        {
                            type: "link",
                            label: "Implement Custom Workflow Form Elements",
                            href: "../workflow/implement-custom-form-elements-mobile",
                        },
                        {
                            type: "link",
                            label: "Implement Custom Workflow Activity",
                            href: "../workflow/implement-custom-activity-mobile",
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Advanced",
                    items: [
                        "mobile/implement-command-operation",
                        "mobile/implement-component-with-ui",
                        "mobile/implement-component-participate-app-config",
                        "mobile/implement-service",
                        "mobile/implement-event",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Concepts",
            items: [
                "mobile/concepts-key-concepts",
                "mobile/concepts-layout",
                "mobile/concepts-app-config",
                "mobile/concepts-commands-operations",
                "mobile/concepts-events",
                "mobile/concepts-components-services",
                {
                    type: "category",
                    label: "Advanced Topics",
                    items: ["mobile/concepts-advanced-layout", "mobile/concepts-advanced-config"],
                },
            ],
        },
        {
            type: "category",
            label: "Getting Started with the SDK",
            items: [
                "mobile/quick-start",
                "mobile/samples",
                {
                    type: "category",
                    label: "Common Mobile SDK Patterns",
                    items: [
                        "mobile/dependency-injection",
                        "mobile/viewmodel-helper-class",
                        "mobile/memory-leaks",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "API",
            items: ["mobile/api-overview", "mobile/api-commands-operations", "mobile/api-events"],
        },
    ],
};
