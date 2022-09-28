import React from "react";
import { NavLink } from 'react-router-dom'
import './style.css'

function Header() {
    
    const activeClass = (({isActive}) => isActive ? 'active' : undefined)

  return (
    <header>
        <p className="logo">♫</p>
    <ul>
        <NavLink to='/' end className={[activeClass && "nav"]}>Home</NavLink>
        <NavLink to='artists' className={[activeClass && "nav"]}>Artists</NavLink>
        <NavLink to='about' className={[activeClass && "nav"]}>About</NavLink>
    </ul>
    </header>

  );
}

export default Header;
