import React, {
  KeyboardEventHandler,
  PropsWithChildren,
  useContext,
} from 'react'
import { SelectContext } from './Select'

function SelectTrigger({ children }: PropsWithChildren) {
  const { triggerRef, setIsOpen } = useContext(SelectContext)

  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setIsOpen(true)
    }
  }

  return (
    <div
      role="button"
      ref={triggerRef}
      onKeyDown={onKeyDown}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {children}
    </div>
  )
}

export default SelectTrigger
