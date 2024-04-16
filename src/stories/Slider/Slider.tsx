import React, { PropsWithChildren, useCallback, useRef, useState } from 'react'

interface SliderProps {
  gap: number
}

export default function Slider({
  children,
  gap,
}: PropsWithChildren<SliderProps>) {
  const slideContainer = useRef<HTMLDivElement>(null)

  const [isDragging, setIsDragging] = useState(false)
  const [startPoint, setStartPoint] = useState(0)
  const [totalX, setTotalX] = useState(0)

  const preventUnexpectedEffects = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault()
      e.stopPropagation()
    },
    [],
  )

  const onDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    // preventUnexpectedEffects(e)
    setIsDragging(true)
    const x = e.clientX
    setStartPoint(x)
    if (slideContainer.current && 'scrollLeft' in slideContainer.current) {
      setTotalX(x + slideContainer.current.scrollLeft)
    }
  }

  const onDragMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    preventUnexpectedEffects(e)

    const scrollLeft = totalX - e.clientX

    if (slideContainer.current && 'scrollLeft' in slideContainer.current) {
      slideContainer.current.scrollLeft = scrollLeft
    }
  }

  const onDragEnd = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    if (!slideContainer.current) return

    setIsDragging(false)

    const endX = e.clientX
    const childNodes = slideContainer.current?.childNodes
    const dragDiff = Math.abs(startPoint - endX)

    if (dragDiff > 10) {
      childNodes.forEach((child) => {
        child.addEventListener('click', preventUnexpectedEffects as any)
      })
    } else {
      childNodes.forEach((child) => {
        child.removeEventListener('click', preventUnexpectedEffects as any)
      })
    }
  }

  const onPrevButtonClick = () => {
    if (!slideContainer.current) return
    if (!gap) return

    const childNodes = slideContainer.current
      .childNodes as NodeListOf<HTMLElement>

    const width = childNodes[0].offsetWidth

    const firstViewChildIndex = Math.floor(
      slideContainer.current?.scrollLeft / (width + gap),
    )

    if (
      firstViewChildIndex > 0 &&
      Number.isInteger(slideContainer.current?.scrollLeft / (width + gap))
    ) {
      slideContainer.current.scrollLeft =
        childNodes[firstViewChildIndex - 1].offsetLeft
    } else {
      slideContainer.current.scrollLeft =
        childNodes[firstViewChildIndex].offsetLeft
    }
  }

  const onNextButtonClick = () => {
    if (!slideContainer.current) return
    if (!gap) return

    const childNodes = slideContainer.current
      .childNodes as NodeListOf<HTMLElement>

    const width = childNodes[0].offsetWidth

    const firstViewChildIndex = Math.floor(
      slideContainer.current?.scrollLeft / (width + gap),
    )

    slideContainer.current.scrollLeft =
      childNodes[firstViewChildIndex + 1].offsetLeft
  }

  const throttle = (callback: any, delay: number) => {
    let throttled = false
    return (...args: any) => {
      if (!throttled) {
        throttled = true
        setTimeout(() => {
          callback(...args)
          throttled = false
        }, delay)
      }
    }
  }

  const onThrottleDragMove = throttle(onDragMove, 50)

  return (
    <div className="relative w-full">
      <button
        onClick={onPrevButtonClick}
        className="absolute left-[-12px] top-[50%] translate-y-[-55%] rounded-full bg-blue-600 p-2 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <div
        ref={slideContainer}
        onMouseDown={onDragStart}
        onMouseUp={onDragEnd}
        onMouseMove={onThrottleDragMove}
        onMouseLeave={onDragEnd}
        style={{ gap: `${gap}px` }}
        className={`flex cursor-grab overflow-x-scroll scroll-smooth py-2 scrollbar-hide [&>*]:shrink-0`}
      >
        {children}
      </div>
      <button
        onClick={onNextButtonClick}
        className="absolute right-[-12px] top-[50%] translate-y-[-50%] rounded-full bg-blue-600 p-2 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  )
}
