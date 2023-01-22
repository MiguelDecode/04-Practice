const goalsContainer = document.querySelector(".goals__container");
const boxes = document.querySelectorAll(".box__goal");
const inputs = document.querySelectorAll(".box__input");
const days = document.querySelectorAll(".calendar li");

const createGoal = (goal) => {
  const box = document.createElement("section");
  box.classList.add("box__goal");
  box.innerHTML = `
              <h2 class="box__title">Meta</h2>
              <div class="box__input"></div>
              <img class="box__delete" src="./assets/delete.webp" alt="delete"></img>
              <p class="box__text">${goal}.</p>
    `;
  goalsContainer.appendChild(box);
};

document.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    createGoal(event.target.value);
    event.target.value = "";
  }
});

document.addEventListener("click", (event) => {
  if (event.target.classList.value === "box__delete") {
    event.target.closest(".box__goal").outerHTML = "";
  }

  if (
    event.target.classList.value === "box__input" ||
    event.target.classList.value === "box__input done"
  ) {
    event.target.classList.toggle("done");
  }

  days.forEach((day) => {
    if (event.target === day) {
      event.target.classList.toggle("active");
    }
  });
});
