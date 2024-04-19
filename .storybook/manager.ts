import { addons } from '@storybook/manager-api'
import customTheme from './theme'

addons.setConfig({
  sidebar: {
    showRoots: false,
  },
  theme: customTheme,
})
