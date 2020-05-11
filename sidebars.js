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
        "mobile/key-concepts",
        {
            type: "category",
            label: "Configuration",
            items: [
                {
                    type: "category",
                    label: "Layout",
                    items: [
                        "mobile/configuration-layout",
                        "mobile/configuration-layout-reference",
                        "mobile/configuration-advanced-model-binding",
                    ],
                },
                {
                    type: "category",
                    label: "App Config",
                    items: [
                        "mobile/configuration-app-config",
                        "mobile/configuration-app-config-reference",
                        "mobile/configuration-theme",
                    ],
                },
                "mobile/configuration-commands-operations",
                "mobile/configuration-components-services",
                "mobile/configuration-events",
                {
                    type: "category",
                    label: "Tutorials",
                    items: [
                        "mobile/tutorial-configure-button-click",
                        "mobile/tutorial-change-default-behavior",
                        "mobile/tutorial-customize-application-theme",
                        "mobile/tutorial-add-medium-layout",
                        "mobile/tutorial-internationalization",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Workflow",
            items: [
                "mobile/tutorial-display-custom-form",
                "mobile/tutorial-implement-custom-form-elements",
                "mobile/tutorial-implement-custom-activity",
                "mobile/tutorial-change-default-map-click-behavior",
            ],
        },
        {
            type: "category",
            label: "Geocortex Mobile SDK",
            items: [
                "mobile/sdk-overview",
                "mobile/sdk-getting-started",
                "mobile/sdk-edit-layout-app-config",
                {
                    type: "category",
                    label: "Components",
                    items: [
                        "mobile/sdk-components-overview",
                        "mobile/sdk-create-component",
                        "mobile/sdk-component-reference",
                        "mobile/sdk-viewmodel-helper-class",
                    ],
                },
                {
                    type: "category",
                    label: "Services",
                    items: [
                        "mobile/sdk-services-overview",
                        "mobile/sdk-create-service",
                        "mobile/sdk-service-reference",
                    ],
                },
                "mobile/sdk-advanced-quickstart",
                "mobile/sdk-deployment",
                "mobile/sdk-samples",
                {
                    type: "category",
                    label: "Common Patterns",
                    items: [
                        "mobile/sdk-dependency-injection",
                        "mobile/sdk-memory-leaks",
                    ],
                },
                {
                    type: "category",
                    label: "Tutorials",
                    items: [
                        "mobile/tutorial-implement-command-operation",
                        "mobile/tutorial-implement-component-with-ui",
                        "mobile/tutorial-implement-component-participate-app-config",
                        "mobile/tutorial-implement-service",
                        "mobile/tutorial-implement-event",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "API",
            items: [
                "mobile/api-overview",
                "mobile/api-commands-operations-events",
                "mobile/api-mobile-ui-elements",
            ],
        },
    ],
};
