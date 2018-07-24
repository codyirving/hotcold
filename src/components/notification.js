import React from 'react';

export default function Notification(props) {

    return(
        <h2
            id='notification'
        >
        
        {props.notificaition} <span>Guess Again!</span>
        
        </h2>
    )

}