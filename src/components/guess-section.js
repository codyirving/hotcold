import React from 'react';
import Notification from './notification';
import GuessForm from './guess-form';
export default function GuessSection(props) {
    
    return(
        <section>
            <Notification notification={props.feedback} guessCount={props.guessCount} />
            <GuessForm onMakeGuess={guess => props.onMakeGuess(guess)} />
        </section>
    );

}