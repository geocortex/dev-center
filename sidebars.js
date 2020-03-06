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
            items: ["mobile/use-cases/placeholder"],
        },
        {
            type: "category",
            label: "Concepts",
            items: ["mobile/concepts/layout"],
        },
        {
            type: "category",
            label: "Getting Started with the SDK",
            items: ["mobile/getting-started/installation"],
        },
    ],
};
