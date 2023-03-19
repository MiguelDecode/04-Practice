import "./App.css";
import { useRef } from "react";
import image0 from "./images/rey_atanagildo.png";
import image1 from "./images/rey_sisebuto.png";

function App() {
  const cambio = 23.16;
  const refCaja = useRef();

  const incrementar = (event) => {
    event.target.innerHTML = Number(event.target.innerHTML) + 1;
    if (Number(event.target.innerHTML) > 7)
      event.target.style.backgroundColor = "red";

    if (Number(event.target.innerHTML) > 9) {
      event.target.style.backgroundColor = "unset";
      event.target.innerHTML = 1;
    }
  };

  const convertir = () => {
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * cambio;
  };

  const cambiar = (event) => {
    if (event.target.src.includes(image0)) {
      event.target.src = image1;
    } else {
      event.target.src = image0;
    }
  };

  const lectura = (event) => {
    refCaja.current.innerHTML = event.target.value;
  };

  return (
    <>
      <div ref={refCaja} className="caja" onClick={incrementar}>
        1
      </div>
      <button onClick={convertir}>Caja</button>
      <div>
        <img onClick={cambiar} src={image0} />
      </div>
      <input className="campo" onChange={lectura} />
    </>
  );
}

export default App;
