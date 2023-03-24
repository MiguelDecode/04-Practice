const $coins = document.getElementById("coins");
const $input = document.getElementById("bet");
const $btnGo = document.querySelector(".btn-go");
const $btnReset = document.querySelector(".btn-reset");
const $result = document.querySelector(".result");
const $msg = document.querySelector(".msg");

let score = 5;

const drawCoins = () => {
  $coins.innerHTML = "";
  for (let i = 0; i < score; i++) {
    const coin = document.createElement("img");
    coin.src = "./coin.png";
    coin.classList.add("coin");
    coin.alt = "coin";
    $coins.appendChild(coin);
  }
};

drawCoins();

const drawResults = () => {
  $result.innerHTML = "";
  for (let i = 1; i <= $input.value; i++) {
    const random = Math.round(Math.random() * (9 - 2 + 1) + 2);
    const result = document.createElement("div");
    result.textContent = random;
    result.classList.add("result-coin");

    if (random === Number($input.value)) {
      result.classList.add("green");
    } else {
      result.classList.add("red");
    }

    $result.appendChild(result);
  }
};

const checkResults = () => {
  const greens = $result.querySelectorAll(".green");

  if (greens.length === 0) {
    score -= Number($input.value);
    console.log("firshellt");
  } else {
    score += greens.length;
  }

  drawCoins();

  if (score <= 0) alert("Has perdido todas tus monedas");
};

const resetGame = () => {
  score = 5;
  drawCoins();
  $input.value = "";
  $input.focus();
  $result.innerHTML = "";
  $msg.innerHTML = "";
};

$btnGo.addEventListener("click", () => {
  drawResults();
  checkResults();
});
$btnReset.addEventListener("click", resetGame);
