import React, { useState } from 'react'

export default function useModalState() {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)

  const openModal1 = () => {
    setIsOpen1(true)
  }

  const openModal2 = () => {
    setIsOpen2(true)
  }

  const closeModal1 = () => {
    setIsOpen1(false)
  }

  const closeModal2 = () => {
    setIsOpen2(false)
  }

  const modalData1 = {
    title: '존재하지 않는 글',
    content: '해당 글이 존재하지 않습니다.',
    action: () => () => {
      setIsOpen1(false)
      console.log('실행 완료1')
    },
  }

  const modalData2 = {
    title: '삭제하기',
    content: '정말 삭제하시겠습니까?',
    action: () => async () => {
      await new Promise((resolve) => setTimeout(resolve, 500))
      setIsOpen2(false)
      console.log('실행 완료2')
    },
  }

  return {
    isOpen1,
    isOpen2,
    openModal1,
    openModal2,
    closeModal1,
    closeModal2,
    modalData1,
    modalData2,
  }
}
