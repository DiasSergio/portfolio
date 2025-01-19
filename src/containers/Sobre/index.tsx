import React from 'react'
import Titulo from '../../components/Titulo/index.tsx'
import Paragrafo from '../../components/Paragrafo/index.tsx'
import { GitHubSecao } from './styles.ts'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis iure illum
      ratione aliquid accusantium optio ullam, cumque modi tempore, minus eaque
      odit et labore eligendi? Accusamus quos beatae eos magnam.
    </Paragrafo>
    <GitHubSecao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=DiasSergio"
        alt="Nota no Github"
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=DiasSergio"
        alt="Linguagens mais utilizadas no Github"
      />
    </GitHubSecao>
  </section>
)

export default Sobre
