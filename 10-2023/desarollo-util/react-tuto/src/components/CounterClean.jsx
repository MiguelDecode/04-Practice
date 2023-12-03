import { useEffect, useState } from "react";

export const CounterClean = () => {
  const [count, setCount] = useState(0);

  console.log("render", count);

  useEffect(() => {
    console.log("useEffect", count);

    return () => console.log("cleanup", count);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};
