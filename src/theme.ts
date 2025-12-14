import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'
import { createElement } from 'react'
import type { ReactNode } from 'react'

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#971111ff',
      contrastText: '#fff',
    },
    secondary: {
      main: '#d42222ff',
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

  typography: {
    fontFamily: "Helvetica Neue, Arial, sans-serif",
  },   
     
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 150,
          textTransform: 'none',
          paddingInline: 24,
          paddingBlock: 12,
        },
      },
    },
  },
})

theme = responsiveFontSizes(theme); //Deixar a fonte responsiva em diferentes dispositivos
export default theme

export function AppThemeProvider({ children }: { children: ReactNode }) {
  return createElement(ThemeProvider, { theme }, children)
}
