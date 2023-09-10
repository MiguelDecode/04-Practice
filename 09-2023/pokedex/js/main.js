const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const apiUrlType = "https://pokeapi.co/api/v2/type/";
const pokeContainer = document.getElementById("pokemons-container");

const cleanContainer = () => {
  pokeContainer.innerHTML = "";
};

const addPokemonToContainer = (element) => {
  pokeContainer.appendChild(element);
};

const formatPokemonId = (id) => {
  return String(id).padStart(3, "0");
};

const createPokemonTypes = (arr) => {
  let data = "";
  arr.forEach(
    (el) =>
      (data += `<span class="pokemon__type ${el.type.name}">${el.type.name}</span>`)
  );
  return data;
};

const createPokemonCard = (pokemon) => {
  const articleElement = document.createElement("article");
  articleElement.classList.add("pokemon");
  const pokemonId = formatPokemonId(pokemon.id);

  let pokemonTypes = createPokemonTypes(pokemon.types);

  articleElement.innerHTML = `
      <p class="pokemon__back">#${pokemonId}</p>

          <img
            class="pokemon__image"
            src="${
              pokemon.sprites.other.dream_world.front_default ||
              pokemon.sprites.front_default
            }"
            alt="${pokemon.name}"
          />

          <section class="pokemon__info">
            <div class="pokemon__data">
              <span class="pokemon__id">#${pokemonId}</span>
              <h2 class="pokemon__name">${pokemon.name}</h2>
            </div>

            <div class="pokemon__types">
            ${pokemonTypes}
            </div>

            <div class="pokemon__stats">
              <span class="pokemon__stat">${pokemon.height}m</span>
              <span class="pokemon__stat">${pokemon.weight}Kg</span>
            </div>
          </section> 
  `;

  addPokemonToContainer(articleElement);
};

const getPokemonData = async (url) => {
  try {
    const res = await fetch(url);

    console.log(res.url); // Si se encuentra ordenado

    if (!res.ok) throw new Error(res.statusText || "Ocurrío un error");

    const json = await res.json();

    console.log(json); // No estan ordenados

    createPokemonCard(json);
  } catch (err) {
    console.log(err);
  }
};

const getPokemons = async () => {
  try {
    const res = await fetch(apiUrl);

    if (!res.ok) throw new Error(res.statusText || "Ocurrío un error.");

    const json = await res.json();

    json.results.forEach((pokemon) => getPokemonData(pokemon.url));
  } catch (err) {
    console.log(err);
  }
};

const getPokemonsbyId = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) throw new Error(res.statusText || "Ocurrío un error.");

    const json = await res.json();

    json.pokemon.forEach(async (el) => await getPokemonData(el.pokemon.url));
  } catch (err) {
    console.log(err);
  }
};

const filterPokemons = (event) => {
  if (event.target.matches(".btn-header")) {
    const type = event.target.id;

    cleanContainer();

    event.target.id === "ver-todos"
      ? getPokemons(apiUrl)
      : getPokemonsbyId(apiUrlType + type);
  }
};

document.addEventListener("DOMContentLoaded", getPokemons);

document.addEventListener("click", filterPokemons);
