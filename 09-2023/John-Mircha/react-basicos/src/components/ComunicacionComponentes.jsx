import { Component } from "react";

export default class Padre extends Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <h2>Comunicación entre Componentes</h2>
        <p>
          Contador <b>{this.state.count}</b>
        </p>
        <Hijo
          incrementCount={this.incrementCount}
          msg="Mensaje para el hijo 1"
        />
        <Hijo
          incrementCount={this.incrementCount}
          msg="Mensaje para el hijo 2"
        />
      </>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <h3>{props.msg}</h3>
      <button onClick={props.incrementCount}>+</button>
    </>
  );
}
