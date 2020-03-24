const title = "Developer Center";
module.exports = {
    title,
    tagline: "by developers, for developers",
    url: "https://geocortex.github.io/",
    baseUrl: "/dev-center/",
    favicon: "img/favicon.png",
    organizationName: "geocortex", // Usually your GitHub org/user name.
    projectName: "dev-center", // Usually your repo name.
    themeConfig: {
        // Config lives at https://github.com/algolia/docsearch-configs/blob/master/configs/geocortex.json
        algolia: {
            apiKey: "cdd20750dc409ec43b89e692fcbb72c",
            indexName: "geocortex",
        },
        navbar: {
            title,
            logo: {
                alt: "Geocortex Logo",
                src: "img/logo.png",
            },
            links: [
                { to: "docs/web/overview", label: "Web", position: "left" },
                { to: "docs/mobile/overview", label: "Mobile", position: "left" },
                { to: "docs/workflow/overview", label: "Workflow", position: "left" },
            ],
        },
        footer: {
            style: "dark",
            copyright: `Copyright © ${new Date().getFullYear()} Latitude Geographics Group Ltd. All rights reserved.`,
            links: [
                {
                    title: "About",
                    items: [
                        {
                            label: "Geocortex.com",
                            to: "https://geocortex.com",
                        },
                        {
                            label: "Geocortex Documentation Center",
                            to: "https://docs.geocortex.com",
                        },
                        {
                            label: "GitHub",
                            to: "https://github.com/geocortex/dev-center",
                        },
                    ],
                },
                {
                    title: "Geocortex Apps",
                    items: [
                        {
                            label: "Geocortex Web",
                            to: "https://apps.geocortex.com/webviewer/designer/",
                        },
                        {
                            label: "Geocortex Mobile",
                            to: "https://apps.geocortex.com/mobileviewer/designer/",
                        },
                        {
                            label: "Geocortex Workflow",
                            to: "https://apps.geocortex.com/workflow/designer/",
                        },
                    ],
                },
            ],
        },
        prism: {
            additionalLanguages: ["csharp"],
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    editUrl: "https://github.com/geocortex/dev-center/edit/master/",
                    sidebarPath: require.resolve("./sidebars.js"),
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
};
