import React from 'react';
import SidebarElements from './SidebarElements';

function Sidebar (props) {
  return (
    <SidebarElements
      setIsOpen={props.setIsOpen}
      isOpen={props.isOpen}
    />
  );
}

export default Sidebar;
