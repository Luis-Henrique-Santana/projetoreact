import UltimosLancamentos from '../componentes/UltimosLancamentos';
import styled from 'styled-components';
import Pesquisa from '../componentes/Pesquisa/Pesquisa';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vw;


`

function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa />
    </AppContainer>
  );
}

export default Favoritos;
