import React from 'react'

type RadioProps =
  | {
      list: { label: string }[]
      name: string
      selectedItem: number
      changeState: (itemIdx: number) => void
      flexDirection?: 'row' | 'column'
      register?: never
      /** 기본적으로 선택되어 있는 아이템을 설정  */
    }
  | {
      list: { label: string }[]
      name?: never
      selectedItem: number
      changeState: (itemIdx: number) => void
      /** 라디오 그룹의 flex 레이아웃 방향을 설정 */
      flexDirection?: 'row' | 'column'
      register: any
      /** 기본적으로 선택되어 있는 아이템을 설정  */
    }

/** 여러 옵션 중 하나를 선택할 때 사용되며, 단일 선택이 가능한 버튼 형태의 인터페이스 요소 */
function Radio({
  list,
  name,
  selectedItem,
  changeState,
  flexDirection = 'row',
  register,
}: RadioProps) {
  return (
    <div className={`flex gap-5 ${flexDirection === 'column' && 'flex-col'}`}>
      {list.map((item, itemIdx) => (
        <label key={itemIdx} className="flex cursor-pointer gap-[6px]">
          <input
            checked={itemIdx === selectedItem}
            type="radio"
            name={name}
            className="peer hidden"
            value={item.label}
            onChange={() => changeState(itemIdx)}
            {...register}
          />
          <div className="size-5 rounded-full border-4 border-grey duration-200 peer-checked:border-4 peer-checked:border-primary-main" />
          <div className="text-sm text-secondary-main duration-200 peer-checked:text-secondary-strong">
            {item.label}
          </div>
        </label>
      ))}
    </div>
  )
}

export default Radio
