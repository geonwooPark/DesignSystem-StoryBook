import React, { PropsWithChildren, useState } from 'react'
import { cn } from '../../utils/cn'

interface TapProps {
  TapList: { value: string; content: React.ReactNode }[]
}

function Tap({ TapList }: PropsWithChildren<TapProps>) {
  const [currentTap, setCurrentTap] = useState(TapList[0].value)

  const onClick = (selectedTap: string) => {
    setCurrentTap(selectedTap)
  }

  return (
    <div>
      <div className="flex">
        {TapList.map((item, i) => (
          <div
            key={i}
            onClick={() => onClick(item.value)}
            className={cn(
              `flex h-10 w-[100px] text-sm rounded-[3px] duration-200 text-secondary-main cursor-pointer items-center justify-center bg-white ${currentTap === item.value && 'bg-primary-light font-bold text-primary-main'}`,
            )}
          >
            {item.value}
          </div>
        ))}
      </div>
      <div className="bg-slate-50">
        {TapList.map((item, i) => (
          <div
            key={i}
            className={cn(`hidden ${currentTap === item.value && 'block'}`)}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tap
