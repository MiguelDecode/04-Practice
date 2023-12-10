import { Component } from "react";

export class CicloVida extends Component {
  constructor(props) {
    super(props);

    console.log(0, "El componente se inicializa, aún NO está en el DOM");

    this.state = {
      hour: new Date().toLocaleTimeString(),
    };

    this.timer = null;
  }

  componentDidMount() {
    console.log(1, "El componente ya se encuentra en el DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(2, "El estado o las props del componente han cambiado");
    console.log(prevProps);
    console.log(prevState);
  }

  componentWillUnmount() {
    console.log(3, "El componente ha sido eliminado del DOM");
  }

  tictac = () => {
    this.timer = setInterval(() => {
      this.setState({
        hour: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  startTimer = () => {
    this.tictac();
  };

  stopTimer = () => {
    clearInterval(this.timer);
  };

  render() {
    console.log(
      4,
      "El componente se dibuja (o redibuja por algún cambio) en el DOM"
    );
    return (
      <>
        <h2>Ciclo de Vida de los Componentes de Clase</h2>
        <h3>{this.state.hour}</h3>
        <button onClick={this.startTimer}>Iniciar</button>
        <button onClick={this.stopTimer}>Detener</button>
      </>
    );
  }
}

export default CicloVida;
