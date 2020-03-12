/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
    web: ["web/overview"],
    workflow: ["workflow/overview"],
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
                        "mobile/use-cases/look-feel",
                        "mobile/use-cases/change-default-behaviour",
                    ],
                },
                {
                    type: "category",
                    label: "Workflow",
                    items: [
                        "mobile/use-cases/change-default-search-behaviour",
                        "mobile/use-cases/display-custom-form",
                        "mobile/use-cases/implement-custom-workflow-form-element",
                        "mobile/use-cases/implement-workflow-activity",
                    ],
                },
                {
                    type: "category",
                    label: "Advanced",
                    items: [
                        "mobile/use-cases/implement-command-operation",
                        "mobile/use-cases/implement-component-with-ui",
                        "mobile/use-cases/implement-background-service",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Concepts",
            items: [
                "mobile/concepts/key-concepts",
                "mobile/concepts/layout",
                "mobile/concepts/app-config",
                "mobile/concepts/commands-operations",
                {
                    type: "category",
                    label: "Advanced Topics",
                    items: [
                        "mobile/concepts/advanced-layout",
                        "mobile/concepts/advanced-config",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Getting Started with the SDK",
            items: [
                "mobile/getting-started/quick-start",
                "mobile/getting-started/samples",
                "mobile/getting-started/adding-assemblies",
                "mobile/getting-started/internationalization",
            ],
        },
        {
            type: "category",
            label: "API",
            items: ["mobile/api/overview", "mobile/api/commands-operations"],
        },
    ],
};
