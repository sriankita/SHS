import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components';

const Header = () => {
  return (
   <MainHeader>
    <NavLink to="/">
    <img src="https://shikshahisamadhan.com/wp-content/uploads/2024/06/3-PNG-LOGO.png" alt="Logo" style={{ height: 'auto', width: '12em', marginLeft: '1em' }}/>
    </NavLink>
    <Navbar></Navbar>
   </MainHeader>
  )
};

const MainHeader = styled.header`

padding :0 1.8rem;

background-color:${({theme}) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
`;

export default Header