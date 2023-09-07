import { createFiltersCheckbox } from "./js/checkbox_filters.js";
const pokemonTypes = [
  "normal",
  "fire",
  "water",
  "grass",
  "electric",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dark",
  "dragon",
  "steel",
  "fairy",
];
const $btnSearch = document.getElementById("btnSearch");
const $inputSearch = document.getElementById("inputSearch");
const $filterBtn = document.getElementById("filterBtn");
const $filterAside = document.getElementById("filterAside");

// Fetch Pokemons

const $pokemonsContainer = document.querySelector(".pokemons");
const $nav = document.querySelector(".nav");
const urlAPI = "https://pokeapi.co/api/v2/pokemon/";

const loadPokemons = async (url) => {
  $pokemonsContainer.innerHTML =
    '<img class="loader" src="./assets/pokeball.gif" alt="Loading...">';
  try {
    let res = await fetch(url);
    let json = await res.json();

    let $template = "";

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    for (let i = 0; i < json.results.length; i++) {
      try {
        let res = await fetch(json.results[i].url);
        let pokemon = await res.json();

        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        const idPokemon = String(pokemon.id).padStart(3, "000");

        const tagsPokemon = () => {
          let tags = "";
          pokemon.types.forEach((el) => {
            tags += `<p class="pokemon__type">${el.type.name}</p>`;
          });
          return tags;
        };

        $template += `
        <article class="pokemon" style="background-color: var(--clr-${
          pokemon.types[0].type.name
        })">
          <p class="pokemon__name">${pokemon.name}</p>
          <p class="pokemon__banner">#${idPokemon}</p>
          <section class="pokemon__container">
          <div class="pokemon__types">
          ${tagsPokemon()}
          </div>
          <img class="pokemon__image" src="${
            pokemon.sprites.front_default
          }" alt="${pokemon.name}">
          </section>
          <img src="./assets/background.png" class="pokemon__pokeball">
        </article>
        `;
      } catch (err) {
        let msg = err.statusText || "Ocurrío un error";
        $pokemonsContainer.innerHTML = `<p>Error ${err.status}: ${msg} </p>`;
      }
    }

    $pokemonsContainer.innerHTML = $template;

    let $previousLink = json.previous
      ? `<a href="${json.previous}" class="nav__previous" id="previousBtn"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="nav__icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg></a>`
      : "";

    let $nextLink = json.next
      ? `<a href="${json.next}" class="nav__next" id="nextBtn"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currrentColor" class="nav__icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></a>`
      : "";

    $nav.innerHTML = $previousLink + " " + $nextLink;
  } catch (err) {
    let msg = err.statusText || "Ocurrío un error";
    $template += `<p>Error ${err.status}: ${msg}</p>`;
  }
};

const searchPokemon = async (url) => {
  $pokemonsContainer.innerHTML =
    '<img class="loader" src="./assets/pokeball.gif" alt="Loading...">';
  let $template = "";

  try {
    let res = await fetch(url);
    let pokemon = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    const idPokemon = String(pokemon.id).padStart(3, "000");

    const tagsPokemon = () => {
      let tags = "";
      pokemon.types.forEach((el) => {
        tags += `<p class="pokemon__type">${el.type.name}</p>`;
      });
      return tags;
    };

    $template += `
        <article class="pokemon" style="background-color: var(--clr-${
          pokemon.types[0].type.name
        })">
          <p class="pokemon__name">${pokemon.name}</p>
          <p class="pokemon__banner">#${idPokemon}</p>
          <section class="pokemon__container">
          <div class="pokemon__types">
          ${tagsPokemon()}
          </div>
          <img class="pokemon__image" src="${
            pokemon.sprites.front_default
          }" alt="${pokemon.name}">
          </section>
          <img src="./assets/background.png" class="pokemon__pokeball">
        </article>
        `;

    $pokemonsContainer.innerHTML = $template;
    $nav.innerHTML = "";
  } catch (err) {
    $pokemonsContainer.innerHTML = `<p class="error">El pokemon solicitado no existe</p>`;
  }
};

document.addEventListener("DOMContentLoaded", (event) => {
  createFiltersCheckbox(pokemonTypes);
  loadPokemons(urlAPI);
});

document.addEventListener("click", (event) => {
  if (event.target === document.getElementById("previousBtn")) {
    event.preventDefault();
    loadPokemons(event.target.href);
  }

  if (event.target === document.getElementById("nextBtn")) {
    event.preventDefault();
    loadPokemons(event.target.href);
  }

  if (event.target === $btnSearch) {
    event.preventDefault();
    searchPokemon(
      `https://pokeapi.co/api/v2/pokemon/${$inputSearch.value.toLowerCase()}/`
    );
  }

  if ($filterBtn.contains(event.target)) {
    $filterAside.classList.toggle("aside--show");
  }
});
