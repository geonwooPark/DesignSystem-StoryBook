import React from 'react'
import DropDown from './DropDown'

const itemList = [
  { value: 'item1' },
  { value: 'item2' },
  { value: 'item3' },
  { value: 'item4' },
]

export default {
  title: 'Components/DropDown',
  component: DropDown,
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div className="flex flex-col gap-[200px]">
        <Story />
      </div>
    ),
  ],
}

export const Example = {
  args: {
    label: '선택하세요.',
    itemList,
    changeState: () => null,
  },
}
