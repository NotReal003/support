import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NotReal003 | Support Desk",
  description: "NotReal003 | Support Help Desk",
  base: '/',
  
  // section to include the script on all pages
  head: [
    ['script', { src: 'https://github.com/NotReal003/status-redirect/blob/main/support-collect.js' }]
  ],
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
     provider: 'local'
      },
    editLink: {
     pattern: 'https://github.com/NotReal003/support/edit/main/docs/:path'
    },
    footer: {
     copyright: '© 2025 Helpdesk | <a href="https://notreal003.github.io"> NotReal003 </a>'
     },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Social Page', link: 'https://notreal003.github.io' },
      { text: 'Request Page', link: 'https://request.notreal003.org' },
      { text: 'Player Stats Page', link: 'https://notreal003.github.io/player' },
      { text: 'SkyLine Status Page', link: 'https://status.notreal003.org' },
    ],

    sidebar: [
      {
        text: 'Applications / Stats',
        items: [
          { text: 'Request Page & API', link: '/api' },
          { text: 'Guild Application', link: '/guild-application' },
          { text: 'Your Player Stats', link: '/player' },
          { text: 'Invite Our Discord Bot', link: 'https://notreal003.github.io/invite' }
        ]
      },
        {
        text: 'Important Articles',
        items: [
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
      { icon: 'discord', link: 'https://notreal003.org/discord' },
      { icon: 'youtube', link: 'https://youtube.com/@notnt77?si=SnyI9neCwvr5YKOV' }
    ]
  }
})
