export default function countdown(id, limitDate, finalMessage) {
  const $countdown = document.getElementById(id);
  const date = new Date(limitDate).getTime();

  let tempo = setInterval(() => {
    const now = new Date().getTime();
    let limitTime = date - now;
    let days = Math.floor(limitTime / (1000 * 60 * 60 * 24));
    let hours = String(
      Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).padStart(2, "0");
    let minutes = String(
      Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, "0");
    let seconds = String(Math.floor((limitTime % (1000 * 60)) / 1000)).padStart(
      2,
      "0"
    );

    $countdown.innerHTML = `<h3>Faltan: ${days}días ${hours}horas ${minutes}minutos ${seconds}segundos</h3>`;

    if (limitTime < 0) {
      clearInterval(tempo);
      $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
    }
  }, 1000);
}
