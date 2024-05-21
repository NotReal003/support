import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NotReal003 Support Desk",
  description: "NotReal003 | Support Help Desk",
  base: '/support',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Main Social Site', link: 'https://notreal003.github.io' }
    ],

    sidebar: [
      {
        text: 'Articles',
        items: [
          { text: 'Data Collections', link: '/data-collect' },
          { text: 'Privacy Policy', link: '/privacy' },
          { text: 'CopyRight Statement', link: '/copyright' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NotReal003' },
      { icon: 'discord', link: 'https://discord.gg/sqVBrMVQmp' }
    ]
  }
})
