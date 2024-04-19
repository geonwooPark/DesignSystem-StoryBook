import React from 'react'
import Badge from './Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
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
    type: 'primary',
    label: 'Bedge',
  },
}

export function Type() {
  return (
    <>
      <Badge type="primary" label="Primary Label" />
      <Badge type="secondary" label="Secondary Label" />
    </>
  )
}
