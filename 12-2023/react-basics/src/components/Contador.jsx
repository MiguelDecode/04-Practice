import { useState } from "react";

function Contador(props) {
  const [counter, setCounter] = useState(0);

  const sumar = () => setCounter(counter + 1);

  const restar = () => setCounter(counter - 1);

  return (
    <>
      <h2>Contador con Hooks</h2>
      <h3>{counter}</h3>
      <p>Contador de {props.title}</p>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
    </>
  );
}

export default Contador;

// Para agregar propiedades por defecto al componente
Contador.defaultProps = {
  title: "Clicks",
};


