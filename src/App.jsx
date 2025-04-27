import React from 'react'
import Nav from './components/nav/Nav'
import { Route, Routes } from 'react-router-dom'
import HomePage from './router/HomePage'

function App() {
  return (
    <>
      <div className='fixed top-0 left-0 w-full z-[1000]'>
        <Nav />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>

  )
}

export default App