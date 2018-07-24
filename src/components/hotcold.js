import React from 'react';
import GuessSection from './guess-section';
import StatusSection from './status-section';

export default class HotCold extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guesses: [],
            notification: 'Make your Guess!',
            correctAnswer: Math.round(Math.random() * 100) + 1
        };
    }


    restartGame() {
        this.setState({
          guesses: [],
          feedback: 'Make your guess!',
          auralStatus: '',
          correctAnswer: Math.floor(Math.random() * 100) + 1
        });
      }
    
      makeGuess(guess) {
          console.log("making Guess");
        guess = parseInt(guess, 10);
        if (isNaN(guess)) {
          this.setState({ feedback: 'Please enter a valid number' });
          return;
        }
    
        const difference = Math.abs(guess - this.state.correctAnswer);
    
        let feedback;
        if (difference >= 50) {
          feedback = 'You\'re Ice Cold...';
        } else if (difference >= 30) {
          feedback = 'You\'re Cold...';
        } else if (difference >= 10) {
          feedback = 'You\'re Warm.';
        } else if (difference >= 1) {
          feedback = 'You\'re Hot!';
        } else {
          feedback = 'You got it!';
        }
    
        this.setState({
          feedback,
          guesses: [...this.state.guesses, guess]
        });
    
        // We typically wouldn't touch the DOM directly like this in React
        // but this is the best way to update the title of the page,
        // which is good for giving screen-reader users
        // instant information about the app.
        document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';
      }


    render() {


        return (
            <div>

                
                <main>
                    <GuessSection
                        notification={this.state.notification}
                        guessCount={this.state.guesses.length}
                        onMakeGuess={guess=>this.makeGuess(guess)}
                    />
                    <StatusSection
                        guesses={this.state.guesses}
                    />
                   
                </main>
            </div>

        );
    }


}