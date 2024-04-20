import { cva } from 'class-variance-authority'
import React from 'react'
import { cn } from '../../utils/cn'

interface SecondaryButtonProps {
  type: 'submit' | 'button'
  size: 'sm' | 'md' | 'lg'
  label: string
  icon?: React.ReactNode
  disabled?: boolean
  onClick?: () => void
}

const SecondaryButtonVariants = cva(
  `flex items-center justify-center rounded-sm
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

/** 일반적으로 주요 작업이나 주요 동작이 아닌 경우에 사용되는 버튼으로, 일반 버튼보다 미세한 동작에 적합한 보조적 역할을 하는 인터페이스 요소 */
function SecondaryButton({
  size,
  label,
  icon,
  ...props
}: SecondaryButtonProps) {
  return (
    <button {...props} className={cn(SecondaryButtonVariants({ size }))}>
      {icon && <div className={cn(IconVariants({ size }))}>{icon}</div>}
      <span>{label}</span>
    </button>
  )
}

export default SecondaryButton
