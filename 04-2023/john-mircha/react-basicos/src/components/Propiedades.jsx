import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
  return (
    <div>
      <h2>Propiedades</h2>
      <h3>{props.porDefecto}</h3>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.boolean ? "Verdadero" : "Falso"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.objeto.nombre}</li>
        <li>{props.objeto.correo}</li>
        <li>{props.elementoReact}</li>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  );
}

Propiedades.defaultProps = {
  porDefecto: "Texto por defecto desde una propiedad interna del componente",
};

Propiedades.propTypes = {
  numero: PropTypes.number.isRequired,
};
