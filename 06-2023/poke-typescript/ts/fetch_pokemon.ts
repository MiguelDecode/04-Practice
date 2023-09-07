import { listPokemon, pokemonData } from "./interface/interface";

export default function fetchPokemon(): void {
  const urlPokemon: string = "https://pokeapi.co/api/v2/pokemon/";

  const $pokeBox: HTMLElement = <HTMLElement>(
    document.getElementById("poke-box")
  );
  const $fragment: Node = document.createDocumentFragment();

  fetch(urlPokemon)
    .then((res) => res.json())
    .then((json: listPokemon) => {
      // console.log(json)
      json.results.forEach((pokemon) => {
        const $figure: HTMLElement = document.createElement("figure");
        const $img: HTMLImageElement = document.createElement("img");
        const $figcaption: HTMLElement = document.createElement("figcaption");
        const $namePokemon: Node = document.createTextNode(pokemon.name);

        $img.setAttribute("alt", pokemon.name);
        $img.setAttribute("title", pokemon.name);

        fetch(pokemon.url)
          .then((res) => res.json())
          .then((json: pokemonData) => {
            $img.setAttribute("src", json.sprites.front_default);
          });

        $figcaption.appendChild($namePokemon);
        $figure.appendChild($img);
        $figure.appendChild($figcaption);

        $fragment.appendChild($figure);
      });
      $pokeBox.appendChild($fragment);
    });
}
