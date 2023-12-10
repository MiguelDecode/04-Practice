import { Component } from "react";

function Pokemon(props) {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}

export class AjaxApis extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon/";

    const getPokemonList = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();

        const listOfPokemons = json.results;

        for await (const el of listOfPokemons) {
          const res = await fetch(el.url);
          const json = await res.json();

          let pokemon = {
            id: crypto.randomUUID(),
            name: json.name,
            avatar: json.sprites.front_default,
          };

          let pokemons = [...this.state.pokemons, pokemon];

          this.setState({ pokemons });
        }
      } catch (err) {
        console.error("Error:", err);
      }
    };

    // !IMPORTANT If React Strict Mode is active the component render twice.
    getPokemonList();

    // ? Original Code
    /*     fetch(url)
      .then((res) => res.json())
      .then((json) => {
        json.results.forEach((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((json) => {
              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              };

              let pokemons = [...this.state.pokemons, pokemon];

              this.setState({ pokemons });
            })
            .catch((err) => console.error("Error:", err));
        });
      })
      .catch((err) => console.error("Error:", err)); */
  }

  render() {
    return (
      <>
        <h2>Peticiones Asíncronas en Componentes de React</h2>
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

export default AjaxApis;
