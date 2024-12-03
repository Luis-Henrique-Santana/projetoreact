import styled from 'styled-components';
import {Link} from 'react-router-dom'

const OpicoesHeader = styled.ul`
    display: flex;
`
const OpicaoHeader = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    text-align: center;
`

const textoOpicoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const linkOpcoesHeader = []


function TextoOpicoes (){
  return(
    <OpicoesHeader>
          {textoOpicoes.map( (texto) => ( 
            <Link to={`/${texto.toLowerCase()}`} ><OpicaoHeader><p>{texto}</p></OpicaoHeader></Link>
            )
          )}
    </OpicoesHeader>
  )
}
export default TextoOpicoes;