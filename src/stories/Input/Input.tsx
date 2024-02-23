import React, { InputHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: any
  className?: string
}

export default function Input({
  register,
  className,
  ...otherProps
}: InputProps) {
  return (
    <div className="w-[320px]">
      <input
        {...register}
        {...otherProps}
        className={cn(
          `h-[40px] w-full rounded-[3px] border border-grey px-4 text-sm font-medium outline-none ${className}`,
        )}
      />
    </div>
  )
}
