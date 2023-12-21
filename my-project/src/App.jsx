import React, { useState } from 'react'

import { Routes, Route } from 'react-router-dom'
import List from './component/List'
import Login from './component/login'
// import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/todos' element={<List />} />
      </Routes>
    </>
  )
}

export default App
