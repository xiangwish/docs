import { type DefaultTheme, defineConfig } from 'vitepress'

// [document](https://devonline.net/technology/learn/esm-require.html)
import * as app from '../../../package.json'

const Nav: DefaultTheme.NavItem[] = [
  { text: 'Home', link: '/' },
  { text: 'Guide', link: '/en-US/guide' },
  { text: 'Reference', link: '/en-US/reference' },
  { text: 'Contributing', link: '/en-US/contributing' }
]

const SidebarGuide: DefaultTheme.SidebarItem[] = [
  {
    text: 'Guide',
    collapsed: false,
    items: [{ text: 'Guide', link: 'guide' }]
  },
  {
    text: 'Platform Usage',
    collapsed: false,
    items: [
      {
        text: 'User Login',
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
        collapsed: false,
        items: [
          {
            text: 'Report Management',
            link: '/report/'
          },
        ]
      },
      {
        text: 'Membership Card',
        collapsed: false,
        items: [
          {
            text: 'Membership Management',
            link: '/membership/'
          },
        ]
      },
      {
        text: 'Wechat Mall',
        collapsed: false,
        items: [
          {
            text: 'Order Center',
            link: '/wechat-mall/'
          },
          {
            text: 'B2C Mall configuration',
            link: '/wechat-mall/'
          },
          {
            text: 'Good configuration',
            link: '/wechat-mall/'
          },
          {
            text: 'Member configuration',
            link: '/wechat-mall/'
          },
          {
            text: 'B2C Mall Advertise',
            link: '/wechat-mall/'
          },
        ]
      },
      {
        text: 'Merchant',
        collapsed: false,
        items: [
          {
            text: 'Logo Setting',
            link: '/merchant/logo'
          },
          {
            text: 'Information Setting',
            link: '/merchant/information'
          },
          {
            text: 'Payment Method',
            link: '/merchant/payments'
          },
          {
            text: 'SMS Record',
            link: '/merchant/sms-record'
          }
        ]
      },
      {
        text: 'Revenue Sharing',
        collapsed: false,
        items: [
          {
            text: 'Rule',
            link: '/agent/rule'
          },
          {
            text: 'Account',
            link: '/agent/account'
          },
          {
            text: 'Device',
            link: '/agent/device'
          }
        ]
      },
      {
        text: 'Employee Management',
        collapsed: false,
        items: [
          {
            text: 'Staff list',
            link: '/employee/'
          },
          {
            text: 'Role',
            link: '/employee/role'
          },
          {
            text: 'Log',
            link: '/employee/log'
          }
        ]
      }
    ]
  },
  {
    text: 'Secondary development',
    link: '/development'
  },
  {
    text: 'Contact US',
    collapsed: false,
    items: [
      { text: 'Feedback', link: 'feedback' },
      { text: 'Support', link: 'support' },
      { text: 'Official Account', link: 'official_account' }
    ]
  }
]

export const enUS = defineConfig({
  title: 'Awish',
  lang: 'en-US',
  description:
    'Guangzhou Xiangwish Intelligent Technology Co., Ltd., creating intelligent business terminals exclusively for you.',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '../../images/logo.jpg'
      }
    ]
  ],
  themeConfig: {
    nav: Nav,
    sidebar: {
      '/en-US/': { base: '/en-US/', items: SidebarGuide }
    },

    editLink: {
      pattern: 'https://github.com/xiangwish/docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: '© All rights reserved. Guangzhou Xiangwish Intelligent Technology Co., Ltd.',
      copyright: `Powered en.awish.vip 2012 - ${new Date().getFullYear()} v${app.version}`
    }
  }
})

/**
 * @description: 英文
 */
export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  en: {
    placeholder: 'Search Documentation',
    translations: {
      button: {
        buttonText: 'Search Documentation',
        buttonAriaLabel: 'Search Documentation'
      },
      modal: {
        searchBox: {
          resetButtonTitle: 'Clear query',
          resetButtonAriaLabel: 'Clear query',
          cancelButtonText: 'Cancel',
          cancelButtonAriaLabel: 'Cancel'
        },
        startScreen: {
          recentSearchesTitle: 'Recent searches',
          noRecentSearchesText: 'No recent searches',
          saveRecentSearchButtonTitle: 'Save this search',
          removeRecentSearchButtonTitle: 'Remove this search from history',
          favoriteSearchesTitle: 'Favorite searches',
          removeFavoriteSearchButtonTitle: 'Remove this search from favorites'
        },
        errorScreen: {
          titleText: 'No results',
          helpText: 'You might need to check your network connection'
        },
        footer: {
          selectText: 'Select',
          navigateText: 'Go',
          closeText: 'Close',
          searchByText: 'Search by'
        },
        noResultsScreen: {
          noResultsText: 'No results found for query',
          suggestedQueryText: 'Try querying for',
          reportMissingResultsText: 'Report this missing result',
          reportMissingResultsLinkText: 'Learn more'
        }
      }
    }
  }
}
