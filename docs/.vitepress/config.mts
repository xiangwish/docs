import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Awish',
  description: 'Awish Vending Machine Platform',
  lang: 'en-US',
  base: '/docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' }
    ],
    sidebar: [
      {
        text: 'Login',
        link: '/login'
      },
      {
        text: 'Data panel',
        link: '/data'
      },
      {
        text: 'Products',
        link: '/products'
      },
      {
        text: 'Device',
        link: '/device'
      },
      {
        text: 'Advertise',
        link: '/advertise'
      },
      {
        text: 'Sales',
        link: '/sales'
      },
      {
        text: 'Marketing',
        link: '/marketing'
      },
      {
        text: 'Replenishment',
        link: '/replenishment'
      },
      {
        text: 'Report',
        link: '/report'
      },
      {
        text: 'Membership',
        link: '/membership'
      },
      {
        text: 'Wechat Mall',
        link: '/wechat-mall'
      },
      {
        text: 'Merchant',
        link: '/merchant'
      },
      {
        text: 'Agent',
        link: '/agent'
      },
      {
        text: 'Account',
        link: '/account'
      }
    ],

    footer: {
      message: '© All rights reserved. Guangzhou Xiangwish Intelligent Technology Co., Ltd.',
      copyright: `Powered Awish 2012 - ${new Date().getFullYear()}`
    },
    // socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
})
