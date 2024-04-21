import React from 'react'
import { ReactComponent as HeartIcon } from '../../assets/heart.svg'
import OutLineButton from './OutLineButton'

export default {
  title: 'COMPONENTS/Button/OutLineButton',
  component: OutLineButton,
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
      <OutLineButton size="sm" label="Button" type="button" />
      <OutLineButton size="md" label="Button" type="button" />
      <OutLineButton size="lg" label="Button" type="button" />
    </>
  )
}

export function Disable() {
  return (
    <>
      <OutLineButton size="sm" label="Button" type="button" disabled={true} />
      <OutLineButton size="md" label="Button" type="button" disabled={true} />
      <OutLineButton size="lg" label="Button" type="button" disabled={true} />
    </>
  )
}

export function Icon() {
  return (
    <>
      <OutLineButton
        size="sm"
        label="Button"
        type="button"
        icon={<HeartIcon />}
      />
      <OutLineButton
        size="md"
        label="Button"
        type="button"
        icon={<HeartIcon />}
      />
      <OutLineButton
        size="lg"
        label="Button"
        type="button"
        icon={<HeartIcon />}
      />
    </>
  )
}
