import { cva } from 'class-variance-authority'
import React from 'react'
import { cn } from '../../utils/cn'

interface PrimaryButtonProps {
  type: 'submit' | 'button'
  size: 'sm' | 'md' | 'lg'
  label: string
  /** 아이콘은 svgr을 사용하여 불러와야 하며 컴포넌트 형태로 주입되야함 */
  icon?: React.ReactNode
  disabled?: boolean
  onClick?: () => void
}

const PrimaryButtonVariants = cva(
  `flex items-center justify-center rounded-sm
 bg-primary-main text-white transition-all
duration-200 hover:bg-primary-strong disabled:cursor-not-allowed disabled:bg-grey`,
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

/** 주요 작업 또는 주요 동작을 나타내는 데 사용되는 버튼 */
function PrimaryButton({ size, label, icon, ...props }: PrimaryButtonProps) {
  return (
    <button {...props} className={cn(PrimaryButtonVariants({ size }))}>
      {icon && <div className={cn(IconVariants({ size }))}>{icon}</div>}
      <span>{label}</span>
    </button>
  )
}

export default PrimaryButton
