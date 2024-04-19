import React from 'react'
import Modal from './Modal'
import useModalState from '../../hooks/useModalState'

export default {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div>
        <Story />
      </div>
    ),
  ],
}

export function All() {
  const {
    isOpen1,
    isOpen2,
    openModal1,
    openModal2,
    closeModal1,
    closeModal2,
    modalData1,
    modalData2,
  } = useModalState()

  return (
    <div>
      <button onClick={openModal1} className="mr-4 bg-blue-100 px-4 py-2">
        Type1
      </button>
      <button onClick={openModal2} className="bg-red-100 px-4 py-2">
        Type2
      </button>
      <Modal
        isOpen={isOpen1}
        closeModal={closeModal1}
        actionLabel={'확인'}
        isCancleBtn={false}
        modalData={modalData1}
      />
      <Modal
        isOpen={isOpen2}
        closeModal={closeModal2}
        actionLabel={'삭제'}
        isCancleBtn={true}
        modalData={modalData2}
      />
    </div>
  )
}
