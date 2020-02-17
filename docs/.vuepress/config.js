const markdownParser = require('./markdownParser')
const path = require('path');
module.exports = {
  title: 'One Pan Man',
  base: '/One Pan Man/documentation/',
  markdown: {
    config: markdownParser
  },
  configureWebpack: (config, isServer) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../../src')
  },
  head: [
    ['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/icon?family=Material+Icons` }],
    ['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons` }],
    ['link', { rel: 'stylesheet', href: `https://use.fontawesome.com/releases/v5.4.1/css/all.css` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: 'favicon.png' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Live Preview', link: 'https://demos.creative-tim.com/vuetify-material-dashboard' },
      { text: 'Github', link: 'https://github.com/creativetimofficial/vuetify-material-dashboard' },
      { text: 'Twitter', link: 'https://twitter.com/creativetim' },
    ],
    sidebar: [
      {
        title: 'General Information',
        collapsable: false,
        children: [
          '/',
          '/component-docs/license'
        ]
      },
      {
        title: 'Components',
        collapsable: false,
        children: [
          '/component-docs/buttons',
          '/component-docs/cards',
          '/component-docs/checkboxes',
          '/component-docs/dropdown',
          '/component-docs/inputs',
          '/component-docs/textarea',
          '/component-docs/maps',
          '/component-docs/notifications',
          '/component-docs/data-tables',
          '/component-docs/tabs',
          '/component-docs/tooltips',
          '/component-docs/drawer',
          '/component-docs/material-icons',
          '/component-docs/toolbar'
        ]
      }
    ]
  }
};
