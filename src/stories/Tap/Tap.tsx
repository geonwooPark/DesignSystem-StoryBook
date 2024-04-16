import React, { PropsWithChildren, useState } from 'react'
import { cn } from '../../utils/cn'

interface TapProps {
  tapList: { value: string; content: React.ReactNode }[]
}

function Tap({ tapList }: PropsWithChildren<TapProps>) {
  const [currentTap, setCurrentTap] = useState(0)

  const onClick = (selectedTap: number) => {
    setCurrentTap(selectedTap)
  }

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
            {item.content}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tap
