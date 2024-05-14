import React, {
  KeyboardEventHandler,
  PropsWithChildren,
  useContext,
} from 'react'
import { SelectContext, focusStyle } from './Select'

interface SelectItemProps {
  idx: number
  item: {
    value: string
    label: string
  }
  disabled?: boolean
}

function SelectItem({
  children,
  idx,
  item,
  disabled,
}: PropsWithChildren<SelectItemProps>) {
  const { setIsOpen, setSelectedItem, setSelectedIdx, listRef } =
    useContext(SelectContext)

  const selectItem = () => {
    if (disabled) return
    setIsOpen(false)
    setSelectedIdx(idx)
    setSelectedItem(item.value)
  }

  const onKeyDown: KeyboardEventHandler<HTMLLIElement> = (e) => {
    e.preventDefault()
    const element = e.target as HTMLElement
    const list = listRef?.current?.childNodes

    if (e.key === 'Enter') {
      selectItem()
    }

    if (e.key === 'ArrowDown') {
      if (!element.nextSibling) return
      const nextChildNode = element.nextSibling

      if (nextChildNode instanceof HTMLElement && list) {
        for (let i = nextChildNode.tabIndex; i < list?.length; i++) {
          const node = list[i]
          if (node instanceof HTMLElement) {
            if (node.dataset.disabled !== 'true') {
              node.focus()
              node.classList.add(focusStyle)
              element.classList.remove(focusStyle)
              break
            }
          }
        }
      }
    }

    if (e.key === 'ArrowUp') {
      if (!element.previousSibling) return
      const prevChildNode = element.previousSibling

      if (prevChildNode instanceof HTMLElement && list) {
        for (let i = prevChildNode.tabIndex; i >= 0; i--) {
          const node = list[i]
          if (node instanceof HTMLElement) {
            if (node.dataset.disabled !== 'true') {
              node.focus()
              node.classList.add(focusStyle)
              element.classList.remove(focusStyle)
              break
            }
          }
        }
      }
    }
  }

  return (
    <li
      role="listitem"
      tabIndex={idx}
      value={item.value}
      className={`${disabled ? 'text-gray-300' : 'hover:bg-primary-light'} outline-none`}
      data-disabled={disabled}
      onKeyDown={onKeyDown}
      onClick={selectItem}
    >
      {children}
    </li>
  )
}

export default SelectItem
