/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
    web: ["web/overview"],
    workflow: [
        "workflow/overview",
        {
            type: "category",
            label: "Use Cases",
            items: [
                "workflow/implement-custom-form-elements",
                "workflow/implement-custom-activity",
                "workflow/reference-third-party-library",
            ],
        },
        {
            type: "category",
            label: "Concepts",
            items: [
                "workflow/concepts-key-concepts",
                "workflow/concepts-activity-packs",
                "workflow/concepts-workflow-activities-form-elements",
                "workflow/concepts-workflow-items",
                "workflow/concepts-server-client-workflows",
            ],
        },
        {
            type: "category",
            label: "Getting Started with the SDK",
            items: [
                "workflow/sdk-overview",
                "workflow/getting-started-web",
                "workflow/getting-started-dotnet",
                "workflow/getting-started-geocortex-web",
                "workflow/getting-started-wab",
                "workflow/getting-started-mobile",
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
                        "mobile/change-default-behaviour",
                        "mobile/look-and-feel",
                        "mobile/add-medium-layout",
                        "mobile/internationalization",
                    ],
                },
                {
                    type: "category",
                    label: "Workflow",
                    items: [
                        "mobile/display-custom-form",
                        "mobile/change-default-search-behaviour",
                        "mobile/implement-custom-workflow-form-element",
                        "mobile/implement-workflow-activity",
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
