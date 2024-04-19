import React, { useEffect, useState } from 'react'

interface AccordionProps {
  list: {
    title: string
    content: React.ReactNode
  }[]
  opendItem?: string
}

/** 사용자가 섹션을 열거나 닫을 수 있는 접히고 펼쳐지는 인터페이스 요소 */
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
    <div className="w-fit space-y-3 rounded-[3px] border border-grey p-3 transition-all duration-500">
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
