import React from 'react'
import DropDown from './stories/DropDown/DropDown'

const ItemList = [
  { value: 'item1' },
  { value: 'item2' },
  { value: 'item3' },
  { value: 'item4' },
]

function App() {
  return <DropDown size="sm" ItemList={ItemList} label="선택하세요." />
}

export default App
