import React from 'react'
import { ReactComponent as HeartIcon } from '../assets/heart.svg'
import RoundSecondaryButton from './RoundSecondaryButton'

export default {
  title: 'ROUNDBUTTON/RoundSecondaryButton',
  component: RoundSecondaryButton,
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
      <RoundSecondaryButton size="sm" label="Button" type="button" />
      <RoundSecondaryButton size="md" label="Button" type="button" />
      <RoundSecondaryButton size="lg" label="Button" type="button" />
    </>
  )
}

export function Disable() {
  return (
    <>
      <RoundSecondaryButton
        size="sm"
        label="Button"
        type="button"
        disabled={true}
      />
      <RoundSecondaryButton
        size="md"
        label="Button"
        type="button"
        disabled={true}
      />
      <RoundSecondaryButton
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
      <RoundSecondaryButton
        size="sm"
        label="Button"
        type="button"
        icon={<HeartIcon />}
      />
      <RoundSecondaryButton
        size="md"
        label="Button"
        type="button"
        icon={<HeartIcon />}
      />
      <RoundSecondaryButton
        size="lg"
        label="Button"
        type="button"
        icon={<HeartIcon />}
      />
    </>
  )
}
