import React from 'react';
import NavbarElements from './NavbarElements';

const Navbar = (props) => {
  return (
    <NavbarElements setIsOpen={props.setIsOpen} />
  );
};

export default Navbar;
