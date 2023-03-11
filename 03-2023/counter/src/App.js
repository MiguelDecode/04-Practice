import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  // numCounter guarda el estado actual del contador
  // setNumCounter actualiza el estado del contador
  const [numCounter, setNumCounter] = useState(0);

  const addCounter = () => {
    setNumCounter(numCounter + 1);
  };

  const resetCounter = () => {
    setNumCounter(0);
  };

  return (
    <main className="App">
      <Counter numCounter={numCounter} />
      <Button text="Counter" isClickBtn={true} handleEvent={addCounter} />
      <Button text="Reset" isClickBtn={false} handleEvent={resetCounter} />
    </main>
  );
}

export default App;
