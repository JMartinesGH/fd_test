import React from 'react'

function Player({ player }) {
    const {first_name, last_name, images, fppg} = player
    return (
        <div>
            <img alt={`Img for ${first_name} ${last_name}`} src={images.default.url} width={images.default.width} height={images.default.height}/>
            <h1>{first_name} {last_name}</h1>
            <h2>{fppg}</h2>
        </div>
    )
}

export default Player