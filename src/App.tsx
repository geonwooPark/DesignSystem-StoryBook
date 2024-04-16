import React from 'react'
import Slider from './stories/Slider/Slider'
import { Tap } from './stories'

const content1 = (
  <div className="p-4">
    <h1 className="mb-2 text-lg font-bold">Title1</h1>
    <p>
      Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
      Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
      Text...Dummy Text...Dummy Text...Dummy Text...
    </p>
  </div>
)
const content2 = (
  <div className="p-4">
    <h1 className="mb-2 text-lg font-bold">Title2</h1>
    <p>
      Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
      Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
      Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
      Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
      Text...Dummy Text...
    </p>
  </div>
)
const content3 = (
  <div className="p-4">
    <h1 className="mb-2 text-lg font-bold">Title3</h1>
    <p>
      Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
      Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
      Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
      Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
      Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
      Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
      Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
      Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
      Text...Dummy Text...Dummy Text...Dummy Text...
    </p>
  </div>
)
const content4 = (
  <div className="p-4">
    <h1 className="mb-2 text-lg font-bold">Title4</h1>
    <p>
      Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
      Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
      Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
      Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
      Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
      Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
      Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
      Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
      Text...Dummy Text...Dummy Text...Dummy Text...Text...Dummy Text...Dummy
      Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
      Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
      Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
      Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
      Text...Dummy Text...
    </p>
  </div>
)

const tapList = [
  { value: 'Tap1', content: content1 },
  { value: 'Tap2', content: content2 },
  { value: 'Tap3', content: content3 },
  { value: 'Tap4', content: content4 },
]

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
      <Tap tapList={tapList} />
    </div>
  )
}

export default App
