import React from 'react'
import Titulo from '../../components/Titulo/index.tsx'
import Avatar from '../../components/Avatar/index.tsx'
import Paragrafo from '../../components/Paragrafo/index.tsx'
import { BotaoTema, Descricao, SidebarContainer } from './styles.ts'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Sergio Dias</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        DiasSergio
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Full Stack
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
