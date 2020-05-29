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
                        "web/configuration-layout-getting-started",
                        "web/configuration-layout-reference",
                        "web/configuration-advanced-model-binding",
                    ],
                },
                {
                    type: "category",
                    label: "App Config",
                    items: [
                        "web/configuration-app-config-getting-started",
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
            label: "Geocortex Workflow",
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
                "web/sdk-deployment",
                {
                    type: "category",
                    label: "Components",
                    items: [
                        "web/sdk-components-overview",
                        "web/sdk-components-create",
                        "web/sdk-components-reference",
                        "web/sdk-components-hooks",
                        "web/sdk-components-ui-context",
                        "web/sdk-components-commands-operations",
                        "web/sdk-components-interactions",
                        "web/sdk-components-injecting-services",
                        "web/sdk-components-styling",
                        "web/sdk-components-internationalization",
                    ],
                },
                {
                    type: "category",
                    label: "Services",
                    items: [
                        "web/sdk-services-overview",
                        "web/sdk-services-create",
                        "web/sdk-services-reference",
                        "web/sdk-services-commands-operations",
                        "web/sdk-services-injecting-services",
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
                "web/sdk-internationalization",
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
                        "web/tutorial-command-can-execute",
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
            label: "Geocortex Workflow TypeScript SDK",
            items: [
                "workflow/sdk-web-overview",
                "workflow/sdk-web-create-activity",
                "workflow/sdk-web-activity-reference",
                "workflow/sdk-web-form-reference",
                "workflow/sdk-web-integrating-the-arcgis-api",
                "workflow/sdk-web-activity-block-tags",
                "workflow/sdk-web-reference-third-party-library",
                {
                    type: "category",
                    label: "Tutorials",
                    items: [
                        "workflow/tutorial-web-calculate-logarithm-activity",
                        "workflow/tutorial-web-add-layer-to-map",
                        "workflow/tutorial-web-implement-star-rating-form-element",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Geocortex Workflow .NET SDK",
            items: [
                "workflow/sdk-net-overview",
                "workflow/sdk-net-register-activities",
                "workflow/sdk-net-integrating-the-arcgis-api",
                {
                    type: "category",
                    label: "Geocortex Mobile",
                    items: [
                        "workflow/sdk-mobile-overview",
                        "workflow/sdk-mobile-create-activity",
                        "workflow/sdk-mobile-activity-reference",
                        "workflow/sdk-mobile-form-reference",
                        "workflow/sdk-mobile-reference-third-party-library",
                        {
                            type: "category",
                            label: "Tutorials",
                            items: [
                                "workflow/tutorial-mobile-calculate-logarithm-activity",
                                "workflow/tutorial-mobile-show-map-callout",
                                "workflow/tutorial-mobile-activity-indicator-form-element",
                            ],
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Geocortex Workflow Server",
                    items: [
                        "workflow/sdk-server-overview",
                        "workflow/sdk-server-create-activity",
                        "workflow/sdk-server-reference-third-party-library",
                        "workflow/tutorial-server-calculate-logarithm-activity",
                    ],
                },
            ],
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
                        "mobile/configuration-layout-getting-started",
                        "mobile/configuration-layout-reference",
                        "mobile/configuration-advanced-model-binding",
                    ],
                },
                {
                    type: "category",
                    label: "App Config",
                    items: [
                        "mobile/configuration-app-config-getting-started",
                        "mobile/configuration-app-config-reference",
                        "mobile/configuration-theme",
                    ],
                },
                "mobile/configuration-commands-operations",
                {
                    type: "category",
                    label: "Tutorials",
                    items: [
                        "mobile/tutorial-configure-button-click",
                        "mobile/tutorial-change-default-behavior",
                        "mobile/tutorial-customize-application-theme",
                        "mobile/tutorial-add-medium-layout",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Geocortex Workflow",
            items: [
                "mobile/tutorial-run-workflow-app-config",
                "mobile/tutorial-display-custom-form",
                "mobile/tutorial-change-default-map-click-behavior",
                "mobile/tutorial-implement-custom-form-elements",
                "mobile/tutorial-implement-custom-activity",
            ],
        },
        {
            type: "category",
            label: "Geocortex Mobile SDK",
            items: [
                "mobile/sdk-overview",
                "mobile/sdk-edit-layout-app-config",
                "mobile/sdk-quickstart-reference",
                "mobile/sdk-samples",
                "mobile/sdk-deployment",
                "mobile/sdk-commands-operations",
                {
                    type: "category",
                    label: "Components",
                    items: [
                        "mobile/sdk-components-overview",
                        "mobile/sdk-components-create",
                        "mobile/sdk-components-reference",
                        "mobile/sdk-components-viewmodel-helper-class",
                        "mobile/sdk-components-styling",
                        "mobile/sdk-components-internationalization",
                    ],
                },
                {
                    type: "category",
                    label: "Services",
                    items: [
                        "mobile/sdk-services-overview",
                        "mobile/sdk-services-create",
                        "mobile/sdk-services-reference",
                    ],
                },
                {
                    type: "category",
                    label: "Events",
                    items: [
                        "mobile/sdk-events-overview",
                        "mobile/sdk-events-reference",
                    ],
                },
                "mobile/sdk-dependency-injection",
                "mobile/sdk-component-service-interactions",
                "mobile/sdk-internationalization",
                "mobile/sdk-memory-leaks",
                {
                    type: "category",
                    label: "Tutorials",
                    items: [
                        "mobile/tutorial-implement-command-operation",
                        "mobile/tutorial-implement-component-with-ui",
                        "mobile/tutorial-implement-component-participate-app-config",
                        "mobile/tutorial-implement-service-fetch-dynamic-data",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "API",
            items: ["mobile/api-commands-operations-events"],
        },
    ],
};
