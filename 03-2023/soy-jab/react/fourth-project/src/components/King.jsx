import React from "react";
import "./King.css";

function King({ nombre, color, precio, manejarTotal, total }) {
  const ruta = "http://www.html6.es/img/rey_";
  const imagen = `${ruta}${nombre.toLowerCase()}.png`;

  const comprar = (event) => {
    manejarTotal(total + precio);
    event.target.parentNode.remove();
  };

  return (
    <div className="card" style={{ backgroundColor: color }}>
      <h2 className="card__title">{nombre}</h2>
      <img className="card__img" src={imagen} />
      <h3 className="card__subtitle">Precio:</h3>
      <p className="card__cost">{precio} Euros</p>
      <button onClick={comprar} className="buy-btn">
        Comprar
      </button>
    </div>
  );
}

export default King;
