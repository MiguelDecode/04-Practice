import React, { useState } from "react";
import "./App.css";
import Exercise from "./components/Exercise";
import Exercise2 from "./components/Exercise2";
import Exercise3 from "./components/Exercise3";

const App = () => {
  return (
    <>
      <Exercise3 />
    </>
    // <div className="box">
    //   <input
    //     type="number"
    //     value={num1}
    //     onChange={(event) => setNum1(event.target.value)}
    //   />{" "}
    //   +
    //   <input
    //     value={num2}
    //     type="number"
    //     onChange={(event) => setNum2(event.target.value)}
    //   />{" "}
    //   =
    //   <input type="number" readOnly value={result} />
    //   <button onClick={sumar}>Sumar</button>
    //   <Exercise />
    //   <Exercise2 />
    // </div>
  );
};

export default App;
