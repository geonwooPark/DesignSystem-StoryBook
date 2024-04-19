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

/** 사용자의 주의를 요구하는 중요한 정보를 제공하거나 추가 작업을 위해 현재 작업 흐름을 일시적으로 중단시키는 팝업 스타일의 인터페이스 요소 */
function Modal({
  isOpen,
  closeModal,
  actionLabel,
  modalData,
  isCancleBtn = false,
}: ModalProps) {
  const { title, content, action } = modalData
  const [isShowModal, setIsShowModal] = useState(isOpen)

  useEffect(() => {
    setIsShowModal(isOpen)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-[100] flex h-screen w-screen items-center justify-center bg-black/30"
    >
      <div
        className={`${isShowModal ? 'opacity-100' : 'opacity-0'} h-fit w-[280px] rounded-[3px] bg-white p-2.5 duration-200`}
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
