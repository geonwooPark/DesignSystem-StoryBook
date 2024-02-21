import React, { useEffect, useState } from 'react'
import { ReactComponent as ArrowDown } from '../assets/arrow-down.svg'

interface AccordianListType {
  title: string
  content: React.ReactNode
}

interface AccordionProps {
  list: AccordianListType[]
  opendItem?: string
}

function Accordion({ list, opendItem }: AccordionProps) {
  const [animation, setAnimation] = useState(false)
  const [selectedItem, setSelectedItem] = useState(opendItem || '')

  const onTitleClick = (title: string) => {
    if (selectedItem !== title) {
      setAnimation(true)
      setSelectedItem(title)
    } else {
      setSelectedItem('')
    }
  }

  useEffect(() => {
    setAnimation(false)
  }, [selectedItem])

  return (
    <div className="w-fit space-y-3 rounded-[3px] border border-gray p-3 transition-all duration-500">
      {list.map((item, i) => (
        <div key={i}>
          <div
            className="flex h-[40px] w-[360px] cursor-pointer items-center justify-between rounded-[3px] bg-primary-light px-3 text-[#3C6172]"
            onClick={() => onTitleClick(item.title)}
          >
            <span>{item.title}</span>
            <span
              className={`${item.title === selectedItem ? 'rotate-180' : 'rotate-0'} duration-200`}
            >
              <ArrowDown />
            </span>
          </div>
          {item.title === selectedItem && (
            <div
              className={`${animation ? 'opacity-0' : 'opacity-100'} w-[360px] bg-white px-6 py-3 duration-200 `}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion
