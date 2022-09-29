import React from "react";
import './Artists.css'
import { FaveButton } from "../FaveButton";
const Albums = (props) => {
    return (
        <div className="album-cover">
            <img src={props.img} alt={props.alt} className="album-cover"/>
            <div>
                <h3>{props.name}</h3>
                <h3>{props.artist}</h3>
                <p>{props.releaseYear}</p>
                <p>{props.genre}</p>
                <FaveButton />
            </div>
        </div>
    )
}

export default Albums;
