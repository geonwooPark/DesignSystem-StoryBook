import { useEffect, useState } from 'react'
import { focusStyle } from '../contants'

type UseFadeAnimationParams = {
  isOpen: boolean
  focusedIndex: number | undefined
  listRef: React.RefObject<HTMLUListElement> | null
}

export default function useFadeAnimation({
  isOpen,
  focusedIndex,
  listRef,
}: UseFadeAnimationParams) {
  const [fade, setFade] = useState(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    if (isOpen) {
      setFade(true)
    } else {
      timer = setTimeout(() => setFade(false), 200)
    }
    return () => clearTimeout(timer)
  }, [isOpen])

  useEffect(() => {
    if (typeof focusedIndex !== 'undefined') {
      const childNode = listRef?.current?.childNodes[focusedIndex] as Element
      if (childNode instanceof HTMLElement) {
        childNode.focus()
        childNode.classList.add(focusStyle)
      }
    } else {
      const list = listRef?.current?.childNodes
      if (!list) return

      for (let i = 0; i < list?.length; i++) {
        const node = list[i]
        if (node instanceof HTMLElement) {
          if (node.dataset.disabled !== 'true') {
            node.focus()
            node.classList.add(focusStyle)
            break
          }
        }
      }
    }
  }, [fade])

  return { fade }
}
