export const createFiltersCheckbox = (pokemonTypes) => {
  const $fragment = document.createDocumentFragment();

  pokemonTypes.forEach((type) => {
    const $label = document.createElement("label");
    $label.classList.add("aside__label");

    $label.innerHTML = `
      <input type="checkbox" class="aside__checkbox" id="${type}" name="${type}">
      ${type}
    `;

    $fragment.appendChild($label);
  });

  document.querySelector(".aside__form").appendChild($fragment);
};
