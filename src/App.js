import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';

function App () {
  return (
    <Router>
      <Sidebar isOpen />
      <Navbar />

    </Router>
  );
}

export default App;
