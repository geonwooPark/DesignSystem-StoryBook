import React, { useEffect, useState } from 'react'
import { ReactComponent as InfoIcon } from '../assets/info.svg'
import { ReactComponent as CheckIcon } from '../assets/check.svg'
import { ReactComponent as ErrorIcon } from '../assets/error.svg'
import { ReactComponent as CancelIcon } from '../assets/cancel.svg'
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
  `fixed z-50 flex h-[40px] w-[360px] items-center justify-between rounded-[3px] px-4 text-xs`,
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
            {type === 'info' && <InfoIcon />}
            {type === 'success' && <CheckIcon />}
            {type === 'error' && <ErrorIcon />}
            <span>{message}</span>
          </div>
          <div className="cursor-pointer" onClick={onCancelClick}>
            <CancelIcon />
          </div>
        </div>
      )}
    </>
  )
}

export default Alert
