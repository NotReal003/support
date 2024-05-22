import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NotReal003 Support Desk",
  description: "NotReal003 | Support Help Desk",
  base: '/support',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
  editLink: {
     pattern: 'https://github.com/NotReal003/support/edit/main/docs/:path'
      },
  search: {
     provider: 'local'
      },
  footer: {
     copyright: '© 2024 Helpdesk | <a href="https://notreal003.github.io"> NotReal003 </a>'
     },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'SkyLine Status Page', link: 'https://oneuptime.com/status-page/7e83d796-d2af-42b5-8a08-2bb88258546a' },
      { text: 'Guild Application', link: 'https://notreal003.github.io/submissions/guild-application' },
      { text: 'Main Social Site', link: 'https://notreal003.github.io' },
      { text: 'Player Check', link: 'https://notreal003.github.io/player' },
    ],

    sidebar: [
      {
        text: 'Articles',
        items: [
          { text: 'Data Collections', link: '/privacy' },
          { text: 'Privacy Policy', link: '/privacy' },
          { text: 'CopyRight Statement', link: '/copyright' },
          { text: 'Guild Application', link: '/guild-application' },
          { text: 'Your Player Stats', link: '/player' }
        ]
      },
        {
        text: 'Applications / Stats',
        items: [
          { text: 'Guild Application', link: '/guild-application' },
          { text: 'Your Player Stats', link: '/player' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NotReal003' },
      { icon: 'discord', link: 'https://discord.gg/sqVBrMVQmp' },
      { icon: 'youtube', link: 'https://youtube.com/@notnt77?si=SnyI9neCwvr5YKOV' }
    ]
  }
})
