import React from 'react';
import { FaAngleLeft, FaMicrophone } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar_container">
      <button className="back_button" type="button" key={Date.now()} aria-label="Back"><FaAngleLeft /></button>
      <h2>Art Collections</h2>
      <div className="nav_icons">
        <span className="nav_icon"><FaMicrophone /></span>
        <span className="nav_icon"><AiOutlineSetting /></span>
      </div>
    </nav>
  );
}

export default Navbar;
