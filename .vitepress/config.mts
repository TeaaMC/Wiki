import { defineConfig } from 'vitepress'

const REPO = 'https://github.com/TeaaMC/Wiki'
const DISCORD = 'http://dsc.gg/teaamc'

const viSidebar = [
  {
    text: 'Bắt đầu',
    items: [
      { text: 'Kết nối máy chủ', link: '/guide/getting-started' },
      { text: 'Luyện tập với Bot', link: '/guide/practice-bot' }
    ]
  },
  {
    text: 'Hỗ trợ',
    items: [
      { text: 'Hiệu năng & độ trễ', link: '/support/performance' },
      { text: 'Đồng bộ Discord', link: '/support/discord-sync' }
    ]
  },
  {
    text: 'Cộng đồng',
    items: [
      { text: 'Rank Media & YouTuber', link: '/community/media' },
      { text: 'Hợp tác cùng TeaaMC', link: '/community/partner' }
    ]
  }
]

const enSidebar = [
  {
    text: 'Get started',
    items: [
      { text: 'Connect to the server', link: '/en/guide/getting-started' },
      { text: 'Practice Bot', link: '/en/guide/practice-bot' }
    ]
  },
  {
    text: 'Support',
    items: [
      { text: 'Performance & latency', link: '/en/support/performance' },
      { text: 'Discord rank sync', link: '/en/support/discord-sync' }
    ]
  },
  {
    text: 'Community',
    items: [
      { text: 'Media & YouTuber ranks', link: '/en/community/media' },
      { text: 'Partner with TeaaMC', link: '/en/community/partner' }
    ]
  }
]

export default defineConfig({
  title: 'TeaaMC Wiki',
  description: 'Tài liệu chính thức dành cho người chơi TeaaMC.',
  lang: 'vi-VN',
  base: '/Wiki/',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: { hostname: 'https://teaamc.github.io/Wiki/' },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/Wiki/logo.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'TeaaMC Wiki' }],
    ['meta', { property: 'og:description', content: 'Hướng dẫn và thông tin chính thức dành cho người chơi TeaaMC.' }],
    ['meta', { property: 'og:image', content: 'https://teaamc.github.io/Wiki/banner.jpg' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'TeaaMC Wiki',
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: REPO },
      { icon: 'discord', link: DISCORD }
    ],
    footer: {
      message: 'Tài liệu cộng đồng chính thức của TeaaMC.',
      copyright: 'TeaaMC'
    }
  },
  locales: {
    root: {
      label: 'Tiếng Việt',
      lang: 'vi-VN',
      themeConfig: {
        nav: [
          { text: 'Trang chủ', link: '/', activeMatch: '^/$' },
          { text: 'Tài liệu', link: '/guide/getting-started', activeMatch: '^/(guide|support|community)(/|$)' },
          { component: 'LanguageDropdown' }
        ],
        sidebar: viSidebar,
        editLink: { pattern: `${REPO}/edit/main/:path`, text: 'Chỉnh sửa trang này trên GitHub' },
        outlineTitle: 'Trong trang này',
        docFooter: { prev: 'Trang trước', next: 'Trang sau' },
        lastUpdatedText: 'Cập nhật lần cuối',
        returnToTopLabel: 'Về đầu trang',
        sidebarMenuLabel: 'Mục lục',
        darkModeSwitchLabel: 'Giao diện',
        langMenuLabel: 'Đổi ngôn ngữ'
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Official documentation for TeaaMC players.',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/', activeMatch: '^/en/$' },
          { text: 'Docs', link: '/en/guide/getting-started', activeMatch: '^/en/(guide|support|community)(/|$)' },
          { component: 'LanguageDropdown' }
        ],
        sidebar: enSidebar,
        editLink: { pattern: `${REPO}/edit/main/:path`, text: 'Edit this page on GitHub' }
      }
    }
  }
})
