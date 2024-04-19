import React from 'react'
import CheckBox from './CheckBox'

const sampleList = [
  { label: 'Box #1', isChecked: false },
  { label: 'Box #2', isChecked: false },
  { label: 'Box #3', isChecked: false },
  { label: 'Box #4', isChecked: false },
  { label: 'Box #5', isChecked: false },
]

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
}

export const Example = {
  args: {
    list: sampleList,
    changeState: () => null,
    name: 'checkbox',
  },
}

export function DefaultChecked() {
  const checkedlist = [
    { label: 'Box #1', isChecked: true },
    { label: 'Box #2', isChecked: false },
    { label: 'Box #3', isChecked: false },
    { label: 'Box #4', isChecked: false },
    { label: 'Box #5', isChecked: false },
  ]

  return (
    <CheckBox list={checkedlist} name={'checkbox'} changeState={() => null} />
  )
}
