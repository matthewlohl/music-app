import React from "react";
import { Link } from 'react-router-dom'
import './style.css'

function Artists() {
  return (
    <div class="artists-div">
        <div class="icons">
          <Link to="TaylorSwift" className="link"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Taylor_Swift_-_Red_%28Taylor%27s_Version%29.png/220px-Taylor_Swift_-_Red_%28Taylor%27s_Version%29.png"></img><p>Taylor Swift</p></Link>
        </div>

        <div class="icons">
          <Link to="EdSheeran" className="link"><img src="https://pyxis.nymag.com/v1/imgs/355/d36/80481e05a3fccbc54f5e22b2517905c700-12-ed-sheeran-review.rsquare.w700.jpg"></img><p>Ed Sheeran</p></Link>
        </div>
        
      
    </div>
  );
}

export default Artists;
