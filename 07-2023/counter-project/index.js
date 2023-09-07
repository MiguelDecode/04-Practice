const $number = document.getElementById("number");
const $btnDecrease = document.getElementById("decrease");
const $btnReset = document.getElementById("reset");
const $btnIncrease = document.getElementById("increase");
const $btnsContainer = document.querySelector('.buttons')

let num = 0;

const checkNumber = (num) => {
  if (num > 0) {
    $number.style.color = 'green';
  } else if (num < 0) {
    $number.style.color = 'red';
  } else {
    $number.style.color = 'whitesmoke';
  }
};

$btnsContainer.addEventListener("click", (event) => {
  if (event.target === $btnDecrease) num--;

  if (event.target === $btnIncrease) num++;

  if (event.target === $btnReset) num = 0;

  checkNumber(num);

  $number.textContent = num;
});
