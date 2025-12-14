import Home from './pages/Home/Home'
import { Global, css } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'

function App() {
  return (
    <>
      <CssBaseline />
      <Global styles={css`
        html, body, #root {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
        }
      `} />
      <Home />
    </>
  )
}

export default App
