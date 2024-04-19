import React from 'react'

type RadioProps =
  | {
      list: { label: string }[]
      changeState: (label: string) => void
      name: string
      register?: never
      defaultChecked?: string
    }
  | {
      list: { label: string }[]
      changeState: (label: string) => void
      name?: never
      register: any
      defaultChecked?: string
    }

/** 여러 옵션 중 하나를 선택할 때 사용되며, 단일 선택이 가능한 버튼 형태의 인터페이스 요소 */
function Radio({
  list,
  changeState,
  name,
  register,
  defaultChecked,
}: RadioProps) {
  const onClick = (label: string) => {
    changeState(label)
  }

  return (
    <div className="flex gap-5">
      {list.map((item, i) => (
        <label key={i} className="flex cursor-pointer gap-[6px]">
          <input
            defaultChecked={item.label === defaultChecked}
            type="radio"
            name={name}
            className="peer hidden"
            value={item.label}
            onChange={() => onClick(item.label)}
            {...register}
          />
          <div className="size-5 rounded-full border-4 border-grey duration-200 peer-checked:border-4 peer-checked:border-primary-main" />
          <div className="text-sm text-secondary-main duration-200 peer-checked:text-secondary-strong">
            {item.label}
          </div>
        </label>
      ))}
    </div>
  )
}

export default Radio
