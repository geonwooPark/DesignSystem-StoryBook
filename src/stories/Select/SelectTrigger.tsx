import React, { PropsWithChildren, useContext } from 'react'
import { SelectContext } from './Select'

function SelectTrigger({ children }: PropsWithChildren) {
  const { triggerRef, setIsOpen, onKeyboardTrigger } = useContext(SelectContext)

  return (
    <div
      role="button"
      ref={triggerRef}
      onKeyDown={onKeyboardTrigger}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {children}
    </div>
  )
}

export default SelectTrigger
