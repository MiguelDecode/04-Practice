import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    this.incrementar = this.incrementar.bind(this);
    this.decrementar = this.decrementar.bind(this);
  }

  incrementar(event) {
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  decrementar(event) {
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de clase en EcmaScript 6</h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={this.incrementar}>+</button>
          <button onClick={this.decrementar}>-</button>
        </nav>
      </div>
    );
  }
}

// Properties Initializer
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  incrementar = (event) => {
    console.log("Sumar");
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  decrementar = (event) => {
    console.log("Restar");
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de clase en EcmaScript 7</h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={this.incrementar}>+</button>
          <button onClick={this.decrementar}>-</button>
        </nav>
      </div>
    );
  }
}

/* function Button(props) {
  return <button onClick={props.myOnclick}>Botón hecho componente</button>;
} */

/* const Button = (props) => (
  <button onClick={props.myOnclick}>Botón hecho componente</button>
); */

const Button = ({ myOnclick }) => (
  <button onClick={myOnclick}>Botón hecho componente</button>
);

export class MasSobreEventos extends Component {
  handleClick = (event, msg) => {
    console.log(event);
    console.log(event.nativeEvent);
    console.log(event.target);
    console.log(event.nativeEvent.target);
    console.log(msg);
  };

  render() {
    return (
      <div>
        <h2>Más Sobre Eventos</h2>
        <button
          onClick={(event) =>
            this.handleClick(event, "Hola pasando parámetro desde un evento")
          }
        >
          Saludar
        </button>

        <Button
          onClick={(event) =>
            this.handleClick(event, "Hola pasando parámetro desde un evento")
          }
        />

        <Button
          myOnclick={(event) =>
            this.handleClick(event, "Hola pasando parámetro desde un evento")
          }
        />
      </div>
    );
  }
}
