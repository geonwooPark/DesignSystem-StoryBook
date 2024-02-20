import React, { InputHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

interface LabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: any
  label: string
  className?: string
}

export default function LabelInput({
  register,
  label,
  className,
  ...otherProps
}: LabelInputProps) {
  return (
    <label className="flex w-[320px] flex-col gap-1">
      <span className="text-sm font-medium text-secondary-main">{label}</span>
      <input
        {...register}
        {...otherProps}
        className={cn(
          `h-[40px] w-full rounded-[3px] border border-gray px-4 text-sm font-medium outline-none ${className}`,
        )}
      />
    </label>
  )
}
