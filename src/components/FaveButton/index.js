import React, {useState} from "react";
import './FaveButton.css'
export const FaveButton = () => {
    const [faved, setFaved] = useState(false)

    const handleFave = () => {
        setFaved(faved => !faved)
    }

    return (
        <span onClick={handleFave} style={{color: faved ? 'red' : 'lightgray'}}>♥</span>
    )
}


