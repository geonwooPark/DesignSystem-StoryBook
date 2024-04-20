import React, { useState } from 'react'

type CheckBoxProps =
  | {
      list: {
        label: string
        isChecked: boolean
      }[]
      changeState: (
        updatedCheckList: {
          label: string
          isChecked: boolean
        }[],
      ) => void
      name: string
      register?: never
    }
  | {
      list: {
        label: string
        isChecked: boolean
      }[]
      changeState: (
        updatedCheckList: {
          label: string
          isChecked: boolean
        }[],
      ) => void
      name?: never
      register: any
    }

/** 사용자가 선택할 수 있는 옵션을 나타내는 표시란으로, 선택 또는 선택 해제 상태를 나타내는 작은 상자 */
function CheckBox({ list, changeState, name, register }: CheckBoxProps) {
  const [checkList] = useState(list)

  const onClick = (listItemIdx: number) => {
    const updatedCheckList = checkList.map((updatedItem, updatedItemIdx) => {
      if (updatedItemIdx === listItemIdx) {
        updatedItem.isChecked = !updatedItem.isChecked
      }
      return updatedItem
    })
    changeState(updatedCheckList)
  }

  return (
    <div className="flex gap-5">
      {checkList.map((listItem, listItemIdx) => (
        <label
          key={listItemIdx}
          className="relative flex cursor-pointer gap-[6px]"
        >
          <input
            defaultChecked={listItem.isChecked}
            type="checkbox"
            name={name}
            className="peer hidden"
            value={listItem.label}
            onChange={() => onClick(listItemIdx)}
            {...register}
          />
          <div className="size-5 rounded-sm border-4 border-grey duration-200 peer-checked:border-4 peer-checked:border-primary-main" />
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
            {listItem.label}
          </div>
        </label>
      ))}
    </div>
  )
}

export default CheckBox
