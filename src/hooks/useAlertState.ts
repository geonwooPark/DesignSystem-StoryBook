import React, { useState } from 'react'

interface AlertType {
  type: 'info' | 'success' | 'error' | null
  message: string
}

const initAlertState = {
  type: null,
  message: '',
}

export default function useAlertState() {
  // Type
  const [infoAlertState, setInfoAlertState] = useState<AlertType>({
    type: 'info',
    message: 'Info Type Alert',
  })

  const [successAlertState, setSuccessAlertState] = useState<AlertType>({
    type: 'success',
    message: 'success Type Alert',
  })

  const [errorAlertState, setErrorAlertState] = useState<AlertType>({
    type: 'error',
    message: 'error Type Alert',
  })

  const resetInfoAlert = () => {
    setInfoAlertState(initAlertState)
  }

  const resetSuccessAlert = () => {
    setSuccessAlertState(initAlertState)
  }

  const resetErrorAlert = () => {
    setErrorAlertState(initAlertState)
  }

  // Display
  const [TopLeftAlertState, setTopLeftAlertState] = useState<AlertType>({
    type: 'info',
    message: 'Top Left Postion',
  })

  const [TopRightAlertState, setTopRightAlertState] = useState<AlertType>({
    type: 'success',
    message: 'Top Right Postion',
  })

  const [TopCenterAlertState, setTopCenterAlertState] = useState<AlertType>({
    type: 'error',
    message: 'Top Center Postion',
  })

  const [BottomLeftAlertState, setBottomLeftAlertState] = useState<AlertType>({
    type: 'info',
    message: 'Bottom Left Postion',
  })

  const [BottomRightAlertState, setBottomRightAlertState] = useState<AlertType>(
    {
      type: 'success',
      message: 'Bottom Right Postion',
    },
  )

  const [BottomCenterAlertState, setBottomCenterAlertState] =
    useState<AlertType>({
      type: 'error',
      message: 'Bottom Center Postion',
    })

  const resetTopLeftAlert = () => {
    setTopLeftAlertState(initAlertState)
  }

  const resetTopRightAlert = () => {
    setTopRightAlertState(initAlertState)
  }

  const resetTopCenterAlert = () => {
    setTopCenterAlertState(initAlertState)
  }

  const resetBottomLeftAlert = () => {
    setBottomLeftAlertState(initAlertState)
  }

  const resetBottomRightAlert = () => {
    setBottomRightAlertState(initAlertState)
  }

  const resetBottomCenterAlert = () => {
    setBottomCenterAlertState(initAlertState)
  }

  return {
    infoAlertState,
    resetInfoAlert,
    successAlertState,
    resetSuccessAlert,
    errorAlertState,
    resetErrorAlert,
    TopLeftAlertState,
    resetTopLeftAlert,
    TopRightAlertState,
    resetTopRightAlert,
    TopCenterAlertState,
    resetTopCenterAlert,
    BottomLeftAlertState,
    resetBottomLeftAlert,
    BottomRightAlertState,
    resetBottomRightAlert,
    BottomCenterAlertState,
    resetBottomCenterAlert,
  }
}
