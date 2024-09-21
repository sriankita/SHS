import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
    const Nav = styled.nav`
    .navbar-list {
    display:flex;
    gap:30px;

    li{
    list-style:none; 
    .navbar-link{
    &:link,
    &:visited{
      display: inline;
    text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  color: #012749;
  transition:color 0.3s linear;}
    &:hover ,
    &:active{
    color: #E6A303;
    };
    }
    }
    }
`;

  return (
    <Nav>
        <div className='menuIcon'>
        <ul className="navbar-list">
            <li>
                <NavLink  className ="navbar-link " to ='/'>Home</NavLink>
            </li>
            <li>
                <NavLink  className ="navbar-link " to ='/courses'>Courses</NavLink>
            </li>
            <li>
                <NavLink  className ="navbar-link " to ='/test-series'>Test Series</NavLink>
            </li>
            <li>
                <NavLink  className ="navbar-link " to ='/about'>About Us</NavLink>
            </li>
            
            <li>
                <NavLink  className ="navbar-link " to ='/blog'>Blog</NavLink>
            </li>
            <li>
                <NavLink  className ="navbar-link " to ='/contact'>Contact Us</NavLink>
            </li>
        </ul>
        </div>
    </Nav>
  )
}

export default Navbar