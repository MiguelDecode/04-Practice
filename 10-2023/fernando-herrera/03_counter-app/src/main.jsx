import "./style.css";
import React from "react";
import ReactDOM from "react-dom/client";

// import { HelloWorld } from "./HelloWorld";
// import { FirstApp } from "./FirstApp";
import { CounterApp } from "./CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={0} />
    {/* <FirstApp title="Hola, soy Miguel Decode" /> */}
  </React.StrictMode>
);
