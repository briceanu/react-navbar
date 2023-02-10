import React from 'react';
import { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
const Navbar = () => {
  const [date, setDate] = useState(false);
  const showDrop = () => {
    setDate(() => setDate(!date));
  };
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('./icon.png')} alt='logo' style={ImgStyle} />
        </NavLink>
        <Bars onClick={(e) => showDrop(e)} />
        <NavMenu>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/services'>Services</NavLink>
          <NavLink to='/contact-us'>Contact Us</NavLink>
          <NavLink to='/sign-up'>Sign Up</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>

      {date && (
        <NavMenu style={NavMenuStyle}>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/services'>Services</NavLink>
          <NavLink to='/contact-us'>Contact Us</NavLink>
          <NavLink to='/sign-up'>Sign Up</NavLink>
        </NavMenu>
      )}
    </>
  );
};

export default Navbar;
const ImgStyle = {
  width: '60px',
  height: '60px',
};
const NavMenuStyle = {
  display: 'flex',
  postion: 'absolute',
  width: '100%',
  flexDirection: 'column',
  backgroundColor: 'black',
};
