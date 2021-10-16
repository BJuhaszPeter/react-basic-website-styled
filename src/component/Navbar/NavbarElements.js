import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItems, NavLinks, NavBtn, NavBtnLink } from './NavbarStyledComponents';

const NavbarElements = (props) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (

    <>

      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>
                dolla
          </NavLogo>
          <MobileIcon onClick={() => props.setIsOpen()} />

          <NavMenu>
            <NavItems><NavLinks smooth duration={500} spy exact='true' offset={-80} to='about'>About </NavLinks>
            </NavItems>
            <NavItems><NavLinks smooth duration={500} spy exact='true' offset={-80} to='discover'>Discover</NavLinks>
            </NavItems>
            <NavItems><NavLinks smooth duration={500} spy exact='true' offset={-80} to='services'>Services</NavLinks>
            </NavItems>
            <NavItems><NavLinks smooth duration={500} spy exact='true' offset={-80} to='signup'>Sing Up</NavLinks>
            </NavItems>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sing In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavbarElements;
