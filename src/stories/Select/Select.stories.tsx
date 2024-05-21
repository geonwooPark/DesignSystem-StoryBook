import React, { useState } from 'react'
import Select from './Select'
import IconBox from '../../atomic/IconBox'
import IconArrowDown from '../../atomic/Icons/IconArrowDown'

const list = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana', disabled: true },
  { value: 'kiwi', label: 'Kiwi' },
  { value: 'peach', label: 'Peach', disabled: true },
  { value: 'grape', label: 'Grape' },
  { value: 'aloe', label: 'Aloe' },
]

export default {
  title: 'COMPONENTS/Select',
  component: Select,
  tags: ['autodocs'],
}

export function Default() {
  const [value, setValue] = useState<string>()

  return (
    <div className="w-[240px] text-sm">
      <Select setValue={setValue} list={list}>
        <Select.Label>레이블</Select.Label>

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
    </div>
  )
}
