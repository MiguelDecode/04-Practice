import { useState } from "react";

function ConditionalApp() {
  const [condition, setCondition] = useState(true);

  return (
    <>
      <h2>ConditionalApp</h2>
      <button onClick={() => setCondition(!condition)}>Toggle</button>
      {/* {condition ? <h3>Verdadero</h3> : <h3>Falso</h3>} */}
      {/* {condition && <h3>Show message only in true</h3>} */}
      <h3>State value is {condition.toString()}</h3>
    </>
  );
}

export default ConditionalApp;
