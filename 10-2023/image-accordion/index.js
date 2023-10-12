const itemsElements = document.querySelectorAll(".item");

document.addEventListener("click", (event) => {
  if (event.target.matches(".item")) {
    itemsElements.forEach((item) => item.classList.remove("item--bigger"));

    event.target.classList.add("item--bigger");
  }
});
