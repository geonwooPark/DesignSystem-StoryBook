import React from 'react'
import Slider from './stories/Slider/Slider'

function App() {
  return (
    <div className="w-[700px]">
      <Slider gap={16}>
        <div className="h-[600px] w-[200px] bg-red-600"></div>
        <div className="h-[600px] w-[200px] bg-blue-600"></div>
        <div className="h-[600px] w-[200px] bg-green-600"></div>
        <div className="h-[600px] w-[200px] bg-pink-600"></div>
        <div className="h-[600px] w-[200px] bg-purple-600"></div>
        <div className="h-[600px] w-[200px] bg-yellow-600"></div>
        <div className="h-[600px] w-[200px] bg-orange-600"></div>
      </Slider>
    </div>
  )
}

export default App
