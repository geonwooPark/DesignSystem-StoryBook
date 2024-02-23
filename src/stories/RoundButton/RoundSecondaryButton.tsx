import { cva } from 'class-variance-authority'
import React from 'react'
import { cn } from '../../utils/cn'

interface RoundSecondaryButtonProps {
  type: 'submit' | 'button'
  size: 'sm' | 'md' | 'lg'
  label: string
  icon?: React.ReactNode
  disabled?: boolean
  onClick?: () => void
}

const RoundSecondaryButtonVariants = cva(
  `flex items-center justify-center rounded-full
 bg-secondary-main text-white transition-all
duration-200 hover:bg-secondary-strong disabled:cursor-not-allowed disabled:bg-grey	`,
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

function RoundSecondaryButton({
  size,
  label,
  icon,
  ...props
}: RoundSecondaryButtonProps) {
  return (
    <button {...props} className={cn(RoundSecondaryButtonVariants({ size }))}>
      {icon && <div className={cn(IconVariants({ size }))}>{icon}</div>}
      <span>{label}</span>
    </button>
  )
}

export default RoundSecondaryButton
