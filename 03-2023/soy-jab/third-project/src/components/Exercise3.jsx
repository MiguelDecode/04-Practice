import React, { useState } from "react";
import "./Exercise3.css";

function Exercise3() {
  const [value, setValue] = useState(0);

  const cambios = [
    {
      moneda: "Euro",
      cambio: 1,
    },
    {
      moneda: "Peso argentino",
      cambio: 118.6,
    },
    {
      moneda: "Peso colombiano",
      cambio: 4543.5,
    },
    {
      moneda: "Peso mexicano",
      cambio: 23.2,
    },
    {
      moneda: "Dólar",
      cambio: 1.14,
    },
  ];

  return (
    <div className="converter">
      <label htmlFor="euro">{cambios[0].moneda}</label>
      <input
        type="number"
        id="euro"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <label htmlFor="argentino">{cambios[1].moneda}</label>
      <input
        type="number"
        readOnly
        id="argentino"
        value={value * cambios[1].cambio}
      />
      <label htmlFor="colombiano">{cambios[2].moneda}</label>
      <input
        type="number"
        id="colombiano"
        readOnly
        value={value * cambios[2].cambio}
      />
      <label htmlFor="mexicano">{cambios[3].moneda}</label>
      <input
        type="number"
        id="mexicano"
        readOnly
        value={value * cambios[3].cambio}
      />
      <label htmlFor="dolar">{cambios[4].moneda}</label>
      <input
        type="number"
        id="dolar"
        readOnly
        value={value * cambios[4].cambio}
      />
    </div>
  );
}

export default Exercise3;
