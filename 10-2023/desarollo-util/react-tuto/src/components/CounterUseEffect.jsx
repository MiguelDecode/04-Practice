import { useEffect, useState } from "react";

export const CounterUseEffect = () => {
  const [count, setCount] = useState({count: 0});
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (count === 0) return;
    console.log("useEffect", count);
    document.title = count.count;
  }, [count]);

  return (
    <div>
      <h1>Count: {count.count}</h1>
      <h2>Step: {step}</h2>

      <button
        onClick={() => {
          setCount({count: count.count + step});
        }}
      >
        Incrementar
      </button>

      <button
        onClick={() => {
          setStep(step + 1);
        }}
      >
        Incrementar step
      </button>
    </div>
  );
};
