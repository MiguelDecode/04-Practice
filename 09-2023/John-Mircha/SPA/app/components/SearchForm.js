export function SearchForm() {
  const $form = document.createElement("form");
  const $input = document.createElement("input");

  $form.classList.add("search-form");
  $input.name = "search";
  $input.type = "search";
  $input.placeholder = "Buscar...";
  $input.autocomplete = 'off';
  $form.appendChild($input);

  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = event.target.querySelector("input").value;

    location.hash = `#/search?search=${inputValue}`;
  });

  return $form;
}
