import React, { useState } from 'react'
import Select from './stories/Select/Select'
import IconArrowDown from './atomic/Icons/IconArrowDown'
import IconBox from './atomic/IconBox'

const list = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana', disabled: true },
  { value: 'kiwi', label: 'Kiwi' },
  { value: 'peach', label: 'Peach', disabled: true },
  { value: 'grape', label: 'Grape' },
  { value: 'aloe', label: 'Aloe' },
]

function App() {
  const [value, setValue] = useState('')

  return (
    <div className="w-[240px] text-sm">
      <Select value={value} setValue={setValue}>
        <Select.Label>셀렉트박스</Select.Label>

        <Select.Trigger>
          <button className="flex w-full items-center justify-between rounded-md border px-3 py-2">
            <Select.TriggerText>메뉴를 선택하세요.</Select.TriggerText>
            <IconBox>
              <IconArrowDown />
            </IconBox>
          </button>
        </Select.Trigger>

        <Select.List>
          {list.map((item, idx) => (
            <Select.Item
              key={item.value}
              idx={idx}
              item={item}
              disabled={item.disabled}
            >
              <button className={`w-full px-3 py-2`}>{item.label}</button>
            </Select.Item>
          ))}
        </Select.List>
      </Select>
    </div>
  )
}

export default App
