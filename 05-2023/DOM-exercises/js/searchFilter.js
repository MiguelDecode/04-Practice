export default function searchFilter(input, elements) {
  const $input = document.querySelector(input);
  const $cards = document.querySelectorAll(elements);

  document.addEventListener("keyup", (event) => {
    if (event.target === $input) {
      if (event.key === "Escape") event.target.value = "";

      $cards.forEach((card) =>
        card.textContent.toLowerCase().includes(event.target.value)
          ? card.classList.remove("none")
          : card.classList.add("none")
      );
    }
  });
}
