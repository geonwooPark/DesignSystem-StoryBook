import React from 'react'
import { ReactComponent as HeartIcon } from '../src/stories/assets/heart.svg'

import PrimaryButton from './stories/Button/PrimaryButton'

function App() {
  return (
    <div>
      <PrimaryButton
        type="button"
        label="버튼임"
        size="sm"
        icon={<HeartIcon />}
      />
      <PrimaryButton
        type="button"
        label="버튼임"
        size="md"
        icon={<HeartIcon />}
      />
      <PrimaryButton
        type="button"
        label="버튼임"
        size="lg"
        icon={<HeartIcon />}
      />
      <PrimaryButton
        type="button"
        label="버튼임"
        size="lg"
        disabled={true}
        icon={<HeartIcon />}
      />
    </div>
  )
}

export default App
