export default function fetchPokemon() {
    const urlPokemon = "https://pokeapi.co/api/v2/pokemon/";
    const $pokeBox = (document.getElementById("poke-box"));
    const $fragment = document.createDocumentFragment();
    fetch(urlPokemon)
        .then((res) => res.json())
        .then((json) => {
        // console.log(json)
        json.results.forEach((pokemon) => {
            const $figure = document.createElement("figure");
            const $img = document.createElement("img");
            const $figcaption = document.createElement("figcaption");
            const $namePokemon = document.createTextNode(pokemon.name);
            $img.setAttribute("alt", pokemon.name);
            $img.setAttribute("title", pokemon.name);
            fetch(pokemon.url)
                .then((res) => res.json())
                .then((json) => {
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
