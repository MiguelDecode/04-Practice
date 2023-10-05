import { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.add = this.add.bind(this);
    this.substract = this.substract.bind(this);
  }

  add() {
    console.log(this);
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  substract() {
    console.log(this);
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES6</h2>
        <nav>
          <button onClick={this.add}>+</button>
          <button onClick={this.substract}>-</button>
        </nav>
        <h3>Valor del Contador: {this.state.counter}</h3>
      </div>
    );
  }
}

// Properties initializer
export class EventosES7 extends Component {
  state = {
    counter: 0,
  };

  add = () => {
    console.log(this);
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  substract = () => {
    console.log(this);
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES7</h2>
        <nav>
          <button onClick={this.add}>+</button>
          <button onClick={this.substract}>-</button>
        </nav>
        <h3>Valor del Contador: {this.state.counter}</h3>
      </div>
    );
  }
}

function Button(props) {
  return <button onClick={props.myOnClick}>Botón Componetizado</button>;
}

const ButtonOptimized = ({ myOnClick }) => (
  <button onClick={myOnClick}>Botón optimizado y componetizado</button>
);

export class MasSobreEventos extends Component {
  handleclick = (event, msg) => {
    console.log(msg);
    console.log(event);
    console.log(event.nativeEvent);
  };

  render() {
    return (
      <div>
        <h2>Mas sobre los eventos</h2>
        <button
          onClick={(event) =>
            this.handleclick(event, "Hola pasando parametro desde un evento")
          }
        >
          Saludar
        </button>
        {/* Evento Personalizado ejemplo fallido */}
        <Button
          onClick={(event) =>
            this.handleclick(
              event,
              "Hola pasando parametro desde un componente botón"
            )
          }
        />
        {/* Evento Personalizado de la manera correcta */}
        <Button
          myOnClick={(event) =>
            this.handleclick(
              event,
              "Hola pasando parametro desde un componente botón"
            )
          }
        />
        <ButtonOptimized
          myOnClick={(event) =>
            this.handleclick(
              event,
              "Hola pasando parametro desde un componente botón"
            )
          }
        />
      </div>
    );
  }
}
