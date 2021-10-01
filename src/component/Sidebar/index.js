import React from 'react';
import SidebarElements from './SidebarElements';

function Sidebar (props) {
  return (
    <SidebarElements
      isOpen={props.isOpen}
    />
  );
}

export default Sidebar;
