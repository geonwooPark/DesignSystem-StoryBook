import React, { useState } from 'react'

interface ListItemType {
  label: string
  isChecked: boolean
}

type CheckBoxProps =
  | {
      list: ListItemType[]
      changeState: (updatedCheckList: ListItemType[]) => void
      name: string
      register?: never
    }
  | {
      list: ListItemType[]
      changeState: (updatedCheckList: ListItemType[]) => void
      name?: never
      register: any
    }

function CheckBox({ list, changeState, name, register }: CheckBoxProps) {
  const [checkList, setCheckList] = useState(list)

  const onClick = (label: string) => {
    const updatedCheckList = checkList.map((item) => {
      if (item.label === label) {
        item.isChecked = !item.isChecked
      }
      return item
    })
    setCheckList(updatedCheckList)
    changeState(updatedCheckList)
  }

  return (
    <div className="flex gap-5">
      {checkList.map((item, i) => (
        <label key={i} className="relative flex cursor-pointer gap-[6px]">
          <input
            defaultChecked={item.isChecked}
            type="checkbox"
            name={name}
            className="peer hidden"
            value={item.label}
            onChange={() => onClick(item.label)}
            {...register}
          />
          <div className="size-5 rounded-[2px] border-4 border-gray duration-200 peer-checked:border-4 peer-checked:border-primary-main"></div>
          <div className="absolute left-[2.5px] top-0 hidden peer-checked:block">
            <svg
              width="16"
              height="16"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9.5L7.5 17L18.5 3"
                stroke="#196AFF"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-sm text-secondary-main duration-200 peer-checked:text-secondary-strong">
            {item.label}
          </div>
        </label>
      ))}
    </div>
  )
}

export default CheckBox
