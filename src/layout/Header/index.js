import React from "react";
import { NavLink } from 'react-router-dom'
import './style.css'

function Header() {
    
  return (
    <header>
        <p className="logo">♫</p>
    <ul>
        <NavLink to='/' end className='nav'>Home</NavLink>
        <NavLink to='artists' className='nav'>Artists</NavLink>
        <NavLink to='about' className='nav'>About</NavLink>
    </ul>
    </header>

  );
}

export default Header;
