const container = document.querySelector(".container");
const body = document.querySelector("body");

const REYES = ["atanagildo", "sisebuto", "ervigio", "teodorico"];

REYES.map((el) => {
  container.insertAdjacentHTML(
    "beforeend",
    `
    <div class="king" data-name="${el}">
        <img src="./assets/rey_${el}.png" alt="${el}" class="king__img" />
        <div class="king__info">
            <h2 class="king__name">${el}</h2>
            <button class="king__btn">Reservar</button>
        </div>
    </div>
  `
  );
});

document.querySelectorAll(".king__btn").forEach((btn, index) =>
  btn.addEventListener("click", (event) => {
    container.innerHTML = "";
    const name = REYES[index];
    container.insertAdjacentHTML(
      "beforeend",
      `
      <div class="king" data-name="${name}">
        <h2>Has reservado cena con <span class="king--special">${name}</span> esta noche</h2>
        <img src="./assets/rey_${name}.png" alt="${name}" class="king__img" />
        <div class="king__info">
            <h2 class="king__name">${name}</h2>
        </div>
      </div>
      `
    );

    container.classList.add("container--center");
  })
);
