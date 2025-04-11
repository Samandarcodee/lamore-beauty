import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      50: '#FFF5F5',
      100: '#FFE6E6',
      400: '#FF6B6B',
      500: '#FF3D3D',
      600: '#E03636',
      800: '#A22828',
    },
    cream: {
      50: '#FAF0EA',
      100: '#FFF9F5',
    },
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Poppins', sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'lg',
      },
    },
    Input: {
      baseStyle: {
        field: {
          borderRadius: 'lg',
        },
      },
    },
    Select: {
      baseStyle: {
        field: {
          borderRadius: 'lg',
        },
      },
    },
  },
  styles: {
    global: {
      'html, body': {
        bg: 'cream.50',
        color: 'gray.800',
        overflowX: 'hidden',
      },
    },
  },
})

export default theme