import React from 'react'


const SmurfCard = (props) => {
    console.log('smufcard',props)
    return(
        <>
            <h1>Name:{props.smurf.name}</h1>
            <h1>Age:{props.smurf.age}</h1>
            <h1>Height:{props.smurf.height}</h1>
        </>
    )
}

export default SmurfCard 