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
