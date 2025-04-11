import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App'

const theme = extendTheme({
  colors: {
    brand: {
      primary: '#613228', // Asosiy text va buttonlar rangi
      secondary: '#D4A373',
      accent: '#FAEDCD',
      dark: '#613228',
      light: '#FCE0CC' // Orqa fon rangi
    },
  },
  fonts: {
    heading: 'Gotham Pro, sans-serif',
    body: 'Gotham Pro, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'brand.light',
        color: 'brand.dark',
      },
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)