import React, { useEffect, useState } from 'react'
import PrimaryButton from '../Button/PrimaryButton'
import OutLineButton from '../Button/OutLineButton'

export interface ModalProps {
  isOpen: boolean
  closeModal: () => void
  actionLabel: string
  modalData: {
    title: string
    content: string
    action: any
  }
  isCancleBtn?: boolean
}

function Modal({
  isOpen,
  closeModal,
  actionLabel,
  modalData,
  isCancleBtn = false,
}: ModalProps) {
  const { title, content, action } = modalData
  const [showModal, setShowModal] = useState(isOpen)

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-[100] flex h-screen w-screen items-center justify-center bg-black/30"
    >
      <div
        className={`${showModal ? 'opacity-100' : 'opacity-0'} h-fit w-[280px] rounded-[3px] bg-white p-2.5 duration-200`}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h2 className="mb-2.5 font-bold">{title}</h2>
          <p className="mb-5 text-sm">{content}</p>
          <div className="flex justify-end gap-2">
            {isCancleBtn && (
              <OutLineButton
                size="sm"
                label="취소"
                type="button"
                onClick={closeModal}
              />
            )}
            <PrimaryButton
              size="sm"
              label={actionLabel}
              type="button"
              onClick={action()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
