import React from 'react'
import { ReactComponent as HeartIcon } from '../../assets/heart.svg'
import SecondaryButton from './SecondaryButton'

export default {
  title: 'COMPONENTS/Button/SecondaryButton',
  component: SecondaryButton,
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div className="flex flex-col gap-4">
        <Story />
      </div>
    ),
  ],
}

export const Default = {
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
      <SecondaryButton size="sm" label="Button" type="button" />
      <SecondaryButton size="md" label="Button" type="button" />
      <SecondaryButton size="lg" label="Button" type="button" />
    </>
  )
}

export function Disable() {
  return (
    <>
      <SecondaryButton size="sm" label="Button" type="button" disabled={true} />
      <SecondaryButton size="md" label="Button" type="button" disabled={true} />
      <SecondaryButton size="lg" label="Button" type="button" disabled={true} />
    </>
  )
}

export function Icon() {
  return (
    <>
      <SecondaryButton
        size="sm"
        label="Button"
        type="button"
        icon={<HeartIcon />}
      />
      <SecondaryButton
        size="md"
        label="Button"
        type="button"
        icon={<HeartIcon />}
      />
      <SecondaryButton
        size="lg"
        label="Button"
        type="button"
        icon={<HeartIcon />}
      />
    </>
  )
}
