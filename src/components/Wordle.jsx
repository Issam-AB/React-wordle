import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";

const Wordle = ({ solution }) => {
  const { currentGuess, handleKeyUp, isCorrect, turn, guesses } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    // return cleaup function and run it as a first
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  return (
    <>
      <div>solution - {solution}</div>
      <div>current Guess - {currentGuess}</div>
    </>
  );
};

export default Wordle;
