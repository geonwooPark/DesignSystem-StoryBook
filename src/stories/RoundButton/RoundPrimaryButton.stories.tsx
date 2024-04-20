import React from 'react'
import { ReactComponent as HeartIcon } from '../../assets/heart.svg'
import RoundPrimaryButton from './RoundPrimaryButton'

export default {
  title: 'COMPONENTS/Button/RoundPrimaryButton',
  component: RoundPrimaryButton,
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
      <RoundPrimaryButton size="sm" label="Button" type="button" />
      <RoundPrimaryButton size="md" label="Button" type="button" />
      <RoundPrimaryButton size="lg" label="Button" type="button" />
    </>
  )
}

export function Disable() {
  return (
    <>
      <RoundPrimaryButton
        size="sm"
        label="Button"
        type="button"
        disabled={true}
      />
      <RoundPrimaryButton
        size="md"
        label="Button"
        type="button"
        disabled={true}
      />
      <RoundPrimaryButton
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
      <RoundPrimaryButton
        size="sm"
        label="Button"
        type="button"
        icon={<HeartIcon />}
      />
      <RoundPrimaryButton
        size="md"
        label="Button"
        type="button"
        icon={<HeartIcon />}
      />
      <RoundPrimaryButton
        size="lg"
        label="Button"
        type="button"
        icon={<HeartIcon />}
      />
    </>
  )
}
