import { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista(props) {
  return (
    <li>
      <a href={props.el.web} target="_blank" rel="noopener noreferrer">
        {props.el.name}
      </a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
    };
  }
  render() {
    return (
      <div>
        <h2>Renderizado de elementos.</h2>
        <h3>Estaciones del año</h3>
        <ul>
          {this.state.seasons.map((season, index) => (
            <li key={index}>{season}</li>
          ))}
        </ul>
        <h3>Frameworks Frontend JavaScript</h3>
        <ul>
          {data.frameworks.map((el) => (
            <ElementoLista key={el.id} el={el} />
          ))}
        </ul>
      </div>
    );
  }
}
