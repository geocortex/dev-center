module.exports = {
    title: "VertiGIS Studio Developer Center",
    tagline: "by developers, for developers",
    url: "https://developers.vertigisstudio.com",
    baseUrl: "/",
    favicon: "img/favicon.ico",
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
                alt: "VertiGIS Logo",
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
            ],
        },
        footer: {
            style: "dark",
            copyright: `Copyright © ${new Date().getFullYear()} VertiGIS North America Ltd. All rights reserved.`,
            links: [
                {
                    title: "VertiGIS Studio Apps",
                    items: [
                        {
                            label: "VertiGIS Studio Web",
                            to: "https://apps.vertigisstudio.com/webviewer/designer/",
                        },
                        {
                            label: "VertiGIS Studio Mobile",
                            to: "https://apps.vertigisstudio.com/mobileviewer/designer/",
                        },
                        {
                            label: "VertiGIS Studio Workflow",
                            to: "https://apps.vertigisstudio.com/workflow/designer/",
                        },
                        {
                            label: "VertiGIS Studio Reporting",
                            to: "https://apps.vertigisstudio.com/reporting/designer/",
                        },
                        {
                            label: "VertiGIS Studio Printing",
                            to: "https://apps.vertigisstudio.com/printing/designer/",
                        },
                        {
                            label: "VertiGIS Studio Inline",
                            to: "https://apps.vertigisstudio.com/inline/designer/",
                        },
                        {
                            label: "VertiGIS Studio Item Manager",
                            to: "https://apps.vertigisstudio.com/itemmanager/",
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
                            label: "VertiGIS Studio Documentation Center",
                            to: "https://docs.geocortex.com",
                        },
                        {
                            label: "VertiGIS.com",
                            to: "https://vertigis.com",
                        },
                    ],
                },
                {
                    title: "Legal",
                    items: [
                        {
                            label: "Terms",
                            to: "https://www.vertigisstudio.com/legal/#licensing-terms-of-use",
                        },
                        {
                            label: "Privacy",
                            to: "https://www.vertigisstudio.com/legal/#privacy-statement",
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
};
