import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NotReal003 | Support Desk",
  description: "NotReal003 / SkyLine | Support Help Desk",
  base: '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
  search: {
     provider: 'local'
      },
  footer: {
     copyright: '© 2024 Helpdesk | <a href="https://notreal003.github.io"> NotReal003 </a>'
     },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Social Page', link: 'https://notreal003.github.io' },
      { text: 'Request Page', link: 'https://request.notreal003.xyz' },
      { text: 'Player Stats Page', link: 'https://notreal003.github.io/player' },
      { text: 'SkyLine Status Page', link: 'https://status.notreal003.xyz' },
    ],

    sidebar: [
      {
        text: 'Applications / Stats',
        items: [
          { text: 'Guild Application', link: '/guild-application' },
          { text: 'Your Player Stats', link: '/player' },
          { text: 'Invite Our Discord Bot', link: 'https://notreal003.github.io/invite' }
        ]
      },
        {
        text: 'Important Articles',
        items: [
          { text: 'Data Collections', link: '/privacy' },
          { text: 'Terms of Service', link: '/terms' },
          { text: 'Privacy Policy', link: '/privacy' },
          { text: 'CopyRight Statement', link: '/copyright' },
          { text: 'Bot(s) Data Collections', link: '/bot:privacy-policy' },
          { text: 'Bot(s) Terms of Service', link: '/bot-tos' }
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
