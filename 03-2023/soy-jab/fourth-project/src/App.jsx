import "./App.css";
import { useState } from "react";
import King from "./components/King";

function App() {
  const [result, setResult] = useState(0);

  const kings = [
    {
      nombre: "Atanagildo",
      color: "darkolivegreen",
      precio: 178,
    },
    {
      nombre: "Ervigio",
      color: "crimson",
      precio: 169,
    },
    {
      nombre: "Ataúlfo",
      color: "peru",
      precio: 81,
    },
    {
      nombre: "Leogivildo",
      color: "darkmagenta",
      precio: 126,
    },
    {
      nombre: "Recesvinto",
      color: "royalblue",
      precio: 141,
    },
    {
      nombre: "Sisebuto",
      color: "teal",
      precio: 69,
    },
  ];

  return (
    <>
      <h1>Total a pagar: {result}</h1>
      <div className="wrapper">
        <King
          nombre={kings[0].nombre}
          color={kings[0].color}
          precio={kings[0].precio}
          manejarTotal={setResult}
          total={result}
        />
        <King
          nombre={kings[1].nombre}
          color={kings[1].color}
          precio={kings[1].precio}
          manejarTotal={setResult}
          total={result}
        />
        <King
          nombre={kings[2].nombre}
          color={kings[2].color}
          precio={kings[2].precio}
          manejarTotal={setResult}
          total={result}
        />
        <King
          nombre={kings[3].nombre}
          color={kings[3].color}
          precio={kings[3].precio}
          manejarTotal={setResult}
          total={result}
        />
        <King
          nombre={kings[4].nombre}
          color={kings[4].color}
          precio={kings[4].precio}
          manejarTotal={setResult}
          total={result}
        />
        <King
          nombre={kings[5].nombre}
          color={kings[5].color}
          precio={kings[5].precio}
          manejarTotal={setResult}
          total={result}
        />
      </div>
    </>
  );
}

export default App;
