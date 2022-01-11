import React from 'react';
import './Card.component.styles.css'

function Card({monster}){
    const {name,email,id} = monster
    return (
        <div className='card-container'>
            <img alt = 'monster' src = {`https://robohash.org/${id}?set=set2&size=180x180`}/>
             <h1>{name}</h1>
             <p>{email}</p>
        </div>
    )
}



export default Card
