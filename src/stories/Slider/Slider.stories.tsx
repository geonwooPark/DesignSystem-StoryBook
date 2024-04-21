import React from 'react'
import Slider from './Slider'

export default {
  title: 'COMPONENTS/Slider',
  component: Slider,
  tags: ['autodocs'],
}

export function Default() {
  return (
    <div className="w-[700px]">
      <Slider gap={16}>
        <div className="size-[200px] bg-red-400"></div>
        <div className="size-[200px] bg-blue-400"></div>
        <div className="size-[200px] bg-green-400"></div>
        <div className="size-[200px] bg-pink-400"></div>
        <div className="size-[200px] bg-purple-400"></div>
      </Slider>
    </div>
  )
}
