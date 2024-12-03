import UltimosLancamentos from './componentes/UltimosLancamentos';
import Header from './componentes/Header'
import styled from 'styled-components';
import Pesquisa from './componentes/Pesquisa/Pesquisa';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vw;


`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa/>
      <UltimosLancamentos/>
    </AppContainer>
  );
}

export default App;
