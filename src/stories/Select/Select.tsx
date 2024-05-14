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
  selectedItem: string
  setSelectedItem: (item: string) => void
}

type SelectContextState = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  selectedItem: string
  triggerRef: React.RefObject<HTMLDivElement> | null
  listRef: React.RefObject<HTMLUListElement> | null
  selectedIdx: number | undefined
  setSelectedIdx: React.Dispatch<React.SetStateAction<number | undefined>>
  setSelectedItem: (item: string) => void
}

export const SelectContext = createContext<SelectContextState>({
  isOpen: false,
  selectedItem: '',
  triggerRef: null,
  listRef: null,
  selectedIdx: undefined,
  setSelectedIdx: () => null,
  setIsOpen: () => null,
  setSelectedItem: () => null,
})

export const focusStyle = `text-primary-main`

function Select({ children, ...props }: PropsWithChildren<SelectProps>) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIdx, setSelectedIdx] = useState<number>()

  const triggerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  return (
    <SelectContext.Provider
      value={{
        isOpen,
        setIsOpen,
        triggerRef,
        selectedIdx,
        setSelectedIdx,
        listRef,
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
