import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarWrap>
                <Logo />
                <Nav>
                    <NavLink to="/">PAGINA INICIAL</NavLink>
                    <NavLink to="/">MERCADO</NavLink>
                    <NavLink to="/">VENDA</NavLink>
                    <NavLink to="/">PRECOS</NavLink>
                    <NavLink to="/">SUPORTE</NavLink>                    
                </Nav>
                <Search>
                    <SearchWrap>
                        <Input type="text" placeholder="Symbol/Name" />
                    </SearchWrap>
                </Search>
                <ButtonContainer>
                    <Button>S</Button>
                </ButtonContainer>
            </NavbarWrap>
        </NavbarContainer>
    );
};

export default Navbar;


