import React, { InputHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

interface InputWithIconProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: any
  icon: React.ReactNode
  onIconClick?: () => void
  className?: string
}

/** 사용자가 텍스트나 다른 데이터를 입력할 수 있는 텍스트 상자 또는 입력 필드를 제공하는 인터페이스 요소로 아이콘을 포함하고 있음 */
export default function InputWithIcon({
  register,
  icon,
  onIconClick,
  className,
  ...otherProps
}: InputWithIconProps) {
  return (
    <div className="relative w-[320px]">
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
  )
}
