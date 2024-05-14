import { useEffect, useState } from 'react'

type UseFadeAnimationParams = {
  isOpen: boolean
}

export default function useFadeAnimation({ isOpen }: UseFadeAnimationParams) {
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

  return { fade }
}
