import React, { useContext } from 'react'
import { SelectContext } from './Select'
import useFadeAnimation from '../../hooks/useFadeAnimation'
import { OptionList } from '../../types'

interface SelectItemListProps {
  children: (props: { optionList: OptionList }) => React.ReactNode
}

function SelectItemList({ children }: SelectItemListProps) {
  const { isOpen, focusedIndex, listRef, optionList } =
    useContext(SelectContext)
  const { fade } = useFadeAnimation({ isOpen, focusedIndex, listRef })

  return (
    <div
      className={`absolute z-[200] w-full duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
    >
      {fade && (
        <ul
          role="list"
          ref={listRef}
          className="mt-1 max-h-[240px] w-full overflow-y-scroll rounded-md border bg-white"
        >
          {children({ optionList })}
        </ul>
      )}
    </div>
  )
}

export default SelectItemList
