import React from "react";
import { Link } from 'react-router-dom'

function Artists() {
  return (
    <div>
      <Link to="TaylorSwift">Taylor Swift</Link>
      <Link to="EdSheeran">Ed Sheeran</Link>

    </div>
  );
}

export default Artists;
