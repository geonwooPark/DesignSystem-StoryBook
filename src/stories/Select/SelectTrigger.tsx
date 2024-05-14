import React, { PropsWithChildren, useContext } from 'react'
import { SelectContext } from './Select'

function SelectTrigger({ children }: PropsWithChildren) {
  const { triggerRef, setIsOpen, openListWithKeyboard } =
    useContext(SelectContext)

  return (
    <div
      role="button"
      ref={triggerRef}
      onKeyDown={openListWithKeyboard}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {children}
    </div>
  )
}

export default SelectTrigger
