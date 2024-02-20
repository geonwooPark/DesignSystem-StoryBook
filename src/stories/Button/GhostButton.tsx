import { cva } from 'class-variance-authority'
import React from 'react'
import { cn } from '../../utils/cn'

interface GhostButtonProps {
  type: 'submit' | 'button'
  size: 'sm' | 'md' | 'lg'
  label: string
  icon?: React.ReactNode
  disabled?: boolean
  onClick?: () => void
}

const GhostButtonVariants = cva(
  `flex items-center justify-center rounded-[3px] border border-primary-main
 bg-transparent text-primary-main transition-all
duration-200 hover:border-primary-strong hover:text-primary-strong disabled:cursor-not-allowed disabled:border-gray disabled:text-gray`,
  {
    variants: {
      size: {
        sm: 'h-[30px] w-[80px] text-xs font-medium',
        md: 'h-[40px] w-[160px] text-sm font-medium',
        lg: 'h-[50px] w-[320px] text-base font-bold',
      },
    },
  },
)

const IconVariants = cva(`flex items-center`, {
  variants: {
    size: {
      sm: 'mr-[2px] size-[16px]',
      md: 'mr-[4px] size-[20px]',
      lg: 'mr-[6px] size-[24px]',
    },
  },
})

function GhostButton({ size, label, icon, ...props }: GhostButtonProps) {
  return (
    <button {...props} className={cn(GhostButtonVariants({ size }))}>
      {icon && <div className={cn(IconVariants({ size }))}>{icon}</div>}
      <span>{label}</span>
    </button>
  )
}

export default GhostButton
