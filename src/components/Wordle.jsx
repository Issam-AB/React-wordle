import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";

const Wordle = ({ solution }) => {
  const { currentGuess, handleKeyUp } = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    // return cleaup funstion and run it as a first
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  return <div>current Guess: {currentGuess}</div>;
};

export default Wordle;
