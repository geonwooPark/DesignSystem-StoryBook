import React, { useEffect, useState } from 'react'
import { ReactComponent as InfoIcon } from '../assets/info.svg'
import { ReactComponent as CheckIcon } from '../assets/check.svg'
import { ReactComponent as ErrorIcon } from '../assets/error.svg'
import { ReactComponent as CancelIcon } from '../assets/cancel.svg'
import { cva } from 'class-variance-authority'
import { cn } from '../../utils/cn'

interface AlertProps {
  type: 'info' | 'success' | 'error'
  isAlert: boolean
  timer?: number | null
  children: React.ReactNode
}

const AlertVariants = cva(
  `flex h-[30px] w-[360px] items-center justify-between rounded-[3px] px-4 text-xs`,
  {
    variants: {
      type: {
        info: 'bg-primary-light text-[#3C6172]',
        success: 'bg-[#F2F9F1] text-[#4A6D46]',
        error: 'bg-[#FAEEEE] text-[#743633]',
      },
    },
  },
)

function Alert({ type, isAlert, timer, children }: AlertProps) {
  const [isOpen, setIsOpen] = useState(isAlert)

  const onCancelClick = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (timer && isOpen) {
      setTimeout(() => {
        setIsOpen(false)
      }, timer)
    }
  }, [timer, isOpen])

  useEffect(() => {
    setIsOpen(isAlert)
  }, [isAlert])

  return (
    <>
      {isOpen && (
        <div className={cn(AlertVariants({ type }))}>
          <div className="flex items-center gap-[5px]">
            {type === 'info' && <InfoIcon />}
            {type === 'success' && <CheckIcon />}
            {type === 'error' && <ErrorIcon />}
            <span>{children}</span>
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
