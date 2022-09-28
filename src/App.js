
import {Artists} from './components'
import {Songs} from './components'
import red_album from './img/red-album.png'
import divide_album from './img/divide_cover.png'

import './App.css'

function App() {

  const songs = ['State of Grace', 'Red', 'I Wish You Were Trouble', '22', 'All Too Well']

  return (
    <>
    <h1>Music Albums</h1>

    <main className='main'>
      <div className="card">
            <Artists artist='Taylor Swift' name='Red' img={red_album} alt='Red Cover' />
            {/* <Songs songs={['State of Grace', 'Red', 'I Wish You Were Trouble', '22', 'All Too Well']}/> */}
            <Songs songs={songs}/>
      </div>

      <div className="card">
            <Artists artist='Ed Sheeran' name='Divide' img={divide_album} alt='Divide Cover' />
            {/* <Songs /> */}
      </div>
    </main>
    </>
  );
}

export default App;
