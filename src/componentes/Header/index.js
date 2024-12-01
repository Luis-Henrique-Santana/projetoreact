import './estilo.css'
import Logo from '../Logo'
import TextoOpicoes from '../TextoOpicoes';
import Icones from '../IconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`



function Header(){
    return (
        <header className="App-header">
            <Logo/>
            <TextoOpicoes/>
            <Icones/>
        </header>
    )
}
export default Header;