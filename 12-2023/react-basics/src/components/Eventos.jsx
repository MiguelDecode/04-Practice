import { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    this.incrementar = this.incrementar.bind(this);
    this.decrementar = this.decrementar.bind(this);
  }

  incrementar() {
    console.log("Incrementar");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  decrementar() {
    console.log("Decrementar");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en componentes de clase ES6</h2>
        <nav>
          <button onClick={this.incrementar}>Incrementar</button>
          <button onClick={this.decrementar}>Decrementar</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

// Properties Initializer
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  // Arrow Functions
  incrementar = () => {
    console.log("Incrementar");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  decrementar = () => {
    console.log("Decrementar");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos en componentes de clase ES7</h2>
        <nav>
          <button onClick={this.incrementar}>Incrementar</button>
          <button onClick={this.decrementar}>Decrementar</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick}>Botón hecho componente</button>
);

export class MasSobreEventos extends Component {
  handleClick = (event, msg) => {
    console.log(event);
    console.log(event.target);
    console.log(event.nativeEvent.target);
    console.log(msg);
  };

  render() {
    return (
      <div>
        <h2>Más sobre Eventos</h2>
        <button
          onClick={(event) =>
            this.handleClick(event, "Hola pasando parametro desde un evento")
          }
        >
          Saludar
        </button>

        {/* Evento Personalizado */}
        {/*         <Boton
          onClick={(event) =>
            this.handleClick(event, "Hola pasando parametro desde un evento")
          }
        /> */}

        <Boton
          // Pasar el evento como una prop
          myOnClick={(event) =>
            this.handleClick(event, "Hola pasando parametro desde un evento")
          }
        />
      </div>
    );
  }
}
