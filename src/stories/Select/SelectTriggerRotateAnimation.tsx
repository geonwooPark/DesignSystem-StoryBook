import React, { PropsWithChildren, useContext } from 'react'
import { SelectContext } from './Select'

function SelectTriggerRotateAnimation({ children }: PropsWithChildren) {
  const { isOpen } = useContext(SelectContext)

  return (
    <div className={`duration-200 ${isOpen ? 'rotate-180' : ''}`}>
      {children}
    </div>
  )
}

export default SelectTriggerRotateAnimation
