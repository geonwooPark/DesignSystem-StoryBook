import React from 'react'
import { ReactComponent as HeartIcon } from '../../assets/heart.svg'
import RoundGhostButton from './RoundGhostButton'

export default {
  title: 'Components/Button/RoundGhostButton',
  component: RoundGhostButton,
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
      <RoundGhostButton size="sm" label="Button" type="button" />
      <RoundGhostButton size="md" label="Button" type="button" />
      <RoundGhostButton size="lg" label="Button" type="button" />
    </>
  )
}

export function Disable() {
  return (
    <>
      <RoundGhostButton
        size="sm"
        label="Button"
        type="button"
        disabled={true}
      />
      <RoundGhostButton
        size="md"
        label="Button"
        type="button"
        disabled={true}
      />
      <RoundGhostButton
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
      <RoundGhostButton
        size="sm"
        label="Button"
        type="button"
        icon={<HeartIcon />}
      />
      <RoundGhostButton
        size="md"
        label="Button"
        type="button"
        icon={<HeartIcon />}
      />
      <RoundGhostButton
        size="lg"
        label="Button"
        type="button"
        icon={<HeartIcon />}
      />
    </>
  )
}
