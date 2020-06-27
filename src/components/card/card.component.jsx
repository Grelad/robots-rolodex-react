import './card.styles.css';

import React from 'react'
import ReactCardFlip from 'react-card-flip'
import { useState } from "react";

export const Card = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => setIsFlipped(!isFlipped);
    return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div onClick={handleClick} className='card-container'>
            <img src={`https://robohash.org/${props.monster.id}?set=set1&size=220x180`} alt="monster"/>
            <h2> {props.monster.name} </h2>
            <p> {props.monster.email}</p>
        </div>
        <div onClick={handleClick} className='card-container'>
            <p><strong>Phone:</strong> {props.monster.phone} </p>
            <p><strong>Address:</strong> {props.monster.address.street},
                {props.monster.address.suite},
                {props.monster.address.city},
                {props.monster.address.zipcode}</p>
            <p><strong>Website:</strong> {props.monster.website}</p>
        </div>
    </ReactCardFlip>
);
}