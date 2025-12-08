import Home from './pages/Home/Home'
import { Global, css } from '@emotion/react'

function App() {

  return (
    <>
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
