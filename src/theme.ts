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
      main: '#cc1515ff',
      contrastText: '#fff',
    },
    background: {
      default: '#222222',
      paper: '#222222',
    },
    text: {
      primary: '#ffffff',
      secondary: '#a1a1a1ff',
    },
  },

  typography: {
    fontFamily: "Helvetica Neue, Arial, sans-serif",
    h1: {
      color: '#ffffff',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    }, 
    h2: {
      color: '#ffffff',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    }, 
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
        containedPrimary: ({ theme }) => ({
          color: theme.palette.primary.contrastText,
        }),
        containedSecondary: ({ theme }) => ({
          color: theme.palette.secondary.contrastText ?? theme.palette.primary.contrastText,
        }),
      },
    },
  }
})

theme = responsiveFontSizes(theme); //Deixar a fonte responsiva em diferentes dispositivos
export default theme

export function AppThemeProvider({ children }: { children: ReactNode }) {
  return createElement(ThemeProvider, { theme }, children)
}
