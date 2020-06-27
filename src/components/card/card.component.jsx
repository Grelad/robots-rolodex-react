import React from 'react'
import ReactCardFlip from 'react-card-flip'
import './card.styles.css';


export const Card = (props, {handleClick}) => (  
    <ReactCardFlip isFlipped={props.isFlipped} flipDirection="horizontal">
        <div className='card-container' onClick={handleClick}>
            <img src={`https://robohash.org/${props.monster.id}?set=set1&size=220x180`} alt="monster"/>
            <h2> {props.monster.name} </h2>
            <p> {props.monster.email}</p>
        </div>
        <div className='card-container' onClick={props.handleClick}>
            <p> {props.monster.phone} </p>
            <p> {props.monster.website}</p>
        </div>
    </ReactCardFlip>
);