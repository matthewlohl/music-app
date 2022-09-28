import React from "react";
import { NavLink } from 'react-router-dom'

function Header() {
    
  return (
    <ul>
        <NavLink to='/' end>Home</NavLink>
        <NavLink to='artists' end>Artists</NavLink>
        <NavLink to='about' end>About</NavLink>
    </ul>

  );
}

export default Header;
