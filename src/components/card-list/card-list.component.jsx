import React from 'react';
import { Card } from '../card/card.component'
import './card-list.styles.css';

export const CardList = props => {
    return (
        <div className='card-list'>
            {props.monsters.map(monster => (         // passed down monsters as a prop // and filtered over the past down monsters
            <Card key={monster.id} monster={monster}/> // returns a card component with key and monster prop
            ))}
        </div>
    )
}