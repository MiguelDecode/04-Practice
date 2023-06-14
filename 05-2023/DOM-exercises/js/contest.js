export default function draw(idBtn, selector) {
  const $btn = document.getElementById(idBtn);
  const getWinner = (selector) => {
    const $players = document.querySelectorAll(selector);
    const random = Math.floor(Math.random() * $players.length);

    let winner = $players[random];

    return `El ganador es: ${winner.textContent}`;
  };

  document.addEventListener("click", (event) => {
    if (event.target === $btn) {
      let result = getWinner(selector);
      alert(result);
      console.log(result);
    }
  });
}
