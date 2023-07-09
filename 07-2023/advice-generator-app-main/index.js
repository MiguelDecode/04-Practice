const $btnRandom = document.querySelector(".random");
const $main = document.querySelector("main");
const $idAdvice = document.querySelector(".card__id");
const $Advice = document.querySelector(".card__advice");

document.addEventListener("DOMContentLoaded", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((json) => {
      $idAdvice.textContent = `Advice #${json.slip.id}`;
      $Advice.textContent = `"${json.slip.advice}"`;
    })
    .catch((err) => {
      console.log(err);
    });
});

$btnRandom.addEventListener("click", (event) => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((json) => {
      $idAdvice.textContent = `Advice #${json.slip.id}`;
      $Advice.textContent = `"${json.slip.advice}"`;
    })
    .catch((err) => {
      console.log(err);
    });
});
