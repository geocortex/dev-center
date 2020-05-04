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
                "web/concepts-advanced-app-config",
            ],
        },
        {
            type: "category",
            label: "Use Cases",
            items: [
                "web/usecases-run-command-with-button",
                "web/usecases-change-default-behavior",
                "web/usecases-look-and-feel",
                {
                    type: "category",
                    label: "Configuring Workflows",
                    items: [
                        "web/usecases-run-workflow-app-config",
                        "web/usecases-display-custom-form",
                        "web/usecases-implement-custom-form-elements",
                        "web/usecases-implement-custom-activity",
                        "web/usecases-change-default-map-click-behavior",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Geocortex Web SDK",
            items: [
                "web/sdk-overview",
                "web/sdk-framework-overview",
                "web/sdk-commands-operations",
                {
                    type: "category",
                    label: "Components",
                    items: [
                        "web/sdk-components-overview",
                        "web/sdk-create-component",
                        "web/sdk-component-reference",
                        "web/sdk-component-hooks",
                        "web/sdk-ui-context",
                        "web/sdk-components-commands-operations",
                        "web/sdk-component-interactions",
                        "web/sdk-service-injection",
                        "web/sdk-component-styling",
                        "web/sdk-components-internationalization",
                    ],
                },
                {
                    type: "category",
                    label: "Services",
                    items: [
                        "web/sdk-services-overview",
                        "web/sdk-create-service",
                        "web/sdk-service-reference",
                        "web/sdk-services-commands-operations",
                        "web/sdk-service-injection",
                    ],
                },
                {
                    type: "category",
                    label: "Events",
                    items: [
                        "web/concepts-events",
                        "web/sdk-events-create",
                        "web/sdk-events-reference",
                    ],
                },
                "web/sdk-serializable-properties",
                "web/sdk-language-strings",
                "web/sdk-deployment",
                "web/sdk-reference-third-party-libraries",
            ],
        },
        {
            type: "category",
            label: "SDK Use Cases",
            items: [
                "web/usecases-implement-command-operation",
                "web/usecases-implement-component-with-ui",
                "web/usecases-import-map-model",
                "web/usecases-implement-component-participate-app-config",
                "web/usecases-internationalization",
                "web/usecases-service-dynamic-data",
            ],
        },
        {
            type: "category",
            label: "API",
            items: [
                {
                    type: "category",
                    label: "Layout",
                    items: [
                        "web/api-component-models",
                        "web/api-layout-core-components",
                        "web/api-layout-attribute-reference",
                    ],
                },
                "web/api-commands-operations-events",
                "web/api-components",
            ],
        },
    ],
    workflow: [
        "workflow/overview",
        "workflow/concepts-key-concepts",
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
        {
            type: "category",
            label: "Geocortex Workflow SDK",
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
                    label: "Advanced Concepts",
                    items: [
                        "mobile/concepts-advanced-layout",
                        "mobile/concepts-advanced-app-config",
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
                        "mobile/usecases-display-custom-form",
                        "mobile/usecases-implement-custom-form-elements",
                        "mobile/usecases-implement-custom-activity",
                        "mobile/usecases-change-default-map-click-behavior",
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
            label: "Geocortex Mobile SDK",
            items: [
                {
                    type: "category",
                    label: "Quickstart",
                    items: [
                        "mobile/sdk-getting-started",
                        "mobile/sdk-edit-layout-app-config",
                        "mobile/sdk-create-component",
                        "mobile/sdk-create-service",
                        "mobile/sdk-deployment",
                        "mobile/sdk-advanced-quickstart",
                    ],
                },
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
                "mobile/api-layout",
                "mobile/api-commands-operations-events",
                "mobile/api-mobile-ui-elements",
            ],
        },
    ],
};
