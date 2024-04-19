import React from 'react'
import SearchBar from './SearchBar'

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
}

export const Example = {
  args: {
    placeholder: '검색어를 입력하세요.',
    onSearchClick: () => null,
  },
}
