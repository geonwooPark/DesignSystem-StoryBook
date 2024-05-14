import React, { PropsWithChildren } from 'react'

function IconBox({ children }: PropsWithChildren) {
  return (
    <div className={`flex size-[20px] items-center justify-center`}>
      {children}
    </div>
  )
}

export default IconBox
