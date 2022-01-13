import React from 'react';
import './Cardlist.styles.css';
import Card from '../card/Card.component'


// This component loops through the monsters that are returned from the API and returns a card component

const Cardlist = ({monsters}) => {
    return(
        <div className='card-list'>
            {monsters.map(monster => (
                <Card key = {monster.id} monster = {monster}/>
            ))}
        </div>
    )
} 



export default Cardlist