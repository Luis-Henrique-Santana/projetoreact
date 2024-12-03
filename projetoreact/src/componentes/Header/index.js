
import Logo from '../Logo'
import TextoOpicoes from '../TextoOpicoes';
import Icones from '../IconesHeader';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`



function Header(){
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo/>
            </Link>
            <TextoOpicoes/>
            <Icones/>
        </HeaderContainer>
    )
}
export default Header;