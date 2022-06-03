import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]); // each guess is an array
  const [history, setHistory] = useState(["hello", "ninja"]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);

  /*
   * format a guess into an array of letter objects
   * e.g [{key: 'a. color: 'yellow}]
   */

  const formatGuess = () => {
    console.log("formatting the guess - ", currentGuess);
  };

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
    if (key === "Enter") {
      //* only add guess if turn is less than 5
      if (turn > 5) {
        console.log("you used all your guesses");
        return;
      }
      //* di not allow duplicate words
      if (history.includes(currentGuess)) {
        console.log("you already tried taht word");
        return;
      }
      //* check word is 5 char long
      if (currentGuess.length !== 5) {
        console.log("word must be 5 chars long");
        return;
      }

      if (key === "Enter") {
      }
      formatGuess();
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        // slice methode slected element in array by start given.
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
