import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]); // each guess is an array
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);

  /*
   * format a guess into an array of letter objects
   * e.g [{key: 'a. color: 'yellow}]
   */

  const formatGuess = () => {};

  /*
   * add a new guess to the guesses state
   * upadte the isCorrect state if the gues is correct
   * add one to the turn state
   */

  const addNewGuess = () => {};

  /*
   * handl keyup event  & tracj currect guess
   * if user presses enter add the new guess
   */

  const handleKeyUp = ({ key }) => {
    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }
    if (/^[a-zA-Z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyUp };
};

export default useWordle;
