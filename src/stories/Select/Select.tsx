import React, {
  KeyboardEventHandler,
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
  value: string
  selectedItem: string | undefined
  triggerRef: React.RefObject<HTMLDivElement> | null
  listRef: React.RefObject<HTMLUListElement> | null
  focusedIndex: number | undefined
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  openListWithKeyboard: KeyboardEventHandler<HTMLDivElement>
  selectItem: ({
    value,
    label,
    idx,
    disabled,
  }: {
    value: string
    label: string
    idx: number
    disabled?: boolean
  }) => void
  selectItemWithKeyboard: KeyboardEventHandler<HTMLLIElement>
}

export const SelectContext = createContext<SelectContextState>({
  isOpen: false,
  value: '',
  selectedItem: '',
  triggerRef: null,
  listRef: null,
  focusedIndex: undefined,
  setIsOpen: () => null,
  openListWithKeyboard: () => null,
  selectItem: () => null,
  selectItemWithKeyboard: () => null,
})

export const focusStyle = `text-primary-main`

/** 사용자가 리스트에서 옵션을 선택할 수 있도록 목록을 표시해주는 인터페이스 요소 */
function Select({ children, ...props }: PropsWithChildren<SelectProps>) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<string>()
  const [focusedIndex, setFocusedIdx] = useState<number>()

  const triggerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const openListWithKeyboard: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setIsOpen(true)
    }
  }

  const selectItem = ({
    value,
    label,
    idx,
    disabled,
  }: {
    value: string
    label: string
    idx: number
    disabled?: boolean
  }) => {
    if (disabled) return
    const { setValue } = props

    setIsOpen(false)
    setFocusedIdx(idx)
    setSelectedItem(label)
    setValue(value)
  }

  const selectItemWithKeyboard: KeyboardEventHandler<HTMLLIElement> = (e) => {
    e.preventDefault()
    const element = e.target as HTMLElement

    if (e.key === 'Enter') {
      selectItem({
        value: element.dataset.value as string,
        label: element.dataset.label as string,
        idx: element.tabIndex,
      })
    }

    if (e.key === 'ArrowDown') {
      if (!element.nextSibling) return

      let nextChildNode = element.nextSibling as HTMLElement | null
      while (nextChildNode && nextChildNode.dataset.disabled === 'true') {
        nextChildNode = nextChildNode.nextSibling as HTMLElement | null
      }
      if (nextChildNode) {
        nextChildNode.focus()
        nextChildNode.classList.add(focusStyle)
        element.classList.remove(focusStyle)
      }
    }

    if (e.key === 'ArrowUp') {
      if (!element.previousSibling) return

      let prevChildNode = element.previousSibling as HTMLElement | null
      while (prevChildNode && prevChildNode.dataset.disabled === 'true') {
        prevChildNode = prevChildNode.previousSibling as HTMLElement | null
      }
      if (prevChildNode) {
        prevChildNode.focus()
        prevChildNode.classList.add(focusStyle)
        element.classList.remove(focusStyle)
      }
    }
  }

  return (
    <SelectContext.Provider
      value={{
        isOpen,
        triggerRef,
        listRef,
        focusedIndex,
        selectedItem,
        setIsOpen,
        openListWithKeyboard,
        selectItem,
        selectItemWithKeyboard,
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
