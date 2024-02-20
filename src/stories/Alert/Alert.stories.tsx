import React, { useState } from 'react'
import Alert from './Alert'
import SecondaryButton from '../Button/SecondaryButton'
import PrimaryButton from '../Button/PrimaryButton'

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
    isAlert: true,
    children: 'Alert Component',
  },
}

export function Type() {
  return (
    <>
      <Alert type="info" isAlert={true}>
        Info Type Alert
      </Alert>
      <Alert type="success" isAlert={true}>
        Success Type Alert
      </Alert>
      <Alert type="error" isAlert={true}>
        Error Type Alert
      </Alert>
    </>
  )
}

export function Timer() {
  const [isAlert, setIsAlert] = useState(true)
  const [timer, setTimer] = useState<number | null>(null)

  const onButtonClick = (timer: number) => {
    setTimer(timer)
    setTimeout(() => {
      setIsAlert(false)
    }, timer)
  }

  const onResetButtonClick = () => {
    setTimer(null)
    if (isAlert) return
    setIsAlert(true)
  }

  return (
    <>
      <div className="flex gap-2">
        <SecondaryButton
          type="button"
          size="sm"
          label="1 second"
          onClick={() => onButtonClick(1000)}
        />
        <SecondaryButton
          type="button"
          size="sm"
          label="3 seconds"
          onClick={() => onButtonClick(3000)}
        />
        <SecondaryButton
          type="button"
          size="sm"
          label="5 seconds"
          onClick={() => onButtonClick(5000)}
        />
        <PrimaryButton
          type="button"
          size="sm"
          label="Reset"
          onClick={onResetButtonClick}
        />
      </div>
      <Alert type="info" isAlert={isAlert} timer={timer}>
        Timer Alert
      </Alert>
    </>
  )
}
