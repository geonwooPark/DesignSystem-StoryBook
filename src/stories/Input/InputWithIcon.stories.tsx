import React from 'react'
import InputWithIcon from './InputWithIcon'
import { ReactComponent as EyeIcon } from '../../assets/eye.svg'

export default {
  title: 'INPUT/InputWithIcon',
  component: InputWithIcon,
  tags: ['autodocs'],
}

export const Example = {
  args: {
    placeholder: 'placeholder',
    icon: <EyeIcon />,
  },
}
