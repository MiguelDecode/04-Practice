export function SearchForm() {
  const $form = document.createElement("form");
  const $input = document.createElement("input");

  $form.classList.add("search-form");
  $input.name = "search";
  $input.type = "search";
  $input.placeholder = "Buscar ...";
  $input.autocomplete = "off";

  $form.appendChild($input);

  document.addEventListener("submit", (event) => {
    if (!event.target.matches(".search-form")) return false;

    event.preventDefault();

    window.location.hash =
      "#/search_embed?search=" + event.target.search.value.toLowerCase();
  });

  return $form;
}
