/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
    web: [
        "web/overview",
        "web/key-concepts",
        {
            type: "category",
            label: "Configuration",
            items: [
                {
                    type: "category",
                    label: "Layout",
                    items: [
                        "web/configuration-layout",
                        "web/configuration-layout-reference",
                        "web/configuration-advanced-model-binding",
                    ],
                },
                {
                    type: "category",
                    label: "App Config",
                    items: [
                        "web/configuration-app-config",
                        "web/configuration-app-config-reference",
                        "web/configuration-theme",
                    ],
                },
                "web/configuration-commands-operations",
                {
                    type: "category",
                    label: "Tutorials",
                    items: [
                        "web/tutorial-configure-button-click",
                        "web/tutorial-change-default-behavior",
                        "web/tutorial-customize-application-theme",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Workflow",
            items: [
                "web/tutorial-run-workflow-app-config",
                "web/tutorial-display-custom-form",
                "web/tutorial-change-default-map-click-behavior",
                "web/tutorial-implement-custom-activity",
                "web/tutorial-implement-custom-form-elements",
            ],
        },
        {
            type: "category",
            label: "Geocortex Web SDK",
            items: [
                "web/sdk-overview",
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
                        "web/sdk-components-referencing-services",
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
                        "web/sdk-services-referencing-services",
                    ],
                },
                {
                    type: "category",
                    label: "Events",
                    items: [
                        "web/sdk-events-overview",
                        "web/sdk-events-reference",
                    ],
                },
                "web/sdk-serializable-properties",
                "web/sdk-language-strings",
                "web/sdk-deployment",
                "web/sdk-reference-third-party-libraries",
                {
                    type: "category",
                    label: "Tutorials",
                    items: [
                        "web/tutorial-implement-command-operation",
                        "web/tutorial-implement-component-with-ui",
                        "web/tutorial-import-map-model",
                        "web/tutorial-implement-component-participate-app-config",
                        "web/tutorial-events-subscribe",
                        "web/tutorial-internationalization",
                        "web/tutorial-service-dynamic-data",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "API",
            items: ["web/api-commands-operations-events", "web/api-components"],
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
