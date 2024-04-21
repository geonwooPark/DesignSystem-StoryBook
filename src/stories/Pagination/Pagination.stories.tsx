import React from 'react'
import Pagination from './Pagination'

export default {
  title: 'COMPONENTS/Pagination',
  component: Pagination,
  tags: ['autodocs'],
}

export function Default() {
  const onNavigate = (path: string) => {
    console.log(path)
  }

  return (
    <Pagination onNavigate={onNavigate} totalItemCount={23} listItemCount={5} />
  )
}

export function ExpandedNumberingPagination() {
  const onNavigate = (path: string) => {
    console.log(path)
  }

  return (
    <Pagination
      onNavigate={onNavigate}
      totalItemCount={23}
      listItemCount={3}
      numberingCount={5}
    />
  )
}
