import React, { useState } from 'react'
import DropDown from './DropDown'

const itemList = [
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

export const Example = {
  args: {
    size: 'sm',
    label: '선택하세요.',
    itemList,
    changeState: () => null,
  },
}

export function Size() {
  const [, setData] = useState({
    menu1: '',
  })

  const changeState = (item: string) => {
    setData({ menu1: item })
  }

  return (
    <>
      <DropDown
        size="sm"
        label="DropDown Small"
        itemList={itemList}
        changeState={changeState}
      />
      <DropDown
        size="lg"
        label="DropDown Large"
        itemList={itemList}
        changeState={changeState}
      />
    </>
  )
}
