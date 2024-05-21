import React, { PropsWithChildren, useContext } from 'react'
import { SelectContext } from './Select'
import { hoveredStyle, selectedStyle } from '../../contants'

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
  const { value, onSelect, onKeyboardSelect } = useContext(SelectContext)

  return (
    <li
      role="listitem"
      tabIndex={idx}
      data-value={item.value}
      data-label={item.label}
      data-disabled={item.disabled}
      className={`${value === item.value && selectedStyle} ${item.disabled ? 'text-gray-300' : hoveredStyle} outline-none`}
      onKeyDown={onKeyboardSelect}
      onClick={() =>
        onSelect({
          value: item.value,
          label: item.label,
          disabled: item.disabled,
        })
      }
    >
      {children}
    </li>
  )
}

export default SelectItem
