import { useState, useEffect } from "react";

function Pokemon({ avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

function AjaxHooks() {
  const [pokemons, setPokemons] = useState([]);

  // * Original Code
  /*   useEffect(() => {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
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

              setPokemons((pokemons) => [...pokemons, pokemon]);
            })
            .catch((err) => console.error("Error:", err));
        });
      })
      .catch((err) => console.error("Error:", err));
  }, []); */

  useEffect(() => {
    const getPokemons = async (url) => {
      const res = await fetch(url);
      const json = await res.json();

      const arr = json.results;

      // Bucle en que cada petición fetch espera a su resolución antes de comenzar con la siguiente petición de un nuevo pokemon añadiendo al estado los pokemons de manera ordenada y no por orden de resolución de la petición.
      for (let i = 0; i < arr.length; i++) {
        const res = await fetch(arr[i].url);
        const json = await res.json();

        let pokemon = {
          id: crypto.randomUUID(),
          name: json.name,
          avatar: json.sprites.front_default,
        };

        setPokemons((pokemons) => [...pokemons, pokemon]);
      }
    };

    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  return (
    <>
      <h2>Peticiones Asíncronas en Hooks</h2>
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

export default AjaxHooks;
