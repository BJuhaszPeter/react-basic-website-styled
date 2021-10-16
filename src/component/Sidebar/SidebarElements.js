import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLinks, SidebarBtn, SidebarBtnLink } from './SidebarStyledComponents';

const SidebarElements = (props) => {
  return (
    <SidebarContainer

      onClick={() => props.setIsOpen()}

      style={props.isOpen ? { top: '0', opacity: '100%' } : { top: '-100%', opacity: '0' }}
    >
      <Icon onClick={() => props.setIsOpen()}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinks to='about' onClick={() => props.setIsOpen()}>About</SidebarLinks>
          <SidebarLinks to='discover' onClick={() => props.setIsOpen()}>Discover</SidebarLinks>
          <SidebarLinks to='services' onClick={() => props.setIsOpen()}>Services</SidebarLinks>
          <SidebarLinks to='singup' onClick={() => props.setIsOpen()}>Sing Up</SidebarLinks>
        </SidebarMenu>
        <SidebarBtn>
          <SidebarBtnLink to='/signin' onClick={() => props.setIsOpen()}>Sing In</SidebarBtnLink>
        </SidebarBtn>
      </SidebarWrapper>
    </SidebarContainer>

  );
};

export default SidebarElements
;
