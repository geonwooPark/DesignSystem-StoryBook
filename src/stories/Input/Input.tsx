import React, { InputHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: any
  className?: string
}

/** 사용자가 텍스트나 다른 데이터를 입력할 수 있는 텍스트 상자 또는 입력 필드를 제공하는 인터페이스 요소 */
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
          `h-[40px] w-full rounded-sm border border-grey px-4 text-sm font-medium outline-none ${className}`,
        )}
      />
    </div>
  )
}
