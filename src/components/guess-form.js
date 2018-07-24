import React from 'react';

export default class GuessForm extends React.Component {

    onSubmit(event) {
        console.log("onsubmit");
        event.preventDefault();

        if(this.props.onMakeGuess) {
            console.log("onsubmit");
            const value = this.input.value;
            this.props.onMakeGuess(value);
        }

        this.input.value = "";
        this.input.focus();
    }



    render() {
        return(
        <form onSubmit={event => this.onSubmit(event)}>
            <input
                type="number"
                name="userGuess"
                id="userGuess"
                className="text"
                min="1"
                max="100"
                autoComplete="off"
                ref={input=>(this.input=input)}
                required
            />
            <button 
                type="submit"
                name="submit"
                id="guessButton"
                className="button"
            >
            Guess
            </button>
        
        </form>
        )
    }

}