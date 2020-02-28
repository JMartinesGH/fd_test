import React from 'react'

function Player({ player, onSelection}) {
    const {first_name, last_name, images, fppg} = player
    return (
        <div className="player">
            <img alt={`Img for ${first_name} ${last_name}`} src={images.default.url} width={images.default.width} height={images.default.height}/>
            <h1>{first_name} {last_name}</h1>
            <h2>{fppg}</h2>
            <button className="selectButton" onClick={() => onSelection()}>Select</button>
        </div>
    )
}

export default Player