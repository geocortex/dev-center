module.exports = {
    title: "Geocortex Developer Center",
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
            title: "Developer Center",
            logo: {
                alt: "Geocortex Logo",
                src: "img/logo.png",
            },
            items: [
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
                {
                    to: "docs/reporting/overview",
                    label: "Reporting",
                    position: "left",
                    activeBasePath: "docs/reporting",
                },
                {
                    to: "blog",
                    label: "Blog",
                    position: "left",
                    activeBasePath: "blog",
                },
                {
                    type: "localeDropdown",
                    position: "left",
                },
            ],
        },
        footer: {
            style: "dark",
            copyright: `Copyright © ${new Date().getFullYear()} VertiGIS North America Ltd. All rights reserved.`,
            links: [
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
                        {
                            label: "Geocortex Reporting",
                            to:
                                "https://apps.geocortex.com/reporting/designer/",
                        },
                        {
                            label: "Geocortex Printing",
                            to: "https://apps.geocortex.com/printing/designer/",
                        },
                        {
                            label: "Geocortex Inline",
                            to: "https://apps.geocortex.com/inline/designer/",
                        },
                        {
                            label: "Geocortex Item Manager",
                            to: "https://apps.geocortex.com/itemmanager/",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "Blog",
                            to: "blog",
                        },
                        {
                            label: "GitHub",
                            to: "https://github.com/geocortex/dev-center",
                        },
                        {
                            label: "Geocortex Documentation Center",
                            to: "https://docs.geocortex.com",
                        },
                        {
                            label: "Geocortex.com",
                            to: "https://geocortex.com",
                        },
                    ],
                },
                {
                    title: "Legal",
                    items: [
                        {
                            label: "Terms",
                            to:
                                "https://www.geocortex.com/legal/#licensing-terms-of-use",
                        },
                        {
                            label: "Privacy",
                            to:
                                "https://www.geocortex.com/legal/#privacy-statement",
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
    presets: [
        [
            require.resolve("@docusaurus/preset-classic"),
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
    i18n: {
        defaultLocale: "en",
        locales: ["en", "de"],
    },
};
