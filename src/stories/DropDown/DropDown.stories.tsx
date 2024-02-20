import React from 'react'
import DropDown from './DropDown'

const ItemList = [
  { value: 'item1' },
  { value: 'item2' },
  { value: 'item3' },
  { value: 'item4' },
]

export default {
  title: 'DROPDOWN/DropDown',
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

export const Default = {
  args: {
    size: 'sm',
    label: '선택하세요.',
    ItemList: ItemList,
  },
}

export function Size() {
  return (
    <>
      <DropDown size="sm" label="DropDown Small" ItemList={ItemList} />
      <DropDown size="lg" label="DropDown Large" ItemList={ItemList} />
    </>
  )
}
