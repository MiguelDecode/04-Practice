import React from "react";
import "./King.css";

export default function King({ rey }) {
  const { nombre, vacasComidas, reinado } = rey;
  return (
    <div className="king" key={nombre}>
      <p className="king__text">
        <span className="king__name">{nombre.toUpperCase()}</span> ha comido{" "}
        {vacasComidas * 365 * reinado} vacas en sus {reinado} años de reinado.
      </p>
      <img
        className="king__image"
        src={`http://www.html6.es/img/rey_${nombre.toLowerCase()}.png`}
        alt={nombre}
      />
    </div>
  );
}
