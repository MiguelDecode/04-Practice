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
