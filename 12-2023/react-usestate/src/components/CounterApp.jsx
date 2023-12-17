import { useState } from "react";

function CounterApp() {
  const [counter, setCounter] = useState(0);

  const incrementarCounter = () => setCounter(counter + 1);

  const decrementarCounter = () => setCounter(counter - 1);

  return (
    <section>
      <h2>Counter App</h2>
      <h3>Clicks: {counter}</h3>
      <button onClick={incrementarCounter}>Incrementar</button>
      <button onClick={decrementarCounter}>Decrementar</button>
    </section>
  );
}

export default CounterApp;
