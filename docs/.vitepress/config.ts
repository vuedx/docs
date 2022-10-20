import { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'VueDX',
  description: 'A collection of tools for better developer experience',

  head: [['link', { rel: 'icon', href: '/icon.png', type: 'image/png' }]],

  appearance: true,

  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  markdown: {
    headers: {
      level: [0, 0,],
    },
  },

  themeConfig: {
    logo: '/icon.png',

    nav: nav(),

    sidebar: {
      '/guide/': guideSideBar(),
      '/preview/': guideSideBar(),
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present Rahul Kadyan',
    },
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Guide', link: '/guide/what-is-vuedx', activeMatch: '/guide/' },
    {
      text: 'Extensions',
      items: [
        {
          text: 'Vue Syntax Highlight',
          link: 'https://marketplace.visualstudio.com/items?itemName=znck.vue',
        },
        {
          text: 'Vue Language Features',
          link: 'https://marketplace.visualstudio.com/items?itemName=znck.vue-language-features',
        },
        {
          text: 'Preview for Vue',
          link: 'https://marketplace.visualstudio.com/items?itemName=znck.preview',
        },
        {
          text: 'Grammarly in VS Code',
          link: 'https://marketplace.visualstudio.com/items?itemName=znck.grammarly',
        },
      ],
    },
  ]
}

function guideSideBar(): DefaultTheme.SidebarGroup[] {
  return [
    {
      text: 'Introduction',
      collapsed: true,
      items: [
        { text: 'What is VueDX?', link: '/guide/what-is-vuedx' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
      ],
    },
    {
      text: 'Extending VueDX',
      collapsed: true,
      items: [
        {
          text: 'Creating VS Code Themes',
          link: '/guide/creating-vscode-themes',
        },
      ],
    },
    {
      text: 'Experimental',
      items: [
        {
          text: 'Preview for Vue',
          link: '/preview/'
        }
      ]
    }
  ]
}
