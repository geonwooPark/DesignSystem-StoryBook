import React, { InputHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

interface LabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: any
  label: string
  className?: string
}

/** 사용자가 텍스트나 다른 데이터를 입력할 수 있는 텍스트 상자 또는 입력 필드를 제공하는 인터페이스 요소로 라벨을 포함하고 있음 */
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
          `h-[40px] w-full rounded-sm border border-grey px-4 text-sm font-medium outline-none ${className}`,
        )}
      />
    </label>
  )
}
