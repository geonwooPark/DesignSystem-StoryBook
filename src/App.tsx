import React from 'react'
import Pagination from './components/Pagination/Pagination'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  return (
    <Pagination onNavigate={navigate} totalItemCount={16} listItemCount={5} />
  )
}

export default App
