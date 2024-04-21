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
        <div className="size-[200px] bg-red-200"></div>
        <div className="size-[200px] bg-blue-200"></div>
        <div className="size-[200px] bg-green-200"></div>
        <div className="size-[200px] bg-pink-200"></div>
        <div className="size-[200px] bg-purple-200"></div>
        <div className="size-[200px] bg-yellow-200"></div>
        <div className="size-[200px] bg-orange-200"></div>
      </Slider>
    </div>
  )
}
