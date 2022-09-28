import React from "react";
import './Artists.css'
import { FaveButton } from "../FaveButton";
const Albums = (props) => {
    return (
        <div className="album-cover">
            <img src={props.img} alt={props.alt} className="album-cover"/>
            <div>
                <p>{props.name}</p>
                <p>{props.artist}</p>
                <FaveButton />
            </div>
        </div>
    )
}

export default Albums;
