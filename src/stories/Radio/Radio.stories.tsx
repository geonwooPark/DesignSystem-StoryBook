import React from 'react'
import Radio from './Radio'

const list = [{ label: 'value1' }, { label: 'value2' }, { label: 'value3' }]

export default {
  title: 'RADIO/Radio',
  component: Radio,
  tags: ['autodocs'],
}

export const Example = {
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
