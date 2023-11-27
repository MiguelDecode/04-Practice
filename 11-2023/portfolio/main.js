import "./style.css";
import { setupCounter } from "./counter.js";

const nombre = "Escuela Frontend";

document.querySelector("#app").innerHTML = `
  <div>

  </div>
`;

setupCounter(document.querySelector("#counter"));
