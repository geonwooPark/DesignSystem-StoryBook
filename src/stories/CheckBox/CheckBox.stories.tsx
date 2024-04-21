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
  title: 'COMPONENTS/CheckBox',
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
    { label: 'CheckBox #1', isChecked: true },
    { label: 'CheckBox #2', isChecked: false },
    { label: 'CheckBox #3', isChecked: false },
    { label: 'CheckBox #4', isChecked: false },
    { label: 'CheckBox #5', isChecked: false },
  ]

  return (
    <CheckBox list={checkedlist} name={'checkbox'} changeState={() => null} />
  )
}
