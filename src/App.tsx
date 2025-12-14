import Home from './pages/Home/Home'
import { Global, css } from '@emotion/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({

  palette: {
    mode: 'dark',
    primary: {
      main: '#971111ff',
      contrastText: '#fff',
    },
    secondary: {
      main: '#b1b1b1ff',
    },
    background: {
      default: '#000000',
      paper: '#111111',
    },
    text: {
      primary: '#ffffff',
      secondary: '#a1a1a1ff',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 150, // pílula
          textTransform: 'none',
          paddingInline: 24,
          paddingBlock: 12,
        },
      },
    },
  },
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={css`
        html, body, #root {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
        }
      `} />
      <Home />
    </ThemeProvider>
  )
}

export default App
