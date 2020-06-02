const title = "Developer Center";
module.exports = {
    title,
    tagline: "by developers, for developers",
    url: "https://developers.geocortex.com",
    baseUrl: "/",
    favicon: "img/favicon.png",
    organizationName: "geocortex", // Usually your GitHub org/user name.
    projectName: "dev-center", // Usually your repo name.
    themeConfig: {
        // Config lives at https://github.com/algolia/docsearch-configs/blob/master/configs/geocortex.json
        algolia: {
            apiKey: "fcdd20750dc409ec43b89e692fcbb72c",
            indexName: "geocortex",
        },
        navbar: {
            title,
            logo: {
                alt: "Geocortex Logo",
                src: "img/logo.png",
            },
            links: [
                {
                    to: "docs/web/overview",
                    label: "Web",
                    position: "left",
                    activeBasePath: "docs/web",
                },
                {
                    to: "docs/mobile/overview",
                    label: "Mobile",
                    position: "left",
                    activeBasePath: "docs/mobile",
                },
                {
                    to: "docs/workflow/overview",
                    label: "Workflow",
                    position: "left",
                    activeBasePath: "docs/workflow",
                },
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
                            to:
                                "https://apps.geocortex.com/webviewer/designer/",
                        },
                        {
                            label: "Geocortex Mobile",
                            to:
                                "https://apps.geocortex.com/mobileviewer/designer/",
                        },
                        {
                            label: "Geocortex Workflow",
                            to: "https://apps.geocortex.com/workflow/designer/",
                        },
                    ],
                },
            ],
        },
        // Image used for og:image meta tag - see https://ogp.me/
        image: "img/og-image.png",
        prism: {
            additionalLanguages: ["csharp"],
        },
        gtag: {
            trackingID: "UA-103604191-6",
            anonymizeIP: true,
        },
    },
    plugins: [require.resolve("@docusaurus/plugin-google-gtag")],
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    editUrl:
                        "https://github.com/geocortex/dev-center/edit/master/",
                    sidebarPath: require.resolve("./sidebars.js"),
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
};
