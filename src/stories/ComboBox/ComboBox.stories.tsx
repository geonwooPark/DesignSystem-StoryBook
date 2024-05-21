import React, { useState } from 'react'
import IconBox from '../../atomic/IconBox'
import IconArrowDown from '../../atomic/Icons/IconArrowDown'
import ComboBox from './ComboBox'

const fruits = [
  { value: 'apple', label: '사과' },
  { value: 'banana', label: '바나나', disabled: true },
  { value: 'kiwi', label: '키위' },
  { value: 'peach', label: '복숭아', disabled: true },
  { value: 'grape', label: '포도' },
  { value: 'coconut', label: '코코넛' },
  { value: 'blackberry', label: '블랙베리' },
  { value: 'lemon', label: '레몬' },
  { value: 'mango', label: '망고' },
  { value: 'plum', label: '자두' },
  { value: 'tangerine', label: '귤' },
  { value: 'tomato', label: '토마토' },
  { value: 'watermelon', label: '수박', disabled: true },
  { value: 'lime', label: '라임' },
]

export default {
  title: 'COMPONENTS/ComboBox',
  component: ComboBox,
  tags: ['autodocs'],
}

export function Default() {
  const [value, setValue] = useState<string>()

  return (
    <div className="w-[240px] text-sm">
      <ComboBox value={value} setValue={setValue} list={fruits}>
        <ComboBox.Label>콤보박스</ComboBox.Label>
        <ComboBox.Trigger>
          <button className="flex w-full items-center rounded-md border px-3 py-2">
            <ComboBox.Input placeholder="Fruits" />
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
