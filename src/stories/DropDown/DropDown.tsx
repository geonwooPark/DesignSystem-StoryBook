import React, { useEffect, useState } from 'react'

interface DropDownProps {
  size: 'sm' | 'lg'
  label: string
  itemList: { value: string }[]
  defaultValue?: string
  changeState: (item: string) => void
}

function DropDown({
  size,
  label,
  itemList,
  defaultValue,
  changeState,
}: DropDownProps) {
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
    changeState(selectedItem)
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
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6L9 12L15 6"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      {isOpen && (
        <div className={`${isOpen ? 'overflow-hidden' : 'overflow-auto'}`}>
          <ul
            className={`${animation ? 'translate-y-0' : 'translate-y-[calc(-100%-8px)]'} relative z-50 rounded-[3px] border border-gray bg-white duration-200`}
          >
            {itemList.map((item, i) => (
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
