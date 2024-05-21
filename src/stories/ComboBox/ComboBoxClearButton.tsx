import React, { useContext } from 'react'
import IconBox from '../../atomic/IconBox'
import IconClose from '../../atomic/Icons/IconClose'
import { ComboBoxContext } from './ComboBox'

function ComboBoxClearButton() {
  const { onClear } = useContext(ComboBoxContext)

  return (
    <IconBox onClick={onClear} className="cursor-pointer">
      <IconClose />
    </IconBox>
  )
}

export default ComboBoxClearButton
