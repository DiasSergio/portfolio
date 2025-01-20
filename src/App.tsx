import { ThemeProvider } from 'styled-components'

import React, { useState } from 'react'
import EstiloGlobal, { Container } from './styles.ts'
import Sidebar from './containers/Sidebar/index.tsx'
import Sobre from './containers/Sobre/index.tsx'
import Projetos from './containers/Projetos/index.tsx'
import temaLight from './themes/light.ts'
import temaDark from './themes/dark.ts'

function App() {
  const [tema, setTema] = useState(false)

  function trocaTema() {
    setTema(!tema)
  }

  return (
    <ThemeProvider theme={tema ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
