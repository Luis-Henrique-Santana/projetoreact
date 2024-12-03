import UltimosLancamentos from '../componentes/UltimosLancamentos';
import styled from 'styled-components';
import Pesquisa from '../componentes/Pesquisa/Pesquisa';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vw;


`

function Home() {
  return (
    <AppContainer>

      <Pesquisa/>
      <UltimosLancamentos/>
    </AppContainer>
  );
}

export default Home;
