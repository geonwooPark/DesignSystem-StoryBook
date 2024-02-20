import React, { useEffect, useState } from 'react'
import { ReactComponent as ArrowDown } from '../assets/arrow-down.svg'

interface DropDownProps {
  size: 'sm' | 'lg'
  label: string
  ItemList: { value: string }[]
  defaultValue?: string
}

function DropDown({ size, label, ItemList, defaultValue }: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [animation, setAnimation] = useState(false)
  const [currentItem, setCurrentItem] = useState(defaultValue || '')

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    if (isOpen) {
      setAnimation(true)
    } else {
      setTimeout(() => setAnimation(false), 200)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [isOpen])

  const handleOpen = () => {
    if (isOpen) {
      setAnimation((prev) => !prev)
      setTimeout(() => setIsOpen((prev) => !prev), 100)
    } else {
      setIsOpen((prev) => !prev)
    }
  }

  const onItemClick = (selectedItem: string) => {
    setCurrentItem(selectedItem)
    setIsOpen(false)
  }

  return (
    <div
      className={`${size === 'sm' ? 'w-[160px]' : 'w-[320px]'} h-10 text-xs`}
    >
      <div
        onClick={handleOpen}
        className="relative z-10 mb-2 flex h-10 cursor-pointer items-center justify-between rounded-[3px] border border-gray bg-white px-4"
      >
        <span>{currentItem || label}</span>
        <span
          className={`${isOpen ? 'rotate-180' : 'rotate-0'} text-black duration-200`}
        >
          <ArrowDown />
        </span>
      </div>

      {isOpen && (
        <div className={`${isOpen ? 'overflow-hidden' : 'overflow-auto'}`}>
          <ul
            className={`${animation ? 'translate-y-0' : 'translate-y-[calc(-100%-8px)]'} rounded-[3px] border border-gray duration-200`}
          >
            {ItemList.map((item, i) => (
              <li
                key={i}
                onClick={() => onItemClick(item.value)}
                className="h-10 cursor-pointer p-[5px]"
              >
                <span className="flex h-[30px] w-full items-center rounded-[3px] bg-transparent px-[10px] duration-200 hover:bg-primary-light hover:text-primary-main">
                  {item.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropDown
