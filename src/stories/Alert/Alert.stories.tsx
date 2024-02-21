import React from 'react'
import Alert from './Alert'
import useAlertState from '../../hooks/useAlertState'

export default {
  title: 'ALERT/Alert',
  component: Alert,
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div className="flex flex-col gap-4">
        <Story />
      </div>
    ),
  ],
}

export const Example = {
  args: {
    type: 'info',
    delay: 60000,
    message: 'Alert Component',
    reset: () => null,
  },
}

export function Type() {
  const {
    infoAlertState,
    resetInfoAlert,
    successAlertState,
    resetSuccessAlert,
    errorAlertState,
    resetErrorAlert,
  } = useAlertState()

  return (
    <>
      <Alert
        type={infoAlertState.type}
        delay={60000}
        message={infoAlertState.message}
        position="topLeft"
        reset={resetInfoAlert}
      />
      <Alert
        type={successAlertState.type}
        delay={60000}
        message={successAlertState.message}
        position="topCenter"
        reset={resetSuccessAlert}
      />
      <Alert
        type={errorAlertState.type}
        delay={60000}
        message={errorAlertState.message}
        position="topRight"
        reset={resetErrorAlert}
      />
    </>
  )
}

export function Display() {
  const {
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
  } = useAlertState()

  return (
    <>
      <Alert
        type={TopLeftAlertState.type}
        delay={60000}
        message={TopLeftAlertState.message}
        position="topLeft"
        reset={resetTopLeftAlert}
      />
      <Alert
        type={TopRightAlertState.type}
        delay={60000}
        message={TopRightAlertState.message}
        position="topRight"
        reset={resetTopRightAlert}
      />
      <Alert
        type={TopCenterAlertState.type}
        delay={60000}
        message={TopCenterAlertState.message}
        position="topCenter"
        reset={resetTopCenterAlert}
      />
      <Alert
        type={BottomLeftAlertState.type}
        delay={60000}
        message={BottomLeftAlertState.message}
        position="bottomLeft"
        reset={resetBottomLeftAlert}
      />
      <Alert
        type={BottomRightAlertState.type}
        delay={60000}
        message={BottomRightAlertState.message}
        position="bottomRight"
        reset={resetBottomRightAlert}
      />
      <Alert
        type={BottomCenterAlertState.type}
        delay={60000}
        message={BottomCenterAlertState.message}
        position="bottomCenter"
        reset={resetBottomCenterAlert}
      />
    </>
  )
}
