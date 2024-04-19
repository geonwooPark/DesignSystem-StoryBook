import React from 'react'
import InputWithIcon from './InputWithIcon'
import { ReactComponent as EyeIcon } from '../../assets/eye.svg'

export default {
  title: 'Components/Input/InputWithIcon',
  component: InputWithIcon,
  tags: ['autodocs'],
}

export const Example = {
  args: {
    placeholder: 'placeholder',
    icon: <EyeIcon />,
  },
}
