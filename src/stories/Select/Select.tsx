import React, {
  PropsWithChildren,
  createContext,
  useRef,
  useState,
} from 'react'
import SelectLabel from './SelectLabel'
import SelectTrigger from './SelectTrigger'
import SelectItemList from './SelectItemList'
import SelectItem from './SelectItem'
import SelectTriggerText from './SelectTriggerText'

interface SelectProps {
  value: string
  setValue: (item: string) => void
}

type SelectContextState = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  value: string
  selectedItem: string | undefined
  triggerRef: React.RefObject<HTMLDivElement> | null
  listRef: React.RefObject<HTMLUListElement> | null
  focusedIndex: number | undefined
  setFocusedIdx: React.Dispatch<React.SetStateAction<number | undefined>>
  setSelectedItem: React.Dispatch<React.SetStateAction<string | undefined>>
  setValue: (item: string) => void
}

export const SelectContext = createContext<SelectContextState>({
  isOpen: false,
  value: '',
  selectedItem: '',
  triggerRef: null,
  listRef: null,
  focusedIndex: undefined,
  setFocusedIdx: () => null,
  setSelectedItem: () => null,
  setIsOpen: () => null,
  setValue: () => null,
})

export const focusStyle = `text-primary-main`

function Select({ children, ...props }: PropsWithChildren<SelectProps>) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<string>()
  const [focusedIndex, setFocusedIdx] = useState<number>()

  const triggerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  return (
    <SelectContext.Provider
      value={{
        isOpen,
        triggerRef,
        listRef,
        focusedIndex,
        selectedItem,
        setIsOpen,
        setFocusedIdx,
        setSelectedItem,
        ...props,
      }}
    >
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  )
}

Select.Label = SelectLabel
Select.Trigger = SelectTrigger
Select.TriggerText = SelectTriggerText
Select.List = SelectItemList
Select.Item = SelectItem

export default Select
