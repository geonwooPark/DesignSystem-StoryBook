import React, { PropsWithChildren, useContext } from 'react'
import { SelectContext } from './Select'

function SelectTriggerText({ children }: PropsWithChildren) {
  const { selectedItem } = useContext(SelectContext)

  return <div className="mr-2">{selectedItem || children}</div>
}

export default SelectTriggerText
