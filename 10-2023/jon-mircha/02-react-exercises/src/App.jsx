import "./App.css";
import { CrudApi } from "./components/CrudApi";
import { CrudApp } from "./components/CrudApp";

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  );
}

export default App;
