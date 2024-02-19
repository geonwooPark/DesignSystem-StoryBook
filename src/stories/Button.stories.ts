import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'hello/Button',
  component: Button,
  parameters: {
    // 구성 요소를 캔버스의 중심에 놓을 매개 변수
    layout: 'centered',
  },
  // UI 구성 요소에 대한 문서 자동 변환
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
}
