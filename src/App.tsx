import React from 'react'
import EstiloGlobal, { Container } from './styles.ts'
import Sidebar from './containers/Sidebar/index.tsx'
import Sobre from './containers/Sobre/index.tsx'
import Projetos from './containers/Projetos/index.tsx'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
