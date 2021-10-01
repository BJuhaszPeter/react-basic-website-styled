import React from 'react';
import classes from './NavbarElements.module.css';
import { FaBars } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

const Navbar = () => {
  return (
    <>
      <nav className={classes.Nav}>
        <div className={classes.NavbarContainer}>
          <LinkR to='/' className={classes.NavLogo}>
                dolla
          </LinkR>
          <div className={classes.MobileIcon}>
            <FaBars />
          </div>
          <ul className={classes.NavMenu}>
            <li className={classes.NavItems}><LinkS to='about' className={classes.NavLinks}>About</LinkS>
            </li>
            <li className={classes.NavItems}><LinkS to='discover' className={classes.NavLinks}>Discover</LinkS>
            </li>
            <li className={classes.NavItems}><LinkS to='services' className={classes.NavLinks}>Services</LinkS>
            </li>
            <li className={classes.NavItems}><LinkS to='singup' className={classes.NavLinks}>Sing Up</LinkS>
            </li>
          </ul>
          <nav className={classes.NavBtn}>
            <LinkR to='/singin' className={classes.NavBtnLink}>Sing In</LinkR>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
