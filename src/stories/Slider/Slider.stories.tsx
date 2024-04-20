import React from 'react'
import Slider from './Slider'

export default {
  title: 'COMPONENTS/Slider',
  component: Slider,
  tags: ['autodocs'],
}

export function Example() {
  return (
    <div className="w-[700px]">
      <Slider gap={16} step={3}>
        <div className="size-[200px] bg-red-600"></div>
        <div className="size-[200px] bg-blue-600"></div>
        <div className="size-[200px] bg-green-600"></div>
        <div className="size-[200px] bg-pink-600"></div>
        <div className="size-[200px] bg-purple-600"></div>
        <div className="size-[200px] bg-yellow-600"></div>
        <div className="size-[200px] bg-orange-600"></div>
      </Slider>
    </div>
  )
}
