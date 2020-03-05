const title = 'Developer Center' 
module.exports = {
  title,
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'geocortex', // Usually your GitHub org/user name.
  projectName: 'Geocortex Developer Center', // Usually your repo name.
  themeConfig: {
    navbar: {
      title,
      logo: {
        alt: 'Geocortex Logo',
        src: 'img/logo.png',
      },
      links: [
        {to: 'docs/doc1', label: 'Docs', position: 'left'}
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/geocortex/dev-center/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
