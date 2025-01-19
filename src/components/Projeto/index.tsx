import React from 'react'
import Titulo from '../Titulo/index.tsx'
import Paragrafo from '../Paragrafo/index.tsx'
import { Card, LinkBotao } from './styles.ts'

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
