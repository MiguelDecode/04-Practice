const $main = document.querySelector("main");
const $links = document.querySelector(".nav");
let pokeAPI = "https://pokeapi.co/api/v2/pokemon/";

async function loadPokemons(url) {
  try {
    $main.innerHTML = `<img class="loader" src="./assets/loader.svg" alt="Cargando...">`;

    let res = await fetch(url);
    let json = await res.json();
    let $template = "";
    let $prevLink, $nextLink;

    console.log(json);

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    // El método forEach no esperará al resultado de cada una de las peticiones que se hagan a la api y generará problemas con las mismas.

    let limit = json.results.length;
    for (let i = 0; i < limit; i++) {
      // console.log(json.results[i]);
      try {
        let res = await fetch(json.results[i].url);
        let pokemon = await res.json();

        // console.log(res, pokemon);

        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        $template += `
        <figure class="card">
        <img class="card__image" src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <figcaption class="card__name">${pokemon.name}</figcaption>
        </figure>
        `;
      } catch (err) {
        console.log(err);
        let message = err.statusText || "Ocurrió un error";
        $template += `
        <figure>
        <figcaption>Error ${err.status}: ${message}</figcaption>
        </figure>
        `;
      }
    }

    $main.innerHTML = $template;

    $prevLink = json.previous ? `<a href="${json.previous}">⬅️</a>` : "";
    $nextLink = json.next ? `<a href="${json.next}">➡️</a>` : "";

    $links.innerHTML = $prevLink + " " + $nextLink;
  } catch (err) {
    console.log(err);
    let message = err.statusText || "Ocurrió un error";
    $main.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
  }
}

document.addEventListener("DOMContentLoaded", (event) => loadPokemons(pokeAPI));

document.addEventListener("click", (event) => {
  if (event.target.matches(".nav a")) {
    event.preventDefault();
    loadPokemons(event.target.getAttribute("href"));
  }
});
