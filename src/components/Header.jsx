import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header id="header" class="fixed-top d-flex align-items-center ">
    <NavLink to="/">
    <img src="./images/logo.png" alt="logo"/>
    </NavLink>
    <Navbar/>
    
  </header>
  );
  
};

export default Header;
