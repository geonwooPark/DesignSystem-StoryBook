import React from 'react'
import { ReactComponent as HeartIcon } from '../../assets/heart.svg'
import GhostButton from './GhostButton'

export default {
  title: 'COMPONENTS/Button/GhostButton',
  component: GhostButton,
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
      <GhostButton size="sm" label="Button" type="button" />
      <GhostButton size="md" label="Button" type="button" />
      <GhostButton size="lg" label="Button" type="button" />
    </>
  )
}

export function Disable() {
  return (
    <>
      <GhostButton size="sm" label="Button" type="button" disabled={true} />
      <GhostButton size="md" label="Button" type="button" disabled={true} />
      <GhostButton size="lg" label="Button" type="button" disabled={true} />
    </>
  )
}

export function Icon() {
  return (
    <>
      <GhostButton
        size="sm"
        label="Button"
        type="button"
        icon={<HeartIcon />}
      />
      <GhostButton
        size="md"
        label="Button"
        type="button"
        icon={<HeartIcon />}
      />
      <GhostButton
        size="lg"
        label="Button"
        type="button"
        icon={<HeartIcon />}
      />
    </>
  )
}
