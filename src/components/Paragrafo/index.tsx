import React from 'react'
import { P } from './styles.ts'
import { Props } from '../Titulo/index.tsx'

const Paragrafo = ({ children, tipo = 'principal' }: Props) => (
  <P tipo={tipo}>{children}</P>
)

export default Paragrafo
