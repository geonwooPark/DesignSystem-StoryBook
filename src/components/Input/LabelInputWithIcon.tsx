import React, { InputHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

interface LabelInputWithIconProps
  extends InputHTMLAttributes<HTMLInputElement> {
  register?: any
  label: string
  icon: React.ReactNode
  onIconClick?: () => void
  className?: string
}

export default function LabelInputWithIcon({
  register,
  label,
  icon,
  onIconClick,
  className,
  ...otherProps
}: LabelInputWithIconProps) {
  return (
    <label className="flex w-[320px] flex-col gap-1">
      <span className="text-sm font-medium text-secondary-main">{label}</span>
      <div className="relative">
        <input
          {...register}
          {...otherProps}
          className={cn(
            `h-[40px] w-full rounded-[3px] border border-grey pl-4 pr-8 text-sm font-medium outline-none ${className}`,
          )}
        />
        <div
          className="absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer"
          onClick={onIconClick}
        >
          {icon}
        </div>
      </div>
    </label>
  )
}
