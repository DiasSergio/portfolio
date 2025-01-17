import React from 'react'
import styled from 'styled-components'

type BotaoPrincipal = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button <BotaoPrincipal> `
background-color: ${(props) => (props.principal ? 'green' : 'red')};
font-size: ${(props) => props.fontSize || '20px'};
`
const BotaoPerigo = styled(Botao)`
background-color: red;
color: #fff;

span {
text-decoration: line-through;
}
`

function Teste() {
  return (
    <div>
      <Botao fontSize='16px' principal>Enviar</Botao>
      <BotaoPerigo as='a' principal>
        <span>Cancelar</span>
      </BotaoPerigo>
    </div>
  )
}

export default  Teste
