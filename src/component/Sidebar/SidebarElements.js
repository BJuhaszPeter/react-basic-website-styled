import React from 'react';
import { FaTimes } from 'react-icons/fa';
import classes from './SidebarElements.module.css';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

const SidebarElements = (props) => {
  return (
    <aside

      onClick={() => props.setIsOpen()}
      className={classes.SidebarContainer}
      style={props.isOpen ? { top: '0', opacity: '100%' } : { top: '-100%', opacity: '0' }}
    >
      <div className={classes.Icon} onClick={() => props.setIsOpen()}>
        <FaTimes className={classes.CloseIcon} />
      </div>
      <div className={classes.SidebarWrapper}>
        <ul className={classes.SidebarMenu}>
          <LinkS to='about' className={classes.SidebarLinks} onClick={() => props.setIsOpen()}>About</LinkS>
          <LinkS to='discover' className={classes.SidebarLinks} onClick={() => props.setIsOpen()}>Discover</LinkS>
          <LinkS to='services' className={classes.SidebarLinks} onClick={() => props.setIsOpen()}>Services</LinkS>
          <LinkS to='singup' className={classes.SidebarLinks} onClick={() => props.setIsOpen()}>Sing Up</LinkS>
        </ul>
        <nav className={classes.SidebarBtn}>
          <LinkR to='/singin' className={classes.SidebarBtnLink} onClick={() => props.setIsOpen()}>Sing In</LinkR>
        </nav>
      </div>
    </aside>

  );
};

export default SidebarElements
;
