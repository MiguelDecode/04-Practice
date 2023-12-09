import { Component } from "react";

export default class Padre extends Component {
  state = {
    contador: 0,
  };

  incrementarContador = () => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Comunicación entre Componentes</h2>
        <h3>Contador: {this.state.contador}</h3>
        <Hijo mensaje="Mensaje para el hijo 1" />
        <Hijo mensaje="Mensaje para el hijo 2" />
        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="Mensaje para el hijo 3"
        />
      </div>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <h3>{props.mensaje}</h3>
      <button onClick={props.incrementarContador}>+</button>
    </>
  );
}
