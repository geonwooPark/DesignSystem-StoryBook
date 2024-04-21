import React from 'react'
import LabelInputWithIcon from './LabelInputWithIcon'
import { ReactComponent as EyeIcon } from '../../assets/eye.svg'

export default {
  title: 'COMPONENTS/Input/LabelInputWithIcon',
  component: LabelInputWithIcon,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    placeholder: 'placeholder',
    icon: <EyeIcon />,
    label: 'Label',
  },
}
