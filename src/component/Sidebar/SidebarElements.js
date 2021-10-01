import React from 'react';
import { FaTimes } from 'react-icons/fa';
import classes from './SidebarElements.module.css';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

function SidebarElements (props) {
  return (
    <aside
      className={classes.SidebarContainer}
      style={props.isOpen ? { opacity: '100%', top: '0' } : { opacity: '0', top: '100%' }}
    >
      <div className={classes.Icon}>
        <FaTimes className={classes.CloseIcon} />
        <div className={classes.SidebarWrapper}>
          <ul className={classes.SidebarMenu}>
            <LinkS to='about' className={classes.SidebarLinks}>About</LinkS>
            <LinkS to='discover' className={classes.SidebarLinks}>Discover</LinkS>
            <LinkS to='services' className={classes.SidebarLinks}>Services</LinkS>
            <LinkS to='singup' className={classes.SidebarLinks}>Sing Up</LinkS>
          </ul>
          <nav className={classes.SidebarBtn}>
            <LinkR to='/singin' className={classes.SidebarBtnLink}>Sing In</LinkR>
          </nav>
        </div>
      </div>
    </aside>

  );
}

export default SidebarElements
;
