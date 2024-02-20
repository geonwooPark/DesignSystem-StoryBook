import React from 'react'
import Alert from './Alert'

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
  },
}

export function Type() {
  return (
    <>
      <Alert
        type="info"
        delay={60000}
        message="Info Type Alert"
        position="topLeft"
      />
      <Alert
        type="success"
        delay={60000}
        message="Success Type Alert"
        position="topCenter"
      />
      <Alert
        type="error"
        delay={60000}
        message="Error Type Alert"
        position="topRight"
      />
    </>
  )
}

export function Display() {
  return (
    <>
      <Alert
        type="info"
        delay={60000}
        message="Top Left Postion"
        position="topLeft"
      />
      <Alert
        type="info"
        delay={60000}
        message="Top Center Postion"
        position="topRight"
      />
      <Alert
        type="info"
        delay={60000}
        message="Top Center Postion"
        position="topCenter"
      />
      <Alert
        type="info"
        delay={60000}
        message="Bottom Left Postion"
        position="bottomLeft"
      />
      <Alert
        type="info"
        delay={60000}
        message="Bottom Right Postion"
        position="bottomRight"
      />
      <Alert
        type="info"
        delay={60000}
        message="Bottom Center Postion"
        position="bottomCenter"
      />
    </>
  )
}
