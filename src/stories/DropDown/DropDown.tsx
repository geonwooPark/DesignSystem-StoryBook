import React, { PropsWithChildren, useEffect, useState } from 'react'

interface DropDownProps {
  value: string | number | boolean
  label: string
  /** DropDown의 ON / OFF 상태를 설정  */
  isOpen: boolean
  /** DropDown의 ON / OFF 상태를 컨트롤 할 수 있는 함수 */
  handleOpen: () => void
}

/** 사용자가 선택할 수 있는 옵션 목록이 포함된 펼침식 인터페이스 요소 */
function DropDown({
  value,
  label,
  isOpen,
  handleOpen,
  children,
}: PropsWithChildren<DropDownProps>) {
  const [animation, setAnimation] = useState(isOpen)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null
    if (isOpen) {
      setAnimation(true)
    } else {
      timer = setTimeout(() => setAnimation(false), 200)
    }

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [isOpen])

  return (
    <div className={`h-10 w-full text-xs`}>
      <div
        onClick={handleOpen}
        className="mb-2 flex h-10 cursor-pointer items-center justify-between rounded-md border border-grey bg-white px-4"
      >
        <span>{value || label}</span>
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

      <div
        className={`${isOpen ? '[&>ul]:animate-slideFadeIn' : '[&>ul]:animate-slideFadeOut'} relative z-popover overflow-hidden`}
      >
        {animation && children}
      </div>
    </div>
  )
}

export default DropDown
