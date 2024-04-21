import React from 'react'
import Badge from './Badge'

export default {
  title: 'COMPONENTS/Badge',
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

export const Default = {
  args: {
    type: 'primary',
    label: 'Bedge',
  },
}

export function SecondaryBadge() {
  return (
    <>
      <Badge type="secondary" label="Secondary Label" />
    </>
  )
}
