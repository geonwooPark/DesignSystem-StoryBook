import React, { useEffect, useState } from 'react'

interface AccordionProps {
  list: {
    title: string
    content: React.ReactNode
  }[]
  /** 기본적으로 활성화되어 있는 아이템을 설정  */
  defaultIndex?: number
}

/** 사용자가 섹션을 열거나 닫을 수 있는 접히고 펼쳐지는 인터페이스 요소 */
function Accordion({ list, defaultIndex }: AccordionProps) {
  const [animation, setAnimation] = useState(false)
  const [selectedItem, setSelectedItem] = useState<number | null>(
    typeof defaultIndex === 'number' ? defaultIndex : null,
  )

  const onTitleClick = (idx: number) => {
    if (selectedItem !== idx) {
      setAnimation(true)
      setSelectedItem(idx)
    } else {
      setSelectedItem(null)
    }
  }

  useEffect(() => {
    setAnimation(false)
  }, [selectedItem])

  return (
    <div className="w-fit space-y-3 rounded-md border border-grey bg-white p-3 transition-all duration-200">
      {list.map((item, itemIdx) => (
        <div key={itemIdx}>
          <div
            className="flex h-[40px] w-[360px] cursor-pointer items-center justify-between rounded-sm bg-primary-light px-3 text-primary-strong"
            onClick={() => onTitleClick(itemIdx)}
          >
            <span>{item.title}</span>
            <span
              className={`${itemIdx === selectedItem ? 'rotate-180' : 'rotate-0'} duration-200`}
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
          {itemIdx === selectedItem && (
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
