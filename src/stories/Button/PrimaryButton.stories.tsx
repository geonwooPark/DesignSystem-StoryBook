import React from 'react'
import { ReactComponent as HeartIcon } from '../../assets/heart.svg'
import PrimaryButton from './PrimaryButton'

export default {
  title: 'COMPONENTS/Button/PrimaryButton',
  component: PrimaryButton,
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
      <PrimaryButton size="sm" label="Button" type="button" />
      <PrimaryButton size="md" label="Button" type="button" />
      <PrimaryButton size="lg" label="Button" type="button" />
    </>
  )
}

export function Disable() {
  return (
    <>
      <PrimaryButton size="sm" label="Button" type="button" disabled={true} />
      <PrimaryButton size="md" label="Button" type="button" disabled={true} />
      <PrimaryButton size="lg" label="Button" type="button" disabled={true} />
    </>
  )
}

export function Icon() {
  return (
    <>
      <PrimaryButton
        size="sm"
        label="Button"
        type="button"
        icon={<HeartIcon />}
      />
      <PrimaryButton
        size="md"
        label="Button"
        type="button"
        icon={<HeartIcon />}
      />
      <PrimaryButton
        size="lg"
        label="Button"
        type="button"
        icon={<HeartIcon />}
      />
    </>
  )
}
