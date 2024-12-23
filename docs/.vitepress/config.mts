import { defineConfig } from 'vitepress'

import { common as Common } from './common'

import { enUS } from './locales/en-US'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...Common,
  base: '/docs/',
  appearance: 'dark',
  locales: {
    root: { label: 'English', ...enUS }
  }
})
