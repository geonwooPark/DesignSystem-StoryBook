import React from 'react'
import { cn } from '../../utils/cn'
import { cva } from 'class-variance-authority'

interface BadgeProps {
  type: 'primary' | 'secondary'
  label: string
}

const BadgeVariants = cva(
  `flex h-6 w-fit items-center rounded-full px-3 text-xs text-white`,
  {
    variants: {
      type: {
        primary: 'bg-primary-main',
        secondary: 'bg-secondary-main',
      },
    },
  },
)

/** 정보를 간결하게 나타내기 위해 작은 표식을 사용하는 인터페이스 요소 */
function Badge({ type, label }: BadgeProps) {
  return <div className={cn(BadgeVariants({ type }))}>{label}</div>
}

export default Badge
