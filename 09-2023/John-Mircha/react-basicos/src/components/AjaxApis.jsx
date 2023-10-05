import { Component } from "react";

function Pokemon(props) {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}

export default class AjaxApis extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        // Se generá un error en este punto. El ciclo de forEach no espera a que el ciclo anterior se termine antes de comenzar el siguiente.
        // TODO Refactor code to improve with asynchronous code.
        json.results.forEach((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((json) => {
              // console.log(json);
              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              };

              let pokemons = [...this.state.pokemons, pokemon];
              this.setState({ pokemons });
            });
        });
      });
  }

  render() {
    return (
      <>
        <h2>Peticiones Asíncronas en componentes de clase.</h2>
        {this.state.pokemons.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          this.state.pokemons.map((el) => (
            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
          ))
        )}
      </>
    );
  }
}
