import React from 'react'
import Alert from './Alert'

export default {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div className="flex flex-col gap-4">
        <Story />
      </div>
    ),
  ],
}

export const Example = {
  args: {
    type: 'info',
    delay: 60000,
    message: 'Alert Component',
    reset: () => null,
  },
}
