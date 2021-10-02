import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';
import HeroSection from '../component/HeroSection';
import InfoSection from '../component/InfoSection';
import Services from '../component/Services';

function Home () {
  const [isopen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isopen);
  };
  return (
    <>
      <Sidebar isOpen={isopen} setIsOpen={toggle} />
      <Navbar setIsOpen={toggle} />
      <HeroSection />
      <InfoSection />
      <Services />
    </>
  );
}

export default Home;
