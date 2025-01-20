import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles.ts'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-top: 6px;
    margin-bottom: 10px;
  }
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  font-size: 10px;
  font-weight: bold;
  background-color: #282a35;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 4px;
    margin-bottom: 10px;
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
`
