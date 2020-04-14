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
            items: [
                "web/concepts-key-concepts",
                "web/concepts-layout",
                "web/concepts-app-config",
                "web/concepts-commands-operations",
                "web/concepts-components-services",
                "web/concepts-events",
                {
                    type: "category",
                    label: "Advanced Topics",
                    items: [
                        "web/concepts-advanced-layout",
                        "web/concepts-advanced-config",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Use Cases",
            items: [
                {
                    type: "category",
                    label: "Basics",
                    items: [
                        "web/usecases-change-default-behavior",
                        "web/usecases-look-and-feel",
                        "web/usecases-internationalization",
                    ],
                },
                {
                    type: "category",
                    label: "Workflow",
                    items: [
                        "web/usecases-display-custom-form",
                        "web/usecases-implement-custom-form-elements",
                        "web/usecases-implement-custom-activity",
                        // "web/usecases-change-default-search-behavior",
                    ],
                },
                {
                    type: "category",
                    label: "Advanced",
                    items: [
                        "web/usecases-implement-command-operation",
                        "web/usecases-implement-component-with-ui",
                        "web/usecases-implement-component-participate-app-config",
                        "web/usecases-implement-service",
                        "web/usecases-implement-event",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Getting Started with the SDK",
            items: [
                "web/sdk-overview",
                "web/sdk-create-component",
                "web/sdk-create-service",
                "web/sdk-deployment",
                {
                    type: "category",
                    label: "Common Patterns",
                    items: [
                        "web/sdk-service-injection",
                        "web/sdk-component-hooks",
                        "web/sdk-reference-third-party-libraries",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "API",
            items: [
                "web/api-message-bus",
                "web/api-commands-operations",
                "web/api-events",
            ],
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
                        "workflow/usecases-web-implement-custom-activity",
                        "workflow/usecases-web-access-app-properties",
                        "workflow/usecases-web-implement-custom-form-elements",
                        "workflow/usecases-web-reference-third-party-library",
                    ],
                },
                {
                    type: "category",
                    label: "Geocortex Mobile",
                    items: [
                        "workflow/usecases-mobile-implement-custom-activity",
                        "workflow/usecases-mobile-access-app-properties",
                        "workflow/usecases-mobile-implement-custom-form-elements",
                        "workflow/usecases-mobile-reference-third-party-library",
                    ],
                },
                {
                    type: "category",
                    label: "Geocortex Workflow Server",
                    items: [
                        "workflow/usecases-server-implement-custom-activity",
                        "workflow/usecases-server-reference-third-party-library",
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
                        "workflow/sdk-web-getting-started",
                        "workflow/sdk-web-integrating-the-arcgis-api",
                        "workflow/sdk-web-activity-block-tags",
                    ],
                },
                {
                    type: "category",
                    label: ".NET Applications",
                    items: [
                        "workflow/sdk-net-getting-started-mobile",
                        "workflow/sdk-net-getting-started-server",
                        "workflow/sdk-net-register-activities",
                        "workflow/sdk-net-integrating-the-arcgis-api",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "API",
            items: ["workflow/api-server-rest"],
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
                        "mobile/usecases-change-default-behavior",
                        "mobile/usecases-look-and-feel",
                        "mobile/usecases-add-medium-layout",
                        "mobile/usecases-internationalization",
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
                        {
                            type: "link",
                            label: "Implement Custom Workflow Form Elements",
                            href:
                                "../workflow/usecases-mobile-implement-custom-form-elements",
                        },
                        {
                            type: "link",
                            label: "Implement Custom Workflow Activity",
                            href:
                                "../workflow/usecases-mobile-implement-custom-activity",
                        },
                        "mobile/usecases-change-default-search-behavior",
                    ],
                },
                {
                    type: "category",
                    label: "Advanced",
                    items: [
                        "mobile/usecases-implement-command-operation",
                        "mobile/usecases-implement-component-with-ui",
                        "mobile/usecases-implement-component-participate-app-config",
                        "mobile/usecases-implement-service",
                        "mobile/usecases-implement-event",
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
                "mobile/concepts-components-services",
                "mobile/concepts-events",
                {
                    type: "category",
                    label: "Advanced Topics",
                    items: [
                        "mobile/concepts-advanced-layout",
                        "mobile/concepts-advanced-config",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Getting Started with the SDK",
            items: [
                "mobile/sdk-quick-start",
                "mobile/sdk-samples",
                {
                    type: "category",
                    label: "Common Patterns",
                    items: [
                        "mobile/sdk-dependency-injection",
                        "mobile/sdk-viewmodel-helper-class",
                        "mobile/sdk-memory-leaks",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "API",
            items: [
                "mobile/api-overview",
                "mobile/api-commands-operations",
                "mobile/api-events",
            ],
        },
    ],
};
