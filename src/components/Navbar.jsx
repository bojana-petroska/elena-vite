// src/Navbar.js

import React from 'react';
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav>
      <ul className='nav-box'>
        <li>Home</li>
        <li>Work</li>
        <li>About</li>
        <li>Designer CV</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
