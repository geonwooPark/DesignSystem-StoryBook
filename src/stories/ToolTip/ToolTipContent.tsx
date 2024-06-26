import React, { PropsWithChildren, useContext } from 'react'
import { createPortal } from 'react-dom'
import { ToolTipContext } from './ToolTop'
import { TOOLTIP_TRIANGLE_DIRECTION } from '../../contants'

const tooltipDiv = document.createElement('div')
tooltipDiv.id = 'tool-tip-container'
document.body.appendChild(tooltipDiv)
const portalRoot = document.getElementById('tool-tip-container') as HTMLElement

function ToolTipContent({ children }: PropsWithChildren) {
  const { isOpen, disabled, direction, tooltipRef, leaveTimer, setIsOpen } =
    useContext(ToolTipContext)

  const onMouseOver = () => {
    clearTimeout(leaveTimer.current)
    setIsOpen(true)
  }

  const onMouseLeave = () => {
    setIsOpen(false)
  }

  return (
    <>
      {disabled ||
        (isOpen &&
          createPortal(
            <div
              className="fixed"
              ref={tooltipRef}
              onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}
            >
              <div>{children}</div>
              <div
                className={`absolute z-[-1] size-2.5 rotate-45 ${TOOLTIP_TRIANGLE_DIRECTION[direction]}`}
              />
            </div>,
            portalRoot,
          ))}
    </>
  )
}

export default ToolTipContent
