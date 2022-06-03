import React, { useState, useEffect } from "react";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((json) => json[Math.floor(Math.random() * json.length)])
      .then((result) => setSolution(result.word));
  }, [setSolution]);
  return (
    <div className="App">
      <h1>World (Solution)</h1>
      {/* {JSON.stringify(solution, null, 2)} */}
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
