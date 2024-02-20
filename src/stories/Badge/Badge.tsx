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

function Badge({ type, label }: BadgeProps) {
  return <div className={cn(BadgeVariants({ type }))}>{label}</div>
}

export default Badge
