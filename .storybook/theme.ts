import { create } from '@storybook/theming/create'
import { colors } from '../tw-config/theme'

export default create({
  base: 'light',
  brandTitle: 'TEAM94',
  brandTarget: '_self',
  brandUrl: 'https://github.com/Team94/DesignSystem-StoryBook',

  fontBase: 'Rubik, sans-serif',
  fontCode: 'monospace',

  colorPrimary: colors.primary.main,
  colorSecondary: colors.secondary.main,
})
