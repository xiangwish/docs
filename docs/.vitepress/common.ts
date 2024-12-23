import { defineConfig } from 'vitepress'

import { search as enSearch } from './locales/en-US'

export const common = defineConfig({
  title: 'Awish - Vending Machine Documentation',

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ]
  },

  sitemap: {
    hostname: 'https://en.awish.vip/docs',
    transformItems(items) {
      return items.filter(item => !item.url.includes('migration'))
    }
  },

  head: [
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Awish Vending Machine Documentation | ' }],
    ['meta', { property: 'og:site_name', content: 'Awish Vending Machine Documentation' }],
    ['meta', { property: 'og:image', content: 'https://www.awish.vip/docs/images/favicon.ico' }],
    ['meta', { property: 'og:url', content: 'https://www.awish.vip/' }]
  ],

  themeConfig: {
    logo: '/images/logo.jpg',
    socialLinks: [{ icon: 'github', link: 'https://github.com/xiangwish/docs' }],
    search: {
      provider: 'local',
      options: {
        locales: { ...enSearch }
      }
    }
  }
})
