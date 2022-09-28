import React from "react";
import './Songs.css'

const Songs = (props) => {
    const songsList = props.songs
    const renderSongList = () => songsList.map((song) => <li>{song}</li>)
    return(
        <section className="songs">
            <ol>
                {renderSongList()}
            </ol>
        </section>
    )
}

export default Songs;
