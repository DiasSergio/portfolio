import React from 'react'
import { Titulo as TituloEstilo } from './styles.ts'

export type Props = {
  children: string
  fontSize?: number
  tipo?: 'principal' | 'secundario'
}

const Titulo = (props: Props) => (
  <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
)

export default Titulo
