import type { Preview } from '@storybook/react'
import '../src/index.css' // 스타일링 적용

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['introduction', ['Usage', '*'], 'components'],
      },
    },
  },
}

export default preview
