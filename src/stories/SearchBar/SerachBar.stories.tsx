import React from 'react'
import SearchBar from './SearchBar'

export default {
  title: 'COMPONENTS/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    placeholder: '검색어를 입력하세요.',
    onSearchClick: () => null,
  },
}
