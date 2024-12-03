
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
        <HeaderContainer>
            <Logo/>
            <TextoOpicoes/>
            <Icones/>
        </HeaderContainer>
    )
}
export default Header;