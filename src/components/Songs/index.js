import React, {useState, useEffect} from "react";
import axios from "axios";
import './Songs.css'

const Songs = (props) => {
    
    const [selectedSongs, setSelectedSongs] = useState([])
        useEffect(() => {
    
          const fetchSongs = async() => {
            try {
              const songData = await axios.get(`https://theaudiodb.com/api/v1/json/2/track.php?m=${props.albumId}`)
              setSelectedSongs(songData.data.track)
            } catch (error) {
              console.log(error)
              
            }
          }
          fetchSongs()
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])
    
    const renderSongs = selectedSongs.map((song) => <li>{song.strTrack}</li>)
    return(
        <section className="songs">
            <ol>
                {renderSongs}
            </ol>
        </section>
    )
    

    // const songsList = props.songs
    // const renderSongList = () => songsList.map((song) => <li>{song}</li>)
    // return(
    //     <section className="songs">
    //         <ol>
    //             {renderSongList()}
    //         </ol>
    //     </section>
    // )
}

export default Songs;
