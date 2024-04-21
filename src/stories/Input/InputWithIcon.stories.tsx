import React from 'react'
import InputWithIcon from './InputWithIcon'
import { ReactComponent as EyeIcon } from '../../assets/eye.svg'

export default {
  title: 'COMPONENTS/Input/InputWithIcon',
  component: InputWithIcon,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    placeholder: 'placeholder',
    icon: <EyeIcon />,
  },
}
