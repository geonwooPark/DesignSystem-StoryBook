import React from 'react'
import Accordion from './Accordion'

export default {
  title: 'COMPONENTS/Accordion',
  component: Accordion,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    list: [
      {
        title: 'title #1',
        content: (
          <p>
            Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
            Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
            Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
            Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
            Text...Dummy
          </p>
        ),
      },
      {
        title: 'title #2',
        content: (
          <p>
            Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
            Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
            Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
            Text...Dummy Text...Dummy Text...Dummy Text...Dummy Text...Dummy
            Text...Dummy Text...Dummy Text...
          </p>
        ),
      },
    ],
  },
}
