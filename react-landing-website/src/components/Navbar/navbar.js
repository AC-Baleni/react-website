import React from 'react';
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <img src="/assets/logo.png" alt="Logo" width={100} />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
