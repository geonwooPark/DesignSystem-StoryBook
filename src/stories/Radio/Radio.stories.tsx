import React, { useState } from 'react'
import Radio from './Radio'

const sampleList = [
  { label: 'Radio #1' },
  { label: 'Radio #2' },
  { label: 'Radio #3' },
  { label: 'Radio #4' },
  { label: 'Radio #5' },
]

export default {
  title: 'COMPONENTS/Radio',
  component: Radio,
  tags: ['autodocs'],
}

export function Example() {
  const [selectedItem, setSelectedItem] = useState(0)

  const changeState = (itemIdx: number) => {
    setSelectedItem(itemIdx)
  }

  return (
    <Radio
      list={sampleList}
      name={'radio'}
      changeState={changeState}
      selectedItem={selectedItem}
    />
  )
}

export function VerticalRadio() {
  const [selectedItem, setSelectedItem] = useState(0)

  const changeState = (itemIdx: number) => {
    setSelectedItem(itemIdx)
  }

  return (
    <Radio
      list={sampleList}
      name={'radio'}
      flexDirection="column"
      changeState={changeState}
      selectedItem={selectedItem}
    />
  )
}
