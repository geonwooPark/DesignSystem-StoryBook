import React, { useState } from 'react'
import DropDown from './DropDown'

export default {
  title: 'COMPONENTS/DropDown',
  component: DropDown,
  tags: ['autodocs'],
}

export function Example() {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')

  const handleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  const handleVaule = (selectedItem: string) => {
    setValue(selectedItem)
    setIsOpen(false)
  }

  return (
    <div className="w-[300px]">
      <DropDown
        value={value}
        label="메뉴를 선택해주세요."
        isOpen={isOpen}
        handleOpen={handleOpen}
      >
        <ul className="overflow-hidden rounded-md border border-grey bg-white">
          <li
            onClick={() => handleVaule('item1')}
            className="cursor-pointer px-4 py-3 duration-200 hover:bg-primary-light"
          >
            item1
          </li>
          <li
            onClick={() => handleVaule('item2')}
            className="cursor-pointer px-4 py-3 duration-200 hover:bg-primary-light"
          >
            item2
          </li>
          <li
            onClick={() => handleVaule('item3')}
            className="cursor-pointer px-4 py-3 duration-200 hover:bg-primary-light"
          >
            item3
          </li>
        </ul>
      </DropDown>
    </div>
  )
}
