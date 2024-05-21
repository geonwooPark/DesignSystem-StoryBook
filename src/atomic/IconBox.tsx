import React, { PropsWithChildren } from 'react'
import { cn } from '../utils/cn'

interface IconBoxProps {
  className?: string
  onClick?: any
}

function IconBox({
  children,
  className,
  onClick,
}: PropsWithChildren<IconBoxProps>) {
  return (
    <div
      onClick={onClick}
      className={cn('flex size-[20px] items-center justify-center', className)}
    >
      {children}
    </div>
  )
}

export default IconBox
