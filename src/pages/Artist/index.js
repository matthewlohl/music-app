import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import axios from 'axios'
import { Albums, Songs } from "../../components";
import './style.css'


const Artist = () => {
  const params = useParams()
  const artist = params.artist
  console.log(artist)
  
  const artistList = [
    {id: 111352, name: 'TaylorSwift'},
    {id: 111611 ,name: 'EdSheeran'}
  ];

  const artistOutput = artistList.find(({name}) => name === artist)
  const artistID = artistOutput.id
  console.log(artistID)

    
  const [selectedAlbums, setSelectedAlbums] = useState([])
  useEffect( () => {
    console.log(`Running use effect`)
    const fetchAlbum = async() => {
      try {
        console.log(`grabbing from API`)
        
        const albumData = await axios.get(`https://theaudiodb.com/api/v1/json/2/album.php?i=${artistID}`)
        setSelectedAlbums(albumData.data.album.reverse())
      } catch (error) {
        console.log(error)
      }
    }
    fetchAlbum();
    
  },[])
  
 

  const renderAlbums = selectedAlbums.map((album, index) => {
    return(
      <div className="card">
        <Albums key={album.idAlbum} artist={album.strArtist} name={album.strAlbum} img={album.strAlbumThumb} alt={album.strAlbum} releaseYear={album.intYearReleased} genre={album.strStyle ? album.strStyle : undefined} />
        <Songs albumId={album.idAlbum}/>
      </div>
    )
  })

    return (
    <div>
      <h1>{params.artist}</h1>
      {/* <div className="card"> */}
        {/* <Albums artist={`${albums[0][0]}`} name='Red' img={red_album} alt='Red Cover' /> */}
        {/* <Songs songs={['State of Grace', 'Red', 'I Wish You Were Trouble', '22', 'All Too Well']}/> */}
        {/* <Songs songs={songs}/> */}
      {/* </div> */}
      {renderAlbums}


    </div>
  )
};

export default Artist;

      // <main className='main'>
      //   <div className="card">
      //         <Albums artist='Taylor Swift' name='Red' img={red_album} alt='Red Cover' />
      //         {/* <Songs songs={['State of Grace', 'Red', 'I Wish You Were Trouble', '22', 'All Too Well']}/> */}
      //         <Songs songs={songs}/>
      //   </div>

      //   <div className="card">
      //         <Albums artist='Ed Sheeran' name='Divide' img={divide_album} alt='Divide Cover' />
      //         {/* <Songs /> */}
      //   </div>
      // </main>
