import React from 'react'
import Tap from './Tap'

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

export default {
  title: 'COMPONENTS/Tap',
  component: Tap,
  tags: ['autodocs'],
}

export const Example = {
  args: {
    tapList,
  },
}
