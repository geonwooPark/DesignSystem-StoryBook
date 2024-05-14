import React, { PropsWithChildren, useContext } from 'react'
import { SelectContext } from './Select'

interface SelectItemProps {
  idx: number
  item: {
    value: string
    label: string
    disabled?: boolean
  }
}

function SelectItem({
  children,
  idx,
  item,
}: PropsWithChildren<SelectItemProps>) {
  const { selectItem, selectItemWithKeyboard } = useContext(SelectContext)

  return (
    <li
      role="listitem"
      tabIndex={idx}
      data-value={item.value}
      data-label={item.label}
      data-disabled={item.disabled}
      className={`${item.disabled ? 'text-gray-300' : 'hover:bg-primary-light'} outline-none`}
      onKeyDown={selectItemWithKeyboard}
      onClick={() =>
        selectItem({
          value: item.value,
          label: item.label,
          idx,
          disabled: item.disabled,
        })
      }
    >
      {children}
    </li>
  )
}

export default SelectItem
