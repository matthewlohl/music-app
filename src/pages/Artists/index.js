import React from "react";
import { Albums, Songs } from "../../components";
import './style.css'

import red_album from './img/red-album.png'
import divide_album from './img/divide_cover.png'

function Artists() {
    const songs = ['State of Grace', 'Red', 'I Wish You Were Trouble', '22', 'All Too Well']

  return (
    <main className='main'>
      <div className="card">
            <Albums artist='Taylor Swift' name='Red' img={red_album} alt='Red Cover' />
            {/* <Songs songs={['State of Grace', 'Red', 'I Wish You Were Trouble', '22', 'All Too Well']}/> */}
            <Songs songs={songs}/>
      </div>

      <div className="card">
            <Albums artist='Ed Sheeran' name='Divide' img={divide_album} alt='Divide Cover' />
            {/* <Songs /> */}
      </div>
    </main>
  );
}

export default Artists;
