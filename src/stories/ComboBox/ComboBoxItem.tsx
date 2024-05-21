import React, { PropsWithChildren, useContext } from 'react'
import { ComboBoxContext } from './ComboBox'

interface ComboBoxItemProps {
  idx: number
  item: {
    value: string
    label: string
    disabled?: boolean
  }
}

function ComboBoxItem({
  children,
  idx,
  item,
}: PropsWithChildren<ComboBoxItemProps>) {
  const { onSelect, onKeyboardSelect } = useContext(ComboBoxContext)

  return (
    <li
      role="listitem"
      tabIndex={idx}
      data-value={item.value}
      data-label={item.label}
      data-disabled={item.disabled}
      className={`${item.disabled ? 'text-gray-300' : 'hover:bg-primary-light'} outline-none`}
      onKeyDown={onKeyboardSelect}
      onClick={() =>
        onSelect({
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

export default ComboBoxItem
