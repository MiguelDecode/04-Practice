import { useState, useEffect } from "react";

function Pokemon({ avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default function AjaxHooks() {
  const [pokemons, setPokemons] = useState([]);
  /*   useEffect(() => {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
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

              setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        });
      });
  }, []); */

  useEffect(() => {
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/";

    const getPokemons = async (url) => {
      try {
        const res = await fetch(url);
        const json = await res.json();

        for await (const el of json.results) {
          const res = await fetch(el.url);
          const json = await res.json();

          // console.log(json);

          let pokemon = {
            id: json.id,
            name: json.name,
            avatar: json.sprites.front_default,
          };

          setPokemons((pokemons) => [...pokemons, pokemon]);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getPokemons(apiUrl);
  }, []);

  return (
    <>
      <h2>Peticiones Asíncronas en Hooks.</h2>
      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemons.map((el) => (
          <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        ))
      )}
    </>
  );
}

