import React from 'react'
import { ReactComponent as HeartIcon } from '../assets/heart.svg'
import RoundOutLineButton from './RoundOutLineButton'

export default {
  title: 'ROUNDBUTTON/RoundOutLineButton',
  component: RoundOutLineButton,
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
    size: 'sm',
    label: 'Button',
    type: 'button',
    disabled: false,
  },
  argTypes: {
    icon: {
      options: [<HeartIcon key={Math.random()} />, null],
      control: { type: 'radio' },
    },
  },
}

export function Size() {
  return (
    <>
      <RoundOutLineButton size="sm" label="Button" type="button" />
      <RoundOutLineButton size="md" label="Button" type="button" />
      <RoundOutLineButton size="lg" label="Button" type="button" />
    </>
  )
}

export function Disable() {
  return (
    <>
      <RoundOutLineButton
        size="sm"
        label="Button"
        type="button"
        disabled={true}
      />
      <RoundOutLineButton
        size="md"
        label="Button"
        type="button"
        disabled={true}
      />
      <RoundOutLineButton
        size="lg"
        label="Button"
        type="button"
        disabled={true}
      />
    </>
  )
}

export function Icon() {
  return (
    <>
      <RoundOutLineButton
        size="sm"
        label="Button"
        type="button"
        icon={<HeartIcon />}
      />
      <RoundOutLineButton
        size="md"
        label="Button"
        type="button"
        icon={<HeartIcon />}
      />
      <RoundOutLineButton
        size="lg"
        label="Button"
        type="button"
        icon={<HeartIcon />}
      />
    </>
  )
}
