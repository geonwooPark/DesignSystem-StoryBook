import React, { PropsWithChildren, useContext, useEffect } from 'react'
import { SelectContext, focusStyle } from './Select'
import useFadeAnimation from '../../hooks/useFadeAnimation'

function SelectItemList({ children }: PropsWithChildren) {
  const { isOpen, focusedIndex, listRef } = useContext(SelectContext)
  const { fade } = useFadeAnimation({ isOpen })

  useEffect(() => {
    if (typeof focusedIndex !== 'undefined') {
      const childNode = listRef?.current?.childNodes[focusedIndex] as Element
      if (childNode instanceof HTMLElement) {
        childNode.focus()
        childNode.classList.add(focusStyle)
      }
    } else {
      const list = listRef?.current?.childNodes
      if (!list) return

      for (let i = 0; i < list?.length; i++) {
        const node = list[i]
        if (node instanceof HTMLElement) {
          if (node.dataset.disabled !== 'true') {
            node.focus()
            node.classList.add(focusStyle)
            break
          }
        }
      }
    }
  }, [fade])

  return (
    <div
      className={`absolute z-[200] w-full duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
    >
      {fade && (
        <ul
          role="list"
          ref={listRef}
          className="mt-1 w-full overflow-hidden rounded-md border bg-white"
        >
          {children}
        </ul>
      )}
    </div>
  )
}

export default SelectItemList
