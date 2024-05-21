import React, { useState } from 'react'
import Select from './stories/Select/Select'
import IconArrowDown from './atomic/Icons/IconArrowDown'
import IconBox from './atomic/IconBox'
import ComboBox from './stories/ComboBox/ComboBox'

const list = [
  { value: 'apple', label: 'Apple', disabled: true },
  { value: 'banana', label: 'Banana', disabled: true },
  { value: 'kiwi', label: 'Kiwi' },
  { value: 'peach', label: 'Peach', disabled: true },
  { value: 'grape', label: 'Grape' },
  { value: 'aloe', label: 'Aloe' },
  { value: 'apple2', label: 'Apple2' },
  { value: 'banana2', label: 'Banana2', disabled: true },
  { value: 'kiwi2', label: 'Kiwi2' },
  { value: 'peach2', label: 'Peach2', disabled: true },
  { value: 'grape2', label: 'Grape2' },
  { value: 'aloe2', label: 'Aloe2' },
  { value: 'apple3', label: 'Apple3' },
  { value: 'banana3', label: 'Banana3', disabled: true },
  { value: 'kiwi3', label: 'Kiwi3' },
  { value: 'peach3', label: 'Peach3', disabled: true },
  { value: 'grape3', label: 'Grape3' },
  { value: 'aloe3', label: 'Aloe3' },
]

function App() {
  const [value, setValue] = useState<string>()

  return (
    <div className="w-[320px] text-sm">
      <Select value={value} setValue={setValue} list={list}>
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
          {({ optionList }) =>
            optionList.map((item, idx) => (
              <Select.Item key={item.value} idx={idx} item={item}>
                <button className={`w-full px-3 py-2`}>{item.label}</button>
              </Select.Item>
            ))
          }
        </Select.List>
      </Select>

      <ComboBox value={value} setValue={setValue} list={list}>
        <ComboBox.Label>콤보박스</ComboBox.Label>
        <ComboBox.Trigger>
          <button className="flex w-full items-center rounded-md border px-3 py-2">
            <ComboBox.Input placeholder="Movies" />
            <div className="flex gap-2">
              <ComboBox.ClearButton />
              <IconBox className="cursor-pointer">
                <IconArrowDown />
              </IconBox>
            </div>
          </button>
        </ComboBox.Trigger>

        <ComboBox.List>
          {({ optionList }) =>
            optionList.map((item, idx) => (
              <ComboBox.Item key={item.value} idx={idx} item={item}>
                <button className={`w-full px-3 py-2`}>{item.label}</button>
              </ComboBox.Item>
            ))
          }
        </ComboBox.List>
      </ComboBox>
    </div>
  )
}

export default App
