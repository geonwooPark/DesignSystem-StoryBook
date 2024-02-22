import React, { useState } from 'react'

type RadioProps =
  | {
      list: { value: string }[]
      changeState: (value: string) => void
      name: string
      register?: never
      defaultChecked?: string
    }
  | {
      list: { value: string }[]
      changeState: (value: string) => void
      name?: never
      register: any
      defaultChecked?: string
    }

function Radio({
  list,
  changeState,
  name,
  register,
  defaultChecked,
}: RadioProps) {
  const onClick = (value: string) => {
    changeState(value)
  }

  return (
    <div className="flex gap-5">
      {list.map((item, i) => (
        <label key={i} className="flex cursor-pointer gap-[6px]">
          <input
            defaultChecked={item.value === defaultChecked}
            type="radio"
            name={name}
            className="peer hidden"
            value={item.value}
            onChange={() => onClick(item.value)}
            {...register}
          />
          <div className="size-5 rounded-full border-4 border-gray duration-200 peer-checked:border-4 peer-checked:border-primary-main" />
          <div className="text-sm text-secondary-main duration-200 peer-checked:text-secondary-strong">
            {item.value}
          </div>
        </label>
      ))}
    </div>
  )
}

export default Radio
