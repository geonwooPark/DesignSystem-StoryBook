import React from 'react'
import Pagination from './Pagination'

export default {
  title: 'PAGINATION/Pagination',
  component: Pagination,
  tags: ['autodocs'],
}

export function Example() {
  const onNavigate = (path: string) => {
    console.log(path)
  }

  return (
    <Pagination onNavigate={onNavigate} totalItemCount={23} listItemCount={5} />
  )
}
