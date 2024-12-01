import styled from 'styled-components';

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

function TextoOpicoes (){
  return(
    <OpicoesHeader>
          {textoOpicoes.map( (texto) => ( 
            <OpicaoHeader><p>{texto}</p></OpicaoHeader>
            )
          )}
    </OpicoesHeader>
  )
}
export default TextoOpicoes;