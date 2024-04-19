import React, { PropsWithChildren, useEffect, useState } from 'react'
import { cn } from '../../utils/cn'

interface TapProps {
  tapList: { value: string; content: React.ReactNode }[]
}

/** 클릭 등의 상호작용을 감지하여 특정 섹션을 보여주는 동작을 수행하는 인터페이스 요소 */
function Tap({ tapList }: PropsWithChildren<TapProps>) {
  const [currentTap, setCurrentTap] = useState(0)
  const [animation, setAnimation] = useState(false)

  const onClick = (selectedTap: number) => {
    setAnimation(true)
    setCurrentTap(selectedTap)
  }

  useEffect(() => {
    setAnimation(false)
  }, [currentTap])

  return (
    <div>
      <div className="flex bg-white">
        {tapList.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onClick(idx)}
            className={cn(
              `flex h-10 w-[100px] text-sm rounded-[3px] duration-200 text-secondary-main cursor-pointer items-center justify-center bg-white ${currentTap === idx && 'bg-primary-light font-bold text-primary-main'}`,
            )}
          >
            {item.value}
          </div>
        ))}
      </div>
      <div className="bg-slate-50">
        {tapList.map((item, idx) => (
          <div
            key={idx}
            className={cn(`hidden ${currentTap === idx && 'block'}`)}
          >
            <div
              className={`${animation ? 'opacity-0' : 'opacity-100'} duration-300`}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tap
