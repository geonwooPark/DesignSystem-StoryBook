import React, { useEffect, useState } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../../utils/cn'

interface AlertProps {
  type: 'info' | 'success' | 'error' | null
  position:
    | 'topLeft'
    | 'topRight'
    | 'topCenter'
    | 'bottomLeft'
    | 'bottomRight'
    | 'bottomCenter'
  delay?: number
  message: string
  reset: () => void
}

const AlertVariants = cva(
  `z-notification fixed flex h-[40px] w-[360px] items-center justify-between rounded-sm px-4 text-xs`,
  {
    variants: {
      type: {
        info: 'bg-primary-light text-[#3C6172]',
        success: 'bg-[#F2F9F1] text-[#4A6D46]',
        error: 'bg-[#FAEEEE] text-[#743633]',
      },
      position: {
        topLeft: 'left-8 top-24',
        topRight: 'right-8 top-24',
        topCenter: 'left-[50%] top-24 translate-x-[-50%]',
        bottomLeft: 'bottom-24 left-8',
        bottomRight: 'bottom-24 right-8',
        bottomCenter: 'bottom-24 left-[50%] translate-x-[-50%]',
      },
    },
  },
)

/** 사용자에게 중요한 메시지를 강조하고 확인할 수 있도록 하는 팝업 형태의 인터페이스 요소 */
function Alert({ type, position, delay = 3000, message, reset }: AlertProps) {
  const [isOpen, setIsOpen] = useState(false)

  const onCancelClick = () => {
    setIsOpen(false)
    reset()
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false)
      reset()
    }, delay)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    setIsOpen(Boolean(type))
  }, [type])

  return (
    <>
      {isOpen && (
        <div className={cn(AlertVariants({ type, position }))}>
          <div className="flex items-center gap-[5px]">
            {type === 'info' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clipPath="url(#clip0_2_623)">
                  <path
                    d="M7.33334 4.66665H8.66668V5.99998H7.33334V4.66665ZM7.33334 7.33331H8.66668V11.3333H7.33334V7.33331ZM8.00001 1.33331C4.32001 1.33331 1.33334 4.31998 1.33334 7.99998C1.33334 11.68 4.32001 14.6666 8.00001 14.6666C11.68 14.6666 14.6667 11.68 14.6667 7.99998C14.6667 4.31998 11.68 1.33331 8.00001 1.33331ZM8.00001 13.3333C5.06001 13.3333 2.66668 10.94 2.66668 7.99998C2.66668 5.05998 5.06001 2.66665 8.00001 2.66665C10.94 2.66665 13.3333 5.05998 13.3333 7.99998C13.3333 10.94 10.94 13.3333 8.00001 13.3333Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_623">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
            {type === 'success' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clipPath="url(#clip0_2_620)">
                  <path
                    d="M8.00001 1.33331C4.32001 1.33331 1.33334 4.31998 1.33334 7.99998C1.33334 11.68 4.32001 14.6666 8.00001 14.6666C11.68 14.6666 14.6667 11.68 14.6667 7.99998C14.6667 4.31998 11.68 1.33331 8.00001 1.33331ZM8.00001 13.3333C5.06001 13.3333 2.66668 10.94 2.66668 7.99998C2.66668 5.05998 5.06001 2.66665 8.00001 2.66665C10.94 2.66665 13.3333 5.05998 13.3333 7.99998C13.3333 10.94 10.94 13.3333 8.00001 13.3333ZM11.06 5.05331L6.66668 9.44665L4.94001 7.72665L4.00001 8.66665L6.66668 11.3333L12 5.99998L11.06 5.05331Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_620">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
            {type === 'error' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.33334 9.99998H8.66668V11.3333H7.33334V9.99998ZM7.33334 4.66665H8.66668V8.66665H7.33334V4.66665ZM7.99334 1.33331C4.31334 1.33331 1.33334 4.31998 1.33334 7.99998C1.33334 11.68 4.31334 14.6666 7.99334 14.6666C11.68 14.6666 14.6667 11.68 14.6667 7.99998C14.6667 4.31998 11.68 1.33331 7.99334 1.33331ZM8.00001 13.3333C5.05334 13.3333 2.66668 10.9466 2.66668 7.99998C2.66668 5.05331 5.05334 2.66665 8.00001 2.66665C10.9467 2.66665 13.3333 5.05331 13.3333 7.99998C13.3333 10.9466 10.9467 13.3333 8.00001 13.3333Z"
                  fill="currentColor"
                />
              </svg>
            )}
            <span>{message}</span>
          </div>
          <div className="cursor-pointer" onClick={onCancelClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
            >
              <path
                d="M1.33331 11.3334L6.66665 6.00002L12 11.3334M12 0.666687L6.66563 6.00002L1.33331 0.666687"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  )
}

export default Alert
