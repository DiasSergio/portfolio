import React from 'react'
import { P } from './styles.ts'
import { Props } from '../Titulo/index.tsx'

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <P tipo={tipo} fontSize={fontSize}>
    {children}
  </P>
)

export default Paragrafo
