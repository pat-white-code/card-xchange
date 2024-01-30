import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import { BrowserRouter } from 'react-router-dom'

// import { extendTheme } from '@chakra-ui/react'
// import { mode } from '@chakra-ui/theme-tools'

// const config = {
//   initialColorMode: 'dark',
//   useSystemColorMode: false,
// }

// const theme = extendTheme({ config })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
