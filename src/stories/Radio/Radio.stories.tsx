import React from 'react'
import Radio from './Radio'

const list = [{ value: 'value1' }, { value: 'value2' }, { value: 'value3' }]

export default {
  title: 'RADIO/Radio',
  component: Radio,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    list,
    changeState: () => null,
    name: 'radio',
  },
}

export function DefaultChecked() {
  return (
    <Radio
      list={list}
      name={'radio'}
      changeState={() => null}
      defaultChecked="value1"
    />
  )
}
