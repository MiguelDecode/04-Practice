import React, { Component } from "react";

// Class Component
/* export class Componente extends Component {
  render() {
    return <h2>{this.props.msg}</h2>;
  }
} */

// Functional Component
/* function Componente(props) {
  return <h2>{props.msg}</h2>;
} */

// Arrow Functional Component
const Componente = (props) => <h2>{props.msg}</h2>;

export default Componente;
