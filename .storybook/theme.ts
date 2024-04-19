import { create } from '@storybook/theming/create'

export default create({
  base: 'light',
  brandTitle: '🐶 Team94',
  brandTarget: '_self',

  //
  colorPrimary: '#4C8BFF',
  colorSecondary: '#303030',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#303030',
  appBorderRadius: 4,

  // Text colors
  textColor: '#000000',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#ffffff',
  barSelectedColor: '#E5EEFF',
  barHoverColor: '#E5EEFF',
  barBg: '#4C8BFF',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#A9A9A9',
  inputTextColor: '##000000',
  inputBorderRadius: 2,
})
