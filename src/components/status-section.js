import React from 'react';
import GuessList from './a-guess-list'; 
import GuessCount from './guess-count';


export default function StatusSection(props) {
  const { guesses } = props;
  const guessCount = guesses.length;

  return (
    <section >
      <GuessCount guessCount={guessCount} />
      <GuessList guesses={guesses} />

    </section>
  );
}