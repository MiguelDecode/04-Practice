import React, { Component } from "react";

export default class Eventos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    this.incrementar = this.incrementar.bind();
    this.decrementar = this.decrementar.bind();
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
        <h2>Eventos en Componentes de clase</h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={this.incrementar}>+</button>
          <button onClick={this.decrementar}>-</button>
        </nav>
      </div>
    );
  }
}
