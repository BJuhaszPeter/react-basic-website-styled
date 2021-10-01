import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';

function Home () {
  const [isopen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isopen);
  };
  return (
    <>
      <Sidebar isOpen={isopen} setIsOpen={toggle} />
      <Navbar setIsOpen={toggle} />
    </>
  );
}

export default Home;
