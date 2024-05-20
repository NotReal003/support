import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NotReal003 Support Desk",
  description: "Support Help Desk",
  base: '/support',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Main Social Site', link: 'https://notreal003.github.io' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NotReal003' }
      { icon: 'discord', link: 'https://discord.gg/sqVBrMVQmp' }
      { icon: 'youtube', link: 'https://youtube.com/@notnt77?si=fS_R-7sSbkZgS_NU' } 
    ]
  }
})
