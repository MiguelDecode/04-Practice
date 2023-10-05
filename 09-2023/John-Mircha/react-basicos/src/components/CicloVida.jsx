import { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log(3, "El componente ha sido eliminado del DOM");
  }

  render() {
    return <h3>{this.props.hour}</h3>;
  }
}

export class CicloVida extends Component {
  constructor(props) {
    super(props);

    console.log(0, "El componente se inicializa, aún no esta en el DOM.");
    this.state = {
      hour: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.crono = null;
  }

  componentDidMount() {
    console.log(1, "El componente ya se encuentra en el DOM.");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(2, "El estado o las props del componente han cambiado.");
    console.log(prevProps);
    console.log(prevState);
  }

  tictac = () => {
    this.crono = setInterval(() => {
      this.setState({
        hour: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  start = () => {
    this.tictac();
    this.setState({ visible: true });
  };

  stop = () => {
    clearInterval(this.crono);
    this.setState({ visible: false });
  };

  render() {
    console.log(4, "El componente se dibuja o redibuja en el DOM.");
    return (
      <>
        <h2>Ciclo de vida de los componentes de clase.</h2>
        {this.state.visible && <Clock hour={this.state.hour} />}
        <button onClick={this.start}>Iniciar</button>
        <button onClick={this.stop}>Detener</button>
      </>
    );
  }
}
