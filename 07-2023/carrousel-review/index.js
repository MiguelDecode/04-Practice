import { reviews } from "./assets/data.js";

const $btnLeft = document.getElementById("btn-left");
const $btnRight = document.getElementById("btn-right");
const $btnRandom = document.getElementById("btn-random");

let num = 0;

const drawReview = ({ id, name, job, img, text }) => {
  const $container = document.querySelector(".container");

  $container.innerHTML = `
    <picture class="card__picture">
          <div class="card__circle"></div>
          <img
            class="card__img"
            src="${img}"
            alt="Profile photo"
          />
          <img
            class="card__quotes"
            src="./assets/quotes.svg"
            alt="Icon quotes"
          />
    </picture>
    <h3 class="card__author">${name}</h3>
    <h4 class="card__job">${job}</h4>
    <p class="card__review">${text}</p>
  `;
};

drawReview(reviews[num]);

document.addEventListener("click", (event) => {
  if (event.target === $btnLeft) {
    console.log("left");
    if (num === 0) {
      num = reviews.length - 1;
    } else {
      num--;
    }

    drawReview(reviews[num]);
  }

  if (event.target === $btnRight) {
    console.log("right");
    if (num === reviews.length - 1) {
      num = 0;
    } else {
      num++;
    }

    drawReview(reviews[num]);
  }

  if (event.target === $btnRandom) {
    num = Math.floor(Math.random() * reviews.length);
    drawReview(reviews[num]);
  }
});
