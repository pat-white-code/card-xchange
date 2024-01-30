import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/AuthPage/AuthPage.jsx'
import HomePage from './pages/HomePage/Homepage.jsx'

function App() {
  return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
  )
}

export default App
