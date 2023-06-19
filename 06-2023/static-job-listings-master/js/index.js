const $containerOffers = document.querySelector(".container");
const $filterBox = document.querySelector(".filter__box");
const $btnClear = document.getElementById("filter-clear");

const filters = new Set();

// Dibuja cada una de las ofertas.
const drawCard = (obj) => {
  const $card = document.createElement("article");
  $card.classList.add("card");
  $card.innerHTML = `<img class="card__image" src="${obj.logo}" alt="photosnap" />
  <h2 class="card__title">${obj.company}</h2>
  <h3 class="card__subtitle">${obj.position}</h3>
  <p class="card__data">
    <span class="card__ago">${obj.postedAt}</span> -
    <span class="card__time">${obj.contract}</span> -
    <span class="card__mode">${obj.location}</span>
  </p>
  <div class="card__line"></div>
  `;

  const $tagsContainer = document.createElement("div");
  $tagsContainer.classList.add("card__tags");

  const tags = [...obj.languages, ...obj.tools, obj.level, obj.role];
  tags.forEach((tag) => {
    const $tag = document.createElement("span");
    $tag.classList.add("card__tag");
    $tag.textContent = tag;
    $tagsContainer.appendChild($tag);
  });

  $card.appendChild($tagsContainer);
  $containerOffers.appendChild($card);
};

// Reiniciar filtros y display de resultados.
const cleanAllFilters = () => {
  filters.clear();
  $filterBox.innerHTML = "";
};

// Dibujar la etiqueta de filtro.
const drawFilterTag = (tagName) => {
  const $filterTag = document.createElement("div");
  $filterTag.classList.add("filter__tag");
  $filterTag.innerHTML = `
              <span class="filter__name">${tagName}</span>
              <img src="./images/red-cross.svg" alt="Delete icon" class="filter__delete"/>
  `;
  $filterBox.appendChild($filterTag);
};

// Dibujar las ofertas en furción de los filtros.
const drawOffers = () => {
  $containerOffers.innerHTML = "";

  if (filters.size === 0) {
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => data.forEach((card) => drawCard(card)));
  } else {
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((card) => {
          const cardTags = [
            ...card.languages,
            ...card.tools,
            card.role,
            card.level,
          ];
          const filtersArray = [...filters];

          // Busca que las tarjetas cumplan con todas las tags indicadas en el filtro.
          const isInclude = filtersArray.every((filter) =>
            cardTags.includes(filter)
          );

          // Busca que las tarjetas contengan una de las tags indicadas en el filtro.
          /*           const isInclude = filtersArray.some((filter) =>
            cardTags.includes(filter)
          ); */

          if (isInclude) drawCard(card);
        });
      });
  }
};

drawOffers();

document.addEventListener("click", (event) => {
  // Limpiar es set de Filters y borrar la caja de los filtros.
  if (event.target === $btnClear) {
    cleanAllFilters();
    drawOffers();
  }

  // Añadir tag a los filtros y al set de filtros.
  if (event.target.matches(".card__tag")) {
    if (!filters.has(event.target.textContent))
      drawFilterTag(event.target.textContent);
    filters.add(event.target.textContent);
    drawOffers();
  }

  // Borrar el tag de filtro añadido anteriormente.
  if (event.target.matches(".filter__delete")) {
    event.target.parentElement.remove();
    filters.delete(event.target.parentElement.firstElementChild.textContent);
    drawOffers();
  }
});
